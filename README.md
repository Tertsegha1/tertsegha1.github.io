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

## How to update the site (no code required)

The easiest way to update any section is via the **Admin Panel**.

### Option 1 — Admin Panel (recommended)

1. Go to [drtertseghaanande.com/admin.html](https://drtertseghaanande.com/admin.html)
2. Generate a GitHub Personal Access Token at [github.com/settings/tokens](https://github.com/settings/tokens/new?scopes=repo&description=Portfolio+Admin) — tick the **`repo`** scope
3. Paste the token → click **Load Portfolio Data**
4. Edit any section using the form editors (Personal, Experience, Projects, Publications, Teaching, Certifications, Leadership)
5. Click **💾 Save & Deploy** — the site updates in ~60 seconds

Your token is stored only in your browser's local storage and sent directly to GitHub — never to a third-party server.

### Option 2 — Edit `data.js` directly

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

---

## CV Generator

**URL:** [drtertseghaanande.com/cv.html](https://drtertseghaanande.com/cv.html)

Generates both an **Academic CV** and an **Industry CV** directly from `data.js`. Any update to the portfolio data is immediately reflected in both CVs.

- Toggle between Academic / Industry / Both views
- Print to PDF using the **Save as PDF** button (outputs A4)
- No manual CV maintenance needed — keep `data.js` up to date and the CV follows

---

## Deploying changes (command line)

```bash
git add .
git commit -m "Update: describe what changed"
git push
```

GitHub Pages rebuilds automatically — changes are live within ~60 seconds.

---

## Sections

| Section | Content source in `data.js` |
|---|---|
| Hero | `personal` (name, credentials, title, stats, bio) |
| About | `personal` (about paragraphs, memberships, education) |
| Skills | `skills` array |
| Experience | `experience` array |
| Projects | `projects` array |
| Publications | `publications` array |
| Research Interests | `research` array |
| Teaching | `teaching` array |
| Certifications | `certifications` array |
| Leadership & Service | `leadership` array |
| Booking | `personal` (calendlyUrl, formspreeId) |
| Contact | `personal` (email, github, linkedin, latestPub) |

---

## Tech stack

| Concern | Solution |
|---|---|
| Hosting | GitHub Pages (free, auto-deploys on push) |
| Custom domain | drtertseghaanande.com (Cloudflare DNS) |
| Styles | Vanilla CSS with custom properties |
| Content | Plain JS data object (`js/data.js`) |
| Rendering | Vanilla JS DOM API (`js/main.js`) |
| CV generation | `cv.html` — reads `data.js`, prints to PDF |
| Admin / CMS | `admin.html` — GitHub API, no backend |
| Private app hosting | Cloudflare Workers (cmp701-studio, cmp701-tracker, grading system) |
| Build | None required |

---

## Contact

- **Email:** tertseghaanande@gmail.com
- **GitHub:** [github.com/Tertsegha1](https://github.com/Tertsegha1)
- **LinkedIn:** [linkedin.com/in/tertsegha-anande-phd-msc-mbcs-afhea-71939520a](https://www.linkedin.com/in/tertsegha-anande-phd-msc-mbcs-afhea-71939520a/)
- **Google Scholar:** [scholar.google.com/citations?user=J5pMcosAAAAJ](https://scholar.google.com/citations?user=J5pMcosAAAAJ&hl=en)
- **Latest publication:** [doi.org/10.1007/s42979-024-03544-3](https://doi.org/10.1007/s42979-024-03544-3)
