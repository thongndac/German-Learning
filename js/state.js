// js/state.js
export const state = {
  avatarType: localStorage.getItem('avatarType') || null,
  stars: parseInt(localStorage.getItem('stars')) || 0,
  streak: parseInt(localStorage.getItem('streak')) || 0,
  completedLessons: JSON.parse(localStorage.getItem('completedLessons')) || [],
  xp: parseInt(localStorage.getItem('xp')) || 0,
  level: parseInt(localStorage.getItem('level')) || 1,
  mood: 'idle',
};

const listeners = new Set();

export function subscribe(callback) {
  listeners.add(callback);
  callback(state);
  return () => listeners.delete(callback);
}

function notify() { listeners.forEach(l => l(state)); }

export function setAvatarType(type) {
  state.avatarType = type;
  localStorage.setItem('avatarType', type);
  notify();
}

export function setMood(mood) {
  state.mood = mood;
  notify();
  if (mood !== 'idle') {
    setTimeout(() => { if (state.mood === mood) { state.mood = 'idle'; notify(); } }, 3000);
  }
}

export function addStars(amount) {
  state.stars += amount;
  state.xp += amount * 50;
  if (state.xp >= 500) { state.level++; state.xp -= 500; localStorage.setItem('level', state.level); }
  localStorage.setItem('stars', state.stars);
  localStorage.setItem('xp', state.xp);
  notify();
}

export function markLessonComplete(id) {
  if (!state.completedLessons.includes(id)) {
    state.completedLessons.push(id);
    localStorage.setItem('completedLessons', JSON.stringify(state.completedLessons));
  }
}

export function getState() { return { ...state }; }
