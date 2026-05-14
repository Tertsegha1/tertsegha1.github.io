/**
 * main.js — renders DATA into the DOM and handles site behaviour.
 * Reads from js/data.js (loaded first in index.html).
 */

/* ── Utilities ─────────────────────────────────────────── */
const el  = (id) => document.getElementById(id);
const h   = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html !== undefined) e.innerHTML = html; return e; };

/* ── Hero ──────────────────────────────────────────────── */
function renderHero () {
  const p = DATA.personal;

  el('hero-credentials').textContent = p.credentials;
  el('hero-name-first').textContent  = p.name.split(' ').slice(0,2).join(' ');
  el('hero-name-last').textContent   = p.name.split(' ').slice(2).join(' ');
  el('hero-subtitle').innerHTML      = '<span id="typewriter-text"></span><span class="typewriter-cursor">|</span>';
  el('hero-bio').textContent         = p.bio.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim();

  const tagsEl = el('hero-tags');
  p.roleTags.forEach(t => { const s = h('span','role-tag'); s.textContent = t; tagsEl.appendChild(s); });

  const statsEl = el('hero-stats');
  p.stats.forEach(s => {
    const d = h('div','stat');
    d.appendChild(h('div','stat-num', `<span class="counter" data-target="${s.num.replace(/\D/g,'')}" data-suffix="${s.num.replace(/[\d]/g,'')}">${s.num}</span>`));
    d.appendChild(h('div','stat-label', s.label));
    statsEl.appendChild(d);
  });
}

/* ── About ─────────────────────────────────────────────── */
function renderAbout () {
  const p = DATA.personal;

  const bioEl = el('about-bio');
  p.about.forEach(para => { const pd = h('p'); pd.innerHTML = para; bioEl.appendChild(pd); });

  const memEl = el('about-memberships');
  p.memberships.forEach(m => { const s = h('span','mem-tag'); s.textContent = m; memEl.appendChild(s); });

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
        a.href = lk.url;
        if (!lk.url.startsWith('#')) { a.target = '_blank'; a.rel = 'noopener'; }
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
    const cls = 'cert-card' + (c.highlight ? ' cert-highlight' : '');
    const card = h('div', cls);
    card.innerHTML = `<div class="cert-icon">${c.icon}</div>
      <div class="cert-text">
        <h3>${c.title}${c.highlight ? ' <span class="cert-new-badge">NEW</span>' : ''}</h3>
        <p>${c.desc}</p>
      </div>`;
    grid.appendChild(card);
  });
}

/* ── Contact ───────────────────────────────────────────── */
function renderContact () {
  const p = DATA.personal;
  const cards = [
    { icon: '✉',  label: 'Email',              value: p.email,                 href: `mailto:${p.email}` },
    { icon: '🔗', label: 'GitHub',             value: 'github.com/Tertsegha1', href: p.github,    external: true },
    { icon: 'in', label: 'LinkedIn',           value: 'View Profile',           href: p.linkedin,  external: true },
    { icon: '📖', label: 'Latest Publication', value: 'SN Computer Science (2025)', href: p.latestPub, external: true },
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

/* ── Booking section ───────────────────────────────────── */
function renderBooking () {
  const p = DATA.personal;
  const section = el('booking');
  if (!section) return;

  if (p.calendlyUrl) {
    const wrap = el('calendly-wrapper');
    if (wrap) {
      wrap.innerHTML = `<iframe src="${p.calendlyUrl}?embed_domain=${location.hostname}&embed_type=Inline"
        width="100%" height="630" frameborder="0" title="Schedule a meeting"></iframe>`;
    }
  }

  const form = el('booking-form');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const data = new FormData(form);
    const name    = data.get('name')    || '';
    const email   = data.get('email')   || '';
    const subject = data.get('subject') || '';
    const message = data.get('message') || '';

    if (p.formspreeId) {
      fetch(`https://formspree.io/f/${p.formspreeId}`, {
        method: 'POST', headers: { Accept: 'application/json' }, body: data,
      }).then(r => {
        if (r.ok) showBookingStatus('Message sent! I will get back to you soon.', true);
        else      showBookingStatus('Something went wrong. Please email me directly.', false);
      }).catch(() => showBookingStatus('Network error. Please email me directly.', false));
    } else {
      const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
      location.href = `mailto:${p.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }
  });
}

function showBookingStatus (msg, ok) {
  let s = el('booking-status');
  if (!s) { s = h('p', 'booking-status'); el('booking-form').after(s); }
  s.textContent = msg;
  s.style.color = ok ? 'var(--accent)' : '#e74c3c';
}

/* ── Scroll progress bar ───────────────────────────────── */
function initScrollProgress () {
  const bar = el('scroll-progress');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
    bar.style.width = Math.min(pct, 100) + '%';
  }, { passive: true });
}

/* ── Back-to-top button ────────────────────────────────── */
function initBackToTop () {
  const btn = el('back-to-top');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ── Dark mode toggle ──────────────────────────────────── */
function initDarkMode () {
  const btn = el('dark-toggle');
  if (!btn) return;
  const root = document.documentElement;
  const apply = (dark) => {
    root.setAttribute('data-theme', dark ? 'dark' : 'light');
    btn.textContent = dark ? '☀' : '☾';
    btn.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
  };
  const stored = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  apply(stored ? stored === 'dark' : prefersDark);

  btn.addEventListener('click', () => {
    const isDark = root.getAttribute('data-theme') === 'dark';
    apply(!isDark);
    localStorage.setItem('theme', !isDark ? 'dark' : 'light');
  });
}

/* ── Typewriter cycling subtitle ───────────────────────── */
function initTypewriter () {
  const target = el('typewriter-text');
  if (!target) return;
  const phrases = [
    DATA.personal.title,
    'Machine Learning Researcher',
    'AutoML & Ensemble Learning',
    'Cyber-Physical Security',
    'Deputy Programme Leader',
    'Higher Education Fellow (FHEA)',
  ];
  let pi = 0, ci = 0, deleting = false;
  const tick = () => {
    const phrase = phrases[pi];
    if (!deleting) {
      target.textContent = phrase.slice(0, ++ci);
      if (ci === phrase.length) { deleting = true; setTimeout(tick, 2000); return; }
    } else {
      target.textContent = phrase.slice(0, --ci);
      if (ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; }
    }
    setTimeout(tick, deleting ? 40 : 80);
  };
  tick();
}

/* ── Animated stat counters ────────────────────────────── */
function initCounters () {
  const counters = document.querySelectorAll('.counter');
  if (!counters.length) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      obs.unobserve(entry.target);
      const el   = entry.target;
      const end  = parseInt(el.dataset.target, 10);
      const suf  = el.dataset.suffix || '';
      const dur  = 1200;
      const step = Math.ceil(end / (dur / 16));
      let cur = 0;
      const timer = setInterval(() => {
        cur = Math.min(cur + step, end);
        el.textContent = cur + suf;
        if (cur >= end) clearInterval(timer);
      }, 16);
    });
  }, { threshold: 0.5 });
  counters.forEach(c => obs.observe(c));
}

/* ── Publication filter tabs ───────────────────────────── */
function initPubFilter () {
  const container = el('pub-filters');
  if (!container) return;

  const sections = [
    { key: 'all',        label: 'All' },
    { key: 'journal',    label: 'Journal',    id: 'pub-journal-section' },
    { key: 'conference', label: 'Conference', id: 'pub-conf-section'    },
    { key: 'book',       label: 'Book',       id: 'pub-book-section'    },
    { key: 'prep',       label: 'In Prep',    id: 'pub-prep-section'    },
  ];

  sections.forEach(s => {
    const btn = h('button', 'pub-filter-btn' + (s.key === 'all' ? ' active' : ''), s.label);
    btn.dataset.filter = s.key;
    btn.addEventListener('click', () => {
      document.querySelectorAll('.pub-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.pub-section').forEach(sec => {
        sec.style.display = (s.key === 'all' || sec.dataset.type === s.key) ? '' : 'none';
      });
    });
    container.appendChild(btn);
  });
}

/* ── Canvas hero particles ─────────────────────────────── */
function initParticles () {
  const canvas = el('hero-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];

  const resize = () => {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  };
  resize();
  window.addEventListener('resize', resize);

  const N = 55;
  for (let i = 0; i < N; i++) {
    particles.push({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 2 + 1,
    });
  }

  const draw = () => {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(232,160,32,0.35)';
      ctx.fill();
    });
    particles.forEach((a, i) => {
      for (let j = i + 1; j < particles.length; j++) {
        const b = particles[j];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < 120) {
          ctx.beginPath();
          ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(232,160,32,${0.15 * (1 - d / 120)})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    });
    requestAnimationFrame(draw);
  };
  draw();
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

/* ── Section tab navigator ─────────────────────────────── */
function initSectionTabs () {
  const tabs    = document.querySelectorAll('.sec-tab');
  const panels  = document.querySelectorAll('.sec-panel');

  function showTab (secId) {
    // Find the tab that owns this secId
    const targetTab = [...tabs].find(t => t.dataset.sec === secId);
    if (!targetTab) return;

    // Deactivate all
    tabs.forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected','false'); });
    panels.forEach(p => p.classList.remove('active'));

    // Activate primary panel
    targetTab.classList.add('active');
    targetTab.setAttribute('aria-selected','true');
    const primary = document.getElementById(secId);
    if (primary) primary.classList.add('active');

    // Activate companion panel (e.g. booking alongside contact)
    const also = targetTab.dataset.also;
    if (also) {
      const companion = document.getElementById(also);
      if (companion) companion.classList.add('active');
    }

    // Update URL hash without triggering a scroll jump
    history.replaceState(null, '', '#' + secId);

    // Scroll to top of tab bar
    const nav = document.getElementById('sec-nav');
    if (nav) window.scrollTo({ top: nav.offsetTop - 62, behavior: 'smooth' });
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => showTab(tab.dataset.sec));
  });

  // Respect incoming hash (e.g. direct link to #publications)
  const hash = location.hash.replace('#','');
  const validIds = [...tabs].map(t => t.dataset.sec);
  if (hash && validIds.includes(hash)) {
    showTab(hash);
  } else {
    showTab('about');
  }

  // Keep top-nav links working: clicking any nav link switches to the right tab
  document.querySelectorAll('.nav-links a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href').replace('#','');
      if (validIds.includes(id)) { e.preventDefault(); showTab(id); }
    });
  });
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
  renderBooking();

  initSectionTabs();
  initNav();
  initFadeIn();
  initScrollProgress();
  initBackToTop();
  initDarkMode();
  initTypewriter();
  initCounters();
  initPubFilter();
  initParticles();
});
