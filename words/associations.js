// Word association knowledge base for intelligent bot clues
// Imports from category-specific files

const videogameAssociations = require('./associations/videogames');
const animeAssociations = require('./associations/anime');
const abstractAssociations = require('./associations/abstract');
const foodAssociations = require('./associations/food');
const animalAssociations = require('./associations/animals');
const natureAssociations = require('./associations/nature');
const movieAssociations = require('./associations/movies');
const musicAssociations = require('./associations/music');
const sportsAssociations = require('./associations/sports');
const memeAssociations = require('./associations/memes');
const objectAssociations = require('./associations/objects');
const placeAssociations = require('./associations/places');

// Combine all associations
const WORD_ASSOCIATIONS = {
  ...videogameAssociations,
  ...animeAssociations,
  ...abstractAssociations,
  ...foodAssociations,
  ...animalAssociations,
  ...natureAssociations,
  ...movieAssociations,
  ...musicAssociations,
  ...sportsAssociations,
  ...memeAssociations,
  ...objectAssociations,
  ...placeAssociations,
  
  // Technology examples (can be expanded into separate file)
  phone: {
    category: ['technology', 'device', 'electronic'],
    properties: ['portable', 'smart', 'touchscreen', 'connected'],
    related: ['screen', 'apps', 'battery', 'charger', 'call'],
    actions: ['call', 'text', 'browse', 'charge', 'tap'],
    context: ['pocket', 'hand', 'desk', 'everywhere']
  },
  
  computer: {
    category: ['technology', 'device', 'electronic'],
    properties: ['digital', 'programmable', 'screen', 'powerful'],
    related: ['keyboard', 'mouse', 'screen', 'software', 'internet', 'processor'],
    actions: ['compute', 'process', 'run', 'boot', 'type'],
    context: ['desk', 'work', 'gaming', 'office']
  },
  
  internet: {
    category: ['technology', 'network', 'digital'],
    properties: ['connected', 'global', 'virtual', 'fast'],
    related: ['web', 'wifi', 'browser', 'online', 'connection', 'network'],
    actions: ['browse', 'connect', 'surf', 'download', 'stream'],
    context: ['online', 'digital', 'connection', 'worldwide']
  },
  
  robot: {
    category: ['technology', 'machine', 'automated'],
    properties: ['mechanical', 'automated', 'artificial', 'programmable'],
    related: ['ai', 'machine', 'automation', 'metal', 'programming', 'android'],
    actions: ['automate', 'compute', 'move', 'assist', 'work'],
    context: ['factory', 'future', 'automation', 'ai']
  }
};

// Generic associations by category for words not in the database
const CATEGORY_ASSOCIATIONS = {
  food: {
    vague: ['edible', 'tasty', 'consumable', 'meal', 'dish'],
    specific: ['ingredient', 'recipe', 'flavor', 'cuisine', 'cooked']
  },
  animals: {
    vague: ['living', 'creature', 'wildlife', 'species'],
    specific: ['habitat', 'behavior', 'sound', 'movement']
  },
  nature: {
    vague: ['natural', 'outdoors', 'environment', 'organic'],
    specific: ['ecosystem', 'growth', 'seasonal', 'wild']
  },
  videogames: {
    vague: ['digital', 'interactive', 'entertainment', 'virtual'],
    specific: ['gameplay', 'controller', 'level', 'character']
  },
  music: {
    vague: ['audio', 'sound', 'rhythm', 'melody'],
    specific: ['genre', 'artist', 'song', 'instrument']
  },
  memes: {
    vague: ['internet', 'viral', 'online', 'funny'],
    specific: ['reference', 'joke', 'trend', 'culture']
  },
  movies: {
    vague: ['visual', 'entertainment', 'story', 'screen'],
    specific: ['scene', 'actor', 'plot', 'genre']
  },
  anime: {
    vague: ['animated', 'japanese', 'series', 'drawn'],
    specific: ['episode', 'character', 'manga', 'studio']
  },
  technology: {
    vague: ['digital', 'electronic', 'modern', 'device'],
    specific: ['function', 'feature', 'interface', 'system']
  },
  sports: {
    vague: ['athletic', 'physical', 'competitive', 'game'],
    specific: ['team', 'player', 'score', 'field']
  },
  objects: {
    vague: ['item', 'thing', 'physical', 'tool'],
    specific: ['purpose', 'material', 'function', 'use']
  },
  places: {
    vague: ['location', 'area', 'destination', 'spot'],
    specific: ['geography', 'landmark', 'region', 'visit']
  },
  abstract: {
    vague: ['concept', 'idea', 'notion', 'thought'],
    specific: ['meaning', 'philosophy', 'feeling', 'state']
  }
};

function getWordAssociations(word, category) {
  const wordLower = word.toLowerCase();
  
  // Check if we have specific associations for this word
  if (WORD_ASSOCIATIONS[wordLower]) {
    return WORD_ASSOCIATIONS[wordLower];
  }
  
  // Return generic category associations
  return null;
}

function generateSmartClue(word, category, theme, clueRound, usedClues = []) {
  const wordLower = word.toLowerCase();
  const associations = getWordAssociations(wordLower, category);
  
  let cluePool = [];
  
  if (associations) {
    // We have specific associations for this word
    if (clueRound === 1) {
      // Round 1: Vague clues (category, context)
      cluePool = [
        ...associations.category,
        ...associations.context,
        ...associations.properties.slice(0, 2) // Only first 2 properties
      ];
    } else {
      // Round 2: More specific (properties, related items, actions)
      cluePool = [
        ...associations.properties,
        ...associations.related,
        ...associations.actions.map(a => `You ${a} it`),
        ...associations.related.map(r => `Has ${r}`),
        ...associations.properties.map(p => `It's ${p}`)
      ];
    }
  } else {
    // Use generic category associations
    const catAssoc = CATEGORY_ASSOCIATIONS[category];
    if (catAssoc) {
      if (clueRound === 1) {
        cluePool = catAssoc.vague;
      } else {
        cluePool = [...catAssoc.vague, ...catAssoc.specific];
      }
    }
    
    // Add theme-based clues
    if (theme) {
      cluePool.push(theme);
      cluePool.push(`Related to ${theme}`);
      if (clueRound === 2) {
        cluePool.push(`Definitely ${theme}`);
        cluePool.push(`Think ${theme}`);
      }
    }
  }
  
  // Filter out already used clues (avoid repetition)
  cluePool = cluePool.filter(clue => {
    const clueLower = clue.toLowerCase();
    return !usedClues.some(used => used.toLowerCase() === clueLower);
  });
  
  // If we filtered everything out, fall back to theme
  if (cluePool.length === 0 && theme) {
    return theme;
  }
  
  // Return random clue from pool
  return cluePool[Math.floor(Math.random() * cluePool.length)] || theme || 'Related';
}

module.exports = {
  WORD_ASSOCIATIONS,
  CATEGORY_ASSOCIATIONS,
  getWordAssociations,
  generateSmartClue
};
