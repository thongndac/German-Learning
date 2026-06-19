// js/screens/complete.js
export function showCompletePopup(score, target, stars, navigate) {
  // Confetti
  const confettiWrap = document.createElement('div');
  confettiWrap.className = 'confetti-wrap';
  const colors = ['#F472B6','#FBBF24','#34D399','#60A5FA','#A78BFA','#F87171'];
  for (let i = 0; i < 60; i++) {
    const p = document.createElement('div');
    p.className = 'confetti-piece';
    p.style.left = Math.random() * 100 + '%';
    p.style.background = colors[Math.floor(Math.random() * colors.length)];
    p.style.width = (Math.random() * 10 + 6) + 'px';
    p.style.height = (Math.random() * 10 + 6) + 'px';
    p.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    p.style.animationDuration = (Math.random() * 2 + 2) + 's';
    p.style.animationDelay = (Math.random() * 2) + 's';
    confettiWrap.appendChild(p);
  }
  document.body.appendChild(confettiWrap);

  const starCount = stars || 3;
  const overlay = document.createElement('div');
  overlay.className = 'complete-overlay';
  overlay.id = 'complete-overlay';
  overlay.innerHTML = `
    <div class="complete-card">
      <div class="complete-stars">
        <span class="complete-star" style="${starCount<2?'filter:grayscale(1)':''}">⭐</span>
        <span class="complete-star mid">⭐</span>
        <span class="complete-star" style="${starCount<3?'filter:grayscale(1)':''}">⭐</span>
      </div>
      <img src="img/mascot.png" style="width:120px;height:120px;margin: -20px auto 10px auto;display:block;animation:bounce 1s infinite alternate;" alt="Luna">
      <div class="complete-level">level 1</div>
      <div class="complete-banner">Complete!</div>
      <div class="complete-stats">
        Target: ${target.toLocaleString()} <span class="check">✔</span><br>
        Your Score: <span class="score">${score.toLocaleString()}</span>
      </div>
      <div class="complete-actions">
        <button class="complete-action-btn home" id="cp-home" title="Home">🏠</button>
        <button class="complete-action-btn next" id="cp-next" title="Next">⏩</button>
        <button class="complete-action-btn retry" id="cp-retry" title="Retry">🔄</button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);

  const cleanup = () => {
    overlay.remove();
    confettiWrap.remove();
  };

  document.getElementById('cp-home')?.addEventListener('click', () => { cleanup(); navigate('home'); });
  document.getElementById('cp-next')?.addEventListener('click', () => { cleanup(); navigate('lesson-list'); });
  document.getElementById('cp-retry')?.addEventListener('click', () => { cleanup(); navigate('lesson'); });
}
