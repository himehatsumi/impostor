// Abstract concept word associations

module.exports = {
  love: {
    category: ['emotion', 'feeling', 'abstract'],
    properties: ['warm', 'powerful', 'universal', 'complex'],
    related: ['heart', 'affection', 'romance', 'care', 'passion', 'bond'],
    actions: ['feel', 'express', 'share', 'cherish', 'embrace'],
    context: ['relationship', 'family', 'romance', 'connection']
  },
  
  hate: {
    category: ['emotion', 'feeling', 'abstract'],
    properties: ['intense', 'negative', 'destructive', 'strong'],
    related: ['anger', 'disgust', 'resentment', 'hostility', 'aversion'],
    actions: ['despise', 'resent', 'reject', 'oppose', 'loathe'],
    context: ['conflict', 'emotion', 'relationship', 'feeling']
  },
  
  fear: {
    category: ['emotion', 'feeling', 'abstract'],
    properties: ['primal', 'protective', 'paralyzing', 'instinctive'],
    related: ['anxiety', 'terror', 'phobia', 'dread', 'panic', 'worry'],
    actions: ['frighten', 'tremble', 'avoid', 'flee', 'worry'],
    context: ['danger', 'threat', 'unknown', 'survival']
  },
  
  joy: {
    category: ['emotion', 'feeling', 'abstract'],
    properties: ['positive', 'uplifting', 'bright', 'contagious'],
    related: ['happiness', 'delight', 'pleasure', 'bliss', 'cheer', 'smile'],
    actions: ['celebrate', 'laugh', 'smile', 'rejoice', 'enjoy'],
    context: ['celebration', 'success', 'moment', 'life']
  },
  
  anger: {
    category: ['emotion', 'feeling', 'abstract'],
    properties: ['hot', 'intense', 'explosive', 'reactive'],
    related: ['rage', 'fury', 'wrath', 'irritation', 'frustration'],
    actions: ['rage', 'yell', 'explode', 'fume', 'seethe'],
    context: ['conflict', 'injustice', 'frustration', 'emotion']
  },
  
  sadness: {
    category: ['emotion', 'feeling', 'abstract'],
    properties: ['heavy', 'blue', 'melancholic', 'deep'],
    related: ['sorrow', 'grief', 'depression', 'tears', 'melancholy'],
    actions: ['cry', 'mourn', 'grieve', 'weep', 'suffer'],
    context: ['loss', 'disappointment', 'loneliness', 'pain']
  },
  
  hope: {
    category: ['emotion', 'concept', 'abstract'],
    properties: ['optimistic', 'forward-looking', 'inspiring', 'resilient'],
    related: ['optimism', 'faith', 'expectation', 'wish', 'dream', 'light'],
    actions: ['believe', 'wish', 'expect', 'aspire', 'dream'],
    context: ['future', 'difficulty', 'possibility', 'faith']
  },
  
  despair: {
    category: ['emotion', 'concept', 'abstract'],
    properties: ['hopeless', 'dark', 'crushing', 'deep'],
    related: ['hopelessness', 'anguish', 'misery', 'darkness', 'defeat'],
    actions: ['lose hope', 'give up', 'suffer', 'sink', 'despair'],
    context: ['loss', 'defeat', 'darkness', 'rock bottom']
  },
  
  freedom: {
    category: ['concept', 'ideal', 'abstract'],
    properties: ['liberating', 'unrestricted', 'valued', 'fundamental'],
    related: ['liberty', 'independence', 'autonomy', 'choice', 'rights'],
    actions: ['liberate', 'choose', 'break free', 'decide', 'express'],
    context: ['society', 'rights', 'choice', 'independence']
  },
  
  justice: {
    category: ['concept', 'ideal', 'abstract'],
    properties: ['fair', 'balanced', 'moral', 'righteous'],
    related: ['fairness', 'equality', 'law', 'rights', 'balance', 'court'],
    actions: ['judge', 'balance', 'enforce', 'uphold', 'serve'],
    context: ['law', 'society', 'court', 'morality']
  },
  
  truth: {
    category: ['concept', 'ideal', 'abstract'],
    properties: ['honest', 'factual', 'real', 'objective'],
    related: ['honesty', 'fact', 'reality', 'authenticity', 'veracity'],
    actions: ['reveal', 'discover', 'tell', 'uncover', 'verify'],
    context: ['investigation', 'honesty', 'reality', 'knowledge']
  },
  
  lie: {
    category: ['concept', 'action', 'abstract'],
    properties: ['false', 'deceptive', 'dishonest', 'fabricated'],
    related: ['deception', 'falsehood', 'dishonesty', 'fabrication', 'untruth'],
    actions: ['deceive', 'fabricate', 'mislead', 'hide', 'pretend'],
    context: ['deception', 'trust', 'dishonesty', 'secret']
  },
  
  peace: {
    category: ['concept', 'state', 'abstract'],
    properties: ['calm', 'harmonious', 'tranquil', 'desired'],
    related: ['harmony', 'tranquility', 'serenity', 'calm', 'quiet'],
    actions: ['calm', 'harmonize', 'rest', 'meditate', 'relax'],
    context: ['war', 'conflict', 'mind', 'world']
  },
  
  war: {
    category: ['concept', 'state', 'abstract'],
    properties: ['violent', 'destructive', 'organized', 'large-scale'],
    related: ['conflict', 'battle', 'violence', 'army', 'destruction'],
    actions: ['fight', 'battle', 'destroy', 'conquer', 'defend'],
    context: ['nations', 'conflict', 'history', 'violence']
  },
  
  time: {
    category: ['concept', 'dimension', 'abstract'],
    properties: ['continuous', 'irreversible', 'measured', 'relative'],
    related: ['clock', 'moment', 'past', 'future', 'present', 'duration'],
    actions: ['pass', 'measure', 'wait', 'remember', 'plan'],
    context: ['life', 'universe', 'measurement', 'existence']
  },
  
  space: {
    category: ['concept', 'dimension', 'abstract'],
    properties: ['vast', 'empty', 'dimensional', 'infinite'],
    related: ['distance', 'area', 'void', 'cosmos', 'room', 'gap'],
    actions: ['occupy', 'expand', 'fill', 'traverse', 'measure'],
    context: ['universe', 'physics', 'distance', 'dimension']
  },
  
  death: {
    category: ['concept', 'state', 'abstract'],
    properties: ['final', 'inevitable', 'mysterious', 'universal'],
    related: ['mortality', 'end', 'grave', 'afterlife', 'loss', 'reaper'],
    actions: ['die', 'end', 'cease', 'mourn', 'remember'],
    context: ['life', 'mortality', 'loss', 'existence']
  },
  
  life: {
    category: ['concept', 'state', 'abstract'],
    properties: ['vital', 'precious', 'complex', 'temporary'],
    related: ['existence', 'living', 'birth', 'growth', 'experience'],
    actions: ['live', 'exist', 'grow', 'experience', 'breathe'],
    context: ['existence', 'world', 'journey', 'meaning']
  },
  
  power: {
    category: ['concept', 'force', 'abstract'],
    properties: ['influential', 'controlling', 'strong', 'corrupting'],
    related: ['strength', 'control', 'authority', 'influence', 'force'],
    actions: ['control', 'dominate', 'influence', 'command', 'rule'],
    context: ['politics', 'strength', 'control', 'authority']
  },
  
  weakness: {
    category: ['concept', 'state', 'abstract'],
    properties: ['vulnerable', 'fragile', 'lacking', 'exploitable'],
    related: ['vulnerability', 'flaw', 'frailty', 'deficiency', 'limitation'],
    actions: ['falter', 'fail', 'struggle', 'succumb', 'expose'],
    context: ['strength', 'vulnerability', 'limitation', 'flaw']
  },
  
  knowledge: {
    category: ['concept', 'mental', 'abstract'],
    properties: ['learned', 'accumulated', 'powerful', 'shared'],
    related: ['wisdom', 'information', 'understanding', 'learning', 'education'],
    actions: ['learn', 'know', 'understand', 'teach', 'discover'],
    context: ['education', 'wisdom', 'learning', 'understanding']
  },
  
  ignorance: {
    category: ['concept', 'mental', 'abstract'],
    properties: ['unknowing', 'naive', 'blissful', 'dangerous'],
    related: ['unawareness', 'naivety', 'lack', 'blindness', 'stupidity'],
    actions: ['ignore', 'overlook', 'misunderstand', 'remain unaware'],
    context: ['knowledge', 'awareness', 'education', 'understanding']
  },
  
  wisdom: {
    category: ['concept', 'mental', 'abstract'],
    properties: ['deep', 'experienced', 'insightful', 'valuable'],
    related: ['insight', 'understanding', 'experience', 'judgment', 'sage'],
    actions: ['understand', 'judge', 'advise', 'reflect', 'guide'],
    context: ['age', 'experience', 'knowledge', 'guidance']
  },
  
  chaos: {
    category: ['concept', 'state', 'abstract'],
    properties: ['disordered', 'unpredictable', 'wild', 'uncontrolled'],
    related: ['disorder', 'confusion', 'anarchy', 'mayhem', 'randomness'],
    actions: ['disrupt', 'confuse', 'scatter', 'randomize', 'disorder'],
    context: ['order', 'control', 'system', 'universe']
  },
  
  order: {
    category: ['concept', 'state', 'abstract'],
    properties: ['organized', 'structured', 'systematic', 'controlled'],
    related: ['organization', 'structure', 'system', 'arrangement', 'pattern'],
    actions: ['organize', 'arrange', 'structure', 'systematize', 'control'],
    context: ['chaos', 'system', 'society', 'universe']
  },
  
  beauty: {
    category: ['concept', 'quality', 'abstract'],
    properties: ['aesthetic', 'pleasing', 'subjective', 'attractive'],
    related: ['aesthetics', 'attractiveness', 'elegance', 'grace', 'charm'],
    actions: ['admire', 'appreciate', 'behold', 'create', 'enhance'],
    context: ['art', 'nature', 'perception', 'aesthetics']
  },
  
  ugliness: {
    category: ['concept', 'quality', 'abstract'],
    properties: ['unattractive', 'displeasing', 'repulsive', 'subjective'],
    related: ['unattractiveness', 'repulsion', 'deformity', 'grotesque'],
    actions: ['repel', 'disgust', 'mar', 'disfigure', 'offend'],
    context: ['beauty', 'aesthetics', 'perception', 'appearance']
  },
  
  courage: {
    category: ['concept', 'virtue', 'abstract'],
    properties: ['brave', 'bold', 'fearless', 'admirable'],
    related: ['bravery', 'valor', 'boldness', 'heroism', 'guts'],
    actions: ['face', 'dare', 'confront', 'stand up', 'brave'],
    context: ['fear', 'danger', 'challenge', 'heroism']
  },
  
  cowardice: {
    category: ['concept', 'vice', 'abstract'],
    properties: ['fearful', 'timid', 'weak', 'shameful'],
    related: ['fear', 'timidity', 'weakness', 'retreat', 'yellow'],
    actions: ['flee', 'hide', 'avoid', 'retreat', 'cower'],
    context: ['courage', 'fear', 'danger', 'shame']
  },
  
  pride: {
    category: ['emotion', 'concept', 'abstract'],
    properties: ['confident', 'dignified', 'arrogant', 'self-respect'],
    related: ['dignity', 'self-respect', 'arrogance', 'ego', 'honor'],
    actions: ['boast', 'stand tall', 'respect self', 'display', 'honor'],
    context: ['achievement', 'self', 'dignity', 'sin']
  },
  
  humility: {
    category: ['concept', 'virtue', 'abstract'],
    properties: ['modest', 'humble', 'grounded', 'selfless'],
    related: ['modesty', 'meekness', 'unpretentiousness', 'lowliness'],
    actions: ['humble', 'bow', 'acknowledge', 'defer', 'serve'],
    context: ['pride', 'virtue', 'character', 'spirituality']
  },
  
  greed: {
    category: ['emotion', 'vice', 'abstract'],
    properties: ['excessive', 'selfish', 'insatiable', 'corrupting'],
    related: ['avarice', 'selfishness', 'desire', 'materialism', 'hoarding'],
    actions: ['hoard', 'desire', 'take', 'accumulate', 'covet'],
    context: ['wealth', 'sin', 'desire', 'corruption']
  },
  
  generosity: {
    category: ['concept', 'virtue', 'abstract'],
    properties: ['giving', 'kind', 'abundant', 'selfless'],
    related: ['kindness', 'charity', 'giving', 'benevolence', 'largesse'],
    actions: ['give', 'share', 'donate', 'help', 'provide'],
    context: ['charity', 'kindness', 'wealth', 'virtue']
  },
  
  envy: {
    category: ['emotion', 'vice', 'abstract'],
    properties: ['jealous', 'resentful', 'green', 'bitter'],
    related: ['jealousy', 'resentment', 'covetousness', 'desire', 'green'],
    actions: ['covet', 'resent', 'desire', 'compare', 'begrudge'],
    context: ['comparison', 'desire', 'sin', 'emotion']
  },
  
  gratitude: {
    category: ['emotion', 'concept', 'abstract'],
    properties: ['thankful', 'appreciative', 'warm', 'positive'],
    related: ['thankfulness', 'appreciation', 'thanks', 'recognition'],
    actions: ['thank', 'appreciate', 'acknowledge', 'recognize', 'value'],
    context: ['gift', 'kindness', 'help', 'blessing']
  },
  
  faith: {
    category: ['concept', 'belief', 'abstract'],
    properties: ['believing', 'trusting', 'spiritual', 'unwavering'],
    related: ['belief', 'trust', 'religion', 'confidence', 'devotion'],
    actions: ['believe', 'trust', 'pray', 'worship', 'devote'],
    context: ['religion', 'spirituality', 'trust', 'belief']
  },
  
  doubt: {
    category: ['concept', 'mental', 'abstract'],
    properties: ['uncertain', 'questioning', 'skeptical', 'wavering'],
    related: ['uncertainty', 'skepticism', 'suspicion', 'hesitation'],
    actions: ['question', 'hesitate', 'suspect', 'waver', 'distrust'],
    context: ['belief', 'certainty', 'decision', 'faith']
  },
  
  trust: {
    category: ['concept', 'relationship', 'abstract'],
    properties: ['confident', 'reliable', 'vulnerable', 'earned'],
    related: ['confidence', 'reliance', 'faith', 'belief', 'dependence'],
    actions: ['rely', 'believe', 'depend', 'confide', 'entrust'],
    context: ['relationship', 'faith', 'confidence', 'bond']
  },
  
  betrayal: {
    category: ['concept', 'action', 'abstract'],
    properties: ['treacherous', 'hurtful', 'breaking', 'devastating'],
    related: ['treachery', 'disloyalty', 'backstabbing', 'deception'],
    actions: ['betray', 'deceive', 'backstab', 'break trust', 'turn on'],
    context: ['trust', 'relationship', 'loyalty', 'hurt']
  },
  
  loyalty: {
    category: ['concept', 'virtue', 'abstract'],
    properties: ['faithful', 'devoted', 'steadfast', 'unwavering'],
    related: ['faithfulness', 'devotion', 'allegiance', 'fidelity'],
    actions: ['remain faithful', 'stand by', 'support', 'defend', 'commit'],
    context: ['relationship', 'duty', 'honor', 'commitment']
  },
  
  honor: {
    category: ['concept', 'virtue', 'abstract'],
    properties: ['noble', 'principled', 'respected', 'dignified'],
    related: ['integrity', 'dignity', 'respect', 'nobility', 'virtue'],
    actions: ['respect', 'uphold', 'defend', 'maintain', 'honor'],
    context: ['virtue', 'respect', 'duty', 'character']
  },
  
  shame: {
    category: ['emotion', 'concept', 'abstract'],
    properties: ['embarrassing', 'guilty', 'humiliating', 'painful'],
    related: ['embarrassment', 'guilt', 'humiliation', 'disgrace'],
    actions: ['embarrass', 'humiliate', 'disgrace', 'hide', 'regret'],
    context: ['guilt', 'society', 'mistake', 'emotion']
  },
  
  guilt: {
    category: ['emotion', 'concept', 'abstract'],
    properties: ['remorseful', 'heavy', 'conscience', 'regretful'],
    related: ['remorse', 'regret', 'conscience', 'responsibility', 'blame'],
    actions: ['regret', 'blame self', 'confess', 'atone', 'feel bad'],
    context: ['wrongdoing', 'conscience', 'morality', 'emotion']
  },
  
  innocence: {
    category: ['concept', 'state', 'abstract'],
    properties: ['pure', 'naive', 'blameless', 'untainted'],
    related: ['purity', 'naivety', 'virtue', 'blamelessness', 'childhood'],
    actions: ['preserve', 'protect', 'maintain', 'lose', 'prove'],
    context: ['guilt', 'childhood', 'purity', 'law']
  },
  
  memory: {
    category: ['concept', 'mental', 'abstract'],
    properties: ['stored', 'recalled', 'fading', 'precious'],
    related: ['recollection', 'remembrance', 'past', 'nostalgia', 'recall'],
    actions: ['remember', 'recall', 'forget', 'cherish', 'store'],
    context: ['past', 'mind', 'nostalgia', 'experience']
  },
  
  dream: {
    category: ['concept', 'mental', 'abstract'],
    properties: ['aspirational', 'surreal', 'sleeping', 'hopeful'],
    related: ['aspiration', 'goal', 'vision', 'sleep', 'imagination'],
    actions: ['dream', 'aspire', 'imagine', 'sleep', 'pursue'],
    context: ['sleep', 'aspiration', 'future', 'imagination']
  },
  
  nightmare: {
    category: ['concept', 'mental', 'abstract'],
    properties: ['terrifying', 'dark', 'disturbing', 'haunting'],
    related: ['terror', 'fear', 'horror', 'bad dream', 'anxiety'],
    actions: ['frighten', 'haunt', 'disturb', 'wake', 'scream'],
    context: ['sleep', 'fear', 'horror', 'anxiety']
  },
  
  reality: {
    category: ['concept', 'state', 'abstract'],
    properties: ['actual', 'tangible', 'objective', 'harsh'],
    related: ['actuality', 'truth', 'existence', 'fact', 'world'],
    actions: ['exist', 'face', 'accept', 'perceive', 'experience'],
    context: ['existence', 'truth', 'perception', 'world']
  },
  
  illusion: {
    category: ['concept', 'perception', 'abstract'],
    properties: ['deceptive', 'false', 'misleading', 'magical'],
    related: ['deception', 'mirage', 'trick', 'fantasy', 'delusion'],
    actions: ['deceive', 'trick', 'mislead', 'create', 'shatter'],
    context: ['reality', 'perception', 'magic', 'deception']
  },
  
  destiny: {
    category: ['concept', 'fate', 'abstract'],
    properties: ['predetermined', 'inevitable', 'fated', 'mysterious'],
    related: ['fate', 'future', 'predetermined', 'path', 'fortune'],
    actions: ['fulfill', 'accept', 'fight', 'embrace', 'determine'],
    context: ['fate', 'future', 'path', 'life']
  },
  
  fate: {
    category: ['concept', 'destiny', 'abstract'],
    properties: ['predetermined', 'unavoidable', 'cosmic', 'mysterious'],
    related: ['destiny', 'predetermined', 'fortune', 'kismet', 'doom'],
    actions: ['determine', 'seal', 'accept', 'defy', 'fulfill'],
    context: ['destiny', 'life', 'future', 'cosmic']
  },
  
  luck: {
    category: ['concept', 'chance', 'abstract'],
    properties: ['random', 'fortunate', 'unpredictable', 'chance'],
    related: ['fortune', 'chance', 'random', 'lucky', 'clover', 'horseshoe'],
    actions: ['strike', 'favor', 'run out', 'push', 'test'],
    context: ['chance', 'fortune', 'gambling', 'random']
  },
  
  fortune: {
    category: ['concept', 'wealth', 'luck'],
    properties: ['wealthy', 'lucky', 'prosperous', 'abundant'],
    related: ['wealth', 'luck', 'prosperity', 'riches', 'money'],
    actions: ['accumulate', 'seek', 'lose', 'inherit', 'make'],
    context: ['wealth', 'luck', 'prosperity', 'money']
  },
  
  misfortune: {
    category: ['concept', 'bad luck', 'abstract'],
    properties: ['unlucky', 'unfortunate', 'tragic', 'adverse'],
    related: ['bad luck', 'tragedy', 'disaster', 'hardship', 'curse'],
    actions: ['befall', 'suffer', 'endure', 'overcome', 'curse'],
    context: ['bad luck', 'tragedy', 'hardship', 'suffering']
  },
  
  success: {
    category: ['concept', 'achievement', 'abstract'],
    properties: ['accomplished', 'victorious', 'achieved', 'triumphant'],
    related: ['achievement', 'victory', 'accomplishment', 'triumph', 'win'],
    actions: ['achieve', 'accomplish', 'win', 'succeed', 'celebrate'],
    context: ['achievement', 'goal', 'victory', 'career']
  },
  
  failure: {
    category: ['concept', 'defeat', 'abstract'],
    properties: ['unsuccessful', 'defeated', 'fallen short', 'disappointing'],
    related: ['defeat', 'loss', 'disappointment', 'setback', 'mistake'],
    actions: ['fail', 'lose', 'fall short', 'disappoint', 'learn from'],
    context: ['defeat', 'attempt', 'goal', 'lesson']
  },
  
  victory: {
    category: ['concept', 'triumph', 'abstract'],
    properties: ['triumphant', 'winning', 'successful', 'glorious'],
    related: ['win', 'triumph', 'conquest', 'success', 'champion'],
    actions: ['win', 'triumph', 'conquer', 'celebrate', 'achieve'],
    context: ['battle', 'competition', 'war', 'success']
  },
  
  defeat: {
    category: ['concept', 'loss', 'abstract'],
    properties: ['beaten', 'conquered', 'lost', 'vanquished'],
    related: ['loss', 'failure', 'conquered', 'beaten', 'surrender'],
    actions: ['lose', 'surrender', 'fall', 'accept', 'overcome'],
    context: ['battle', 'competition', 'war', 'failure']
  },
  
  revenge: {
    category: ['concept', 'emotion', 'abstract'],
    properties: ['vengeful', 'retaliatory', 'bitter', 'consuming'],
    related: ['vengeance', 'retaliation', 'payback', 'retribution', 'grudge'],
    actions: ['avenge', 'retaliate', 'payback', 'seek', 'plot'],
    context: ['vengeance', 'justice', 'anger', 'grudge']
  },
  
  forgiveness: {
    category: ['concept', 'virtue', 'abstract'],
    properties: ['merciful', 'pardoning', 'healing', 'liberating'],
    related: ['pardon', 'mercy', 'absolution', 'reconciliation', 'peace'],
    actions: ['forgive', 'pardon', 'absolve', 'let go', 'reconcile'],
    context: ['mercy', 'healing', 'peace', 'relationship']
  },
  
  sacrifice: {
    category: ['concept', 'action', 'abstract'],
    properties: ['selfless', 'giving up', 'noble', 'costly'],
    related: ['offering', 'give up', 'selfless', 'martyr', 'cost'],
    actions: ['give up', 'offer', 'surrender', 'martyr', 'dedicate'],
    context: ['selfless', 'noble', 'cost', 'greater good']
  },
  
  redemption: {
    category: ['concept', 'salvation', 'abstract'],
    properties: ['atoning', 'saving', 'recovering', 'transforming'],
    related: ['atonement', 'salvation', 'forgiveness', 'second chance', 'reform'],
    actions: ['atone', 'redeem', 'save', 'reform', 'earn back'],
    context: ['atonement', 'second chance', 'salvation', 'past']
  },
  
  temptation: {
    category: ['concept', 'desire', 'abstract'],
    properties: ['alluring', 'seductive', 'testing', 'dangerous'],
    related: ['desire', 'lure', 'seduction', 'test', 'forbidden'],
    actions: ['tempt', 'lure', 'seduce', 'resist', 'succumb'],
    context: ['desire', 'test', 'forbidden', 'weakness']
  },
  
  discipline: {
    category: ['concept', 'virtue', 'abstract'],
    properties: ['controlled', 'trained', 'orderly', 'strict'],
    related: ['control', 'training', 'order', 'self-control', 'practice'],
    actions: ['train', 'control', 'practice', 'master', 'restrain'],
    context: ['training', 'self-control', 'mastery', 'order']
  },
  
  chaos: {
    category: ['concept', 'state', 'abstract'],
    properties: ['disordered', 'unpredictable', 'wild', 'uncontrolled'],
    related: ['disorder', 'confusion', 'anarchy', 'mayhem', 'randomness'],
    actions: ['disrupt', 'confuse', 'scatter', 'randomize', 'disorder'],
    context: ['order', 'control', 'system', 'universe']
  },
  
  harmony: {
    category: ['concept', 'state', 'abstract'],
    properties: ['balanced', 'peaceful', 'unified', 'melodious'],
    related: ['balance', 'peace', 'unity', 'accord', 'symphony'],
    actions: ['balance', 'unify', 'harmonize', 'blend', 'accord'],
    context: ['music', 'peace', 'balance', 'unity']
  },
  
  conflict: {
    category: ['concept', 'struggle', 'abstract'],
    properties: ['opposing', 'clashing', 'tense', 'divisive'],
    related: ['clash', 'opposition', 'struggle', 'dispute', 'tension'],
    actions: ['clash', 'oppose', 'fight', 'dispute', 'struggle'],
    context: ['war', 'disagreement', 'tension', 'struggle']
  },
  
  unity: {
    category: ['concept', 'togetherness', 'abstract'],
    properties: ['united', 'together', 'whole', 'harmonious'],
    related: ['together', 'oneness', 'solidarity', 'union', 'harmony'],
    actions: ['unite', 'join', 'combine', 'solidify', 'bond'],
    context: ['together', 'team', 'nation', 'harmony']
  },
  
  division: {
    category: ['concept', 'separation', 'abstract'],
    properties: ['separated', 'split', 'divided', 'fractured'],
    related: ['separation', 'split', 'partition', 'fracture', 'discord'],
    actions: ['divide', 'separate', 'split', 'fracture', 'partition'],
    context: ['separation', 'conflict', 'split', 'discord']
  },
  
  balance: {
    category: ['concept', 'equilibrium', 'abstract'],
    properties: ['equilibrium', 'stable', 'even', 'centered'],
    related: ['equilibrium', 'stability', 'harmony', 'scales', 'center'],
    actions: ['balance', 'stabilize', 'equalize', 'center', 'weigh'],
    context: ['stability', 'harmony', 'scales', 'life']
  },
  
  imbalance: {
    category: ['concept', 'disequilibrium', 'abstract'],
    properties: ['uneven', 'unstable', 'tilted', 'disproportionate'],
    related: ['instability', 'inequality', 'disproportion', 'tilt', 'upset'],
    actions: ['unbalance', 'tilt', 'upset', 'destabilize', 'skew'],
    context: ['instability', 'inequality', 'problem', 'disorder']
  },
  
  evolution: {
    category: ['concept', 'change', 'abstract'],
    properties: ['developing', 'adapting', 'progressive', 'gradual'],
    related: ['development', 'adaptation', 'progress', 'change', 'growth'],
    actions: ['evolve', 'adapt', 'develop', 'progress', 'change'],
    context: ['biology', 'progress', 'change', 'development']
  },
  
  revolution: {
    category: ['concept', 'change', 'abstract'],
    properties: ['radical', 'transformative', 'rebellious', 'sudden'],
    related: ['rebellion', 'uprising', 'transformation', 'radical change', 'revolt'],
    actions: ['revolt', 'rebel', 'transform', 'overthrow', 'revolutionize'],
    context: ['change', 'rebellion', 'transformation', 'society']
  },
  
  tradition: {
    category: ['concept', 'custom', 'abstract'],
    properties: ['customary', 'established', 'passed down', 'cultural'],
    related: ['custom', 'heritage', 'ritual', 'culture', 'legacy'],
    actions: ['preserve', 'pass down', 'honor', 'maintain', 'practice'],
    context: ['culture', 'heritage', 'family', 'society']
  },
  
  innovation: {
    category: ['concept', 'creation', 'abstract'],
    properties: ['new', 'creative', 'groundbreaking', 'progressive'],
    related: ['invention', 'creativity', 'progress', 'new', 'breakthrough'],
    actions: ['innovate', 'create', 'invent', 'pioneer', 'revolutionize'],
    context: ['technology', 'progress', 'creativity', 'future']
  },
  
  legacy: {
    category: ['concept', 'inheritance', 'abstract'],
    properties: ['inherited', 'lasting', 'memorable', 'passed down'],
    related: ['inheritance', 'heritage', 'memory', 'impact', 'tradition'],
    actions: ['leave behind', 'inherit', 'pass down', 'remember', 'impact'],
    context: ['inheritance', 'memory', 'impact', 'history']
  },
  
  eternity: {
    category: ['concept', 'time', 'abstract'],
    properties: ['endless', 'infinite', 'timeless', 'forever'],
    related: ['infinity', 'forever', 'endless', 'immortal', 'perpetual'],
    actions: ['last forever', 'endure', 'persist', 'transcend time'],
    context: ['time', 'forever', 'infinite', 'immortal']
  },
  
  moment: {
    category: ['concept', 'time', 'abstract'],
    properties: ['brief', 'fleeting', 'instant', 'present'],
    related: ['instant', 'second', 'now', 'fleeting', 'present'],
    actions: ['pass', 'seize', 'cherish', 'capture', 'live in'],
    context: ['time', 'present', 'fleeting', 'now']
  },
  
  infinity: {
    category: ['concept', 'endless', 'abstract'],
    properties: ['endless', 'limitless', 'boundless', 'eternal'],
    related: ['endless', 'limitless', 'eternity', 'forever', 'boundless'],
    actions: ['extend forever', 'transcend', 'continue', 'never end'],
    context: ['endless', 'mathematics', 'universe', 'eternal']
  },
  
  void: {
    category: ['concept', 'emptiness', 'abstract'],
    properties: ['empty', 'nothing', 'hollow', 'dark'],
    related: ['emptiness', 'nothing', 'abyss', 'vacuum', 'hollow'],
    actions: ['empty', 'consume', 'fill', 'exist', 'nothingness'],
    context: ['emptiness', 'space', 'nothing', 'dark']
  },
  
  existence: {
    category: ['concept', 'being', 'abstract'],
    properties: ['being', 'real', 'present', 'alive'],
    related: ['being', 'reality', 'life', 'presence', 'consciousness'],
    actions: ['exist', 'be', 'live', 'persist', 'manifest'],
    context: ['being', 'reality', 'life', 'philosophy']
  },
  
  purpose: {
    category: ['concept', 'meaning', 'abstract'],
    properties: ['meaningful', 'intentional', 'directed', 'goal-oriented'],
    related: ['meaning', 'goal', 'intention', 'reason', 'mission'],
    actions: ['intend', 'aim', 'pursue', 'fulfill', 'serve'],
    context: ['meaning', 'goal', 'life', 'mission']
  },
  
  mystery: {
    category: ['concept', 'unknown', 'abstract'],
    properties: ['unknown', 'puzzling', 'enigmatic', 'secretive'],
    related: ['enigma', 'puzzle', 'secret', 'unknown', 'riddle'],
    actions: ['puzzle', 'mystify', 'intrigue', 'solve', 'unravel'],
    context: ['unknown', 'puzzle', 'secret', 'investigation']
  },
  
  revelation: {
    category: ['concept', 'discovery', 'abstract'],
    properties: ['revealing', 'enlightening', 'surprising', 'disclosed'],
    related: ['discovery', 'disclosure', 'epiphany', 'unveiling', 'truth'],
    actions: ['reveal', 'disclose', 'unveil', 'discover', 'enlighten'],
    context: ['discovery', 'truth', 'surprise', 'enlightenment']
  }
};
