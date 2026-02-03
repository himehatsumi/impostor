Got it — here’s a **clean, professional, open-source–style rewrite**, trimmed to just the essentials and written like a real project README. No fluff, no emojis, no marketing hype.

---

# Impostor

**Online Multiplayer Word Deduction Game**

Impostor is a lightweight full-stack multiplayer word game inspired by social deduction mechanics. Players receive the same secret word—except for one impostor, who must blend in using a related clue instead. The group discusses, votes, and attempts to identify the impostor before time runs out.

**Live demo:**
[https://impostor-0fbg.onrender.com/](https://impostor-0fbg.onrender.com/)

---

## Gameplay Overview

* **Players per room:** 3–10
* **Roles:**

  * Crewmates receive the secret word
  * One impostor receives a related clue (not the word)
* **Rounds:**

  * Two clue-giving phases
  * One voting phase
* **Win conditions:**

  * Crewmates win if the impostor is voted out
  * Impostor wins if they survive 4 rounds
* **Scoring:**

  * Scores persist across rounds within the same room

---

## Features

* Real-time multiplayer using **Socket.IO**
* Automatic room and round management
* Random word selection from a built-in list
* Impostor-specific clue generation
* Voting system with tie and skip handling
* Simple, responsive browser-based UI
* No accounts or database required

---

## Tech Stack

* **Backend:** Node.js, Express, Socket.IO
* **Frontend:** Vanilla HTML, CSS, JavaScript
* **Deployment:** Render

---

## Running Locally

```bash
npm install
npm start
```

Open `http://localhost:3000` in multiple browser tabs or devices to play.

---

## Project Structure

```
├── server.js          # Server, room logic, game flow
├── words.js           # Word list and impostor clue generator
├── public/
│   ├── index.html     # Main UI
│   ├── styles.css     # Styling
│   └── client.js      # Frontend game logic
```

---

## Customization

* **Words & themes:**
  Modify `words.js` to add themes, expand the word list, or source words externally.
* **Game rules:**
  Adjust round limits, scoring, or voting behavior in `server.js`.
* **Clue generation:**
  Replace `generateImpostorClue` with an AI-based or API-driven system.
* **UI:**
  Enhance visuals, animations, or add player avatars via the `public/` files.

---

## Deployment

The project is ready to deploy on platforms like **Render** with no additional configuration.
The live demo uses the same codebase as this repository.

---

## License

MIT License.
Free to use, modify, and redistribute.

---
