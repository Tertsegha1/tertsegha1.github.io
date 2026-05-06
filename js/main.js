/**
 * main.js — renders DATA into the DOM and handles site behaviour.
 * Reads from js/data.js (loaded first in index.html).
 */

/* ── Utilities ─────────────────────────────────────────── */
const el  = (id) => document.getElementById(id);
const h   = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html !== undefined) e.innerHTML = html; return e; };
const frag = () => document.createDocumentFragment();

/* ── Hero ──────────────────────────────────────────────── */
function renderHero () {
  const p = DATA.personal;

  el('hero-credentials').textContent = p.credentials;
  el('hero-name-first').textContent  = p.name.split(' ').slice(0,2).join(' ');
  el('hero-name-last').textContent   = p.name.split(' ').slice(2).join(' ');
  el('hero-subtitle').textContent    = p.title;
  el('hero-bio').textContent         = p.bio.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim();

  const tagsEl = el('hero-tags');
  p.roleTags.forEach(t => { const s = h('span','role-tag'); s.textContent = t; tagsEl.appendChild(s); });

  const statsEl = el('hero-stats');
  p.stats.forEach(s => {
    const d = h('div','stat');
    d.appendChild(h('div','stat-num', s.num));
    d.appendChild(h('div','stat-label', s.label));
    statsEl.appendChild(d);
  });
}

/* ── About ─────────────────────────────────────────────── */
function renderAbout () {
  const p = DATA.personal;

  const bioEl = el('about-bio');
  p.about.forEach(para => { const pd = h('p'); pd.innerHTML = para; bioEl.appendChild(pd); });

  // Memberships
  const memEl = el('about-memberships');
  p.memberships.forEach(m => { const s = h('span','mem-tag'); s.textContent = m; memEl.appendChild(s); });

  // Education
  const eduEl = el('about-education');
  p.education.forEach(e => {
    const li = h('li');
    li.innerHTML = `<div class="ic">🎓</div><div><strong>${e.degree}</strong><br><span style="font-size:0.78rem;color:var(--text-light);">${e.institution}</span></div>`;
    eduEl.appendChild(li);
  });
}

/* ── Skills ────────────────────────────────────────────── */
function renderSkills () {
  const grid = el('skills-grid');
  DATA.skills.forEach(sk => {
    const card = h('div','sk-card');
    card.innerHTML = `<div class="sk-icon">${sk.icon}</div><h3>${sk.title}</h3>`;
    const tags = h('div','stags');
    sk.tags.forEach(t => { const s = h('span','stag'); s.textContent = t; tags.appendChild(s); });
    card.appendChild(tags);
    grid.appendChild(card);
  });
}

/* ── Experience ────────────────────────────────────────── */
function renderExperience () {
  const tl = el('timeline');
  DATA.experience.forEach(job => {
    const item = h('div','tl-item');
    item.innerHTML = `<div class="tl-dot"></div>
      <div class="tl-date">${job.date}</div>
      <div class="tl-title">${job.title}</div>
      <div class="tl-org">${job.org}</div>`;
    const ul = h('ul','tl-bl');
    job.bullets.forEach(b => { const li = h('li'); li.innerHTML = b; ul.appendChild(li); });
    item.appendChild(ul);
    tl.appendChild(item);
  });
}

/* ── Projects ──────────────────────────────────────────── */
function renderProjects () {
  const grid = el('proj-grid');
  DATA.projects.forEach(proj => {
    const card = h('div','proj-card');

    const hd = h('div','proj-hd');
    hd.innerHTML = `<div><div class="proj-icon">${proj.icon}</div><h3>${proj.title}</h3></div><span class="proj-badge">${proj.badge}</span>`;
    card.appendChild(hd);

    const body = h('div','proj-body');
    const desc = h('p'); desc.innerHTML = proj.desc; body.appendChild(desc);

    const tech = h('div','proj-tech');
    proj.tech.forEach(t => { const s = h('span'); s.textContent = t; tech.appendChild(s); });
    body.appendChild(tech);

    if (proj.links.length) {
      const links = h('div','proj-links');
      proj.links.forEach(lk => {
        const a = h('a','proj-link', lk.label);
        a.href = lk.url; a.target = '_blank'; a.rel = 'noopener';
        links.appendChild(a);
      });
      body.appendChild(links);
    }

    card.appendChild(body);
    grid.appendChild(card);
  });
}

/* ── Publications ──────────────────────────────────────── */
function pubItem (pub) {
  const d = h('div', `pub-item${pub.cls ? ' ' + pub.cls : ''}`);
  d.innerHTML = `<div class="pub-year">${pub.year}</div>
    <div class="pub-title">${pub.title}</div>
    <div class="pub-authors">${pub.authors}</div>
    ${pub.venue ? `<div class="pub-venue">${pub.venue}</div>` : ''}`;
  return d;
}

function renderPublications () {
  const pubs = DATA.publications;

  const journalEl = el('pub-journal'); pubs.journal.forEach(p => journalEl.appendChild(pubItem(p)));
  const confEl    = el('pub-conf');    pubs.conference.forEach(p => confEl.appendChild(pubItem(p)));
  const bookEl    = el('pub-book');    pubs.book.forEach(p => bookEl.appendChild(pubItem(p)));
  const prepEl    = el('pub-prep');    pubs.inPrep.forEach(p => prepEl.appendChild(pubItem(p)));
}

/* ── Research Interests ────────────────────────────────── */
function renderResearch () {
  const grid = el('res-grid');
  DATA.research.forEach(r => {
    const item = h('div','res-item');
    item.innerHTML = `<div class="res-icon">${r.icon}</div><h3>${r.title}</h3>`;
    grid.appendChild(item);
  });
}

/* ── Teaching ──────────────────────────────────────────── */
function renderTeaching () {
  function fillList (listId, items) {
    const ul = el(listId);
    items.forEach(m => {
      const d = h('div','mod-item');
      d.innerHTML = m.leader ? `${m.label} — <strong>Module Leader</strong>` : m.label;
      ul.appendChild(d);
    });
  }
  fillList('teach-pg', DATA.teaching.postgraduate);
  fillList('teach-ug', DATA.teaching.undergraduate);
}

/* ── Certifications ────────────────────────────────────── */
function renderCertifications () {
  const grid = el('cert-grid');
  DATA.certifications.forEach(c => {
    const card = h('div','cert-card');
    card.innerHTML = `<div class="cert-icon">${c.icon}</div>
      <div class="cert-text"><h3>${c.title}</h3><p>${c.desc}</p></div>`;
    grid.appendChild(card);
  });
}

/* ── Contact ───────────────────────────────────────────── */
function renderContact () {
  const p = DATA.personal;
  const cards = [
    { icon: '✉', label: 'Email',               value: p.email,     href: `mailto:${p.email}` },
    { icon: '🔗', label: 'GitHub',              value: 'github.com/Tertsegha1', href: p.github, external: true },
    { icon: 'in', label: 'LinkedIn',            value: 'View Profile', href: p.linkedin, external: true },
    { icon: '📖', label: 'Latest Publication',  value: 'SN Computer Science (2025)', href: p.latestPub, external: true },
  ];
  const container = el('contact-cards');
  cards.forEach(c => {
    const a = h('a','ccard');
    a.href = c.href;
    if (c.external) { a.target = '_blank'; a.rel = 'noopener'; }
    a.innerHTML = `<div class="ccard-ic">${c.icon}</div>
      <div><div class="ccard-label">${c.label}</div><div class="ccard-value">${c.value}</div></div>`;
    container.appendChild(a);
  });
}

/* ── Nav active-link on scroll ─────────────────────────── */
function initNav () {
  const secs  = document.querySelectorAll('section[id]');
  const navAs = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let cur = '';
    secs.forEach(s => { if (window.scrollY >= s.offsetTop - 80) cur = s.id; });
    navAs.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + cur));
  }, { passive: true });

  navAs.forEach(a => a.addEventListener('click', () => el('navLinks').classList.remove('open')));
}

/* ── Scroll fade-in ────────────────────────────────────── */
function initFadeIn () {
  const obs = new IntersectionObserver(
    entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
    { threshold: 0.07 }
  );
  document.querySelectorAll('.fade-in').forEach(el => obs.observe(el));
}

/* ── Bootstrap ─────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  renderHero();
  renderAbout();
  renderSkills();
  renderExperience();
  renderProjects();
  renderPublications();
  renderResearch();
  renderTeaching();
  renderCertifications();
  renderContact();
  initNav();
  initFadeIn();
});
