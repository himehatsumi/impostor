// Food word associations

module.exports = {
  pizza: {
    category: ['food', 'italian', 'fast food'],
    properties: ['round', 'flat', 'cheesy', 'hot', 'sliced'],
    related: ['cheese', 'tomato', 'dough', 'oven', 'delivery', 'pepperoni'],
    actions: ['eat', 'order', 'bake', 'slice', 'share'],
    context: ['restaurant', 'party', 'dinner', 'takeout']
  },
  
  burger: {
    category: ['food', 'american', 'fast food'],
    properties: ['round', 'stacked', 'grilled', 'handheld'],
    related: ['bun', 'patty', 'lettuce', 'cheese', 'fries', 'ketchup'],
    actions: ['eat', 'grill', 'order', 'bite'],
    context: ['restaurant', 'bbq', 'lunch', 'drive-thru']
  },
  
  sushi: {
    category: ['food', 'japanese', 'seafood'],
    properties: ['raw', 'rolled', 'cold', 'small'],
    related: ['rice', 'fish', 'seaweed', 'wasabi', 'soy sauce', 'chopsticks'],
    actions: ['eat', 'roll', 'dip', 'order'],
    context: ['restaurant', 'chopsticks', 'japan', 'plate']
  },
  
  taco: {
    category: ['food', 'mexican', 'street food'],
    properties: ['folded', 'handheld', 'spicy', 'crunchy'],
    related: ['shell', 'meat', 'salsa', 'cheese', 'lettuce', 'tortilla'],
    actions: ['eat', 'fold', 'fill', 'crunch'],
    context: ['mexican', 'tuesday', 'street', 'truck']
  },
  
  pasta: {
    category: ['food', 'italian', 'carbs'],
    properties: ['noodles', 'italian', 'saucy', 'carb'],
    related: ['noodles', 'sauce', 'cheese', 'meatball', 'alfredo', 'marinara'],
    actions: ['boil', 'eat', 'twirl', 'cook'],
    context: ['italian', 'dinner', 'restaurant', 'plate']
  },
  
  ramen: {
    category: ['food', 'japanese', 'noodles'],
    properties: ['hot', 'soupy', 'noodles', 'savory'],
    related: ['noodles', 'broth', 'egg', 'chopsticks', 'bowl', 'pork'],
    actions: ['slurp', 'eat', 'cook', 'order'],
    context: ['japanese', 'bowl', 'restaurant', 'college']
  },
  
  steak: {
    category: ['food', 'meat', 'fancy'],
    properties: ['grilled', 'juicy', 'expensive', 'protein'],
    related: ['beef', 'grill', 'rare', 'medium', 'well done', 'knife'],
    actions: ['grill', 'cut', 'eat', 'cook'],
    context: ['steakhouse', 'bbq', 'dinner', 'fancy']
  },
  
  chicken: {
    category: ['food', 'meat', 'poultry'],
    properties: ['versatile', 'protein', 'white meat', 'common'],
    related: ['wings', 'breast', 'fried', 'roasted', 'nuggets'],
    actions: ['fry', 'grill', 'roast', 'eat'],
    context: ['dinner', 'restaurant', 'fast food', 'meal']
  },
  
  bacon: {
    category: ['food', 'meat', 'breakfast'],
    properties: ['crispy', 'salty', 'fatty', 'strips'],
    related: ['pork', 'strips', 'breakfast', 'eggs', 'crispy'],
    actions: ['fry', 'crisp', 'eat', 'cook'],
    context: ['breakfast', 'morning', 'pan', 'brunch']
  },
  
  eggs: {
    category: ['food', 'breakfast', 'protein'],
    properties: ['oval', 'fragile', 'versatile', 'protein'],
    related: ['yolk', 'shell', 'scrambled', 'fried', 'boiled', 'chicken'],
    actions: ['crack', 'scramble', 'fry', 'boil'],
    context: ['breakfast', 'morning', 'cooking', 'carton']
  },
  
  bread: {
    category: ['food', 'baked', 'carbs'],
    properties: ['baked', 'sliced', 'carb', 'staple'],
    related: ['loaf', 'slice', 'toast', 'butter', 'wheat', 'yeast'],
    actions: ['bake', 'slice', 'toast', 'eat'],
    context: ['bakery', 'sandwich', 'breakfast', 'loaf']
  },
  
  cheese: {
    category: ['food', 'dairy', 'ingredient'],
    properties: ['dairy', 'melty', 'aged', 'yellow'],
    related: ['milk', 'cheddar', 'mozzarella', 'swiss', 'wheel', 'slice'],
    actions: ['melt', 'grate', 'age', 'eat'],
    context: ['dairy', 'sandwich', 'pizza', 'wine']
  },
  
  chocolate: {
    category: ['food', 'dessert', 'sweet'],
    properties: ['sweet', 'brown', 'melty', 'addictive'],
    related: ['cocoa', 'candy', 'bar', 'milk', 'dark', 'sweet'],
    actions: ['melt', 'eat', 'crave', 'unwrap'],
    context: ['dessert', 'candy', 'valentine', 'treat']
  },
  
  icecream: {
    category: ['food', 'dessert', 'frozen'],
    properties: ['cold', 'sweet', 'creamy', 'frozen'],
    related: ['cone', 'scoop', 'flavor', 'vanilla', 'chocolate', 'sprinkles'],
    actions: ['scoop', 'lick', 'melt', 'eat'],
    context: ['dessert', 'summer', 'parlor', 'cone']
  },
  
  cake: {
    category: ['food', 'dessert', 'baked'],
    properties: ['sweet', 'layered', 'frosted', 'celebration'],
    related: ['frosting', 'birthday', 'slice', 'candles', 'layers', 'icing'],
    actions: ['bake', 'frost', 'slice', 'celebrate'],
    context: ['birthday', 'celebration', 'dessert', 'party']
  },
  
  cookie: {
    category: ['food', 'dessert', 'baked'],
    properties: ['sweet', 'round', 'baked', 'crunchy'],
    related: ['chocolate chip', 'dough', 'oven', 'milk', 'crumbs'],
    actions: ['bake', 'eat', 'dunk', 'crumble'],
    context: ['dessert', 'snack', 'milk', 'jar']
  },
  
  donut: {
    category: ['food', 'dessert', 'fried'],
    properties: ['round', 'hole', 'fried', 'glazed'],
    related: ['hole', 'glaze', 'sprinkles', 'coffee', 'box', 'dozen'],
    actions: ['fry', 'glaze', 'eat', 'dunk'],
    context: ['breakfast', 'coffee', 'shop', 'box']
  },
  
  coffee: {
    category: ['drink', 'hot', 'caffeinated'],
    properties: ['hot', 'bitter', 'caffeinated', 'brown'],
    related: ['caffeine', 'beans', 'cup', 'espresso', 'latte', 'mug'],
    actions: ['brew', 'drink', 'sip', 'wake up'],
    context: ['morning', 'cafe', 'work', 'energy']
  },
  
  tea: {
    category: ['drink', 'hot', 'herbal'],
    properties: ['hot', 'steeped', 'calming', 'aromatic'],
    related: ['leaves', 'cup', 'kettle', 'green', 'black', 'bag'],
    actions: ['steep', 'sip', 'brew', 'drink'],
    context: ['afternoon', 'british', 'relaxation', 'cup']
  },
  
  beer: {
    category: ['drink', 'alcohol', 'fermented'],
    properties: ['alcoholic', 'fizzy', 'bitter', 'golden'],
    related: ['hops', 'bottle', 'can', 'foam', 'brewery', 'pint'],
    actions: ['drink', 'pour', 'brew', 'cheers'],
    context: ['bar', 'party', 'pub', 'social']
  },
  
  wine: {
    category: ['drink', 'alcohol', 'fancy'],
    properties: ['alcoholic', 'aged', 'fancy', 'grape'],
    related: ['grape', 'bottle', 'glass', 'red', 'white', 'cork'],
    actions: ['pour', 'sip', 'age', 'taste'],
    context: ['dinner', 'fancy', 'vineyard', 'date']
  },
  
  salad: {
    category: ['food', 'healthy', 'vegetable'],
    properties: ['healthy', 'green', 'fresh', 'mixed'],
    related: ['lettuce', 'dressing', 'vegetables', 'bowl', 'greens', 'fork'],
    actions: ['toss', 'eat', 'dress', 'mix'],
    context: ['healthy', 'lunch', 'side', 'diet']
  },
  
  soup: {
    category: ['food', 'liquid', 'hot'],
    properties: ['hot', 'liquid', 'comforting', 'bowl'],
    related: ['broth', 'bowl', 'spoon', 'vegetables', 'noodles', 'chicken'],
    actions: ['slurp', 'eat', 'simmer', 'warm up'],
    context: ['winter', 'sick', 'comfort', 'bowl']
  },
  
  sandwich: {
    category: ['food', 'lunch', 'handheld'],
    properties: ['layered', 'handheld', 'bread', 'versatile'],
    related: ['bread', 'meat', 'cheese', 'lettuce', 'mayo', 'deli'],
    actions: ['make', 'eat', 'bite', 'pack'],
    context: ['lunch', 'deli', 'picnic', 'work']
  },
  
  hotdog: {
    category: ['food', 'american', 'fast food'],
    properties: ['long', 'bun', 'grilled', 'stadium'],
    related: ['bun', 'sausage', 'mustard', 'ketchup', 'relish', 'baseball'],
    actions: ['grill', 'eat', 'top', 'bite'],
    context: ['baseball', 'bbq', 'stadium', 'street']
  },
  
  popcorn: {
    category: ['food', 'snack', 'movie'],
    properties: ['popped', 'buttery', 'crunchy', 'light'],
    related: ['kernel', 'butter', 'movie', 'bowl', 'salt', 'bag'],
    actions: ['pop', 'eat', 'butter', 'munch'],
    context: ['movie', 'theater', 'snack', 'microwave']
  },
  
  chips: {
    category: ['food', 'snack', 'crunchy'],
    properties: ['crunchy', 'salty', 'fried', 'bagged'],
    related: ['potato', 'bag', 'salt', 'dip', 'crispy', 'crunch'],
    actions: ['crunch', 'eat', 'dip', 'munch'],
    context: ['snack', 'party', 'bag', 'couch']
  },
  
  fries: {
    category: ['food', 'side', 'fried'],
    properties: ['fried', 'salty', 'golden', 'crispy'],
    related: ['potato', 'salt', 'ketchup', 'golden', 'crispy', 'fast food'],
    actions: ['fry', 'eat', 'dip', 'salt'],
    context: ['fast food', 'side', 'burger', 'restaurant']
  },
  
  apple: {
    category: ['food', 'fruit', 'healthy'],
    properties: ['round', 'crunchy', 'red', 'healthy'],
    related: ['fruit', 'core', 'seeds', 'tree', 'doctor', 'pie'],
    actions: ['bite', 'crunch', 'pick', 'eat'],
    context: ['healthy', 'snack', 'orchard', 'lunch']
  },
  
  banana: {
    category: ['food', 'fruit', 'yellow'],
    properties: ['yellow', 'curved', 'peelable', 'potassium'],
    related: ['peel', 'yellow', 'potassium', 'bunch', 'monkey', 'slip'],
    actions: ['peel', 'eat', 'slip', 'ripen'],
    context: ['fruit', 'breakfast', 'smoothie', 'snack']
  },
  
  orange: {
    category: ['food', 'fruit', 'citrus'],
    properties: ['citrus', 'round', 'juicy', 'vitamin c'],
    related: ['citrus', 'juice', 'peel', 'segments', 'vitamin c', 'zest'],
    actions: ['peel', 'squeeze', 'eat', 'juice'],
    context: ['fruit', 'juice', 'breakfast', 'healthy']
  },
  
  strawberry: {
    category: ['food', 'fruit', 'berry'],
    properties: ['red', 'sweet', 'seeded', 'small'],
    related: ['berry', 'seeds', 'red', 'sweet', 'shortcake', 'cream'],
    actions: ['pick', 'eat', 'hull', 'slice'],
    context: ['fruit', 'dessert', 'summer', 'field']
  }
};
