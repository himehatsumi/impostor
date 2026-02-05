// Music word associations

module.exports = {
  guitar: {
    category: ['music', 'instrument', 'string'],
    properties: ['stringed', 'strummed', 'versatile', 'popular'],
    related: ['strings', 'pick', 'chord', 'fret', 'amp', 'rock'],
    actions: ['strum', 'play', 'tune', 'shred', 'chord'],
    context: ['rock', 'band', 'acoustic', 'electric']
  },
  
  piano: {
    category: ['music', 'instrument', 'keyboard'],
    properties: ['keys', 'classical', 'versatile', 'elegant'],
    related: ['keys', 'ivory', 'pedal', 'chord', 'classical', 'grand'],
    actions: ['play', 'press keys', 'chord', 'practice', 'compose'],
    context: ['classical', 'concert', 'jazz', 'elegant']
  },
  
  drums: {
    category: ['music', 'instrument', 'percussion'],
    properties: ['percussion', 'rhythmic', 'loud', 'beat'],
    related: ['sticks', 'cymbal', 'snare', 'kick', 'beat', 'rhythm'],
    actions: ['beat', 'hit', 'rhythm', 'crash', 'roll'],
    context: ['band', 'rhythm', 'rock', 'percussion']
  },
  
  violin: {
    category: ['music', 'instrument', 'string'],
    properties: ['stringed', 'bowed', 'classical', 'elegant'],
    related: ['bow', 'strings', 'classical', 'orchestra', 'fiddle', 'rosin'],
    actions: ['bow', 'play', 'tune', 'vibrato', 'practice'],
    context: ['classical', 'orchestra', 'elegant', 'concert']
  },
  
  trumpet: {
    category: ['music', 'instrument', 'brass'],
    properties: ['brass', 'loud', 'bright', 'valved'],
    related: ['brass', 'valves', 'mouthpiece', 'jazz', 'fanfare', 'loud'],
    actions: ['blow', 'play', 'valve', 'fanfare', 'jazz'],
    context: ['jazz', 'orchestra', 'brass', 'fanfare']
  },
  
  saxophone: {
    category: ['music', 'instrument', 'woodwind'],
    properties: ['jazzy', 'smooth', 'brass', 'curved'],
    related: ['jazz', 'reed', 'smooth', 'solo', 'blues', 'keys'],
    actions: ['blow', 'play', 'jazz', 'solo', 'smooth'],
    context: ['jazz', 'blues', 'smooth', 'solo']
  },
  
  flute: {
    category: ['music', 'instrument', 'woodwind'],
    properties: ['woodwind', 'airy', 'high-pitched', 'elegant'],
    related: ['blow', 'holes', 'piccolo', 'orchestra', 'breath', 'silver'],
    actions: ['blow', 'play', 'finger', 'breathe', 'trill'],
    context: ['orchestra', 'classical', 'woodwind', 'elegant']
  },
  
  bass: {
    category: ['music', 'instrument', 'string'],
    properties: ['low', 'rhythm', 'groove', 'foundation'],
    related: ['strings', 'groove', 'rhythm', 'low', 'slap', 'amp'],
    actions: ['slap', 'pluck', 'groove', 'rhythm', 'play'],
    context: ['band', 'rhythm', 'groove', 'foundation']
  },
  
  microphone: {
    category: ['music', 'equipment', 'vocal'],
    properties: ['amplifying', 'vocal', 'handheld', 'stage'],
    related: ['sing', 'amplify', 'stage', 'vocal', 'stand', 'cord'],
    actions: ['sing', 'speak', 'amplify', 'drop', 'hold'],
    context: ['stage', 'performance', 'vocal', 'concert']
  },
  
  speaker: {
    category: ['music', 'equipment', 'audio'],
    properties: ['loud', 'amplifying', 'sound', 'bass'],
    related: ['sound', 'bass', 'volume', 'amp', 'woofer', 'loud'],
    actions: ['amplify', 'blast', 'boom', 'play', 'vibrate'],
    context: ['concert', 'party', 'audio', 'loud']
  },
  
  headphones: {
    category: ['music', 'equipment', 'personal'],
    properties: ['personal', 'over-ear', 'isolating', 'portable'],
    related: ['ears', 'music', 'listen', 'cord', 'wireless', 'sound'],
    actions: ['listen', 'wear', 'isolate', 'enjoy', 'tune out'],
    context: ['personal', 'listening', 'music', 'portable']
  },
  
  vinyl: {
    category: ['music', 'format', 'retro'],
    properties: ['analog', 'spinning', 'retro', 'warm'],
    related: ['record', 'turntable', 'needle', 'groove', 'album', 'spin'],
    actions: ['spin', 'play', 'collect', 'scratch', 'flip'],
    context: ['retro', 'analog', 'collection', 'warm']
  },
  
  cd: {
    category: ['music', 'format', 'digital'],
    properties: ['disc', 'digital', 'shiny', 'obsolete'],
    related: ['disc', 'player', 'laser', 'album', 'case', 'skip'],
    actions: ['play', 'skip', 'burn', 'scratch', 'insert'],
    context: ['digital', '90s', 'album', 'player']
  },
  
  concert: {
    category: ['music', 'event', 'live'],
    properties: ['live', 'loud', 'crowd', 'performance'],
    related: ['stage', 'crowd', 'live', 'ticket', 'encore', 'mosh'],
    actions: ['perform', 'attend', 'rock', 'cheer', 'encore'],
    context: ['live', 'performance', 'crowd', 'venue']
  },
  
  festival: {
    category: ['music', 'event', 'outdoor'],
    properties: ['outdoor', 'multi-day', 'camping', 'multiple acts'],
    related: ['stage', 'camping', 'lineup', 'crowd', 'mud', 'wristband'],
    actions: ['attend', 'camp', 'dance', 'lineup', 'experience'],
    context: ['outdoor', 'summer', 'camping', 'multiple']
  },
  
  karaoke: {
    category: ['music', 'entertainment', 'singing'],
    properties: ['singing', 'amateur', 'fun', 'lyrics'],
    related: ['sing', 'lyrics', 'screen', 'microphone', 'drunk', 'bar'],
    actions: ['sing', 'perform', 'read lyrics', 'embarrass', 'duet'],
    context: ['bar', 'party', 'singing', 'fun']
  },
  
  dj: {
    category: ['music', 'performer', 'electronic'],
    properties: ['mixing', 'electronic', 'turntables', 'club'],
    related: ['turntable', 'mix', 'scratch', 'beat', 'club', 'drop'],
    actions: ['mix', 'scratch', 'drop', 'spin', 'beatmatch'],
    context: ['club', 'party', 'electronic', 'mixing']
  },
  
  rap: {
    category: ['music', 'genre', 'hip hop'],
    properties: ['rhythmic', 'spoken', 'hip hop', 'lyrical'],
    related: ['rhyme', 'beat', 'flow', 'hip hop', 'bars', 'freestyle'],
    actions: ['rap', 'rhyme', 'flow', 'spit bars', 'freestyle'],
    context: ['hip hop', 'urban', 'lyrical', 'rhythm']
  },
  
  rock: {
    category: ['music', 'genre', 'loud'],
    properties: ['loud', 'guitar', 'energetic', 'rebellious'],
    related: ['guitar', 'loud', 'electric', 'band', 'headbang', 'riff'],
    actions: ['rock', 'headbang', 'shred', 'amplify', 'rebel'],
    context: ['loud', 'guitar', 'band', 'energetic']
  },
  
  jazz: {
    category: ['music', 'genre', 'sophisticated'],
    properties: ['improvised', 'sophisticated', 'smooth', 'complex'],
    related: ['saxophone', 'improvise', 'smooth', 'swing', 'bebop', 'solo'],
    actions: ['improvise', 'swing', 'solo', 'jazz', 'syncopate'],
    context: ['sophisticated', 'smooth', 'club', 'improvisation']
  },
  
  blues: {
    category: ['music', 'genre', 'emotional'],
    properties: ['emotional', 'soulful', '12-bar', 'guitar'],
    related: ['guitar', 'soul', 'sad', 'mississippi', 'bend', 'feeling'],
    actions: ['feel', 'bend notes', 'wail', 'express', 'blues'],
    context: ['emotional', 'soulful', 'guitar', 'feeling']
  },
  
  country: {
    category: ['music', 'genre', 'american'],
    properties: ['twangy', 'storytelling', 'american', 'rural'],
    related: ['guitar', 'twang', 'truck', 'beer', 'heartbreak', 'fiddle'],
    actions: ['twang', 'tell story', 'sing', 'country', 'drawl'],
    context: ['american', 'rural', 'storytelling', 'southern']
  },
  
  classical: {
    category: ['music', 'genre', 'orchestral'],
    properties: ['orchestral', 'sophisticated', 'timeless', 'complex'],
    related: ['orchestra', 'symphony', 'composer', 'conductor', 'elegant', 'concert hall'],
    actions: ['compose', 'conduct', 'perform', 'appreciate', 'study'],
    context: ['orchestra', 'elegant', 'concert', 'timeless']
  },
  
  opera: {
    category: ['music', 'genre', 'theatrical'],
    properties: ['theatrical', 'dramatic', 'vocal', 'classical'],
    related: ['soprano', 'aria', 'dramatic', 'stage', 'costume', 'vibrato'],
    actions: ['sing', 'perform', 'dramatize', 'vibrato', 'project'],
    context: ['theatrical', 'dramatic', 'classical', 'stage']
  },
  
  pop: {
    category: ['music', 'genre', 'mainstream'],
    properties: ['catchy', 'mainstream', 'radio', 'commercial'],
    related: ['catchy', 'radio', 'chart', 'mainstream', 'hook', 'top 40'],
    actions: ['catch', 'chart', 'mainstream', 'hook', 'repeat'],
    context: ['mainstream', 'radio', 'catchy', 'popular']
  },
  
  edm: {
    category: ['music', 'genre', 'electronic'],
    properties: ['electronic', 'dance', 'drop', 'festival'],
    related: ['drop', 'bass', 'rave', 'festival', 'synthesizer', 'beat'],
    actions: ['drop', 'rave', 'dance', 'synthesize', 'build'],
    context: ['electronic', 'dance', 'festival', 'club']
  },
  
  metal: {
    category: ['music', 'genre', 'heavy'],
    properties: ['heavy', 'aggressive', 'distorted', 'intense'],
    related: ['heavy', 'distortion', 'scream', 'headbang', 'riff', 'mosh'],
    actions: ['headbang', 'scream', 'mosh', 'shred', 'distort'],
    context: ['heavy', 'aggressive', 'intense', 'loud']
  },
  
  punk: {
    category: ['music', 'genre', 'rebellious'],
    properties: ['rebellious', 'fast', 'raw', 'diy'],
    related: ['rebellion', 'mohawk', 'fast', 'raw', 'anarchy', 'diy'],
    actions: ['rebel', 'thrash', 'shout', 'diy', 'punk'],
    context: ['rebellious', 'underground', 'raw', 'fast']
  },
  
  reggae: {
    category: ['music', 'genre', 'jamaican'],
    properties: ['jamaican', 'relaxed', 'offbeat', 'island'],
    related: ['jamaica', 'offbeat', 'dreadlocks', 'island', 'marley', 'chill'],
    actions: ['skank', 'chill', 'offbeat', 'island', 'relax'],
    context: ['jamaican', 'island', 'relaxed', 'offbeat']
  },
  
  soul: {
    category: ['music', 'genre', 'emotional'],
    properties: ['emotional', 'powerful', 'vocal', 'heartfelt'],
    related: ['emotion', 'powerful', 'vocal', 'motown', 'feeling', 'groove'],
    actions: ['feel', 'emote', 'groove', 'soul', 'express'],
    context: ['emotional', 'powerful', 'heartfelt', 'vocal']
  },
  
  funk: {
    category: ['music', 'genre', 'groovy'],
    properties: ['groovy', 'bass', 'rhythmic', 'danceable'],
    related: ['groove', 'bass', 'rhythm', 'dance', 'slap', 'syncopation'],
    actions: ['groove', 'funk', 'slap bass', 'dance', 'syncopate'],
    context: ['groovy', 'dance', 'bass', 'rhythm']
  },
  
  disco: {
    category: ['music', 'genre', '70s'],
    properties: ['70s', 'dance', 'glittery', 'groovy'],
    related: ['dance', '70s', 'disco ball', 'platform shoes', 'groove', 'saturday night'],
    actions: ['dance', 'disco', 'groove', 'boogie', 'strut'],
    context: ['70s', 'dance', 'glittery', 'club']
  },
  
  techno: {
    category: ['music', 'genre', 'electronic'],
    properties: ['electronic', 'repetitive', 'mechanical', 'underground'],
    related: ['electronic', 'beat', 'synthesizer', 'rave', 'underground', 'loop'],
    actions: ['loop', 'synthesize', 'rave', 'repeat', 'pulse'],
    context: ['electronic', 'underground', 'rave', 'mechanical']
  },
  
  dubstep: {
    category: ['music', 'genre', 'electronic'],
    properties: ['wobble', 'bass', 'drop', 'electronic'],
    related: ['wobble', 'bass', 'drop', 'wub', 'electronic', 'heavy'],
    actions: ['wobble', 'drop', 'bass', 'wub', 'headbang'],
    context: ['electronic', 'bass', 'drop', 'wobble']
  },
  
  indie: {
    category: ['music', 'genre', 'alternative'],
    properties: ['independent', 'alternative', 'hipster', 'artistic'],
    related: ['independent', 'alternative', 'hipster', 'underground', 'artistic', 'vinyl'],
    actions: ['discover', 'appreciate', 'indie', 'alternative', 'support'],
    context: ['independent', 'alternative', 'underground', 'artistic']
  },
  
  grunge: {
    category: ['music', 'genre', '90s'],
    properties: ['90s', 'distorted', 'angst', 'seattle'],
    related: ['90s', 'seattle', 'flannel', 'distortion', 'angst', 'nirvana'],
    actions: ['distort', 'angst', 'grunge', 'flannel', 'rebel'],
    context: ['90s', 'seattle', 'alternative', 'angst']
  },
  
  rnb: {
    category: ['music', 'genre', 'smooth'],
    properties: ['smooth', 'rhythmic', 'soulful', 'urban'],
    related: ['smooth', 'soul', 'rhythm', 'urban', 'vocal', 'groove'],
    actions: ['groove', 'smooth', 'croon', 'rhythm', 'soul'],
    context: ['smooth', 'urban', 'soulful', 'contemporary']
  },
  
  gospel: {
    category: ['music', 'genre', 'religious'],
    properties: ['religious', 'spiritual', 'choir', 'uplifting'],
    related: ['church', 'choir', 'spiritual', 'praise', 'soul', 'hallelujah'],
    actions: ['praise', 'worship', 'choir', 'uplift', 'testify'],
    context: ['church', 'spiritual', 'uplifting', 'religious']
  },
  
  acapella: {
    category: ['music', 'style', 'vocal'],
    properties: ['vocal only', 'harmonious', 'no instruments', 'pure'],
    related: ['vocal', 'harmony', 'no instruments', 'choir', 'beatbox', 'pure'],
    actions: ['harmonize', 'sing', 'blend', 'beatbox', 'vocal'],
    context: ['vocal', 'harmony', 'pure', 'choir']
  },
  
  symphony: {
    category: ['music', 'composition', 'orchestral'],
    properties: ['orchestral', 'complex', 'movements', 'grand'],
    related: ['orchestra', 'conductor', 'movement', 'classical', 'grand', 'concert'],
    actions: ['conduct', 'perform', 'compose', 'orchestrate', 'harmonize'],
    context: ['orchestra', 'classical', 'grand', 'concert']
  },
  
  melody: {
    category: ['music', 'element', 'tune'],
    properties: ['tuneful', 'memorable', 'singable', 'linear'],
    related: ['tune', 'notes', 'catchy', 'sing', 'memorable', 'line'],
    actions: ['sing', 'hum', 'remember', 'compose', 'whistle'],
    context: ['tune', 'song', 'memorable', 'catchy']
  },
  
  harmony: {
    category: ['music', 'element', 'blend'],
    properties: ['blended', 'chordal', 'supporting', 'consonant'],
    related: ['chord', 'blend', 'voices', 'consonance', 'support', 'together'],
    actions: ['harmonize', 'blend', 'support', 'chord', 'consonance'],
    context: ['blend', 'voices', 'chord', 'together']
  },
  
  rhythm: {
    category: ['music', 'element', 'beat'],
    properties: ['patterned', 'temporal', 'beat', 'pulse'],
    related: ['beat', 'pulse', 'tempo', 'pattern', 'groove', 'time'],
    actions: ['beat', 'pulse', 'groove', 'pattern', 'time'],
    context: ['beat', 'tempo', 'pattern', 'pulse']
  },
  
  tempo: {
    category: ['music', 'element', 'speed'],
    properties: ['speed', 'pace', 'timing', 'measured'],
    related: ['speed', 'bpm', 'fast', 'slow', 'pace', 'metronome'],
    actions: ['speed up', 'slow down', 'measure', 'pace', 'time'],
    context: ['speed', 'pace', 'timing', 'metronome']
  },
  
  chorus: {
    category: ['music', 'structure', 'repetition'],
    properties: ['repeated', 'catchy', 'main', 'memorable'],
    related: ['repeat', 'catchy', 'hook', 'refrain', 'sing along', 'main'],
    actions: ['repeat', 'sing along', 'hook', 'catch', 'remember'],
    context: ['song', 'catchy', 'repeat', 'memorable']
  },
  
  verse: {
    category: ['music', 'structure', 'storytelling'],
    properties: ['storytelling', 'changing', 'narrative', 'developing'],
    related: ['story', 'lyrics', 'narrative', 'stanza', 'develop', 'tell'],
    actions: ['tell story', 'develop', 'narrate', 'progress', 'verse'],
    context: ['song', 'story', 'lyrics', 'narrative']
  },
  
  solo: {
    category: ['music', 'performance', 'individual'],
    properties: ['individual', 'featured', 'improvised', 'spotlight'],
    related: ['spotlight', 'improvise', 'feature', 'shred', 'showcase', 'alone'],
    actions: ['solo', 'improvise', 'shred', 'showcase', 'spotlight'],
    context: ['performance', 'spotlight', 'feature', 'improvise']
  }
};
