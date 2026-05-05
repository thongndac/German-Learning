// js/screens/reward.js
import { getState, addStars } from '../state.js';
import { getAvatarEmoji } from '../components/avatar.js';

export function renderReward() {
  const state = getState();
  const emoji = getAvatarEmoji(state.avatarType);

  return `
    <div class="screen-padding" style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; position: relative;">
      
      <!-- Confetti simulated by emojis -->
      <div style="position: absolute; width: 100%; height: 100%; overflow: hidden; pointer-events: none; top: 0; left: 0;">
        <div style="position: absolute; top: 20%; left: 20%; font-size: 2rem; animation: float-down 2s infinite;">✨</div>
        <div style="position: absolute; top: 30%; right: 20%; font-size: 2rem; animation: float-up 2s infinite;">🎉</div>
        <div style="position: absolute; top: 50%; left: 10%; font-size: 2rem; animation: float-down 1.5s infinite;">💎</div>
        <div style="position: absolute; top: 40%; right: 10%; font-size: 2rem; animation: float-up 2.5s infinite;">🎊</div>
      </div>

      <div class="avatar happy" style="font-size: 6rem; margin-bottom: 24px; z-index: 2;">${emoji}</div>
      
      <h1 style="font-size: 2.5rem; color: var(--success); text-align: center; margin-bottom: 16px; z-index: 2; text-shadow: 0 4px 10px rgba(16, 185, 129, 0.3);">
        Tuyệt Vời!
      </h1>
      
      <div class="card" style="width: 100%; max-width: 300px; text-align: center; margin-bottom: 40px; z-index: 2;">
        <div style="font-size: 3rem; font-weight: 900; color: var(--warning);">+10 ⭐</div>
        <div style="color: var(--text-dim); font-weight: bold;">Hoàn thành bài học</div>
      </div>

      <div class="btn-group" style="width: 100%; z-index: 2;">
        <button class="btn primary" id="btn-continue-adventure">Tiếp tục hành trình 🚀</button>
      </div>

    </div>
  `;
}

export function setupRewardHandlers(navigateFn) {
  // Give stars on load
  addStars(10);

  const btn = document.getElementById('btn-continue-adventure');
  if (btn) {
    btn.addEventListener('click', () => {
      navigateFn('home');
    });
  }
}
