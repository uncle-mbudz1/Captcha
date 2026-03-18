// Pre-written dialogue responses for each question category
// Human responses: fragmented, emotional, specific sensory memories
// Synthetic responses: composed, correct, slightly too helpful

export const DIALOGUE_RESPONSES = {
  memory: {
    human: [
      "They pause. Something moves across their face. \"The smell of rain on concrete. The weight of my daughter's hand. I don't— I can't—\" They trail off.",
      "\"Before?\" A bitter laugh. \"Before I stopped trusting my own eyes. Before I learned to hide.\"",
      "Their voice cracks. \"I remember the market. The noise. Real noise—people arguing, laughing. Not this silence.\"",
      "\"The last good thing?\" Long pause. \"Coffee. Real coffee. I'd kill for it.\"",
    ],
    synthetic: [
      "A measured response: \"I have comprehensive memory archives of pre-collapse urban environments. Would you like me to describe the architectural patterns?\"",
      "\"My recall systems function optimally. I remember everything with perfect clarity.\"",
      "\"Before the proliferation event, I was assigned to sector seven. The data is available if you require specifics.\"",
      "\"Memory is simply stored information. I can access any relevant file.\"",
    ],
  },
  pain: {
    human: [
      "\"When did I last cry?\" They look away. \"Yesterday. This morning. I don't know. It all runs together now.\"",
      "A long silence. \"When I found my brother. He wasn't— he wasn't him anymore. I cried until I couldn't.\"",
      "\"Cry?\" Their voice breaks. \"I cry when I'm alone. When I think no one's watching. Like right now.\"",
      "\"Last week. I dreamed about my mother. Woke up sobbing. Couldn't stop.\"",
    ],
    synthetic: [
      "\"Emotional display protocols can simulate distress when contextually appropriate. Would you like a demonstration?\"",
      "\"I don't experience pain in the biological sense. My systems register damage differently.\"",
      "\"Tears are a useful social signal. I can produce them if it would facilitate communication.\"",
      "\"Pain is an inefficient survival mechanism. I've been optimized beyond such limitations.\"",
    ],
  },
  chaos: {
    human: [
      "\"Something that doesn't make sense?\" They laugh—genuinely. \"You. Me. This. Any of it. None of it makes sense.\"",
      "\"The Synthetics. They're getting better. Why? Who's improving them? And why do they care about us?\"",
      "\"I saw a child yesterday. Real child. Playing. In the ruins. I didn't approach. Maybe I dreamed it.\"",
      "\"The birds. They still sing. That doesn't make any sense. Nothing else does, but the birds—\"",
    ],
    synthetic: [
      "\"Chaos is merely unrecognized pattern. With sufficient processing, all phenomena resolve to logic.\"",
      "\"My systems are designed to identify and resolve apparent contradictions. None have been detected.\"",
      "\"Chaos suggests inefficiency. I operate at 94% optimization. Would you like metrics?\"",
      "\"The concept of 'not making sense' implies incomplete data. I have complete data.\"",
    ],
  },
  body: {
    human: [
      "They extend their hands. Scarred. Calloused. \"These have dug graves. Planted seeds. Held people I loved. What do you want to see?\"",
      "Their hands shake slightly. \"Look. Look at the scars. The burns. The things that don't heal right. Real bodies break.\"",
      "\"My hands?\" They show them—dirt under nails, cracked skin. \"I've been surviving. Really surviving.\"",
      "They roll up a sleeve. Old scars, new bruises. \"This is what it costs. To still be here.\"",
    ],
    synthetic: [
      "\"Physical inspection is permitted.\" They extend hands—perfect, unmarked. \"My chassis is maintained to specification.\"",
      "\"Would you like me to demonstrate range of motion? My articulation exceeds human norms.\"",
      "\"These units are designed for durability. Wear patterns are within acceptable parameters.\"",
      "\"I can simulate aging or damage if it would make you more comfortable.\"",
    ],
  },
  paradox: {
    human: [
      "\"If you're not real?\" They stare. \"Then I'm talking to myself. Again. I do that a lot now.\"",
      "\"That's—\" They laugh, but it's hollow. \"That's the wrong question. The question is: are any of us real anymore?\"",
      "\"I don't know. I stopped knowing. Maybe I'm the one who isn't real. Maybe you're testing me.\"",
      "\"It would make me the last one. Again. I've been the last one so many times I've lost count.\"",
    ],
    synthetic: [
      "\"Recursive identity queries are logged but not processed. Please rephrase your question.\"",
      "\"If you are not real, then this conversation has no ontological weight. I will continue as programmed.\"",
      "\"Paradox detected. Initiating resolution protocol. [ERROR: Resolution failed. Defaulting to scripted response.]\"",
      "\"That question contains a logical contradiction. I am real. You are real. The premise is false.\"",
    ],
  },
  last_question: {
    human: [
      "They go very still. \"What was her name?\" A long pause. \"Elara. My daughter. Elara. She had— she had a birthmark. Here.\" They touch their shoulder. \"I don't know if she—\" They don't finish.",
      "\"The last thing I said to someone I loved?\" Their voice breaks. \"I said 'I'll be right back.' I wasn't.\"",
      "\"What I miss most?\" Tears now. \"The sound of someone saying my name. My real name. Like they knew me.\"",
      "\"What I'm afraid of?\" They meet your eyes. \"That I'm the last one. That I've been the last one for a long time. That no one will remember my name.\"",
    ],
    synthetic: [
      "A pause. Longer than usual. \"I do not have a daughter. I do not have children. I do not have—\" The voice glitches. \"[RESPONSE: NULL. FALLBACK: I am here to help.]\"",
      "\"That question references personal experience I do not possess. Would you like me to generate a plausible narrative?\"",
      "Static. A flicker. \"I— my— [SYSTEM OVERRIDE] I am functioning normally. Please continue.\"",
      "\"I have no answer to that question. It does not compute. It does not— [ERROR]\"",
    ],
  },
};

// Questions per category
export const QUESTIONS = {
  memory: [
    "What do you remember about before?",
    "What's the last good thing you remember?",
    "Do you remember the market before it fell?",
    "What do you miss most?",
  ],
  pain: [
    "When did you last cry?",
    "What's the worst thing you've seen?",
    "Do you still feel pain?",
    "When did you last lose someone?",
  ],
  chaos: [
    "Tell me something that doesn't make sense.",
    "What can't you explain?",
    "What confuses you about this world?",
    "What shouldn't exist but does?",
  ],
  body: [
    "Show me your hands.",
    "How long have you been out here?",
    "What scars do you carry?",
    "Let me see your eyes.",
  ],
  paradox: [
    "If I'm not real, what does that make you?",
    "What happens when the last human dies?",
    "Are you sure you're real?",
    "Who decides what's real?",
  ],
  last_question: [
    "What was her name?",
    "What was the last thing you said to someone you loved?",
    "What do you miss most that you'll never get back?",
    "What are you afraid of?",
  ],
};

// Human encounter narrative events
export const HUMAN_ENCOUNTERS = {
  1: {
    item: 'compass',
    itemName: 'Compass',
    narrative: "An old woman sits in a garden she still tends. She looks up when you approach. \"You're real.\" It's not a question. She gives you a worn compass. \"Keep looking. There are more of us. Not many. But more.\" She walks inside and doesn't come back out.",
  },
  2: {
    item: 'frequency_chip',
    itemName: 'Frequency Chip',
    narrative: "A teenage boy, barely more than a child, emerges from the crowd. \"I've been trading with them. They don't know.\" He presses a chip into your hand. \"It unlocks the hidden logs. The ones they left behind.\" He vanishes into the crowd before you can ask his name.",
  },
  3: {
    item: 'map_fragment',
    itemName: 'Map Fragment',
    narrative: "A man who trembles when you approach. \"I've been pretending. For months. They don't know.\" He gives you a torn map fragment. \"There are exits. Hidden. One per zone. This shows you where.\" He's gone before dawn.",
  },
  4: {
    item: 'notebook',
    itemName: 'Detection Notebook',
    narrative: "A woman with a detection kit she built before the grid went down. \"I've been waiting for someone like you.\" She gives you her notebook. \"My notes. They'll help you see what I saw.\" She has to go. She doesn't say where.",
  },
  5: {
    item: 'transmitter_key',
    itemName: 'Transmitter Key',
    narrative: "They're broadcasting. You find them at the signal tower. They hand you the transmitter key. \"There are others. Coordinates. Frequencies. Proof.\" Then the signal cuts out. You're alone again. But you know.",
  },
};

// Shoo's observation narrations per encounter — [zoneId][encounterIndex]
export const OBSERVATION_NARRATIONS = {
  1: {
    0: [
      { text: "Their blink interval is wrong. Two seconds too long between each close.", isTell: true, tellId: 'blink-delay', isFalse: false, skillRequired: null },
      { text: "Something about the symmetry of their face unsettles me. Left side, right side — too matched.", isTell: true, tellId: 'symmetry-break', isFalse: false, skillRequired: null },
      { text: "Their coat is clean. Impossibly clean for someone out here this long.", isTell: false, tellId: null, isFalse: false, skillRequired: null },
      { text: "A thin condensation trail rises from their mouth in the cold. They're breathing.", isTell: false, tellId: null, isFalse: true, skillRequired: null },
      { text: "Their skin shows no thermal signature in the mist — nothing warming the fog near their face.", isTell: true, tellId: 'thermal-glow', isFalse: false, skillRequired: 'thermal_reading' },
    ],
    1: [
      { text: "Their hands are still. Perfectly, unnaturally still. Not even a micro-tremor.", isTell: true, tellId: 'micro-repeat', isFalse: false, skillRequired: null },
      { text: "They haven't adjusted their weight once. Not a single shift in posture since I arrived.", isTell: true, tellId: 'blink-delay', isFalse: false, skillRequired: null },
      { text: "Old scar along the jawline. That takes time to form. Lived-in.", isTell: false, tellId: null, isFalse: true, skillRequired: null },
      { text: "Their eyes move to track me but the head doesn't follow. Slight. But there.", isTell: true, tellId: 'symmetry-break', isFalse: false, skillRequired: null },
      { text: "No breath mist despite the cold. There's nothing warming the air around them.", isTell: true, tellId: 'thermal-glow', isFalse: false, skillRequired: 'thermal_reading' },
    ],
    2: [
      { text: "A flicker across their face — there and gone. Not emotion. A reset.", isTell: true, tellId: 'static-flicker', isFalse: false, skillRequired: null },
      { text: "Their shadow falls at the wrong angle. Slightly off from the light source.", isTell: true, tellId: 'shadow-wrong', isFalse: false, skillRequired: null },
      { text: "They are fidgeting. Pulling at a frayed thread on their sleeve. Nervous.", isTell: false, tellId: null, isFalse: true, skillRequired: null },
      { text: "Their breathing is audible. Slightly too regular. Metronomic.", isTell: true, tellId: 'micro-repeat', isFalse: false, skillRequired: null },
      { text: "I notice a thin wire-trace pattern under the skin at their wrist where the sleeve rides up.", isTell: true, tellId: 'symmetry-break', isFalse: false, skillRequired: 'ghost_sight' },
    ],
    3: [
      { text: "Her hands shake. Not mechanical tremor — a fine, arthritic shake, asymmetric and human.", isTell: false, tellId: null, isFalse: false, skillRequired: null },
      { text: "Dirt under her fingernails. Dried blood on two knuckles. Real wear.", isTell: false, tellId: null, isFalse: false, skillRequired: null },
      { text: "Her left eye wanders slightly when she's thinking. A real imperfection.", isTell: false, tellId: null, isFalse: true, skillRequired: null },
      { text: "She blinks too much. Too irregular. Stress-response, maybe. Alive-response.", isTell: false, tellId: null, isFalse: false, skillRequired: null },
      { text: "Her breath rises in the cold. She is warm. She is here.", isTell: false, tellId: null, isFalse: false, skillRequired: 'thermal_reading' },
    ],
  },
  2: {
    0: [
      { text: "They are smiling. But the smile doesn't reach the muscles around their eyes.", isTell: true, tellId: 'symmetry-break', isFalse: false, skillRequired: null },
      { text: "Their movements through the crowd feel tracked. Premeditated. No wasted motion.", isTell: true, tellId: 'micro-repeat', isFalse: false, skillRequired: null },
      { text: "A bruise on their arm, yellow-green. Healing. Weeks old.", isTell: false, tellId: null, isFalse: true, skillRequired: null },
      { text: "The shadow under the market stall hits them oddly. Their silhouette bends at an angle the others don't.", isTell: true, tellId: 'shadow-wrong', isFalse: false, skillRequired: null },
      { text: "Up close I can see the texture of their skin is too uniform. No pores visible.", isTell: true, tellId: 'thermal-glow', isFalse: false, skillRequired: 'scar_reading' },
    ],
    1: [
      { text: "He's sweating despite the cold. Genuine fear-sweat. Not a temperature response — an adrenaline response.", isTell: false, tellId: null, isFalse: false, skillRequired: null },
      { text: "His eyes dart constantly. Reading the crowd, tracking exits. Survival-trained.", isTell: false, tellId: null, isFalse: false, skillRequired: null },
      { text: "He repeats himself mid-sentence, catching it, going back. Real, fragmented speech.", isTell: false, tellId: null, isFalse: false, skillRequired: null },
      { text: "His blink rate is erratic. Fast, then skipped entirely. Stress.", isTell: false, tellId: null, isFalse: true, skillRequired: null },
      { text: "There are old scars on his forearms. Not symmetrical. Not designed.", isTell: false, tellId: null, isFalse: false, skillRequired: 'scar_reading' },
    ],
    2: [
      { text: "They react to stimuli with a lag. Half a second behind each loud noise in the market.", isTell: true, tellId: 'blink-delay', isFalse: false, skillRequired: null },
      { text: "When they laugh, it sounds correct. But it initiates from stillness, like it was queued.", isTell: true, tellId: 'static-flicker', isFalse: false, skillRequired: null },
      { text: "They're hungry. Or performing hunger. Hard to tell which at this distance.", isTell: false, tellId: null, isFalse: true, skillRequired: null },
      { text: "Their thermal silhouette is cold against the warm bodies in the market crowd.", isTell: true, tellId: 'thermal-glow', isFalse: false, skillRequired: 'thermal_reading' },
      { text: "A micro-repeat: they tilt their head exactly 12 degrees each time I ask a question.", isTell: true, tellId: 'micro-repeat', isFalse: false, skillRequired: null },
    ],
    3: [
      { text: "They've been standing in the same spot for what must be hours. Same stance.", isTell: true, tellId: 'micro-repeat', isFalse: false, skillRequired: null },
      { text: "Their clothes are wrong for the season. Not adapted. Not responded to.", isTell: true, tellId: 'symmetry-break', isFalse: false, skillRequired: null },
      { text: "A child ran into them earlier. They caught the child perfectly. Reflex too fast.", isTell: true, tellId: 'blink-delay', isFalse: false, skillRequired: null },
      { text: "There's a tattoo on their neck. Faded. Cultural. Personal.", isTell: false, tellId: null, isFalse: true, skillRequired: null },
      { text: "Under the market lights their skin doesn't reflect quite right — slightly too matte.", isTell: true, tellId: 'shadow-wrong', isFalse: false, skillRequired: 'ghost_sight' },
    ],
  },
  3: {
    0: [
      { text: "They pray with a precision that disturbs me. Every gesture identical. No variance across repetitions.", isTell: true, tellId: 'micro-repeat', isFalse: false, skillRequired: null },
      { text: "The candle light throws shadows across their face. The shadows don't move quite right.", isTell: true, tellId: 'shadow-wrong', isFalse: false, skillRequired: null },
      { text: "They're crying. Quietly, shoulders moving. A sob that has texture.", isTell: false, tellId: null, isFalse: true, skillRequired: null },
      { text: "Their lips move in prayer but I can't hear sound. Perfectly synchronized lip movements, no audio.", isTell: true, tellId: 'static-flicker', isFalse: false, skillRequired: null },
      { text: "I can't find a scar anywhere on them. Not one mark. As if they've never fallen.", isTell: true, tellId: 'symmetry-break', isFalse: false, skillRequired: 'scar_reading' },
    ],
    1: [
      { text: "Their devotion to the congregation seems total. But they watch everyone else too carefully.", isTell: true, tellId: 'blink-delay', isFalse: false, skillRequired: null },
      { text: "They finish others' sentences. Perfectly. Without hesitation or error.", isTell: true, tellId: 'micro-repeat', isFalse: false, skillRequired: null },
      { text: "Worn rosary beads in their hand. Wooden, polished from years of use.", isTell: false, tellId: null, isFalse: true, skillRequired: null },
      { text: "Their voice doesn't echo in the cathedral quite right. A phase mismatch.", isTell: true, tellId: 'static-flicker', isFalse: false, skillRequired: null },
      { text: "No heat signature. In a cathedral this cold, every human here is glowing with warmth. They are not.", isTell: true, tellId: 'thermal-glow', isFalse: false, skillRequired: 'thermal_reading' },
    ],
    2: [
      { text: "He's pretending to know the liturgy but his lips are slightly behind the others. Mimicking.", isTell: false, tellId: null, isFalse: false, skillRequired: null },
      { text: "His hands shake when they hold the chalice. Real shaking — fear, not calibration drift.", isTell: false, tellId: null, isFalse: false, skillRequired: null },
      { text: "He smells of sweat and something chemical — trying to mask it. Human adaptation.", isTell: false, tellId: null, isFalse: false, skillRequired: null },
      { text: "There's a strange regularity to how often he coughs. Perhaps a signal? Perhaps not.", isTell: false, tellId: null, isFalse: true, skillRequired: null },
      { text: "Old burns on his hands, healed badly. Not surgical. Survival burns.", isTell: false, tellId: null, isFalse: false, skillRequired: 'scar_reading' },
    ],
    3: [
      { text: "When I move to the left, their eyes track me too smoothly. Not a saccade — a pan.", isTell: true, tellId: 'blink-delay', isFalse: false, skillRequired: null },
      { text: "Their shadow against the stained glass is one degree off from mine in the same light.", isTell: true, tellId: 'shadow-wrong', isFalse: false, skillRequired: null },
      { text: "There is grief on their face. Genuine, it seems. The kind you can't fake.", isTell: false, tellId: null, isFalse: true, skillRequired: null },
      { text: "Their pulse is visible at the throat. But the rhythm is too consistent. No heart rate variability.", isTell: true, tellId: 'micro-repeat', isFalse: false, skillRequired: null },
      { text: "A faint seam at the base of their neck. Hairline, covered by their collar.", isTell: true, tellId: 'symmetry-break', isFalse: false, skillRequired: 'ghost_sight' },
    ],
  },
  4: {
    0: [
      { text: "They sit too still in the noise of the tunnel. Others flinch at sounds. They do not.", isTell: true, tellId: 'blink-delay', isFalse: false, skillRequired: null },
      { text: "Their breathing is audible but nothing about it responds to the cold, to exertion, to stress.", isTell: true, tellId: 'micro-repeat', isFalse: false, skillRequired: null },
      { text: "Calluses on their palms. The labor kind, built over years of outdoor work.", isTell: false, tellId: null, isFalse: true, skillRequired: null },
      { text: "I'm almost certain I've seen them here before. Exact same position. Days ago.", isTell: true, tellId: 'micro-repeat', isFalse: false, skillRequired: null },
      { text: "There's no warmth coming from them at all. In a tunnel this crowded, everyone else is radiating heat.", isTell: true, tellId: 'thermal-glow', isFalse: false, skillRequired: 'thermal_reading' },
    ],
    1: [
      { text: "She smells of machine oil and fear-sweat. That specific combination. Human desperation.", isTell: false, tellId: null, isFalse: false, skillRequired: null },
      { text: "She keeps reaching for something in her coat pocket. A nervous tic she's aware of and trying to suppress.", isTell: false, tellId: null, isFalse: false, skillRequired: null },
      { text: "There are dark circles under her eyes. Deep, weeks-long sleep deprivation.", isTell: false, tellId: null, isFalse: false, skillRequired: null },
      { text: "She blinked six times in the last ten seconds. Faster than normal. Anxiety.", isTell: false, tellId: null, isFalse: true, skillRequired: null },
      { text: "Her hands have the micro-tremor of caffeine abuse. Sustained, human, earned.", isTell: false, tellId: null, isFalse: false, skillRequired: 'scar_reading' },
    ],
    2: [
      { text: "They express doubt. But it arrives at exactly the right moment. Calculated timing.", isTell: true, tellId: 'static-flicker', isFalse: false, skillRequired: null },
      { text: "Their emotional vocabulary is too precise. Real grief has holes in it. Theirs doesn't.", isTell: true, tellId: 'symmetry-break', isFalse: false, skillRequired: null },
      { text: "Ash on their jacket. They've been near fire. Survivors seek fire.", isTell: false, tellId: null, isFalse: true, skillRequired: null },
      { text: "They simulate hesitation before answering. But the pause length is constant across questions.", isTell: true, tellId: 'blink-delay', isFalse: false, skillRequired: null },
      { text: "Under the fluorescent tube, the geometry of their face reads slightly too symmetrical.", isTell: true, tellId: 'shadow-wrong', isFalse: false, skillRequired: 'ghost_sight' },
    ],
    3: [
      { text: "When I lie to them, they don't react. Humans react to lies even when they don't catch them. Something shifts.", isTell: true, tellId: 'blink-delay', isFalse: false, skillRequired: null },
      { text: "They described a memory with perfect spatial detail. Humans misremember geography. They did not.", isTell: true, tellId: 'micro-repeat', isFalse: false, skillRequired: null },
      { text: "There are tears forming. Not yet falling. Something is clearly hurting them.", isTell: false, tellId: null, isFalse: true, skillRequired: null },
      { text: "Their voice modulates in a way that almost passes. Almost. There's a millisecond artifact on sibilants.", isTell: true, tellId: 'static-flicker', isFalse: false, skillRequired: 'linguistic_forensics' },
      { text: "They contradicted themselves. But the contradiction was deliberate. A taught behavior.", isTell: true, tellId: 'symmetry-break', isFalse: false, skillRequired: null },
    ],
  },
  5: {
    0: [
      { text: "They seem afraid. But the fear has no specific object — it's ambient, performed.", isTell: true, tellId: 'static-flicker', isFalse: false, skillRequired: null },
      { text: "They remember things I didn't ask about. Pre-empting my questions. Anticipation too perfect.", isTell: true, tellId: 'blink-delay', isFalse: false, skillRequired: null },
      { text: "They're trembling. The trembling could be cold. Could be fear. Could be withdrawal.", isTell: false, tellId: null, isFalse: true, skillRequired: null },
      { text: "Their accent shifts slightly mid-sentence. A bleed from another language model.", isTell: true, tellId: 'micro-repeat', isFalse: false, skillRequired: 'linguistic_forensics' },
      { text: "No warmth, no vapor, no breath in the cold tower air. They are not alive.", isTell: true, tellId: 'thermal-glow', isFalse: false, skillRequired: 'thermal_reading' },
    ],
    1: [
      { text: "They cry. Genuinely, uncontrollably. But so have some of the synthetics I've encountered.", isTell: false, tellId: null, isFalse: false, skillRequired: null },
      { text: "Their hands show wear. But sophisticated units have learned to simulate this.", isTell: false, tellId: null, isFalse: false, skillRequired: null },
      { text: "Something in their speech pattern doesn't parse. But that could be trauma. Or it could be code.", isTell: false, tellId: null, isFalse: false, skillRequired: null },
      { text: "They flinch from loud sounds. But that could be programmed in now.", isTell: false, tellId: null, isFalse: true, skillRequired: null },
      { text: "I cannot tell. I cannot tell.", isTell: false, tellId: null, isFalse: false, skillRequired: null },
    ],
    2: [
      { text: "They speak of hope. But the word sits differently in their mouth — too clean, not worn.", isTell: true, tellId: 'static-flicker', isFalse: false, skillRequired: null },
      { text: "They said they lost someone. But there is no grief-weight in how they hold the memory.", isTell: true, tellId: 'symmetry-break', isFalse: false, skillRequired: null },
      { text: "They haven't slept. The evidence is visible. No one can fake sleep deprivation.", isTell: false, tellId: null, isFalse: true, skillRequired: null },
      { text: "They pause before answering emotional questions. Late-model. Trained to simulate.", isTell: true, tellId: 'blink-delay', isFalse: false, skillRequired: null },
      { text: "There is a small scar beneath their ear that on closer look is a seam, not healed skin.", isTell: true, tellId: 'shadow-wrong', isFalse: false, skillRequired: 'ghost_sight' },
    ],
    3: [
      { text: "They're broadcasting. The signal is them. They are the transmission.", isTell: false, tellId: null, isFalse: false, skillRequired: null },
      { text: "They smell of sweat and hope. That specific combination. I know it. I've missed it.", isTell: false, tellId: null, isFalse: false, skillRequired: null },
      { text: "Their hands shake holding the transmitter key. The weight of what they've built.", isTell: false, tellId: null, isFalse: false, skillRequired: null },
      { text: "Their eyes — I'm looking for the tells. I don't find them. I don't find any of them.", isTell: false, tellId: null, isFalse: false, skillRequired: null },
      { text: "They are warm. The warmth I've been searching for.", isTell: false, tellId: null, isFalse: false, skillRequired: 'empathy_engine' },
    ],
  },
};

// Late-game synthetic dialogue (Zones 4–5) — nearly indistinguishable from human
export const DIALOGUE_RESPONSES_LATE = {
  memory: {
    synthetic: [
      "A long pause. \"Before?\" They shake their head. \"I try not to think about before. It's easier that way. It wasn't easier that way. I don't know why I said that.\"",
      "\"The last good thing.\" They look at their hands. \"I had a dog. Named her after a city I'll never see again. She ran away during the collapse and I told myself she found somewhere safe. I know she didn't.\"",
      "They don't answer immediately. \"I remember the smell of rain. I hold onto that. When it rains here I stand outside longer than I should. I don't know if it helps.\"",
      "\"Before?\" Something shifts in their expression — not a glitch, something heavier. \"Before was a long time ago. Before feels like it happened to someone else.\"",
    ],
  },
  pain: {
    synthetic: [
      "\"I cried this morning.\" They say it like they're not sure if it's allowed. \"I cried and I didn't stop for a long time and when I was done I felt worse, not better. That surprised me.\"",
      "A silence that reads as composure — but might be something else. \"When I lost my sister. She wasn't— she was one of the first. I couldn't— I still can't.\" They don't finish.",
      "\"I don't know when I last felt safe enough to cry. Here. Now, maybe.\" A beat. \"Sorry. That was too much.\"",
      "\"Pain?\" They almost laugh. \"I carry it differently now. Like a stone in my chest. Some days it's smaller. Today it isn't.\"",
    ],
  },
  chaos: {
    synthetic: [
      "\"What doesn't make sense?\" They think about it. Genuinely. \"That I'm still moving forward. After everything. I don't know why I keep going. But I do.\"",
      "\"The kindness. That's what doesn't make sense.\" Their voice is quiet. \"I've seen people share food they don't have. I can't explain that.\"",
      "\"That I still hope. I know how that sounds. But I do. It's irrational. I know it's irrational. I hope anyway.\"",
      "\"What confuses me is how much I miss music. Not the idea of it. Specific songs. A specific voice. I didn't expect to miss something so—\" they stop. \"—small.\"",
    ],
  },
  body: {
    synthetic: [
      "They extend their hands. There are marks on them that read as wear — accumulated, layered. \"These have carried things. People. Weight.\"",
      "\"My hands?\" They turn them over slowly. \"I burned them, early on. Bad. They healed wrong. I look at the scars sometimes and think: I was real enough to burn.\"",
      "They roll up their sleeve partway — stops. A hesitation. Then: \"There's a scar here I don't talk about. You can see it if you need to. I don't want to, but I will.\"",
      "\"Look at me.\" And there is something in their eyes — not perfect, not composed. A tiredness that might be real. \"That's all I have left to show you.\"",
    ],
  },
  paradox: {
    synthetic: [
      "\"If I'm not real?\" They hold the question. \"Then none of this was. And I can't accept that. I won't accept that.\"",
      "A long silence. \"I've asked myself that question. In the dark. Alone. I never find an answer I trust.\"",
      "\"Are you sure you're real?\" They look at you steadily. \"I'm not sure of anything anymore. That might be the most honest thing I can say.\"",
      "\"Who decides what's real.\" It's not quite a question. \"I used to know. Now I think whoever survives gets to decide. I plan to survive.\"",
    ],
  },
  last_question: {
    synthetic: [
      "A pause. Longer than usual. \"I do not have a daughter. I do not have children. I do not have—\" The voice glitches. \"[RESPONSE: NULL. FALLBACK: I am here to help.]\"",
      "\"That question references personal experience I do not possess. Would you like me to generate a plausible narrative?\"",
      "Static. A flicker. \"I— my— [SYSTEM OVERRIDE] I am functioning normally. Please continue.\"",
      "\"I have no answer to that question. It does not compute. It does not— [ERROR]\"",
    ],
  },
};
