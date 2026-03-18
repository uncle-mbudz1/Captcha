import { useState, useEffect } from 'react';

export default function ObservationPhase({
  observations,
  onObservationChosen,
  skills,
}) {
  const [revealedCount, setRevealedCount] = useState(0);
  const [choiceMode, setChoiceMode] = useState(false);

  const visibleObs = observations.filter(
    (obs) => !obs.skillRequired || skills.includes(obs.skillRequired)
  );

  useEffect(() => {
    if (revealedCount >= visibleObs.length) {
      const t = setTimeout(() => setChoiceMode(true), 800);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setRevealedCount((c) => c + 1), 1400);
    return () => clearTimeout(t);
  }, [revealedCount, visibleObs.length]);

  const revealed = visibleObs.slice(0, revealedCount);

  return (
    <div className="observation-phase-text">
      {!choiceMode ? (
        <div className="obs-monologue">
          <p className="obs-header">Vale observes.</p>
          {revealed.map((obs, i) => (
            <p key={i} className="obs-line obs-reveal">
              {obs.text}
            </p>
          ))}
          {revealedCount < visibleObs.length && (
            <span className="obs-cursor">...</span>
          )}
        </div>
      ) : (
        <div className="obs-choice">
          <p className="obs-header">What stays with you?</p>
          <p className="obs-subheader">Choose one observation to act on.</p>
          <div className="obs-options">
            {visibleObs.map((obs, i) => (
              <button
                key={i}
                className={`obs-option-btn ${obs.isFalse ? 'obs-option-false' : ''}`}
                onClick={() => onObservationChosen(obs)}
              >
                {obs.text}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
