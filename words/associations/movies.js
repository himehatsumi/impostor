// Movie word associations

module.exports = {
  titanic: {
    category: ['movie', 'romance', 'disaster'],
    properties: ['romantic', 'tragic', 'ship', 'iceberg'],
    related: ['ship', 'iceberg', 'jack', 'rose', 'door', 'ocean'],
    actions: ['sink', 'love', 'draw', 'freeze', 'survive'],
    context: ['ocean', 'romance', 'disaster', 'classic']
  },
  
  avatar: {
    category: ['movie', 'sci-fi', 'action'],
    properties: ['blue', 'alien', 'pandora', 'visual'],
    related: ['navi', 'pandora', 'blue', 'tree', 'ikran', 'eywa'],
    actions: ['connect', 'fly', 'bond', 'fight', 'see'],
    context: ['alien', 'planet', 'nature', 'sci-fi']
  },
  
  'star-wars': {
    category: ['movie', 'sci-fi', 'space', 'franchise'],
    properties: ['space', 'force', 'lightsaber', 'epic'],
    related: ['force', 'lightsaber', 'jedi', 'sith', 'vader', 'skywalker'],
    actions: ['use force', 'duel', 'fly', 'rebel', 'train'],
    context: ['space', 'galaxy', 'force', 'epic']
  },
  
  marvel: {
    category: ['movie', 'superhero', 'franchise'],
    properties: ['superhero', 'cinematic', 'universe', 'action'],
    related: ['avengers', 'iron man', 'captain', 'thor', 'hulk', 'infinity'],
    actions: ['assemble', 'fight', 'save world', 'snap', 'hero'],
    context: ['superhero', 'universe', 'action', 'comic']
  },
  
  batman: {
    category: ['movie', 'superhero', 'dc'],
    properties: ['dark', 'vigilante', 'bat', 'gotham'],
    related: ['gotham', 'joker', 'bat', 'wayne', 'cave', 'alfred'],
    actions: ['fight crime', 'brood', 'investigate', 'glide', 'protect'],
    context: ['gotham', 'dark', 'vigilante', 'hero']
  },
  
  superman: {
    category: ['movie', 'superhero', 'dc'],
    properties: ['super', 'flying', 'alien', 'heroic'],
    related: ['krypton', 'cape', 'fly', 'clark kent', 'lois', 'metropolis'],
    actions: ['fly', 'save', 'laser eyes', 'lift', 'hero'],
    context: ['metropolis', 'hero', 'alien', 'super']
  },
  
  spiderman: {
    category: ['movie', 'superhero', 'marvel'],
    properties: ['web', 'spider', 'teenage', 'swinging'],
    related: ['web', 'spider', 'peter parker', 'swing', 'responsibility', 'mj'],
    actions: ['swing', 'web', 'climb', 'sense', 'quip'],
    context: ['new york', 'hero', 'teenager', 'responsibility']
  },
  
  'jurassic-park': {
    category: ['movie', 'sci-fi', 'adventure'],
    properties: ['dinosaur', 'park', 'cloning', 'dangerous'],
    related: ['dinosaur', 'trex', 'raptor', 'park', 'amber', 'chaos'],
    actions: ['clone', 'run', 'escape', 'roar', 'survive'],
    context: ['dinosaur', 'park', 'island', 'danger']
  },
  
  jaws: {
    category: ['movie', 'horror', 'thriller'],
    properties: ['shark', 'ocean', 'scary', 'suspenseful'],
    related: ['shark', 'ocean', 'beach', 'bite', 'boat', 'music'],
    actions: ['swim', 'hunt', 'bite', 'fear', 'close beach'],
    context: ['ocean', 'shark', 'fear', 'summer']
  },
  
  alien: {
    category: ['movie', 'horror', 'sci-fi'],
    properties: ['space', 'horror', 'xenomorph', 'dark'],
    related: ['xenomorph', 'space', 'ripley', 'facehugger', 'chestburster', 'nostromo'],
    actions: ['hunt', 'hide', 'escape', 'survive', 'burst'],
    context: ['space', 'horror', 'alien', 'survival']
  },
  
  terminator: {
    category: ['movie', 'sci-fi', 'action'],
    properties: ['robot', 'time travel', 'apocalyptic', 'cyborg'],
    related: ['cyborg', 'skynet', 'time travel', 'arnold', 'judgment day', 'endoskeleton'],
    actions: ['terminate', 'time travel', 'protect', 'hunt', 'be back'],
    context: ['future', 'robot', 'apocalypse', 'time']
  },
  
  matrix: {
    category: ['movie', 'sci-fi', 'action'],
    properties: ['virtual', 'simulation', 'philosophical', 'bullet time'],
    related: ['neo', 'simulation', 'red pill', 'agent', 'bullet time', 'matrix'],
    actions: ['dodge', 'hack', 'wake up', 'bend', 'choose'],
    context: ['virtual', 'reality', 'simulation', 'choice']
  },
  
  inception: {
    category: ['movie', 'sci-fi', 'thriller'],
    properties: ['dream', 'layered', 'complex', 'mind-bending'],
    related: ['dream', 'totem', 'limbo', 'kick', 'spinning top', 'layers'],
    actions: ['dream', 'plant idea', 'kick', 'spin', 'extract'],
    context: ['dream', 'mind', 'layers', 'reality']
  },
  
  interstellar: {
    category: ['movie', 'sci-fi', 'space'],
    properties: ['space', 'time', 'emotional', 'wormhole'],
    related: ['space', 'wormhole', 'black hole', 'time', 'cooper', 'murph'],
    actions: ['travel', 'explore', 'survive', 'love', 'transcend'],
    context: ['space', 'time', 'love', 'survival']
  },
  
  shawshank: {
    category: ['movie', 'drama', 'prison'],
    properties: ['prison', 'hope', 'redemption', 'friendship'],
    related: ['prison', 'hope', 'escape', 'andy', 'red', 'tunnel'],
    actions: ['escape', 'hope', 'dig', 'redeem', 'free'],
    context: ['prison', 'hope', 'freedom', 'redemption']
  },
  
  godfather: {
    category: ['movie', 'crime', 'drama', 'classic'],
    properties: ['mafia', 'family', 'crime', 'classic'],
    related: ['mafia', 'family', 'offer', 'corleone', 'horse head', 'don'],
    actions: ['refuse offer', 'family', 'crime', 'respect', 'revenge'],
    context: ['mafia', 'family', 'crime', 'classic']
  },
  
  'pulp-fiction': {
    category: ['movie', 'crime', 'drama'],
    properties: ['nonlinear', 'stylish', 'violent', 'quotable'],
    related: ['briefcase', 'burger', 'dance', 'hitman', 'tarantino', 'ezekiel'],
    actions: ['quote', 'dance', 'shoot', 'clean', 'say what'],
    context: ['crime', 'nonlinear', 'stylish', 'quotable']
  },
  
  'fight-club': {
    category: ['movie', 'drama', 'thriller'],
    properties: ['underground', 'twist', 'anarchist', 'violent'],
    related: ['soap', 'tyler', 'rules', 'fight', 'twist', 'project mayhem'],
    actions: ['fight', 'break rules', 'rebel', 'twist', 'soap'],
    context: ['underground', 'anarchy', 'identity', 'twist']
  },
  
  'forrest-gump': {
    category: ['movie', 'drama', 'comedy'],
    properties: ['heartwarming', 'historical', 'simple', 'running'],
    related: ['run', 'chocolate', 'jenny', 'shrimp', 'feather', 'bench'],
    actions: ['run', 'quote', 'shrimp', 'love', 'inspire'],
    context: ['life', 'history', 'running', 'chocolate']
  },
  
  gladiator: {
    category: ['movie', 'action', 'historical'],
    properties: ['roman', 'arena', 'revenge', 'epic'],
    related: ['rome', 'arena', 'maximus', 'emperor', 'sword', 'colosseum'],
    actions: ['fight', 'entertain', 'avenge', 'gladiate', 'win'],
    context: ['rome', 'arena', 'revenge', 'epic']
  },
  
  'lord-of-the-rings': {
    category: ['movie', 'fantasy', 'epic', 'trilogy'],
    properties: ['fantasy', 'epic', 'ring', 'quest'],
    related: ['ring', 'hobbit', 'gandalf', 'mordor', 'fellowship', 'precious'],
    actions: ['quest', 'destroy ring', 'walk', 'fight', 'fellowship'],
    context: ['fantasy', 'epic', 'quest', 'middle earth']
  },
  
  'harry-potter': {
    category: ['movie', 'fantasy', 'magic', 'franchise'],
    properties: ['magic', 'wizard', 'school', 'chosen one'],
    related: ['wand', 'hogwarts', 'wizard', 'voldemort', 'spell', 'scar'],
    actions: ['cast spell', 'fly', 'study', 'fight', 'magic'],
    context: ['magic', 'school', 'wizard', 'chosen']
  },
  
  pirates: {
    category: ['movie', 'adventure', 'fantasy'],
    properties: ['pirate', 'caribbean', 'adventure', 'rum'],
    related: ['pirate', 'jack sparrow', 'ship', 'treasure', 'rum', 'compass'],
    actions: ['sail', 'plunder', 'drink rum', 'escape', 'savvy'],
    context: ['caribbean', 'pirate', 'adventure', 'sea']
  },
  
  'indiana-jones': {
    category: ['movie', 'adventure', 'action'],
    properties: ['adventure', 'archaeology', 'whip', 'treasure'],
    related: ['whip', 'hat', 'archaeology', 'treasure', 'snake', 'ark'],
    actions: ['explore', 'whip', 'run', 'discover', 'adventure'],
    context: ['adventure', 'archaeology', 'treasure', 'danger']
  },
  
  'back-to-the-future': {
    category: ['movie', 'sci-fi', 'comedy'],
    properties: ['time travel', 'delorean', 'comedy', '80s'],
    related: ['delorean', 'time travel', 'doc', 'marty', '88 mph', 'flux capacitor'],
    actions: ['time travel', 'accelerate', 'change past', 'invent', 'skateboard'],
    context: ['time travel', '80s', 'delorean', 'future']
  },
  
  ghostbusters: {
    category: ['movie', 'comedy', 'supernatural'],
    properties: ['ghost', 'comedy', 'proton pack', 'paranormal'],
    related: ['ghost', 'proton pack', 'slimer', 'marshmallow man', 'ecto-1', 'trap'],
    actions: ['bust ghosts', 'trap', 'call', 'cross streams', 'hunt'],
    context: ['ghost', 'paranormal', 'comedy', 'new york']
  },
  
  rocky: {
    category: ['movie', 'sports', 'drama'],
    properties: ['boxing', 'underdog', 'training', 'inspirational'],
    related: ['boxing', 'training', 'adrian', 'steps', 'montage', 'champion'],
    actions: ['train', 'box', 'run', 'fight', 'win'],
    context: ['boxing', 'underdog', 'training', 'philadelphia']
  },
  
  'top-gun': {
    category: ['movie', 'action', 'military'],
    properties: ['fighter jet', 'military', 'maverick', 'aerial'],
    related: ['fighter jet', 'maverick', 'goose', 'volleyball', 'danger zone', 'pilot'],
    actions: ['fly', 'dogfight', 'buzz tower', 'eject', 'need speed'],
    context: ['military', 'jet', 'pilot', 'danger']
  },
  
  'die-hard': {
    category: ['movie', 'action', 'thriller'],
    properties: ['action', 'christmas', 'skyscraper', 'one man'],
    related: ['skyscraper', 'christmas', 'john mcclane', 'yippee', 'barefoot', 'terrorist'],
    actions: ['fight', 'survive', 'yippee', 'crawl', 'save'],
    context: ['action', 'christmas', 'skyscraper', 'hero']
  },
  
  shining: {
    category: ['movie', 'horror', 'psychological'],
    properties: ['horror', 'hotel', 'madness', 'kubrick'],
    related: ['hotel', 'jack', 'axe', 'redrum', 'twins', 'typewriter'],
    actions: ['go mad', 'type', 'chase', 'freeze', 'haunt'],
    context: ['hotel', 'horror', 'madness', 'winter']
  },
  
  exorcist: {
    category: ['movie', 'horror', 'supernatural'],
    properties: ['possession', 'demon', 'scary', 'religious'],
    related: ['possession', 'demon', 'priest', 'head spin', 'stairs', 'crucifix'],
    actions: ['possess', 'exorcise', 'spin head', 'levitate', 'vomit'],
    context: ['possession', 'demon', 'horror', 'religious']
  },
  
  scream: {
    category: ['movie', 'horror', 'slasher'],
    properties: ['slasher', 'mask', 'meta', 'phone'],
    related: ['ghostface', 'mask', 'phone', 'knife', 'rules', 'scream'],
    actions: ['call', 'stab', 'scream', 'run', 'survive'],
    context: ['slasher', 'horror', 'phone', 'mask']
  },
  
  halloween: {
    category: ['movie', 'horror', 'slasher'],
    properties: ['slasher', 'mask', 'michael', 'october'],
    related: ['michael myers', 'mask', 'knife', 'halloween', 'laurie', 'shape'],
    actions: ['stalk', 'kill', 'hide', 'survive', 'return'],
    context: ['halloween', 'slasher', 'mask', 'night']
  },
  
  'friday-the-13th': {
    category: ['movie', 'horror', 'slasher'],
    properties: ['slasher', 'jason', 'hockey mask', 'camp'],
    related: ['jason', 'hockey mask', 'machete', 'camp', 'lake', 'friday'],
    actions: ['kill', 'stalk', 'drown', 'slash', 'return'],
    context: ['camp', 'lake', 'slasher', 'friday']
  },
  
  nightmare: {
    category: ['movie', 'horror', 'supernatural'],
    properties: ['dream', 'freddy', 'nightmare', 'slasher'],
    related: ['freddy', 'dream', 'glove', 'elm street', 'nightmare', 'sleep'],
    actions: ['dream', 'slash', 'haunt', 'kill', 'stay awake'],
    context: ['dream', 'nightmare', 'sleep', 'elm street']
  },
  
  saw: {
    category: ['movie', 'horror', 'torture'],
    properties: ['trap', 'jigsaw', 'torture', 'game'],
    related: ['jigsaw', 'trap', 'game', 'puppet', 'saw', 'choice'],
    actions: ['trap', 'play game', 'choose', 'torture', 'survive'],
    context: ['trap', 'game', 'torture', 'choice']
  },
  
  conjuring: {
    category: ['movie', 'horror', 'supernatural'],
    properties: ['haunted', 'demon', 'paranormal', 'based on true'],
    related: ['warren', 'demon', 'haunted', 'doll', 'paranormal', 'possession'],
    actions: ['investigate', 'exorcise', 'haunt', 'possess', 'help'],
    context: ['haunted', 'paranormal', 'demon', 'investigation']
  },
  
  it: {
    category: ['movie', 'horror', 'stephen king'],
    properties: ['clown', 'pennywise', 'sewer', 'fear'],
    related: ['pennywise', 'clown', 'balloon', 'sewer', 'float', 'derry'],
    actions: ['float', 'scare', 'feed', 'face fear', 'return'],
    context: ['clown', 'sewer', 'fear', 'childhood']
  },
  
  shrek: {
    category: ['movie', 'animation', 'comedy'],
    properties: ['ogre', 'fairy tale', 'comedy', 'swamp'],
    related: ['ogre', 'donkey', 'swamp', 'fairy tale', 'onion', 'layers'],
    actions: ['rescue', 'roar', 'layers', 'love', 'quest'],
    context: ['fairy tale', 'swamp', 'ogre', 'comedy']
  },
  
  'toy-story': {
    category: ['movie', 'animation', 'pixar'],
    properties: ['toys', 'animated', 'friendship', 'pixar'],
    related: ['woody', 'buzz', 'toys', 'andy', 'infinity', 'friend'],
    actions: ['play', 'rescue', 'infinity', 'friendship', 'animate'],
    context: ['toys', 'childhood', 'friendship', 'pixar']
  },
  
  'find-nemo': {
    category: ['movie', 'animation', 'pixar'],
    properties: ['fish', 'ocean', 'finding', 'clownfish'],
    related: ['clownfish', 'dory', 'ocean', 'finding', 'sydney', 'just keep swimming'],
    actions: ['swim', 'find', 'remember', 'escape', 'ocean'],
    context: ['ocean', 'fish', 'finding', 'adventure']
  },
  
  frozen: {
    category: ['movie', 'animation', 'disney'],
    properties: ['ice', 'disney', 'sisters', 'musical'],
    related: ['elsa', 'anna', 'ice', 'let it go', 'olaf', 'frozen'],
    actions: ['freeze', 'let go', 'build snowman', 'sing', 'thaw'],
    context: ['ice', 'sisters', 'disney', 'musical']
  },
  
  'lion-king': {
    category: ['movie', 'animation', 'disney'],
    properties: ['lion', 'disney', 'circle of life', 'africa'],
    related: ['simba', 'mufasa', 'hakuna matata', 'pride rock', 'circle', 'scar'],
    actions: ['roar', 'rule', 'remember', 'hakuna matata', 'return'],
    context: ['africa', 'lion', 'disney', 'circle of life']
  },
  
  'beauty-and-the-beast': {
    category: ['movie', 'animation', 'disney'],
    properties: ['fairy tale', 'disney', 'beast', 'romance'],
    related: ['beast', 'belle', 'rose', 'castle', 'enchanted', 'library'],
    actions: ['transform', 'love', 'read', 'dance', 'break curse'],
    context: ['fairy tale', 'castle', 'romance', 'disney']
  }
};
