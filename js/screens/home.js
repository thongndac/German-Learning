// js/screens/home.js
import { getState } from '../state.js';

export function renderHome(navigate) {
  const state = getState();
  const avatarEmojis = { rocket: '🚀', dragon: '🐲', unicorn: '🦄', robot: '🤖' };
  const emoji = avatarEmojis[state.avatarType] || '😊';
  const xpPct = Math.min(100, Math.round((state.xp / 500) * 100));

  const categories = [
    { icon: '📚', label: 'Lessons', id: 'lessons' },
    { icon: '🎮', label: 'Games', id: 'games' },
    { icon: '📖', label: 'Stories', id: 'stories' },
    { icon: '🎨', label: 'Activities', id: 'activities' },
    { icon: '🔭', label: 'Discover', id: 'discover' },
  ];

  const featured = [
    { icon: '📚', title: 'Lessons', desc: 'Fun lessons that help you grow smarter daily.', route: 'lesson-list', color: '#EDE9FE' },
    { icon: '🎮', title: 'Games', desc: 'Play German word games and earn coins!', route: 'map', color: '#FEF3C7' },
    { icon: '📖', title: 'Stories', desc: 'Short German stories for beginners.', route: 'lesson-list', color: '#D1FAE5' },
  ];

  return `
    <div class="home-screen">
      <div class="home-header">
        <div class="home-avatar-wrap">${emoji}</div>
        <div class="home-greeting">
          <div class="home-greeting-name">Hallo, ${state.avatarType ? state.avatarType.charAt(0).toUpperCase() + state.avatarType.slice(1) : 'Freund'}!</div>
          <div class="home-greeting-sub">📈 Progress ${xpPct}%</div>
        </div>
        <div class="home-notif">🔔<span class="home-notif-dot"></span></div>
      </div>

      <div class="home-body">
        <div class="xp-card">
          <div class="xp-card-trophy">🏆</div>
          <div class="xp-card-title">Level ${state.level}</div>
          <div class="xp-card-sub">This is your first step to greatness!</div>
          <div class="xp-bar-track">
            <div class="xp-bar-fill" id="xp-fill" style="width:${xpPct}%"></div>
          </div>
        </div>

        <p class="section-title">Danh mục</p>
        <div class="category-row">
          ${categories.map((c, i) => `
            <div class="cat-item" data-route="${c.id}">
              <div class="cat-icon${i===0?' active':''}">
                ${c.icon}
              </div>
              <span class="cat-label">${c.label}</span>
            </div>
          `).join('')}
        </div>

        <p class="section-title">Nổi bật</p>
        ${featured.map(f => `
          <div class="feat-card" data-route="${f.route}" style="border-left: 4px solid ${f.icon === '📚' ? '#818CF8' : f.icon === '🎮' ? '#FBBF24' : '#34D399'}">
            <div class="feat-icon" style="background:${f.color}">${f.icon}</div>
            <div class="feat-info">
              <div class="feat-title">${f.title}</div>
              <div class="feat-desc">${f.desc}</div>
            </div>
            <div class="feat-arrow">↗</div>
          </div>
        `).join('')}
      </div>

      <nav class="bottom-nav">
        <button class="nav-item active" data-route="home">
          <span class="nav-icon">🏠</span>Home
        </button>
        <button class="nav-item" data-route="map">
          <span class="nav-icon">🗺️</span>Map
        </button>
        <button class="nav-item" data-route="lesson-list">
          <span class="nav-icon">⏱️</span>Lessons
        </button>
        <button class="nav-item" data-route="home">
          <span class="nav-icon">⚙️</span>Settings
        </button>
      </nav>
    </div>
  `;
}

export function setupHomeHandlers(navigate) {
  document.querySelectorAll('.feat-card[data-route]').forEach(el => {
    el.addEventListener('click', () => navigate(el.dataset.route));
  });
  document.querySelectorAll('.nav-item[data-route]').forEach(el => {
    el.addEventListener('click', () => navigate(el.dataset.route));
  });
  document.querySelectorAll('.cat-item[data-route]').forEach(el => {
    el.addEventListener('click', () => navigate(el.dataset.route));
  });
  // Animate XP bar
  setTimeout(() => {
    const fill = document.getElementById('xp-fill');
    if (fill) fill.style.width = fill.style.width;
  }, 100);
}
