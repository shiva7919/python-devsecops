/* ============================================================
   SEARCH.JS — simple client-side search across the doc set.
   Index is static (no build step / server required) so the
   site keeps working when opened directly from disk.
   ============================================================ */

const SEARCH_INDEX = [
  { id: 'introduction', title: 'Introduction', file: 'pages/introduction.html', keywords: 'overview course audience prerequisites python devops devsecops sre platform engineering roadmap' },
  { id: 'variables', title: '01 · Variables', file: 'pages/variables.html', keywords: 'variables assignment naming types str int float bool env vars environment variables ip address docker image kubernetes namespace aws region config' },
  { id: 'conditions', title: '02 · Conditions', file: 'pages/conditions.html', keywords: 'if else elif boolean logic comparison operators disk usage service health login validation password policy firewall rule' },
  { id: 'loops', title: '03 · Loops', file: 'pages/loops.html', keywords: 'for while loop break continue range enumerate servers log files inventory kubernetes pods ec2 instances' },
  { id: 'functions', title: '04 · Functions', file: 'pages/functions.html', keywords: 'def function parameters return args kwargs check_disk_space restart_service deploy_application validate_yaml search_logs validate_ip generate_report' },
  { id: 'oop', title: '05 · Object-Oriented Programming', file: 'pages/oop.html', keywords: 'class object oop attributes methods server container deployment pipeline kubernetescluster firewallrule securityalert monitoringalert inheritance encapsulation' },
  { id: 'constructors', title: '06 · Constructors', file: 'pages/constructors.html', keywords: 'init constructor initialization default parameterized self server objects cloud resources monitoring alerts' },
  { id: 'generators', title: '07 · Generators', file: 'pages/generators.html', keywords: 'yield generator lazy evaluation memory optimization streaming logs siem events kubernetes events iterator' },
  { id: 'labs', title: 'Hands-on Labs', file: 'pages/labs.html', keywords: 'lab linux automation log parsing service monitoring docker kubernetes configuration parsing security log analysis backup automation' },
  { id: 'projects', title: 'Mini Projects', file: 'pages/projects.html', keywords: 'project system information collector log analyzer service health monitor backup script password strength checker docker status checker kubernetes resource reporter security event parser rest api client file integrity checker' },
  { id: 'assessment', title: 'Assessment', file: 'pages/assessment.html', keywords: 'quiz assessment test knowledge check score certificate' },
];

function initSearch() {
  const input = document.getElementById('search-input');
  const results = document.getElementById('search-results');
  if (!input || !results) return;
  const root = siteRoot ? siteRoot() : '';

  function render(query) {
    const q = query.trim().toLowerCase();
    if (!q) { results.classList.remove('is-open'); results.innerHTML = ''; return; }

    const matches = SEARCH_INDEX.filter(entry =>
      entry.title.toLowerCase().includes(q) || entry.keywords.includes(q)
    ).slice(0, 8);

    if (!matches.length) {
      results.innerHTML = `<div class="search-results__empty">No results for "${escapeHtml(query)}"</div>`;
    } else {
      results.innerHTML = matches.map(m => `
        <a class="search-results__item" href="${root}${m.file}">
          <div>${highlight(m.title, q)}</div>
          <div class="path">${root}${m.file}</div>
        </a>
      `).join('');
    }
    results.classList.add('is-open');
  }

  function highlight(text, q) {
    const idx = text.toLowerCase().indexOf(q);
    if (idx === -1) return escapeHtml(text);
    return escapeHtml(text.slice(0, idx)) + '<strong>' + escapeHtml(text.slice(idx, idx + q.length)) + '</strong>' + escapeHtml(text.slice(idx + q.length));
  }

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  input.addEventListener('input', (e) => render(e.target.value));
  input.addEventListener('focus', (e) => { if (e.target.value) render(e.target.value); });
  document.addEventListener('click', (e) => {
    if (!results.contains(e.target) && e.target !== input) {
      results.classList.remove('is-open');
    }
  });
}

document.addEventListener('navigation:ready', initSearch);
