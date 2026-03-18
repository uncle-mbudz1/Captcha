export default function LogsModal({ logsFound = [], onClose }) {
  return (
    <div
      className="logs-modal-overlay"
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
        className="logs-modal"
        style={{
          background: 'var(--bg-mid)',
          border: '1px solid var(--ui-border)',
          padding: '2rem',
          maxWidth: '580px',
          width: '90%',
          maxHeight: '80vh',
          overflowY: 'auto',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="logs-modal-title" style={{ fontFamily: 'var(--font-display)', color: 'var(--paint-bone)', marginBottom: '1.5rem' }}>
          FIELD LOGS
        </h2>

        <section className="logs-section">
          <h3 className="logs-section-header">VALE&apos;S JOURNAL</h3>
          <div className="logs-journal">
            <div className="logs-entry">
              <div className="logs-entry-title">Day 847</div>
              <p className="logs-entry-body">
                &quot;I stopped counting the ones that aren&apos;t real. I started counting the ones that might be. The difference matters more than I can explain.&quot;
              </p>
            </div>
            <div className="logs-entry">
              <div className="logs-entry-title">Before</div>
              <p className="logs-entry-body">
                &quot;I was a linguist. That&apos;s what everyone says saved me. I say it was stubbornness. Language tells you when something is performing rather than speaking. I learned to hear the gap.&quot;
              </p>
            </div>
          </div>
        </section>

        <section className="logs-section">
          <h3 className="logs-section-header">RECOVERED FRAGMENTS</h3>
          {logsFound.length === 0 ? (
            <p className="logs-empty" style={{ color: 'var(--text-dim)', fontStyle: 'italic' }}>
              Nothing yet. Keep moving.
            </p>
          ) : (
            <div className="logs-fragments">
              {logsFound.map((log) => (
                <div key={log.id} className="logs-fragment-card">
                  <div className="logs-fragment-title" style={{ color: 'var(--paint-amber)', fontFamily: 'var(--font-ui)' }}>
                    {log.title}
                  </div>
                  <p className="logs-fragment-body" style={{ fontFamily: 'var(--font-body)', color: 'var(--text-primary)', lineHeight: 1.6 }}>
                    {log.text}
                  </p>
                </div>
              ))}
            </div>
          )}
        </section>

        <button className="logs-modal-close" onClick={onClose} style={{ width: '100%', marginTop: '1.5rem', padding: '0.5rem', border: '1px solid var(--ui-border)' }}>
          CLOSE LOGS
        </button>
      </div>
    </div>
  );
}
