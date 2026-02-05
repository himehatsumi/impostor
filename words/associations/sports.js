// Sports word associations

module.exports = {
  football: {
    category: ['sport', 'team', 'ball'],
    properties: ['team', 'contact', 'strategic', 'american'],
    related: ['touchdown', 'quarterback', 'helmet', 'tackle', 'field goal', 'superbowl'],
    actions: ['tackle', 'throw', 'catch', 'score', 'huddle'],
    context: ['field', 'team', 'american', 'contact']
  },
  
  soccer: {
    category: ['sport', 'team', 'ball'],
    properties: ['global', 'no hands', 'running', 'popular'],
    related: ['goal', 'kick', 'dribble', 'world cup', 'penalty', 'pitch'],
    actions: ['kick', 'dribble', 'score', 'pass', 'header'],
    context: ['field', 'global', 'world cup', 'team']
  },
  
  basketball: {
    category: ['sport', 'team', 'ball'],
    properties: ['indoor', 'tall', 'fast-paced', 'jumping'],
    related: ['hoop', 'dunk', 'dribble', 'three pointer', 'court', 'nba'],
    actions: ['dunk', 'shoot', 'dribble', 'pass', 'rebound'],
    context: ['court', 'indoor', 'nba', 'hoop']
  },
  
  baseball: {
    category: ['sport', 'team', 'ball'],
    properties: ['american', 'bat', 'innings', 'summer'],
    related: ['bat', 'pitch', 'home run', 'diamond', 'strike', 'world series'],
    actions: ['pitch', 'bat', 'catch', 'slide', 'home run'],
    context: ['diamond', 'american', 'summer', 'innings']
  },
  
  tennis: {
    category: ['sport', 'racket', 'individual'],
    properties: ['racket', 'court', 'individual', 'elegant'],
    related: ['racket', 'serve', 'court', 'love', 'deuce', 'wimbledon'],
    actions: ['serve', 'volley', 'rally', 'ace', 'backhand'],
    context: ['court', 'racket', 'elegant', 'individual']
  },
  
  golf: {
    category: ['sport', 'precision', 'individual'],
    properties: ['precision', 'patient', 'outdoor', 'club'],
    related: ['club', 'hole', 'putt', 'tee', 'birdie', 'green'],
    actions: ['swing', 'putt', 'drive', 'chip', 'tee off'],
    context: ['course', 'precision', 'outdoor', 'patient']
  },
  
  boxing: {
    category: ['sport', 'combat', 'individual'],
    properties: ['combat', 'punching', 'ring', 'intense'],
    related: ['punch', 'ring', 'gloves', 'knockout', 'jab', 'round'],
    actions: ['punch', 'jab', 'knockout', 'dodge', 'clinch'],
    context: ['ring', 'combat', 'gloves', 'fight']
  },
  
  wrestling: {
    category: ['sport', 'combat', 'grappling'],
    properties: ['grappling', 'mat', 'strength', 'technique'],
    related: ['mat', 'pin', 'takedown', 'grapple', 'hold', 'submission'],
    actions: ['grapple', 'pin', 'takedown', 'submit', 'escape'],
    context: ['mat', 'grappling', 'combat', 'technique']
  },
  
  mma: {
    category: ['sport', 'combat', 'mixed'],
    properties: ['mixed martial arts', 'cage', 'brutal', 'versatile'],
    related: ['cage', 'octagon', 'submission', 'knockout', 'ufc', 'ground'],
    actions: ['strike', 'grapple', 'submit', 'knockout', 'tap'],
    context: ['cage', 'octagon', 'mixed', 'combat']
  },
  
  swimming: {
    category: ['sport', 'water', 'individual'],
    properties: ['water', 'endurance', 'pool', 'olympic'],
    related: ['pool', 'stroke', 'lap', 'freestyle', 'butterfly', 'goggles'],
    actions: ['swim', 'stroke', 'dive', 'flip turn', 'breathe'],
    context: ['pool', 'water', 'olympic', 'endurance']
  },
  
  diving: {
    category: ['sport', 'water', 'acrobatic'],
    properties: ['acrobatic', 'water', 'graceful', 'olympic'],
    related: ['board', 'flip', 'twist', 'splash', 'pool', 'platform'],
    actions: ['dive', 'flip', 'twist', 'splash', 'score'],
    context: ['pool', 'acrobatic', 'olympic', 'graceful']
  },
  
  gymnastics: {
    category: ['sport', 'acrobatic', 'individual'],
    properties: ['acrobatic', 'flexible', 'graceful', 'olympic'],
    related: ['flip', 'vault', 'beam', 'bars', 'floor', 'routine'],
    actions: ['flip', 'vault', 'balance', 'tumble', 'dismount'],
    context: ['olympic', 'acrobatic', 'graceful', 'flexible']
  },
  
  running: {
    category: ['sport', 'track', 'endurance'],
    properties: ['endurance', 'fast', 'simple', 'cardio'],
    related: ['track', 'sprint', 'marathon', 'pace', 'finish line', 'shoes'],
    actions: ['run', 'sprint', 'jog', 'pace', 'finish'],
    context: ['track', 'marathon', 'endurance', 'cardio']
  },
  
  marathon: {
    category: ['sport', 'running', 'endurance'],
    properties: ['long distance', 'endurance', '26.2 miles', 'challenging'],
    related: ['26.2', 'endurance', 'wall', 'pace', 'finish', 'medal'],
    actions: ['run', 'endure', 'pace', 'hit wall', 'finish'],
    context: ['endurance', 'long distance', 'challenging', 'race']
  },
  
  cycling: {
    category: ['sport', 'bike', 'endurance'],
    properties: ['bike', 'endurance', 'outdoor', 'cardio'],
    related: ['bike', 'pedal', 'helmet', 'tour', 'road', 'gear'],
    actions: ['pedal', 'cycle', 'shift', 'climb', 'sprint'],
    context: ['bike', 'road', 'endurance', 'outdoor']
  },
  
  skiing: {
    category: ['sport', 'winter', 'mountain'],
    properties: ['winter', 'snow', 'mountain', 'fast'],
    related: ['snow', 'slope', 'poles', 'lift', 'downhill', 'alpine'],
    actions: ['ski', 'carve', 'schuss', 'slalom', 'jump'],
    context: ['snow', 'mountain', 'winter', 'slope']
  },
  
  snowboarding: {
    category: ['sport', 'winter', 'mountain'],
    properties: ['winter', 'snow', 'board', 'tricks'],
    related: ['board', 'snow', 'halfpipe', 'trick', 'slope', 'bindings'],
    actions: ['ride', 'carve', 'trick', 'jump', 'shred'],
    context: ['snow', 'mountain', 'winter', 'tricks']
  },
  
  skateboarding: {
    category: ['sport', 'extreme', 'street'],
    properties: ['street', 'tricks', 'board', 'urban'],
    related: ['board', 'trick', 'ollie', 'kickflip', 'ramp', 'grind'],
    actions: ['ollie', 'kickflip', 'grind', 'trick', 'skate'],
    context: ['street', 'urban', 'tricks', 'extreme']
  },
  
  surfing: {
    category: ['sport', 'water', 'wave'],
    properties: ['wave', 'ocean', 'balance', 'beach'],
    related: ['wave', 'board', 'ocean', 'beach', 'barrel', 'wipeout'],
    actions: ['surf', 'ride', 'paddle', 'wipeout', 'hang ten'],
    context: ['ocean', 'wave', 'beach', 'balance']
  },
  
  volleyball: {
    category: ['sport', 'team', 'ball'],
    properties: ['team', 'net', 'jumping', 'beach'],
    related: ['net', 'spike', 'serve', 'dig', 'set', 'beach'],
    actions: ['spike', 'serve', 'dig', 'set', 'block'],
    context: ['net', 'team', 'beach', 'court']
  },
  
  hockey: {
    category: ['sport', 'team', 'ice'],
    properties: ['ice', 'fast', 'contact', 'puck'],
    related: ['puck', 'stick', 'ice', 'goal', 'skate', 'penalty'],
    actions: ['skate', 'shoot', 'check', 'pass', 'score'],
    context: ['ice', 'rink', 'fast', 'contact']
  },
  
  rugby: {
    category: ['sport', 'team', 'contact'],
    properties: ['contact', 'rough', 'oval ball', 'no pads'],
    related: ['scrum', 'tackle', 'try', 'oval', 'ruck', 'maul'],
    actions: ['tackle', 'scrum', 'pass', 'try', 'ruck'],
    context: ['contact', 'rough', 'field', 'team']
  },
  
  cricket: {
    category: ['sport', 'bat', 'british'],
    properties: ['british', 'bat', 'wicket', 'long'],
    related: ['bat', 'wicket', 'bowl', 'pitch', 'test', 'innings'],
    actions: ['bat', 'bowl', 'field', 'wicket', 'run'],
    context: ['british', 'pitch', 'long', 'wicket']
  },
  
  badminton: {
    category: ['sport', 'racket', 'shuttlecock'],
    properties: ['racket', 'shuttlecock', 'fast', 'indoor'],
    related: ['shuttlecock', 'racket', 'net', 'smash', 'birdie', 'court'],
    actions: ['smash', 'serve', 'rally', 'drop shot', 'clear'],
    context: ['indoor', 'racket', 'shuttlecock', 'fast']
  },
  
  pingpong: {
    category: ['sport', 'table', 'paddle'],
    properties: ['table', 'paddle', 'fast', 'indoor'],
    related: ['table', 'paddle', 'spin', 'serve', 'rally', 'net'],
    actions: ['serve', 'spin', 'smash', 'rally', 'return'],
    context: ['table', 'indoor', 'fast', 'paddle']
  },
  
  bowling: {
    category: ['sport', 'indoor', 'precision'],
    properties: ['indoor', 'pins', 'ball', 'lanes'],
    related: ['pins', 'ball', 'strike', 'spare', 'gutter', 'lane'],
    actions: ['bowl', 'strike', 'spare', 'roll', 'aim'],
    context: ['alley', 'pins', 'indoor', 'lanes']
  },
  
  archery: {
    category: ['sport', 'precision', 'target'],
    properties: ['precision', 'bow', 'target', 'focus'],
    related: ['bow', 'arrow', 'target', 'bullseye', 'quiver', 'aim'],
    actions: ['aim', 'shoot', 'draw', 'release', 'bullseye'],
    context: ['target', 'precision', 'bow', 'focus']
  },
  
  fencing: {
    category: ['sport', 'combat', 'sword'],
    properties: ['sword', 'elegant', 'olympic', 'dueling'],
    related: ['sword', 'foil', 'epee', 'mask', 'touche', 'lunge'],
    actions: ['lunge', 'parry', 'riposte', 'touche', 'fence'],
    context: ['sword', 'elegant', 'olympic', 'duel']
  },
  
  karate: {
    category: ['sport', 'martial art', 'striking'],
    properties: ['martial art', 'striking', 'discipline', 'belt'],
    related: ['belt', 'kata', 'dojo', 'gi', 'kiai', 'chop'],
    actions: ['strike', 'kick', 'block', 'kata', 'kiai'],
    context: ['martial art', 'dojo', 'discipline', 'belt']
  },
  
  judo: {
    category: ['sport', 'martial art', 'grappling'],
    properties: ['martial art', 'throwing', 'grappling', 'olympic'],
    related: ['throw', 'gi', 'mat', 'belt', 'ippon', 'dojo'],
    actions: ['throw', 'grapple', 'pin', 'submit', 'ippon'],
    context: ['martial art', 'throwing', 'olympic', 'mat']
  },
  
  yoga: {
    category: ['sport', 'flexibility', 'meditation'],
    properties: ['flexible', 'meditative', 'peaceful', 'poses'],
    related: ['mat', 'pose', 'stretch', 'meditation', 'namaste', 'downward dog'],
    actions: ['stretch', 'pose', 'breathe', 'meditate', 'balance'],
    context: ['flexibility', 'meditation', 'peaceful', 'mat']
  },
  
  crossfit: {
    category: ['sport', 'fitness', 'intense'],
    properties: ['intense', 'varied', 'functional', 'wod'],
    related: ['wod', 'box', 'burpee', 'kettlebell', 'intense', 'functional'],
    actions: ['wod', 'burpee', 'lift', 'intense', 'functional'],
    context: ['fitness', 'intense', 'box', 'varied']
  },
  
  weightlifting: {
    category: ['sport', 'strength', 'olympic'],
    properties: ['strength', 'heavy', 'olympic', 'power'],
    related: ['barbell', 'weights', 'snatch', 'clean', 'jerk', 'plates'],
    actions: ['lift', 'snatch', 'clean', 'jerk', 'press'],
    context: ['strength', 'gym', 'olympic', 'power']
  },
  
  powerlifting: {
    category: ['sport', 'strength', 'competition'],
    properties: ['strength', 'heavy', 'three lifts', 'max'],
    related: ['squat', 'bench', 'deadlift', 'barbell', 'max', 'plates'],
    actions: ['squat', 'bench', 'deadlift', 'lift', 'max'],
    context: ['strength', 'competition', 'heavy', 'max']
  },
  
  bodybuilding: {
    category: ['sport', 'physique', 'aesthetic'],
    properties: ['aesthetic', 'muscular', 'posing', 'competition'],
    related: ['muscle', 'pose', 'flex', 'stage', 'tan', 'symmetry'],
    actions: ['flex', 'pose', 'bulk', 'cut', 'compete'],
    context: ['physique', 'muscle', 'aesthetic', 'stage']
  },
  
  cheerleading: {
    category: ['sport', 'acrobatic', 'team'],
    properties: ['acrobatic', 'team', 'spirited', 'stunts'],
    related: ['cheer', 'stunt', 'pyramid', 'pom pom', 'flip', 'spirit'],
    actions: ['cheer', 'stunt', 'flip', 'pyramid', 'spirit'],
    context: ['team', 'acrobatic', 'spirit', 'sideline']
  },
  
  racing: {
    category: ['sport', 'speed', 'vehicle'],
    properties: ['fast', 'competitive', 'vehicle', 'adrenaline'],
    related: ['car', 'speed', 'track', 'lap', 'finish', 'pit'],
    actions: ['race', 'accelerate', 'overtake', 'lap', 'finish'],
    context: ['track', 'speed', 'competitive', 'vehicle']
  },
  
  climbing: {
    category: ['sport', 'vertical', 'strength'],
    properties: ['vertical', 'strength', 'grip', 'challenging'],
    related: ['wall', 'rope', 'harness', 'grip', 'boulder', 'belay'],
    actions: ['climb', 'grip', 'belay', 'boulder', 'ascend'],
    context: ['wall', 'vertical', 'strength', 'challenging']
  },
  
  parkour: {
    category: ['sport', 'urban', 'acrobatic'],
    properties: ['urban', 'acrobatic', 'flowing', 'obstacles'],
    related: ['vault', 'flip', 'urban', 'obstacle', 'flow', 'freerunning'],
    actions: ['vault', 'flip', 'flow', 'jump', 'parkour'],
    context: ['urban', 'obstacles', 'acrobatic', 'flow']
  },
  
  triathlon: {
    category: ['sport', 'endurance', 'multi'],
    properties: ['endurance', 'three sports', 'challenging', 'ironman'],
    related: ['swim', 'bike', 'run', 'transition', 'ironman', 'endurance'],
    actions: ['swim', 'bike', 'run', 'transition', 'endure'],
    context: ['endurance', 'multi-sport', 'challenging', 'race']
  },
  
  polo: {
    category: ['sport', 'horse', 'team'],
    properties: ['horse', 'mallet', 'elegant', 'wealthy'],
    related: ['horse', 'mallet', 'field', 'chukker', 'elegant', 'wealthy'],
    actions: ['ride', 'hit', 'gallop', 'score', 'polo'],
    context: ['horse', 'elegant', 'wealthy', 'field']
  },
  
  lacrosse: {
    category: ['sport', 'team', 'stick'],
    properties: ['stick', 'net', 'fast', 'contact'],
    related: ['stick', 'net', 'cradle', 'goal', 'field', 'check'],
    actions: ['cradle', 'pass', 'shoot', 'check', 'scoop'],
    context: ['field', 'stick', 'fast', 'team']
  },
  
  curling: {
    category: ['sport', 'ice', 'precision'],
    properties: ['ice', 'stone', 'sweeping', 'strategic'],
    related: ['stone', 'ice', 'sweep', 'house', 'broom', 'slide'],
    actions: ['sweep', 'slide', 'curl', 'aim', 'strategic'],
    context: ['ice', 'winter', 'precision', 'strategic']
  }
};
