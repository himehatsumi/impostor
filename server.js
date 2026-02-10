const express = require('express');
const http = require('http');
const path = require('path');
const cors = require('cors');
const { Server } = require('socket.io');
const { getRandomWord, getRandomWordFromList, generateImpostorClue } = require('./words/index');
const { generateSmartClue } = require('./words/associations');

const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const RATE_LIMITS = { createRoom: 5, joinRoom: 10, submitClue: 30, submitVote: 30 };
const reconnectGraceMs = 45 * 1000;
const rateLimitMap = new Map();

// Clean up rate limit map periodically to prevent memory leak
setInterval(() => {
  const now = Date.now();
  for (const [key, timestamps] of rateLimitMap.entries()) {
    const filtered = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
    if (filtered.length === 0) {
      rateLimitMap.delete(key);
    } else {
      rateLimitMap.set(key, filtered);
    }
  }
}, RATE_LIMIT_WINDOW_MS);

// Clean up old/abandoned rooms periodically
const ROOM_TIMEOUT_MS = 2 * 60 * 60 * 1000; // 2 hours
setInterval(() => {
  const now = Date.now();
  for (const [code, room] of rooms.entries()) {
    const allDisconnected = room.players.every(p => p.disconnected);
    const isOld = now - room.createdAt > ROOM_TIMEOUT_MS;
    if (allDisconnected || isOld) {
      // Clean up timers
      clearPhaseTimer(room);
      if (room.disconnectTimers) {
        Object.values(room.disconnectTimers).forEach(timer => clearTimeout(timer));
      }
      rooms.delete(code);
      console.log(`Cleaned up abandoned room: ${code}`);
    }
  }
}, 5 * 60 * 1000); // Check every 5 minutes

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
      category: 'all',
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
  
  // Clear disconnect timer for this player
  if (room.disconnectTimers && room.disconnectTimers[playerId]) {
    clearTimeout(room.disconnectTimers[playerId]);
    delete room.disconnectTimers[playerId];
  }
  
  // If room is empty, clean up all timers and delete room
  if (room.players.length === 0) {
    clearPhaseTimer(room);
    // Clear all remaining disconnect timers
    if (room.disconnectTimers) {
      Object.values(room.disconnectTimers).forEach(timer => clearTimeout(timer));
    }
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
      ...(room.options || { maxRounds: 3, clueTimeLimit: 0, voteTimeLimit: 0, category: 'all' }),
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

function sanitizeInput(input, maxLength = 100) {
  if (!input) return '';
  return String(input)
    .trim()
    .slice(0, maxLength)
    .replace(/[<>]/g, ''); // Basic XSS prevention
}

function submitClueForPlayer(room, playerId, clueText) {
  const player = room.players.find((p) => p.id === playerId && p.alive);
  if (!player || room.phase !== 'clue') return;

  if (!room.clues[player.id]) {
    room.clues[player.id] = [];
  }
  // Prevent multiple submissions per clue round.
  if (room.clues[player.id].length >= room.clueRound) return;

  const clue = sanitizeInput(clueText, 200);
  
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

function generateSmartBotClue(room, bot, clueRound) {
  const isImpostor = bot.id === room.impostorId;
  const { word, theme, category } = room.currentWordEntry || {};

  if (isImpostor) {
    // Advanced impostor strategy: Analyze other players' clues to blend in better
    const otherClues = [];
    Object.keys(room.clues).forEach((playerId) => {
      if (playerId !== bot.id && room.clues[playerId] && room.clues[playerId].length > 0) {
        otherClues.push(...room.clues[playerId]);
      }
    });

    // If other players have given clues, try to mimic their style
    if (otherClues.length > 0 && clueRound === 2) {
      const hasLetterClues = otherClues.some(c => c.toLowerCase().includes('starts') || c.toLowerCase().includes('ends'));
      const hasLengthClues = otherClues.some(c => c.toLowerCase().includes('letter'));
      const hasThemeClues = otherClues.some(c => c.length > 15);

      // Mimic the style of other players
      if (hasLetterClues && Math.random() > 0.5) {
        const randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
        return Math.random() > 0.5 ? `Starts with ${randomLetter}` : `Ends with ${randomLetter}`;
      }
      if (hasLengthClues && Math.random() > 0.6) {
        const randomLength = 5 + Math.floor(Math.random() * 8);
        return `${randomLength} letters`;
      }
    }

    // Impostor strategy: Give vague clues that sound plausible but don't reveal ignorance
    const vagueClues = [
      'You know this one',
      'Pretty obvious',
      'Everyone knows',
      'Super common',
      'Easy one',
      'Basic',
      'Simple',
      'Straightforward',
      'Clear choice',
      'No brainer',
    ];

    // Category-specific vague clues that sound more natural
    const categoryVagueClues = {
      food: ['Yummy', 'Delicious', 'Tastes good', 'Edible thing', 'You can eat it', 'Food item', 'Consumable'],
      animals: ['Living thing', 'Creature', 'Has life', 'Animal', 'Alive', 'Breathing', 'Wildlife'],
      nature: ['Outside', 'Natural', 'Outdoors', 'Environment', 'Earth thing', 'Nature'],
      videogames: ['Gamers know', 'Playable', 'Gaming', 'Video game', 'Digital fun', 'Console/PC'],
      music: ['Sounds nice', 'Musical', 'Audio', 'You can hear it', 'Rhythm', 'Melody'],
      memes: ['Internet thing', 'Online', 'Viral', 'Funny', 'Meme culture', 'Social media'],
      movies: ['On screen', 'Film', 'Cinema', 'Movie', 'Visual', 'Entertainment'],
      anime: ['Japanese', 'Animated', 'Anime', 'Manga related', 'Otaku knows', 'Eastern'],
      technology: ['Tech', 'Digital', 'Electronic', 'Modern', 'Computer thing', 'Innovation'],
      sports: ['Athletic', 'Physical', 'Sport', 'Competition', 'Active', 'Game'],
      objects: ['Thing', 'Object', 'Item', 'Physical', 'You can touch it', 'Everyday'],
      places: ['Location', 'Place', 'Destination', 'Geography', 'Area', 'Spot'],
      abstract: ['Concept', 'Idea', 'Abstract', 'Thought', 'Feeling', 'Mental'],
    };

    // Mix general and category-specific vague clues
    let cluePool = [...vagueClues];
    if (category && categoryVagueClues[category]) {
      cluePool = [...cluePool, ...categoryVagueClues[category]];
    }

    // Second round: be slightly more specific but still vague
    if (clueRound === 2 && category) {
      cluePool.push(`${category} related`);
      cluePool.push(`Type of ${category}`);
      cluePool.push(`In ${category}`);
      cluePool.push(`${category} thing`);
    }

    return cluePool[Math.floor(Math.random() * cluePool.length)];
  }

  // Crewmate strategy: Use smart clue generation with word associations
  if (!word || !theme) return 'Related';

  // Get all clues this bot has already given to avoid repetition
  const botPreviousClues = room.clues[bot.id] || [];
  
  // Try to use smart association-based clue
  const smartClue = generateSmartClue(word, category, theme, clueRound, botPreviousClues);
  if (smartClue) {
    return smartClue;
  }

  // Fallback to theme if smart clue generation fails
  return theme || 'Related';
}

function scheduleBotClues(room) {
  const currentClueRound = room.clueRound;
  const bots = room.players.filter((p) => p.isBot && p.alive && !p.disconnected);
  if (!bots.length) return;

  bots.forEach((bot, index) => {
    const delayMs = 1200 + index * 800 + Math.floor(Math.random() * 1200);
    setTimeout(() => {
      if (room.phase !== 'clue' || room.clueRound !== currentClueRound) return;

      const clue = generateSmartBotClue(room, bot, currentClueRound);
      submitClueForPlayer(room, bot.id, clue);
    }, delayMs);
  });
}

function analyzeSuspiciousClues(room) {
  // Advanced suspicion analysis system
  const suspicionScores = new Map();
  const alivePlayers = getAliveConnectedPlayers(room);
  
  // Define suspicious patterns
  const vagueWords = ['popular', 'classic', 'well-known', 'common', 'typical', 'standard', 
                      'familiar', 'recognizable', 'mainstream', 'related', 'thing', 'stuff',
                      'obvious', 'easy', 'simple', 'basic', 'everyone', 'super', 'pretty'];
  
  const specificIndicators = ['starts', 'ends', 'letters', 'letter', 'sound', 'vowel', 
                               'double', 'rhyme', 'begins', 'syllable'];
  
  alivePlayers.forEach((player) => {
    let suspicion = 0;
    const playerClues = room.clues[player.id] || [];
    
    // Track clue patterns
    let hasSpecificClue = false;
    let hasVagueClue = false;
    let totalClueLength = 0;
    
    playerClues.forEach((clue) => {
      const clueLower = clue.toLowerCase();
      const clueWords = clue.trim().split(/\s+/);
      totalClueLength += clue.length;
      
      // HIGH SUSPICION: Very vague/generic clues
      if (vagueWords.some(word => clueLower.includes(word))) {
        suspicion += 3;
        hasVagueClue = true;
      }
      
      // MEDIUM SUSPICION: Very short clues without specific info
      if (clueWords.length <= 2 && !specificIndicators.some(ind => clueLower.includes(ind))) {
        suspicion += 2;
      }
      
      // HIGH SUSPICION: Empty or useless clues
      if (!clue.trim() || clueLower === 'idk' || clueLower === 'dunno' || clueLower === '?') {
        suspicion += 5;
      }
      
      // MEDIUM SUSPICION: Category-only clues
      const categories = ['food', 'animal', 'nature', 'game', 'music', 'meme', 'movie', 'anime', 'tech', 'sport', 'object', 'place'];
      if (categories.some(cat => clueLower === cat || clueLower === `${cat}s` || clueLower === `${cat} thing`)) {
        suspicion += 2;
      }
      
      // MEDIUM SUSPICION: Contradictory clues between rounds
      if (playerClues.length === 2) {
        const firstClue = playerClues[0].toLowerCase();
        const secondClue = playerClues[1].toLowerCase();
        
        // Check for letter contradictions
        const firstHasLetter = firstClue.match(/starts with ([a-z])/i);
        const secondHasLetter = secondClue.match(/starts with ([a-z])/i);
        if (firstHasLetter && secondHasLetter && firstHasLetter[1] !== secondHasLetter[1]) {
          suspicion += 4; // Contradictory letters = very suspicious
        }
        
        // Check for length contradictions
        const firstHasLength = firstClue.match(/(\d+) letter/);
        const secondHasLength = secondClue.match(/(\d+) letter/);
        if (firstHasLength && secondHasLength && firstHasLength[1] !== secondHasLength[1]) {
          suspicion += 4; // Contradictory lengths = very suspicious
        }
      }
      
      // LOW SUSPICION: Overly helpful clues (might be impostor overcompensating)
      if (clueLower.match(/^[a-z]{3,}\.\.\.$/)) {
        // Giving away too much of the word
        suspicion += 1;
      }
    });
    
    // Reduce suspicion for players with specific clues
    playerClues.forEach((clue) => {
      const clueLower = clue.toLowerCase();
      
      // REDUCE: Specific indicators (letters, lengths, sounds)
      if (specificIndicators.some(ind => clueLower.includes(ind))) {
        suspicion = Math.max(0, suspicion - 3);
        hasSpecificClue = true;
      }
      
      // REDUCE: Long, detailed theme-based clues
      if (clue.length > 15 && !vagueWords.some(word => clueLower.includes(word))) {
        suspicion = Math.max(0, suspicion - 2);
      }
      
      // REDUCE: Clues with punctuation (shows effort/emotion)
      if (clue.includes('!') || clue.includes('?')) {
        suspicion = Math.max(0, suspicion - 1);
      }
    });
    
    // Pattern analysis: Impostor often gives vague first clue, then tries to blend in
    if (playerClues.length === 2 && hasVagueClue && hasSpecificClue) {
      suspicion += 2; // Suspicious pattern change
    }
    
    // Average clue length analysis
    if (playerClues.length > 0) {
      const avgLength = totalClueLength / playerClues.length;
      if (avgLength < 8) {
        suspicion += 1; // Very short average = suspicious
      }
    }
    
    suspicionScores.set(player.id, Math.max(0, suspicion));
  });
  
  return suspicionScores;
}

function scheduleBotVotes(room) {
  const bots = room.players.filter((p) => p.isBot && p.alive && !p.disconnected);
  if (!bots.length) return;

  const alivePlayers = getAliveConnectedPlayers(room);
  const suspicionScores = analyzeSuspiciousClues(room);

  bots.forEach((bot, index) => {
    const delayMs = 1500 + index * 700 + Math.floor(Math.random() * 1200);
    setTimeout(() => {
      if (room.phase !== 'voting') return;

      const isImpostorBot = bot.id === room.impostorId;
      const possibleTargets = alivePlayers.filter((p) => p.id !== bot.id);
      
      if (!possibleTargets.length) {
        submitVoteForPlayer(room, bot.id, 'skip');
        return;
      }

      let targetId = 'skip';

      if (isImpostorBot) {
        // Advanced impostor bot strategy: Strategic voting to survive
        
        // Find who's voting for the impostor (if any votes are visible)
        const votingForImpostor = alivePlayers.filter((p) => room.votes[p.id] === bot.id);
        
        // Filter out self from possible targets (impostor shouldn't vote for themselves)
        const nonSelfTargets = possibleTargets.filter(p => p.id !== bot.id);
        
        if (nonSelfTargets.length === 0) {
          // If only self is left, skip
          targetId = 'skip';
        } else {
          // Priority 1: Vote for someone who's voting for you (self-defense)
          if (votingForImpostor.length > 0 && Math.random() > 0.2) {
            targetId = votingForImpostor[Math.floor(Math.random() * votingForImpostor.length)].id;
          } else {
            // Priority 2: Vote for players with very specific clues (deflection)
            const specificCluePlayers = nonSelfTargets.filter((p) => {
              const clues = room.clues[p.id] || [];
              return clues.some(c => 
                c.includes('starts with') || 
                c.includes('ends with') || 
                c.includes('letters') ||
                c.match(/^[a-z]{3,}\.\.\.$/i) // Partial word reveals
              );
            });
            
            if (specificCluePlayers.length > 0 && Math.random() > 0.25) {
              // 75% chance to vote for someone with specific clues
              targetId = specificCluePlayers[Math.floor(Math.random() * specificCluePlayers.length)].id;
            } else {
              // Priority 3: Vote for non-bot players (humans are easier to frame)
              const humanTargets = nonSelfTargets.filter(p => !p.isBot);
              if (humanTargets.length > 0 && Math.random() > 0.3) {
                targetId = humanTargets[Math.floor(Math.random() * humanTargets.length)].id;
              } else {
                // Priority 4: Random vote or skip to blend in
                if (Math.random() > 0.35) {
                  targetId = nonSelfTargets[Math.floor(Math.random() * nonSelfTargets.length)].id;
                } else {
                  targetId = 'skip';
                }
              }
            }
          }
        }
      } else {
        // Advanced crewmate bot strategy: Smart voting based on multiple factors
        const targetScores = possibleTargets.map((p) => ({
          player: p,
          suspicion: suspicionScores.get(p.id) || 0,
        }));

        // Sort by suspicion (highest first)
        targetScores.sort((a, b) => b.suspicion - a.suspicion);

        const highestSuspicion = targetScores[0].suspicion;
        const secondHighestSuspicion = targetScores.length > 1 ? targetScores[1].suspicion : 0;

        // Advanced voting logic based on suspicion levels
        const rand = Math.random();
        
        if (highestSuspicion >= 5) {
          // Very high suspicion: 85% vote for them
          if (rand > 0.15) {
            targetId = targetScores[0].player.id;
          } else {
            targetId = 'skip';
          }
        } else if (highestSuspicion >= 3) {
          // High suspicion: 70% vote for them, 20% for second, 10% skip
          if (rand > 0.3) {
            targetId = targetScores[0].player.id;
          } else if (targetScores.length > 1 && rand > 0.1) {
            targetId = targetScores[1].player.id;
          } else {
            targetId = 'skip';
          }
        } else if (highestSuspicion >= 1) {
          // Medium suspicion: 50% vote for them, 30% for second, 20% skip
          if (rand > 0.5) {
            targetId = targetScores[0].player.id;
          } else if (targetScores.length > 1 && secondHighestSuspicion >= 1 && rand > 0.2) {
            targetId = targetScores[1].player.id;
          } else {
            targetId = 'skip';
          }
        } else {
          // Low suspicion overall: 30% random vote, 70% skip
          if (rand > 0.7) {
            targetId = possibleTargets[Math.floor(Math.random() * possibleTargets.length)].id;
          } else {
            targetId = 'skip';
          }
        }

        // Special case: If it's the last round and no clear suspect, vote randomly
        if (room.roundNumber >= room.maxRounds && highestSuspicion < 2 && Math.random() > 0.5) {
          targetId = possibleTargets[Math.floor(Math.random() * possibleTargets.length)].id;
        }
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
        ? room.options.customWords.filter(w => w && w.trim()) // Filter empty strings
        : null;

    const category = room.options && room.options.category ? room.options.category : 'all';

    room.currentWordEntry = customWords && customWords.length > 0
      ? getRandomWordFromList(customWords) || getRandomWord(category)
      : getRandomWord(category);
  }

  // Always generate a new impostor clue from the SAME word
  room.impostorClue = generateImpostorClue(room.currentWordEntry);

  const alivePlayers = getAliveConnectedPlayers(room);
  if (!room.impostorId) {
    // Anti-repetition: if someone was impostor last game, try to pick someone else
    const lastImpostorId = room.lastImpostorId;
    let candidates = alivePlayers;
    
    // If there are multiple players and someone was impostor last time, prefer others
    if (lastImpostorId && alivePlayers.length > 1) {
      const others = alivePlayers.filter(p => p.id !== lastImpostorId);
      // 80% chance to pick someone else, 20% chance they can be impostor again
      if (others.length > 0 && Math.random() < 0.8) {
        candidates = others;
      }
    }
    
    const impostor = candidates[Math.floor(Math.random() * candidates.length)];
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
  
  // Save the impostor ID for anti-repetition in next game
  room.lastImpostorId = room.impostorId;

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
  // Wrap all handlers in try-catch to prevent crashes
  const safeHandler = (handler) => {
    return (...args) => {
      try {
        handler(...args);
      } catch (error) {
        console.error('Error in socket handler:', error);
        socket.emit('error', { message: 'An error occurred. Please try again.' });
      }
    };
  };

  socket.on('createRoom', safeHandler(({ nickname }, callback) => {
    if (!checkRateLimit(socket.id, 'createRoom')) {
      if (typeof callback === 'function') callback({ ok: false, error: 'Too many rooms created. Please wait.' });
      socket.emit('rateLimit', 'Too many rooms created. Please wait.');
      return;
    }
    const name = sanitizeInput(nickname, 20) || 'Host';
    const room = createRoom(socket, name);
    if (typeof callback === 'function') {
      callback({ ok: true, roomCode: room.code, playerId: socket.id });
    }
    broadcastRoomState(room);
  }));

  socket.on('joinRoom', safeHandler(({ nickname, roomCode }, callback) => {
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

    const name = sanitizeInput(nickname, 20) || `Player ${room.players.length + 1}`;
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
  }));

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

    room.options = room.options || { maxRounds: 3, clueTimeLimit: 0, voteTimeLimit: 0, customWords: [], category: 'all' };
    if (typeof options.maxRounds === 'number' && options.maxRounds >= 1 && options.maxRounds <= 20) {
      room.options.maxRounds = options.maxRounds;
    }
    if (typeof options.category === 'string') {
      room.options.category = sanitizeInput(options.category, 50);
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
        .map((w) => sanitizeInput(w, 100)) // Sanitize each word
        .filter(w => w && w.trim()); // Filter empty strings and whitespace-only
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
    
    // Prevent voting for yourself (illogical)
    if (targetId === player.id) {
      const socket = io.sockets.sockets.get(player.id);
      if (socket) {
        socket.emit('errorMessage', 'You cannot vote for yourself!');
      }
      return;
    }
    
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
    
    // Normalize strings: remove spaces, punctuation, and special characters
    const normalizeString = (str) => {
      return str
        .replace(/[^a-z0-9]/gi, '') // Remove all non-alphanumeric characters
        .toLowerCase();
    };
    
    const normalizedGuess = normalizeString(guess);
    const normalizedActual = normalizeString(actual);
    
    // Check for exact match (case-insensitive)
    const exactMatch = guess === actual;
    
    // Check for normalized match (handles spacing, punctuation, casing)
    const normalizedMatch = normalizedGuess === normalizedActual;
    
    // Check if guess is a significant substring (at least 70% of the word)
    const substringMatch = normalizedActual.includes(normalizedGuess) && 
                          normalizedGuess.length >= Math.ceil(normalizedActual.length * 0.7);
    
    // Check if actual word is contained in the guess (handles extra words)
    const containsMatch = normalizedGuess.includes(normalizedActual) &&
                         normalizedActual.length >= 3; // Avoid matching very short words
    
    clearPhaseTimer(room);
    
    if (exactMatch || normalizedMatch || substringMatch || containsMatch) {
      endGame(room, true);
    } else {
      endGame(room, false);
    }
  });

  socket.on('disconnect', () => {
    // Clean up rate limit entries for this socket
    for (const key of rateLimitMap.keys()) {
      if (key.startsWith(socket.id + ':')) {
        rateLimitMap.delete(key);
      }
    }
    
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

// Prevent crashes from unhandled errors
process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
  // Don't exit, just log it
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  // Don't exit, just log it
});

