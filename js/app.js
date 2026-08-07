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

/* ---------------- Scroll Reveal Engine ---------------- */
function initScrollReveal() {
  const targets = document.querySelectorAll('.section, .card, .roadmap__step, .hero__inner');
  targets.forEach(el => el.classList.add('reveal-on-scroll'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  targets.forEach(el => observer.observe(el));
}

/* ---------------- 3D Card Tilt Effect ---------------- */
function initCardTilt() {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
      card.style.setProperty('--mouse-x', `${(x / rect.width * 100).toFixed(1)}%`);
      card.style.setProperty('--mouse-y', `${(y / rect.height * 100).toFixed(1)}%`);
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
  });
}

/* ---------------- Animated Counter Logic ---------------- */
function initAnimatedCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const targetNum = parseInt(el.getAttribute('data-counter'), 10);
        if (isNaN(targetNum)) return;
        let start = 0;
        const duration = 1200;
        const stepTime = 30;
        const steps = duration / stepTime;
        const increment = targetNum / steps;

        const timer = setInterval(() => {
          start += increment;
          if (start >= targetNum) {
            el.textContent = targetNum;
            clearInterval(timer);
          } else {
            el.textContent = Math.floor(start);
          }
        }, stepTime);

        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
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
  initScrollReveal();
  initCardTilt();
  initAnimatedCounters();
});

