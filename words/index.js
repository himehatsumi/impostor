// Main words index - combines all category files

const abstractWords = require('./abstract');
const animalsWords = require('./animals');
const animeWords = require('./anime');
const foodWords = require('./food');
const memesWords = require('./memes');
const moviesWords = require('./movies');
const musicWords = require('./music');
const natureWords = require('./nature');
const objectsWords = require('./objects');
const placesWords = require('./places');
const sportsWords = require('./sports');
const technologyWords = require('./technology');
const videogamesWords = require('./videogames');

// Combine all words
const WORDS = [
  ...abstractWords,
  ...animalsWords,
  ...animeWords,
  ...foodWords,
  ...memesWords,
  ...moviesWords,
  ...musicWords,
  ...natureWords,
  ...objectsWords,
  ...placesWords,
  ...sportsWords,
  ...technologyWords,
  ...videogamesWords,
];

// Category definitions for the dropdown
const CATEGORIES = {
  all: { name: 'All Categories', filter: null },
  food: { name: 'Food & Drinks', filter: 'food' },
  animals: { name: 'Animals', filter: 'animals' },
  nature: { name: 'Nature & Weather', filter: 'nature' },
  videogames: { name: 'Video Games', filter: 'videogames' },
  music: { name: 'Music Artists', filter: 'music' },
  memes: { name: 'Memes & Internet', filter: 'memes' },
  movies: { name: 'Movies & TV', filter: 'movies' },
  anime: { name: 'Anime', filter: 'anime' },
  technology: { name: 'Technology', filter: 'technology' },
  sports: { name: 'Sports', filter: 'sports' },
  objects: { name: 'Everyday Objects', filter: 'objects' },
  places: { name: 'Places', filter: 'places' },
  abstract: { name: 'Abstract Concepts', filter: 'abstract' },
};

function getRandomWord(categoryFilter = null) {
  let filteredWords = WORDS;
  
  // Filter by category - support multiple categories
  if (categoryFilter && categoryFilter !== 'all') {
    // If it's an array of categories, filter to match any of them
    if (Array.isArray(categoryFilter)) {
      filteredWords = filteredWords.filter(w => categoryFilter.includes(w.category));
    } else {
      // Single category (backward compatibility)
      filteredWords = filteredWords.filter(w => w.category === categoryFilter);
    }
  }
  
  if (filteredWords.length === 0) {
    filteredWords = WORDS; // Fallback to all words
  }
  
  return filteredWords[Math.floor(Math.random() * filteredWords.length)];
}

function getRandomWordFromList(wordStrings) {
  if (!wordStrings || wordStrings.length === 0) return null;
  const word = wordStrings[Math.floor(Math.random() * wordStrings.length)].trim();
  if (!word) return getRandomWordFromList(wordStrings.filter(Boolean));
  return { word, theme: 'Custom', category: null };
}

// Basic impostor clue generator.
// It returns a clue that is related but not identical.
function generateImpostorClue(entry) {
  if (!entry) return 'Something related to a secret word.';

  // Prefer a high-level category clue if available.
  if (entry.category) {
    return `Something related to ${entry.category}.`;
  }

  // Fall back to the theme text but soften it slightly.
  if (entry.theme) {
    return `Think about ${entry.theme}, but not too specific.`;
  }

  // Very generic backup.
  return 'Closely related to the secret word, but different.';
}

module.exports = {
  WORDS,
  CATEGORIES,
  getRandomWord,
  getRandomWordFromList,
  generateImpostorClue,
};
