import { useState, useEffect, useCallback, useRef } from 'react';
import { loadState, saveState, resetState } from './game/state';
import { getEncounterIdentity, getAvailableCategories } from './game/encounterLogic';
import { ENCOUNTER_IDENTITIES, ZONES, XP_CORRECT_VERDICT, XP_WRONG_VERDICT, XP_TELL_FOUND, SKILLS, ITEM_SKILL_UNLOCKS } from './game/constants';
import { OBSERVATION_NARRATIONS } from './game/encounters';

const ZONE_FRAGMENTS = {
  1: { id: 'lore_1', title: 'Newspaper Fragment — The Proliferation', text: "Week 3 of the Synthetic Integration Protocol. Officials say the behavioral models are indistinguishable. Critics say that's the problem." },
  2: { id: 'lore_2', title: 'Handwritten Note — Found at the Market', text: "If you're reading this you're real. The ones that aren't won't understand why this matters. Meet at the eastern channel at dusk. Tell no one who doesn't bleed." },
  3: { id: 'lore_3', title: 'Broken Phone Screen — Last Message', text: "They took Dad. Or something wearing him. It knew his voice, his laugh, the names of our dogs. It didn't know why we named them that. That's how I knew." },
  4: { id: 'lore_4', title: 'Audio Log Transcript — Underground Station', text: "Recording 41. I've been mapping behavioral drift. Advanced units are now simulating inconsistency. They pause before answering. They contradict themselves deliberately. The tells are inverting." },
  5: { id: 'lore_5', title: 'Signal Tower Transmission Log', text: "If you can hear this, the frequency chip is working. We are at coordinates encoded in the carrier wave. We are human. We are waiting. We are not giving up." },
};
import { playUIClick, playVerdictCorrect, playVerdictWrong, playHumanDiscovered, startAmbientDrone, stopAmbientDrone } from './game/audio';
import './App.css';
import TitleScreen from './components/TitleScreen';
import HUD from './components/HUD';
import ScenePanel from './components/ScenePanel';
import ObservationPhase from './components/ObservationPhase';
import InterrogationPhase from './components/InterrogationPhase';
import VerdictPhase from './components/VerdictPhase';
import ConsequencePhase from './components/ConsequencePhase';
import SkillTree from './components/SkillTree';
import ZoneTransition from './components/ZoneTransition';
import MapModal from './components/MapModal';
import LogsModal from './components/LogsModal';
import InstructionManual from './components/InstructionManual';
import SkillNotice from './components/SkillNotice';

export default function App() {
  const [state, setState] = useState(loadState);
  const [showSkillTree, setShowSkillTree] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [showLogs, setShowLogs] = useState(false);
  const [showManual, setShowManual] = useState(false);
  const [skillNotices, setSkillNotices] = useState([]);
  const notifiedSkillsRef = useRef(new Set());
  const [showZoneTransition, setShowZoneTransition] = useState(false);
  const [transitionFromZone, setTransitionFromZone] = useState(0);
  const [currentObservations, setCurrentObservations] = useState([]);
  const [selectedObservation, setSelectedObservation] = useState(null);
  const [narrationDisplay, setNarrationDisplay] = useState('');
  const [lastQuestionUsed, setLastQuestionUsed] = useState(false);

  useEffect(() => {
    saveState(state);
  }, [state]);

  useEffect(() => {
    if (state.gamePhase === 'encounter' || state.gamePhase === 'playing') {
      if (state.health <= 0) {
        stopAmbientDrone();
        setState((s) => ({ ...s, gamePhase: 'gameover' }));
      }
    }
  }, [state.health, state.gamePhase]);

  useEffect(() => {
    document.body.classList.remove('paranoia-low', 'paranoia-mid', 'paranoia-high');
    if (state.paranoia >= 70) document.body.classList.add('paranoia-high');
    else if (state.paranoia >= 30) document.body.classList.add('paranoia-mid');
    else document.body.classList.add('paranoia-low');
  }, [state.paranoia]);

  useEffect(() => {
    const newNotices = [];
    const itemUnlockedSkills = new Set(Object.values(ITEM_SKILL_UNLOCKS));
    Object.entries(SKILLS).forEach(([id, skill]) => {
      if (state.skills.includes(id)) return;
      if (itemUnlockedSkills.has(id)) return;
      if (state.xp < skill.xpCost) return;
      if (notifiedSkillsRef.current.has(id)) return;
      notifiedSkillsRef.current.add(id);
      newNotices.push({ id, skillLabel: skill.label });
    });
    if (newNotices.length > 0) {
      setSkillNotices((prev) => [...prev, ...newNotices]);
      newNotices.forEach((n) => {
        setTimeout(() => {
          setSkillNotices((prev) => prev.filter((x) => x.id !== n.id));
        }, 4000);
      });
    }
  }, [state.xp, state.skills]);

  const startGame = useCallback(() => {
    setState((s) => ({
      ...s,
      gamePhase: 'playing',
      currentZone: s.currentZone || 1,
      currentEncounter: s.currentEncounter ?? 0,
    }));
    startAmbientDrone(0);
  }, []);

  const startEncounter = useCallback(() => {
    const zone = state.currentZone;
    const enc = state.currentEncounter;
    const identity = getEncounterIdentity(zone, enc);

    // Final human at Signal Tower - narrative event, no verdict
    if (zone === 5 && enc === 3 && identity === 'human') {
      setState((s) => ({
        ...s,
        gamePhase: 'encounter',
        encounterPhase: 'consequence',
        lastVerdict: 'human',
        humanCount: s.humanCount + 1,
        items: [...s.items, 'transmitter_key'],
      }));
      playHumanDiscovered();
      return;
    }

    const obs = OBSERVATION_NARRATIONS?.[zone]?.[enc] || [];
    setCurrentObservations(obs);
    setSelectedObservation(null);
    setNarrationDisplay('');
    setLastQuestionUsed(false);
    setState((s) => ({
      ...s,
      gamePhase: 'encounter',
      encounterPhase: 'observation',
      suspicionScore: 0,
      questionsAsked: [],
      hasVerdicted: false,
    }));
    startAmbientDrone(0);
  }, [state.currentZone, state.currentEncounter]);

  const advanceEncounter = useCallback(() => {
    const enc = state.currentEncounter + 1;
    const zone = state.currentZone;
    const identities = ENCOUNTER_IDENTITIES[zone] || [];
    if (enc >= identities.length) {
      if (zone >= 5) {
        stopAmbientDrone();
        setState((s) => ({ ...s, gamePhase: 'ending' }));
        return;
      }
      stopAmbientDrone();
      setState((s) => {
        const frag = ZONE_FRAGMENTS[s.currentZone];
        const newState = frag && !s.logsFound.find((l) => l.id === frag.id)
          ? { ...s, logsFound: [...s.logsFound, frag] }
          : s;
        return {
          ...newState,
          currentZone: zone + 1,
          currentEncounter: 0,
          dayCount: newState.dayCount + 1,
          gamePhase: 'transition',
        };
      });
      setTransitionFromZone(zone);
      setShowZoneTransition(true);
    } else {
      setState((s) => {
        const frag = ZONE_FRAGMENTS[s.currentZone];
        const newState = frag && !s.logsFound.find((l) => l.id === frag.id)
          ? { ...s, logsFound: [...s.logsFound, frag] }
          : s;
        return { ...newState, currentEncounter: enc, gamePhase: 'playing' };
      });
    }
  }, [state.currentZone, state.currentEncounter, state.logsFound]);

  const onObservationChosen = useCallback((observation) => {
    setSelectedObservation(observation);
    setNarrationDisplay(observation.text);

    if (observation.isFalse) {
      playVerdictWrong();
      setState((s) => ({
        ...s,
        health: Math.max(0, s.health - 1),
        paranoia: Math.min(100, s.paranoia + 10),
        encounterPhase: 'interrogation',
      }));
      return;
    }

    if (observation.isTell) {
      playUIClick();
      setState((s) => ({
        ...s,
        suspicionScore: s.suspicionScore + 1,
        xp: s.xp + XP_TELL_FOUND,
        encounterPhase: 'interrogation',
      }));
      return;
    }

    setState((s) => ({ ...s, encounterPhase: 'interrogation' }));
  }, []);

  const onVerdict = useCallback((verdict) => {
    const identity = getEncounterIdentity(state.currentZone, state.currentEncounter);
    const isHuman = identity === 'human';
    const isAmbiguous = identity === 'ambiguous';

    let newState = { ...state };
    newState.hasVerdicted = true;
    newState.lastVerdict = verdict;

    if (verdict === 'release') {
      setState(newState);
      setState((s) => ({ ...s, encounterPhase: 'consequence' }));
      return;
    }

    const correct = (verdict === 'synthetic' && !isHuman && !isAmbiguous) ||
      (verdict === 'human' && isHuman);

    if (correct) {
      playVerdictCorrect();
      newState.xp += XP_CORRECT_VERDICT;
      newState.verdictHistory = [...newState.verdictHistory, { verdict, correct: true }];
      if (isHuman) {
        playHumanDiscovered();
        newState.humanCount += 1;
        const humanItems = { 1: 'compass', 2: 'frequency_chip', 3: 'map_fragment', 4: 'notebook', 5: 'transmitter_key' };
        const newItem = humanItems[newState.humanCount];
        if (newItem) {
          newState.items = [...newState.items, newItem];
          const skillUnlock = ITEM_SKILL_UNLOCKS[newItem];
          if (skillUnlock && !newState.skills.includes(skillUnlock)) {
            newState.skills = [...newState.skills, skillUnlock];
          }
        }
      }
    } else {
      playVerdictWrong();
      newState.xp = Math.max(0, newState.xp + XP_WRONG_VERDICT);
      newState.paranoia = Math.min(100, newState.paranoia + 25);
      newState.verdictHistory = [...newState.verdictHistory, { verdict, correct: false }];
      if (verdict === 'human' && !isHuman) {
        newState.health = Math.max(0, newState.health - 1);
      }
      if (verdict === 'synthetic' && isHuman) {
        newState.health = Math.max(0, newState.health - 1);
      }
    }

    newState.items?.forEach((item) => {
      const skillToUnlock = ITEM_SKILL_UNLOCKS[item];
      if (skillToUnlock && !newState.skills.includes(skillToUnlock)) {
        newState.skills = [...newState.skills, skillToUnlock];
      }
    });

    setState(newState);
    setState((s) => ({ ...s, encounterPhase: 'consequence' }));
  }, [state]);

  const unlockSkill = useCallback((skillId) => {
    const skill = SKILLS[skillId];
    if (!skill || state.skills.includes(skillId)) return;
    if (state.xp >= skill.xpCost) {
      setState((s) => ({
        ...s,
        xp: s.xp - skill.xpCost,
        skills: [...s.skills, skillId],
      }));
      playUIClick();
    }
  }, [state.xp, state.skills]);

  const finishZoneTransition = useCallback(() => {
    setShowZoneTransition(false);
    setState((s) => ({ ...s, gamePhase: 'playing' }));
  }, []);

  if (state.gamePhase === 'title') {
    return (
      <>
        <TitleScreen onStart={startGame} onManual={() => setShowManual(true)} />
        {showManual && <InstructionManual onClose={() => setShowManual(false)} />}
      </>
    );
  }

  if (showZoneTransition) {
    return (
      <ZoneTransition
        fromZone={transitionFromZone}
        onContinue={finishZoneTransition}
      />
    );
  }

  if (state.gamePhase === 'gameover') {
    return (
      <div className="ending-screen">
        <div className="ending-scene" style={{ background: 'radial-gradient(ellipse at 50% 80%, #3a0a0a 0%, #1a1c1e 50%, #0d0e0f 100%)' }} />
        <div className="ending-text">
          <p className="ending-subtitle">A Tale of Two Beings</p>
          <p className="ending-quote" style={{ color: 'var(--text-danger)' }}>
            &quot;Day {state.dayCount}. The search ends here.&quot;
          </p>
          <p style={{ color: 'var(--text-dim)', fontStyle: 'italic', marginBottom: '2rem', fontSize: '1rem' }}>
            You trusted the wrong ones too many times.
          </p>
          <button className="ending-restart" onClick={() => setState(resetState())}>
            TRY AGAIN
          </button>
        </div>
      </div>
    );
  }

  if (state.gamePhase === 'ending') {
    return (
      <div className="ending-screen">
        <div className="ending-scene" />
        <div className="ending-text">
          <p className="ending-subtitle">A Tale of Two Beings</p>
          <p className="ending-quote">&quot;Day {state.dayCount + 1}. Someone answered.&quot;</p>
          <button className="ending-restart" onClick={() => setState(resetState())}>
            PLAY AGAIN
          </button>
        </div>
      </div>
    );
  }

  const inEncounter = state.gamePhase === 'encounter';
  const identity = getEncounterIdentity(state.currentZone, state.currentEncounter);

  return (
    <div className="app">
      <HUD
        state={state}
        onSkills={() => setShowSkillTree(true)}
        onLogs={() => setShowLogs(true)}
        onMap={() => setShowMap(true)}
        onHelp={() => setShowManual(true)}
      />
      <main className="game-main">
        {state.gamePhase === 'playing' && (
          <div className="zone-view">
            <div className="zone-info">
              <h2>{ZONES.find(z => z.id === state.currentZone)?.name}</h2>
              <p>{ZONES.find(z => z.id === state.currentZone)?.atmosphere}</p>
              <button className="zone-encounter-btn" onClick={startEncounter}>
                APPROACH FIGURE
              </button>
            </div>
          </div>
        )}

        {inEncounter && (
          <>
            <ScenePanel
              zoneId={state.currentZone}
              narrationText={narrationDisplay}
              narrationVisible={state.encounterPhase === 'interrogation' && !!narrationDisplay}
            />
            {state.encounterPhase === 'observation' && (
              <ObservationPhase
                observations={currentObservations}
                onObservationChosen={onObservationChosen}
                skills={state.skills}
              />
            )}
            {state.encounterPhase === 'interrogation' && (
              <InterrogationPhase
                identity={identity}
                skills={state.skills}
                questionsAsked={state.questionsAsked}
                zoneId={state.currentZone}
                onQuestionAsked={(data) => {
                  if (data?.usedLastQuestion) setLastQuestionUsed(true);
                  if (data?.category) {
                    setState((s) => ({
                      ...s,
                      questionsAsked: [...s.questionsAsked, { category: data.category, question: data.question }],
                    }));
                  }
                }}
                lastQuestionUsed={lastQuestionUsed}
              />
            )}
            {state.encounterPhase === 'verdict' && (
              <VerdictPhase
                onVerdict={onVerdict}
                suspicionScore={state.suspicionScore}
                gutFeeling={(() => {
                  if (!state.skills.includes('field_instinct')) return null;
                  const r = Math.random();
                  if (r < 0.4) return 'Human.';
                  if (r < 0.8) return 'Synthetic.';
                  return 'Uncertain.';
                })()}
                hasFieldInstinct={state.skills.includes('field_instinct')}
              />
            )}
            {state.encounterPhase === 'consequence' && (
              <ConsequencePhase
                verdict={state.lastVerdict}
                actualIdentity={identity}
                zoneId={state.currentZone}
                encounterIndex={state.currentEncounter}
                onContinue={advanceEncounter}
                humanCount={state.humanCount}
                isFinalHuman={state.currentZone === 5 && state.currentEncounter === 3 && identity === 'human'}
              />
            )}
            {state.encounterPhase === 'interrogation' && (
              <button
                className="phase-advance"
                onClick={() => setState((s) => ({ ...s, encounterPhase: 'verdict' }))}
              >
                MAKE VERDICT
              </button>
            )}
          </>
        )}
      </main>

      {showLogs && (
        <LogsModal
          logsFound={state.logsFound}
          onClose={() => setShowLogs(false)}
        />
      )}
      {showMap && (
        <MapModal
          currentZone={state.currentZone}
          items={state.items}
          onClose={() => setShowMap(false)}
        />
      )}
      {showManual && <InstructionManual onClose={() => setShowManual(false)} />}
      <SkillNotice notices={skillNotices} />
      {showSkillTree && (
        <SkillTree
          skills={state.skills}
          xp={state.xp}
          currentZone={state.currentZone}
          items={state.items}
          onUnlock={unlockSkill}
          onClose={() => setShowSkillTree(false)}
        />
      )}
    </div>
  );
}
