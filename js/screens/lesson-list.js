// js/screens/lesson-list.js
const LESSONS = [
  { id:'l1', num:'One',   title:'Begrüßung',        sub:'Greetings',     desc:'Say Hallo, Guten Morgen, and more!', total:5,  done:0, unlocked:true },
  { id:'l2', num:'Two',   title:'Zahlen 1–10',       sub:'Numbers',       desc:'Count from 1 to 10 auf Deutsch.',    total:6,  done:0, unlocked:false },
  { id:'l3', num:'Three', title:'Farben',            sub:'Colors',        desc:'Learn Rot, Blau, Grün, and more.',   total:6,  done:0, unlocked:false },
  { id:'l4', num:'Four',  title:'Familie',           sub:'Family',        desc:'Mutter, Vater, Bruder, Schwester.', total:8,  done:0, unlocked:false },
  { id:'l5', num:'Five',  title:'Tiere',             sub:'Animals',       desc:'Name animals in German.',            total:10, done:0, unlocked:false },
];

export function renderLessonList() {
  return `
    <div class="lesson-screen">
      <div class="lesson-header">
        <button class="lesson-back" id="btn-lesson-back">←</button>
        <h1 class="lesson-title">Pick a New<br><em>Learning Lesson</em></h1>

        <div class="search-bar">
          <span>🔍</span>
          <input type="text" placeholder="Search lessons..." id="lesson-search" />
        </div>

        <div class="filter-tabs">
          <button class="tab-pill active" data-filter="all">All</button>
          <button class="tab-pill" data-filter="beginners">Beginners</button>
          <button class="tab-pill" data-filter="intermediate">Intermediate</button>
          <button class="tab-pill" data-filter="advanced">Advanced</button>
        </div>
      </div>

      <div class="lesson-list" id="lesson-list-container">
        ${LESSONS.map(l => renderCard(l)).join('')}
      </div>
    </div>
  `;
}

function renderCard(l) {
  const actionBtn = l.unlocked
    ? `<button class="btn-lesson-action start" data-id="${l.id}">▶ Start</button>`
    : `<button class="btn-lesson-action locked">🔒 Unlock</button>`;
  return `
    <div class="lesson-card" data-id="${l.id}" data-unlocked="${l.unlocked}">
      <div>
        <div class="lesson-card-label">Lesson ${l.num} · ${l.sub}</div>
        <div class="lesson-card-title">${l.title}</div>
        <div class="lesson-card-desc">${l.desc}</div>
      </div>
      <div class="lesson-card-badge">${l.done}/${l.total}</div>
      <div class="lesson-card-footer">
        ${actionBtn}
      </div>
    </div>
  `;
}

export function setupLessonListHandlers(navigate) {
  document.getElementById('btn-lesson-back')?.addEventListener('click', () => navigate('home'));

  document.querySelectorAll('.tab-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  document.querySelectorAll('.btn-lesson-action.start').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      navigate('lesson');
    });
  });

  document.querySelectorAll('.lesson-card[data-unlocked="true"]').forEach(card => {
    card.addEventListener('click', () => navigate('lesson'));
  });
}
