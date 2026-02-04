// Comprehensive word list organized by categories
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
  { word: 'burrito', theme: 'wrapped', category: 'food' },
  { word: 'donut', theme: 'hole', category: 'food' },
  { word: 'waffle', theme: 'grid', category: 'food' },
  { word: 'curry', theme: 'spicy', category: 'food' },
  { word: 'sandwich', theme: 'between', category: 'food' },
  { word: 'steak', theme: 'grilled', category: 'food' },

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
  { word: 'tiger', theme: 'stripes', category: 'animals' },
  { word: 'shark', theme: 'teeth', category: 'animals' },
  { word: 'whale', theme: 'giant', category: 'animals' },
  { word: 'koala', theme: 'eucalyptus', category: 'animals' },
  { word: 'sloth', theme: 'slow', category: 'animals' },
  { word: 'cheetah', theme: 'fast', category: 'animals' },

  // --- Nature ---
  { word: 'volcano', theme: 'fire', category: 'nature' },
  { word: 'rainforest', theme: 'dense', category: 'nature' },
  { word: 'mountain', theme: 'high', category: 'nature' },
  { word: 'desert', theme: 'sand', category: 'nature' },
  { word: 'ocean', theme: 'blue', category: 'nature' },
  { word: 'waterfall', theme: 'falling', category: 'nature' },
  { word: 'glacier', theme: 'frozen', category: 'nature' },
  { word: 'tornado', theme: 'spin', category: 'nature' },
  { word: 'earthquake', theme: 'shake', category: 'nature' },
  { word: 'rainbow', theme: 'colors', category: 'nature' },
  { word: 'thunderstorm', theme: 'loud', category: 'nature' },
  { word: 'tsunami', theme: 'wave', category: 'nature' },
  { word: 'forest', theme: 'trees', category: 'nature' },
  { word: 'canyon', theme: 'deep', category: 'nature' },
  { word: 'cave', theme: 'dark', category: 'nature' },

  // --- Video Games ---
  { word: 'Minecraft', theme: 'blocks', category: 'videogames' },
  { word: 'Fortnite', theme: 'battle', category: 'videogames' },
  { word: 'Pokemon', theme: 'catch', category: 'videogames' },
  { word: 'Mario', theme: 'plumber', category: 'videogames' },
  { word: 'Zelda', theme: 'sword', category: 'videogames' },
  { word: 'Sonic', theme: 'speed', category: 'videogames' },
  { word: 'Tetris', theme: 'shapes', category: 'videogames' },
  { word: 'Roblox', theme: 'create', category: 'videogames' },
  { word: 'Among Us', theme: 'sus', category: 'videogames' },
  { word: 'Valorant', theme: 'tactical', category: 'videogames' },
  { word: 'Overwatch', theme: 'heroes', category: 'videogames' },
  { word: 'League of Legends', theme: 'MOBA', category: 'videogames' },
  { word: 'Call of Duty', theme: 'shooter', category: 'videogames' },
  { word: 'GTA', theme: 'crime', category: 'videogames' },
  { word: 'Skyrim', theme: 'dragons', category: 'videogames' },
  { word: 'Halo', theme: 'spartan', category: 'videogames' },
  { word: 'Apex Legends', theme: 'legends', category: 'videogames' },
  { word: 'Rocket League', theme: 'cars', category: 'videogames' },
  { word: 'Fall Guys', theme: 'beans', category: 'videogames' },
  { word: 'Stardew Valley', theme: 'farming', category: 'videogames' },
  { word: 'Animal Crossing', theme: 'island', category: 'videogames' },
  { word: 'Sims', theme: 'life', category: 'videogames' },
  { word: 'Undertale', theme: 'mercy', category: 'videogames' },
  { word: 'Hollow Knight', theme: 'bug', category: 'videogames' },
  { word: 'Dark Souls', theme: 'difficult', category: 'videogames' },
  { word: 'Elden Ring', theme: 'open world', category: 'videogames' },
  { word: 'Cyberpunk', theme: 'future', category: 'videogames' },
  { word: 'Witcher', theme: 'monster hunter', category: 'videogames' },
  { word: 'Red Dead', theme: 'cowboy', category: 'videogames' },
  { word: 'Assassins Creed', theme: 'parkour', category: 'videogames' },

  // --- Music Artists ---
  { word: 'Taylor Swift', theme: 'pop star', category: 'music' },
  { word: 'Drake', theme: 'rapper', category: 'music' },
  { word: 'Beyonce', theme: 'queen', category: 'music' },
  { word: 'The Weeknd', theme: 'starboy', category: 'music' },
  { word: 'Billie Eilish', theme: 'whisper', category: 'music' },
  { word: 'Ed Sheeran', theme: 'guitar', category: 'music' },
  { word: 'Ariana Grande', theme: 'high notes', category: 'music' },
  { word: 'Post Malone', theme: 'tattoos', category: 'music' },
  { word: 'Dua Lipa', theme: 'dance', category: 'music' },
  { word: 'Bad Bunny', theme: 'reggaeton', category: 'music' },
  { word: 'BTS', theme: 'K-pop', category: 'music' },
  { word: 'Olivia Rodrigo', theme: 'drivers license', category: 'music' },
  { word: 'Harry Styles', theme: 'watermelon', category: 'music' },
  { word: 'Doja Cat', theme: 'say so', category: 'music' },
  { word: 'Travis Scott', theme: 'astroworld', category: 'music' },
  { word: 'Kanye West', theme: 'genius', category: 'music' },
  { word: 'Eminem', theme: 'rap god', category: 'music' },
  { word: 'Rihanna', theme: 'umbrella', category: 'music' },
  { word: 'Lady Gaga', theme: 'poker face', category: 'music' },
  { word: 'Bruno Mars', theme: 'uptown funk', category: 'music' },
  { word: 'Adele', theme: 'hello', category: 'music' },
  { word: 'Coldplay', theme: 'yellow', category: 'music' },
  { word: 'Imagine Dragons', theme: 'thunder', category: 'music' },
  { word: 'Twenty One Pilots', theme: 'stressed out', category: 'music' },

  // --- Memes & Internet Culture ---
  { word: 'Rickroll', theme: 'never gonna', category: 'memes' },
  { word: 'Doge', theme: 'wow', category: 'memes' },
  { word: 'Pepe', theme: 'frog', category: 'memes' },
  { word: 'Wojak', theme: 'feels', category: 'memes' },
  { word: 'Chad', theme: 'gigachad', category: 'memes' },
  { word: 'Karen', theme: 'manager', category: 'memes' },
  { word: 'Stonks', theme: 'stocks', category: 'memes' },
  { word: 'Big Chungus', theme: 'rabbit', category: 'memes' },
  { word: 'Harambe', theme: 'gorilla', category: 'memes' },
  { word: 'Grumpy Cat', theme: 'no', category: 'memes' },
  { word: 'Distracted Boyfriend', theme: 'looking', category: 'memes' },
  { word: 'Woman Yelling at Cat', theme: 'table', category: 'memes' },
  { word: 'Drake Hotline', theme: 'no yes', category: 'memes' },
  { word: 'Surprised Pikachu', theme: 'shocked', category: 'memes' },
  { word: 'This is Fine', theme: 'fire dog', category: 'memes' },
  { word: 'Expanding Brain', theme: 'galaxy', category: 'memes' },
  { word: 'Hide the Pain Harold', theme: 'smile', category: 'memes' },
  { word: 'Success Kid', theme: 'fist', category: 'memes' },
  { word: 'Disaster Girl', theme: 'fire', category: 'memes' },
  { word: 'Salt Bae', theme: 'sprinkle', category: 'memes' },
  { word: 'Shrek', theme: 'swamp', category: 'memes' },
  { word: 'Ugandan Knuckles', theme: 'do you know', category: 'memes' },
  { word: 'Nyan Cat', theme: 'rainbow', category: 'memes' },
  { word: 'Troll Face', theme: 'problem', category: 'memes' },

  // --- Movies & TV ---
  { word: 'Star Wars', theme: 'force', category: 'movies' },
  { word: 'Harry Potter', theme: 'wizard', category: 'movies' },
  { word: 'Marvel', theme: 'superhero', category: 'movies' },
  { word: 'Lord of the Rings', theme: 'ring', category: 'movies' },
  { word: 'Titanic', theme: 'ship', category: 'movies' },
  { word: 'Avatar', theme: 'blue', category: 'movies' },
  { word: 'Jurassic Park', theme: 'dinosaurs', category: 'movies' },
  { word: 'The Matrix', theme: 'red pill', category: 'movies' },
  { word: 'Inception', theme: 'dream', category: 'movies' },
  { word: 'Frozen', theme: 'let it go', category: 'movies' },
  { word: 'Toy Story', theme: 'toys', category: 'movies' },
  { word: 'Shrek', theme: 'ogre', category: 'movies' },
  { word: 'Breaking Bad', theme: 'chemistry', category: 'movies' },
  { word: 'Game of Thrones', theme: 'throne', category: 'movies' },
  { word: 'Stranger Things', theme: 'upside down', category: 'movies' },
  { word: 'The Office', theme: 'paper', category: 'movies' },
  { word: 'Friends', theme: 'central perk', category: 'movies' },
  { word: 'Spongebob', theme: 'pineapple', category: 'movies' },
  { word: 'Rick and Morty', theme: 'portal', category: 'movies' },
  { word: 'Squid Game', theme: 'red light', category: 'movies' },

  // --- Technology ---
  { word: 'iPhone', theme: 'apple', category: 'technology' },
  { word: 'laptop', theme: 'keys', category: 'technology' },
  { word: 'robot', theme: 'metal', category: 'technology' },
  { word: 'smartphone', theme: 'pocket', category: 'technology' },
  { word: 'headphones', theme: 'sound', category: 'technology' },
  { word: 'drone', theme: 'air', category: 'technology' },
  { word: 'keyboard', theme: 'typing', category: 'technology' },
  { word: 'television', theme: 'screen', category: 'technology' },
  { word: 'camera', theme: 'lens', category: 'technology' },
  { word: 'Tesla', theme: 'electric', category: 'technology' },
  { word: 'WiFi', theme: 'wireless', category: 'technology' },
  { word: 'Bluetooth', theme: 'connect', category: 'technology' },
  { word: 'USB', theme: 'plug', category: 'technology' },
  { word: 'VR headset', theme: 'virtual', category: 'technology' },
  { word: 'smartwatch', theme: 'wrist', category: 'technology' },

  // --- Sports ---
  { word: 'soccer', theme: 'goal', category: 'sports' },
  { word: 'basketball', theme: 'hoop', category: 'sports' },
  { word: 'tennis', theme: 'net', category: 'sports' },
  { word: 'baseball', theme: 'diamond', category: 'sports' },
  { word: 'bowling', theme: 'pins', category: 'sports' },
  { word: 'skateboard', theme: 'wheels', category: 'sports' },
  { word: 'football', theme: 'touchdown', category: 'sports' },
  { word: 'hockey', theme: 'ice', category: 'sports' },
  { word: 'golf', theme: 'hole', category: 'sports' },
  { word: 'swimming', theme: 'pool', category: 'sports' },
  { word: 'boxing', theme: 'gloves', category: 'sports' },
  { word: 'wrestling', theme: 'ring', category: 'sports' },
  { word: 'surfing', theme: 'waves', category: 'sports' },
  { word: 'skiing', theme: 'snow', category: 'sports' },

  // --- Everyday Objects ---
  { word: 'umbrella', theme: 'drops', category: 'objects' },
  { word: 'mirror', theme: 'glass', category: 'objects' },
  { word: 'backpack', theme: 'straps', category: 'objects' },
  { word: 'notebook', theme: 'pages', category: 'objects' },
  { word: 'flashlight', theme: 'beam', category: 'objects' },
  { word: 'clock', theme: 'hands', category: 'objects' },
  { word: 'bicycle', theme: 'pedals', category: 'objects' },
  { word: 'chair', theme: 'legs', category: 'objects' },
  { word: 'blanket', theme: 'soft', category: 'objects' },
  { word: 'pillow', theme: 'sleep', category: 'objects' },
  { word: 'scissors', theme: 'cut', category: 'objects' },
  { word: 'key', theme: 'unlock', category: 'objects' },
  { word: 'ladder', theme: 'climb', category: 'objects' },
  { word: 'calendar', theme: 'days', category: 'objects' },

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
  { word: 'beach', theme: 'sand', category: 'places' },
  { word: 'playground', theme: 'fun', category: 'places' },
  { word: 'restaurant', theme: 'menu', category: 'places' },

  // --- Abstract Concepts ---
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
  technology: { name: 'Technology', filter: 'technology' },
  sports: { name: 'Sports', filter: 'sports' },
  objects: { name: 'Everyday Objects', filter: 'objects' },
  places: { name: 'Places', filter: 'places' },
  abstract: { name: 'Abstract Concepts', filter: 'abstract' },
};

function getRandomWord(categoryFilter = null) {
  let filteredWords = WORDS;
  
  if (categoryFilter && categoryFilter !== 'all') {
    filteredWords = WORDS.filter(w => w.category === categoryFilter);
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
  CATEGORIES,
  getRandomWord,
  getRandomWordFromList,
  generateImpostorClue,
};
