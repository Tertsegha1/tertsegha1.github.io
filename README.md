# Dr. Tertsegha Joseph Anande — Portfolio & Training Platform

**Live site:** [drtertseghaanande.com](https://drtertseghaanande.com) · [tertsegha1.github.io](https://tertsegha1.github.io)

PhD-trained Lecturer in Computing and ML Researcher at QAHE / Ulster University, Birmingham.  
Specialises in Machine Learning, AutoML, Ensemble Learning, and Cyber-Physical Security.

---

## AUKTIE PostgreSQL Training Platform

This repository hosts the **PostgreSQL Database Fundamentals with Performance & Tuning** training platform — a fully self-contained, browser-based workshop delivery system developed for AUKTIE (UK Trade & Infrastructure Enterprise Limited) in partnership with NASSCO.

**Programme:** 22 June – 3 July 2026  
**Location:** Innovation Hub, Birmingham (with online access via platform URL)  
**Platform URL:** [drtertseghaanande.com/postgresql-workshop.html](https://drtertseghaanande.com/postgresql-workshop.html)  
**Delivered by:** Dr. Tertsegha Joseph Anande

---

### Platform Overview

The workshop platform is a single HTML file (`postgresql-workshop.html`) that requires no server, no build step, and no external dependencies beyond a modern browser. It runs entirely client-side using vanilla JavaScript and localStorage for state persistence.

**Key capabilities:**

| Feature | Description |
|---|---|
| Two-screen login flow | Welcome screen → participant name selection |
| Per-participant state | Progress saved to localStorage per device |
| Time-locked content | Training days unlock at 06:00 on the morning of each session |
| Instructor mode | Full access, cohort dashboard, mode toggle |
| 16 participant accounts | Named slots (14 active + 2 spare) |
| QR code access | Scannable/clickable link to platform |
| Portfolio integration | Listed on drtertseghaanande.com under Projects |

---

### Access and Login

#### Screen 1 — Welcome

The welcome screen is shown on first load or after sign-out. It displays:
- AUKTIE × NASSCO branding
- Platform title and dates
- Clickable platform URL for participants who haven't bookmarked it
- A "Select Your Name to Sign In →" button

#### Screen 2 — Participant Login

Participants select their name from a grid. Each button shows the participant's full name and their allocated code (e.g. P-01). Clicking the button logs them in and dismisses the overlay immediately.

**Instructor login:** Accessible via the "🔐 Instructor / Facilitator Login" toggle on the login screen. Enter the PIN and press Enter or click the button.

- **Instructor PIN:** `AUKTIE2026`

---

### Participant Accounts

| Code | Name |
|---|---|
| P-01 | Dr. Funmi Olotu |
| P-02 | Mr. Olubunmi Olusanya |
| P-03 | Bello Mustapha Alikali |
| P-04 | Dikko Bala Mohammed |
| P-05 | Murtala Mohammed |
| P-06 | Sesugh Nongo |
| P-07 | Adam Adam Muhammed |
| P-08 | Shambe Orduen |
| P-09 | Auwalu Ibrahim |
| P-10 | Dasbang Joseph F |
| P-11 | Mohammed Nasiru Hamma |
| P-12 | Ogunsanya Rasaq Olukorede |
| P-13 | Ismail Adisa Adeyinka |
| P-14 | Sadiya Abubakar Abdullahi |
| P-15 | Spare Slot 15 |
| P-16 | Spare Slot 16 |

State for each participant is stored under the localStorage key `auktie_state_{code}` (e.g. `auktie_state_P-01`). The currently logged-in user is stored under `auktie_current_user`. Sessions resume automatically on next visit.

---

### Training Schedule and Time-Locking

Content for each training day unlocks at **06:00 local time** on the morning of the session. Participants attempting to access a locked day see a friendly message with the exact unlock date and time.

| Day | Date | Unlock Time |
|---|---|---|
| Day 1 | Tuesday 23 June 2026 | 06:00 |
| Day 2 | Wednesday 24 June 2026 | 06:00 |
| Day 3 | Thursday 25 June 2026 | 06:00 |
| Study Visit | Friday 27 June 2026 | Always accessible (non-training) |
| Day 5 | Monday 29 June 2026 | 06:00 |
| Day 6 | Tuesday 30 June 2026 | 06:00 |
| Day 7 | Wednesday 1 July 2026 | 06:00 |
| Day 8 | Friday 3 July 2026 | 06:00 |

> **Instructor mode bypasses all time locks.** The study visit day is exempt from locking and always accessible to participants.

---

### Instructor Features

When logged in as Instructor (PIN: `AUKTIE2026`):

- All training days are immediately accessible regardless of date
- A **Cohort Dashboard** is displayed on the home page showing progress for all 16 participant slots
- The dashboard shows: participant code, name, days completed, progress bar (%), exercises done, and last active timestamp
- Participants not yet logged in on the current device are shown as "Not yet logged in"
- A mode toggle button allows switching between Instructor and Participant views for testing

> **Note:** Because each participant uses their own laptop, localStorage data is per-device. The cohort dashboard reflects the state of all slots on the device where the instructor is logged in.

---

### Document Suite

| Document | Description | Access |
|---|---|---|
| `AUKTIE_Participant_Workbook.pdf` | Full participant workbook — exercises, references, schedule | Public |
| `AUKTIE_Instructor_Guide.pdf` | Complete instructor guide with facilitation notes | Password-protected |
| `auktie-ig-restricted-2026.pdf` | Alternate restricted instructor guide copy | Password-protected |
| `auktie-participant-workbook.pdf` | Alternate workbook copy | Public |

**Instructor guide PDF password:** `AUKTIE2026`

Both instructor guide PDFs are encrypted using pypdf. Participants receive the workbook only.

All documents were updated to reflect the study visit location change from Coventry City Council to **Innovation Hub, Birmingham**, including updated factual descriptions of the venue's digital infrastructure. PDFs were converted from DOCX using LibreOffice headless.

---

### QR Codes

| File | Links to | Use |
|---|---|---|
| `AUKTIE_QR_Code.png` | `https://www.auktie.com` | AUKTIE organisation website |
| `AUKTIE_Workshop_QR.png` | `https://drtertseghaanande.com/postgresql-workshop.html` | Workshop platform — share with participants |

Spec: 416 × 416 px, 300 DPI, navy fill (`#1a3c6b`), error correction level H.

The AUKTIE QR code is embedded in the **Certificate of Participation** PDF (`CERTIFICATE_OF_PARTICIPATION_QR.pdf`), positioned bottom-left at y = 30 mm.

---

### Attendance and Supporting Tools

| File | Description |
|---|---|
| `auktie-attendance.html` | Attendance tracking tool for the programme |
| `auktie-instructor-guide.html` | HTML version of the instructor guide |
| `postgresql-training.html` | Training overview / landing page |

---

### Credentials Summary

| Credential | Value |
|---|---|
| Instructor PIN (platform login) | `AUKTIE2026` |
| Instructor guide PDF password | `AUKTIE2026` |

---

### Technology Stack — Platform

| Concern | Implementation |
|---|---|
| Hosting | GitHub Pages — auto-deploys on push to `main` |
| Custom domain | drtertseghaanande.com (Cloudflare DNS) |
| Platform runtime | Vanilla HTML / CSS / JavaScript — no framework, no build step |
| State persistence | Browser localStorage (per-participant namespaced keys) |
| Time-locking | JavaScript `Date` comparison against `DAY_SCHEDULE` object |
| Login overlay | Two-screen CSS overlay, z-index 9999, dismissed on login |
| Cohort dashboard | Reads all 16 localStorage slots, renders inline progress table |
| QR code generation | Python `qrcode` library, 300 DPI, error correction H |
| PDF overlay | `reportlab` canvas + `pypdf` merge |
| DOCX editing | XML unpack → string replace → repack via `scripts/office/` |
| PDF conversion | LibreOffice headless (`soffice --headless --convert-to pdf`) |
| PDF encryption | `pypdf` `.encrypt()` with user + owner password |

---

## Portfolio Site

**Live site:** [drtertseghaanande.com](https://drtertseghaanande.com)

### Project structure

```
tertsegha1.github.io/
├── index.html                        # Semantic HTML shell — no inline styles or data
├── cv.html                           # Print-ready CV generator (Academic & Industry)
├── admin.html                        # GitHub-connected admin CMS
├── postgresql-workshop.html          # AUKTIE PostgreSQL training platform
├── postgresql-training.html          # Training overview page
├── auktie-attendance.html            # Attendance tracking tool
├── auktie-instructor-guide.html      # HTML instructor guide
├── AUKTIE_Instructor_Guide.pdf       # Password-protected instructor guide
├── AUKTIE_Participant_Workbook.pdf   # Participant workbook (public)
├── auktie-ig-restricted-2026.pdf     # Restricted instructor guide copy
├── auktie-participant-workbook.pdf   # Alternate workbook copy
├── css/
│   └── style.css                     # All styles and design tokens
├── js/
│   ├── data.js                       # All site content (edit to update site)
│   └── main.js                       # Renders data into DOM
├── assets/
│   └── img/
│       └── profile.jpg               # Profile photo
├── sitemap.xml                       # Sitemap for Google Search Console
├── robots.txt                        # Search engine crawl rules
└── README.md
```

No build step, no dependencies, no framework — plain HTML/CSS/JS served directly by GitHub Pages.

---

### How to update the site

#### Option 1 — Admin Panel (recommended, no code required)

1. Go to [drtertseghaanande.com/admin.html](https://drtertseghaanande.com/admin.html)
2. Generate a GitHub Personal Access Token at [github.com/settings/tokens](https://github.com/settings/tokens/new?scopes=repo&description=Portfolio+Admin) — tick the **`repo`** scope
3. Paste the token → click **Load Portfolio Data**
4. Edit any section and click **💾 Save & Deploy**

Changes commit directly to GitHub and the live site updates in ~60 seconds.

#### Option 2 — Edit `data.js` directly

All portfolio content lives in `js/data.js`. Edit and push:

```bash
git add js/data.js
git commit -m "Update: describe what changed"
git push
```

---

### CV Generator

**URL:** [drtertseghaanande.com/cv.html](https://drtertseghaanande.com/cv.html)

Generates both an Academic CV and an Industry CV directly from `data.js`. Toggle between views and print to PDF (A4) using the Save as PDF button. No manual CV maintenance needed — keep `data.js` up to date and both CVs follow.

---

### Portfolio Tech Stack

| Concern | Solution |
|---|---|
| Hosting | GitHub Pages (free, auto-deploys on push) |
| Custom domain | drtertseghaanande.com (Cloudflare DNS) |
| Navigation | Tabbed single-page layout with hash-based routing |
| Styles | Vanilla CSS with custom properties and dark mode |
| Content | Plain JS data object (`js/data.js`) |
| Rendering | Vanilla JS DOM API (`js/main.js`) |
| CV generation | `cv.html` — reads `data.js`, prints to PDF |
| Admin / CMS | `admin.html` — GitHub API, no backend required |

---

## Contact

- **Email:** tertseghaanande@gmail.com
- **GitHub:** [github.com/Tertsegha1](https://github.com/Tertsegha1)
- **LinkedIn:** [linkedin.com/in/tertsegha-anande-phd-msc-mbcs-afhea-71939520a](https://www.linkedin.com/in/tertsegha-anande-phd-msc-mbcs-afhea-71939520a/)
- **Google Scholar:** [scholar.google.com/citations?user=J5pMcosAAAAJ](https://scholar.google.com/citations?user=J5pMcosAAAAJ&hl=en)
- **AUKTIE:** [auktie.com](https://www.auktie.com)
