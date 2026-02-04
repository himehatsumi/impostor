# Impostor — Potential Improvements & QOL

A living list of ideas for improvements, quality-of-life, and new features. Check off as you go.

---

## Quality of Life

- [x] **Copy room code to clipboard** — One-click copy of the room code from the game screen.
- [x] **Rejoin / refresh resilience** — If a player disconnects briefly, allow rejoin by room code + same nickname (optional: simple reconnect token).
- [x] **Sound effects** — Optional subtle sounds: phase change, timer low, vote submitted, game over (with mute toggle).
- [x] **Keyboard shortcuts** — e.g. Enter to submit clue/vote when focused; Esc to clear input.
- [ ] **Nickname change in lobby** — Let players edit their name before the host starts (with unique-name check).
- [x] **Leave room button** — Explicit “Leave game” that returns to lobby screen and notifies others.
- [ ] **Mobile tweaks** — Larger tap targets, optional “request desktop site” hint for small screens.
- [ ] **Persist options** — Remember last-used options (e.g. max rounds, timers) in `localStorage` per device.

---

## Features

- [ ] **Multiple impostors** — Option for 2 impostors in larger games (e.g. 6+ players).
- [x] **Custom word list** — Host can paste or choose a small custom list for that game (e.g. “movies only”).
- [ ] **Word categories filter** — Lobby option: “Animals”, “Places”, “Food”, “Random”, etc., using existing themes in `words.js`.
- [ ] **Spectator / observer slot** — Allow one extra “watch only” join per room (no role, no vote).
- [ ] **Round recap** — After each round, short summary: “Word was X, impostor was Y” (for eliminated players too).
- [ ] **Game history in room** — Show last N games: who won, word, impostor (optional, in-memory or later DB).
- [ ] **Private / password rooms** — Optional 4-digit PIN or password to join a room.
- [ ] **Chat or quick phrases** — Simple in-game chat or preset phrases (“I’m suspicious of…”, “Skip”) during voting.
- [ ] **Emoji / reactions** — Lightweight reactions (e.g. 👍👀) during clue review or voting.
- [ ] **Achievements / stats** — Per-session or per-device: games played, impostor wins, crewmate wins (no account required).

---

## Polish & UX

- [ ] **Loading / connecting state** — Spinner or “Connecting…” until socket is ready; disable Create/Join until connected.
- [ ] **Empty state for Clues panel** — Clear “Waiting for clues” or “No clues yet” with a small illustration or icon.
- [ ] **Vote confirmation** — “You voted for X. Change vote?” or a short undo window before lock.
- [ ] **Timer visibility** — Always show phase timer in a fixed spot; pulse or color when &lt; 10s.
- [ ] **Animations** — Subtle transitions: phase change, new clue appearing, player eliminated.
- [ ] **Dark/light theme toggle** — Use `prefers-color-scheme` or a simple toggle stored in `localStorage`.
- [ ] **Accessibility** — ARIA labels, focus management (e.g. focus clue input when entering clue phase), sufficient contrast.
- [x] **“How to play” / rules** — Collapsible or modal with short rules (roles, rounds, voting, win conditions).
- [x] **Host transfer** — If host leaves, show “You are now host” and give new host start/options control.

---

## Content & Variety

- [ ] **More words** — Expand `words.js` with more themes and words; keep balance of difficulty.
- [ ] **Difficulty levels** — Easy (obvious words), Normal, Hard (abstract or niche).
- [ ] **Language / locale** — Option to load a different word set (e.g. another language) if you add one.
- [ ] **Seasonal or event word packs** — Optional “Halloween”, “Sports”, etc., selectable in lobby.

---

## Technical & DevEx

- [ ] **Environment config** — Use `process.env.NODE_ENV`; optional config file for port, CORS origins, max rooms.
- [x] **Rate limiting** — Limit create/join/submit per IP or socket to avoid abuse.
- [ ] **Input sanitization** — Trim and length-limit clues and nicknames; optional profanity filter or blocklist.
- [ ] **Persistence** — Optional SQLite or Redis for rooms/state so games survive server restart (e.g. “resume game”).
- [ ] **Logging** — Simple request/game-event logs (no PII) for debugging and moderation.
- [ ] **Tests** — Unit tests for voting logic, word selection, timer behavior; optional E2E for critical flows.
- [ ] **Health check** — `GET /health` for load balancers and monitoring.
- [ ] **Admin or debug view** — Optional `/admin` (e.g. behind a secret or env flag) to list rooms and kick/delete.

---

## Nice to Have (Bigger Scope)

- [ ] **Accounts / profiles** — Optional login (e.g. GitHub OAuth) to save nickname and stats.
- [ ] **Matchmaking** — “Quick play” that puts you in a random public room.
- [ ] **Replays** — Store and replay a game (round-by-round) for fun or analysis.
- [ ] **AI impostor** — Bot that uses simple NLP or API to generate more human-like clues.
- [x] **Moderation** — Report button, mute, or host kick with optional backend moderation queue.

---

*Edit this file as you implement or drop ideas. Order within sections is rough priority.*
