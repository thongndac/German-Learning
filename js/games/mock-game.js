// js/games/mock-game.js
import { getState, setMood, addStars } from '../state.js';
import { showCompletePopup } from '../screens/complete.js';

const QUESTIONS = [
  { emoji: '🍎', german: 'Apfel',   viet: 'Quả táo',  choices: ['Apfel','Banane','Brot','Milch'] },
  { emoji: '🐶', german: 'Hund',    viet: 'Con chó',   choices: ['Katze','Hund','Vogel','Fisch'] },
  { emoji: '🏠', german: 'Haus',    viet: 'Ngôi nhà',  choices: ['Schule','Haus','Auto','Buch'] },
  { emoji: '🌈', german: 'Regenbogen', viet: 'Cầu vồng', choices: ['Regen','Regenbogen','Sonne','Wolke'] },
  { emoji: '📚', german: 'Bücher',  viet: 'Sách',      choices: ['Stift','Bücher','Tafel','Heft'] },
];

let currentQ = 0;
let score = 0;
let navigateFn;

export function renderMockGame() {
  currentQ = 0;
  score = 0;
  return renderQuestion();
}

function renderQuestion() {
  const q = QUESTIONS[currentQ];
  const progress = Math.round(((currentQ) / QUESTIONS.length) * 100);
  const shuffled = [...q.choices].sort(() => Math.random() - 0.5);

  return `
    <div class="game-screen" style="display:flex;flex-direction:column;min-height:100vh;padding:20px;background:var(--bg);">
      <!-- Top bar -->
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:28px;">
        <button id="btn-back-game" style="background:none;border:none;font-size:1.6rem;cursor:pointer;padding:4px;">✖️</button>
        <div style="flex:1;height:14px;background:#E9E5FF;border-radius:7px;overflow:hidden;">
          <div style="height:100%;background:var(--purple);width:${progress}%;border-radius:7px;transition:width 0.5s ease;"></div>
        </div>
        <div style="font-size:0.85rem;font-weight:900;color:var(--purple);">${currentQ}/${QUESTIONS.length}</div>
      </div>

      <!-- Word card -->
      <div style="background:white;border-radius:28px;padding:36px 24px;text-align:center;box-shadow:0 8px 32px rgba(124,58,237,0.12);margin-bottom:28px;border:2px solid #EDE9FE;">
        <div style="font-size:5rem;margin-bottom:16px;">${q.emoji}</div>
        <h2 style="font-size:2.4rem;font-weight:900;color:var(--purple);margin-bottom:8px;">${q.german}</h2>
        <div style="font-size:1.1rem;color:var(--dim);font-weight:700;">${q.viet}</div>
        <button id="btn-speak" style="margin-top:20px;background:#F3F0FF;border:none;border-radius:50%;width:60px;height:60px;font-size:1.6rem;cursor:pointer;box-shadow:0 4px 12px rgba(0,0,0,0.08);">🔊</button>
      </div>

      <!-- Choices -->
      <p style="text-align:center;font-weight:800;color:var(--dim);margin-bottom:16px;">Chọn đáp án đúng:</p>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;" id="choices-grid">
        ${shuffled.map(c => `
          <button class="choice-btn" data-correct="${c === q.german}" style="
            background:white;border:3px solid #E9E5FF;border-radius:20px;
            padding:18px 12px;font-family:var(--font);font-size:1.05rem;font-weight:800;
            color:var(--text);cursor:pointer;
            box-shadow:0 4px 0 #E9E5FF;
            transition:all 0.2s;
          ">${c}</button>
        `).join('')}
      </div>

      <!-- Mascot -->
      <div style="display:flex;align-items:flex-end;gap:12px;margin-top:auto;padding-top:24px;" id="game-mascot-container">
        <img src="img/mascot.png" id="game-mascot-img" style="width:80px;height:80px;object-fit:contain;animation:breathe 3s ease-in-out infinite;" alt="Luna">
        <div id="game-mascot-bubble" style="background:white;padding:10px 16px;border-radius:16px;border-bottom-left-radius:0;box-shadow:0 4px 12px rgba(0,0,0,0.08);font-weight:800;color:var(--purple);font-size:1rem;opacity:0;transform:translateY(10px);transition:all 0.3s;position:relative;">
          <span id="bubble-text"></span>
          <div style="position:absolute;left:-8px;bottom:0;width:0;height:0;border-bottom:12px solid white;border-left:12px solid transparent;"></div>
        </div>
      </div>
    </div>
  `;
}

export function setupGameHandlers(navigate) {
  navigateFn = navigate;

  document.getElementById('btn-back-game')?.addEventListener('click', () => navigate('lesson-list'));
  document.getElementById('btn-speak')?.addEventListener('click', () => {
    const q = QUESTIONS[currentQ];
    if ('speechSynthesis' in window) {
      const utter = new SpeechSynthesisUtterance(q.german);
      utter.lang = 'de-DE';
      speechSynthesis.speak(utter);
    }
  });

  document.querySelectorAll('.choice-btn').forEach(btn => {
    btn.addEventListener('click', handleAnswer);
  });
}

function handleAnswer(e) {
  const btn = e.currentTarget;
  const correct = btn.dataset.correct === 'true';
  const mascotImg = document.getElementById('game-mascot-img');
  const bubble = document.getElementById('game-mascot-bubble');
  const bubbleText = document.getElementById('bubble-text');

  document.querySelectorAll('.choice-btn').forEach(b => {
    b.removeEventListener('click', handleAnswer);
    b.style.cursor = 'default';
    if (b.dataset.correct === 'true') {
      b.style.background = '#D1FAE5';
      b.style.borderColor = '#10B981';
      b.style.color = '#065F46';
    }
  });

  if (correct) {
    score += 100;
    btn.style.background = '#D1FAE5';
    btn.style.borderColor = '#10B981';
    if (mascotImg) mascotImg.style.animation = 'bounce 0.6s infinite alternate';
    if (bubbleText) bubbleText.innerText = 'Toll! 🥳';
    if (bubble) { bubble.style.opacity = '1'; bubble.style.transform = 'translateY(0)'; }
    setTimeout(nextQuestion, 1500);
  } else {
    btn.style.background = '#FEE2E2';
    btn.style.borderColor = '#EF4444';
    btn.style.color = '#991B1B';
    if (mascotImg) mascotImg.style.animation = 'droop 1s ease-in-out infinite';
    if (bubbleText) bubbleText.innerText = 'Versuch\'s nochmal! 😢';
    if (bubble) { bubble.style.opacity = '1'; bubble.style.transform = 'translateY(0)'; }
    
    setTimeout(() => {
      if (mascotImg) mascotImg.style.animation = 'breathe 3s ease-in-out infinite';
      if (bubble) { bubble.style.opacity = '0'; bubble.style.transform = 'translateY(10px)'; }
    }, 2000);
    setTimeout(nextQuestion, 2300);
  }
}

function nextQuestion() {
  currentQ++;
  const main = document.getElementById('main-content');
  if (!main) return;

  if (currentQ >= QUESTIONS.length) {
    addStars(3);
    main.innerHTML = '';
    showCompletePopup(score + 100, 240, 3, navigateFn);
  } else {
    main.innerHTML = renderQuestion();
    setupGameHandlers(navigateFn);
  }
}
