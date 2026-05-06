# Dr. Tertsegha Joseph Anande — Portfolio

**Live site:** [tertsegha1.github.io](https://tertsegha1.github.io)

PhD-trained Lecturer in Computing and ML Researcher at QAHE / Ulster University, Birmingham.
Specialises in Machine Learning, AutoML, Ensemble Learning, and Cyber-Physical Security.

---

## Project structure

```
tertsegha1-portfolio/
├── index.html          # Semantic HTML shell — no inline styles or data
├── css/
│   └── style.css       # All styles and design tokens
├── js/
│   ├── data.js         # All site content (edit this to update the site)
│   └── main.js         # Renders data into the DOM; handles nav and scroll
├── assets/
│   └── img/
│       └── profile.jpg # Profile photo
└── README.md
```

No build step, no dependencies, no framework — plain HTML/CSS/JS served directly by GitHub Pages.

---

## How to update the site

All content lives in **`js/data.js`**. Edit the relevant section and push — the site updates automatically.

### Add a new publication

Open `js/data.js` and find the `publications` object. Add an entry to the appropriate array:

```js
// Journal article
{
  year:    '2026 — Nature Machine Intelligence',
  title:   'Your Paper Title Here',
  authors: 'Anande, T. J., & Co-Author, X. (2026)',
  venue:   '<a href="https://doi.org/..." target="_blank">doi.org/...</a>',
},

// Conference paper — add cls: 'conf'
// Book chapter    — add cls: 'chap'
// In preparation  — add cls: 'prep'
```

### Add a new project

Find the `projects` array in `js/data.js` and add:

```js
{
  icon:  '🔬',
  badge: '2026',
  title: 'Project Name',
  desc:  'Description of the project.',
  tech:  ['Python', 'PyTorch', 'FastAPI'],
  links: [
    { label: '🔗 GitHub',    url: 'https://github.com/Tertsegha1/repo-name' },
    { label: '🌐 Live Demo', url: 'https://tertsegha1.github.io/repo-name'  },
  ],
},
```

### Update stats or role tags

Edit `personal.stats` and `personal.roleTags` in `js/data.js`.

### Change the profile photo

Replace `assets/img/profile.jpg` with a new image (keep the same filename), then push.

### Update styles

Edit `css/style.css`. Design tokens (colours, radius, spacing) are CSS custom properties at the top of the file under `:root { ... }`.

---

## Deploying changes

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
| Hero | `personal` (name, title, stats, role tags, bio) |
| About | `personal` (about paragraphs, memberships, education) |
| Skills | `skills` array |
| Experience | `experience` array |
| Projects | `projects` array |
| Publications | `publications` object (journal / conference / book / inPrep) |
| Research Interests | `research` array |
| Teaching | `teaching` (postgraduate / undergraduate) |
| Certifications | `certifications` array |
| Contact | `personal` (email, github, linkedin, latestPub) |

---

## Tech stack

| Concern | Solution |
|---|---|
| Hosting | GitHub Pages (free, auto-deploys on push) |
| Styles | Vanilla CSS with custom properties |
| Content | Plain JS data object (`js/data.js`) |
| Rendering | Vanilla JS DOM API (`js/main.js`) |
| Photo | Static JPEG asset (`assets/img/profile.jpg`) |
| Build | None required |

---

## Contact

- **Email:** tertseghaanande@gmail.com
- **GitHub:** [github.com/Tertsegha1](https://github.com/Tertsegha1)
- **LinkedIn:** [linkedin.com/in/tertsegha-anande-phd-msc-mbcs-afhea-71939520a](https://www.linkedin.com/in/tertsegha-anande-phd-msc-mbcs-afhea-71939520a/)
- **Latest publication:** [doi.org/10.1007/s42979-024-03544-3](https://doi.org/10.1007/s42979-024-03544-3)
