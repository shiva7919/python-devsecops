/* ============================================================
   PROGRESS.JS — tracks which module pages the learner has
   visited/completed, stored in localStorage.
   ============================================================ */

const ProgressTracker = (function () {
  const KEY = 'ptd-progress';
  const TRACKED_IDS = ['introduction', 'variables', 'conditions', 'loops', 'functions',
                        'oop', 'constructors', 'generators', 'labs', 'projects', 'assessment'];

  function read() {
    try {
      return JSON.parse(localStorage.getItem(KEY)) || {};
    } catch (e) { return {}; }
  }

  function write(data) {
    localStorage.setItem(KEY, JSON.stringify(data));
  }

  function markVisited(pageId) {
    if (!TRACKED_IDS.includes(pageId)) return;
    const data = read();
    data[pageId] = true;
    write(data);
  }

  function getCompletedSet() {
    const data = read();
    return new Set(Object.keys(data).filter(k => data[k]));
  }

  function percentComplete() {
    const done = getCompletedSet().size;
    return Math.round((done / TRACKED_IDS.length) * 100);
  }

  function reset() {
    localStorage.removeItem(KEY);
  }

  return { markVisited, getCompletedSet, percentComplete, reset, TRACKED_IDS };
})();

/* Mark the current page as visited once the DOM (and body data-page) is ready */
document.addEventListener('DOMContentLoaded', () => {
  const pageId = document.body.getAttribute('data-page');
  if (pageId && pageId !== 'home') {
    ProgressTracker.markVisited(pageId);
  }
  renderProgressWidgets();
});

/* Render any [data-progress-widget] elements found on the page (used on homepage) */
function renderProgressWidgets() {
  document.querySelectorAll('[data-progress-widget]').forEach(el => {
    const pct = ProgressTracker.percentComplete();
    const done = ProgressTracker.getCompletedSet().size;
    const total = ProgressTracker.TRACKED_IDS.length;
    el.innerHTML = `
      <div style="display:flex;align-items:center;gap:0.8rem;">
        <div style="flex:1;height:8px;border-radius:4px;background:var(--border);overflow:hidden;">
          <div style="height:100%;width:${pct}%;background:var(--accent);"></div>
        </div>
        <span style="font-family:var(--font-mono);font-size:0.8rem;color:var(--text-muted);white-space:nowrap;">${done}/${total} modules · ${pct}%</span>
      </div>
    `;
  });
}
