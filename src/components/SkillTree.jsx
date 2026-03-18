import React, { useState, useEffect } from 'react';
import { SKILLS, ITEM_SKILL_UNLOCKS } from '../game/constants';

const TIER_LABELS = { 1: 'BASELINE', 2: 'FIELD SKILLS', 3: 'ADVANCED', 4: 'MASTERY' };
const ITEM_UNLOCKED_SKILLS = new Set(Object.values(ITEM_SKILL_UNLOCKS));
const tierUnlockZone = { 1: 1, 2: 2, 3: 3, 4: 4 };

export default function SkillTree({ skills, xp, currentZone = 1, items = [], onUnlock, onClose }) {
  const [newlyUnlocked, setNewlyUnlocked] = useState([]);

  const handleUnlock = (id) => {
    const data = SKILLS[id];
    if (!data || skills.includes(id)) return;
    if (data.xpCost > 0 && xp >= data.xpCost) {
      onUnlock?.(id);
      setNewlyUnlocked((prev) => [...prev, id]);
    }
  };

  useEffect(() => {
    if (newlyUnlocked.length === 0) return;
    const t = setTimeout(() => setNewlyUnlocked([]), 1000);
    return () => clearTimeout(t);
  }, [newlyUnlocked]);

  const skillsByTier = Object.entries(SKILLS).reduce((acc, [id, data]) => {
    const tier = data.tier;
    if (!acc[tier]) acc[tier] = [];
    acc[tier].push([id, data]);
    return acc;
  }, {});

  return (
    <div className="skill-tree-overlay" onClick={onClose}>
      <div className="skill-tree-modal" onClick={(e) => e.stopPropagation()}>
        <h2 className="skill-tree-title">SKILL TREE</h2>
        <p className="skill-tree-xp">XP: {xp}</p>
        <div className="skill-tree-grid">
          {[1, 2, 3, 4].map((tierNum) => (
            <React.Fragment key={tierNum}>
              <div className="skill-tier-divider">
                TIER {tierNum} — {TIER_LABELS[tierNum]}
              </div>
              {skillsByTier[tierNum]?.map(([id, data]) => {
                const owned = skills.includes(id);
                const isItemUnlocked = ITEM_UNLOCKED_SKILLS.has(id);
                const itemForSkill = Object.entries(ITEM_SKILL_UNLOCKS).find(([, s]) => s === id)?.[0];
                const hasItem = itemForSkill ? items.includes(itemForSkill) : false;
                const canAfford = xp >= data.xpCost;
                const tierUnlocked = data.tier === 1 || currentZone >= tierUnlockZone[data.tier];
                const available = !owned && !isItemUnlocked && canAfford && tierUnlocked;
                const statusClass = owned ? 'owned' : available ? 'available' : 'locked';
                const isStarter = data.xpCost === 0 && owned;
                const itemRequired = isItemUnlocked && !hasItem;

                return (
                  <div
                    key={id}
                    className={`skill-node ${statusClass} ${isStarter ? 'starter' : ''} ${itemRequired ? 'item-required' : ''} ${newlyUnlocked.includes(id) ? 'newly-unlocked' : ''}`}
                    onClick={available ? () => handleUnlock(id) : undefined}
                  >
                    <div className="skill-node-header">{data.label}</div>
                    <div className="skill-node-desc">{data.desc}</div>
                    <div className="skill-node-cost">
                      {isItemUnlocked && owned ? 'UNLOCKED — FIELD ITEM' : isItemUnlocked && !hasItem ? 'FIELD ITEM REQUIRED' : data.xpCost === 0 && owned ? 'STARTING SKILL' : data.xpCost > 0 ? `${data.xpCost} XP` : 'Starting'}
                    </div>
                    {!tierUnlocked && !owned && !isItemUnlocked && (
                      <div className="skill-unlock-condition">
                        Unlocks in Zone {tierUnlockZone[data.tier]}
                      </div>
                    )}
                  </div>
                );
              })}
            </React.Fragment>
          ))}
        </div>
        <button className="skill-tree-close" onClick={onClose}>CLOSE</button>
      </div>
    </div>
  );
}
