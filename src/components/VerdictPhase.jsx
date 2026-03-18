export default function VerdictPhase({ onVerdict, suspicionScore, gutFeeling, hasFieldInstinct }) {
  return (
    <div className="verdict-phase">
      <p className="verdict-prompt">What is your verdict?</p>
      {hasFieldInstinct && gutFeeling && (
        <p className="verdict-gut">
          <em>Your instinct whispers: {gutFeeling}</em>
        </p>
      )}
      <div className="verdict-options">
        <button
          className="verdict-btn verdict-synthetic"
          onClick={() => onVerdict('synthetic')}
        >
          MARK SYNTHETIC
        </button>
        <button
          className="verdict-btn verdict-human"
          onClick={() => onVerdict('human')}
        >
          TRUST AS HUMAN
        </button>
        <button
          className="verdict-btn verdict-release"
          onClick={() => onVerdict('release')}
        >
          RELEASE WITHOUT VERDICT
        </button>
      </div>
      <p className="verdict-suspicion">Suspicion score: {suspicionScore}</p>
    </div>
  );
}
