/* ============================================================
   APP.JS — global behaviors shared by every page
   ============================================================ */

/* ---------------- Theme ---------------- */
function initTheme() {
  const saved = localStorage.getItem('ptd-theme');
  const preferred = saved || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', preferred);
}
initTheme(); // run immediately, before paint, to avoid flash

function bindThemeToggle() {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('ptd-theme', next);
  });
}

/* ---------------- Back to top ---------------- */
function initBackToTop() {
  const btn = document.createElement('button');
  btn.className = 'back-to-top';
  btn.id = 'back-to-top';
  btn.setAttribute('aria-label', 'Back to top');
  btn.textContent = '↑';
  document.body.appendChild(btn);

  window.addEventListener('scroll', () => {
    btn.classList.toggle('is-visible', window.scrollY > 480);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ---------------- Copy-code buttons ---------------- */
function initCopyButtons() {
  document.querySelectorAll('.code-block').forEach(block => {
    const btn = block.querySelector('.copy-btn');
    const code = block.querySelector('code');
    if (!btn || !code) return;
    btn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(code.innerText);
      } catch (err) {
        const range = document.createRange();
        range.selectNode(code);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
      }
      const original = btn.textContent;
      btn.textContent = 'copied ✓';
      btn.classList.add('is-copied');
      setTimeout(() => { btn.textContent = original; btn.classList.remove('is-copied'); }, 1600);
    });
  });
}

/* ---------------- Collapsible sections (disclosures) ---------------- */
function initDisclosures() {
  document.querySelectorAll('.disclosure__trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      trigger.closest('.disclosure').classList.toggle('is-open');
    });
  });
}

function initExpandCollapseAll() {
  const expandBtn = document.getElementById('expand-all');
  const collapseBtn = document.getElementById('collapse-all');
  if (expandBtn) expandBtn.addEventListener('click', () => {
    document.querySelectorAll('.disclosure').forEach(d => d.classList.add('is-open'));
  });
  if (collapseBtn) collapseBtn.addEventListener('click', () => {
    document.querySelectorAll('.disclosure').forEach(d => d.classList.remove('is-open'));
  });
}

/* ---------------- Keyboard navigation ---------------- */
function initKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    const tag = (e.target && e.target.tagName) || '';
    const typing = tag === 'INPUT' || tag === 'TEXTAREA';

    // "/" focuses search
    if (e.key === '/' && !typing) {
      e.preventDefault();
      const input = document.getElementById('search-input');
      if (input) input.focus();
    }

    // Escape closes search results / mobile sidebar
    if (e.key === 'Escape') {
      const results = document.getElementById('search-results');
      if (results) results.classList.remove('is-open');
      document.activeElement && document.activeElement.blur();
    }

    // Alt + Right / Alt + Left = next / previous page
    if (e.altKey && e.key === 'ArrowRight') {
      const next = document.querySelector('.page-nav__link--next');
      if (next) window.location.href = next.href;
    }
    if (e.altKey && e.key === 'ArrowLeft') {
      const prev = document.querySelector('.page-nav__link--prev');
      if (prev) window.location.href = prev.href;
    }
  });
}

document.addEventListener('navigation:ready', () => {
  bindThemeToggle();
});

document.addEventListener('DOMContentLoaded', () => {
  initBackToTop();
  initCopyButtons();
  initDisclosures();
  initExpandCollapseAll();
  initKeyboardShortcuts();
});
