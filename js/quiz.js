/* ============================================================
   QUIZ.JS — renders an interactive multiple-choice quiz into
   any element with id="quiz-app", driven by a page-defined
   `QUIZ_DATA` array of { question, options[], correctIndex, explanation }.
   ============================================================ */

function initQuiz() {
  const mount = document.getElementById('quiz-app');
  if (!mount || typeof QUIZ_DATA === 'undefined' || !QUIZ_DATA.length) return;

  let index = 0;
  let score = 0;
  let answered = false;

  function renderQuestion() {
    const q = QUIZ_DATA[index];
    answered = false;
    mount.innerHTML = `
      <div class="quiz">
        <div class="quiz__progress">question ${index + 1} / ${QUIZ_DATA.length}</div>
        <div class="quiz__question">${q.question}</div>
        <ul class="quiz__options">
          ${q.options.map((opt, i) => `<li class="quiz__option" data-i="${i}" tabindex="0" role="button">${opt}</li>`).join('')}
        </ul>
        <div class="quiz__feedback" id="quiz-feedback"></div>
        <div class="quiz__nav">
          <button class="btn btn--ghost btn--sm" id="quiz-restart">Restart</button>
          <button class="btn btn--sm" id="quiz-next" disabled>${index === QUIZ_DATA.length - 1 ? 'See score' : 'Next question →'}</button>
        </div>
      </div>
    `;

    mount.querySelectorAll('.quiz__option').forEach(opt => {
      opt.addEventListener('click', () => selectAnswer(parseInt(opt.dataset.i, 10)));
      opt.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); selectAnswer(parseInt(opt.dataset.i, 10)); }
      });
    });
    mount.querySelector('#quiz-next').addEventListener('click', next);
    mount.querySelector('#quiz-restart').addEventListener('click', restart);
  }

  function selectAnswer(i) {
    if (answered) return;
    answered = true;
    const q = QUIZ_DATA[index];
    const options = mount.querySelectorAll('.quiz__option');
    const feedback = mount.querySelector('#quiz-feedback');
    const nextBtn = mount.querySelector('#quiz-next');

    options.forEach((opt, idx) => {
      if (idx === q.correctIndex) opt.classList.add('is-correct');
      else if (idx === i) opt.classList.add('is-incorrect');
    });

    if (i === q.correctIndex) {
      score++;
      feedback.textContent = '✓ Correct — ' + (q.explanation || '');
      feedback.className = 'quiz__feedback correct';
    } else {
      feedback.textContent = '✗ Not quite — ' + (q.explanation || '');
      feedback.className = 'quiz__feedback incorrect';
    }
    nextBtn.disabled = false;
  }

  function next() {
    if (index < QUIZ_DATA.length - 1) {
      index++;
      renderQuestion();
    } else {
      renderScore();
    }
  }

  function renderScore() {
    const pct = Math.round((score / QUIZ_DATA.length) * 100);
    mount.innerHTML = `
      <div class="quiz">
        <div class="quiz__score">
          <div class="big">${score}/${QUIZ_DATA.length}</div>
          <p>${pct}% correct${pct >= 80 ? ' — nice work.' : ' — worth a re-read before moving on.'}</p>
          <button class="btn btn--sm" id="quiz-restart-2">Retake quiz</button>
        </div>
      </div>
    `;
    mount.querySelector('#quiz-restart-2').addEventListener('click', restart);
  }

  function restart() {
    index = 0;
    score = 0;
    renderQuestion();
  }

  renderQuestion();
}

document.addEventListener('DOMContentLoaded', initQuiz);
