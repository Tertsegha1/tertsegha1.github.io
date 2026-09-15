/* ── Tracker & Diary System ──────────────────────────────────────────────────
   Private project tracker with per-tracker checklists and daily diary.
   Auth:    sessionStorage (re-enters on new browser session).
   Local:   localStorage  (instant load / offline fallback).
   Remote:  Firebase Realtime Database REST API (cross-device sync).
            Configure js/trackers-db.js with your Firebase URL to enable sync.
   ────────────────────────────────────────────────────────────────────────── */

const TRK = (() => {

  /* ── Constants ─────────────────────────────────────────────────────────── */
  const PASS    = 'Tracker@2026';
  const SESSION = 'tja-tracker-auth-v1';
  const STORE   = 'tja-trackers-v2';

  /* ── Firebase helpers ──────────────────────────────────────────────────── */
  const DB_URL = (() => {
    const cfg = window.TRACKER_DB;
    if (!cfg || !cfg.databaseURL || cfg.databaseURL === 'REPLACE_WITH_YOUR_FIREBASE_RTDB_URL') return null;
    return cfg.databaseURL.replace(/\/$/, '');
  })();

  let remotePath = null;   // Set after auth — SHA-256 derived from password
  let sseConn    = null;   // EventSource for real-time push from other devices
  let saveTimer  = null;   // Debounce Firebase writes

  async function deriveRemotePath(password) {
    const enc  = new TextEncoder();
    const buf  = await crypto.subtle.digest('SHA-256', enc.encode('tja-tracker-v2:' + password));
    const hex  = Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
    return 'tja_' + hex.slice(0, 28);
  }

  async function remoteFetch(path) {
    const res = await fetch(`${DB_URL}/${path}/state.json`);
    if (!res.ok) return null;
    const val = await res.json();
    return val ? JSON.parse(val) : null;
  }

  function remotePush(path, stateObj) {
    if (!DB_URL || !path) return Promise.resolve();
    return fetch(`${DB_URL}/${path}/state.json`, {
      method:  'PUT',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify(JSON.stringify(stateObj)),
    });
  }

  function remoteSubscribe(path, onChange) {
    if (!DB_URL || !path) return;
    if (sseConn) { sseConn.close(); sseConn = null; }
    const es = new EventSource(`${DB_URL}/${path}/state.json`);
    es.addEventListener('put', e => {
      try {
        const msg = JSON.parse(e.data);
        if (msg.data) onChange(JSON.parse(msg.data));
      } catch {}
    });
    es.onerror = () => setSyncStatus('offline');
    sseConn = es;
  }

  async function initRemoteSync(password) {
    if (!DB_URL) { setSyncStatus('local'); return; }
    setSyncStatus('syncing');
    try {
      remotePath = await deriveRemotePath(password);
      const remote = await remoteFetch(remotePath);
      if (remote && (remote._ts || 0) > (state._ts || 0)) {
        state = remote;
        saveLocal();
        renderSidebar();
        renderMain();
      } else {
        await remotePush(remotePath, state);
      }
      setSyncStatus('synced');
      remoteSubscribe(remotePath, incoming => {
        if (incoming && (incoming._ts || 0) > (state._ts || 0)) {
          state = incoming;
          saveLocal();
          renderSidebar();
          renderMain();
          setSyncStatus('synced');
        }
      });
    } catch(e) {
      setSyncStatus('offline');
    }
  }

  function setSyncStatus(status) {
    const el = document.getElementById('trk-sync-status');
    if (!el) return;
    const map = {
      syncing: ['…', '#8898aa', 'Syncing…'],
      synced:  ['☁', '#1A8A5C', 'Synced'],
      offline: ['!', '#C97820', 'Offline — local only'],
      local:   ['▪', '#8898aa', 'Local only (sync not configured)'],
    };
    const [icon, color, title] = map[status] || map.local;
    el.textContent = icon + ' ' + (status === 'synced' ? 'Synced' : status === 'offline' ? 'Offline' : status === 'syncing' ? 'Syncing…' : 'Local');
    el.style.color = color;
    el.title = title;
  }

  /* ── GTV seed ──────────────────────────────────────────────────────────── */
  const GTV_SEED = {
    id: 'gtv-2026',
    name: 'Global Talent Visa',
    icon: '🎯',
    created: '2026-09-15',
    color: '#1264A3',
    target: '13 Oct 2026',
    milestones: [
      { label: 'Target submission', date: '13 Oct 2026',  note: 'DSIT endorsement application', cls: 'key'    },
      { label: 'DSIT decision',     date: '~8 Dec 2026',  note: '8 weeks after submission',       cls: 'key'    },
      { label: 'Visa grant',        date: '~6 Jan 2027',  note: '3 weeks HO processing',          cls: 'key'    },
      { label: 'SWV expiry',        date: 'June 2027',    note: 'Switch before this date',        cls: 'warn'   },
      { label: 'ILR earliest',      date: 'Jun/Oct 2029', note: '5 years continuous leave',       cls: 'target' },
    ],
    phases: [
      {
        id: 'p0', title: 'Do Today', target: 'Week of 15 Sep 2026',
        urgency: 'critical', badge: 'Urgent',
        note: 'These five steps unlock everything downstream.',
        items: [
          { id: 'p0-0', text: 'Book immigration solicitor consultation',            sub: 'Ask specifically: switch from SWV to GT, ILR timeline' },
          { id: 'p0-1', text: 'Send referee email and brief to all four referees',  sub: 'Attach Referee_Brief_Dr_TJ_Anande.docx' },
          { id: 'p0-2', text: 'Take a dated Google Scholar screenshot',             sub: 'h-index 5, i10 5, 105 citations — save as PDF' },
          { id: 'p0-3', text: 'Read current DSIT Exceptional Promise guidance',     sub: 'Download from gov.uk — criteria may have been updated' },
          { id: 'p0-4', text: 'Create DSIT applicant account on GOV.UK One Login', sub: 'Set it up now so it\'s ready when you submit' },
        ]
      },
      {
        id: 'p1', title: 'Personal Statement', target: 'Due by 29 Sep 2026',
        urgency: 'urgent', badge: 'Draft First',
        note: '800–1,000 words. Panel\'s first impression — specific, not generic.',
        sections: [
          { label: 'Content to cover', items: [
            { id: 'p1-0', text: 'Opening: who you are and your exceptional promise in digital technology' },
            { id: 'p1-1', text: 'Research impact: h-index 5, 105 citations, 5 published + 1 Springer Nature under review' },
            { id: 'p1-2', text: 'Deployed innovations: AI Marking (2 cohorts), Digital Transformation Studio, Codify, OfflinePay' },
            { id: 'p1-3', text: 'Recognition: keynote ICRIEMS/ICE-ELINVO 2026, FHEA, MBCS, AUKTIE exec training' },
            { id: 'p1-4', text: 'UK contribution plans: what you will build for UK digital tech sector' },
          ]},
          { label: 'Process', items: [
            { id: 'p1-5', text: 'First draft completed' },
            { id: 'p1-6', text: 'Solicitor review of personal statement' },
            { id: 'p1-7', text: 'Final version saved as PDF' },
          ]}
        ]
      },
      {
        id: 'p2', title: 'CV — 3 Pages Maximum', target: 'Due by 22 Sep 2026',
        urgency: 'urgent', badge: 'Week 1',
        note: 'DSIT hard limit. Digital technology impact must lead.',
        items: [
          { id: 'p2-0', text: 'Condense full CV to 3 pages maximum' },
          { id: 'p2-1', text: 'Lead with key digital innovations and measurable impact' },
          { id: 'p2-2', text: 'Include Google Scholar metrics inline (h-index, citations)' },
          { id: 'p2-3', text: 'Include all 5 publications and Springer Nature submission' },
          { id: 'p2-4', text: 'Solicitor or peer review of condensed CV' },
          { id: 'p2-5', text: 'Final version saved as PDF' },
        ]
      },
      {
        id: 'p3', title: 'Evidence Portfolio', target: 'Due by 29 Sep 2026',
        urgency: 'urgent', badge: 'Max 10 Docs',
        note: 'DSIT allows up to 10 supporting documents.',
        sections: [
          { label: 'Recognition & standing', items: [
            { id: 'p3-0', text: 'Google Scholar screenshot — h-index 5, i10 5, 105 citations (Doc 1)' },
            { id: 'p3-1', text: 'Keynote invitation letter(s) — ICRIEMS / ICE-ELINVO 2026 (Doc 2)' },
            { id: 'p3-2', text: 'FHEA certificate — Higher Education Academy (Doc 3)' },
            { id: 'p3-3', text: 'MBCS membership certificate — BCS (Doc 4)' },
          ]},
          { label: 'Innovation & deployment', items: [
            { id: 'p3-4', text: 'AI Marking System: letter confirming live use across 2 cohorts (Doc 5)' },
            { id: 'p3-5', text: 'Codify: usage data or institutional acknowledgement (Doc 6)' },
            { id: 'p3-6', text: 'AUKTIE: letter confirming Lead Trainer appointment Jun–Jul 2026 (Doc 7)' },
          ]},
          { label: 'Research output', items: [
            { id: 'p3-7', text: '1–2 highest-cited publication PDFs (Doc 8)' },
            { id: 'p3-8', text: 'Springer Nature submission confirmation email (Doc 9)' },
          ]},
          { label: 'Credentials', items: [
            { id: 'p3-9', text: 'PhD degree certificate — University of Warwick (Doc 10)' },
          ]}
        ]
      },
      {
        id: 'p4', title: 'Reference Letters', target: 'Collect by 6 Oct 2026',
        urgency: 'urgent', badge: 'Chase Often',
        note: 'Minimum 3. Collect all four. Chase at 10 days if no response.',
        sections: [
          { label: 'Letters to collect', items: [
            { id: 'p4-0', text: 'PhD supervisor — Prof. Leeson, University of Warwick' },
            { id: 'p4-1', text: 'Research Fellow supervisor — Warwick School of Engineering' },
            { id: 'p4-2', text: 'Line Manager / Deputy Dean of Computing — QAHE' },
            { id: 'p4-3', text: 'Dean of Computing — QAHE' },
          ]},
          { label: 'Quality check each letter', items: [
            { id: 'p4-4', text: 'Written on headed institutional paper' },
            { id: 'p4-5', text: 'Addressed to the DSIT endorsement panel' },
            { id: 'p4-6', text: 'Signed and dated' },
            { id: 'p4-7', text: '1–2 pages in length' },
            { id: 'p4-8', text: 'Referee confirmed consent to be named' },
          ]}
        ]
      },
      {
        id: 'p5', title: 'Application Assembly & Submission', target: 'Target 13 Oct 2026',
        urgency: 'normal', badge: 'Submit',
        note: 'Final solicitor review before submitting. Once submitted, you cannot edit.',
        items: [
          { id: 'p5-0', text: 'Solicitor final review of complete application package' },
          { id: 'p5-1', text: 'Personal statement — final version confirmed' },
          { id: 'p5-2', text: 'CV — confirmed 3 pages or under' },
          { id: 'p5-3', text: 'All evidence documents uploaded (up to 10)' },
          { id: 'p5-4', text: 'All reference letters collected and uploaded' },
          { id: 'p5-5', text: 'Pay DSIT endorsement fee: £524' },
          { id: 'p5-6', text: 'Submit DSIT endorsement application' },
          { id: 'p5-7', text: 'Record DSIT case reference number' },
          { id: 'p5-8', text: 'Set calendar reminder — 8 weeks from submission (~8 Dec 2026)' },
        ]
      },
      {
        id: 'p6', title: 'While DSIT Processes', target: 'Oct – Dec 2026',
        urgency: 'waiting', badge: 'Watch & Prepare',
        note: '~8 weeks processing. Prepare visa fees in parallel.',
        sections: [
          { label: 'Monitor', items: [
            { id: 'p6-0', text: 'Check email daily for DSIT queries — respond promptly' },
            { id: 'p6-1', text: 'If redundancy notice received: contact solicitor same day' },
          ]},
          { label: 'Prepare visa fees', items: [
            { id: 'p6-2', text: 'Confirm current Home Office Global Talent fee (~£822) on gov.uk' },
            { id: 'p6-3', text: 'Calculate IHS — ~£1,035/year × 5 years = ~£5,175' },
            { id: 'p6-4', text: 'Confirm funds available' },
          ]},
          { label: 'Contingency', items: [
            { id: 'p6-5', text: 'Research alternative Skilled Worker sponsors as backup' },
            { id: 'p6-6', text: 'Keep portfolio and CV current' },
          ]}
        ]
      },
      {
        id: 'p7', title: 'After Endorsement', target: '3-month window from endorsement',
        urgency: 'waiting', badge: 'Do Not Delay',
        note: '3-month visa application window from endorsement date. Apply immediately.',
        items: [
          { id: 'p7-0',  text: 'Receive DSIT endorsement letter' },
          { id: 'p7-1',  text: 'Note the endorsement date — 3-month window starts now' },
          { id: 'p7-2',  text: 'Apply for Global Talent Visa via UKVI portal' },
          { id: 'p7-3',  text: 'Pay Home Office visa fee (~£822)' },
          { id: 'p7-4',  text: 'Pay Immigration Health Surcharge (~£5,175)' },
          { id: 'p7-5',  text: 'Book biometrics appointment at UKVCAS service point' },
          { id: 'p7-6',  text: 'Upload supporting documents to UKVI portal' },
          { id: 'p7-7',  text: 'Attend biometrics appointment' },
          { id: 'p7-8',  text: 'Await visa decision — ~3 weeks standard processing' },
          { id: 'p7-9',  text: 'Receive Biometric Residence Permit (BRP) by post' },
          { id: 'p7-10', text: 'Consult solicitor on timing of notifying employer' },
        ]
      }
    ]
  };

  /* ── State ─────────────────────────────────────────────────────────────── */
  let state    = null;
  let activeId = null;
  let activeInnerTab = 'checklist';

  /* ── Local storage ─────────────────────────────────────────────────────── */
  function loadLocal() {
    try {
      const raw = localStorage.getItem(STORE);
      state = raw ? JSON.parse(raw) : null;
    } catch(e) { state = null; }

    if (!state || !Array.isArray(state.trackers) || state.trackers.length === 0) {
      state = { trackers: [JSON.parse(JSON.stringify(GTV_SEED))], _ts: Date.now() };
      state.trackers[0].checks = {};
      state.trackers[0].diary  = [];
    }
    state.trackers.forEach(t => {
      if (!t.checks) t.checks = {};
      if (!t.diary)  t.diary  = [];
    });
    if (!state._ts) state._ts = 0;
  }

  function saveLocal() {
    try { localStorage.setItem(STORE, JSON.stringify(state)); } catch(e) {}
  }

  function save() {
    state._ts = Date.now();
    saveLocal();
    // Debounce Firebase writes — batch rapid checkbox changes into one write
    if (DB_URL && remotePath) {
      clearTimeout(saveTimer);
      setSyncStatus('syncing');
      saveTimer = setTimeout(() => {
        remotePush(remotePath, state)
          .then(() => setSyncStatus('synced'))
          .catch(() => setSyncStatus('offline'));
      }, 800);
    }
  }

  /* ── Auth ──────────────────────────────────────────────────────────────── */
  function isAuthed() {
    try { return sessionStorage.getItem(SESSION) === '1'; } catch(e) { return false; }
  }

  function setAuthed() {
    try { sessionStorage.setItem(SESSION, '1'); } catch(e) {}
  }

  /* ── Progress helpers ──────────────────────────────────────────────────── */
  function allItems(tracker) {
    const items = [];
    tracker.phases.forEach(phase => {
      if (phase.items)    phase.items.forEach(i => items.push(i));
      if (phase.sections) phase.sections.forEach(s => s.items.forEach(i => items.push(i)));
    });
    return items;
  }

  function progress(tracker) {
    const items = allItems(tracker);
    const done  = items.filter(i => !!tracker.checks[i.id]).length;
    return { done, total: items.length, pct: items.length ? Math.round(done / items.length * 100) : 0 };
  }

  /* ── DOM helpers ───────────────────────────────────────────────────────── */
  function el(id)           { return document.getElementById(id); }
  function qs(sel, root)    { return (root || document).querySelector(sel); }
  function mk(tag, cls, html) {
    const e = document.createElement(tag);
    if (cls)  e.className = cls;
    if (html !== undefined) e.innerHTML = html;
    return e;
  }

  function fmt(dateStr) {
    try {
      const d = new Date(dateStr + 'T00:00:00');
      return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    } catch(e) { return dateStr; }
  }

  function today() {
    return new Date().toISOString().slice(0, 10);
  }

  /* ── Entry point ───────────────────────────────────────────────────────── */
  function init() {
    loadLocal();
    if (isAuthed()) {
      showApp();
      // Re-sync on tab revisit (password already in sessionStorage — re-derive path)
      if (DB_URL) {
        deriveRemotePath(PASS).then(path => {
          remotePath = path;
          remoteFetch(path).then(remote => {
            if (remote && (remote._ts || 0) > (state._ts || 0)) {
              state = remote;
              saveLocal();
              renderSidebar();
              renderMain();
            }
            setSyncStatus('synced');
            remoteSubscribe(path, incoming => {
              if (incoming && (incoming._ts || 0) > (state._ts || 0)) {
                state = incoming;
                saveLocal();
                renderSidebar();
                renderMain();
                setSyncStatus('synced');
              }
            });
          }).catch(() => setSyncStatus('offline'));
        });
      }
    } else {
      showGate();
    }
  }

  /* ── Auth gate ─────────────────────────────────────────────────────────── */
  function showGate() {
    const section = el('trackers');
    section.innerHTML = '';

    const gate = mk('div', '');
    gate.id = 'trk-gate';
    gate.innerHTML = `
      <div class="trk-gate-card">
        <span class="trk-gate-icon">🔐</span>
        <h2>Private Workspace</h2>
        <p>Project trackers and diary entries. Restricted access.</p>
        <div class="trk-gate-field">
          <label for="trk-pass">Access Code</label>
          <div class="pw-wrap">
            <input type="password" id="trk-pass" placeholder="Enter access code"
              autocomplete="new-password" spellcheck="false" autocorrect="off" autocapitalize="none">
            <button class="trk-eye" id="trk-eye" type="button" onclick="TRK.togglePass()" aria-label="Show/hide">👁</button>
          </div>
        </div>
        <button class="trk-gate-btn" id="trk-submit-btn" onclick="TRK.doAuth()">Continue →</button>
        <div class="trk-gate-err" id="trk-gate-err"></div>
        <div class="trk-gate-hint" id="trk-gate-hint">5 attempts before lockout</div>
      </div>`;

    section.appendChild(gate);
    gate._attempts = 0;
    const input = el('trk-pass');
    input.addEventListener('keydown', e => { if (e.key === 'Enter') doAuth(); });
    setTimeout(() => input.focus(), 50);
  }

  function togglePass() {
    const inp = el('trk-pass');
    const btn = el('trk-eye');
    inp.type = inp.type === 'password' ? 'text' : 'password';
    btn.textContent = inp.type === 'password' ? '👁' : '🙈';
  }

  function doAuth() {
    const gate  = el('trk-gate');
    const input = el('trk-pass');
    const err   = el('trk-gate-err');
    const hint  = el('trk-gate-hint');
    const btn   = el('trk-submit-btn');

    if (gate._locked) return;
    if (input.value.trim() === PASS) {
      setAuthed();
      showApp();
      initRemoteSync(PASS);
    } else {
      gate._attempts = (gate._attempts || 0) + 1;
      input.value = '';
      const remaining = 5 - gate._attempts;
      err.textContent = 'Incorrect access code.';
      if (remaining > 0) {
        hint.textContent = remaining + ' attempt' + (remaining === 1 ? '' : 's') + ' remaining.';
      } else {
        gate._locked = true;
        err.textContent = 'Too many failed attempts. Reload the page to try again.';
        hint.textContent = '';
        btn.disabled   = true;
        input.disabled = true;
      }
    }
  }

  /* ── App shell ─────────────────────────────────────────────────────────── */
  function showApp() {
    const section = el('trackers');
    section.innerHTML = '';

    const app = mk('div', '');
    app.id = 'trk-app';

    const syncLabel = DB_URL ? '<span id="trk-sync-status" class="trk-sync-status">…</span>' : '<span id="trk-sync-status" class="trk-sync-status" style="color:var(--text-light)">▪ Local</span>';

    app.innerHTML = `
      <div class="trk-topbar">
        <div class="trk-topbar-title">🔐 My Trackers <span>· Private</span></div>
        ${syncLabel}
        <div class="trk-topbar-actions">
          <button class="trk-btn trk-btn-primary" onclick="TRK.openNew()">+ New Tracker</button>
          <button class="trk-btn trk-btn-ghost"   onclick="TRK.lock()" title="Lock workspace">🔒 Lock</button>
        </div>
      </div>
      <div class="trk-sidebar" id="trk-sidebar"></div>
      <div class="trk-main"    id="trk-main"></div>`;

    section.appendChild(app);
    if (!DB_URL) setSyncStatus('local');

    activeId = state.trackers[0]?.id || null;
    renderSidebar();
    renderMain();
  }

  /* ── Sidebar ───────────────────────────────────────────────────────────── */
  function renderSidebar() {
    const sb = el('trk-sidebar');
    if (!sb) return;
    sb.innerHTML = '';
    const lbl = mk('div', 'trk-sidebar-label', 'Projects');
    sb.appendChild(lbl);

    state.trackers.forEach(t => {
      const p = progress(t);
      const item = mk('div', 'trk-sidebar-item' + (t.id === activeId ? ' active' : ''));
      item.innerHTML = `
        <div class="trk-sidebar-icon">${t.icon || '📋'}</div>
        <div class="trk-sidebar-info">
          <div class="trk-sidebar-name">${esc(t.name)}</div>
          <div class="trk-sidebar-meta">${p.done}/${p.total} items</div>
        </div>
        <div class="trk-sidebar-pct">${p.pct}%</div>`;
      item.addEventListener('click', () => {
        activeId = t.id;
        activeInnerTab = 'checklist';
        renderSidebar();
        renderMain();
      });
      sb.appendChild(item);
    });
  }

  /* ── Main panel ────────────────────────────────────────────────────────── */
  function renderMain() {
    const main = el('trk-main');
    if (!main) return;
    main.innerHTML = '';

    if (!activeId) {
      main.innerHTML = `<div class="trk-empty">
        <div class="trk-empty-icon">📋</div>
        <h3>No tracker selected</h3>
        <p>Select a project or create a new tracker.</p>
      </div>`;
      return;
    }

    const tracker = state.trackers.find(t => t.id === activeId);
    if (!tracker) return;

    const p = progress(tracker);
    const hdr = mk('div', 'trk-header');
    const daysStr = daysUntil(tracker.target);

    hdr.innerHTML = `
      <div class="trk-header-top">
        <div class="trk-header-icon">${tracker.icon || '📋'}</div>
        <div class="trk-header-name">${esc(tracker.name)}</div>
        ${tracker.target ? `<div class="trk-header-target">${esc(tracker.target)}</div>` : ''}
        ${daysStr        ? `<div class="trk-header-countdown">${daysStr}</div>` : ''}
        <button class="trk-btn trk-btn-danger" style="margin-left:auto" onclick="TRK.deleteTracker('${tracker.id}')">Delete</button>
      </div>
      <div class="trk-progress-row">
        <div class="trk-progress-bar"><div class="trk-progress-fill" style="width:${p.pct}%"></div></div>
        <div class="trk-progress-label">${p.done} of ${p.total} complete (${p.pct}%)</div>
      </div>`;
    main.appendChild(hdr);

    if (tracker.milestones?.length) {
      const ms = mk('div', 'trk-milestones');
      tracker.milestones.forEach(m => {
        const item = mk('div', `trk-milestone ${m.cls || ''}`);
        item.innerHTML = `
          <div class="trk-milestone-label">${esc(m.label)}</div>
          <div class="trk-milestone-date">${esc(m.date)}</div>
          <div class="trk-milestone-note">${esc(m.note || '')}</div>`;
        ms.appendChild(item);
      });
      main.appendChild(ms);
    }

    const tabs = mk('div', 'trk-tabs');
    tabs.innerHTML = `
      <button class="trk-tab ${activeInnerTab === 'checklist' ? 'active' : ''}" onclick="TRK.switchTab('checklist')">✓ Checklist</button>
      <button class="trk-tab ${activeInnerTab === 'diary'     ? 'active' : ''}" onclick="TRK.switchTab('diary')">📓 Diary</button>`;
    main.appendChild(tabs);

    if (activeInnerTab === 'checklist') {
      renderChecklist(main, tracker);
    } else {
      renderDiary(main, tracker);
    }
  }

  function switchTab(tab) {
    activeInnerTab = tab;
    renderMain();
  }

  /* ── Checklist ─────────────────────────────────────────────────────────── */
  function renderChecklist(container, tracker) {
    const wrap = mk('div', 'trk-checklist');

    tracker.phases.forEach(phase => {
      const phaseEl = mk('div', 'trk-phase');
      phaseEl.dataset.urgency = phase.urgency || 'normal';

      const phaseItems = [];
      if (phase.items)    phase.items.forEach(i => phaseItems.push(i));
      if (phase.sections) phase.sections.forEach(s => s.items.forEach(i => phaseItems.push(i)));
      const pDone = phaseItems.filter(i => !!tracker.checks[i.id]).length;

      const badgeCls = { critical:'badge-critical', urgent:'badge-urgent', normal:'badge-normal', waiting:'badge-waiting' }[phase.urgency || 'normal'] || 'badge-normal';

      const hd = mk('div', 'trk-phase-hd');
      hd.innerHTML = `
        <div class="trk-phase-title">${esc(phase.title)}</div>
        <div class="trk-phase-target">${esc(phase.target || '')}</div>
        <span class="trk-phase-badge ${badgeCls}">${esc(phase.badge || '')}</span>
        <div class="trk-phase-count">${pDone}/${phaseItems.length}</div>
        <div class="trk-phase-caret">▼</div>`;
      hd.addEventListener('click', () => phaseEl.classList.toggle('collapsed'));
      phaseEl.appendChild(hd);

      if (phase.note) phaseEl.appendChild(mk('div', 'trk-phase-note', esc(phase.note)));

      const items = mk('div', 'trk-phase-items');
      if (phase.sections) {
        phase.sections.forEach(sec => {
          items.appendChild(mk('div', 'trk-sec-label', esc(sec.label)));
          sec.items.forEach(item => items.appendChild(makeItemEl(item, tracker)));
        });
      } else if (phase.items) {
        phase.items.forEach(item => items.appendChild(makeItemEl(item, tracker)));
      }

      phaseEl.appendChild(items);
      wrap.appendChild(phaseEl);
    });

    container.appendChild(wrap);
  }

  function makeItemEl(item, tracker) {
    const checked = !!tracker.checks[item.id];
    const label = mk('label', 'trk-item' + (checked ? ' done' : ''));

    const cb = document.createElement('input');
    cb.type = 'checkbox';
    cb.checked = checked;
    cb.addEventListener('change', () => {
      tracker.checks[item.id] = cb.checked;
      save();
      label.classList.toggle('done', cb.checked);
      updateProgressDisplay(tracker);
    });

    label.appendChild(cb);
    label.appendChild(mk('div', 'trk-item-text', esc(item.text) + (item.sub ? `<small>${esc(item.sub)}</small>` : '')));
    return label;
  }

  function updateProgressDisplay(tracker) {
    const p = progress(tracker);
    const fill = qs('.trk-progress-fill');
    const lbl  = qs('.trk-progress-label');
    if (fill) fill.style.width = p.pct + '%';
    if (lbl)  lbl.textContent = `${p.done} of ${p.total} complete (${p.pct}%)`;

    tracker.phases.forEach(phase => {
      const phaseItems = [];
      if (phase.items)    phase.items.forEach(i => phaseItems.push(i));
      if (phase.sections) phase.sections.forEach(s => s.items.forEach(i => phaseItems.push(i)));
      const done = phaseItems.filter(i => !!tracker.checks[i.id]).length;
      document.querySelectorAll('.trk-phase').forEach(phaseEl => {
        const titleEl = phaseEl.querySelector('.trk-phase-title');
        if (titleEl && titleEl.textContent === phase.title) {
          const countEl = phaseEl.querySelector('.trk-phase-count');
          if (countEl) countEl.textContent = `${done}/${phaseItems.length}`;
        }
      });
    });

    const sbMeta = qs(`.trk-sidebar-item.active .trk-sidebar-meta`);
    const sbPct  = qs(`.trk-sidebar-item.active .trk-sidebar-pct`);
    if (sbMeta) sbMeta.textContent = `${p.done}/${p.total} items`;
    if (sbPct)  sbPct.textContent  = `${p.pct}%`;
  }

  /* ── Diary ─────────────────────────────────────────────────────────────── */
  function renderDiary(container, tracker) {
    const wrap = mk('div', 'trk-diary');

    const addWrap = mk('div', 'trk-diary-add');
    addWrap.innerHTML = `
      <textarea id="trk-diary-text" placeholder="What happened today — progress made, decisions taken, what's next…" rows="3"></textarea>
      <div class="trk-diary-add-right">
        <input type="date" id="trk-diary-date" value="${today()}" class="trk-diary-date">
        <button class="trk-btn trk-btn-primary" onclick="TRK.addEntry()">Add Entry</button>
      </div>`;
    wrap.appendChild(addWrap);

    const list = mk('div', 'trk-diary-entries');
    const sorted = [...(tracker.diary || [])].sort((a, b) => b.date.localeCompare(a.date));

    if (sorted.length === 0) {
      list.innerHTML = '<div class="trk-diary-empty">No diary entries yet.<br>Record your first update above.</div>';
    } else {
      sorted.forEach((entry, idx) => {
        const row = mk('div', 'trk-entry');
        row.innerHTML = `
          <div class="trk-entry-date-col"><div class="trk-entry-date">${fmt(entry.date)}</div></div>
          <div class="trk-entry-dot"></div>
          <div class="trk-entry-body">
            <div class="trk-entry-text">${esc(entry.text)}</div>
            <button class="trk-entry-del" onclick="TRK.deleteEntry(${idx})" title="Delete">✕</button>
          </div>`;
        list.appendChild(row);
      });
    }
    wrap.appendChild(list);
    container.appendChild(wrap);
  }

  function addEntry() {
    const textEl = el('trk-diary-text');
    const dateEl = el('trk-diary-date');
    const text   = textEl?.value.trim();
    const date   = dateEl?.value || today();

    if (!text) { if (textEl) { textEl.focus(); textEl.style.borderColor = '#c03030'; setTimeout(() => textEl.style.borderColor = '', 800); } return; }
    const tracker = state.trackers.find(t => t.id === activeId);
    if (!tracker) return;

    tracker.diary.push({ date, text, id: Date.now() });
    save();
    switchTab('diary');
  }

  function deleteEntry(idx) {
    const tracker = state.trackers.find(t => t.id === activeId);
    if (!tracker) return;
    const sorted = [...tracker.diary].sort((a, b) => b.date.localeCompare(a.date));
    const entry  = sorted[idx];
    if (!entry) return;
    const realIdx = tracker.diary.findIndex(e => e === entry || (e.date === entry.date && e.text === entry.text));
    if (realIdx > -1) { tracker.diary.splice(realIdx, 1); save(); }
    switchTab('diary');
  }

  /* ── New tracker modal ─────────────────────────────────────────────────── */
  function openNew() {
    el('trk-modal-backdrop')?.remove();
    const backdrop = mk('div', 'trk-modal-backdrop');
    backdrop.id = 'trk-modal-backdrop';
    backdrop.addEventListener('click', e => { if (e.target === backdrop) closeModal(); });
    backdrop.innerHTML = `
      <div class="trk-modal">
        <h3>New Tracker</h3>
        <div class="trk-modal-field">
          <label>Name</label>
          <input type="text" id="nm-name" placeholder="e.g. Research Paper Submission" maxlength="80">
        </div>
        <div class="trk-modal-field" style="display:flex;gap:0.75rem;">
          <div style="flex:0 0 80px">
            <label>Icon</label>
            <input type="text" id="nm-icon" placeholder="📋" maxlength="4" style="text-align:center;font-size:1.2rem;">
          </div>
          <div style="flex:1">
            <label>Target date (optional)</label>
            <input type="text" id="nm-target" placeholder="e.g. 31 Dec 2026" maxlength="40">
          </div>
        </div>
        <div class="trk-modal-field">
          <label>Phases (one per line — add checklist items after creating)</label>
          <textarea id="nm-phases" placeholder="Preparation&#10;Submission&#10;Follow-up" rows="4"></textarea>
        </div>
        <div class="trk-modal-footer">
          <button class="trk-btn trk-btn-ghost" onclick="TRK.closeModal()">Cancel</button>
          <button class="trk-btn trk-btn-primary" onclick="TRK.saveNew()">Create</button>
        </div>
      </div>`;
    document.body.appendChild(backdrop);
    setTimeout(() => el('nm-name')?.focus(), 50);
  }

  function closeModal() { el('trk-modal-backdrop')?.remove(); }

  function saveNew() {
    const name   = el('nm-name')?.value.trim();
    const icon   = el('nm-icon')?.value.trim() || '📋';
    const target = el('nm-target')?.value.trim() || '';
    const phases = (el('nm-phases')?.value || '').split('\n').map(s => s.trim()).filter(Boolean);

    if (!name) { el('nm-name').focus(); el('nm-name').style.borderColor = '#c03030'; setTimeout(() => el('nm-name').style.borderColor = '', 800); return; }

    const id = 'trk-' + Date.now();
    state.trackers.push({
      id, name, icon, target, created: today(),
      phases: phases.map((p, i) => ({ id: id + '-p' + i, title: p, urgency: 'normal', badge: '', items: [] })),
      checks: {},
      diary: [],
    });
    save();
    closeModal();
    activeId = id;
    activeInnerTab = 'checklist';
    renderSidebar();
    renderMain();
  }

  /* ── Delete tracker ────────────────────────────────────────────────────── */
  function deleteTracker(id) {
    if (state.trackers.length <= 1) { alert('You need at least one tracker. Create a new one first.'); return; }
    const t = state.trackers.find(t => t.id === id);
    if (!t || !confirm(`Delete "${t.name}" and all its diary entries? This cannot be undone.`)) return;
    state.trackers = state.trackers.filter(t => t.id !== id);
    save();
    activeId = state.trackers[0]?.id || null;
    renderSidebar();
    renderMain();
  }

  /* ── Lock ──────────────────────────────────────────────────────────────── */
  function lock() {
    if (sseConn) { sseConn.close(); sseConn = null; }
    remotePath = null;
    try { sessionStorage.removeItem(SESSION); } catch(e) {}
    init();
  }

  /* ── Countdown ─────────────────────────────────────────────────────────── */
  function daysUntil(targetStr) {
    if (!targetStr) return '';
    const d = new Date(targetStr);
    if (isNaN(d)) return '';
    const days = Math.ceil((d - new Date()) / 86400000);
    if (days > 0)  return days + 'd to target';
    if (days === 0) return 'Target is today';
    return Math.abs(days) + 'd overdue';
  }

  /* ── HTML escape ───────────────────────────────────────────────────────── */
  function esc(str) {
    return String(str || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  /* ── Public API ────────────────────────────────────────────────────────── */
  return { init, togglePass, doAuth, switchTab, addEntry, deleteEntry, openNew, closeModal, saveNew, deleteTracker, lock };

})();

function initTrackers() { TRK.init(); }
