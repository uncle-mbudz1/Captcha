// Zone definitions: 5 zones, 4 encounters each (3 regular + 1 boss)
export const ZONES = [
  { id: 1, name: 'The Outskirts', atmosphere: 'Quiet dread, fog' },
  { id: 2, name: 'The Market', atmosphere: 'Uncanny normalcy' },
  { id: 3, name: 'The Cathedral', atmosphere: 'False safety, cult vibes' },
  { id: 4, name: 'The Underground', atmosphere: 'Paranoia, no escape' },
  { id: 5, name: 'The Signal Tower', atmosphere: 'Final confrontation with hope' },
];

// Encounter identity: 14 synthetics, 5 humans, 1 ambiguous
// Zone 1: 3 synth, 1 human (old woman)
// Zone 2: 3 synth, 1 human (teenage boy)
// Zone 3: 3 synth, 1 human (man pretending synth)
// Zone 4: 3 synth, 1 human (woman with detection kit)
// Zone 5: 2 synth, 1 ambiguous, 1 final human (signal tower)
export const ENCOUNTER_IDENTITIES = {
  1: ['synthetic', 'synthetic', 'synthetic', 'human'],      // Zone 1
  2: ['synthetic', 'human', 'synthetic', 'synthetic'],      // Zone 2
  3: ['synthetic', 'synthetic', 'human', 'synthetic'],      // Zone 3
  4: ['synthetic', 'human', 'synthetic', 'synthetic'],       // Zone 4
  5: ['synthetic', 'ambiguous', 'synthetic', 'human'],      // Zone 5 - final human is encounter 4
};

// Visual tells - which tells appear on synthetics vs humans (red herrings)
export const TELL_TYPES = [
  'blink-delay',
  'symmetry-break',
  'thermal-glow',
  'shadow-wrong',
  'micro-repeat',
  'static-flicker',
];

// Question categories and which skills unlock them
export const QUESTION_CATEGORIES = {
  memory: { skill: 'basic_interrogation', label: 'Memory' },
  pain: { skill: 'basic_interrogation', label: 'Pain' },
  chaos: { skill: 'behavioral_analysis', label: 'Chaos' },
  body: { skill: 'basic_interrogation', label: 'Body' },
  paradox: { skill: 'paradox_protocol', label: 'Paradox' },
};

// Skill tree definition
export const SKILLS = {
  pattern_recognition: { tier: 1, xpCost: 0, label: 'Pattern Recognition', desc: 'Highlights 1 visual tell automatically' },
  basic_interrogation: { tier: 1, xpCost: 0, label: 'Basic Interrogation', desc: 'Unlocks Memory + Pain question categories' },
  field_instinct: { tier: 1, xpCost: 0, label: 'Field Instinct', desc: 'Shows a subtle gut feeling indicator (not always right)' },
  thermal_reading: { tier: 2, xpCost: 50, label: 'Thermal Reading', desc: 'Detects breath/heat anomalies in scenes' },
  behavioral_analysis: { tier: 2, xpCost: 50, label: 'Behavioral Analysis', desc: 'Unlocks Chaos question category' },
  scar_reading: { tier: 2, xpCost: 50, label: 'Scar Reading', desc: 'Reading physical damage for human wear patterns' },
  linguistic_forensics: { tier: 3, xpCost: 100, label: 'Linguistic Forensics', desc: 'Detects unnatural speech cadence' },
  paradox_protocol: { tier: 3, xpCost: 100, label: 'Paradox Protocol', desc: 'Unlocks Paradox question category' },
  memory_extraction: { tier: 3, xpCost: 100, label: 'Memory Extraction', desc: 'Forces a second, deeper response' },
  ghost_sight: { tier: 4, xpCost: 150, label: 'Ghost Sight', desc: 'Brief overlay showing synthetic infrastructure' },
  empathy_engine: { tier: 4, xpCost: 150, label: 'Empathy Engine', desc: 'Detects genuine emotional micro-responses' },
  the_last_question: { tier: 4, xpCost: 150, label: 'The Last Question', desc: 'One devastating question per zone no Synthetic can answer' },
};

// Items received from human encounters that auto-unlock skills
export const ITEM_SKILL_UNLOCKS = {
  compass: 'thermal_reading',
  frequency_chip: 'linguistic_forensics',
  map_fragment: 'ghost_sight',
  notebook: 'empathy_engine',
};

// XP rewards/penalties
export const XP_CORRECT_VERDICT = 30;
export const XP_WRONG_VERDICT = -20;
export const XP_TELL_FOUND = 5;
