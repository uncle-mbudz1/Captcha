import { ENCOUNTER_IDENTITIES, TELL_TYPES, ZONES, QUESTION_CATEGORIES } from './constants';

// Get encounter identity for current zone/encounter
export function getEncounterIdentity(zoneId, encounterIndex) {
  const identities = ENCOUNTER_IDENTITIES[zoneId];
  return identities ? identities[encounterIndex] : 'synthetic';
}

// Deterministic figure variant per encounter — same encounter always gets same figure
export function getEncounterVariant(zoneId, encounterIndex) {
  const seed = (zoneId * 7 + encounterIndex * 3) % 8;
  return seed;
}

// Generate visual tells for this encounter based on identity and zone difficulty
// Returns { realTells, falseTells } — realTells reward on click, falseTells penalise
export function generateTells(zoneId, encounterIndex, isSynthetic) {
  const realTells = [];
  const falseTells = [];
  const difficulty = zoneId;

  const synthTellCount = difficulty <= 2 ? 2 + Math.floor(Math.random() * 2) :
                        difficulty <= 4 ? 1 + Math.floor(Math.random() * 2) :
                        1;

  const humanTellCount = difficulty <= 2 ? 0 :
                        difficulty <= 4 ? Math.random() < 0.3 ? 1 : 0 :
                        Math.random() < 0.5 ? 1 : 0;

  const tellCount = isSynthetic ? Math.max(synthTellCount, 1) : humanTellCount;
  const availableReal = [...TELL_TYPES];

  for (let i = 0; i < tellCount && availableReal.length > 0; i++) {
    const idx = Math.floor(Math.random() * availableReal.length);
    realTells.push(availableReal.splice(idx, 1)[0]);
  }

  // False tells — environmental noise, appear on both synthetic and human
  const falseCountByZone = {
    1: 0,
    2: Math.random() < 0.4 ? 1 : 0,
    3: 1,
    4: 1 + Math.floor(Math.random() * 2),
    5: 2,
  };
  const falseCount = falseCountByZone[zoneId] ?? 0;
  const availableFalse = TELL_TYPES.filter((t) => !realTells.includes(t));

  for (let i = 0; i < falseCount && availableFalse.length > 0; i++) {
    const idx = Math.floor(Math.random() * availableFalse.length);
    falseTells.push(availableFalse.splice(idx, 1)[0]);
  }

  return { realTells, falseTells };
}

// Check if player has unlocked a question category
export function canAskCategory(category, skills) {
  const data = QUESTION_CATEGORIES[category];
  return data ? skills.includes(data.skill) : false;
}

// Get available question category keys for player
export function getAvailableCategories(skills) {
  return Object.entries(QUESTION_CATEGORIES)
    .filter(([_, data]) => skills.includes(data.skill))
    .map(([key]) => key);
}
