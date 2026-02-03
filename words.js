// Simple built-in word list and related themes/clues.
// TODO: Customize or replace with an API-based dictionary or AI clue generator.
// Each entry: { word: 'piano', theme: 'musical instrument', category: 'music' }

const WORDS = [
  // --- Food ---
  { word: 'chocolate', theme: 'sweet', category: 'food' },
  { word: 'sushi', theme: 'sea', category: 'food' },
  { word: 'pizza', theme: 'circle', category: 'food' },
  { word: 'hamburger', theme: 'stack', category: 'food' },
  { word: 'pancake', theme: 'flat', category: 'food' },
  { word: 'spaghetti', theme: 'strings', category: 'food' },
  { word: 'taco', theme: 'fold', category: 'food' },
  { word: 'ice cream', theme: 'cold', category: 'food' },
  { word: 'salad', theme: 'green', category: 'food' },
  { word: 'croissant', theme: 'layers', category: 'food' },
  { word: 'ramen', theme: 'bowl', category: 'food' },
  { word: 'soup', theme: 'warm', category: 'food' },

  // --- Nature & weather ---
  { word: 'volcano', theme: 'fire', category: 'nature' },
  { word: 'rainforest', theme: 'dense', category: 'nature' },
  { word: 'mountain', theme: 'high', category: 'nature' },
  { word: 'desert', theme: 'sand', category: 'nature' },
  { word: 'ocean', theme: 'blue', category: 'nature' },
  { word: 'waterfall', theme: 'falling', category: 'nature' },
  { word: 'glacier', theme: 'frozen', category: 'nature' },
  { word: 'tornado', theme: 'spin', category: 'weather' },
  { word: 'earthquake', theme: 'shake', category: 'nature' },
  { word: 'rainbow', theme: 'colors', category: 'weather' },
  { word: 'thunderstorm', theme: 'loud', category: 'weather' },
  { word: 'tsunami', theme: 'wave', category: 'nature' },

  // --- Animals ---
  { word: 'elephant', theme: 'memory', category: 'animals' },
  { word: 'penguin', theme: 'waddle', category: 'animals' },
  { word: 'dolphin', theme: 'smart', category: 'animals' },
  { word: 'giraffe', theme: 'tall', category: 'animals' },
  { word: 'lion', theme: 'mane', category: 'animals' },
  { word: 'panda', theme: 'bamboo', category: 'animals' },
  { word: 'octopus', theme: 'arms', category: 'animals' },
  { word: 'butterfly', theme: 'wings', category: 'animals' },
  { word: 'kangaroo', theme: 'jump', category: 'animals' },
  { word: 'owl', theme: 'night', category: 'animals' },

  // --- Places ---
  { word: 'library', theme: 'quiet', category: 'places' },
  { word: 'theater', theme: 'stage', category: 'places' },
  { word: 'museum', theme: 'paint', category: 'places' },
  { word: 'stadium', theme: 'crowd', category: 'places' },
  { word: 'airport', theme: 'gates', category: 'places' },
  { word: 'hospital', theme: 'white', category: 'places' },
  { word: 'castle', theme: 'stone', category: 'places' },
  { word: 'bakery', theme: 'smell', category: 'places' },
  { word: 'school', theme: 'bells', category: 'places' },
  { word: 'zoo', theme: 'cages', category: 'places' },
  { word: 'aquarium', theme: 'glass', category: 'places' },

  // --- Technology ---
  { word: 'laptop', theme: 'keys', category: 'technology' },
  { word: 'robot', theme: 'metal', category: 'technology' },
  { word: 'smartphone', theme: 'pocket', category: 'technology' },
  { word: 'headphones', theme: 'sound', category: 'technology' },
  { word: 'drone', theme: 'air', category: 'technology' },
  { word: 'keyboard', theme: 'typing', category: 'technology' },
  { word: 'television', theme: 'screen', category: 'technology' },
  { word: 'camera', theme: 'lens', category: 'technology' },
  { word: 'microscope', theme: 'tiny', category: 'technology' },
  { word: 'satellite', theme: 'orbit', category: 'space' },

  // --- Space & science ---
  { word: 'astronaut', theme: 'helmet', category: 'space' },
  { word: 'planet', theme: 'orbit', category: 'space' },
  { word: 'galaxy', theme: 'stars', category: 'space' },
  { word: 'comet', theme: 'tail', category: 'space' },
  { word: 'telescope', theme: 'far', category: 'science' },
  { word: 'laboratory', theme: 'glassware', category: 'science' },
  { word: 'voltage', theme: 'shock', category: 'science' },
  { word: 'gravity', theme: 'down', category: 'science' },

  // --- Sports & games ---
  { word: 'soccer', theme: 'goal', category: 'sports' },
  { word: 'basketball', theme: 'hoop', category: 'sports' },
  { word: 'tennis', theme: 'net', category: 'sports' },
  { word: 'baseball', theme: 'diamond', category: 'sports' },
  { word: 'chess', theme: 'board', category: 'games' },
  { word: 'poker', theme: 'chips', category: 'games' },
  { word: 'bowling', theme: 'pins', category: 'sports' },
  { word: 'skateboard', theme: 'wheels', category: 'sports' },

  // --- Music & art ---
  { word: 'piano', theme: 'keys', category: 'music' },
  { word: 'guitar', theme: 'strings', category: 'music' },
  { word: 'violin', theme: 'bow', category: 'music' },
  { word: 'drums', theme: 'beats', category: 'music' },
  { word: 'microphone', theme: 'voice', category: 'music' },
  { word: 'orchestra', theme: 'many', category: 'music' },
  { word: 'paintbrush', theme: 'color', category: 'art' },
  { word: 'gallery', theme: 'frames', category: 'art' },

  // --- History & culture ---
  { word: 'pyramid', theme: 'sand', category: 'history' },
  { word: 'helmet', theme: 'armor', category: 'history' },
  { word: 'scroll', theme: 'paper', category: 'history' },
  { word: 'statue', theme: 'stone', category: 'art' },
  { word: 'festival', theme: 'lights', category: 'culture' },

  // --- Everyday objects ---
  { word: 'umbrella', theme: 'drops', category: 'everyday' },
  { word: 'mirror', theme: 'glass', category: 'everyday' },
  { word: 'backpack', theme: 'straps', category: 'everyday' },
  { word: 'notebook', theme: 'pages', category: 'everyday' },
  { word: 'flashlight', theme: 'beam', category: 'everyday' },
  { word: 'clock', theme: 'hands', category: 'everyday' },
  { word: 'bicycle', theme: 'pedals', category: 'everyday' },
  { word: 'chair', theme: 'legs', category: 'everyday' },
  { word: 'blanket', theme: 'soft', category: 'everyday' },
  { word: 'puzzle', theme: 'pieces', category: 'games' },

  // --- Abstract ---
  { word: 'freedom', theme: 'choice', category: 'abstract' },
  { word: 'trust', theme: 'belief', category: 'abstract' },
  { word: 'fear', theme: 'danger', category: 'abstract' },
  { word: 'luck', theme: 'chance', category: 'abstract' },
  { word: 'justice', theme: 'fair', category: 'abstract' },
  { word: 'memory', theme: 'past', category: 'abstract' },
  { word: 'dream', theme: 'sleep', category: 'abstract' },
  { word: 'power', theme: 'control', category: 'abstract' },
  { word: 'silence', theme: 'absence', category: 'abstract' },
  { word: 'chaos', theme: 'disorder', category: 'abstract' },

  // --- Places ---
  { word: 'library', theme: 'quiet', category: 'place' },
  { word: 'airport', theme: 'travel', category: 'place' },
  { word: 'stadium', theme: 'crowd', category: 'place' },
  { word: 'museum', theme: 'history', category: 'place' },
  { word: 'playground', theme: 'fun', category: 'place' },
  { word: 'hospital', theme: 'care', category: 'place' },
  { word: 'restaurant', theme: 'menu', category: 'place' },
  { word: 'beach', theme: 'sand', category: 'place' },
  { word: 'mountain', theme: 'high', category: 'place' },
  { word: 'theater', theme: 'stage', category: 'place' },

  // --- Actions ---
  { word: 'whisper', theme: 'quiet', category: 'action' },
  { word: 'sprint', theme: 'fast', category: 'action' },
  { word: 'stretch', theme: 'flexible', category: 'action' },
  { word: 'balance', theme: 'steady', category: 'action' },
  { word: 'celebrate', theme: 'happy', category: 'action' },
  { word: 'explore', theme: 'discover', category: 'action' },
  { word: 'guess', theme: 'uncertain', category: 'action' },
  { word: 'escape', theme: 'freedom', category: 'action' },
  { word: 'observe', theme: 'watch', category: 'action' },
  { word: 'imagine', theme: 'creative', category: 'action' },

  // --- Objects ---
  { word: 'umbrella', theme: 'rain', category: 'object' },
  { word: 'flashlight', theme: 'dark', category: 'object' },
  { word: 'mirror', theme: 'reflection', category: 'object' },
  { word: 'backpack', theme: 'carry', category: 'object' },
  { word: 'key', theme: 'unlock', category: 'object' },
  { word: 'ladder', theme: 'climb', category: 'object' },
  { word: 'pillow', theme: 'sleep', category: 'object' },
  { word: 'scissors', theme: 'cut', category: 'object' },
  { word: 'calendar', theme: 'days', category: 'object' },
  { word: 'clock', theme: 'time', category: 'object' },
];

function getRandomWord() {
  return WORDS[Math.floor(Math.random() * WORDS.length)];
}

function getRandomWordFromList(wordStrings) {
  if (!wordStrings || wordStrings.length === 0) return null;
  const word = wordStrings[Math.floor(Math.random() * wordStrings.length)].trim();
  if (!word) return getRandomWordFromList(wordStrings.filter(Boolean));
  return { word, theme: 'Custom', category: null };
}

// Basic impostor clue generator.
// It returns a clue that is related but not identical.
// You can plug in an AI model here to generate smarter clues.
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
  getRandomWord,
  getRandomWordFromList,
  generateImpostorClue,
};

