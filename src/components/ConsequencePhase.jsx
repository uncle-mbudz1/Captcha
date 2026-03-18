import { HUMAN_ENCOUNTERS } from '../game/encounters';

export default function ConsequencePhase({
  verdict,
  actualIdentity,
  zoneId,
  encounterIndex,
  onContinue,
  humanCount,
  isFinalHuman,
}) {
  const isHuman = actualIdentity === 'human' || isFinalHuman;
  const isAmbiguous = actualIdentity === 'ambiguous';
  const correct = (verdict === 'synthetic' && !isHuman && !isAmbiguous) ||
    (verdict === 'human' && isHuman) ||
    (verdict === 'release');

  let message = '';
  let tone = 'neutral';

  if (isFinalHuman) {
    const humanData = HUMAN_ENCOUNTERS[5];
    message = humanData?.narrative || "They're broadcasting. You find them at the signal tower. They hand you the transmitter key. There are others. Then the signal cuts out. You're alone again. But you know.";
    tone = 'human';
  } else if (verdict === 'release') {
    message = "You let them go. No verdict. No risk. The paranoia stays. You move on.";
    tone = 'dim';
  } else if (isAmbiguous) {
    message = "You'll never know. Some questions don't have answers. You made a choice. You live with it.";
    tone = 'ambiguous';
  } else if (correct) {
    if (isHuman) {
      const humanData = HUMAN_ENCOUNTERS[humanCount];
      message = humanData?.narrative || "They were human. You found one. They're gone now.";
      tone = 'human';
    } else {
      message = "Correct. A Synthetic. Subdued. You move on.";
      tone = 'correct';
    }
  } else {
    if (verdict === 'synthetic' && isHuman) {
      message = "You were wrong. They were human. You subdued them. The weight of that stays with you.";
      tone = 'wrong';
    } else {
      message = "You were wrong. It was a Synthetic. It struck before you could react. You escaped—barely.";
      tone = 'wrong';
    }
  }

  return (
    <div className={`consequence-phase consequence-${tone}`}>
      <div className="consequence-text">
        <p>{message}</p>
      </div>
      <button className="consequence-continue" onClick={onContinue}>
        CONTINUE
      </button>
    </div>
  );
}
