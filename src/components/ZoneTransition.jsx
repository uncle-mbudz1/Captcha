import { ZONES } from '../game/constants';

const TRANSITION_TEXT = {
  1: "The outskirts fade behind you. The market awaits.",
  2: "You leave the market's uncanny bustle. The cathedral rises in the distance.",
  3: "Deeper now. The underground calls.",
  4: "You climb. The signal tower stands at the world's edge.",
};

export default function ZoneTransition({ fromZone, onContinue }) {
  const text = TRANSITION_TEXT[fromZone] || "You move on.";
  const nextZone = ZONES.find(z => z.id === fromZone + 1);

  return (
    <div className="zone-transition">
      <div className="zone-transition-bg" />
      <div className="zone-transition-content">
        <h2 className="zone-transition-title">{nextZone?.name}</h2>
        <p className="zone-transition-text">{text}</p>
        <button className="zone-transition-btn" onClick={onContinue}>
          CONTINUE
        </button>
      </div>
    </div>
  );
}
