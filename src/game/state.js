const STORAGE_KEY = 'captcha_game_state';

const DEFAULT_STATE = {
  playerName: 'Vale',
  currentZone: 1,
  currentEncounter: 0,
  health: 3,
  maxHealth: 3,
  xp: 0,
  skills: ['pattern_recognition', 'basic_interrogation', 'field_instinct'],
  humanCount: 0,
  items: [],
  verdictHistory: [],
  logsFound: [],
  dayCount: 847,
  paranoia: 0,
  gamePhase: 'title', // title, playing, encounter, observation, interrogation, verdict, consequence, ending
  encounterPhase: 'scene', // scene, observation, interrogation, verdict, consequence
  observationTimeLeft: 30,
  suspicionScore: 0,
  questionsAsked: [],
  hasVerdicted: false,
  lastVerdict: null,
  fragmentsFound: [],
};

export function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      const state = { ...DEFAULT_STATE, ...parsed };
      if (state.gamePhase === 'transition') state.gamePhase = 'playing';
      return state;
    }
  } catch (e) {
    console.warn('Failed to load save:', e);
  }
  return { ...DEFAULT_STATE };
}

export function saveState(state) {
  try {
    const stablePhases = ['playing', 'transition', 'ending'];
    if (!stablePhases.includes(state.gamePhase)) return;
    const toSave = { ...state };
    delete toSave.encounterPhase;
    delete toSave.observationTimeLeft;
    delete toSave.suspicionScore;
    delete toSave.questionsAsked;
    delete toSave.hasVerdicted;
    delete toSave.lastVerdict;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
  } catch (e) {
    console.warn('Failed to save:', e);
  }
}

export function resetState() {
  localStorage.removeItem(STORAGE_KEY);
  return { ...DEFAULT_STATE };
}

export { DEFAULT_STATE };
