// Animal word associations

module.exports = {
  dog: {
    category: ['animal', 'pet', 'mammal'],
    properties: ['furry', 'loyal', 'four-legged', 'domesticated'],
    related: ['bark', 'tail', 'collar', 'leash', 'bone', 'fetch'],
    actions: ['bark', 'fetch', 'wag', 'run', 'play'],
    context: ['home', 'park', 'walk', 'pet store']
  },
  
  cat: {
    category: ['animal', 'pet', 'mammal'],
    properties: ['furry', 'independent', 'four-legged', 'agile'],
    related: ['meow', 'whiskers', 'claws', 'tail', 'litter', 'purr'],
    actions: ['meow', 'purr', 'scratch', 'climb', 'sleep'],
    context: ['home', 'couch', 'window', 'lap']
  },
  
  lion: {
    category: ['animal', 'wild', 'predator', 'big cat'],
    properties: ['fierce', 'maned', 'king', 'powerful'],
    related: ['mane', 'roar', 'pride', 'savanna', 'king', 'jungle'],
    actions: ['roar', 'hunt', 'rule', 'prowl'],
    context: ['africa', 'savanna', 'pride', 'wild']
  },
  
  tiger: {
    category: ['animal', 'wild', 'predator', 'big cat'],
    properties: ['striped', 'fierce', 'orange', 'solitary'],
    related: ['stripes', 'jungle', 'predator', 'orange', 'teeth', 'claws'],
    actions: ['hunt', 'stalk', 'pounce', 'roar'],
    context: ['jungle', 'asia', 'wild', 'endangered']
  },
  
  bear: {
    category: ['animal', 'wild', 'mammal'],
    properties: ['large', 'furry', 'hibernating', 'powerful'],
    related: ['honey', 'cave', 'hibernate', 'claws', 'forest', 'grizzly'],
    actions: ['hibernate', 'fish', 'roar', 'climb'],
    context: ['forest', 'cave', 'winter', 'wild']
  },
  
  elephant: {
    category: ['animal', 'wild', 'mammal', 'large'],
    properties: ['huge', 'trunked', 'gray', 'intelligent'],
    related: ['trunk', 'tusks', 'memory', 'africa', 'herd', 'ivory'],
    actions: ['trumpet', 'spray', 'remember', 'stomp'],
    context: ['africa', 'savanna', 'zoo', 'herd']
  },
  
  monkey: {
    category: ['animal', 'primate', 'wild'],
    properties: ['agile', 'intelligent', 'playful', 'tailed'],
    related: ['banana', 'tree', 'tail', 'jungle', 'swing', 'primate'],
    actions: ['swing', 'climb', 'play', 'chatter'],
    context: ['jungle', 'tree', 'zoo', 'wild']
  },
  
  giraffe: {
    category: ['animal', 'wild', 'mammal'],
    properties: ['tall', 'long-necked', 'spotted', 'gentle'],
    related: ['neck', 'spots', 'tall', 'africa', 'leaves', 'savanna'],
    actions: ['reach', 'eat', 'walk', 'tower'],
    context: ['africa', 'savanna', 'zoo', 'tall']
  },
  
  zebra: {
    category: ['animal', 'wild', 'mammal'],
    properties: ['striped', 'black and white', 'horse-like', 'african'],
    related: ['stripes', 'black', 'white', 'africa', 'herd', 'savanna'],
    actions: ['run', 'graze', 'gallop', 'migrate'],
    context: ['africa', 'savanna', 'herd', 'stripes']
  },
  
  horse: {
    category: ['animal', 'domesticated', 'mammal'],
    properties: ['fast', 'rideable', 'maned', 'strong'],
    related: ['saddle', 'mane', 'gallop', 'stable', 'rider', 'hooves'],
    actions: ['gallop', 'neigh', 'trot', 'ride'],
    context: ['farm', 'stable', 'race', 'riding']
  },
  
  cow: {
    category: ['animal', 'farm', 'mammal'],
    properties: ['large', 'milk-producing', 'spotted', 'grazing'],
    related: ['milk', 'moo', 'udder', 'farm', 'beef', 'pasture'],
    actions: ['moo', 'graze', 'produce milk', 'chew'],
    context: ['farm', 'pasture', 'dairy', 'field']
  },
  
  pig: {
    category: ['animal', 'farm', 'mammal'],
    properties: ['pink', 'snout', 'curly tail', 'muddy'],
    related: ['mud', 'oink', 'snout', 'farm', 'bacon', 'pen'],
    actions: ['oink', 'wallow', 'root', 'eat'],
    context: ['farm', 'mud', 'pen', 'barn']
  },
  
  chicken: {
    category: ['animal', 'farm', 'bird'],
    properties: ['feathered', 'egg-laying', 'clucking', 'flightless'],
    related: ['egg', 'cluck', 'coop', 'rooster', 'feathers', 'farm'],
    actions: ['cluck', 'lay eggs', 'peck', 'scratch'],
    context: ['farm', 'coop', 'eggs', 'yard']
  },
  
  duck: {
    category: ['animal', 'bird', 'waterfowl'],
    properties: ['aquatic', 'waddling', 'quacking', 'webbed feet'],
    related: ['quack', 'pond', 'webbed feet', 'bill', 'water', 'waddle'],
    actions: ['quack', 'swim', 'waddle', 'dive'],
    context: ['pond', 'lake', 'water', 'park']
  },
  
  eagle: {
    category: ['animal', 'bird', 'predator'],
    properties: ['majestic', 'soaring', 'sharp-eyed', 'powerful'],
    related: ['wings', 'talons', 'soar', 'nest', 'freedom', 'bald'],
    actions: ['soar', 'hunt', 'dive', 'screech'],
    context: ['sky', 'mountain', 'freedom', 'wild']
  },
  
  owl: {
    category: ['animal', 'bird', 'nocturnal'],
    properties: ['nocturnal', 'wise', 'hooting', 'big-eyed'],
    related: ['hoot', 'night', 'wise', 'tree', 'mouse', 'feathers'],
    actions: ['hoot', 'hunt', 'fly', 'rotate head'],
    context: ['night', 'forest', 'tree', 'wisdom']
  },
  
  penguin: {
    category: ['animal', 'bird', 'flightless'],
    properties: ['flightless', 'waddling', 'tuxedo', 'antarctic'],
    related: ['waddle', 'ice', 'tuxedo', 'fish', 'colony', 'slide'],
    actions: ['waddle', 'swim', 'slide', 'huddle'],
    context: ['antarctica', 'ice', 'cold', 'colony']
  },
  
  parrot: {
    category: ['animal', 'bird', 'tropical'],
    properties: ['colorful', 'talking', 'tropical', 'intelligent'],
    related: ['talk', 'colorful', 'tropical', 'pirate', 'mimic', 'perch'],
    actions: ['talk', 'mimic', 'squawk', 'fly'],
    context: ['tropical', 'pirate', 'pet', 'cage']
  },
  
  shark: {
    category: ['animal', 'fish', 'predator'],
    properties: ['predatory', 'finned', 'toothy', 'ocean'],
    related: ['teeth', 'fin', 'ocean', 'jaws', 'attack', 'great white'],
    actions: ['swim', 'hunt', 'bite', 'circle'],
    context: ['ocean', 'water', 'danger', 'predator']
  },
  
  dolphin: {
    category: ['animal', 'mammal', 'aquatic'],
    properties: ['intelligent', 'playful', 'aquatic', 'friendly'],
    related: ['ocean', 'intelligent', 'pod', 'jump', 'echolocation', 'flipper'],
    actions: ['jump', 'swim', 'click', 'play'],
    context: ['ocean', 'sea', 'aquarium', 'pod']
  },
  
  whale: {
    category: ['animal', 'mammal', 'aquatic', 'large'],
    properties: ['huge', 'aquatic', 'singing', 'majestic'],
    related: ['ocean', 'blowhole', 'song', 'pod', 'breach', 'blue'],
    actions: ['breach', 'sing', 'dive', 'spout'],
    context: ['ocean', 'deep', 'pod', 'migration']
  },
  
  octopus: {
    category: ['animal', 'sea creature', 'invertebrate'],
    properties: ['eight-armed', 'intelligent', 'ink', 'camouflage'],
    related: ['tentacles', 'ink', 'suction cups', 'ocean', 'camouflage'],
    actions: ['squeeze', 'ink', 'camouflage', 'swim'],
    context: ['ocean', 'underwater', 'reef', 'deep']
  },
  
  crab: {
    category: ['animal', 'crustacean', 'sea creature'],
    properties: ['clawed', 'sideways', 'shelled', 'pinching'],
    related: ['claws', 'shell', 'beach', 'pinch', 'sideways', 'ocean'],
    actions: ['pinch', 'scuttle', 'sidewalk', 'hide'],
    context: ['beach', 'ocean', 'sand', 'seafood']
  },
  
  snake: {
    category: ['animal', 'reptile', 'predator'],
    properties: ['slithering', 'scaled', 'legless', 'venomous'],
    related: ['scales', 'venom', 'fangs', 'slither', 'shed', 'hiss'],
    actions: ['slither', 'hiss', 'bite', 'shed'],
    context: ['jungle', 'desert', 'danger', 'wild']
  },
  
  lizard: {
    category: ['animal', 'reptile', 'small'],
    properties: ['scaled', 'cold-blooded', 'tailed', 'quick'],
    related: ['scales', 'tail', 'sun', 'rock', 'gecko', 'iguana'],
    actions: ['bask', 'scurry', 'shed', 'climb'],
    context: ['desert', 'rock', 'sun', 'pet']
  },
  
  turtle: {
    category: ['animal', 'reptile', 'shelled'],
    properties: ['shelled', 'slow', 'ancient', 'aquatic'],
    related: ['shell', 'slow', 'tortoise', 'sea', 'hide', 'flippers'],
    actions: ['hide', 'swim', 'crawl', 'retract'],
    context: ['ocean', 'beach', 'slow', 'ancient']
  },
  
  frog: {
    category: ['animal', 'amphibian', 'small'],
    properties: ['jumping', 'amphibious', 'croaking', 'green'],
    related: ['hop', 'croak', 'pond', 'lily pad', 'tongue', 'tadpole'],
    actions: ['hop', 'croak', 'catch flies', 'swim'],
    context: ['pond', 'swamp', 'rain', 'lily pad']
  },
  
  butterfly: {
    category: ['animal', 'insect', 'flying'],
    properties: ['colorful', 'winged', 'delicate', 'metamorphic'],
    related: ['wings', 'colorful', 'flower', 'caterpillar', 'cocoon', 'flutter'],
    actions: ['flutter', 'pollinate', 'transform', 'fly'],
    context: ['garden', 'flower', 'spring', 'nature']
  },
  
  bee: {
    category: ['animal', 'insect', 'flying'],
    properties: ['buzzing', 'striped', 'stinging', 'pollinating'],
    related: ['honey', 'buzz', 'sting', 'hive', 'pollen', 'queen'],
    actions: ['buzz', 'sting', 'pollinate', 'make honey'],
    context: ['hive', 'flower', 'honey', 'garden']
  },
  
  spider: {
    category: ['animal', 'arachnid', 'eight-legged'],
    properties: ['eight-legged', 'web-spinning', 'creepy', 'predatory'],
    related: ['web', 'eight legs', 'silk', 'fangs', 'crawl', 'tarantula'],
    actions: ['spin web', 'crawl', 'bite', 'trap'],
    context: ['web', 'corner', 'creepy', 'house']
  },
  
  ant: {
    category: ['animal', 'insect', 'small'],
    properties: ['tiny', 'hardworking', 'colonial', 'strong'],
    related: ['colony', 'queen', 'hill', 'picnic', 'march', 'worker'],
    actions: ['march', 'carry', 'build', 'work'],
    context: ['colony', 'picnic', 'ground', 'hill']
  },
  
  rabbit: {
    category: ['animal', 'mammal', 'small'],
    properties: ['hopping', 'fluffy', 'eared', 'fast'],
    related: ['hop', 'ears', 'carrot', 'burrow', 'fluffy', 'bunny'],
    actions: ['hop', 'nibble', 'burrow', 'twitch nose'],
    context: ['garden', 'burrow', 'pet', 'wild']
  },
  
  squirrel: {
    category: ['animal', 'mammal', 'rodent'],
    properties: ['bushy-tailed', 'tree-dwelling', 'nut-gathering', 'quick'],
    related: ['nuts', 'acorn', 'tree', 'bushy tail', 'park', 'hoard'],
    actions: ['gather', 'climb', 'scurry', 'bury'],
    context: ['tree', 'park', 'nuts', 'autumn']
  },
  
  mouse: {
    category: ['animal', 'mammal', 'rodent'],
    properties: ['tiny', 'squeaking', 'timid', 'quick'],
    related: ['cheese', 'squeak', 'tail', 'hole', 'trap', 'whiskers'],
    actions: ['squeak', 'scurry', 'nibble', 'hide'],
    context: ['house', 'hole', 'cheese', 'lab']
  },
  
  rat: {
    category: ['animal', 'mammal', 'rodent'],
    properties: ['intelligent', 'adaptable', 'tailed', 'urban'],
    related: ['tail', 'sewer', 'lab', 'intelligent', 'whiskers', 'pest'],
    actions: ['scurry', 'gnaw', 'survive', 'adapt'],
    context: ['sewer', 'city', 'lab', 'pest']
  },
  
  wolf: {
    category: ['animal', 'wild', 'predator', 'canine'],
    properties: ['pack animal', 'howling', 'predatory', 'wild'],
    related: ['howl', 'pack', 'moon', 'forest', 'alpha', 'hunt'],
    actions: ['howl', 'hunt', 'pack', 'prowl'],
    context: ['forest', 'pack', 'wild', 'moon']
  },
  
  fox: {
    category: ['animal', 'wild', 'mammal', 'canine'],
    properties: ['cunning', 'red', 'bushy-tailed', 'sly'],
    related: ['sly', 'red', 'bushy tail', 'cunning', 'forest', 'den'],
    actions: ['hunt', 'sneak', 'pounce', 'den'],
    context: ['forest', 'cunning', 'wild', 'night']
  },
  
  deer: {
    category: ['animal', 'wild', 'mammal'],
    properties: ['antlered', 'graceful', 'timid', 'forest'],
    related: ['antlers', 'forest', 'graceful', 'doe', 'buck', 'fawn'],
    actions: ['graze', 'leap', 'run', 'hide'],
    context: ['forest', 'woods', 'hunting', 'graceful']
  },
  
  kangaroo: {
    category: ['animal', 'marsupial', 'australian'],
    properties: ['hopping', 'pouched', 'australian', 'boxing'],
    related: ['hop', 'pouch', 'joey', 'australia', 'boxing', 'tail'],
    actions: ['hop', 'box', 'carry joey', 'jump'],
    context: ['australia', 'outback', 'pouch', 'hop']
  },
  
  koala: {
    category: ['animal', 'marsupial', 'australian'],
    properties: ['eucalyptus-eating', 'sleepy', 'australian', 'cute'],
    related: ['eucalyptus', 'tree', 'australia', 'sleep', 'cute', 'fuzzy'],
    actions: ['sleep', 'climb', 'eat eucalyptus', 'hug'],
    context: ['australia', 'tree', 'sleep', 'cute']
  },
  
  panda: {
    category: ['animal', 'bear', 'endangered'],
    properties: ['black and white', 'bamboo-eating', 'endangered', 'cute'],
    related: ['bamboo', 'black and white', 'china', 'endangered', 'cute', 'bear'],
    actions: ['eat bamboo', 'roll', 'climb', 'munch'],
    context: ['china', 'bamboo', 'zoo', 'endangered']
  },
  
  sloth: {
    category: ['animal', 'mammal', 'slow'],
    properties: ['slow', 'tree-dwelling', 'lazy', 'hanging'],
    related: ['slow', 'tree', 'hang', 'lazy', 'rainforest', 'claws'],
    actions: ['hang', 'move slowly', 'sleep', 'climb'],
    context: ['rainforest', 'tree', 'slow', 'hanging']
  },
  
  bat: {
    category: ['animal', 'mammal', 'flying', 'nocturnal'],
    properties: ['flying', 'nocturnal', 'echolocating', 'cave-dwelling'],
    related: ['cave', 'night', 'wings', 'vampire', 'echolocation', 'upside down'],
    actions: ['fly', 'hang upside down', 'echolocate', 'hunt'],
    context: ['cave', 'night', 'dark', 'halloween']
  }
};
