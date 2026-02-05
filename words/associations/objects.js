// Object word associations

module.exports = {
  chair: {
    category: ['object', 'furniture', 'seating'],
    properties: ['sitting', 'four legs', 'furniture', 'common'],
    related: ['sit', 'legs', 'back', 'seat', 'furniture', 'table'],
    actions: ['sit', 'rest', 'lean', 'place', 'furniture'],
    context: ['furniture', 'home', 'office', 'sitting']
  },
  
  table: {
    category: ['object', 'furniture', 'surface'],
    properties: ['flat', 'surface', 'furniture', 'legs'],
    related: ['surface', 'legs', 'dining', 'desk', 'furniture', 'flat'],
    actions: ['place on', 'eat at', 'work at', 'gather', 'surface'],
    context: ['furniture', 'dining', 'work', 'home']
  },
  
  lamp: {
    category: ['object', 'lighting', 'electric'],
    properties: ['light', 'electric', 'illuminating', 'bulb'],
    related: ['light', 'bulb', 'shade', 'switch', 'illuminate', 'desk'],
    actions: ['illuminate', 'turn on', 'light up', 'switch', 'glow'],
    context: ['lighting', 'home', 'desk', 'night']
  },
  
  mirror: {
    category: ['object', 'reflective', 'glass'],
    properties: ['reflective', 'glass', 'image', 'reverse'],
    related: ['reflection', 'glass', 'image', 'look', 'reverse', 'vanity'],
    actions: ['reflect', 'look', 'check', 'mirror', 'reverse'],
    context: ['bathroom', 'reflection', 'appearance', 'glass']
  },
  
  clock: {
    category: ['object', 'time', 'device'],
    properties: ['time', 'ticking', 'hands', 'numbers'],
    related: ['time', 'hands', 'tick', 'hour', 'minute', 'alarm'],
    actions: ['tick', 'tell time', 'alarm', 'chime', 'count'],
    context: ['time', 'wall', 'ticking', 'schedule']
  },
  
  book: {
    category: ['object', 'reading', 'paper'],
    properties: ['pages', 'reading', 'paper', 'bound'],
    related: ['pages', 'read', 'story', 'cover', 'spine', 'library'],
    actions: ['read', 'open', 'flip', 'bookmark', 'study'],
    context: ['reading', 'library', 'knowledge', 'story']
  },
  
  pen: {
    category: ['object', 'writing', 'tool'],
    properties: ['writing', 'ink', 'handheld', 'tool'],
    related: ['ink', 'write', 'paper', 'click', 'cap', 'ballpoint'],
    actions: ['write', 'click', 'sign', 'draw', 'ink'],
    context: ['writing', 'office', 'school', 'paper']
  },
  
  pencil: {
    category: ['object', 'writing', 'tool'],
    properties: ['writing', 'graphite', 'erasable', 'wood'],
    related: ['graphite', 'eraser', 'lead', 'sharpen', 'wood', 'write'],
    actions: ['write', 'erase', 'sharpen', 'draw', 'sketch'],
    context: ['writing', 'school', 'drawing', 'erasable']
  },
  
  scissors: {
    category: ['object', 'tool', 'cutting'],
    properties: ['cutting', 'blades', 'sharp', 'two handles'],
    related: ['cut', 'blades', 'sharp', 'paper', 'handles', 'snip'],
    actions: ['cut', 'snip', 'trim', 'slice', 'open'],
    context: ['cutting', 'craft', 'office', 'sharp']
  },
  
  key: {
    category: ['object', 'tool', 'security'],
    properties: ['metal', 'unlocking', 'security', 'small'],
    related: ['lock', 'unlock', 'door', 'metal', 'keychain', 'security'],
    actions: ['unlock', 'lock', 'turn', 'insert', 'open'],
    context: ['security', 'door', 'lock', 'access']
  },
  
  wallet: {
    category: ['object', 'accessory', 'storage'],
    properties: ['leather', 'folding', 'money', 'pocket'],
    related: ['money', 'cards', 'leather', 'pocket', 'cash', 'id'],
    actions: ['store', 'carry', 'open', 'pay', 'fold'],
    context: ['money', 'pocket', 'payment', 'personal']
  },
  
  watch: {
    category: ['object', 'accessory', 'time'],
    properties: ['wrist', 'time', 'ticking', 'jewelry'],
    related: ['wrist', 'time', 'band', 'face', 'tick', 'hands'],
    actions: ['wear', 'check time', 'tick', 'wind', 'strap'],
    context: ['time', 'wrist', 'accessory', 'jewelry']
  },
  
  glasses: {
    category: ['object', 'accessory', 'vision'],
    properties: ['lenses', 'vision', 'frames', 'wearable'],
    related: ['lenses', 'frames', 'vision', 'see', 'prescription', 'nose'],
    actions: ['wear', 'see', 'adjust', 'clean', 'focus'],
    context: ['vision', 'eyewear', 'accessory', 'see']
  },
  
  umbrella: {
    category: ['object', 'tool', 'weather'],
    properties: ['rain', 'canopy', 'portable', 'protective'],
    related: ['rain', 'canopy', 'handle', 'open', 'wet', 'protection'],
    actions: ['open', 'close', 'protect', 'shield', 'carry'],
    context: ['rain', 'weather', 'protection', 'portable']
  },
  
  backpack: {
    category: ['object', 'bag', 'storage'],
    properties: ['carrying', 'straps', 'storage', 'portable'],
    related: ['straps', 'carry', 'storage', 'zipper', 'school', 'back'],
    actions: ['carry', 'pack', 'wear', 'store', 'zip'],
    context: ['school', 'travel', 'carrying', 'storage']
  },
  
  bottle: {
    category: ['object', 'container', 'liquid'],
    properties: ['container', 'liquid', 'cylindrical', 'cap'],
    related: ['liquid', 'cap', 'drink', 'water', 'glass', 'plastic'],
    actions: ['drink', 'pour', 'fill', 'cap', 'recycle'],
    context: ['drink', 'container', 'liquid', 'beverage']
  },
  
  cup: {
    category: ['object', 'container', 'drinking'],
    properties: ['drinking', 'container', 'handle', 'ceramic'],
    related: ['drink', 'handle', 'liquid', 'mug', 'sip', 'beverage'],
    actions: ['drink', 'sip', 'hold', 'fill', 'pour'],
    context: ['drinking', 'beverage', 'kitchen', 'container']
  },
  
  plate: {
    category: ['object', 'dish', 'eating'],
    properties: ['flat', 'circular', 'dish', 'ceramic'],
    related: ['food', 'dish', 'eat', 'circular', 'ceramic', 'dinner'],
    actions: ['eat from', 'serve', 'hold food', 'wash', 'stack'],
    context: ['eating', 'dining', 'food', 'kitchen']
  },
  
  fork: {
    category: ['object', 'utensil', 'eating'],
    properties: ['pronged', 'metal', 'utensil', 'eating'],
    related: ['prongs', 'eat', 'stab', 'metal', 'utensil', 'tines'],
    actions: ['stab', 'eat', 'pierce', 'scoop', 'twirl'],
    context: ['eating', 'dining', 'utensil', 'food']
  },
  
  knife: {
    category: ['object', 'tool', 'cutting'],
    properties: ['sharp', 'blade', 'cutting', 'metal'],
    related: ['blade', 'sharp', 'cut', 'handle', 'edge', 'slice'],
    actions: ['cut', 'slice', 'chop', 'stab', 'sharpen'],
    context: ['cutting', 'kitchen', 'sharp', 'tool']
  },
  
  spoon: {
    category: ['object', 'utensil', 'eating'],
    properties: ['scooping', 'bowl-shaped', 'metal', 'utensil'],
    related: ['scoop', 'bowl', 'eat', 'soup', 'metal', 'handle'],
    actions: ['scoop', 'stir', 'eat', 'measure', 'spoon'],
    context: ['eating', 'soup', 'utensil', 'kitchen']
  },
  
  pillow: {
    category: ['object', 'bedding', 'soft'],
    properties: ['soft', 'cushion', 'sleeping', 'fabric'],
    related: ['soft', 'sleep', 'head', 'cushion', 'bed', 'comfort'],
    actions: ['sleep on', 'rest', 'cushion', 'fluff', 'hug'],
    context: ['sleeping', 'bed', 'comfort', 'soft']
  },
  
  blanket: {
    category: ['object', 'bedding', 'warm'],
    properties: ['warm', 'covering', 'fabric', 'cozy'],
    related: ['warm', 'cover', 'cozy', 'bed', 'fabric', 'comfort'],
    actions: ['cover', 'warm', 'wrap', 'snuggle', 'cozy'],
    context: ['bed', 'warm', 'comfort', 'cozy']
  },
  
  towel: {
    category: ['object', 'fabric', 'drying'],
    properties: ['absorbent', 'fabric', 'drying', 'soft'],
    related: ['dry', 'absorbent', 'bathroom', 'wet', 'fabric', 'terry'],
    actions: ['dry', 'wipe', 'absorb', 'wrap', 'hang'],
    context: ['bathroom', 'drying', 'wet', 'absorbent']
  },
  
  soap: {
    category: ['object', 'hygiene', 'cleaning'],
    properties: ['cleaning', 'lathering', 'slippery', 'scented'],
    related: ['clean', 'lather', 'bubbles', 'wash', 'slippery', 'bar'],
    actions: ['wash', 'lather', 'clean', 'scrub', 'bubble'],
    context: ['hygiene', 'cleaning', 'bathroom', 'wash']
  },
  
  toothbrush: {
    category: ['object', 'hygiene', 'dental'],
    properties: ['bristles', 'dental', 'cleaning', 'handle'],
    related: ['bristles', 'teeth', 'brush', 'toothpaste', 'dental', 'clean'],
    actions: ['brush', 'clean teeth', 'scrub', 'rinse', 'dental'],
    context: ['dental', 'hygiene', 'bathroom', 'teeth']
  },
  
  candle: {
    category: ['object', 'lighting', 'wax'],
    properties: ['wax', 'flame', 'scented', 'melting'],
    related: ['wax', 'flame', 'wick', 'scent', 'melt', 'light'],
    actions: ['light', 'burn', 'melt', 'smell', 'flicker'],
    context: ['lighting', 'ambiance', 'scent', 'romantic']
  },
  
  camera: {
    category: ['object', 'device', 'photography'],
    properties: ['photography', 'lens', 'capturing', 'electronic'],
    related: ['photo', 'lens', 'picture', 'capture', 'shutter', 'flash'],
    actions: ['photograph', 'capture', 'shoot', 'focus', 'click'],
    context: ['photography', 'picture', 'memory', 'capture']
  },
  
  remote: {
    category: ['object', 'device', 'control'],
    properties: ['control', 'buttons', 'wireless', 'handheld'],
    related: ['control', 'buttons', 'tv', 'wireless', 'channel', 'battery'],
    actions: ['control', 'press', 'change channel', 'point', 'click'],
    context: ['tv', 'control', 'wireless', 'entertainment']
  },
  
  battery: {
    category: ['object', 'power', 'energy'],
    properties: ['power', 'cylindrical', 'energy', 'portable'],
    related: ['power', 'energy', 'charge', 'aa', 'voltage', 'electric'],
    actions: ['power', 'charge', 'drain', 'insert', 'replace'],
    context: ['power', 'energy', 'device', 'portable']
  },
  
  charger: {
    category: ['object', 'device', 'power'],
    properties: ['charging', 'cable', 'electric', 'plug'],
    related: ['charge', 'cable', 'plug', 'power', 'usb', 'electric'],
    actions: ['charge', 'plug in', 'power', 'connect', 'juice'],
    context: ['charging', 'power', 'device', 'electric']
  },
  
  hammer: {
    category: ['object', 'tool', 'construction'],
    properties: ['hitting', 'metal head', 'handle', 'tool'],
    related: ['nail', 'hit', 'metal', 'handle', 'pound', 'tool'],
    actions: ['hammer', 'hit', 'pound', 'nail', 'strike'],
    context: ['construction', 'tool', 'building', 'repair']
  },
  
  screwdriver: {
    category: ['object', 'tool', 'turning'],
    properties: ['turning', 'metal', 'handle', 'tool'],
    related: ['screw', 'turn', 'phillips', 'flathead', 'handle', 'tool'],
    actions: ['screw', 'turn', 'tighten', 'loosen', 'twist'],
    context: ['tool', 'repair', 'construction', 'assembly']
  },
  
  wrench: {
    category: ['object', 'tool', 'gripping'],
    properties: ['gripping', 'metal', 'adjustable', 'tool'],
    related: ['grip', 'bolt', 'nut', 'turn', 'metal', 'tool'],
    actions: ['grip', 'turn', 'tighten', 'loosen', 'wrench'],
    context: ['tool', 'repair', 'plumbing', 'mechanical']
  },
  
  ladder: {
    category: ['object', 'tool', 'climbing'],
    properties: ['climbing', 'rungs', 'tall', 'portable'],
    related: ['climb', 'rungs', 'steps', 'height', 'reach', 'tall'],
    actions: ['climb', 'reach', 'ascend', 'lean', 'step'],
    context: ['climbing', 'height', 'construction', 'reach']
  },
  
  rope: {
    category: ['object', 'tool', 'binding'],
    properties: ['binding', 'flexible', 'strong', 'twisted'],
    related: ['tie', 'knot', 'bind', 'pull', 'strong', 'cord'],
    actions: ['tie', 'bind', 'pull', 'knot', 'secure'],
    context: ['binding', 'securing', 'climbing', 'tool']
  },
  
  tape: {
    category: ['object', 'adhesive', 'binding'],
    properties: ['sticky', 'adhesive', 'roll', 'binding'],
    related: ['sticky', 'adhesive', 'stick', 'roll', 'dispenser', 'bind'],
    actions: ['stick', 'tape', 'bind', 'seal', 'attach'],
    context: ['adhesive', 'binding', 'repair', 'packaging']
  },
  
  glue: {
    category: ['object', 'adhesive', 'bonding'],
    properties: ['sticky', 'adhesive', 'bonding', 'liquid'],
    related: ['stick', 'adhesive', 'bond', 'paste', 'sticky', 'attach'],
    actions: ['stick', 'glue', 'bond', 'attach', 'paste'],
    context: ['adhesive', 'bonding', 'craft', 'repair']
  },
  
  magnet: {
    category: ['object', 'magnetic', 'attracting'],
    properties: ['magnetic', 'attracting', 'metal', 'force'],
    related: ['attract', 'magnetic', 'metal', 'stick', 'pole', 'fridge'],
    actions: ['attract', 'stick', 'magnetize', 'pull', 'repel'],
    context: ['magnetic', 'attraction', 'metal', 'fridge']
  },
  
  balloon: {
    category: ['object', 'inflatable', 'party'],
    properties: ['inflatable', 'rubber', 'floating', 'colorful'],
    related: ['inflate', 'helium', 'pop', 'float', 'party', 'string'],
    actions: ['inflate', 'pop', 'float', 'tie', 'blow up'],
    context: ['party', 'celebration', 'floating', 'colorful']
  },
  
  ball: {
    category: ['object', 'toy', 'spherical'],
    properties: ['spherical', 'bouncing', 'round', 'playful'],
    related: ['round', 'bounce', 'throw', 'catch', 'play', 'sphere'],
    actions: ['bounce', 'throw', 'catch', 'kick', 'roll'],
    context: ['play', 'sport', 'toy', 'round']
  },
  
  dice: {
    category: ['object', 'game', 'random'],
    properties: ['cubic', 'numbered', 'random', 'game'],
    related: ['cube', 'dots', 'roll', 'random', 'game', 'six'],
    actions: ['roll', 'throw', 'gamble', 'random', 'game'],
    context: ['game', 'random', 'gambling', 'board game']
  },
  
  cards: {
    category: ['object', 'game', 'paper'],
    properties: ['paper', 'deck', 'game', 'suits'],
    related: ['deck', 'shuffle', 'deal', 'suits', 'game', 'poker'],
    actions: ['shuffle', 'deal', 'play', 'draw', 'game'],
    context: ['game', 'gambling', 'magic', 'entertainment']
  }
};
