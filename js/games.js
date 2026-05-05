// js/games.js — Games Tab: Hub + 3 Games (English UI)
// ====================================================

// ── DATA ─────────────────────────────────
const GAME_WORDS = [
  {emoji:'🍎',de:'Apfel',  en:'Apple'},
  {emoji:'🐶',de:'Hund',   en:'Dog'},
  {emoji:'🏠',de:'Haus',   en:'House'},
  {emoji:'🌞',de:'Sonne',  en:'Sun'},
  {emoji:'📚',de:'Buch',   en:'Book'},
  {emoji:'🐱',de:'Katze',  en:'Cat'},
  {emoji:'🚗',de:'Auto',   en:'Car'},
  {emoji:'🌳',de:'Baum',   en:'Tree'},
  {emoji:'🍌',de:'Banane', en:'Banana'},
  {emoji:'🎈',de:'Ballon', en:'Balloon'},
];

// ── GAMES HUB ────────────────────────────
window.gamesHTML = function() {
  const games = [
    {id:'drag',   icon:'🎯', title:'Drag & Drop',   desc:'Drag the right word onto the image!', stars:3, color:'#FDE68A', shadow:'#F59E0B'},
    {id:'quiz',   icon:'🧠', title:'Quiz Challenge', desc:'Pick the correct answer!',            stars:5, color:'#A5F3FC', shadow:'#0891B2'},
    {id:'memory', icon:'🃏', title:'Memory Match',   desc:'Flip cards to find the pairs!',       stars:4, color:'#C4B5FD', shadow:'#7C3AED'},
  ];
  return `
  <div style="min-height:100vh;background:var(--bg);padding:20px;padding-bottom:40px;">
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:24px;">
      <button onclick="navigate('home')" style="background:white;border:none;width:44px;height:44px;border-radius:50%;font-size:1.3rem;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,.1);">←</button>
      <h1 style="font-size:1.6rem;font-weight:900;color:var(--text);">🎮 Games</h1>
    </div>
    <p style="color:var(--dim);font-weight:700;margin-bottom:28px;font-size:.95rem;">Choose your game!</p>
    ${games.map(g => `
    <div onclick="navigate('game-${g.id}')"
      style="background:white;border-radius:28px;padding:24px;margin-bottom:20px;cursor:pointer;
        box-shadow:0 8px 0 ${g.shadow}33,0 4px 20px rgba(0,0,0,.08);
        border:3px solid ${g.color};
        transition:transform .15s,box-shadow .15s;
        display:flex;align-items:center;gap:20px;"
      onmousedown="this.style.transform='translateY(6px)';this.style.boxShadow='0 2px 0 ${g.shadow}33'"
      onmouseup="this.style.transform='';this.style.boxShadow='0 8px 0 ${g.shadow}33,0 4px 20px rgba(0,0,0,.08)'"
      ontouchstart="this.style.transform='translateY(6px)'"
      ontouchend="this.style.transform=''">
      <div style="width:80px;height:80px;background:${g.color};border-radius:24px;display:flex;align-items:center;justify-content:center;font-size:2.6rem;flex-shrink:0;">${g.icon}</div>
      <div style="flex:1;">
        <div style="font-size:1.2rem;font-weight:900;margin-bottom:6px;">${g.title}</div>
        <div style="font-size:.85rem;color:var(--dim);font-weight:700;margin-bottom:10px;">${g.desc}</div>
        <div style="display:flex;gap:4px;">${'⭐'.repeat(g.stars)}${'☆'.repeat(5-g.stars)}</div>
      </div>
      <div style="font-size:1.8rem;">▶️</div>
    </div>`).join('')}
  </div>
  <style>
    @keyframes shake{0%,100%{transform:translateX(0)}20%,60%{transform:translateX(-8px)}40%,80%{transform:translateX(8px)}}
    @keyframes glowPulse{0%,100%{box-shadow:0 0 0 0 rgba(124,58,237,.4)}50%{box-shadow:0 0 0 12px rgba(124,58,237,0)}}
  </style>`;
};

// ── DRAG & DROP ──────────────────────────
let ddCurrent = 0, ddScore = 0, ddWords = [];

window.gameDragHTML = function() {
  ddCurrent = 0; ddScore = 0;
  ddWords = [...GAME_WORDS].sort(() => Math.random()-.5).slice(0,6);
  return renderDragQ();
};

function renderDragQ() {
  const q = ddWords[ddCurrent];
  const distractors = GAME_WORDS.filter(w => w.de !== q.de).sort(() => Math.random()-.5).slice(0,3);
  const choices = [...distractors, q].sort(() => Math.random()-.5);
  const pct = Math.round((ddCurrent/ddWords.length)*100);
  return `
  <div id="dd-screen" style="min-height:100vh;background:linear-gradient(160deg,#FDE68A22,#A5F3FC22);padding:20px;display:flex;flex-direction:column;">
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px;">
      <button onclick="navigate('games')" style="background:white;border:none;width:44px;height:44px;border-radius:50%;font-size:1.3rem;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,.1);">✖</button>
      <div style="flex:1;height:12px;background:#E9E5FF;border-radius:6px;overflow:hidden;">
        <div style="height:100%;background:var(--purple);width:${pct}%;border-radius:6px;transition:width .5s;"></div>
      </div>
      <div style="font-size:.85rem;font-weight:900;color:var(--purple);">${ddCurrent}/${ddWords.length}</div>
    </div>
    <p style="text-align:center;font-weight:800;color:var(--dim);margin-bottom:12px;">Tap or drag the correct word! 🎯</p>
    <div id="dd-dropzone"
      style="background:white;border-radius:32px;padding:40px 20px;text-align:center;
        box-shadow:0 8px 32px rgba(0,0,0,.1);margin-bottom:24px;
        border:4px dashed #E9E5FF;flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;
        min-height:240px;transition:border-color .3s,background .3s;"
      ondragover="event.preventDefault();this.style.borderColor='#7C3AED';this.style.background='#EDE9FE'"
      ondragleave="this.style.borderColor='#E9E5FF';this.style.background='white'"
      ondrop="handleDDDrop(event,'${q.de}')">
      <div style="font-size:7rem;margin-bottom:8px;">${q.emoji}</div>
      <div style="font-size:.95rem;color:var(--dim);font-weight:700;">${q.en}</div>
      <div id="dd-feedback" style="margin-top:10px;font-size:1.3rem;font-weight:900;min-height:36px;"></div>
    </div>
    <div style="display:flex;gap:12px;flex-wrap:wrap;justify-content:center;margin-bottom:20px;">
      ${choices.map(c => `
        <div class="dd-word" draggable="true" data-de="${c.de}"
          onclick="handleDDDrop(null,'${q.de}',this.dataset.de)"
          ondragstart="event.dataTransfer.setData('text',this.dataset.de);this.style.opacity='.5'"
          ondragend="this.style.opacity='1'"
          style="background:white;border:3px solid #E9E5FF;border-radius:20px;
            padding:14px 24px;font-size:1.1rem;font-weight:800;cursor:grab;
            box-shadow:0 4px 0 #E9E5FF;transition:transform .15s;user-select:none;">
          ${c.de}
        </div>`).join('')}
    </div>
    <div style="text-align:center;" id="dd-mascot">
      <span style="font-size:3rem;animation:breathe 3s ease-in-out infinite;">${window.getEmoji?getEmoji():'😊'}</span>
    </div>
  </div>`;
}

window.handleDDDrop = function(event, correct, chosen) {
  const val = chosen || (event && event.dataTransfer.getData('text'));
  if (!val) return;
  const dropzone = document.getElementById('dd-dropzone');
  const mascot   = document.getElementById('dd-mascot');
  const feedback = document.getElementById('dd-feedback');
  if (!dropzone) return;
  dropzone.style.borderColor = '#E9E5FF';
  dropzone.style.background  = 'white';
  if (val === correct) {
    ddScore += 100;
    dropzone.style.background   = '#D1FAE5';
    dropzone.style.borderColor  = '#10B981';
    if (feedback) feedback.innerHTML = '✅ Correct! +100';
    if (mascot) mascot.innerHTML = '<span style="font-size:3rem;animation:bounce .6s infinite alternate;">🥳</span>';
    document.querySelectorAll('.dd-word').forEach(b => { b.style.opacity='.4'; b.style.pointerEvents='none'; });
    setTimeout(() => {
      ddCurrent++;
      if (ddCurrent >= ddWords.length) {
        document.getElementById('main-content').innerHTML='';
        showComplete(ddScore, ddWords.length*80, 3);
      } else { document.getElementById('main-content').innerHTML = renderDragQ(); }
    }, 900);
  } else {
    if (feedback) feedback.innerHTML = '❌ Try again!';
    dropzone.style.background  = '#FEE2E2';
    dropzone.style.borderColor = '#EF4444';
    if (mascot) mascot.innerHTML = '<span style="font-size:3rem;animation:shake .4s;">😅</span>';
    const wrongBtn = document.querySelector(`.dd-word[data-de="${val}"]`);
    if (wrongBtn) { wrongBtn.style.borderColor='#EF4444'; wrongBtn.style.background='#FEE2E2'; }
    setTimeout(() => {
      dropzone.style.background='white'; dropzone.style.borderColor='#E9E5FF';
      if (feedback) feedback.innerHTML='';
      if (mascot) mascot.innerHTML=`<span style="font-size:3rem;animation:breathe 3s ease-in-out infinite;">${window.getEmoji?getEmoji():'😊'}</span>`;
      if (wrongBtn) { wrongBtn.style.borderColor='#E9E5FF'; wrongBtn.style.background='white'; }
    }, 1000);
  }
};

// ── QUIZ CHALLENGE ────────────────────────
let qzIdx = 0, qzScore = 0, qzPool = [];

window.gameQuizHTML = function() {
  qzIdx = 0; qzScore = 0;
  qzPool = [...GAME_WORDS].sort(() => Math.random()-.5).slice(0,8);
  return renderQuizQ();
};

function renderQuizQ() {
  const q = qzPool[qzIdx];
  const others = GAME_WORDS.filter(w => w.de !== q.de).sort(() => Math.random()-.5).slice(0,3);
  const choices = [...others, q].sort(() => Math.random()-.5);
  const pct = Math.round((qzIdx/qzPool.length)*100);
  const colors = ['#FDE68A','#A5F3FC','#FCA5A5','#C4B5FD'];
  return `
  <div style="min-height:100vh;background:linear-gradient(160deg,#A5F3FC22,#C4B5FD22);padding:20px;display:flex;flex-direction:column;">
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:24px;">
      <button onclick="navigate('games')" style="background:white;border:none;width:44px;height:44px;border-radius:50%;font-size:1.3rem;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,.1);">✖</button>
      <div style="flex:1;height:12px;background:#E9E5FF;border-radius:6px;overflow:hidden;">
        <div style="height:100%;background:#0891B2;width:${pct}%;border-radius:6px;transition:width .5s;"></div>
      </div>
      <div style="font-size:.85rem;font-weight:900;color:#0891B2;">${qzIdx}/${qzPool.length}</div>
    </div>
    <div style="background:white;border-radius:28px;padding:28px 20px;text-align:center;box-shadow:0 4px 20px rgba(0,0,0,.08);margin-bottom:24px;">
      <p style="font-size:1rem;font-weight:800;color:var(--dim);margin-bottom:8px;">🧠 What does <strong style="color:var(--purple);">"${q.de}"</strong> mean?</p>
      <div style="font-size:5rem;">${q.emoji}</div>
      <button onclick="speak('${q.de}')" style="margin-top:12px;background:#F3F0FF;border:none;border-radius:50%;width:52px;height:52px;font-size:1.4rem;cursor:pointer;">🔊</button>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;flex:1;" id="qz-choices">
      ${choices.map((c,i) => `
        <button class="qz-btn" data-de="${c.de}"
          onclick="handleQuiz('${q.de}',this.dataset.de,this)"
          style="background:${colors[i]};border:3px solid transparent;border-radius:24px;
            padding:20px 12px;font-family:var(--font);font-size:1rem;font-weight:900;
            cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:8px;
            box-shadow:0 6px 0 rgba(0,0,0,.15);transition:transform .15s;min-height:120px;"
          onmousedown="this.style.transform='translateY(4px)'"
          onmouseup="this.style.transform=''">
          <span style="font-size:2.2rem;">${c.emoji}</span>
          <span>${c.en}</span>
        </button>`).join('')}
    </div>
    <div style="text-align:center;padding-top:20px;" id="qz-mascot">
      <span style="font-size:2.8rem;animation:breathe 3s ease-in-out infinite;">${window.getEmoji?getEmoji():'😊'}</span>
    </div>
  </div>`;
}

window.handleQuiz = function(correct, chosen, btn) {
  const allBtns = document.querySelectorAll('.qz-btn');
  allBtns.forEach(b => { b.onclick=null; b.style.opacity='.6'; });
  const mascot = document.getElementById('qz-mascot');
  if (chosen === correct) {
    qzScore += 100;
    btn.style.borderColor='#10B981'; btn.style.opacity='1'; btn.style.transform='scale(1.05)';
    if (mascot) mascot.innerHTML='<span style="font-size:2.8rem;animation:bounce .6s infinite alternate;">🥳</span>';
    setTimeout(() => {
      qzIdx++;
      if (qzIdx >= qzPool.length) { document.getElementById('main-content').innerHTML=''; showComplete(qzScore, qzPool.length*80, 3); }
      else { document.getElementById('main-content').innerHTML = renderQuizQ(); }
    }, 900);
  } else {
    btn.style.borderColor='#EF4444'; btn.style.opacity='1';
    const correct_btn = document.querySelector(`.qz-btn[data-de="${correct}"]`);
    if (correct_btn) correct_btn.style.borderColor='#10B981';
    if (mascot) mascot.innerHTML='<span style="font-size:2.8rem;animation:shake .4s;">😅</span>';
    setTimeout(() => {
      qzIdx++;
      if (qzIdx >= qzPool.length) { document.getElementById('main-content').innerHTML=''; showComplete(qzScore, qzPool.length*80, Math.ceil(qzScore/(qzPool.length*100)*3)); }
      else { document.getElementById('main-content').innerHTML = renderQuizQ(); }
    }, 1200);
  }
};

// ── MEMORY MATCH ─────────────────────────
let memCards=[], memFlipped=[], memMatched=[], memMoves=0, memLock=false;

window.gameMemoryHTML = function() {
  memMoves=0; memFlipped=[]; memMatched=[]; memLock=false;
  const pairs = [...GAME_WORDS].sort(() => Math.random()-.5).slice(0,6);
  memCards = [];
  pairs.forEach((p,i) => {
    memCards.push({id:i*2,   pairId:i, type:'emoji', val:p.emoji, de:p.de});
    memCards.push({id:i*2+1, pairId:i, type:'word',  val:p.de,    de:p.de});
  });
  memCards = memCards.sort(() => Math.random()-.5);
  return renderMemoryBoard();
};

function renderMemoryBoard() {
  return `
  <div style="min-height:100vh;background:linear-gradient(160deg,#C4B5FD22,#FDE68A22);padding:20px;display:flex;flex-direction:column;">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;">
      <button onclick="navigate('games')" style="background:white;border:none;width:44px;height:44px;border-radius:50%;font-size:1.3rem;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,.1);">✖</button>
      <div style="text-align:center;">
        <div style="font-size:1.1rem;font-weight:900;">🃏 Memory Match</div>
        <div style="font-size:.8rem;color:var(--dim);font-weight:700;" id="mem-moves">Moves: ${memMoves}</div>
      </div>
      <div style="font-size:.9rem;font-weight:900;color:var(--purple);" id="mem-pairs">0/6 ✅</div>
    </div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;flex:1;" id="mem-grid">
      ${memCards.map(c => `
        <div class="mem-card" data-id="${c.id}" data-pairid="${c.pairId}"
          onclick="flipMemCard(${c.id})"
          style="aspect-ratio:1;perspective:600px;cursor:pointer;">
          <div class="mem-card-inner" id="mem-inner-${c.id}"
            style="width:100%;height:100%;position:relative;transform-style:preserve-3d;transition:transform .4s;">
            <div style="position:absolute;inset:0;background:var(--purple);border-radius:20px;
              display:flex;align-items:center;justify-content:center;font-size:2rem;
              backface-visibility:hidden;-webkit-backface-visibility:hidden;
              box-shadow:0 4px 0 var(--purple-dark);">🌟</div>
            <div style="position:absolute;inset:0;background:white;border-radius:20px;
              display:flex;align-items:center;justify-content:center;
              font-size:${c.type==='emoji'?'2.4rem':'1rem'};font-weight:900;
              backface-visibility:hidden;-webkit-backface-visibility:hidden;
              transform:rotateY(180deg);color:var(--text);
              box-shadow:0 4px 0 #E9E5FF;text-align:center;padding:4px;">
              ${c.val}
            </div>
          </div>
        </div>`).join('')}
    </div>
    <div style="text-align:center;padding-top:16px;" id="mem-mascot">
      <span style="font-size:2.6rem;animation:breathe 3s ease-in-out infinite;">${window.getEmoji?getEmoji():'😊'}</span>
    </div>
  </div>`;
}

window.flipMemCard = function(id) {
  if (memLock||memMatched.includes(id)||memFlipped.includes(id)) return;
  const inner = document.getElementById('mem-inner-'+id);
  if (!inner) return;
  inner.style.transform='rotateY(180deg)';
  memFlipped.push(id);
  if (memFlipped.length===2) {
    memLock=true; memMoves++;
    const movesEl=document.getElementById('mem-moves');
    if (movesEl) movesEl.textContent='Moves: '+memMoves;
    const [id1,id2]=memFlipped;
    const c1=memCards.find(c=>c.id===id1), c2=memCards.find(c=>c.id===id2);
    const matched=c1.pairId===c2.pairId&&c1.type!==c2.type;
    setTimeout(() => {
      if (matched) {
        memMatched.push(id1,id2);
        [id1,id2].forEach(cid=>{
          const inn=document.getElementById('mem-inner-'+cid);
          if (inn) inn.querySelector('div:last-child').style.background='#D1FAE5';
        });
        const pairsEl=document.getElementById('mem-pairs');
        if (pairsEl) pairsEl.textContent=(memMatched.length/2)+'/6 ✅';
        const mascot=document.getElementById('mem-mascot');
        if (mascot) mascot.innerHTML='<span style="font-size:2.6rem;animation:bounce .6s infinite alternate;">🥳</span>';
        setTimeout(()=>{ if(mascot) mascot.innerHTML=`<span style="font-size:2.6rem;animation:breathe 3s ease-in-out infinite;">${window.getEmoji?getEmoji():'😊'}</span>`; },1200);
        if (memMatched.length===memCards.length) {
          setTimeout(()=>{ addStars(3); document.getElementById('main-content').innerHTML=''; showComplete(600-memMoves*10,400,3); },600);
        }
      } else {
        [id1,id2].forEach(cid=>{ const inn=document.getElementById('mem-inner-'+cid); if(inn){inn.style.transform=''; inn.querySelector('div:last-child').style.background='white';} });
        const mascot=document.getElementById('mem-mascot');
        if(mascot) mascot.innerHTML='<span style="font-size:2.6rem;animation:shake .4s;">😅</span>';
        setTimeout(()=>{ if(mascot) mascot.innerHTML=`<span style="font-size:2.6rem;animation:breathe 3s ease-in-out infinite;">${window.getEmoji?getEmoji():'😊'}</span>`; },1000);
      }
      memFlipped=[]; memLock=false;
    },700);
  }
};
