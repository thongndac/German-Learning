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
    <div class="game-screen" style="display:flex;flex-direction:column;min-height:100vh;padding:24px 20px;background:linear-gradient(135deg, #F3F0FF 0%, #E0E7FF 100%);font-family:var(--font);">
      
      <!-- Top bar -->
      <div style="display:flex;align-items:center;gap:16px;margin-bottom:32px;">
        <button id="btn-back-game" style="background:white;border:none;width:44px;height:44px;border-radius:14px;font-size:1.4rem;cursor:pointer;box-shadow:0 4px 12px rgba(0,0,0,0.05);display:flex;align-items:center;justify-content:center;color:var(--text);transition:transform 0.2s;">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>
        <div style="flex:1;height:16px;background:rgba(255,255,255,0.6);border-radius:8px;overflow:hidden;box-shadow:inset 0 2px 4px rgba(0,0,0,0.02);">
          <div style="height:100%;background:linear-gradient(90deg, #8B5CF6, #6D28D9);width:${progress}%;border-radius:8px;transition:width 0.6s cubic-bezier(0.4, 0, 0.2, 1);box-shadow:0 2px 8px rgba(124,58,237,0.4);"></div>
        </div>
        <div style="font-size:1rem;font-weight:900;color:var(--purple);background:white;padding:6px 14px;border-radius:12px;box-shadow:0 4px 12px rgba(0,0,0,0.05);">${currentQ}/${QUESTIONS.length}</div>
      </div>

      <!-- Mascot & Bubble -->
      <div style="display:flex;align-items:center;gap:16px;margin-bottom:24px;position:relative;" id="game-mascot-container">
        <div style="position:relative;width:72px;height:72px;border-radius:50%;padding:4px;background:white;box-shadow:0 8px 24px rgba(124,58,237,0.15);animation:float 4s ease-in-out infinite;">
          <img src="img/mascot.png" id="game-mascot-img" style="width:100%;height:100%;border-radius:50%;object-fit:cover;" alt="Luna">
        </div>
        <div id="game-mascot-bubble" style="background:white;padding:14px 20px;border-radius:20px;border-top-left-radius:0;box-shadow:0 8px 24px rgba(0,0,0,0.08);font-weight:800;color:var(--purple);font-size:1.05rem;opacity:1;transform:translateY(0);transition:all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);position:relative;flex:1;">
          <span id="bubble-text">Was bedeutet dieses Wort? 🤔</span>
          <div style="position:absolute;left:-10px;top:0;width:0;height:0;border-top:14px solid white;border-left:14px solid transparent;"></div>
        </div>
      </div>

      <!-- Word card -->
      <div style="background:rgba(255,255,255,0.9);backdrop-filter:blur(10px);border-radius:32px;padding:40px 24px;text-align:center;box-shadow:0 12px 40px rgba(124,58,237,0.1);margin-bottom:32px;border:2px solid rgba(255,255,255,1);position:relative;overflow:hidden;">
        <div style="position:absolute;top:-40px;right:-40px;width:120px;height:120px;background:radial-gradient(circle, rgba(167,139,250,0.2) 0%, rgba(255,255,255,0) 70%);border-radius:50%;"></div>
        
        <div style="font-size:6rem;margin-bottom:20px;filter:drop-shadow(0 10px 15px rgba(0,0,0,0.1));animation:breathe 4s infinite;">${q.emoji}</div>
        <h2 style="font-size:2.8rem;font-weight:900;color:var(--text);margin-bottom:12px;letter-spacing:-1px;">${q.german}</h2>
        <div style="font-size:1.2rem;color:var(--dim);font-weight:700;background:#F3F4F6;display:inline-block;padding:6px 16px;border-radius:20px;">${q.viet}</div>
        
        <button id="btn-speak" style="margin-top:28px;background:linear-gradient(135deg, #F5F3FF, #EDE9FE);border:none;border-radius:50%;width:68px;height:68px;cursor:pointer;box-shadow:0 8px 20px rgba(124,58,237,0.15);display:flex;align-items:center;justify-content:center;color:var(--purple);transition:transform 0.2s, box-shadow 0.2s;" onmousedown="this.style.transform='scale(0.92)'" onmouseup="this.style.transform='scale(1)'">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M13 5.5v13l-5-4H4v-5h4l5-4zM16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>
        </button>
      </div>

      <!-- Choices -->
      <p style="text-align:center;font-weight:900;color:var(--dim);margin-bottom:16px;font-size:1rem;text-transform:uppercase;letter-spacing:1px;">Wähle die richtige Antwort</p>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;" id="choices-grid">
        ${shuffled.map(c => `
          <button class="choice-btn" data-correct="${c === q.german}" style="
            background:white;border:none;border-radius:24px;
            padding:20px 16px;font-family:var(--font);font-size:1.15rem;font-weight:800;
            color:var(--text);cursor:pointer;
            box-shadow:0 6px 0 #E5E7EB, 0 8px 16px rgba(0,0,0,0.04);
            transition:all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
            position:relative;overflow:hidden;
          " onmousedown="this.style.transform='translateY(4px)';this.style.boxShadow='0 2px 0 #E5E7EB, 0 2px 4px rgba(0,0,0,0.04)';" onmouseup="this.style.transform='';this.style.boxShadow='0 6px 0 #E5E7EB, 0 8px 16px rgba(0,0,0,0.04)';">${c}</button>
        `).join('')}
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
      window.speechSynthesis.cancel(); // Cancel any ongoing speech to prevent queuing
      const utter = new SpeechSynthesisUtterance(q.german);
      utter.lang = 'de-DE';
      utter.rate = 0.85; // Slightly slower for language learners
      
      // Try to find a high-quality German voice (e.g., Google's)
      const voices = window.speechSynthesis.getVoices();
      const germanVoice = voices.find(v => v.lang.startsWith('de') && (v.name.includes('Google') || v.name.includes('Premium'))) 
                       || voices.find(v => v.lang.startsWith('de'));
      if (germanVoice) {
        utter.voice = germanVoice;
      }
      
      window.speechSynthesis.speak(utter);
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
    if (bubbleText) bubbleText.innerHTML = 'Fantastisch! 🥳<br><span style="font-size:0.85rem;color:var(--dim);">Tuyệt vời!</span>';
    if (bubble) { bubble.style.background = '#D1FAE5'; bubble.style.color = '#065F46'; bubble.querySelector('div').style.borderTopColor = '#D1FAE5'; bubble.style.transform = 'scale(1.05)'; }
    setTimeout(nextQuestion, 1500);
  } else {
    btn.style.background = '#FEE2E2';
    btn.style.borderColor = '#EF4444';
    btn.style.color = '#991B1B';
    if (mascotImg) mascotImg.style.animation = 'droop 1s ease-in-out infinite';
    if (bubbleText) bubbleText.innerHTML = 'Falsch! 😢<br><span style="font-size:0.85rem;color:var(--dim);">Sai rồi!</span>';
    if (bubble) { bubble.style.background = '#FEE2E2'; bubble.style.color = '#991B1B'; bubble.querySelector('div').style.borderTopColor = '#FEE2E2'; bubble.style.transform = 'scale(0.95)'; }
    
    setTimeout(() => {
      if (mascotImg) mascotImg.style.animation = 'float 4s ease-in-out infinite';
      if (bubbleText) bubbleText.innerText = 'Versuch es nochmal! 💪';
      if (bubble) { bubble.style.background = 'white'; bubble.style.color = 'var(--purple)'; bubble.querySelector('div').style.borderTopColor = 'white'; bubble.style.transform = 'scale(1)'; }
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
