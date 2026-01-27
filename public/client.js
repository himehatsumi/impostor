// Simple front-end controller for the Impostor game.
// Customize UI text and layout here.

const socket = io();

let socketConnected = false;

let state = {
  roomCode: null,
  playerId: null,
  phase: 'lobby',
  roundNumber: 0,
  clueRound: 0,
  players: [],
  clues: [],
  votes: [],
  role: null,
  secretWord: null,
  secretTheme: null,
  impostorClue: null,
};

// Elements
const lobbyScreen = document.getElementById('lobby-screen');
const gameScreen = document.getElementById('game-screen');
const nicknameInput = document.getElementById('nickname');
const createBtn = document.getElementById('create-btn');
const joinCodeInput = document.getElementById('join-code');
const joinBtn = document.getElementById('join-btn');
const lobbyError = document.getElementById('lobby-error');

const roomCodeDisplay = document.getElementById('room-code-display');
const roundLabel = document.getElementById('round-label');
const phaseLabel = document.getElementById('phase-label');

const roleLabel = document.getElementById('role-label');
const secretWordEl = document.getElementById('secret-word');
const secretThemeEl = document.getElementById('secret-theme');

const actionTitle = document.getElementById('action-title');
const cluePhaseEl = document.getElementById('clue-phase');
const ackPhaseEl = document.getElementById('ack-phase');
const votingPhaseEl = document.getElementById('voting-phase');
const clueInput = document.getElementById('clue-input');
const submitClueBtn = document.getElementById('submit-clue-btn');
const ackButton = document.getElementById('ack-btn');
const voteOptionsEl = document.getElementById('vote-options');
const submitVoteBtn = document.getElementById('submit-vote-btn');

const statusLog = document.getElementById('status-log');
const playersList = document.getElementById('players-list');
const cluesList = document.getElementById('clues-list');
const startGameBtn = document.getElementById('start-game-btn');
const startBotsGameBtn = document.getElementById('start-bots-game-btn');

// Helper UI functions
function isMeAlive() {
  const me = state.players.find((p) => p.id === state.playerId);
  return !!(me && me.alive);
}

function showLobby() {
  lobbyScreen.classList.remove('hidden');
  gameScreen.classList.add('hidden');
}

function showGame() {
  lobbyScreen.classList.add('hidden');
  gameScreen.classList.remove('hidden');
}

function logStatus(message) {
  const li = document.createElement('li');
  li.textContent = message;
  statusLog.appendChild(li);
  statusLog.scrollTop = statusLog.scrollHeight;
}

function setLobbyError(message) {
  lobbyError.textContent = message || '';
}

function updateRoomState(payload) {
  state = {
    ...state,
    roomCode: payload.code,
    phase: payload.phase,
    roundNumber: payload.roundNumber,
    clueRound: payload.clueRound,
    players: payload.players || [],
  };

  roomCodeDisplay.textContent = payload.code || '----';
  roundLabel.textContent =
    payload.roundNumber && payload.maxRounds
      ? `Round ${payload.roundNumber} / ${payload.maxRounds}`
      : '';

  const phaseNameMap = {
    lobby: 'Lobby',
    clue: 'Clue Phase',
    ack: 'Review Clues',
    voting: 'Voting',
    gameover: 'Game Over',
  };
  phaseLabel.textContent = phaseNameMap[payload.phase] || 'Lobby';

  // Host can start game from lobby
  const me = state.players.find((p) => p.id === state.playerId);
  const isHost = me && me.isHost;
  // Host can start game from lobby, and restart after game over.
  startGameBtn.classList.toggle(
    'hidden',
    !(isHost && (payload.phase === 'lobby' || payload.phase === 'gameover')),
  );
  startBotsGameBtn.classList.toggle('hidden', !(isHost && payload.phase === 'lobby'));

  renderPlayers();
}

function renderPlayers() {
  playersList.innerHTML = '';
  state.players.forEach((p) => {
    const row = document.createElement('li');
    row.className = 'player-row';

    const main = document.createElement('div');
    main.className = 'player-main';

    const name = document.createElement('span');
    name.className = 'player-name';
    name.textContent = p.name;
    if (p.id === state.playerId) {
      name.textContent += ' (You)';
    }

    main.appendChild(name);

    if (p.isHost) {
      const tag = document.createElement('span');
      tag.className = 'player-tag host';
      tag.textContent = 'Host';
      main.appendChild(tag);
    }

    if (!p.alive && state.phase !== 'lobby') {
      const tag = document.createElement('span');
      tag.className = 'player-tag dead';
      tag.textContent = 'Out';
      main.appendChild(tag);
    }

    row.appendChild(main);

    const right = document.createElement('div');

    const score = document.createElement('div');
    score.className = 'player-score';
    score.textContent = `Score: ${p.score}`;
    right.appendChild(score);

    // During voting, show who each player voted for (if they voted yet).
    if (state.phase === 'voting') {
      const vote = (state.votes || []).find((v) => v.voterId === p.id);
      const voteEl = document.createElement('div');
      voteEl.className = 'player-vote';
      if (!p.alive) {
        voteEl.textContent = '';
      } else if (!vote || !vote.targetId) {
        voteEl.textContent = 'Voted: —';
      } else if (vote.targetId === 'skip') {
        voteEl.textContent = 'Voted: Skip';
      } else {
        voteEl.textContent = `Voted: ${vote.targetName || 'Unknown'}`;
      }
      right.appendChild(voteEl);
    }

    row.appendChild(right);

    playersList.appendChild(row);
  });
}

function updateSecretInfo(secret) {
  if (!secret) return;

  state.role = secret.role;
  if (secret.role === 'impostor') {
    state.secretWord = null;
    state.secretTheme = null;
    state.impostorClue = secret.clue;
  } else {
    state.secretWord = secret.word;
    state.secretTheme = secret.theme;
    state.impostorClue = null;
  }

  if (secret.roundNumber) state.roundNumber = secret.roundNumber;
  if (secret.clueRound) state.clueRound = secret.clueRound;

  // Role styling
  roleLabel.textContent = secret.role === 'impostor' ? 'You are the Impostor' : 'You are a Crewmate';
  roleLabel.classList.toggle('impostor', secret.role === 'impostor');
  roleLabel.classList.toggle('crewmate', secret.role === 'crewmate');

  if (secret.role === 'impostor') {
    secretWordEl.textContent = '';
    secretThemeEl.textContent = secret.clue ? `Your clue: ${secret.clue}` : '';
  } else {
    secretWordEl.textContent = secret.word ? secret.word.toUpperCase() : '';
    secretThemeEl.textContent = secret.theme ? `Theme: ${secret.theme}` : '';
  }

  logStatus(
    `Round ${state.roundNumber} – Clue round ${state.clueRound}. You are ${secret.role.toUpperCase()}.`,
  );
}

function renderClues(clues) {
  state.clues = clues || [];
  cluesList.classList.remove('empty-state');
  cluesList.innerHTML = '';
  state.clues.forEach((c) => {
    const row = document.createElement('div');
    row.className = 'clue-row';

    const name = document.createElement('div');
    name.className = 'clue-name';
    name.textContent = `${c.name}${c.playerId === state.playerId ? ' (You)' : ''}`;
    row.appendChild(name);

    (c.clues || []).forEach((text, idx) => {
      const textEl = document.createElement('div');
      textEl.className = 'clue-text';
      textEl.textContent = `#${idx + 1}: ${text || '—'}`;
      row.appendChild(textEl);
    });

    cluesList.appendChild(row);
  });
}

function enterCluePhase() {
  state.clues = [];
  actionTitle.textContent = 'Clue Phase';
  cluePhaseEl.classList.remove('hidden');
  ackPhaseEl.classList.add('hidden');
  votingPhaseEl.classList.add('hidden');
  clueInput.value = '';
  submitClueBtn.disabled = false;

  cluesList.classList.add('empty-state');
  cluesList.textContent = 'Waiting for clues...';

  if (!isMeAlive()) {
    actionTitle.textContent = 'Clue Phase (Spectating)';
    clueInput.disabled = true;
    submitClueBtn.disabled = true;
    logStatus('You are out this game. You can still read clues and watch voting.');
  } else {
    clueInput.disabled = false;
  }
}

function enterAckPhase() {
  actionTitle.textContent = 'Review Clues';
  cluePhaseEl.classList.add('hidden');
  votingPhaseEl.classList.add('hidden');
  ackPhaseEl.classList.remove('hidden');
  ackButton.disabled = false;

  if (!isMeAlive()) {
    actionTitle.textContent = 'Review Clues (Spectating)';
    ackButton.disabled = true;
  }
}

function enterVotingPhase(cluePayload) {
  actionTitle.textContent = 'Voting Phase';
  cluePhaseEl.classList.add('hidden');
  ackPhaseEl.classList.add('hidden');
  votingPhaseEl.classList.remove('hidden');
  submitVoteBtn.disabled = false;

  // Render clues with names
  renderClues(cluePayload.clues || []);

  // Render voting options (alive players only)
  voteOptionsEl.innerHTML = '';
  state.players
    .filter((p) => p.alive)
    .forEach((p) => {
      const label = document.createElement('label');
      label.className = 'vote-option';

      const input = document.createElement('input');
      input.type = 'radio';
      input.name = 'vote-target';
      input.value = p.id;

      label.appendChild(input);
      label.appendChild(document.createTextNode(`${p.name}${p.id === state.playerId ? ' (You)' : ''}`));
      voteOptionsEl.appendChild(label);
    });

  const skipLabel = document.createElement('label');
  skipLabel.className = 'vote-option skip';
  const skipInput = document.createElement('input');
  skipInput.type = 'radio';
  skipInput.name = 'vote-target';
  skipInput.value = 'skip';
  skipLabel.appendChild(skipInput);
  skipLabel.appendChild(document.createTextNode('Skip (no one)'));
  voteOptionsEl.appendChild(skipLabel);

  logStatus('All clues are in. Discuss and cast your vote.');

  if (!isMeAlive()) {
    actionTitle.textContent = 'Voting Phase (Spectating)';
    submitVoteBtn.disabled = true;
    const inputs = voteOptionsEl.querySelectorAll("input[name='vote-target']");
    inputs.forEach((input) => {
      // Allow spectators to click around but not actually submit.
      input.disabled = true;
    });
  }
}

function handleVotingResult(payload) {
  const { eliminatedId, reason } = payload;
  if (!eliminatedId) {
    if (reason === 'no_majority_or_skip') {
      logStatus('No majority or skip vote. Nobody was eliminated this round.');
    } else {
      logStatus('No one was eliminated.');
    }
  } else {
    const player = state.players.find((p) => p.id === eliminatedId);
    logStatus(
      `Player ${player ? player.name : eliminatedId} was voted out${
        player && player.id === state.playerId ? ' (that was you!)' : ''
      }.`,
    );
  }
}

function handleGameOver(payload) {
  const { impostorId, word, theme, impostorClue, impostorWins } = payload;
  const impostor = state.players.find((p) => p.id === impostorId);
  const impostorName = impostor ? impostor.name : 'Unknown';

  const youAreImpostor = state.playerId === impostorId;
  const youWin =
    (impostorWins && youAreImpostor) || (!impostorWins && !youAreImpostor && state.role !== 'impostor');

  const outcomeText = youWin ? 'You win!' : 'You lose.';
  const sideText = impostorWins ? 'The impostor survived.' : 'The crewmates caught the impostor.';

  logStatus(
    `${outcomeText} Secret word was "${word}". Impostor was ${impostorName}. Clue given: "${impostorClue}". ${sideText}`,
  );

  // Visual overlay via role label and theme
  roleLabel.textContent = youWin ? 'You Win!' : 'You Lose';
  secretWordEl.textContent = word ? word.toUpperCase() : '';
  secretThemeEl.textContent = theme ? `Impostor: ${impostorName} · Clue: ${impostorClue}` : '';

  actionTitle.textContent = 'Game Over';
  cluePhaseEl.classList.add('hidden');
  votingPhaseEl.classList.add('hidden');
}

// Event listeners
createBtn.addEventListener('click', () => {
  if (!socketConnected) {
    setLobbyError('Not connected to server. Is "npm start" running on port 3000?');
    return;
  }
  const nickname = nicknameInput.value.trim() || 'Host';
  setLobbyError('');

  socket.emit('createRoom', { nickname }, (res) => {
    if (!res || !res.ok) {
      lobbyError.textContent = res && res.error ? res.error : 'Could not create room.';
      return;
    }
    state.playerId = res.playerId;
    state.roomCode = res.roomCode;
    showGame();
    logStatus(`Created room ${res.roomCode}. Share the code with friends.`);
  });
});

joinBtn.addEventListener('click', () => {
  if (!socketConnected) {
    setLobbyError('Not connected to server. Is "npm start" running on port 3000?');
    return;
  }
  const nickname = nicknameInput.value.trim() || 'Player';
  const code = (joinCodeInput.value || '').trim().toUpperCase();
  setLobbyError('');

  if (!code) {
    lobbyError.textContent = 'Enter a room code to join.';
    return;
  }

  socket.emit('joinRoom', { nickname, roomCode: code }, (res) => {
    if (!res || !res.ok) {
      lobbyError.textContent = res && res.error ? res.error : 'Could not join room.';
      return;
    }
    state.playerId = res.playerId;
    state.roomCode = res.roomCode;
    showGame();
    logStatus(`Joined room ${res.roomCode}. Waiting for the host to start.`);

    socket.emit('requestRoomState', { roomCode: res.roomCode });
  });
});

startGameBtn.addEventListener('click', () => {
  if (!state.roomCode) return;
  socket.emit('startGame', { roomCode: state.roomCode });
  logStatus('Starting game...');
});

startBotsGameBtn.addEventListener('click', () => {
  if (!state.roomCode) return;
  // Ask server to pad room with bots up to at least 3 players (configurable).
  socket.emit('startGameWithBots', { roomCode: state.roomCode, minPlayers: 4 });
  logStatus('Starting local test game with bots...');
});

submitClueBtn.addEventListener('click', () => {
  if (!state.roomCode || !clueInput.value.trim() || !isMeAlive()) return;
  submitClueBtn.disabled = true;
  socket.emit('submitClue', { roomCode: state.roomCode, clueText: clueInput.value.trim() });
  logStatus('Clue submitted. Waiting for others...');
});

ackButton.addEventListener('click', () => {
  if (!state.roomCode || !isMeAlive()) return;
  ackButton.disabled = true;
  socket.emit('ackClues', { roomCode: state.roomCode });
  logStatus('You acknowledged the clues. Waiting for others...');
});

submitVoteBtn.addEventListener('click', () => {
  if (!state.roomCode || !isMeAlive()) return;
  const checked = document.querySelector("input[name='vote-target']:checked");
  if (!checked) {
    logStatus('Select a player or Skip before voting.');
    return;
  }
  submitVoteBtn.disabled = true;
  const targetId = checked.value;
  socket.emit('submitVote', { roomCode: state.roomCode, targetId });
  logStatus(targetId === 'skip' ? 'You chose to skip.' : 'Vote submitted. Waiting for others...');
});

// Socket events
socket.on('roomState', (payload) => {
  updateRoomState(payload);
});

socket.on('secretInfo', (payload) => {
  updateSecretInfo(payload);
  enterCluePhase();
});

socket.on('startVoting', (payload) => {
  enterVotingPhase(payload);
});

socket.on('cluesUpdate', (payload) => {
  renderClues(payload.clues || []);
});

socket.on('votesUpdate', (payload) => {
  state.votes = payload.votes || [];
  renderPlayers();
});

socket.on('awaitAck', (payload) => {
  renderClues(payload.clues || []);
  enterAckPhase();
  logStatus('Everyone has submitted a clue. Review them, then click "I have acknowledged the clues".');
});

socket.on('votingResult', (payload) => {
  handleVotingResult(payload);
});

socket.on('gameOver', (payload) => {
  handleGameOver(payload);
});

socket.on('errorMessage', (msg) => {
  logStatus(`Error: ${msg}`);
});

socket.on('connect', () => {
  socketConnected = true;
  logStatus('Connected to game server.');
  setLobbyError('');
});

socket.on('disconnect', () => {
  socketConnected = false;
  logStatus('Disconnected from server.');
});

socket.on('connect_error', () => {
  socketConnected = false;
  setLobbyError('Could not reach game server. Make sure "npm start" is running and visit http://localhost:3000, not the file directly.');
});

