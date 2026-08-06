# python-training-docs

A self-contained, offline documentation site teaching Python fundamentals to DevOps, DevSecOps, Security, Cloud, SRE, and Platform Engineering interns — through server, log, container, and cloud examples instead of generic tutorials.

## Running it

No build step, no dependencies. Just open the file:

```
python-training-docs/index.html
```

directly in any modern browser (Chrome, Firefox, Edge, Safari). Everything — navigation, search, quizzes, dark mode, progress tracking — runs client-side in vanilla HTML/CSS/JS.

If your browser blocks local file access for any reason, serve it with a tiny local server instead:

```
cd python-training-docs
python3 -m http.server 8000
# then open http://localhost:8000
```

## Structure

```
python-training-docs/
├── index.html              Homepage: hero, overview, roadmap, audience, careers
├── css/
│   ├── theme.css            Design tokens: colors, type, light/dark variables
│   ├── style.css            Layout and component styles
│   └── responsive.css       Mobile breakpoints + print stylesheet
├── js/
│   ├── navigation.js        Site structure, header/sidebar/breadcrumb/prev-next
│   ├── app.js                Theme toggle, back-to-top, copy buttons, shortcuts
│   ├── search.js             Client-side documentation search
│   ├── progress.js           localStorage-backed reading progress tracker
│   └── quiz.js                Reusable interactive quiz engine
├── pages/
│   ├── introduction.html
│   ├── variables.html        Module 01
│   ├── conditions.html       Module 02
│   ├── loops.html            Module 03
│   ├── functions.html        Module 04
│   ├── oop.html               Module 05
│   ├── constructors.html      Module 06
│   ├── generators.html        Module 07
│   ├── labs.html               8 hands-on labs
│   ├── projects.html           10 mini projects
│   └── assessment.html         Final 10-question assessment
└── assets/                    images / icons / diagrams (diagrams are inline SVG in-page)
```

## Design notes

The visual identity leans into the subject matter: a monospace display face, a file-tree-styled sidebar (`├─` / `└─` connectors), a pulsing "status light" motif borrowed from uptime dashboards, and code blocks styled like a real terminal. Light and dark themes are both fully supported and persist via `localStorage`.

## Features

- Sticky top bar with search (press `/` to focus), theme toggle, and reading-progress bar
- Collapsible, scrollable sidebar with per-module completion checkmarks
- Breadcrumb + previous/next navigation on every page (also via `Alt+←` / `Alt+→`)
- Syntax-highlighted code blocks with one-click copy
- Expand/collapse-all documentation sections
- Interactive per-module quizzes plus a comprehensive final assessment
- Fully responsive layout, print stylesheet, and visible keyboard focus states

## Extending

- **Add a page:** create `pages/your-page.html`, copy the shared header/footer boilerplate from an existing page, then add an entry to `NAV_DATA` in `js/navigation.js` and to `SEARCH_INDEX` in `js/search.js`.
- **Add a quiz:** any page with a `<div id="quiz-app"></div>` and a preceding `<script>var QUIZ_DATA = [...]</script>` block gets the interactive quiz automatically.
- **Change the palette:** edit the CSS variables in `css/theme.css` — every component derives its colors from those tokens.
