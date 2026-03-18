export default function HumanoidFigure({ variant = 0, zoneId = 1, size = 'large' }) {
  const v = variant % 8;
  const isLarge = size === 'large';
  const w = isLarge ? 120 : 80;
  const h = isLarge ? 220 : 150;

  const zoneTransforms = {
    1: 'translateY(4px) rotate(-2deg)',
    2: 'translateY(0) rotate(0deg)',
    3: 'translateY(-4px) rotate(1deg)',
    4: 'translateY(6px) scaleY(0.93)',
    5: 'translateY(-6px) rotate(0deg)',
  };

  const transform = zoneTransforms[zoneId] || zoneTransforms[2];

  const s = (n) => (isLarge ? n : (n * 80) / 120);
  const hScale = (pct) => h * pct;

  const renderVariant = () => {
    const gradientId = `humanoid-fill-${v}`;
    const common = {
      fill: `url(#${gradientId})`,
      filter: 'url(#painted)',
    };

    switch (v) {
      case 0: {
        // Tall, lean: narrow shoulders, long legs, long coat silhouette (collar visible)
        const cx = w / 2;
        return (
          <g filter={common.filter}>
            <ellipse cx={cx} cy={s(20)} rx={s(12)} ry={s(16)} fill={`url(#${gradientId})`} />
            <rect x={cx - s(4)} y={s(35)} width={s(8)} height={s(14)} fill={`url(#${gradientId})`} />
            <path d={`M ${cx - s(18)} ${hScale(0.22)} Q ${cx} ${hScale(0.18)} ${cx + s(18)} ${hScale(0.22)}`} stroke={`url(#${gradientId})`} strokeWidth={s(8)} fill="none" strokeLinecap="round" />
            <path d={`M ${cx - s(18)} ${hScale(0.22)} Q ${cx - s(8)} ${hScale(0.2)} ${cx} ${hScale(0.22)}`} stroke="rgba(255,255,255,0.05)" strokeWidth={1} fill="none" />
            <path d={`M ${cx - s(18)} ${hScale(0.28)} L ${cx - s(16)} ${hScale(0.92)} L ${cx + s(16)} ${hScale(0.92)} L ${cx + s(18)} ${hScale(0.28)} Z`} fill={`url(#${gradientId})`} />
            <rect x={cx - s(28)} y={hScale(0.24)} width={s(8)} height={s(60)} rx={2} fill={`url(#${gradientId})`} transform={`rotate(-12, ${cx - s(24)} ${hScale(0.35)})`} />
            <rect x={cx + s(20)} y={hScale(0.24)} width={s(8)} height={s(60)} rx={2} fill={`url(#${gradientId})`} transform={`rotate(12, ${cx + s(24)} ${hScale(0.35)})`} />
            <rect x={cx - s(10)} y={hScale(0.55)} width={s(8)} height={s(58)} rx={2} fill={`url(#${gradientId})`} />
            <rect x={cx + s(2)} y={hScale(0.55)} width={s(8)} height={s(58)} rx={2} fill={`url(#${gradientId})`} />
          </g>
        );
      }
      case 1: {
        // Stocky, broad: wide shoulders, short neck, heavy jacket/parka bulk
        const cx = w / 2;
        return (
          <g filter={common.filter}>
            <ellipse cx={cx} cy={s(18)} rx={s(16)} ry={s(14)} fill={`url(#${gradientId})`} />
            <rect x={cx - s(8)} y={s(30)} width={s(16)} height={s(8)} fill={`url(#${gradientId})`} />
            <path d={`M ${cx - s(32)} ${hScale(0.2)} Q ${cx} ${hScale(0.16)} ${cx + s(32)} ${hScale(0.2)}`} stroke={`url(#${gradientId})`} strokeWidth={s(16)} fill="none" strokeLinecap="round" />
            <path d={`M ${cx - s(32)} ${hScale(0.2)} Q ${cx - s(16)} ${hScale(0.18)} ${cx} ${hScale(0.2)}`} stroke="rgba(255,255,255,0.05)" strokeWidth={1} fill="none" />
            <path d={`M ${cx - s(26)} ${hScale(0.26)} L ${cx - s(24)} ${hScale(0.6)} L ${cx + s(24)} ${hScale(0.6)} L ${cx + s(26)} ${hScale(0.26)} Z`} fill={`url(#${gradientId})`} />
            <rect x={cx - s(36)} y={hScale(0.22)} width={s(12)} height={s(48)} rx={2} fill={`url(#${gradientId})`} transform={`rotate(-5, ${cx - s(30)} ${hScale(0.32)})`} />
            <rect x={cx + s(24)} y={hScale(0.22)} width={s(12)} height={s(48)} rx={2} fill={`url(#${gradientId})`} transform={`rotate(5, ${cx + s(30)} ${hScale(0.32)})`} />
            <rect x={cx - s(14)} y={hScale(0.55)} width={s(12)} height={s(48)} rx={2} fill={`url(#${gradientId})`} />
            <rect x={cx + s(2)} y={hScale(0.55)} width={s(12)} height={s(48)} rx={2} fill={`url(#${gradientId})`} />
          </g>
        );
      }
      case 2: {
        // Slight, hunched: small frame, curved spine, hood pulled forward
        const cx = w / 2;
        return (
          <g filter={common.filter}>
            <ellipse cx={cx} cy={s(22)} rx={s(10)} ry={s(14)} fill={`url(#${gradientId})`} />
            <path d={`M ${cx - s(6)} ${s(34)} Q ${cx - s(4)} ${s(42)} ${cx - s(2)} ${s(48)}`} stroke={`url(#${gradientId})`} strokeWidth={s(6)} fill="none" strokeLinecap="round" />
            <path d={`M ${cx - s(14)} ${hScale(0.24)} Q ${cx - s(8)} ${hScale(0.22)} ${cx} ${hScale(0.26)} Q ${cx + s(8)} ${hScale(0.22)} ${cx + s(14)} ${hScale(0.24)}`} stroke={`url(#${gradientId})`} strokeWidth={s(8)} fill="none" strokeLinecap="round" />
            <path d={`M ${cx - s(14)} ${hScale(0.24)} Q ${cx - s(8)} ${hScale(0.23)} ${cx} ${hScale(0.26)}`} stroke="rgba(255,255,255,0.05)" strokeWidth={1} fill="none" />
            <path d={`M ${cx - s(14)} ${hScale(0.3)} Q ${cx - s(12)} ${hScale(0.5)} ${cx - s(10)} ${hScale(0.9)} L ${cx + s(10)} ${hScale(0.9)} Q ${cx + s(12)} ${hScale(0.5)} ${cx + s(14)} ${hScale(0.3)} Z`} fill={`url(#${gradientId})`} />
            <rect x={cx - s(22)} y={hScale(0.28)} width={s(6)} height={s(50)} rx={2} fill={`url(#${gradientId})`} transform={`rotate(-25, ${cx - s(19)} ${hScale(0.38)})`} />
            <rect x={cx + s(16)} y={hScale(0.28)} width={s(6)} height={s(50)} rx={2} fill={`url(#${gradientId})`} transform={`rotate(20, ${cx + s(19)} ${hScale(0.38)})`} />
            <rect x={cx - s(10)} y={hScale(0.55)} width={s(6)} height={s(50)} rx={2} fill={`url(#${gradientId})`} />
            <rect x={cx + s(4)} y={hScale(0.55)} width={s(6)} height={s(50)} rx={2} fill={`url(#${gradientId})`} />
          </g>
        );
      }
      case 3: {
        // Average with hood down: neutral proportions, hoodie silhouette
        const cx = w / 2;
        return (
          <g filter={common.filter}>
            <ellipse cx={cx} cy={s(20)} rx={s(14)} ry={s(16)} fill={`url(#${gradientId})`} />
            <rect x={cx - s(5)} y={s(34)} width={s(10)} height={s(12)} fill={`url(#${gradientId})`} />
            <path d={`M ${cx - s(22)} ${hScale(0.22)} Q ${cx} ${hScale(0.18)} ${cx + s(22)} ${hScale(0.22)}`} stroke={`url(#${gradientId})`} strokeWidth={s(10)} fill="none" strokeLinecap="round" />
            <path d={`M ${cx - s(22)} ${hScale(0.22)} Q ${cx - s(11)} ${hScale(0.2)} ${cx} ${hScale(0.22)}`} stroke="rgba(255,255,255,0.05)" strokeWidth={1} fill="none" />
            <path d={`M ${cx - s(20)} ${hScale(0.28)} L ${cx - s(18)} ${hScale(0.58)} L ${cx + s(18)} ${hScale(0.58)} L ${cx + s(20)} ${hScale(0.28)} Z`} fill={`url(#${gradientId})`} />
            <rect x={cx - s(28)} y={hScale(0.24)} width={s(9)} height={s(52)} rx={2} fill={`url(#${gradientId})`} transform={`rotate(-8, ${cx - s(23)} ${hScale(0.35)})`} />
            <rect x={cx + s(19)} y={hScale(0.24)} width={s(9)} height={s(52)} rx={2} fill={`url(#${gradientId})`} transform={`rotate(8, ${cx + s(23)} ${hScale(0.35)})`} />
            <rect x={cx - s(12)} y={hScale(0.55)} width={s(9)} height={s(52)} rx={2} fill={`url(#${gradientId})`} />
            <rect x={cx + s(3)} y={hScale(0.55)} width={s(9)} height={s(52)} rx={2} fill={`url(#${gradientId})`} />
          </g>
        );
      }
      case 4: {
        // Elderly: slightly shorter, rounded back curve, cane suggested by angled arm
        const cx = w / 2;
        return (
          <g filter={common.filter}>
            <ellipse cx={cx} cy={s(22)} rx={s(13)} ry={s(15)} fill={`url(#${gradientId})`} />
            <path d={`M ${cx - s(5)} ${s(35)} Q ${cx - s(8)} ${s(48)} ${cx - s(6)} ${s(58)}`} stroke={`url(#${gradientId})`} strokeWidth={s(8)} fill="none" strokeLinecap="round" />
            <path d={`M ${cx - s(18)} ${hScale(0.24)} Q ${cx} ${hScale(0.18)} ${cx + s(18)} ${hScale(0.24)}`} stroke={`url(#${gradientId})`} strokeWidth={s(9)} fill="none" strokeLinecap="round" />
            <path d={`M ${cx - s(18)} ${hScale(0.24)} Q ${cx - s(9)} ${hScale(0.21)} ${cx} ${hScale(0.24)}`} stroke="rgba(255,255,255,0.05)" strokeWidth={1} fill="none" />
            <path d={`M ${cx - s(16)} ${hScale(0.3)} Q ${cx - s(14)} ${hScale(0.52)} ${cx - s(12)} ${hScale(0.88)} L ${cx + s(12)} ${hScale(0.88)} Q ${cx + s(14)} ${hScale(0.52)} ${cx + s(16)} ${hScale(0.3)} Z`} fill={`url(#${gradientId})`} />
            <rect x={cx - s(26)} y={hScale(0.26)} width={s(8)} height={s(55)} rx={2} fill={`url(#${gradientId})`} transform={`rotate(-35, ${cx - s(22)} ${hScale(0.4)})`} />
            <rect x={cx + s(18)} y={hScale(0.26)} width={s(8)} height={s(55)} rx={2} fill={`url(#${gradientId})`} transform={`rotate(15, ${cx + s(22)} ${hScale(0.4)})`} />
            <rect x={cx - s(11)} y={hScale(0.52)} width={s(8)} height={s(55)} rx={2} fill={`url(#${gradientId})`} />
            <rect x={cx + s(3)} y={hScale(0.52)} width={s(8)} height={s(55)} rx={2} fill={`url(#${gradientId})`} />
          </g>
        );
      }
      case 5: {
        // Robed: tall, narrow, arms hidden within wide robe drape — no visible arms
        const cx = w / 2;
        return (
          <g filter={common.filter}>
            <ellipse cx={cx} cy={s(18)} rx={s(11)} ry={s(15)} fill={`url(#${gradientId})`} />
            <rect x={cx - s(4)} y={s(35)} width={s(8)} height={s(12)} fill={`url(#${gradientId})`} />
            <path d={`M ${cx - s(12)} ${hScale(0.2)} Q ${cx} ${hScale(0.16)} ${cx + s(12)} ${hScale(0.2)}`} stroke={`url(#${gradientId})`} strokeWidth={s(6)} fill="none" strokeLinecap="round" />
            <path d={`M ${cx - s(12)} ${hScale(0.2)} Q ${cx - s(6)} ${hScale(0.18)} ${cx} ${hScale(0.2)}`} stroke="rgba(255,255,255,0.05)" strokeWidth={1} fill="none" />
            <path d={`M ${cx - s(28)} ${hScale(0.22)} L ${cx - s(26)} ${hScale(0.95)} L ${cx + s(26)} ${hScale(0.95)} L ${cx + s(28)} ${hScale(0.22)} Z`} fill={`url(#${gradientId})`} />
            <rect x={cx - s(10)} y={hScale(0.55)} width={s(8)} height={s(55)} rx={2} fill={`url(#${gradientId})`} />
            <rect x={cx + s(2)} y={hScale(0.55)} width={s(8)} height={s(55)} rx={2} fill={`url(#${gradientId})`} />
          </g>
        );
      }
      case 6: {
        // Armored/layered: wide silhouette with layered coat, collar up, scarf suggestion
        const cx = w / 2;
        return (
          <g filter={common.filter}>
            <ellipse cx={cx} cy={s(20)} rx={s(15)} ry={s(14)} fill={`url(#${gradientId})`} />
            <path d={`M ${cx - s(12)} ${s(32)} L ${cx - s(8)} ${s(48)} L ${cx + s(8)} ${s(48)} L ${cx + s(12)} ${s(32)} Z`} fill={`url(#${gradientId})`} />
            <path d={`M ${cx - s(28)} ${hScale(0.22)} Q ${cx} ${hScale(0.16)} ${cx + s(28)} ${hScale(0.22)}`} stroke={`url(#${gradientId})`} strokeWidth={s(14)} fill="none" strokeLinecap="round" />
            <path d={`M ${cx - s(28)} ${hScale(0.22)} Q ${cx - s(14)} ${hScale(0.19)} ${cx} ${hScale(0.22)}`} stroke="rgba(255,255,255,0.05)" strokeWidth={1} fill="none" />
            <path d={`M ${cx - s(24)} ${hScale(0.28)} L ${cx - s(22)} ${hScale(0.6)} L ${cx + s(22)} ${hScale(0.6)} L ${cx + s(24)} ${hScale(0.28)} Z`} fill={`url(#${gradientId})`} />
            <rect x={cx - s(32)} y={hScale(0.24)} width={s(10)} height={s(50)} rx={2} fill={`url(#${gradientId})`} transform={`rotate(-10, ${cx - s(27)} ${hScale(0.34)})`} />
            <rect x={cx + s(22)} y={hScale(0.24)} width={s(10)} height={s(50)} rx={2} fill={`url(#${gradientId})`} transform={`rotate(10, ${cx + s(27)} ${hScale(0.34)})`} />
            <rect x={cx - s(13)} y={hScale(0.55)} width={s(10)} height={s(50)} rx={2} fill={`url(#${gradientId})`} />
            <rect x={cx + s(3)} y={hScale(0.55)} width={s(10)} height={s(50)} rx={2} fill={`url(#${gradientId})`} />
          </g>
        );
      }
      case 7: {
        // Crouching survivor: low center of gravity, arms forward, backpack bulk on back
        const cx = w / 2;
        return (
          <g filter={common.filter}>
            <ellipse cx={cx} cy={s(28)} rx={s(12)} ry={s(14)} fill={`url(#${gradientId})`} />
            <rect x={cx - s(5)} y={s(40)} width={s(10)} height={s(10)} fill={`url(#${gradientId})`} />
            <path d={`M ${cx - s(20)} ${hScale(0.28)} Q ${cx} ${hScale(0.24)} ${cx + s(20)} ${hScale(0.28)}`} stroke={`url(#${gradientId})`} strokeWidth={s(10)} fill="none" strokeLinecap="round" />
            <path d={`M ${cx - s(20)} ${hScale(0.28)} Q ${cx - s(10)} ${hScale(0.26)} ${cx} ${hScale(0.28)}`} stroke="rgba(255,255,255,0.05)" strokeWidth={1} fill="none" />
            <path d={`M ${cx - s(18)} ${hScale(0.34)} L ${cx - s(16)} ${hScale(0.7)} L ${cx + s(16)} ${hScale(0.7)} L ${cx + s(18)} ${hScale(0.34)} Z`} fill={`url(#${gradientId})`} />
            <path d={`M ${cx - s(14)} ${hScale(0.32)} L ${cx - s(8)} ${hScale(0.5)} ${cx - s(10)} ${hScale(0.55)}`} stroke={`url(#${gradientId})`} strokeWidth={s(8)} fill="none" strokeLinecap="round" />
            <path d={`M ${cx + s(14)} ${hScale(0.32)} L ${cx + s(8)} ${hScale(0.5)} ${cx + s(10)} ${hScale(0.55)}`} stroke={`url(#${gradientId})`} strokeWidth={s(8)} fill="none" strokeLinecap="round" />
            <rect x={cx - s(10)} y={hScale(0.55)} width={s(8)} height={s(45)} rx={2} fill={`url(#${gradientId})`} transform={`rotate(-5, ${cx - s(6)} ${hScale(0.72)})`} />
            <rect x={cx + s(2)} y={hScale(0.55)} width={s(8)} height={s(45)} rx={2} fill={`url(#${gradientId})`} transform={`rotate(5, ${cx + s(6)} ${hScale(0.72)})`} />
            <rect x={cx + s(18)} y={hScale(0.3)} width={s(8)} height={s(14)} rx={2} fill={`url(#${gradientId})`} transform={`rotate(-15, ${cx + s(22)} ${hScale(0.37)})`} />
          </g>
        );
      }
      default: {
        const cx = w / 2;
        const gid = 'humanoid-fill-0';
        return (
          <g filter={common.filter}>
            <ellipse cx={cx} cy={s(20)} rx={s(12)} ry={s(16)} fill={`url(#${gid})`} />
            <rect x={cx - s(4)} y={s(35)} width={s(8)} height={s(14)} fill={`url(#${gradientId})`} />
            <path d={`M ${cx - s(18)} ${hScale(0.22)} Q ${cx} ${hScale(0.18)} ${cx + s(18)} ${hScale(0.22)}`} stroke={`url(#${gradientId})`} strokeWidth={s(8)} fill="none" strokeLinecap="round" />
            <path d={`M ${cx - s(18)} ${hScale(0.22)} Q ${cx - s(8)} ${hScale(0.2)} ${cx} ${hScale(0.22)}`} stroke="rgba(255,255,255,0.05)" strokeWidth={1} fill="none" />
            <path d={`M ${cx - s(18)} ${hScale(0.28)} L ${cx - s(16)} ${hScale(0.92)} L ${cx + s(16)} ${hScale(0.92)} L ${cx + s(18)} ${hScale(0.28)} Z`} fill={`url(#${gradientId})`} />
            <rect x={cx - s(28)} y={hScale(0.24)} width={s(8)} height={s(60)} rx={2} fill={`url(#${gradientId})`} transform={`rotate(-12, ${cx - s(24)} ${hScale(0.35)})`} />
            <rect x={cx + s(20)} y={hScale(0.24)} width={s(8)} height={s(60)} rx={2} fill={`url(#${gradientId})`} transform={`rotate(12, ${cx + s(24)} ${hScale(0.35)})`} />
            <rect x={cx - s(10)} y={hScale(0.55)} width={s(8)} height={s(58)} rx={2} fill={`url(#${gradientId})`} />
            <rect x={cx + s(2)} y={hScale(0.55)} width={s(8)} height={s(58)} rx={2} fill={`url(#${gradientId})`} />
          </g>
        );
      }
    }
  };

  return (
    <div className="humanoid-figure" style={{ width: w, height: h }}>
      <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ transform }}>
        <defs>
          <linearGradient id={`humanoid-fill-${v}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1a1c1e" />
            <stop offset="100%" stopColor="#121315" />
          </linearGradient>
          <filter id="painted">
            <feGaussianBlur stdDeviation="0.6" />
          </filter>
        </defs>
        {renderVariant()}
      </svg>
    </div>
  );
}
