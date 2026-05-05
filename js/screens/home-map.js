// js/screens/home-map.js
import { getState } from '../state.js';
import { getAvatarEmoji } from '../components/avatar.js';

export function renderHome() {
  const state = getState();
  const emoji = getAvatarEmoji(state.avatarType);

  const levels = [
    { id: 'l1', title: 'Food', icon: '🍎', unlocked: true },
    { id: 'l2', title: 'Animals', icon: '🐶', unlocked: false },
    { id: 'l3', title: 'Home', icon: '🏠', unlocked: false }
  ];

  return `
    <div class="map-container">
      ${levels.map((lvl, index) => {
        const isCurrent = index === 0; // Hardcode level 1 as current for now
        const isLocked = !lvl.unlocked;
        const classes = ['map-node'];
        if (isCurrent) classes.push('current');
        if (isLocked) classes.push('locked');
        
        return `
          <div class="map-node ${classes.join(' ')}" data-id="${lvl.id}" ${!isLocked ? 'style="cursor:pointer;"' : ''}>
            ${isLocked ? '🔒' : lvl.icon}
            ${isCurrent ? `<div class="map-avatar-indicator">${emoji}</div>` : ''}
          </div>
        `;
      }).join('')}
    </div>
  `;
}

export function setupHomeHandlers(navigateFn) {
  const nodes = document.querySelectorAll('.map-node:not(.locked)');
  nodes.forEach(node => {
    node.addEventListener('click', () => {
      navigateFn('lesson');
    });
  });
}
