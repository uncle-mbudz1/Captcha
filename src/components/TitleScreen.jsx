import { useState, useEffect } from 'react';

export default function TitleScreen({ onStart, onManual }) {
  const [phase, setPhase] = useState('splash'); // splash, text, ready
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('text'), 3000);
    return () => clearTimeout(t1);
  }, []);

  useEffect(() => {
    if (phase === 'text') {
      const t2 = setTimeout(() => setTextVisible(true), 500);
      return () => clearTimeout(t2);
    }
  }, [phase]);

  return (
    <div className="title-screen">
      <div className={`title-scene ${phase}`}>
        <div className="title-bg" />
        <div className="title-fog" />
        <div className="title-street" />
      </div>
      {phase !== 'splash' && (
        <div className={`title-text ${textVisible ? 'visible' : ''}`}>
          <div className="title-wordmark">
            <span className="title-main">CAPTCHA</span>
            <span className="title-subtitle">A Tale of Two Beings</span>
          </div>
          <p className="title-quote">
            <em>"Day 847. I stopped counting the ones that aren't real. I started counting the ones that might be."</em>
          </p>
          <button
            className="title-start"
            onClick={() => {
              setPhase('ready');
              setTimeout(onStart, 800);
            }}
          >
            BEGIN
          </button>
          <button
            className="title-manual"
            onClick={() => onManual?.()}
          >
            HOW TO PLAY
          </button>
        </div>
      )}
    </div>
  );
}
