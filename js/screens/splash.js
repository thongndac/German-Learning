// js/screens/splash.js
export function renderSplash() {
  return `
    <div class="splash">
      <div class="splash-bg-blob b1"></div>
      <div class="splash-bg-blob b2"></div>
      <div class="splash-bg-blob b3"></div>

      <div class="splash-stars">
        <span class="splash-star" style="top:12%;left:8%;animation-delay:0s">⭐</span>
        <span class="splash-star" style="top:18%;right:12%;animation-delay:0.5s">✨</span>
        <span class="splash-star" style="top:35%;left:5%;animation-delay:1s">💫</span>
        <span class="splash-star" style="top:40%;right:5%;animation-delay:0.3s">⭐</span>
        <span class="splash-star" style="top:55%;left:15%;animation-delay:0.8s">✨</span>
      </div>

      <img class="splash-mascot" src="img/mascot.png" alt="Mascot" />

      <div class="splash-content">
        <div class="splash-hi">👋 Hallo!</div>
        <h1 class="splash-title">
          Let's Start Your<br>
          <span>Lernen</span><br>
          Adventure!
        </h1>
        <p class="splash-sub">🇩🇪 Học tiếng Đức cùng Luna</p>
        <div class="splash-actions">
          <button class="btn-skip" id="btn-skip">Bỏ qua</button>
          <button class="btn-start" id="btn-start-learning">
            Start Learning
            <span class="btn-start-arrow">→</span>
          </button>
        </div>
      </div>
    </div>
  `;
}

export function setupSplashHandlers(navigate) {
  document.getElementById('btn-start-learning')?.addEventListener('click', () => {
    navigate('selection_or_home');
  });
  document.getElementById('btn-skip')?.addEventListener('click', () => {
    navigate('selection_or_home');
  });
}
