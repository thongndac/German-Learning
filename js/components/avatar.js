// js/components/avatar.js
import { getState, subscribe } from '../state.js';

export const AVATARS = [
  { id: "fox", emoji: "🦊", name: "Cáo", desc: "Thông minh" },
  { id: "bear", emoji: "🐻", name: "Gấu", desc: "Ấm áp" },
  { id: "rabbit", emoji: "🐰", name: "Thỏ", desc: "Nhanh nhẹn" },
  { id: "panda", emoji: "🐼", name: "Trúc", desc: "Đáng yêu" },
  { id: "cat", emoji: "🐱", name: "Mèo", desc: "Lém lỉnh" }
];

export function getAvatarEmoji(id) {
  const av = AVATARS.find(a => a.id === id);
  return av ? av.emoji : "❓";
}

export function renderGlobalHeader(state) {
  if (!state.avatarType) return '';
  return `
    <div class="global-header">
      <div style="display: flex; align-items: center; gap: 8px;">
        <div style="font-size: 2rem;">${getAvatarEmoji(state.avatarType)}</div>
        <div style="font-weight: 900; font-size: 1.2rem; color: var(--primary);">Bé Yêu</div>
      </div>
      <div class="header-stats">
        <div class="stat-pill stars">⭐ ${state.stars}</div>
        <div class="stat-pill streak">🔥 ${state.streak}</div>
      </div>
    </div>
  `;
}

export function mountHeader(elementId) {
  const container = document.getElementById(elementId);
  if (!container) return;
  subscribe((state) => {
    container.innerHTML = renderGlobalHeader(state);
  });
}
