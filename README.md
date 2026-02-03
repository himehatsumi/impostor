## Impostor – Online Multiplayer Word Game

This is a small full-stack scaffold for an online multiplayer word game called **Impostor**.

You can **run it locally** for development *or* play it instantly via the hosted version on Render:

👉 **Live demo:** [https://impostor-0fbg.onrender.com/](https://impostor-0fbg.onrender.com/)

---

### Features

* **3–10 players per room**
* **Random word generation** from a built-in list (`words.js`)
* **Impostor assignment** every round
* **Impostor-only related clue** (not the word itself) via `generateImpostorClue`
* **Round management**: 2 clue phases → 1 voting phase
* **Voting system** with tie / skip handling
* **Win conditions**:

  * Impostor voted out → crewmates win
  * After 4 rounds without impostor being eliminated → impostor wins
* **Score tracking** across rounds in the same room
* **Real-time multiplayer** using Socket.IO
* **Simple start / join UI** with modern styling

---

### Getting Started (Local)

```bash
npm install
npm start
```

Then open `http://localhost:3000` in multiple browser windows/tabs and play.

---

### Hosted Version

The game is also deployed on **Render**, so you can play without installing anything:

👉 [https://impostor-0fbg.onrender.com/](https://impostor-0fbg.onrender.com/)

(First load may take a few seconds if the server is waking up.)

---

### Customization Points

* **Word list & themes**: edit `words.js`

  * Add/remove entries in `WORDS`
  * Replace `getRandomWord` to pull from an API or database
  * Enhance `generateImpostorClue` to call an AI model for smarter, subtler clues
* **Game rules & phases**: edit `server.js`

  * Adjust `maxRounds`
  * Change scoring logic in `endGame`
  * Modify how ties / skips are handled in `tallyVotes`
* **UI & visuals**: edit `public/index.html`, `public/styles.css`, `public/client.js`

  * Style impostor reveal at game end
  * Add animations, avatars, sound effects, etc.

---

### Files

* `server.js` – Express + Socket.IO server, room + round logic
* `words.js` – Word list and impostor clue generator
* `public/index.html` – Main UI layout
* `public/styles.css` – Visual design
* `public/client.js` – Front-end game controller using Socket.IO client
* add a **“Deploy to Render”** section
* or rewrite it to sound more like a polished open-source project ✨
