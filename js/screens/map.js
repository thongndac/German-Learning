// js/screens/map.js
import { getState } from '../state.js';

const LEVELS = [
  { id: 1, label: '1', top: '78%', left: '18%' },
  { id: 2, label: '2', top: '68%', left: '52%' },
  { id: 3, label: '3', top: '58%', left: '14%' },
  { id: 4, label: '4', top: '47%', left: '48%' },
  { id: 5, label: '5', top: '38%', left: '55%' },
  { id: 6, label: '6', top: '28%', left: '16%' },
  { id: 7, label: '7', top: '19%', left: '44%' },
  { id: 8, label: '8', top: '11%', left: '52%' },
  { id: 9, label: '9', top: '4%',  left: '28%' },
];

export function renderMap() {
  const state = getState();
  const completed = state.completedLessons || [];

  const nodes = LEVELS.map(l => {
    const isDone   = completed.includes(`l${l.id}`);
    const isActive = !isDone && (l.id === 1 || completed.includes(`l${l.id - 1}`));
    const isLocked = !isDone && !isActive;
    const cls = isDone ? 'done' : isActive ? 'active' : 'locked';
    const icon = isDone ? '⭐' : l.label;
    return `
      <div class="map-node ${cls}" style="top:${l.top};left:${l.left};" data-id="l${l.id}">
        ${isActive ? `<span class="map-node-flag">🚩</span>` : ''}
        ${icon}
      </div>
    `;
  }).join('');

  return `
    <div class="map-screen">
      <div class="map-bg"></div>
      <div class="map-bg-overlay"></div>

      <div class="map-topbar">
        <div class="map-stat coins">🪙 <span>${state.stars * 10}</span></div>
        <div class="map-stat stars">⭐ <span>${state.stars}</span></div>
      </div>

      <div class="map-nodes" style="position:relative; min-height: calc(100vh - 160px);">
        ${nodes}
      </div>

      <div class="map-bottombar">
        <button class="map-btn" id="map-btn-home">🏠</button>
        <button class="map-btn" id="map-btn-lessons">📚</button>
        <button class="map-btn" id="map-btn-timer">⏱️</button>
        <button class="map-btn" id="map-btn-settings">⚙️</button>
        <button class="map-btn" id="map-btn-mail">✉️</button>
      </div>
    </div>
  `;
}

export function setupMapHandlers(navigate) {
  document.querySelectorAll('.map-node:not(.locked)').forEach(node => {
    node.addEventListener('click', () => navigate('lesson-list'));
  });
  document.getElementById('map-btn-home')?.addEventListener('click', () => navigate('home'));
  document.getElementById('map-btn-lessons')?.addEventListener('click', () => navigate('lesson-list'));
}
