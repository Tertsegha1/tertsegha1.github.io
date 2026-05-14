# Dr. Tertsegha Joseph Anande — Portfolio

**Live site:** [drtertseghaanande.com](https://drtertseghaanande.com) · [tertsegha1.github.io](https://tertsegha1.github.io)

PhD-trained Lecturer in Computing and ML Researcher at QAHE / Ulster University, Birmingham.  
Specialises in Machine Learning, AutoML, Ensemble Learning, and Cyber-Physical Security.

---

## Project structure

```
tertsegha1-portfolio/
├── index.html          # Semantic HTML shell — no inline styles or data
├── cv.html             # Print-ready CV generator (Academic & Industry) driven by data.js
├── admin.html          # GitHub-connected admin CMS — edit & deploy without touching code
├── css/
│   └── style.css       # All styles and design tokens
├── js/
│   ├── data.js         # All site content (edit this to update the site)
│   └── main.js         # Renders data into the DOM; handles nav and scroll
├── assets/
│   └── img/
│       └── profile.jpg # Profile photo
├── robots.txt          # Search engine crawl rules
├── sitemap.xml         # Sitemap for Google Search Console
└── README.md
```

No build step, no dependencies, no framework — plain HTML/CSS/JS served directly by GitHub Pages.

---

## Design

The portfolio uses a **tabbed single-page layout**:

- The **hero section** is always visible at the top with profile photo, stats, and quick links
- A **sticky tab bar** below the hero lets visitors jump between sections — only one section is shown at a time, eliminating the endless scroll
- Hash-based routing (`/#publications`, `/#projects`, etc.) means direct links still land on the right section
- **Dark mode** is supported throughout, with preference saved to localStorage
- Sections animate in with a fade-slide transition on each tab switch

### Updating the profile photo

Replace `assets/img/profile.jpg` with a new image (keep the same filename). To do this without the command line:

1. Go to [github.com/Tertsegha1/tertsegha1.github.io/tree/main/assets/img](https://github.com/Tertsegha1/tertsegha1.github.io/tree/main/assets/img)
2. Click `profile.jpg` → click the pencil (edit) icon → upload new file → commit

Recommended enhancement workflow: crop face/shoulders → **Remini** app to sharpen → **remove.bg** for background removal → **Canva** to set a clean background.

---

## How to update the site

### Option 1 — Admin Panel (recommended, no code required)

1. Go to [drtertseghaanande.com/admin.html](https://drtertseghaanande.com/admin.html)
2. Generate a GitHub Personal Access Token at [github.com/settings/tokens](https://github.com/settings/tokens/new?scopes=repo&description=Portfolio+Admin) — tick the **`repo`** scope
3. Paste the token → click **Load Portfolio Data**
4. Edit any section using the form editors:

| Tab | What you can edit |
|---|---|
| 👤 Personal | Name, title, bio, contact links, booking config, hero stats |
| 💼 Experience | Roles, organisations, dates, bullet points |
| 🚀 Projects | Project cards, tech stack, links |
| 📄 Publications | Journal articles, conference papers, preprints |
| 🎓 Teaching | Modules, level (UG/PG), module leader flag |
| 🏅 Certifications | Certs and awards, highlight badge |
| 🏛 Leadership | Leadership and service entries |
| ⚙️ Advanced | Full raw JSON editor for power edits |

5. Click **💾 Save & Deploy** — changes commit directly to GitHub and the live site updates in ~60 seconds

Your token is stored only in your browser's local storage and sent directly to GitHub — never to a third-party server.

### Option 2 — Edit `data.js` directly (fallback)

All content lives in **`js/data.js`**. Edit the relevant section and push — the site updates automatically.

#### Add a new publication

```js
{
  type:    'journal',          // 'journal' | 'conference' | 'preprint' | 'thesis'
  year:    '2026',
  authors: 'Anande, T. J., & Co-Author, X.',
  title:   'Your Paper Title Here',
  venue:   'Nature Machine Intelligence',
  doi:     'https://doi.org/10.xxxx/xxxxx',
}
```

#### Add a new project

```js
{
  title: 'Project Name',
  tag:   'Research',
  desc:  'Description of the project.',
  stack: ['Python', 'PyTorch', 'FastAPI'],
  links: [
    { label: '🔗 GitHub',    url: 'https://github.com/Tertsegha1/repo-name' },
    { label: '🌐 Live Demo', url: 'https://tertsegha1.github.io/repo-name'  },
  ],
}
```

#### Add a leadership / service entry

```js
// In the leadership array:
{ role: 'External Examiner', period: '2026', desc: 'Organisation name and context' }
```

#### Update stats or role tags

Edit `personal.stats` in `js/data.js`.

#### Change the profile photo

Replace `assets/img/profile.jpg` with a new image (keep the same filename), then push.

#### Update styles

Edit `css/style.css`. Design tokens (colours, radius, spacing) are CSS custom properties at the top of the file under `:root { ... }`.

#### Deploy via command line

```bash
git add .
git commit -m "Update: describe what changed"
git push
```

GitHub Pages rebuilds automatically — changes are live within ~60 seconds.

---

## CV Generator

**URL:** [drtertseghaanande.com/cv.html](https://drtertseghaanande.com/cv.html)

Generates both an **Academic CV** and an **Industry CV** directly from `data.js`. Any update to the portfolio data is immediately reflected in both CVs.

- Toggle between Academic / Industry / Both views
- Print to PDF using the **Save as PDF** button (outputs A4)
- No manual CV maintenance needed — keep `data.js` up to date and the CV follows

---

## Sections

Each section is accessible via the sticky tab bar. Sections map to `data.js` as follows:

| Tab | Section ID | Content source in `data.js` |
|---|---|---|
| Always visible | `#hero` | `personal` (name, credentials, title, stats, bio) |
| 👤 About | `#about` | `personal` (about paragraphs, memberships, education) |
| 🛠 Skills | `#skills` | `skills` array |
| 💼 Experience | `#experience` | `experience` array |
| 🚀 Projects | `#projects` | `projects` array |
| 📄 Publications | `#publications` | `publications` object (journal / conference / book / inPrep) |
| 🔬 Research | `#research` | `research` array |
| 🎓 Teaching | `#teaching` | `teaching` object (postgraduate / undergraduate) |
| 🏅 Credentials | `#certifications` | `certifications` array |
| 📺 Series | `#series` | Hard-coded in `index.html` |
| 📞 Contact | `#contact` + `#booking` | `personal` (email, github, linkedin, latestPub, calendlyUrl, formspreeId) |

---

## Tech stack

| Concern | Solution |
|---|---|
| Hosting | GitHub Pages (free, auto-deploys on push) |
| Custom domain | drtertseghaanande.com (Cloudflare DNS) |
| Navigation | Tabbed single-page layout with hash-based routing (`js/main.js`) |
| Styles | Vanilla CSS with custom properties and dark mode |
| Content | Plain JS data object (`js/data.js`) |
| Rendering | Vanilla JS DOM API (`js/main.js`) |
| CV generation | `cv.html` — reads `data.js`, prints to PDF |
| Admin / CMS | `admin.html` — GitHub API, no backend required |
| Private app hosting | Cloudflare Workers (cmp701-studio, cmp701-tracker, grading system) |
| Build | None required |

---

## Contact

- **Email:** tertseghaanande@gmail.com
- **GitHub:** [github.com/Tertsegha1](https://github.com/Tertsegha1)
- **LinkedIn:** [linkedin.com/in/tertsegha-anande-phd-msc-mbcs-afhea-71939520a](https://www.linkedin.com/in/tertsegha-anande-phd-msc-mbcs-afhea-71939520a/)
- **Google Scholar:** [scholar.google.com/citations?user=J5pMcosAAAAJ](https://scholar.google.com/citations?user=J5pMcosAAAAJ&hl=en)
- **Latest publication:** [doi.org/10.1007/s42979-024-03544-3](https://doi.org/10.1007/s42979-024-03544-3)
