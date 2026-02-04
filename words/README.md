# Words Directory

This folder contains all game words organized by category.

## Files

- `index.js` - Main file that combines all categories and exports game functions
- `food.js` - Food & drinks (114 words)
- `animals.js` - Animals (126 words)
- `nature.js` - Nature & weather (67 words)
- `videogames.js` - Video games (156 words)
- `music.js` - Music artists (123 words)
- `memes.js` - Memes & internet culture (161 words)
- `movies.js` - Movies & TV (100 words)
- `technology.js` - Technology (42 words)
- `objects.js` - Everyday objects (57 words)
- `sports.js` - Sports (57 words)
- `places.js` - Places (50 words)
- `anime.js` - Anime (134 words)
- `abstract.js` - Abstract concepts (54 words)

**Total: 1241 words**

## How to Add/Edit Words

1. Open the category file you want to edit (e.g., `food.js`)
2. Add or modify entries:
   ```javascript
   { word: 'pizza', theme: 'meal', category: 'food' },
   ```
3. Save the file
4. Restart the server

## Word Format

Each word entry has three properties:
- `word` - The actual word/phrase
- `theme` - A vague hint (intentionally not too specific)
- `category` - Which category it belongs to

## Benefits of This Structure

- Easy to find and edit specific categories
- Can work on one category without affecting others
- Better for version control (smaller diffs)
- Easier to collaborate (different people can edit different files)
