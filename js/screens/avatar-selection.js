// js/screens/avatar-selection.js
import { setAvatarType } from '../state.js';
import { AVATARS } from '../components/avatar.js';

export function renderAvatarSelection() {
  return `
    <div class="screen-padding selection-screen">
      <h1 class="selection-title">Chọn Người Bạn</h1>
      <p class="selection-subtitle">Ai sẽ cùng bé học tiếng Đức?</p>
      
      <div class="avatar-grid">
        ${AVATARS.map(avatar => `
          <div class="avatar-card" data-id="${avatar.id}">
            <div class="avatar-card-emoji">${avatar.emoji}</div>
            <div class="avatar-card-name">${avatar.name}</div>
            <div class="avatar-card-personality">${avatar.desc}</div>
          </div>
        `).join('')}
      </div>

      <div class="btn-group" style="width: 100%; max-width: 300px; margin-top: 40px;">
        <button class="btn primary disabled" id="btn-confirm-avatar">Let's go! 🚀</button>
      </div>
    </div>
  `;
}

export function setupSelectionHandlers(navigateFn) {
  let selectedId = null;
  const cards = document.querySelectorAll('.avatar-card');
  const confirmBtn = document.getElementById('btn-confirm-avatar');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      cards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      selectedId = card.dataset.id;
      confirmBtn.classList.remove('disabled');
    });
  });

  if (confirmBtn) {
    confirmBtn.addEventListener('click', () => {
      if (selectedId) {
        setAvatarType(selectedId);
        navigateFn('home');
      }
    });
  }
}
