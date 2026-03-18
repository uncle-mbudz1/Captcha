export default function HUD({ state, onSkills, onLogs, onMap, onHelp }) {
  const zone = state.currentZone;
  const zoneName = zone === 1 ? 'The Outskirts' :
    zone === 2 ? 'The Market' : zone === 3 ? 'The Cathedral' :
    zone === 4 ? 'The Underground' : 'The Signal Tower';

  return (
    <header className="hud">
      <div className="hud-left">
        <span className="hud-zone">{zoneName}</span>
        <span className="hud-day">Day {state.dayCount}</span>
      </div>
      <div className="hud-center">
        <span className="hud-name">{state.playerName}</span>
        <span className="hud-health">
          {'♥'.repeat(state.health)}{'♡'.repeat(state.maxHealth - state.health)}
        </span>
        <span className="hud-xp">XP: {state.xp}</span>
      </div>
      <div className="hud-right">
        <button className="hud-btn" onClick={onSkills}>SKILLS</button>
        <button className="hud-btn" onClick={onLogs}>LOGS</button>
        <button className="hud-btn" onClick={onMap}>MAP</button>
        <button className="hud-btn hud-help" onClick={onHelp} title="How to play">?</button>
      </div>
    </header>
  );
}
