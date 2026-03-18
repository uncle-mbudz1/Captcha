export default function SkillNotice({ notices }) {
  if (!notices?.length) return null;
  return (
    <div className="skill-notice-stack">
      {notices.map((n) => (
        <div key={n.id} className="skill-notice">
          <span className="skill-notice-label">SKILL AVAILABLE</span>
          <span className="skill-notice-name">{n.skillLabel}</span>
          <span className="skill-notice-hint">Open SKILLS to unlock</span>
        </div>
      ))}
    </div>
  );
}
