// Place word associations

module.exports = {
  paris: {
    category: ['place', 'city', 'france'],
    properties: ['romantic', 'french', 'eiffel tower', 'european'],
    related: ['eiffel tower', 'france', 'romantic', 'baguette', 'louvre', 'seine'],
    actions: ['visit', 'romance', 'tour', 'explore', 'dine'],
    context: ['france', 'romantic', 'european', 'city']
  },
  
  newyork: {
    category: ['place', 'city', 'usa'],
    properties: ['big', 'busy', 'skyscrapers', 'american'],
    related: ['statue of liberty', 'manhattan', 'broadway', 'times square', 'subway', 'big apple'],
    actions: ['visit', 'hustle', 'explore', 'shop', 'tour'],
    context: ['usa', 'city', 'busy', 'urban']
  },
  
  tokyo: {
    category: ['place', 'city', 'japan'],
    properties: ['modern', 'japanese', 'neon', 'busy'],
    related: ['japan', 'neon', 'shibuya', 'anime', 'sushi', 'technology'],
    actions: ['visit', 'explore', 'shop', 'eat', 'experience'],
    context: ['japan', 'modern', 'asian', 'city']
  },
  
  london: {
    category: ['place', 'city', 'uk'],
    properties: ['british', 'historic', 'rainy', 'royal'],
    related: ['big ben', 'uk', 'tea', 'queen', 'thames', 'british'],
    actions: ['visit', 'tour', 'explore', 'tea', 'sightsee'],
    context: ['uk', 'british', 'european', 'historic']
  },
  
  egypt: {
    category: ['place', 'country', 'africa'],
    properties: ['ancient', 'pyramids', 'desert', 'historic'],
    related: ['pyramids', 'sphinx', 'pharaoh', 'nile', 'desert', 'ancient'],
    actions: ['visit', 'explore', 'discover', 'tour', 'ancient'],
    context: ['africa', 'ancient', 'pyramids', 'historic']
  },
  
  australia: {
    category: ['place', 'country', 'continent'],
    properties: ['down under', 'kangaroo', 'outback', 'island'],
    related: ['kangaroo', 'sydney', 'outback', 'koala', 'down under', 'reef'],
    actions: ['visit', 'explore', 'surf', 'adventure', 'discover'],
    context: ['continent', 'island', 'southern', 'unique']
  },
  
  beach: {
    category: ['place', 'coastal', 'vacation'],
    properties: ['sandy', 'ocean', 'sunny', 'relaxing'],
    related: ['sand', 'ocean', 'waves', 'sun', 'vacation', 'shore'],
    actions: ['swim', 'sunbathe', 'relax', 'surf', 'vacation'],
    context: ['ocean', 'vacation', 'summer', 'relaxing']
  },
  
  school: {
    category: ['place', 'education', 'building'],
    properties: ['educational', 'learning', 'students', 'building'],
    related: ['students', 'teachers', 'classroom', 'learn', 'education', 'homework'],
    actions: ['learn', 'study', 'teach', 'attend', 'educate'],
    context: ['education', 'learning', 'students', 'building']
  },
  
  hospital: {
    category: ['place', 'medical', 'building'],
    properties: ['medical', 'healing', 'doctors', 'sterile'],
    related: ['doctors', 'nurses', 'patients', 'medical', 'emergency', 'heal'],
    actions: ['heal', 'treat', 'visit', 'recover', 'medical'],
    context: ['medical', 'health', 'emergency', 'care']
  },
  
  library: {
    category: ['place', 'education', 'building'],
    properties: ['quiet', 'books', 'reading', 'knowledge'],
    related: ['books', 'quiet', 'read', 'study', 'shelves', 'librarian'],
    actions: ['read', 'study', 'borrow', 'research', 'quiet'],
    context: ['books', 'quiet', 'knowledge', 'reading']
  },
  
  museum: {
    category: ['place', 'culture', 'building'],
    properties: ['cultural', 'exhibits', 'art', 'historic'],
    related: ['art', 'exhibits', 'history', 'culture', 'artifacts', 'tour'],
    actions: ['visit', 'tour', 'observe', 'learn', 'exhibit'],
    context: ['culture', 'art', 'history', 'education']
  },
  
  restaurant: {
    category: ['place', 'dining', 'building'],
    properties: ['dining', 'food', 'service', 'eating'],
    related: ['food', 'menu', 'waiter', 'eat', 'dining', 'chef'],
    actions: ['eat', 'dine', 'order', 'serve', 'cook'],
    context: ['dining', 'food', 'service', 'eating']
  },
  
  cafe: {
    category: ['place', 'dining', 'building'],
    properties: ['coffee', 'cozy', 'casual', 'social'],
    related: ['coffee', 'cozy', 'wifi', 'laptop', 'pastry', 'espresso'],
    actions: ['drink coffee', 'work', 'socialize', 'relax', 'study'],
    context: ['coffee', 'cozy', 'social', 'casual']
  },
  
  mall: {
    category: ['place', 'shopping', 'building'],
    properties: ['shopping', 'stores', 'indoor', 'commercial'],
    related: ['shops', 'stores', 'shopping', 'food court', 'retail', 'escalator'],
    actions: ['shop', 'browse', 'buy', 'walk', 'eat'],
    context: ['shopping', 'retail', 'commercial', 'stores']
  },
  
  airport: {
    category: ['place', 'transportation', 'building'],
    properties: ['flying', 'travel', 'busy', 'international'],
    related: ['planes', 'flight', 'terminal', 'luggage', 'security', 'gate'],
    actions: ['fly', 'travel', 'depart', 'arrive', 'check in'],
    context: ['travel', 'flying', 'international', 'transportation']
  },
  
  station: {
    category: ['place', 'transportation', 'building'],
    properties: ['trains', 'transit', 'platform', 'commute'],
    related: ['train', 'platform', 'tracks', 'commute', 'ticket', 'schedule'],
    actions: ['board', 'wait', 'commute', 'travel', 'depart'],
    context: ['transportation', 'train', 'commute', 'travel']
  },
  
  park: {
    category: ['place', 'outdoor', 'recreation'],
    properties: ['outdoor', 'green', 'recreational', 'public'],
    related: ['trees', 'grass', 'playground', 'bench', 'nature', 'walk'],
    actions: ['walk', 'play', 'relax', 'picnic', 'exercise'],
    context: ['outdoor', 'recreation', 'nature', 'public']
  },
  
  zoo: {
    category: ['place', 'animals', 'attraction'],
    properties: ['animals', 'exhibits', 'educational', 'family'],
    related: ['animals', 'cages', 'exhibits', 'wildlife', 'family', 'tour'],
    actions: ['visit', 'observe', 'learn', 'tour', 'see animals'],
    context: ['animals', 'family', 'education', 'attraction']
  },
  
  aquarium: {
    category: ['place', 'marine', 'attraction'],
    properties: ['marine', 'fish', 'underwater', 'tanks'],
    related: ['fish', 'tanks', 'marine', 'underwater', 'sharks', 'exhibits'],
    actions: ['visit', 'observe', 'learn', 'tour', 'see fish'],
    context: ['marine', 'fish', 'underwater', 'attraction']
  },
  
  stadium: {
    category: ['place', 'sports', 'venue'],
    properties: ['sports', 'large', 'crowd', 'arena'],
    related: ['sports', 'crowd', 'seats', 'field', 'fans', 'game'],
    actions: ['watch', 'cheer', 'attend', 'play', 'crowd'],
    context: ['sports', 'crowd', 'game', 'venue']
  },
  
  theater: {
    category: ['place', 'entertainment', 'venue'],
    properties: ['performance', 'stage', 'seats', 'entertainment'],
    related: ['stage', 'performance', 'seats', 'actors', 'show', 'curtain'],
    actions: ['watch', 'perform', 'attend', 'applaud', 'show'],
    context: ['entertainment', 'performance', 'stage', 'venue']
  },
  
  cinema: {
    category: ['place', 'entertainment', 'venue'],
    properties: ['movies', 'screen', 'dark', 'popcorn'],
    related: ['movie', 'screen', 'popcorn', 'seats', 'film', 'projector'],
    actions: ['watch', 'attend', 'eat popcorn', 'film', 'screen'],
    context: ['movies', 'entertainment', 'film', 'venue']
  },
  
  gym: {
    category: ['place', 'fitness', 'building'],
    properties: ['fitness', 'exercise', 'equipment', 'workout'],
    related: ['weights', 'treadmill', 'exercise', 'workout', 'fitness', 'sweat'],
    actions: ['workout', 'exercise', 'lift', 'run', 'train'],
    context: ['fitness', 'exercise', 'health', 'workout']
  },
  
  office: {
    category: ['place', 'work', 'building'],
    properties: ['work', 'desk', 'professional', 'business'],
    related: ['desk', 'computer', 'work', 'meeting', 'cubicle', 'business'],
    actions: ['work', 'meet', 'type', 'business', 'professional'],
    context: ['work', 'business', 'professional', 'desk']
  },
  
  factory: {
    category: ['place', 'industrial', 'building'],
    properties: ['industrial', 'manufacturing', 'machinery', 'production'],
    related: ['machines', 'production', 'workers', 'assembly', 'industrial', 'manufacture'],
    actions: ['manufacture', 'produce', 'assemble', 'work', 'industrial'],
    context: ['industrial', 'manufacturing', 'production', 'machinery']
  },
  
  farm: {
    category: ['place', 'agricultural', 'rural'],
    properties: ['agricultural', 'rural', 'animals', 'crops'],
    related: ['crops', 'animals', 'barn', 'tractor', 'field', 'harvest'],
    actions: ['farm', 'harvest', 'plant', 'raise', 'cultivate'],
    context: ['agricultural', 'rural', 'farming', 'countryside']
  },
  
  castle: {
    category: ['place', 'historic', 'building'],
    properties: ['medieval', 'stone', 'fortress', 'royal'],
    related: ['medieval', 'king', 'tower', 'moat', 'stone', 'fortress'],
    actions: ['defend', 'rule', 'tour', 'historic', 'fortress'],
    context: ['medieval', 'historic', 'royal', 'fortress']
  },
  
  church: {
    category: ['place', 'religious', 'building'],
    properties: ['religious', 'worship', 'spiritual', 'sacred'],
    related: ['worship', 'prayer', 'altar', 'pews', 'cross', 'religious'],
    actions: ['worship', 'pray', 'attend', 'religious', 'spiritual'],
    context: ['religious', 'worship', 'spiritual', 'sacred']
  },
  
  temple: {
    category: ['place', 'religious', 'building'],
    properties: ['religious', 'sacred', 'worship', 'ancient'],
    related: ['worship', 'sacred', 'monks', 'prayer', 'religious', 'shrine'],
    actions: ['worship', 'pray', 'meditate', 'visit', 'sacred'],
    context: ['religious', 'sacred', 'worship', 'spiritual']
  },
  
  prison: {
    category: ['place', 'detention', 'building'],
    properties: ['detention', 'cells', 'locked', 'security'],
    related: ['cells', 'bars', 'inmates', 'guards', 'locked', 'jail'],
    actions: ['imprison', 'lock', 'detain', 'guard', 'confine'],
    context: ['detention', 'security', 'locked', 'criminal']
  },
  
  cave: {
    category: ['place', 'natural', 'underground'],
    properties: ['underground', 'dark', 'rocky', 'natural'],
    related: ['dark', 'underground', 'stalactite', 'bat', 'echo', 'explore'],
    actions: ['explore', 'echo', 'hide', 'discover', 'spelunk'],
    context: ['underground', 'natural', 'dark', 'exploration']
  },
  
  bridge: {
    category: ['place', 'structure', 'crossing'],
    properties: ['crossing', 'spanning', 'structure', 'connecting'],
    related: ['cross', 'span', 'river', 'connect', 'structure', 'arch'],
    actions: ['cross', 'span', 'connect', 'bridge', 'traverse'],
    context: ['crossing', 'structure', 'connecting', 'river']
  },
  
  lighthouse: {
    category: ['place', 'structure', 'coastal'],
    properties: ['coastal', 'tall', 'beacon', 'guiding'],
    related: ['light', 'beacon', 'coast', 'ships', 'tower', 'guide'],
    actions: ['guide', 'beacon', 'warn', 'illuminate', 'coastal'],
    context: ['coastal', 'ocean', 'guiding', 'ships']
  },
  
  pyramid: {
    category: ['place', 'structure', 'ancient'],
    properties: ['ancient', 'triangular', 'egyptian', 'tomb'],
    related: ['egypt', 'pharaoh', 'ancient', 'tomb', 'stone', 'triangular'],
    actions: ['tomb', 'ancient', 'explore', 'discover', 'pyramid'],
    context: ['ancient', 'egypt', 'historic', 'tomb']
  },
  
  skyscraper: {
    category: ['place', 'building', 'tall'],
    properties: ['tall', 'urban', 'modern', 'high-rise'],
    related: ['tall', 'city', 'elevator', 'floors', 'urban', 'modern'],
    actions: ['tower', 'rise', 'urban', 'modern', 'tall'],
    context: ['city', 'urban', 'tall', 'modern']
  },
  
  subway: {
    category: ['place', 'transportation', 'underground'],
    properties: ['underground', 'train', 'urban', 'transit'],
    related: ['underground', 'train', 'tunnel', 'metro', 'commute', 'platform'],
    actions: ['commute', 'ride', 'underground', 'transit', 'travel'],
    context: ['transportation', 'urban', 'underground', 'commute']
  },
  
  garage: {
    category: ['place', 'storage', 'building'],
    properties: ['storage', 'cars', 'parking', 'shelter'],
    related: ['car', 'parking', 'storage', 'tools', 'shelter', 'door'],
    actions: ['park', 'store', 'repair', 'garage', 'shelter'],
    context: ['storage', 'car', 'parking', 'home']
  },
  
  basement: {
    category: ['place', 'underground', 'room'],
    properties: ['underground', 'below', 'storage', 'dark'],
    related: ['underground', 'stairs', 'storage', 'dark', 'below', 'foundation'],
    actions: ['store', 'descend', 'underground', 'basement', 'below'],
    context: ['underground', 'home', 'storage', 'below']
  },
  
  attic: {
    category: ['place', 'upper', 'room'],
    properties: ['upper', 'storage', 'dusty', 'roof'],
    related: ['roof', 'storage', 'dusty', 'old', 'upper', 'stairs'],
    actions: ['store', 'climb', 'discover', 'dusty', 'upper'],
    context: ['upper', 'home', 'storage', 'old']
  },
  
  kitchen: {
    category: ['place', 'room', 'cooking'],
    properties: ['cooking', 'food', 'appliances', 'domestic'],
    related: ['cook', 'stove', 'fridge', 'sink', 'food', 'appliances'],
    actions: ['cook', 'prepare', 'eat', 'clean', 'kitchen'],
    context: ['cooking', 'home', 'food', 'domestic']
  },
  
  bathroom: {
    category: ['place', 'room', 'hygiene'],
    properties: ['hygiene', 'water', 'private', 'plumbing'],
    related: ['toilet', 'shower', 'sink', 'mirror', 'hygiene', 'water'],
    actions: ['wash', 'shower', 'bathroom', 'hygiene', 'clean'],
    context: ['hygiene', 'home', 'private', 'water']
  },
  
  bedroom: {
    category: ['place', 'room', 'sleeping'],
    properties: ['sleeping', 'private', 'bed', 'rest'],
    related: ['bed', 'sleep', 'pillow', 'closet', 'private', 'rest'],
    actions: ['sleep', 'rest', 'relax', 'bedroom', 'private'],
    context: ['sleeping', 'home', 'private', 'rest']
  }
};
