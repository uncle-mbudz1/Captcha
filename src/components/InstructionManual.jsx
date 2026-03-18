export default function InstructionManual({ onClose }) {
  return (
    <div
      className="instruction-manual-overlay"
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.88)',
        zIndex: 1100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onClick={onClose}
    >
      <div
        className="instruction-manual"
        style={{
          maxWidth: '660px',
          maxHeight: '85vh',
          overflowY: 'auto',
          background: 'var(--bg-mid)',
          border: '1px solid var(--ui-border)',
          padding: '2.5rem',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h1 style={{ fontFamily: 'var(--font-display)', color: 'var(--paint-bone)', marginBottom: '0.5rem' }}>
          CAPTCHA
        </h1>
        <p style={{ borderBottom: '1px solid var(--ui-border)', paddingBottom: '1rem', marginBottom: '1.5rem' }} />
        <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-dim)', fontStyle: 'italic', lineHeight: 1.7, marginBottom: '1.5rem' }}>
          &quot;You are Vale. A linguist. The last confirmed human you know of.
          Somewhere out there, others survive. You are looking for them.
          The world is full of figures that look human. Most are not.&quot;
        </p>

        <h2 className="manual-section">THE MISSION</h2>
        <p className="manual-body">
          Move through 5 zones. In each zone you will encounter figures.
          Your task is simple: determine whether each figure is human or synthetic.
          Get it right and you survive. Get it wrong and the cost is real.
          Find the humans. They will give you something. Then they will be gone.
        </p>

        <h2 className="manual-section">OBSERVATION PHASE</h2>
        <p className="manual-body">
          When you approach a figure you have 30 seconds to observe them.
          Scan their body for anomalies — things that don&apos;t look right.
          Click on anything suspicious to flag it.
        </p>
        <p className="manual-body">
          <strong>IMPORTANT:</strong> Not everything that looks wrong IS wrong.
          Some anomalies are traps — environmental noise designed to make you doubt.
          Clicking a false anomaly costs you health. Be deliberate.
        </p>
        <p className="manual-body">
          Real tells affect your Suspicion Score, which informs your verdict.
          Your Pattern Recognition skill will highlight the first real tell automatically.
        </p>

        <h2 className="manual-section">INTERROGATION PHASE</h2>
        <p className="manual-body">
          After observation you can ask the figure questions.
          Questions are grouped by category. Different skills unlock different categories.
        </p>
        <p className="manual-body">
          Listen carefully to how they answer — not just what they say.
          Synthetics answer correctly. Humans answer truthfully.
          Those are not the same thing.
        </p>
        <p className="manual-body">
          You can ask multiple questions across categories. Use CHANGE TOPIC to switch.
          Use ASK AGAIN to press deeper on the same category.
          The Last Question skill unlocks one devastating question per zone
          that no Synthetic can answer without breaking.
        </p>

        <h2 className="manual-section">THE VERDICT</h2>
        <p className="manual-body">
          When you are ready, make your verdict:
        </p>
        <p className="manual-option">
          <strong>MARK SYNTHETIC</strong> — you believe this figure is not human.
          If wrong: you lose health. The paranoia rises.
        </p>
        <p className="manual-option">
          <strong>TRUST AS HUMAN</strong> — you believe this figure is real.
          If wrong: it strikes before you can react. You lose health.
        </p>
        <p className="manual-option">
          <strong>RELEASE WITHOUT VERDICT</strong> — you let them go. No risk. No reward.
          Safe, but earns no XP and does not help you find anyone.
        </p>

        <h2 className="manual-section">HEALTH</h2>
        <p className="manual-body">
          You begin with 3 lives shown as ♥ in the top bar.
          Health is lost by:
        </p>
        <ul className="manual-body" style={{ marginLeft: '1.5rem', marginBottom: '1rem' }}>
          <li>Wrongly marking a human as Synthetic</li>
          <li>Wrongly trusting a Synthetic as Human</li>
          <li>Clicking a false anomaly during observation</li>
        </ul>
        <p className="manual-body">
          If your health reaches zero, the search ends.
        </p>

        <h2 className="manual-section">PARANOIA</h2>
        <p className="manual-body">
          Every wrong verdict raises your Paranoia level.
          As paranoia climbs, the world becomes harder to read:
        </p>
        <ul className="manual-body" style={{ marginLeft: '1.5rem', marginBottom: '1rem' }}>
          <li>The scene distorts</li>
          <li>Your gut instinct becomes unreliable</li>
          <li>Visual noise increases during observation</li>
        </ul>
        <p className="manual-body">
          There is no way to lower paranoia. Only better verdicts slow its rise.
        </p>

        <h2 className="manual-section">SKILLS</h2>
        <p className="manual-body">
          You earn XP from correct verdicts and real tells found.
          Spend XP in the SKILLS panel to unlock new abilities.
        </p>
        <p className="manual-body">
          Tier 1 skills are yours from the start.
          Higher tiers unlock as you reach new zones.
          See the SKILLS panel for the full list and costs.
        </p>

        <h2 className="manual-section">THE HUMANS</h2>
        <p className="manual-body">
          Across your journey you will find 4 real humans before the end.
          Each will give you something and disappear.
          These gifts persist. They matter.
        </p>
        <p className="manual-body">
          The fifth human is the end of the road — but not the end of the search.
        </p>

        <h2 className="manual-section">A NOTE</h2>
        <p className="manual-body" style={{ fontStyle: 'italic', color: 'var(--text-dim)' }}>
          &quot;The tells get harder. The Synthetics get better.
          By Zone 4 they have learned to simulate doubt.
          By Zone 5 they have learned to simulate grief.
          Trust your instincts. Then question them.&quot;
        </p>

        <button className="instruction-manual-close" onClick={onClose}>
          CLOSE
        </button>
      </div>
    </div>
  );
}
