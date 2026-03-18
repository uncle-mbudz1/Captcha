import { ZONES } from '../game/constants';

export default function MapModal({ currentZone, items, onClose }) {
  const hasMapFragment = items?.includes('map_fragment');

  const nodeY = [130, 100, 140, 110, 130];
  const nodeX = [80, 180, 280, 380, 480];

  const pathPoints = nodeX.map((x, i) => [x, nodeY[i] + (i % 2 === 0 ? 5 : -5)]);

  return (
    <div
      className="map-modal-overlay"
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.85)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onClick={onClose}
    >
      <div
        className="map-modal"
        style={{
          background: 'var(--bg-mid)',
          border: '1px solid var(--ui-border)',
          padding: '2rem',
          maxWidth: '580px',
          width: '90%',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="map-modal-title" style={{ fontFamily: 'var(--font-display)', color: 'var(--paint-bone)' }}>
          KNOWN WORLD
        </h2>
        <p className="map-modal-subtitle" style={{ color: 'var(--text-dim)', fontStyle: 'italic', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
          &quot;Everything beyond the tower is unknown.&quot;
        </p>

        <svg viewBox="0 0 560 260" className="map-svg" style={{ width: '100%', maxWidth: '560px', height: '260px' }}>
          <polyline
            points={pathPoints.map((p) => `${p[0]},${p[1]}`).join(' ')}
            fill="none"
            stroke="var(--paint-amber)"
            strokeWidth="2"
            strokeDasharray="6 4"
            opacity="0.5"
          />
          {ZONES.map((zone, i) => {
            const cx = nodeX[i];
            const cy = nodeY[i];
            const visited = zone.id < currentZone;
            const current = zone.id === currentZone;
            const locked = zone.id > currentZone;

            return (
              <g key={zone.id}>
                <circle
                  cx={cx}
                  cy={cy}
                  r="24"
                  fill={visited ? 'var(--paint-amber)' : locked ? 'none' : 'var(--accent-pulse)'}
                  fillOpacity={visited ? 0.7 : 1}
                  stroke={locked ? 'var(--text-dim)' : 'transparent'}
                  strokeOpacity={locked ? 0.4 : 1}
                  className={current ? 'map-node-current' : ''}
                />
                {hasMapFragment && (zone.id === 3 || zone.id === 4) && (
                  <g>
                    <polygon
                      points={`${cx},${cy - 8} ${cx + 6},${cy + 4} ${cx},${cy + 6} ${cx - 6},${cy + 4}`}
                      fill="var(--paint-amber)"
                    />
                    <title>Hidden exit known</title>
                  </g>
                )}
                <text
                  x={cx}
                  y={cy + 45}
                  textAnchor="middle"
                  fontFamily="var(--font-ui)"
                  fontSize="10"
                  fill={visited ? 'var(--paint-bone)' : current ? 'var(--accent-pulse)' : 'var(--text-dim)'}
                  fontWeight={current ? 'bold' : 'normal'}
                  opacity={locked ? 0.4 : 1}
                  style={{ textTransform: 'uppercase' }}
                >
                  {zone.name.toUpperCase()}
                </text>
              </g>
            );
          })}
        </svg>

        <button className="map-modal-close" onClick={onClose} style={{ width: '100%', marginTop: '1.5rem', padding: '0.5rem', border: '1px solid var(--ui-border)' }}>
          CLOSE MAP
        </button>
      </div>
    </div>
  );
}
