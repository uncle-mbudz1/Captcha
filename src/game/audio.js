// Web Audio API - procedural sounds, no external files

let audioCtx = null;

function getContext() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  return audioCtx;
}

export function playUIClick() {
  try {
    const ctx = getContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.setValueAtTime(400, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.05);
    osc.type = 'sine';
    gain.gain.setValueAtTime(0.1, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.1);
  } catch (e) {}
}

export function playVerdictCorrect() {
  try {
    const ctx = getContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.setValueAtTime(440, ctx.currentTime);
    osc.frequency.setValueAtTime(554, ctx.currentTime + 0.1);
    osc.frequency.setValueAtTime(659, ctx.currentTime + 0.2);
    osc.type = 'sine';
    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.5);
  } catch (e) {}
}

export function playVerdictWrong() {
  try {
    const ctx = getContext();
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const gain = ctx.createGain();
    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(ctx.destination);
    osc1.frequency.setValueAtTime(80, ctx.currentTime);
    osc2.frequency.setValueAtTime(83, ctx.currentTime);
    osc1.type = 'sawtooth';
    osc2.type = 'sawtooth';
    gain.gain.setValueAtTime(0.1, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
    osc1.start(ctx.currentTime);
    osc2.start(ctx.currentTime);
    osc1.stop(ctx.currentTime + 0.4);
    osc2.stop(ctx.currentTime + 0.4);
  } catch (e) {}
}

export function playHumanDiscovered() {
  try {
    const ctx = getContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.setValueAtTime(262, ctx.currentTime);
    osc.frequency.setValueAtTime(330, ctx.currentTime + 0.15);
    osc.frequency.setValueAtTime(392, ctx.currentTime + 0.3);
    osc.type = 'sine';
    gain.gain.setValueAtTime(0.12, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.6);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.6);
  } catch (e) {}
}

export function playHeartbeat() {
  try {
    const ctx = getContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.setValueAtTime(60, ctx.currentTime);
    osc.type = 'sine';
    gain.gain.setValueAtTime(0.03, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.15);
  } catch (e) {}
}

let ambientInterval = null;
let ambientOsc = null;
let ambientGain = null;
let ambientFilter = null;

export function startAmbientDrone(suspicionLevel = 0) {
  stopAmbientDrone();
  try {
    const ctx = getContext();
    ambientOsc = ctx.createOscillator();
    ambientGain = ctx.createGain();
    ambientFilter = ctx.createBiquadFilter();
    ambientOsc.connect(ambientFilter);
    ambientFilter.connect(ambientGain);
    ambientGain.connect(ctx.destination);
    ambientOsc.frequency.setValueAtTime(55 + suspicionLevel * 5, ctx.currentTime);
    ambientOsc.type = 'sine';
    ambientFilter.type = 'lowpass';
    ambientFilter.frequency.setValueAtTime(200 + suspicionLevel * 50, ctx.currentTime);
    ambientGain.gain.setValueAtTime(0.02, ctx.currentTime);
    ambientOsc.start(ctx.currentTime);
    ambientInterval = setInterval(() => {
      const t = ctx.currentTime;
      ambientOsc?.frequency.setValueAtTime(55 + Math.sin(t * 0.5) * 3 + suspicionLevel * 5, t);
    }, 100);
  } catch (e) {}
}

export function stopAmbientDrone() {
  if (ambientInterval) {
    clearInterval(ambientInterval);
    ambientInterval = null;
  }
  try {
    if (ambientOsc) {
      ambientOsc.stop();
      ambientOsc.disconnect();
      ambientOsc = null;
    }
    if (ambientGain) {
      ambientGain.disconnect();
      ambientGain = null;
    }
    if (ambientFilter) {
      ambientFilter.disconnect();
      ambientFilter = null;
    }
  } catch (e) {}
}
