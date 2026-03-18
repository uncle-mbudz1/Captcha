# CAPTCHA — A Narrative Detection Game

A web-based dystopian survival game where you roam post-collapse Earth as the last confirmed human, encountering figures you must determine are human or AI before moving on.

**Inspired by**: I Am Legend, Disco Elysium, Blade Runner

## How to Play

```bash
npm install
npm run dev
```

Then open http://localhost:5173 in your browser.

Or build for production and serve the `dist` folder:

```bash
npm run build
```

## Gameplay

1. **Observe** — Scan the figure for visual anomalies (30 seconds). Click on anything that seems wrong.
2. **Interrogate** — Ask questions from unlocked categories. Human and Synthetic responses differ in tone and content.
3. **Verdict** — Mark as Synthetic, Trust as Human, or Release without verdict.
4. **Consequence** — Your choice has weight. Wrong verdicts cost health and increase paranoia.

## Features

- 5 zones, 20 encounters (14 Synthetics, 5 Humans, 1 ambiguous)
- Observation mini-game with 6 visual tell types
- Interrogation system with Memory, Pain, Chaos, Body, and Paradox questions
- Skill tree with 12 unlockable skills
- Paranoia system — the world distorts as you make mistakes
- LocalStorage save/load
- Procedural audio via Web Audio API

## Tech Stack

- React 18 + Vite
- CSS variables for theme
- Google Fonts (Playfair Display, Crimson Pro, Share Tech Mono)
- No backend required — fully playable offline
