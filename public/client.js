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
  options: { maxRounds: 3, clueTimeLimit: 0, voteTimeLimit: 0, customWords: '', category: 'all' },
  timerEndAt: null,
  timerInterval: null,
  wasHost: false,
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
const optionsPanel = document.getElementById('options-panel');
const optionsHeader = document.getElementById('options-header');
const optMaxRounds = document.getElementById('opt-max-rounds');
const optCategory = document.getElementById('opt-category');
const optClueTime = document.getElementById('opt-clue-time');
const optVoteTime = document.getElementById('opt-vote-time');
const phaseTimerEl = document.getElementById('phase-timer');
const waitingPhaseEl = document.getElementById('waiting-phase');
const copyCodeBtn = document.getElementById('copy-code-btn');
const leaveRoomBtn = document.getElementById('leave-room-btn');
const howToPlayBtn = document.getElementById('how-to-play-btn');
const howToPlayModal = document.getElementById('how-to-play-modal');
const howToPlayClose = document.getElementById('how-to-play-close');
const soundMuteCheckbox = document.getElementById('sound-mute');
const optCustomWords = document.getElementById('opt-custom-words');
const impostorGuessArea = document.getElementById('impostor-guess-area');
const impostorGuessBtn = document.getElementById('impostor-guess-btn');
const impostorGuessForm = document.getElementById('impostor-guess-form');
const impostorGuessInput = document.getElementById('impostor-guess-input');
const impostorGuessSubmit = document.getElementById('impostor-guess-submit');

// Helper UI functions
function isMeAlive() {
  const me = state.players.find((p) => p.id === state.playerId);
  return !!(me && me.alive);
}

function validateClue(clueText) {
  if (!clueText || !clueText.trim()) return { valid: false, error: 'Please enter a clue.' };
  
  // Check if the clue is the secret word (case-insensitive)
  if (state.secretWord && clueText.trim().toLowerCase() === state.secretWord.toLowerCase()) {
    return { valid: false, error: 'You cannot submit the secret word as a clue!' };
  }
  
  return { valid: true };
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

function isSoundEnabled() {
  return soundMuteCheckbox && !soundMuteCheckbox.checked;
}

function getAudioContext() {
  if (!window.__impostorAudioCtx) {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (Ctx) window.__impostorAudioCtx = new Ctx();
  }
  return window.__impostorAudioCtx;
}

function unlockAudio() {
  if (window.__impostorAudioUnlocked) return;
  window.__impostorAudioUnlocked = true;
  const ctx = getAudioContext();
  if (ctx && ctx.state === 'suspended') ctx.resume().catch(() => {});
}

document.addEventListener('click', unlockAudio, { once: true });
document.addEventListener('keydown', unlockAudio, { once: true });
document.addEventListener('touchstart', unlockAudio, { once: true });

function playSound(kind) {
  if (!isSoundEnabled()) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const play = () => {
    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      if (kind === 'alert') {
        osc.frequency.setValueAtTime(400, ctx.currentTime);
        osc.frequency.setValueAtTime(300, ctx.currentTime + 0.1);
      } else {
        osc.frequency.setValueAtTime(523, ctx.currentTime);
        osc.frequency.setValueAtTime(659, ctx.currentTime + 0.08);
      }
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.2);
    } catch (_) {}
  };

  if (ctx.state === 'suspended') {
    ctx.resume().then(play).catch(() => {});
  } else {
    play();
  }
}

function copyRoomCode() {
  if (!state.roomCode) return;
  navigator.clipboard.writeText(state.roomCode).then(() => {
    const t = copyCodeBtn.textContent;
    copyCodeBtn.textContent = 'Copied!';
    setTimeout(() => { copyCodeBtn.textContent = t; }, 1500);
  });
}

function clearTimerDisplay() {
  if (state.timerInterval) {
    clearInterval(state.timerInterval);
    state.timerInterval = null;
  }
  state.timerEndAt = null;
  phaseTimerEl.classList.add('hidden');
  phaseTimerEl.classList.remove('warning');
}

function startTimerDisplay(endAt, durationSeconds) {
  clearTimerDisplay();
  if (!durationSeconds || durationSeconds <= 0) return;

  state.timerEndAt = endAt;
  state.timerLowPlayed = false;

  function tick() {
    const now = Date.now();
    const left = Math.max(0, Math.ceil((state.timerEndAt - now) / 1000));
    if (left <= 0) {
      clearTimerDisplay();
      return;
    }
    if (left <= 5 && !state.timerLowPlayed) {
      state.timerLowPlayed = true;
      playSound('alert');
    }
    phaseTimerEl.classList.remove('hidden');
    phaseTimerEl.classList.toggle('warning', left <= 10);
    phaseTimerEl.textContent = `${left}s`;
  }

  tick();
  state.timerInterval = setInterval(tick, 500);
}

function updateRoomState(payload) {
  state = {
    ...state,
    roomCode: payload.code,
    phase: payload.phase,
    roundNumber: payload.roundNumber,
    clueRound: payload.clueRound,
    players: payload.players || [],
    options: payload.options || state.options,
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

  const me = state.players.find((p) => p.id === state.playerId);
  const isHost = me && me.isHost;

  if (isHost && !state.wasHost && state.roomCode) {
    logStatus('You are now the host.');
  }
  state.wasHost = isHost;

  startGameBtn.classList.toggle(
    'hidden',
    !(isHost && (payload.phase === 'lobby' || payload.phase === 'gameover')),
  );
  startGameBtn.textContent = payload.phase === 'gameover' ? 'New Game' : 'Start Game';
  startBotsGameBtn.classList.toggle('hidden', !(isHost && payload.phase === 'lobby'));

  // Options panel: only for host in lobby
  optionsPanel.classList.toggle('hidden', !(isHost && payload.phase === 'lobby'));
  if (payload.options && isHost && payload.phase === 'lobby') {
    optMaxRounds.value = String(payload.options.maxRounds ?? 3);
    optCategory.value = String(payload.options.category ?? 'all');
    optClueTime.value = String(payload.options.clueTimeLimit ?? 0);
    optVoteTime.value = String(payload.options.voteTimeLimit ?? 0);
    // Only update custom words if the field is not currently focused (being edited)
    if (optCustomWords && document.activeElement !== optCustomWords) {
      optCustomWords.value = payload.options.customWords || '';
    }
  }

  // Show clue/ack/voting only when game has started; otherwise show waiting.
  if (payload.phase === 'lobby' || payload.phase === 'gameover') {
    waitingPhaseEl.classList.remove('hidden');
    cluePhaseEl.classList.add('hidden');
    ackPhaseEl.classList.add('hidden');
    votingPhaseEl.classList.add('hidden');
    clueInput.disabled = true;
    submitClueBtn.disabled = true;
  } else {
    waitingPhaseEl.classList.add('hidden');
  }

  const showImpostorGuess =
    state.role === 'impostor' &&
    (payload.phase === 'clue' || payload.phase === 'ack' || payload.phase === 'voting') &&
    isMeAlive();
  if (impostorGuessArea) {
    impostorGuessArea.classList.toggle('hidden', !showImpostorGuess);
    if (!showImpostorGuess && impostorGuessForm) {
      impostorGuessForm.classList.add('hidden');
      if (impostorGuessInput) impostorGuessInput.value = '';
    }
  }

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

    if (p.disconnected) {
      const tag = document.createElement('span');
      tag.className = 'player-tag';
      tag.textContent = 'Reconnecting…';
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
    right.className = 'player-right';

    const score = document.createElement('div');
    score.className = 'player-score';
    score.textContent = `Score: ${p.score}`;
    right.appendChild(score);

    const me = state.players.find((x) => x.id === state.playerId);
    const isHost = me && me.isHost;
    if (p.id !== state.playerId && (state.phase === 'lobby' || state.phase === 'gameover')) {
      const actions = document.createElement('div');
      actions.className = 'player-actions';
      if (isHost) {
        const kickBtn = document.createElement('button');
        kickBtn.type = 'button';
        kickBtn.className = 'text-btn';
        kickBtn.textContent = 'Kick';
        kickBtn.addEventListener('click', () => {
          if (state.roomCode) socket.emit('kickPlayer', { roomCode: state.roomCode, targetId: p.id });
        });
        actions.appendChild(kickBtn);
      }
      const reportBtn = document.createElement('button');
      reportBtn.type = 'button';
      reportBtn.className = 'text-btn';
      reportBtn.textContent = 'Report';
      reportBtn.addEventListener('click', () => {
        if (state.roomCode) socket.emit('reportPlayer', { roomCode: state.roomCode, targetId: p.id });
        logStatus(`Reported ${p.name}.`);
      });
      actions.appendChild(reportBtn);
      right.appendChild(actions);
    }

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
  waitingPhaseEl.classList.add('hidden');
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
    logStatus('You are out. You can still watch.');
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
    if (res.rejoined) {
      logStatus('Reconnected to the room.');
    } else {
      logStatus(`Joined room ${res.roomCode}. Waiting for the host to start.`);
    }
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
  socket.emit('startGameWithBots', { roomCode: state.roomCode, minPlayers: 4 });
  logStatus('Starting local test game with bots...');
});

function emitRoomOptions() {
  if (!state.roomCode) return;
  const customWords = (optCustomWords && optCustomWords.value) ? optCustomWords.value.trim() : '';
  socket.emit('setRoomOptions', {
    roomCode: state.roomCode,
    options: {
      maxRounds: parseInt(optMaxRounds.value, 10) || 3,
      category: optCategory.value || 'all',
      clueTimeLimit: parseInt(optClueTime.value, 10) || 0,
      voteTimeLimit: parseInt(optVoteTime.value, 10) || 0,
      customWords: customWords,
    },
  });
}

// Debounce max rounds input
let maxRoundsTimeout = null;
optMaxRounds.addEventListener('input', () => {
  if (maxRoundsTimeout) clearTimeout(maxRoundsTimeout);
  maxRoundsTimeout = setTimeout(() => {
    emitRoomOptions();
  }, 300);
});

optCategory.addEventListener('change', emitRoomOptions);
optClueTime.addEventListener('change', emitRoomOptions);
optVoteTime.addEventListener('change', emitRoomOptions);

// Debounce custom words input to avoid overwriting while typing
if (optCustomWords) {
  let customWordsTimeout = null;
  optCustomWords.addEventListener('input', () => {
    if (!state.roomCode || !state.players.find((p) => p.id === state.playerId)?.isHost) return;
    
    // Clear previous timeout
    if (customWordsTimeout) clearTimeout(customWordsTimeout);
    
    // Wait 500ms after user stops typing before sending update
    customWordsTimeout = setTimeout(() => {
      emitRoomOptions();
    }, 500);
  });
  
  // Also send update when user leaves the field
  optCustomWords.addEventListener('blur', () => {
    if (customWordsTimeout) clearTimeout(customWordsTimeout);
    if (state.roomCode && state.players.find((p) => p.id === state.playerId)?.isHost) {
      emitRoomOptions();
    }
  });
}

copyCodeBtn.addEventListener('click', copyRoomCode);

// Toggle options panel
if (optionsHeader) {
  optionsHeader.addEventListener('click', () => {
    if (optionsPanel) {
      optionsPanel.classList.toggle('collapsed');
    }
  });
}

leaveRoomBtn.addEventListener('click', () => {
  if (!state.roomCode) return;
  socket.emit('leaveRoom', { roomCode: state.roomCode });
});

howToPlayBtn.addEventListener('click', () => {
  howToPlayModal.classList.remove('hidden');
  howToPlayModal.setAttribute('aria-hidden', 'false');
});
howToPlayClose.addEventListener('click', () => {
  howToPlayModal.classList.add('hidden');
  howToPlayModal.setAttribute('aria-hidden', 'true');
});
howToPlayModal.querySelector('.modal-backdrop').addEventListener('click', () => {
  howToPlayModal.classList.add('hidden');
  howToPlayModal.setAttribute('aria-hidden', 'true');
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    clueInput.value = '';
    if (!howToPlayModal.classList.contains('hidden')) {
      howToPlayModal.classList.add('hidden');
      howToPlayModal.setAttribute('aria-hidden', 'true');
    }
  }
  if (e.key === 'Enter' && !e.shiftKey) {
    if (document.activeElement === clueInput && state.phase === 'clue' && isMeAlive()) {
      e.preventDefault();
      const clueText = clueInput.value.trim();
      const validation = validateClue(clueText);
      
      if (!validation.valid) {
        logStatus(`Error: ${validation.error}`);
        return;
      }
      
      submitClueBtn.disabled = true;
      socket.emit('submitClue', { roomCode: state.roomCode, clueText });
      logStatus('Clue submitted. Waiting for others...');
    }
    if (document.activeElement && document.activeElement.closest('#vote-options') && state.phase === 'voting' && isMeAlive()) {
      const checked = document.querySelector("input[name='vote-target']:checked");
      if (checked && !submitVoteBtn.disabled) {
        submitVoteBtn.disabled = true;
        socket.emit('submitVote', { roomCode: state.roomCode, targetId: checked.value });
        logStatus(checked.value === 'skip' ? 'You chose to skip.' : 'Vote submitted. Waiting for others...');
      }
    }
  }
});

if (soundMuteCheckbox) {
  const saved = localStorage.getItem('impostor-sound-mute');
  if (saved !== null) soundMuteCheckbox.checked = saved === '1';
  soundMuteCheckbox.addEventListener('change', () => {
    localStorage.setItem('impostor-sound-mute', soundMuteCheckbox.checked ? '1' : '0');
  });
}

if (impostorGuessBtn) {
  impostorGuessBtn.addEventListener('click', () => {
    impostorGuessForm.classList.remove('hidden');
    impostorGuessInput.value = '';
    impostorGuessInput.focus();
  });
}
if (impostorGuessSubmit && impostorGuessInput) {
  impostorGuessSubmit.addEventListener('click', () => {
    if (!state.roomCode || state.role !== 'impostor') return;
    const word = impostorGuessInput.value.trim();
    if (!word) return;
    socket.emit('impostorGuessWord', { roomCode: state.roomCode, word });
  });
  impostorGuessInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      impostorGuessSubmit.click();
    }
  });
}

submitClueBtn.addEventListener('click', () => {
  if (!state.roomCode || !isMeAlive()) return;
  
  const clueText = clueInput.value.trim();
  const validation = validateClue(clueText);
  
  if (!validation.valid) {
    logStatus(`Error: ${validation.error}`);
    return;
  }
  
  submitClueBtn.disabled = true;
  socket.emit('submitClue', { roomCode: state.roomCode, clueText });
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
  playSound('ok');
  logStatus(targetId === 'skip' ? 'You chose to skip.' : 'Vote submitted. Waiting for others...');
});

// Socket events
socket.on('roomState', (payload) => {
  if (payload.phase !== 'clue' && payload.phase !== 'voting') {
    clearTimerDisplay();
  }
  updateRoomState(payload);
});

socket.on('roundStart', (payload) => {
  state.roundNumber = payload.roundNumber;
  state.maxRounds = payload.maxRounds;
  logStatus(`Round ${payload.roundNumber} of ${payload.maxRounds} starting.`);
});

socket.on('phaseTimer', (payload) => {
  startTimerDisplay(payload.endAt, payload.durationSeconds);
});

socket.on('secretInfo', (payload) => {
  updateSecretInfo(payload);
  enterCluePhase();
  playSound('ok');
});

socket.on('startVoting', (payload) => {
  enterVotingPhase(payload);
  playSound('ok');
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
  playSound('ok');
  logStatus('Everyone has submitted a clue. Review them, then click Continue.');
});

socket.on('votingResult', (payload) => {
  handleVotingResult(payload);
});

socket.on('gameOver', (payload) => {
  clearTimerDisplay();
  handleGameOver(payload);
  playSound('alert');
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

socket.on('youLeft', () => {
  state.roomCode = null;
  state.playerId = null;
  state.phase = 'lobby';
  state.players = [];
  showLobby();
  logStatus('You left the room.');
});

socket.on('youWereKicked', () => {
  state.roomCode = null;
  state.playerId = null;
  state.phase = 'lobby';
  state.players = [];
  showLobby();
  logStatus('You were removed from the room.');
});

socket.on('rateLimit', (msg) => {
  logStatus(msg || 'Too many actions. Please wait.');
});


