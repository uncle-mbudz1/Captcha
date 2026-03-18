export default function ScenePanel({ zoneId, narrationText, narrationVisible }) {
  const zoneThemes = {
    1: { name: 'outskirts', gradient: 'radial-gradient(ellipse at 30% 70%, #4a5c3e 0%, #1a1c1e 50%, #0d0e0f 100%)' },
    2: { name: 'market', gradient: 'radial-gradient(ellipse at 50% 60%, #8b3a2a 0%, #242628 40%, #0d0e0f 100%)' },
    3: { name: 'cathedral', gradient: 'radial-gradient(ellipse at 70% 30%, #8fa3a8 0%, #1a1c1e 50%, #0d0e0f 100%)' },
    4: { name: 'underground', gradient: 'radial-gradient(ellipse at 20% 50%, #242628 0%, #1a1c1e 60%, #0d0e0f 100%)' },
    5: { name: 'tower', gradient: 'radial-gradient(ellipse at 50% 20%, #c8893a 0%, #1a1c1e 50%, #0d0e0f 100%)' },
  };
  const theme = zoneThemes[zoneId] || zoneThemes[1];

  return (
    <div className={`scene-panel scene-${theme.name}`}>
      <div className="scene-bg" style={{ background: theme.gradient }} />
      <div className="scene-depth" />
      <div className="scene-fog" />
      {narrationVisible && narrationText && (
        <div className="scene-narration">
          <p className="scene-narration-text">{narrationText}</p>
        </div>
      )}
      <div className="scene-foreground" />
    </div>
  );
}
