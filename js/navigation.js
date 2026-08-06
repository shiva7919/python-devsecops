/* ============================================================
   NAVIGATION.JS
   Single source of truth for site structure. Renders the top
   bar, sidebar tree, breadcrumb path, and prev/next controls
   from one config so every page stays in sync.
   ============================================================ */

const SITE_TITLE = 'python-training-docs';

/* Each entry: id, title, file path (root-relative), group */
const NAV_DATA = [
  { id: 'home',         title: 'Home',                          file: 'index.html',              group: null },
  { id: 'introduction', title: 'Introduction',                  file: 'pages/introduction.html', group: 'Getting Started' },
  { id: 'variables',    title: '01 · Variables',                file: 'pages/variables.html',    group: 'Python Basics' },
  { id: 'conditions',   title: '02 · Conditions',                file: 'pages/conditions.html',   group: 'Python Basics' },
  { id: 'loops',        title: '03 · Loops',                     file: 'pages/loops.html',        group: 'Python Basics' },
  { id: 'functions',    title: '04 · Functions',                 file: 'pages/functions.html',    group: 'Python Basics' },
  { id: 'oop',          title: '05 · Object-Oriented Programming', file: 'pages/oop.html',        group: 'Object-Oriented Programming' },
  { id: 'constructors', title: '06 · Constructors',              file: 'pages/constructors.html', group: 'Object-Oriented Programming' },
  { id: 'generators',   title: '07 · Generators',                 file: 'pages/generators.html',  group: 'Object-Oriented Programming' },
  { id: 'labs',         title: 'Hands-on Labs',                  file: 'pages/labs.html',         group: 'Practice' },
  { id: 'projects',     title: 'Mini Projects',                  file: 'pages/projects.html',     group: 'Practice' },
  { id: 'assessment',   title: 'Assessment',                     file: 'pages/assessment.html',   group: 'Practice' },
];

/* Resolve the site root relative to whatever page is currently loaded */
function siteRoot() {
  return document.body.getAttribute('data-root') || '';
}

function pageUrl(entry) {
  return siteRoot() + entry.file;
}

function currentPageId() {
  return document.body.getAttribute('data-page') || 'home';
}

/* ---------------- Top bar ---------------- */
function renderTopbar() {
  const mount = document.getElementById('site-header');
  if (!mount) return;
  const root = siteRoot();

  mount.innerHTML = `
    <header class="topbar">
      <button class="topbar__menu-btn" id="menu-toggle" aria-label="Toggle navigation" aria-expanded="false">≡</button>
      <a class="topbar__brand" href="${root}index.html">
        <span class="status-dot" aria-hidden="true"></span>
        ${SITE_TITLE}
      </a>
      <div class="topbar__search">
        <input type="search" id="search-input" placeholder="Search docs…  ( / )" autocomplete="off" aria-label="Search documentation">
        <div class="search-results" id="search-results"></div>
      </div>
      <div class="topbar__spacer"></div>
      <div class="topbar__actions">
        <button class="icon-btn" id="theme-toggle" aria-label="Toggle dark mode" title="Toggle dark / light mode">◐</button>
      </div>
    </header>
    <div class="reading-progress"><div class="reading-progress__bar" id="reading-progress-bar"></div></div>
    <div class="sidebar-overlay" id="sidebar-overlay"></div>
  `;
}

/* ---------------- Sidebar ---------------- */
function renderSidebar() {
  const mount = document.getElementById('site-sidebar');
  if (!mount) return;
  const root = siteRoot();
  const current = currentPageId();
  const completed = (window.ProgressTracker && ProgressTracker.getCompletedSet()) || new Set();

  const groups = [];
  NAV_DATA.forEach(item => {
    if (!item.group) return;
    let g = groups.find(g => g.name === item.group);
    if (!g) { g = { name: item.group, items: [] }; groups.push(g); }
    g.items.push(item);
  });

  let html = `<nav aria-label="Documentation sections">
    <div class="sidebar__group">
      <a class="sidebar__link${current === 'home' ? ' is-active' : ''}" href="${root}index.html">home.html</a>
    </div>`;

  groups.forEach(g => {
    html += `<div class="sidebar__group">
      <div class="sidebar__group-title">${g.name}</div>`;
    g.items.forEach(item => {
      const active = item.id === current ? ' is-active' : '';
      const done = completed.has(item.id) ? '<span class="check">✓</span>' : '';
      html += `<a class="sidebar__link${active}" href="${pageUrl(item)}" data-page-id="${item.id}">${item.title.toLowerCase().replace(/\s+/g, '-')}.py${done}</a>`;
    });
    html += `</div>`;
  });

  html += `</nav>`;
  mount.innerHTML = html;
  mount.id = 'sidebar';
  mount.classList.add('sidebar');
}

/* ---------------- Breadcrumb ---------------- */
function renderBreadcrumb() {
  const mount = document.getElementById('breadcrumb');
  if (!mount) return;
  const root = siteRoot();
  const current = NAV_DATA.find(n => n.id === currentPageId());
  if (!current || current.id === 'home') { mount.style.display = 'none'; return; }

  mount.innerHTML = `
    <a href="${root}index.html">python-training-docs</a>
    <span class="sep">/</span>
    ${current.group ? `<span>${current.group}</span><span class="sep">/</span>` : ''}
    <span class="current">${current.title}</span>
  `;
}

/* ---------------- Prev / Next ---------------- */
function renderPageNav() {
  const mount = document.getElementById('page-nav');
  if (!mount) return;
  const flow = NAV_DATA.filter(n => n.id !== 'home');
  const idx = flow.findIndex(n => n.id === currentPageId());
  if (idx === -1) { mount.style.display = 'none'; return; }
  const prev = flow[idx - 1];
  const next = flow[idx + 1];
  const root = siteRoot();

  mount.innerHTML = `
    ${prev ? `<a class="page-nav__link page-nav__link--prev" href="${pageUrl(prev)}">
      <span class="page-nav__label">← Previous</span>
      <span class="page-nav__title">${prev.title}</span>
    </a>` : `<span></span>`}
    ${next ? `<a class="page-nav__link page-nav__link--next" href="${pageUrl(next)}">
      <span class="page-nav__label">Next →</span>
      <span class="page-nav__title">${next.title}</span>
    </a>` : `<span></span>`}
  `;
}

/* ---------------- Mobile sidebar toggle ---------------- */
function bindMobileNav() {
  const btn = document.getElementById('menu-toggle');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  if (!btn || !sidebar) return;

  function close() {
    sidebar.classList.remove('is-open');
    overlay.classList.remove('is-open');
    btn.setAttribute('aria-expanded', 'false');
  }
  function open() {
    sidebar.classList.add('is-open');
    overlay.classList.add('is-open');
    btn.setAttribute('aria-expanded', 'true');
  }
  btn.addEventListener('click', () => {
    sidebar.classList.contains('is-open') ? close() : open();
  });
  overlay && overlay.addEventListener('click', close);

  sidebar.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
}

/* ---------------- Sidebar collapse (desktop) ---------------- */
function bindSidebarCollapse() {
  // Keyboard shortcut: "[" collapses/expands sidebar on desktop
  document.addEventListener('keydown', (e) => {
    if (e.key === '[' && !isTypingContext(e)) {
      const sidebar = document.getElementById('sidebar');
      if (sidebar) sidebar.classList.toggle('is-collapsed');
    }
  });
}

function isTypingContext(e) {
  const tag = (e.target && e.target.tagName) || '';
  return tag === 'INPUT' || tag === 'TEXTAREA';
}

/* ---------------- Scroll spy for in-page h2 sections ---------------- */
function bindScrollSpy() {
  const headings = document.querySelectorAll('.content h2[id]');
  if (!headings.length) return;
  const bar = document.getElementById('reading-progress-bar');
  window.addEventListener('scroll', () => {
    const doc = document.documentElement;
    const scrollPct = (window.scrollY) / (doc.scrollHeight - doc.clientHeight) * 100;
    if (bar) bar.style.width = Math.min(100, Math.max(0, scrollPct)) + '%';
  }, { passive: true });
}

document.addEventListener('DOMContentLoaded', () => {
  renderTopbar();
  renderSidebar();
  renderBreadcrumb();
  renderPageNav();
  bindMobileNav();
  bindSidebarCollapse();
  bindScrollSpy();

  document.dispatchEvent(new CustomEvent('navigation:ready'));
});
