const express = require('express');
const http = require('http');
const path = require('path');
const cors = require('cors');
const { Server } = require('socket.io');
const { getRandomWord, getRandomWordFromList, generateImpostorClue } = require('./words');

const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const RATE_LIMITS = { createRoom: 5, joinRoom: 10, submitClue: 30, submitVote: 30 };
const reconnectGraceMs = 45 * 1000;
const rateLimitMap = new Map();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

// In-memory game state. For production, replace with a database or state service.
const rooms = new Map();

// Utility to create a short room code like ABCD.
function generateRoomCode() {
  const letters = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 4; i += 1) {
    code += letters[Math.floor(Math.random() * letters.length)];
  }
  return code;
}

function getRoom(roomCode) {
  return rooms.get(roomCode);
}

function checkRateLimit(socketId, action) {
  const key = `${socketId}:${action}`;
  const now = Date.now();
  let list = rateLimitMap.get(key) || [];
  list = list.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  const limit = RATE_LIMITS[action];
  if (limit && list.length >= limit) return false;
  list.push(now);
  rateLimitMap.set(key, list);
  return true;
}

function createRoom(hostSocket, nickname) {
  let code;
  do {
    code = generateRoomCode();
  } while (rooms.has(code));

  const hostPlayer = {
    id: hostSocket.id,
    name: nickname || 'Host',
    isHost: true,
    isImpostor: false,
    isBot: false,
    alive: true,
    score: 0,
  };

  const room = {
    code,
    hostId: hostSocket.id,
    players: [hostPlayer],
    phase: 'lobby', // lobby | clue | voting | reveal | gameover
    roundNumber: 0,
    maxRounds: 3,
    clueRound: 0,
    currentWordEntry: null,
    impostorId: null,
    impostorClue: null,
    clues: {},
    votes: {},
    acks: {},
    createdAt: Date.now(),
    options: {
      maxRounds: 3,
      clueTimeLimit: 0,
      voteTimeLimit: 0,
      customWords: [],
    },
    phaseTimerRef: null,
    disconnectTimers: {},
  };

  rooms.set(code, room);
  hostSocket.join(code);

  return room;
}

function broadcastRoomState(room) {
  io.to(room.code).emit('roomState', serializeRoomForClients(room));
}

function getAliveConnectedPlayers(room) {
  return room.players.filter((p) => p.alive && !p.disconnected);
}

function removePlayerFromRoom(room, playerId, reason) {
  const idx = room.players.findIndex((p) => p.id === playerId);
  if (idx === -1) return;
  const [removed] = room.players.splice(idx, 1);
  if (room.disconnectTimers && room.disconnectTimers[playerId]) {
    clearTimeout(room.disconnectTimers[playerId]);
    delete room.disconnectTimers[playerId];
  }
  if (room.players.length === 0) {
    rooms.delete(room.code);
    return;
  }
  if (removed.isHost) {
    room.players[0].isHost = true;
    room.hostId = room.players[0].id;
  }
  broadcastRoomState(room);
  const sock = io.sockets.sockets.get(playerId);
  if (sock && reason === 'kick') sock.emit('youWereKicked');
  if (sock && reason === 'leave') sock.emit('youLeft');
}

function clearPhaseTimer(room) {
  if (room.phaseTimerRef) {
    clearTimeout(room.phaseTimerRef);
    room.phaseTimerRef = null;
  }
}

function startCluePhaseTimer(room) {
  clearPhaseTimer(room);
  const limit = (room.options && room.options.clueTimeLimit) || 0;
  if (limit <= 0) return;

  const endAt = Date.now() + limit * 1000;
  io.to(room.code).emit('phaseTimer', { phase: 'clue', endAt, durationSeconds: limit });

  room.phaseTimerRef = setTimeout(() => {
    room.phaseTimerRef = null;
    if (room.phase !== 'clue') return;

    const alivePlayers = getAliveConnectedPlayers(room);
    alivePlayers.forEach((p) => {
      if (!room.clues[p.id]) room.clues[p.id] = [];
      while (room.clues[p.id].length < room.clueRound) {
        room.clues[p.id].push('');
      }
    });

    io.to(room.code).emit('cluesUpdate', {
      clues: buildCluesForClients(room),
      roundNumber: room.roundNumber,
      clueRound: room.clueRound,
    });
    advanceClueRoundOrVoting(room);
  }, limit * 1000);
}

function startVotePhaseTimer(room) {
  clearPhaseTimer(room);
  const limit = (room.options && room.options.voteTimeLimit) || 0;
  if (limit <= 0) return;

  const endAt = Date.now() + limit * 1000;
  io.to(room.code).emit('phaseTimer', { phase: 'voting', endAt, durationSeconds: limit });

  room.phaseTimerRef = setTimeout(() => {
    room.phaseTimerRef = null;
    if (room.phase !== 'voting') return;

    const alivePlayers = getAliveConnectedPlayers(room);
    alivePlayers.forEach((p) => {
      if (room.votes[p.id] === undefined) room.votes[p.id] = 'skip';
    });

    const eliminated = tallyVotes(room);
    if (!eliminated) {
      if (room.roundNumber >= room.maxRounds) {
        endGame(room, true);
      } else {
        startNewRound(room);
      }
      return;
    }
    if (eliminated.id === room.impostorId) {
      endGame(room, false);
      return;
    }
    if (room.roundNumber >= room.maxRounds) {
      endGame(room, true);
    } else {
      startNewRound(room);
    }
  }, limit * 1000);
}

function serializeRoomForClients(room) {
  return {
    code: room.code,
    phase: room.phase,
    roundNumber: room.roundNumber,
    maxRounds: room.maxRounds,
    clueRound: room.clueRound,
    players: room.players.map((p) => ({
      id: p.id,
      name: p.name,
      isHost: p.isHost,
      alive: p.alive,
      score: p.score,
      isBot: !!p.isBot,
      disconnected: !!p.disconnected,
    })),
    options: {
      ...(room.options || { maxRounds: 3, clueTimeLimit: 0, voteTimeLimit: 0 }),
      customWords: Array.isArray(room.options?.customWords)
        ? room.options.customWords.join('\n')
        : (room.options?.customWords || ''),
    },
  };
}

// --- Bot / local-test helpers ------------------------------------------------

function buildCluesForClients(room) {
  return room.players.map((p) => ({
    playerId: p.id,
    name: p.name,
    alive: p.alive,
    clues: room.clues[p.id] || [],
  }));
}

function sendSecretInfoForCurrentRound(room) {
  room.players.forEach((player) => {
    const socket = io.sockets.sockets.get(player.id);
    if (!socket) return;
    if (player.id === room.impostorId) {
      socket.emit('secretInfo', {
        role: 'impostor',
        clue: room.impostorClue,
        roundNumber: room.roundNumber,
        clueRound: room.clueRound,
      });
    } else {
      socket.emit('secretInfo', {
        role: 'crewmate',
        word: room.currentWordEntry.word,
        theme: room.currentWordEntry.theme,
        roundNumber: room.roundNumber,
        clueRound: room.clueRound,
      });
    }
  });
}

function addBotPlayer(room, label) {
  const botId = `bot-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`;
  const botPlayer = {
    id: botId,
    name: label,
    isHost: false,
    isImpostor: false,
    isBot: true,
    alive: true,
    score: 0,
  };
  room.players.push(botPlayer);
  return botPlayer;
}

function ensureMinimumPlayersWithBots(room, minPlayers) {
  while (room.players.filter((p) => !p.disconnected).length < minPlayers && room.players.length < 10) {
    const index = room.players.length + 1;
    addBotPlayer(room, `Bot ${index}`);
  }
}

function submitClueForPlayer(room, playerId, clueText) {
  const player = room.players.find((p) => p.id === playerId && p.alive);
  if (!player || room.phase !== 'clue') return;

  if (!room.clues[player.id]) {
    room.clues[player.id] = [];
  }
  // Prevent multiple submissions per clue round.
  if (room.clues[player.id].length >= room.clueRound) return;

  const clue = String(clueText || '').trim();
  
  // Prevent submitting the secret word as a clue (case-insensitive)
  if (room.currentWordEntry && room.currentWordEntry.word) {
    const secretWord = room.currentWordEntry.word.toLowerCase();
    const submittedClue = clue.toLowerCase();
    
    if (submittedClue === secretWord) {
      // Send error message to the player who tried to submit the word
      const socket = io.sockets.sockets.get(playerId);
      if (socket) {
        socket.emit('errorMessage', 'You cannot submit the secret word as a clue!');
      }
      return;
    }
  }

  room.clues[player.id].push(clue);

  // Broadcast updated clues to everyone so all players can see
  // each other's submissions as they come in.
  io.to(room.code).emit('cluesUpdate', {
    clues: buildCluesForClients(room),
    roundNumber: room.roundNumber,
    clueRound: room.clueRound,
  });

  advanceClueRoundOrVoting(room);
}

function submitVoteForPlayer(room, voterId, targetId) {
  const player = room.players.find((p) => p.id === voterId && p.alive);
  if (!player || room.phase !== 'voting') return;

  room.votes[player.id] = targetId || 'skip';

  // Broadcast live voting information so clients can show
  // who each player has voted for during the voting phase.
  const votesForClients = room.players.map((p) => {
    const vTargetId = room.votes[p.id];
    const target =
      vTargetId && vTargetId !== 'skip'
        ? room.players.find((x) => x.id === vTargetId)
        : null;
    return {
      voterId: p.id,
      voterName: p.name,
      targetId: vTargetId || null,
      targetName: vTargetId === 'skip' ? 'Skip' : target ? target.name : null,
    };
  });

  io.to(room.code).emit('votesUpdate', {
    votes: votesForClients,
  });

  const alivePlayers = getAliveConnectedPlayers(room);
  const allVoted = alivePlayers.every((p) => room.votes[p.id]);
  if (!allVoted) return;

  const eliminated = tallyVotes(room);
  if (!eliminated) {
    // No elimination: go to next round or impostor wins by timeout.
    if (room.roundNumber >= room.maxRounds) {
      endGame(room, true);
    } else {
      startNewRound(room);
    }
    return;
  }

  // Check if impostor was eliminated.
  if (eliminated.id === room.impostorId) {
    endGame(room, false);
    return;
  }

  // Impostor still alive.
  if (room.roundNumber >= room.maxRounds) {
    endGame(room, true);
  } else {
    startNewRound(room);
  }
}

function scheduleBotClues(room) {
  const currentClueRound = room.clueRound;
  const bots = room.players.filter((p) => p.isBot && p.alive && !p.disconnected);
  if (!bots.length) return;

  bots.forEach((bot, index) => {
    const delayMs = 1200 + index * 800 + Math.floor(Math.random() * 1200);
    setTimeout(() => {
      if (room.phase !== 'clue' || room.clueRound !== currentClueRound) return;

      let clue = '';
      if (bot.id === room.impostorId) {
        // Impostor bot: vague category-based clue.
        clue = room.impostorClue || 'Something related but not obvious.';
      } else if (room.currentWordEntry) {
        const { theme, category } = room.currentWordEntry;
        if (category) {
          clue = `Think of ${category} things.`;
        } else if (theme) {
          clue = `Related to: ${theme}`;
        } else {
          clue = 'Close to the hidden word.';
        }
      } else {
        clue = 'Related to the secret word.';
      }

      submitClueForPlayer(room, bot.id, clue);
    }, delayMs);
  });
}

function scheduleBotVotes(room) {
  const bots = room.players.filter((p) => p.isBot && p.alive && !p.disconnected);
  if (!bots.length) return;

  const alivePlayers = getAliveConnectedPlayers(room);

  bots.forEach((bot, index) => {
    // Small delay before bots cast their votes.
    const delayMs = 1500 + index * 700 + Math.floor(Math.random() * 1200);
    setTimeout(() => {
      if (room.phase !== 'voting') return;

      // Simple heuristic: randomly pick another (alive) player.
      const possibleTargets = alivePlayers.filter((p) => p.id !== bot.id);
      let targetId = 'skip';
      if (possibleTargets.length) {
        const pick = possibleTargets[Math.floor(Math.random() * possibleTargets.length)];
        targetId = pick.id;
      }

      submitVoteForPlayer(room, bot.id, targetId);
    }, delayMs);
  });
}

function startNewRound(room) {
  clearPhaseTimer(room);

  room.roundNumber += 1;
  room.clueRound = 1;
  room.phase = 'clue';
  room.clues = {};
  room.votes = {};
  room.acks = {};

if (!room.currentWordEntry) {
  const customWords =
    room.options &&
    Array.isArray(room.options.customWords) &&
    room.options.customWords.length >= 1
      ? room.options.customWords
      : null;

  room.currentWordEntry = customWords
    ? getRandomWordFromList(customWords) || getRandomWord()
    : getRandomWord();
}

// Always generate a new impostor clue from the SAME word
room.impostorClue = generateImpostorClue(room.currentWordEntry);

  

  const alivePlayers = getAliveConnectedPlayers(room);
  if (!room.impostorId) {
    const impostor = alivePlayers[Math.floor(Math.random() * alivePlayers.length)];
    room.impostorId = impostor.id;
  }
  room.impostorClue = generateImpostorClue(room.currentWordEntry);

  room.players.forEach((p) => {
    p.isImpostor = p.id === room.impostorId;
  });

  // Round is ready (word + impostor + clues prepared); then send secret info.
  room.maxRounds = (room.options && room.options.maxRounds) || 3;
  io.to(room.code).emit('roundStart', {
    roundNumber: room.roundNumber,
    maxRounds: room.maxRounds,
  });
  broadcastRoomState(room);

  sendSecretInfoForCurrentRound(room);
  broadcastRoomState(room);

  startCluePhaseTimer(room);
  scheduleBotClues(room);
}

function maybeAdvanceFromAck(room) {
  if (room.phase !== 'ack') return;
  const alivePlayers = getAliveConnectedPlayers(room);
  const allAcked = alivePlayers.every((p) => room.acks && room.acks[p.id]);
  if (!allAcked) return;

  room.clueRound = 2;
  room.phase = 'clue';

  sendSecretInfoForCurrentRound(room);
  broadcastRoomState(room);

  startCluePhaseTimer(room);
  scheduleBotClues(room);
}

function advanceClueRoundOrVoting(room) {
  const alivePlayers = getAliveConnectedPlayers(room);
  const allSubmitted = alivePlayers.every(
    (p) => room.clues[p.id] && room.clues[p.id].length >= room.clueRound,
  );
  if (!allSubmitted) return;

  clearPhaseTimer(room);

  if (room.clueRound < 2) {
    // After the first round of clues, pause for acknowledgement
    // so everyone has time to review before moving on.
    room.phase = 'ack';
    room.acks = {};

    // Bots auto-acknowledge.
    room.players.forEach((p) => {
      if (p.isBot && p.alive) {
        room.acks[p.id] = true;
      }
    });

    io.to(room.code).emit('awaitAck', {
      clues: buildCluesForClients(room),
      roundNumber: room.roundNumber,
      clueRound: room.clueRound,
    });

    broadcastRoomState(room);

    // In case only bots are alive, this will advance immediately.
    maybeAdvanceFromAck(room);
  } else {
    room.phase = 'voting';
    room.votes = {};

    const cluesForClients = buildCluesForClients(room);

    io.to(room.code).emit('startVoting', {
      clues: cluesForClients,
      roundNumber: room.roundNumber,
    });

    broadcastRoomState(room);

    startVotePhaseTimer(room);
    scheduleBotVotes(room);
  }
}

function tallyVotes(room) {
  const alivePlayers = getAliveConnectedPlayers(room);
  const totalVoters = alivePlayers.length;
  const voteCounts = new Map();
  let skipCount = 0;

  Object.values(room.votes).forEach((targetId) => {
    if (targetId === 'skip') {
      skipCount += 1;
      return;
    }
    voteCounts.set(targetId, (voteCounts.get(targetId) || 0) + 1);
  });

  let topTarget = null;
  let topCount = 0;
  voteCounts.forEach((count, targetId) => {
    if (count > topCount) {
      topCount = count;
      topTarget = targetId;
    } else if (count === topCount) {
      // tie
      topTarget = null;
    }
  });

  // If "skip" has more than half of the votes, or if there is
  // a tie for the top target (topTarget is null), nobody dies.
  if (!topTarget || skipCount > totalVoters / 2) {
    io.to(room.code).emit('votingResult', {
      eliminatedId: null,
      reason: 'no_majority_or_skip',
    });
    return null;
  }

  const eliminated = room.players.find((p) => p.id === topTarget);
  if (eliminated) {
    eliminated.alive = false;
  }

  io.to(room.code).emit('votingResult', {
    eliminatedId: eliminated ? eliminated.id : null,
    reason: 'voted_out',
  });

  return eliminated;
}

function endGame(room, impostorWins) {
  clearPhaseTimer(room);
  room.phase = 'gameover';

  // Simple score rule: each surviving winner gets +1.
  room.players.forEach((p) => {
    const isImpostor = p.id === room.impostorId;
    const isWinner = impostorWins ? isImpostor : !isImpostor;
    if (isWinner && p.alive) {
      p.score += 1;
    }
  });

  io.to(room.code).emit('gameOver', {
    impostorId: room.impostorId,
    word: room.currentWordEntry ? room.currentWordEntry.word : null,
    theme: room.currentWordEntry ? room.currentWordEntry.theme : null,
    impostorClue: room.impostorClue,
    impostorWins,
  });

  broadcastRoomState(room);
}

io.on('connection', (socket) => {
  socket.on('createRoom', ({ nickname }, callback) => {
    if (!checkRateLimit(socket.id, 'createRoom')) {
      if (typeof callback === 'function') callback({ ok: false, error: 'Too many rooms created. Please wait.' });
      socket.emit('rateLimit', 'Too many rooms created. Please wait.');
      return;
    }
    const name = (nickname || '').trim() || 'Host';
    const room = createRoom(socket, name);
    if (typeof callback === 'function') {
      callback({ ok: true, roomCode: room.code, playerId: socket.id });
    }
    broadcastRoomState(room);
  });

  socket.on('joinRoom', ({ nickname, roomCode }, callback) => {
    if (!checkRateLimit(socket.id, 'joinRoom')) {
      if (typeof callback === 'function') callback({ ok: false, error: 'Too many join attempts. Please wait.' });
      socket.emit('rateLimit', 'Too many join attempts. Please wait.');
      return;
    }
    const code = String(roomCode || '').toUpperCase();
    const room = getRoom(code);
    if (!room) {
      if (typeof callback === 'function') callback({ ok: false, error: 'Room not found.' });
      return;
    }

    if (room.phase !== 'lobby') {
      if (typeof callback === 'function') callback({ ok: false, error: 'Game already started.' });
      return;
    }

    const name = (nickname || '').trim() || `Player ${room.players.length + 1}`;
    const nameLower = name.toLowerCase();

    const disconnectedPlayer = room.players.find(
      (p) => p.name.toLowerCase() === nameLower && p.disconnected,
    );
    if (disconnectedPlayer) {
      if (room.disconnectTimers[disconnectedPlayer.id]) {
        clearTimeout(room.disconnectTimers[disconnectedPlayer.id]);
        delete room.disconnectTimers[disconnectedPlayer.id];
      }
      disconnectedPlayer.id = socket.id;
      disconnectedPlayer.disconnected = false;
      disconnectedPlayer.disconnectedAt = undefined;
      socket.join(code);
      if (typeof callback === 'function') {
        callback({ ok: true, roomCode: room.code, playerId: socket.id, rejoined: true });
      }
      broadcastRoomState(room);
      return;
    }

    if (room.players.filter((p) => !p.disconnected).length >= 10) {
      if (typeof callback === 'function') callback({ ok: false, error: 'Room is full (max 10 players).' });
      return;
    }

    const nameTaken = room.players.some(
      (p) => !p.disconnected && p.name.toLowerCase() === nameLower,
    );
    if (nameTaken) {
      if (typeof callback === 'function') {
        callback({ ok: false, error: 'That name is already taken in this room.' });
      }
      return;
    }

    const newPlayer = {
      id: socket.id,
      name,
      isHost: false,
      isImpostor: false,
      isBot: false,
      alive: true,
      score: 0,
    };
    room.players.push(newPlayer);
    socket.join(code);

    if (typeof callback === 'function') {
      callback({ ok: true, roomCode: room.code, playerId: socket.id });
    }

    broadcastRoomState(room);
  });

  socket.on('startGame', ({ roomCode }) => {
    const room = getRoom(roomCode);
    if (!room) return;
    const player = room.players.find((p) => p.id === socket.id);
    if (!player || !player.isHost) return;

    if (room.players.filter((p) => !p.disconnected).length < 3) {
      ensureMinimumPlayersWithBots(room, 3);
    }

    // Full reset: scores, deaths, and all round state for a new game.
    room.phase = 'clue';
    room.roundNumber = 0;
    room.clueRound = 0;
    room.clues = {};
    room.votes = {};
    room.acks = {};
    room.currentWordEntry = null;
    room.impostorId = null;
    room.impostorClue = null;
    clearPhaseTimer(room);
    room.players.forEach((p) => {
      p.alive = true;
      p.isImpostor = false;
      p.score = 0;
    });
    room.maxRounds = (room.options && room.options.maxRounds) || 3;

    startNewRound(room);
  });

  socket.on('startGameWithBots', ({ roomCode, minPlayers = 3 }) => {
    const room = getRoom(roomCode);
    if (!room) return;
    const player = room.players.find((p) => p.id === socket.id);
    if (!player || !player.isHost) return;

    ensureMinimumPlayersWithBots(room, Math.max(3, Math.min(minPlayers, 10)));

    room.phase = 'clue';
    room.roundNumber = 0;
    room.clueRound = 0;
    room.clues = {};
    room.votes = {};
    room.acks = {};
    room.currentWordEntry = null;
    room.impostorId = null;
    room.impostorClue = null;
    clearPhaseTimer(room);
    room.players.forEach((p) => {
      p.alive = true;
      p.isImpostor = false;
      p.score = 0;
    });
    room.maxRounds = (room.options && room.options.maxRounds) || 3;

    startNewRound(room);
    broadcastRoomState(room);
  });

  socket.on('setRoomOptions', ({ roomCode, options }) => {
    const room = getRoom(roomCode);
    if (!room) return;
    const player = room.players.find((p) => p.id === socket.id);
    if (!player || !player.isHost || room.phase !== 'lobby') return;

    room.options = room.options || { maxRounds: 3, clueTimeLimit: 0, voteTimeLimit: 0, customWords: [] };
    if (typeof options.maxRounds === 'number' && options.maxRounds >= 1 && options.maxRounds <= 10) {
      room.options.maxRounds = options.maxRounds;
    }
    if (typeof options.clueTimeLimit === 'number' && options.clueTimeLimit >= 0 && options.clueTimeLimit <= 300) {
      room.options.clueTimeLimit = options.clueTimeLimit;
    }
    if (typeof options.voteTimeLimit === 'number' && options.voteTimeLimit >= 0 && options.voteTimeLimit <= 120) {
      room.options.voteTimeLimit = options.voteTimeLimit;
    }
    if (options.customWords !== undefined) {
      const raw = typeof options.customWords === 'string' ? options.customWords : String(options.customWords || '');
      room.options.customWords = raw
        .split(/[,\n]+/)
        .map((w) => w.trim())
        .filter(Boolean);
    }
    broadcastRoomState(room);
  });

  socket.on('leaveRoom', ({ roomCode }) => {
    const room = getRoom(roomCode);
    if (!room) return;
    const player = room.players.find((p) => p.id === socket.id);
    if (!player) return;
    removePlayerFromRoom(room, socket.id, 'leave');
  });

  socket.on('kickPlayer', ({ roomCode, targetId }) => {
    const room = getRoom(roomCode);
    if (!room) return;
    const host = room.players.find((p) => p.id === socket.id);
    const target = room.players.find((p) => p.id === targetId);
    if (!host || !host.isHost || !target || target.isBot) return;
    removePlayerFromRoom(room, targetId, 'kick');
  });

  socket.on('reportPlayer', ({ roomCode, targetId }) => {
    const room = getRoom(roomCode);
    if (!room) return;
    const reporter = room.players.find((p) => p.id === socket.id);
    const target = room.players.find((p) => p.id === targetId);
    if (!reporter || !target) return;
    // eslint-disable-next-line no-console
    console.log(`[Report] Room ${roomCode} – ${reporter.name} reported ${target.name} (${targetId})`);
  });

  socket.on('submitClue', ({ roomCode, clueText }) => {
    if (!checkRateLimit(socket.id, 'submitClue')) {
      socket.emit('rateLimit', 'Too many submissions. Please wait.');
      return;
    }
    const room = getRoom(roomCode);
    if (!room || room.phase !== 'clue') return;
    const player = room.players.find((p) => p.id === socket.id && p.alive);
    if (!player) return;

    submitClueForPlayer(room, player.id, clueText);
  });

  socket.on('ackClues', ({ roomCode }) => {
    const room = getRoom(roomCode);
    if (!room || room.phase !== 'ack') return;
    const player = room.players.find((p) => p.id === socket.id && p.alive);
    if (!player) return;

    room.acks = room.acks || {};
    room.acks[player.id] = true;

    maybeAdvanceFromAck(room);
  });

  socket.on('submitVote', ({ roomCode, targetId }) => {
    if (!checkRateLimit(socket.id, 'submitVote')) {
      socket.emit('rateLimit', 'Too many votes. Please wait.');
      return;
    }
    const room = getRoom(roomCode);
    if (!room || room.phase !== 'voting') return;
    const player = room.players.find((p) => p.id === socket.id && p.alive);
    if (!player) return;
    submitVoteForPlayer(room, player.id, targetId);
  });

  socket.on('requestRoomState', ({ roomCode }) => {
    const room = getRoom(roomCode);
    if (!room) return;
    socket.emit('roomState', serializeRoomForClients(room));
  });

  socket.on('impostorGuessWord', ({ roomCode, word }) => {
    const room = getRoom(roomCode);
    if (!room) return;
    if (room.phase !== 'clue' && room.phase !== 'ack' && room.phase !== 'voting') return;
    const player = room.players.find((p) => p.id === socket.id && p.alive);
    if (!player || player.id !== room.impostorId) return;
    if (!room.currentWordEntry || !room.currentWordEntry.word) return;

    const guess = String(word || '').trim().toLowerCase();
    const actual = room.currentWordEntry.word.trim().toLowerCase();
    clearPhaseTimer(room);
    if (guess === actual) {
      endGame(room, true);
    } else {
      endGame(room, false);
    }
  });

  socket.on('disconnect', () => {
    rooms.forEach((room) => {
      const player = room.players.find((p) => p.id === socket.id);
      if (!player) return;
      if (player.isBot) {
        removePlayerFromRoom(room, socket.id, null);
        return;
      }
      player.disconnected = true;
      player.disconnectedAt = Date.now();
      room.disconnectTimers = room.disconnectTimers || {};
      room.disconnectTimers[socket.id] = setTimeout(() => {
        removePlayerFromRoom(room, socket.id, null);
      }, reconnectGraceMs);
      broadcastRoomState(room);
    });
  });
});

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Impostor game server listening on port ${PORT}`);
});

