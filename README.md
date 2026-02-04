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
  * Impostor wins if they guess the word
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
├── words/             # Word lists organized by category
│   ├── index.js       # Main words module
│   ├── food.js        # 114 food words (theme: edible)
│   ├── animals.js     # 126 animal words (theme: creature)
│   ├── nature.js      # 67 nature words (theme: natural)
│   ├── videogames.js  # 156 game words (theme: game)
│   ├── music.js       # 123 music words (theme: artist)
│   ├── memes.js       # 161 meme words (theme: internet)
│   ├── movies.js      # 100 movie words (theme: media)
│   ├── technology.js  # 42 tech words (theme: tech)
│   ├── objects.js     # 57 object words (theme: thing)
│   ├── sports.js      # 57 sport words (theme: activity)
│   ├── places.js      # 50 place words (theme: location)
│   ├── anime.js       # 134 anime words (theme: show)
│   └── abstract.js    # 54 abstract words (theme: concept)
├── public/
│   ├── index.html     # Main UI
│   ├── styles.css     # Styling
│   └── client.js      # Frontend game logic
```

**Total: 1241 words across 13 categories**

All themes are intentionally generic (e.g., "edible", "creature", "artist") to make the impostor role more challenging.

---

## Customization

* **Words & themes:**
  Words are organized in separate category files in the `words/` folder. Each category has a generic theme (e.g., food → "edible", music → "artist"). To add words, edit the appropriate category file (e.g., `words/food.js`) and restart the server. See `words/README.md` for details.
* **Game rules:**
  Adjust round limits, scoring, or voting behavior in `server.js`.
* **Clue generation:**
  Replace `generateImpostorClue` in `words/index.js` with an AI-based or API-driven system.
* **UI:**
  Enhance visuals, animations, or add player avatars via the `public/` files.

---

## Deployment

The project is ready to deploy on platforms like **Render** with no additional configuration.
The live demo uses the same codebase as this repository.

---

## License

The UnLicense.
Free to use, modify, and redistribute.

---
