/* =========================================================================
   Python Academy — app engine
   Rendering, Pyodide runner, grading, progress/unlock chain, Firebase sync,
   certificate generator.
   ========================================================================= */

const CHAIN = ['week1','week2','week3','week4','mp1','week5','week6','week7','week8','week9','mp2','cert'];
window._editors = window._editors || {};

/* ---------------------------------------------------------------------
   Multi-level support (Beginner 'b' / Intermediate 'i' / Advanced 'a')
   Only one .page is ever active at a time (see showPage()), so a single
   CURRENT_LEVEL flag is safe — set once at the top of navGo()/enterPreviewMode()
   before anything else runs, then read by the render/grading/status functions
   below. The sidebar and hub cards are visible for all three levels at once
   though, so those specific functions explicitly loop over LEVELS instead of
   relying on CURRENT_LEVEL.
   --------------------------------------------------------------------- */
const LEVELS = ['b','i','a'];
const LEVEL_META = {
  b: {num:1, name:'Beginner', short:'B', slug:'beginner', tagline:'Foundations of Python', next:'i'},
  i: {num:2, name:'Intermediate', short:'I', slug:'intermediate', tagline:'Beyond the Basics', next:'a'},
  a: {num:3, name:'Advanced', short:'A', slug:'advanced', tagline:'Algorithms & Real Projects', next:null}
};
let CURRENT_LEVEL = 'b';

function levelOf(pageArg){
  const m = String(pageArg||'').match(/^([bia])_/);
  return m ? m[1] : 'b';
}
function stripLevelPrefix(pageArg){
  return String(pageArg||'').replace(/^[bia]_/,'');
}
// Non-Python subjects register their content here (see each subject's own
// data.js: SUBJECT_DATA.wd = {b:{weeks,mp1,mp2}, i:{...}, a:{...}}) instead
// of Python's hardcoded BEGINNER_WEEKS-style globals, so new subjects never
// need to touch these accessor functions or python-academy-data.js.
// Declared defensively via window.* (not const) since script load order
// between this file and a subject's data.js file isn't guaranteed.
window.SUBJECT_DATA = window.SUBJECT_DATA || {};
function currentWeeks(){
  if(CURRENT_SUBJECT!=='py') return weeksFor(CURRENT_LEVEL);
  return CURRENT_LEVEL==='b' ? BEGINNER_WEEKS : CURRENT_LEVEL==='i' ? INTERMEDIATE_WEEKS : ADVANCED_WEEKS;
}
function currentMP1(){
  if(CURRENT_SUBJECT!=='py') return (SUBJECT_DATA[CURRENT_SUBJECT] && SUBJECT_DATA[CURRENT_SUBJECT][CURRENT_LEVEL] || {}).mp1 || null;
  return CURRENT_LEVEL==='b' ? BEGINNER_MP1 : CURRENT_LEVEL==='i' ? INTERMEDIATE_MP1 : ADVANCED_MP1;
}
function currentMP2(){
  if(CURRENT_SUBJECT!=='py') return (SUBJECT_DATA[CURRENT_SUBJECT] && SUBJECT_DATA[CURRENT_SUBJECT][CURRENT_LEVEL] || {}).mp2 || null;
  return CURRENT_LEVEL==='b' ? BEGINNER_MP2 : CURRENT_LEVEL==='i' ? INTERMEDIATE_MP2 : ADVANCED_MP2;
}
function weeksFor(level){
  if(CURRENT_SUBJECT!=='py') return (SUBJECT_DATA[CURRENT_SUBJECT] && SUBJECT_DATA[CURRENT_SUBJECT][level] || {}).weeks || [];
  return level==='b' ? BEGINNER_WEEKS : level==='i' ? INTERMEDIATE_WEEKS : ADVANCED_WEEKS;
}
function currentLevelName(){ return LEVEL_META[CURRENT_LEVEL].name; }
function currentLevelShort(){ return LEVEL_META[CURRENT_LEVEL].short; }
function currentLevelSlug(){ return LEVEL_META[CURRENT_LEVEL].slug; }

/* ---------------------------------------------------------------------
   Multi-subject support (Codify tracks)
   CURRENT_SUBJECT is fixed for the lifetime of a shell file (each subject
   is its own HTML file — python-academy.html, web-design-academy.html,
   r-academy.html, automl-academy.html, cybersecurity-academy.html,
   data-science-academy.html, machine-learning-academy.html — all sharing
   this one engine file), set once near the top of that file's inline
   script, before initApp() runs. Unlike CURRENT_LEVEL it never changes
   mid-session.

   Python keeps its original unprefixed keys/paths for back-compat (existing
   live students/passcodes/certificates need zero migration) — subjectKeyPrefix()
   and fbBase() both resolve to "no prefix" for 'py' and a real prefix for
   every other subject.
   --------------------------------------------------------------------- */
const SUBJECTS = ['py','wd','r','ml','cy','ds','mlr'];
const SUBJECT_META = {
  py: {name:'Python',     short:'PY', slug:'python',     icon:'🧑‍💻', runtime:'pyodide',    academyName:'Python Academy'},
  // r/ml/cy/mlr still ship with a short placeholder chain (Phase 0) — just
  // enough to prove the full registration -> grading -> cert -> dashboard
  // pipeline. Each subject's chain gets expanded to the full 12-step
  // week1..week9/mp1/mp2/cert shape (matching Python's, no chain key at all —
  // see currentChain()'s || CHAIN fallback) once its real curriculum is
  // authored in its own build phase. wd (Web Design) and ds (Data Science)
  // are the first two to do this.
  wd:  {name:'Web Design',       short:'WD',  slug:'web-design',       icon:'🎨', runtime:'iframe',      academyName:'Web Design Academy'},
  r:   {name:'R',                short:'R',   slug:'r',                icon:'📊', runtime:'webr',        academyName:'R Academy',                 chain:['week1','cert']},
  ml:  {name:'AutoML',           short:'ML',  slug:'automl',           icon:'🤖', runtime:'pyodide-ml',  academyName:'AutoML Academy'},
  cy:  {name:'Cybersecurity',    short:'CY',  slug:'cybersecurity',    icon:'🛡️', runtime:'pyodide',     academyName:'Cybersecurity Academy',     chain:['week1','cert']},
  ds:  {name:'Data Science',     short:'DS',  slug:'data-science',     icon:'📈', runtime:'pyodide-ds',  academyName:'Data Science Academy'},
  // Deliberately plain Pyodide, zero extra installs — this track teaches
  // how a model works by building one in pure Python by hand, distinct
  // from AutoML's "use scikit-learn and automate the search" approach.
  mlr: {name:'Machine Learning', short:'MLR', slug:'machine-learning', icon:'🧠', runtime:'pyodide',     academyName:'Machine Learning Academy'}
};
let CURRENT_SUBJECT = 'py';

function currentSubjectMeta(){ return SUBJECT_META[CURRENT_SUBJECT]; }
// Python keeps the original full CHAIN; placeholder subjects use their own
// short chain until their real curriculum is authored (see SUBJECT_META).
function currentChain(){ return currentSubjectMeta().chain || CHAIN; }

// '' for Python (back-compat, unprefixed keys), 'wd_'/'r_'/'ml_' for the rest.
function subjectKeyPrefix(){ return CURRENT_SUBJECT==='py' ? '' : CURRENT_SUBJECT+'_'; }

// Session-level keys (username/name/year/class/is_guest) — subject-scoped so
// logging into one subject's shell never leaks into another's on the same
// browser/origin (all 4 shell files share one localStorage since they're
// same-origin), and so switching shells with no account on this subject
// correctly shows the login form rather than a stale identity.
function sk(name){ return 'pyac_' + subjectKeyPrefix() + name; }

// Firebase base path for this subject — unscoped '/pyacademy' for Python
// (back-compat), '/pyacademy/{subject}' for everything new.
function fbBase(){ return CURRENT_SUBJECT==='py' ? '/pyacademy' : '/pyacademy/'+CURRENT_SUBJECT; }

// Recognizes a localStorage key as belonging to CURRENT_SUBJECT, so the
// logout-clear sweep and the Firebase-sync snapshot never touch another
// subject's locally-cached progress on a shared browser profile. Level codes
// (b/i/a) never collide with subject codes (wd/r/ml) so this is unambiguous.
function isMySubjectKey(k){
  const sessionNames = ['username','name','year','class','is_guest'];
  if(sessionNames.some(n => k === sk(n))) return true;
  if(!k.startsWith('pyac_')) return false;
  let rest = k.slice(5);
  const sp = subjectKeyPrefix();
  if(sp){
    if(!rest.startsWith(sp)) return false;
    rest = rest.slice(sp.length);
  }
  return /^[bia]_/.test(rest);
}

// The guest demo account is for prospective schools to sample the platform —
// it's capped at the end of Week 1 so evaluating the demo isn't a substitute
// for actually subscribing.
const GUEST_CAP_KEY = 'week1';
function isGuestCapped(key){
  return localStorage.getItem(sk('is_guest')) === 'true' && currentChain().indexOf(key) > currentChain().indexOf(GUEST_CAP_KEY);
}

/* ---------------------------------------------------------------------
   Small utilities
   --------------------------------------------------------------------- */
function escapeHtml(s){
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function toast(msg){
  let t = document.getElementById('pyac-toast');
  if(!t){
    t = document.createElement('div');
    t.id = 'pyac-toast';
    t.style.cssText = 'position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:#1e1b4b;'+
      'color:#fff;padding:12px 22px;border-radius:10px;font-size:0.86rem;z-index:3000;'+
      'box-shadow:0 6px 20px rgba(0,0,0,0.25);opacity:0;transition:opacity .3s;max-width:80vw;text-align:center;';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.style.opacity = '1';
  clearTimeout(t._hideTimer);
  t._hideTimer = setTimeout(()=>{ t.style.opacity = '0'; }, 2600);
}

function shortenError(msg){
  if(!msg) return '';
  const lines = String(msg).trim().split('\n');
  return lines[lines.length-1].slice(0,220);
}

/* ---------------------------------------------------------------------
   Password hashing (PBKDF2 via Web Crypto) — the plaintext password is
   never stored or transmitted; only a salted hash is. Nobody, including
   the instructor, can recover a student's actual password from this.
   --------------------------------------------------------------------- */
function bytesToHex(bytes){ return Array.from(bytes).map(b=>b.toString(16).padStart(2,'0')).join(''); }
function hexToBytes(hex){
  const arr = new Uint8Array(hex.length/2);
  for(let i=0;i<arr.length;i++) arr[i] = parseInt(hex.substr(i*2,2),16);
  return arr;
}
async function hashPassword(password, saltHex){
  const salt = saltHex ? hexToBytes(saltHex) : crypto.getRandomValues(new Uint8Array(16));
  const enc = new TextEncoder();
  const keyMaterial = await crypto.subtle.importKey('raw', enc.encode(password), {name:'PBKDF2'}, false, ['deriveBits']);
  const bits = await crypto.subtle.deriveBits({name:'PBKDF2', salt, iterations:150000, hash:'SHA-256'}, keyMaterial, 256);
  return { salt: bytesToHex(salt), hash: bytesToHex(new Uint8Array(bits)) };
}

/* ---------------------------------------------------------------------
   Auth: create account / log in / log out
   Each student's full progress snapshot lives in Firebase keyed by their
   username, so logging in on any device restores exactly where they left off.
   --------------------------------------------------------------------- */
function usernameKey(u){ return String(u||'').trim().toLowerCase().replace(/[^a-z0-9_.-]/g,''); }

function switchAuthTab(tab){
  document.getElementById('auth-tab-create').classList.toggle('active', tab==='create');
  document.getElementById('auth-tab-login').classList.toggle('active', tab==='login');
  document.getElementById('auth-panel-create').style.display = tab==='create' ? 'block' : 'none';
  document.getElementById('auth-panel-login').style.display = tab==='login' ? 'block' : 'none';
  document.getElementById('auth-panel-forgot').style.display = 'none';
}

function showForgotPassword(e){
  if(e) e.preventDefault();
  document.getElementById('auth-tab-create').classList.remove('active');
  document.getElementById('auth-tab-login').classList.remove('active');
  document.getElementById('auth-panel-create').style.display = 'none';
  document.getElementById('auth-panel-login').style.display = 'none';
  document.getElementById('forgot-error').textContent = '';
  document.getElementById('forgot-error').style.color = 'var(--danger)';
  document.getElementById('btn-forgot-send').disabled = false;
  document.getElementById('btn-forgot-send').textContent = 'Send to My Instructor';
  document.getElementById('auth-panel-forgot').style.display = 'block';
}

async function submitForgotPassword(){
  const errEl = document.getElementById('forgot-error');
  errEl.style.color = 'var(--danger)';
  errEl.textContent = '';
  const username = usernameKey(document.getElementById('forgot-username').value);
  const name = document.getElementById('forgot-name').value.trim();
  const cls = document.getElementById('forgot-class').value.trim();
  if(!name){ errEl.textContent = 'Please enter your name so your instructor knows who this is.'; return; }
  if(!fbOk()){ errEl.textContent = 'Cannot send right now — no connection to the server.'; return; }

  const btn = document.getElementById('btn-forgot-send');
  btn.disabled = true; btn.textContent = 'Sending...';
  const payload = {
    username: username || '(not given)',
    displayName: name,
    classCode: cls,
    subject: '🔑 Forgotten password',
    message: `${name} (username: ${username || 'not given'}${cls ? ', class ' + cls : ''}) has forgotten their password and can't log in. Please reset it for them from the Users & Passwords tab.`,
    type: 'password_reset',
    status: 'open',
    createdAt: new Date().toISOString()
  };
  try{
    const res = await fetch(fbUrl(fbBase()+'/messages.json'), {method:'POST', body: JSON.stringify(payload)});
    if(!res.ok) throw new Error('failed');
    errEl.style.color = 'var(--success)';
    errEl.textContent = '✅ Sent! Your instructor will reset your password and let you know.';
    btn.textContent = 'Sent ✓';
  }catch(e){
    errEl.textContent = 'Could not send — please check your connection, or ask your instructor directly.';
    btn.disabled = false;
    btn.textContent = 'Send to My Instructor';
  }
}

// The overlay is position:fixed, but the page underneath it can still
// scroll independently (its content is taller than the viewport) unless we
// explicitly lock it — otherwise a mouse wheel or touch-scroll over the
// backdrop leaks through to the hub content behind the modal instead of
// scrolling the modal itself.
function setAuthOverlayVisible(visible){
  document.getElementById('register-overlay').style.display = visible ? 'flex' : 'none';
  document.body.style.overflow = visible ? 'hidden' : '';
}

function loadRegistration(){
  const username = localStorage.getItem(sk('username'));
  if(username){
    setAuthOverlayVisible(false);
    document.getElementById('student-chip-name').textContent = localStorage.getItem(sk('name')) || username;
    startSessionTracking();
  } else {
    // The overlay is already visible by default (see its CSS), but the page
    // hasn't been told to lock background scroll yet until this runs.
    setAuthOverlayVisible(true);
  }
}

function clearLocalSession(){
  Object.keys(localStorage).filter(isMySubjectKey).forEach(k=>localStorage.removeItem(k));
}

// Lets a visitor close the sign-in overlay and browse the hub/marketing
// content without an account, then reopen it later from the header chip
// whenever they're ready to create an account or log in.
function dismissAuthOverlay(){
  setAuthOverlayVisible(false);
}

function onStudentChipClick(){
  if(localStorage.getItem(sk('username'))){
    showPage('hub');
  } else {
    setAuthOverlayVisible(true);
  }
}

function passcodeKey(p){ return String(p||'').trim().toUpperCase().replace(/\s+/g,''); }

async function submitCreateAccount(){
  const errEl = document.getElementById('create-error');
  errEl.textContent = '';
  const passcode = passcodeKey(document.getElementById('reg-passcode').value);
  const username = usernameKey(document.getElementById('reg-username').value);
  const name = document.getElementById('reg-name').value.trim();
  const year = document.getElementById('reg-year').value;
  const cls = document.getElementById('reg-class').value.trim();
  const pw = document.getElementById('reg-password').value;
  const pw2 = document.getElementById('reg-password2').value;

  if(!passcode){ errEl.textContent = 'Please enter the access passcode your instructor gave you.'; return; }
  if(username.length < 3){ errEl.textContent = 'Choose a username with at least 3 characters (letters, numbers, _ . -).'; return; }
  if(!name){ errEl.textContent = 'Please enter your name.'; return; }
  if(!year){ errEl.textContent = 'Please select your year group.'; return; }
  if(pw.length < 4){ errEl.textContent = 'Your password must be at least 4 characters.'; return; }
  if(pw !== pw2){ errEl.textContent = 'Passwords do not match.'; return; }
  if(!fbOk()){ errEl.textContent = 'Creating an account needs an internet connection — please check yours and try again.'; return; }

  const btn = document.getElementById('btn-create-account');
  btn.disabled = true; btn.textContent = 'Creating account...';
  try{
    const codeRecord = await fetch(fbUrl(fbBase()+'/passcodes/'+encodeURIComponent(passcode)+'.json')).then(r=>r.json());
    if(!codeRecord || codeRecord.active === false){
      errEl.textContent = "That passcode isn't valid — ask your instructor for the current one.";
      return;
    }
    const existing = await fetch(fbUrl(fbBase()+'/users/'+encodeURIComponent(username)+'.json')).then(r=>r.json());
    if(existing){
      errEl.textContent = 'That username is already taken — choose another, or log in instead.';
      return;
    }
    const {salt, hash} = await hashPassword(pw);
    const record = {
      username, displayName: name, yearGroup: year, classCode: cls, subject: CURRENT_SUBJECT,
      passwordSalt: salt, passwordHash: hash,
      passcodeUsed: passcode,
      createdAt: new Date().toISOString(),
      updated: new Date().toISOString(),
      passwordEvents: [{type:'created', at: new Date().toISOString()}],
      progress: {}
    };
    const res = await fetch(fbUrl(fbBase()+'/users/'+encodeURIComponent(username)+'.json'), {
      method:'PUT', body: JSON.stringify(record)
    });
    if(!res.ok) throw new Error('write failed');

    // Passcodes are single-use: deactivate this one immediately so nobody else
    // can register with it, even if they saw it written down or shared.
    const usedBy = Object.assign({}, codeRecord.usedBy || {});
    usedBy[username] = new Date().toISOString();
    fetch(fbUrl(fbBase()+'/passcodes/'+encodeURIComponent(passcode)+'.json'), {
      method:'PATCH', body: JSON.stringify({usedCount: (codeRecord.usedCount||0)+1, usedBy, active:false})
    }).catch(()=>{});

    clearLocalSession();
    localStorage.setItem(sk('username'), username);
    localStorage.setItem(sk('name'), name);
    localStorage.setItem(sk('year'), year);
    localStorage.setItem(sk('class'), cls);
    setAuthOverlayVisible(false);
    document.getElementById('student-chip-name').textContent = name;
    initApp();
  }catch(e){
    errEl.textContent = 'Something went wrong creating your account — please try again.';
  }finally{
    btn.disabled = false; btn.textContent = 'Create Account & Start Learning 🚀';
  }
}

async function submitLogin(){
  const errEl = document.getElementById('login-error');
  errEl.textContent = '';
  const username = usernameKey(document.getElementById('login-username').value);
  const pw = document.getElementById('login-password').value;
  if(!username || !pw){ errEl.textContent = 'Please enter your username and password.'; return; }
  if(!fbOk()){ errEl.textContent = 'Logging in needs an internet connection — please check yours and try again.'; return; }

  const btn = document.getElementById('btn-login');
  btn.disabled = true; btn.textContent = 'Logging in...';
  try{
    const record = await fetch(fbUrl(fbBase()+'/users/'+encodeURIComponent(username)+'.json')).then(r=>r.json());
    if(!record){ errEl.textContent = 'No account with that username. Create one instead?'; return; }
    const {hash} = await hashPassword(pw, record.passwordSalt);
    if(hash !== record.passwordHash){ errEl.textContent = "Incorrect password. Ask your instructor to reset it if you've forgotten."; return; }

    clearLocalSession();
    localStorage.setItem(sk('username'), username);
    localStorage.setItem(sk('name'), record.displayName || username);
    localStorage.setItem(sk('year'), record.yearGroup || '');
    localStorage.setItem(sk('class'), record.classCode || '');

    if(record.isGuest){
      // The demo account always starts fresh — ignore whatever progress a
      // previous visitor's demo session may have left on the server record,
      // and never sync this session's progress back up either.
      localStorage.setItem(sk('is_guest'), 'true');
    } else {
      const prog = record.progress || {};
      Object.keys(prog).forEach(k=>{ if(isMySubjectKey(k)) localStorage.setItem(k, prog[k]); });
    }

    setAuthOverlayVisible(false);
    document.getElementById('student-chip-name').textContent = record.displayName || username;
    initApp();
    toast(record.isGuest ? 'Welcome to the live demo! Explore freely — nothing here is permanent.' : 'Welcome back, ' + (record.displayName || username) + '!');
  }catch(e){
    errEl.textContent = 'Something went wrong logging in — please try again.';
  }finally{
    btn.disabled = false; btn.textContent = 'Log In ▶';
  }
}

function doGuestLogin(){
  switchAuthTab('login');
  document.getElementById('login-username').value = 'guest';
  document.getElementById('login-password').value = 'GuestDemo2026';
  submitLogin();
}

function logOut(){
  const isGuest = localStorage.getItem(sk('is_guest')) === 'true';
  const msg = isGuest
    ? "Log out of the demo? Nothing you did here was saved — you can start a fresh demo anytime."
    : 'Log out? Your progress is saved to your account, so you can log back in anytime.';
  if(!confirm(msg)) return;
  clearLocalSession();
  location.reload();
}

/* ---------------------------------------------------------------------
   Progress chain (localStorage) + Firebase sync
   --------------------------------------------------------------------- */
// level defaults to CURRENT_LEVEL — pass an explicit 'b'/'i'/'a' only when you
// need a level other than whichever page is currently active (e.g. checking
// whether Beginner's cert is done while about to show the Intermediate hub).
function getStatus(key, level){ return localStorage.getItem('pyac_'+subjectKeyPrefix()+(level||CURRENT_LEVEL)+'_status_'+key) || 'todo'; }
function setStatus(key,val, level){
  localStorage.setItem('pyac_'+subjectKeyPrefix()+(level||CURRENT_LEVEL)+'_status_'+key, val);
  syncProgress();
}
function isUnlocked(key, level){
  if(INSTRUCTOR_PREVIEW) return true;
  if(isGuestCapped(key)) return false;
  const chain = currentChain();
  const idx = chain.indexOf(key);
  if(idx <= 0) return true;
  return getStatus(chain[idx-1], level) === 'done';
}

function fbOk(){
  return !!(window.PYAC_FIREBASE && window.PYAC_FIREBASE.databaseURL && !window.PYAC_FIREBASE.databaseURL.includes('REPLACE'));
}
function fbUrl(path){ return window.PYAC_FIREBASE.databaseURL + path; }

function collectProgressSnapshot(){
  const snap = {};
  Object.keys(localStorage).forEach(k=>{
    if(isMySubjectKey(k) && k !== sk('username')) snap[k] = localStorage.getItem(k);
  });
  return snap;
}

function syncProgress(){
  if(!fbOk()) return;
  if(localStorage.getItem(sk('is_guest')) === 'true') return; // demo sessions never persist
  const username = localStorage.getItem(sk('username'));
  if(!username) return;
  const updates = {
    displayName: localStorage.getItem(sk('name')) || '',
    yearGroup: localStorage.getItem(sk('year')) || '',
    classCode: localStorage.getItem(sk('class')) || '',
    updated: new Date().toISOString(),
    progress: collectProgressSnapshot()
  };
  // PATCH (not PUT) so password fields on this user record are left untouched
  fetch(fbUrl(fbBase()+'/users/'+encodeURIComponent(username)+'.json'), {
    method:'PATCH', body: JSON.stringify(updates)
  }).catch(()=>{});
}

/* ---------------------------------------------------------------------
   Session-time tracking
   Logs how long each real (non-guest) login lasts, so the instructor
   dashboard can show "last session" / "total time" per student. A new
   session record starts once per real page load while logged in
   (covers both "reopened the page while already logged in" and "just
   logged in" — both paths call loadRegistration() via initApp()), then
   heartbeats lastActiveAt every 60s via a plain PUT (small fixed-size
   record, overwritten in place — this does not grow storage per tick).
   Students never authenticate via Firebase Auth here, so — same
   accepted tradeoff as every other student-writable path in this app —
   these writes aren't instructor-gated; they ride on the existing
   users/$username write rule, which already cascades down to any
   nested child path once the account itself exists.

   Most students close the tab rather than clicking "Log out", so a
   normal fetch() on unload is unreliable (browsers frequently cancel
   in-flight requests during navigation/close). navigator.sendBeacon()
   is built for exactly this, but it can only POST — Firebase's REST API
   documents a "?X-HTTP-Method-Override=PUT" query param specifically
   for clients that can only send POST, which is what makes a reliable
   final write possible here.
   --------------------------------------------------------------------- */
let _sessionId = null;
let _sessionLoginAt = null;
let _sessionHeartbeatTimer = null;

function sessionUrl(username){
  return fbUrl(fbBase()+'/users/'+encodeURIComponent(username)+'/sessions/'+_sessionId+'.json');
}

function startSessionTracking(){
  if(_sessionId) return; // already tracking this page load
  if(!fbOk()) return;
  if(localStorage.getItem(sk('is_guest')) === 'true') return; // never log the shared guest account's sessions
  const username = localStorage.getItem(sk('username'));
  if(!username) return;

  _sessionId = 's'+Date.now().toString(36)+Math.random().toString(36).slice(2,7);
  _sessionLoginAt = new Date().toISOString();
  writeSessionHeartbeat(username);
  _sessionHeartbeatTimer = setInterval(()=>writeSessionHeartbeat(username), 60000);

  document.addEventListener('visibilitychange', ()=>{
    if(document.visibilityState === 'hidden') sendSessionBeacon(username);
  });
  window.addEventListener('pagehide', ()=>sendSessionBeacon(username));
}

function writeSessionHeartbeat(username){
  const record = {loginAt: _sessionLoginAt, lastActiveAt: new Date().toISOString()};
  fetch(sessionUrl(username), {method:'PUT', body: JSON.stringify(record)}).catch(()=>{});
}

function sendSessionBeacon(username){
  if(!_sessionId || !navigator.sendBeacon) return;
  const record = {loginAt: _sessionLoginAt, lastActiveAt: new Date().toISOString()};
  const url = sessionUrl(username) + '?X-HTTP-Method-Override=PUT';
  try{ navigator.sendBeacon(url, new Blob([JSON.stringify(record)], {type:'application/json'})); }catch(e){}
}

/* ---------------------------------------------------------------------
   Contact / Help
   --------------------------------------------------------------------- */
async function submitContactMessage(){
  const subject = document.getElementById('contact-subject').value.trim();
  const message = document.getElementById('contact-message').value.trim();
  const statusEl = document.getElementById('contact-status');
  if(!message){ statusEl.style.color = 'var(--danger)'; statusEl.textContent = 'Please write a message before sending.'; return; }
  if(!fbOk()){ statusEl.style.color = 'var(--danger)'; statusEl.textContent = 'Cannot send right now — no connection to the server.'; return; }
  statusEl.style.color = 'var(--text-muted)'; statusEl.textContent = 'Sending...';
  const payload = {
    username: localStorage.getItem(sk('username')) || '',
    displayName: localStorage.getItem(sk('name')) || 'Unknown student',
    classCode: localStorage.getItem(sk('class')) || '',
    subject: subject || '(no subject)',
    message,
    status: 'open',
    createdAt: new Date().toISOString()
  };
  try{
    const res = await fetch(fbUrl(fbBase()+'/messages.json'), {method:'POST', body: JSON.stringify(payload)});
    if(!res.ok) throw new Error('failed');
    statusEl.style.color = 'var(--success)';
    statusEl.textContent = '✅ Message sent — your instructor will get back to you.';
    document.getElementById('contact-subject').value = '';
    document.getElementById('contact-message').value = '';
  }catch(e){
    statusEl.style.color = 'var(--danger)';
    statusEl.textContent = 'Could not send your message — please try again.';
  }
}

/* ---------------------------------------------------------------------
   Navigation
   --------------------------------------------------------------------- */
function showPage(id){
  const pageId = id.startsWith('page-') ? id : 'page-'+id;
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  const el = document.getElementById(pageId);
  if(el) el.classList.add('active');
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));
  const navId = 'nav-'+pageId.replace(/^page-/,'');
  const navEl = document.getElementById(navId);
  if(navEl) navEl.classList.add('active');
  window.scrollTo(0,0);
  if(window.innerWidth <= 900) document.getElementById('sidebar').classList.remove('open');
}

function toggleSidebar(){ document.getElementById('sidebar').classList.toggle('open'); }

function navGo(pageArg){
  if(!INSTRUCTOR_PREVIEW && !localStorage.getItem(sk('username'))){
    setAuthOverlayVisible(true);
    toast('Create an account or log in to open this content.');
    return;
  }
  CURRENT_LEVEL = levelOf(pageArg);
  if(pageArg === 'i_hub'){
    if(!INSTRUCTOR_PREVIEW && getStatus('cert','b') !== 'done'){ toast('Finish your Beginner certificate first to unlock Intermediate!'); return; }
    showPage('page-i_hub');
    refreshLevelHubStrip('i');
    return;
  }
  if(pageArg === 'a_hub'){
    if(!INSTRUCTOR_PREVIEW && getStatus('cert','i') !== 'done'){ toast('Finish Intermediate level first to unlock Advanced!'); return; }
    showPage('page-a_hub');
    refreshLevelHubStrip('a');
    return;
  }
  const chainKey = stripLevelPrefix(pageArg);
  if(isGuestCapped(chainKey)){
    toast("🎓 That's the end of the free demo — get in touch to unlock the full 9-week course!");
    return;
  }
  if(!isUnlocked(chainKey)){
    toast('Complete the previous step first to unlock this.');
    return;
  }
  renderPageIfNeeded(pageArg, chainKey);
  showPage('page-'+pageArg);
  if(chainKey.startsWith('week')){
    goToDay(chainKey, currentDayView[chainKey] || defaultDayFor(chainKey));
  } else {
    mountEditorsIn('page-'+pageArg);
    if(chainKey === 'mp1') refreshMP1CompleteState();
    else if(chainKey === 'mp2') refreshMP2CompleteState();
    else if(chainKey === 'cert'){ maybeDrawCertificate(); refreshCertCompleteState(); }
  }
}

function renderPageIfNeeded(pageArg, chainKey){
  const container = document.getElementById('page-'+pageArg);
  if(container.dataset.rendered) return;
  let html = '';
  if(chainKey.startsWith('week')){
    const week = currentWeeks().find(w=>w.key === chainKey);
    html = renderWeekPage(week);
  } else if(chainKey === 'mp1'){
    html = renderMP1Page();
  } else if(chainKey === 'mp2'){
    html = renderMP2Page();
  } else if(chainKey === 'cert'){
    html = renderCertPage();
  }
  container.innerHTML = html;
  container.dataset.rendered = '1';
}

/* ---------------------------------------------------------------------
   Sidebar / hub state refresh
   --------------------------------------------------------------------- */
function refreshSidebarLocks(){
  LEVELS.forEach(level=>{
    currentChain().forEach(key=>{
      const navEl = document.getElementById(`nav-${level}_${key}`);
      if(!navEl) return;
      navEl.classList.toggle('locked', !isUnlocked(key, level));
      navEl.classList.toggle('done', getStatus(key, level) === 'done');
    });
    refreshLevelHubStrip(level);
  });
  const iNav = document.getElementById('nav-i_hub');
  if(iNav) iNav.classList.toggle('locked', getStatus('cert','b') !== 'done');
  const aNav = document.getElementById('nav-a_hub');
  if(aNav) aNav.classList.toggle('locked', getStatus('cert','i') !== 'done');
}

function refreshLevelHubStrip(level){
  const el = document.getElementById(level+'-progress-strip');
  if(!el) return;
  const labelMap = {week1:'W1',week2:'W2',week3:'W3',week4:'W4',mp1:'MP1',week5:'W5',week6:'W6',week7:'W7',week8:'W8',week9:'W9',mp2:'MP2',cert:'🎓'};
  el.innerHTML = currentChain().map(k=>`<span class="wp-step ${getStatus(k,level)==='done'?'ok':''}">${labelMap[k]}</span>`).join('');
}

function refreshHubCards(){
  const total = currentChain().length;
  const doneCount = currentChain().filter(k=>getStatus(k,'b')==='done').length;
  const pct = Math.round((doneCount/total)*100);
  const pbar = document.getElementById('progress-bar');
  if(pbar) pbar.style.width = pct+'%';
  const plabel = document.getElementById('progress-label');
  if(plabel) plabel.textContent = pct+'% complete';

  const beginnerDone = getStatus('cert','b') === 'done';
  const bStatusEl = document.getElementById('lc-beginner-status');
  if(bStatusEl){
    bStatusEl.textContent = beginnerDone ? '✓ Certificate earned' : (doneCount>0 ? `In progress · ${doneCount}/${total}` : 'Not started');
    bStatusEl.className = 'lc-status ' + (beginnerDone ? 'done' : (doneCount>0 ? 'progress' : 'locked-s'));
  }

  const iCard = document.getElementById('lc-intermediate');
  const iStatusEl = document.getElementById('lc-intermediate-status');
  if(iCard && iStatusEl){
    const iDoneCount = currentChain().filter(k=>getStatus(k,'i')==='done').length;
    const iCertDone = getStatus('cert','i') === 'done';
    if(beginnerDone || INSTRUCTOR_PREVIEW){
      iCard.classList.remove('locked');
      iCard.onclick = ()=>navGo('i_hub');
      iStatusEl.textContent = iCertDone ? '✓ Certificate earned' : (iDoneCount>0 ? `In progress · ${iDoneCount}/${total}` : 'Unlocked — start now!');
      iStatusEl.className = 'lc-status ' + (iCertDone ? 'done' : 'progress');
    } else {
      iCard.classList.add('locked');
      iCard.onclick = null;
      iStatusEl.textContent = '🔒 Locked';
      iStatusEl.className = 'lc-status locked-s';
    }
  }
  const advancedUnlocked = getStatus('cert','i') === 'done';
  const aCard = document.getElementById('lc-advanced');
  const aStatusEl = document.getElementById('lc-advanced-status');
  if(aCard && aStatusEl){
    const aDoneCount = currentChain().filter(k=>getStatus(k,'a')==='done').length;
    const aCertDone = getStatus('cert','a') === 'done';
    if(advancedUnlocked || INSTRUCTOR_PREVIEW){
      aCard.classList.remove('locked');
      aCard.onclick = ()=>navGo('a_hub');
      aStatusEl.textContent = aCertDone ? '✓ Certificate earned' : (aDoneCount>0 ? `In progress · ${aDoneCount}/${total}` : 'Unlocked — start now!');
      aStatusEl.className = 'lc-status ' + (aCertDone ? 'done' : 'progress');
    } else {
      aCard.classList.add('locked');
      aCard.onclick = null;
      aStatusEl.textContent = '🔒 Locked';
      aStatusEl.className = 'lc-status locked-s';
    }
  }
}

/* ---------------------------------------------------------------------
   Runtime layer — one execution engine per subject, dispatched by
   SUBJECT_META[CURRENT_SUBJECT].runtime. Every adapter normalizes to the
   same {ns, output, error} shape from execIsolated() so the shared grading
   loop in gradeCode() doesn't need to know which engine produced it.
   --------------------------------------------------------------------- */
let _pyodide = null;
let _pyodideLoadPromise = null;

function ensurePyodide(){
  if(_pyodide) return Promise.resolve(_pyodide);
  if(_pyodideLoadPromise) return _pyodideLoadPromise;
  _pyodideLoadPromise = new Promise((resolve, reject)=>{
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js';
    script.onload = async ()=>{
      try{
        const py = await loadPyodide();
        py.runPython([
          'import builtins, js',
          'def _pyacademy_input(prompt=""):',
          '    v = js.prompt(prompt)',
          '    return v if v is not None else ""',
          'builtins.input = _pyacademy_input'
        ].join('\n'));
        _pyodide = py;
        resolve(py);
      }catch(err){
        reject(err);
      }
    };
    script.onerror = ()=>reject(new Error('Failed to load the code engine — check your internet connection.'));
    document.head.appendChild(script);
  });
  return _pyodideLoadPromise;
}

// AutoML reuses the exact same Pyodide runtime/exec path as Python — the
// only difference is this extra one-time package install, gated so Python
// and other subjects never pay for it.
let _pyodideMLReady = false;
async function ensurePyodideML(){
  const py = await ensurePyodide();
  if(!_pyodideMLReady){
    await py.loadPackage('micropip');
    const micropip = py.pyimport('micropip');
    // Unpinned deliberately: Pyodide's micropip only serves the specific
    // package build bundled with this Pyodide release, not arbitrary PyPI
    // versions — pinning an exact version (e.g. scikit-learn==1.5.2) fails
    // with "Can't find a pure Python 3 wheel" if it doesn't match what this
    // Pyodide version ships. Bump the Pyodide CDN version above deliberately
    // if a newer scikit-learn/pandas is ever needed.
    await micropip.install(['scikit-learn', 'pandas']);
    _pyodideMLReady = true;
  }
  return py;
}

// Data Science also reuses the Pyodide/execIsolatedPy path, but only installs
// pandas — skipping scikit-learn (which Data Science exercises don't need)
// keeps its first-run load noticeably lighter than AutoML's.
let _pyodideDSReady = false;
async function ensurePyodideDS(){
  const py = await ensurePyodide();
  if(!_pyodideDSReady){
    await py.loadPackage('micropip');
    const micropip = py.pyimport('micropip');
    await micropip.install(['pandas']);
    _pyodideDSReady = true;
  }
  return py;
}

async function execIsolatedPy(code){
  const py = _pyodide; // already loaded by RUNTIMES[...].ensure() before this runs
  const ns = py.globals.get('dict')();
  let output = '';
  py.setStdout({batched:(s)=>{ output += s + '\n'; }});
  py.setStderr({batched:(s)=>{ output += s + '\n'; }});
  let error = null;
  try{
    await py.runPythonAsync(code, {globals: ns});
  }catch(e){
    error = (e && e.message) ? e.message : String(e);
  }
  return {ns, output, error};
}
async function pyRunAssert(ns, expr){
  await _pyodide.runPythonAsync('assert (' + expr + ')', {globals: ns});
}
function pyCleanup(ns){ try{ ns.destroy(); }catch(e){} }

/* WebR (R) runner — same REPL-style model as Pyodide, different API shape. */
let _webR = null;
let _webRLoadPromise = null;
function ensureWebR(){
  if(_webR) return Promise.resolve(_webR);
  if(_webRLoadPromise) return _webRLoadPromise;
  _webRLoadPromise = (async ()=>{
    const { WebR } = await import('https://webr.r-wasm.org/latest/webr.mjs');
    const webR = new WebR();
    await webR.init();
    _webR = webR;
    return webR;
  })();
  return _webRLoadPromise;
}
async function execIsolatedR(code){
  let output = '';
  let error = null;
  const shelter = await new _webR.Shelter();
  try{
    const result = await shelter.captureR(code, {withAutoprint:true, captureStreams:true, captureConditions:false});
    output = result.output.map(o=>o.data).join('\n');
  }catch(e){
    error = (e && e.message) ? e.message : String(e);
  }finally{
    shelter.purge();
  }
  return {ns:null, output, error};
}
async function rRunAssert(ns, expr){
  // R has no built-in assert — stopifnot() throws on a FALSE condition,
  // matching the pass/fail-by-exception shape the grading loop expects.
  await _webR.evalR(`stopifnot(${expr})`);
}

/* Sandboxed iframe/DOM runner — Web Design has no console/stdout concept;
   grading works by rendering the student's HTML into a fresh sandboxed
   iframe and inspecting its rendered DOM. */
function ensureIframeRuntime(){ return Promise.resolve(true); } // nothing to preload
function execIsolatedDom(code){
  return new Promise((resolve)=>{
    const iframe = document.createElement('iframe');
    // Deliberately allow-scripts WITHOUT allow-same-origin — combining the
    // two is the well-known sandbox-escape vector back into the parent page.
    iframe.setAttribute('sandbox', 'allow-scripts');
    iframe.style.cssText = 'position:absolute;left:-9999px;top:0;width:800px;height:600px;border:0;';
    iframe.onload = ()=>{
      let doc = null, error = null;
      try{ doc = iframe.contentDocument; }catch(e){ error = 'Could not read the preview.'; }
      resolve({ns:{doc, iframe}, output:'(Live preview rendered — see the checklist below)', error});
    };
    document.body.appendChild(iframe);
    iframe.srcdoc = code;
  });
}
function domCleanup(ns){ if(ns && ns.iframe && ns.iframe.parentNode) ns.iframe.parentNode.removeChild(ns.iframe); }

// A sandboxed srcdoc iframe without allow-same-origin gets a unique OPAQUE
// origin — which is exactly what keeps student script from reaching the
// parent page, but it also means the PARENT can't read iframe.contentDocument
// (that would be a cross-origin DOM read, blocked by every browser). So
// grading can't inspect the iframe from the outside; instead we inject a
// small checking script INTO the student's HTML that runs inside the
// iframe's own origin, evaluates the tests itself, and reports the result
// back over postMessage — the one channel a sandboxed opaque-origin frame
// is still allowed to use.
function gradeAllDom(code, tests){
  return new Promise((resolve)=>{
    const reqId = 'pyacgrade' + Math.random().toString(36).slice(2);
    const checkScript = `
<script>
(function(){
  function checkDom(t){ var el=document.querySelector(t.selector); if(!el) return false; return t.contains ? el.textContent.indexOf(t.contains)>=0 : true; }
  function checkDomCount(t){ return document.querySelectorAll(t.selector).length >= (t.min||1); }
  function checkDomAttr(t){ var el=document.querySelector(t.selector); if(!el) return false; var val=el.getAttribute(t.attr); return t.notEmpty ? !!(val && val.replace(/^\\s+|\\s+$/g,'')) : true; }
  function checkComputedStyle(t){
    var el=document.querySelector(t.selector);
    if(!el) return false;
    var val = getComputedStyle(el)[t.prop];
    if(t.notEqual !== undefined) return val !== t.notEqual;
    if(t.equals !== undefined) return val === t.equals;
    if(t.atLeastPx !== undefined) return parseFloat(val) >= t.atLeastPx;
    return false;
  }
  // Click every button once before grading, so exercises that add a click
  // handler (Week 9 onward) can be checked against the RESULTING DOM state,
  // not just the initial static markup. Harmless for every earlier
  // exercise/subject too — sandbox="allow-scripts" with no allow-forms means
  // a submit button's click can't actually navigate anywhere, it just runs
  // any JS handler attached to it.
  try{ document.querySelectorAll('button').forEach(function(b){ b.click(); }); }catch(e){}
  var tests = ${JSON.stringify(tests)};
  var results = tests.map(function(t){
    var pass = false, msg = '';
    if(t.type==='dom'){ pass = checkDom(t); msg = pass ? 'Passed' : 'Expected element/content was not found'; }
    else if(t.type==='dom-count'){ pass = checkDomCount(t); msg = pass ? 'Passed' : 'Not enough matching elements'; }
    else if(t.type==='dom-attr'){ pass = checkDomAttr(t); msg = pass ? 'Passed' : 'Attribute check failed'; }
    else if(t.type==='computed-style'){ pass = checkComputedStyle(t); msg = pass ? 'Passed' : 'Style check failed — check the CSS property/value the exercise asked for'; }
    return {label:t.label, pass:pass, msg:msg};
  });
  parent.postMessage({pyacGrade:'${reqId}', results:results}, '*');
})();
<\/script>`;
    const iframe = document.createElement('iframe');
    iframe.setAttribute('sandbox', 'allow-scripts');
    iframe.style.cssText = 'position:absolute;left:-9999px;top:0;width:800px;height:600px;border:0;';
    let done = false;
    function finish(results){
      if(done) return;
      done = true;
      window.removeEventListener('message', onMsg);
      clearTimeout(timer);
      domCleanup({iframe});
      resolve({results, output:'(Live preview rendered — see the checklist below)', error:null});
    }
    function onMsg(e){
      if(!e.data || e.data.pyacGrade !== reqId) return;
      finish(e.data.results);
    }
    window.addEventListener('message', onMsg);
    const timer = setTimeout(()=>{
      finish(tests.map(t=>({label:t.label, pass:false, msg:'Your preview took too long to render — check for an infinite loop or syntax error.'})));
    }, 5000);
    document.body.appendChild(iframe);
    iframe.srcdoc = code + checkScript;
  });
}

const RUNTIMES = {
  pyodide:      { ensure: ensurePyodide,   execIsolated: execIsolatedPy,  runAssert: pyRunAssert, cleanup: pyCleanup },
  'pyodide-ml': { ensure: ensurePyodideML, execIsolated: execIsolatedPy,  runAssert: pyRunAssert, cleanup: pyCleanup },
  'pyodide-ds': { ensure: ensurePyodideDS, execIsolated: execIsolatedPy,  runAssert: pyRunAssert, cleanup: pyCleanup },
  webr:         { ensure: ensureWebR,      execIsolated: execIsolatedR,   runAssert: rRunAssert,  cleanup: null },
  iframe:       { ensure: ensureIframeRuntime, execIsolated: execIsolatedDom, gradeAll: gradeAllDom, cleanup: domCleanup }
};
function currentRuntime(){ return RUNTIMES[SUBJECT_META[CURRENT_SUBJECT].runtime]; }

// Visible live-preview panel (Web Design only, gated on runtime not subject so
// it stays reusable for any future iframe-runtime track). Deliberately a
// SEPARATE persistent iframe from the one execIsolatedDom()/gradeAllDom()
// create-and-destroy per grading run — rendering and grading stay two
// independent code paths, so a broken checker-script injection can never
// affect what the student visually sees, and vice versa.
function previewPaneHtml(editorId){
  if(currentRuntime() !== RUNTIMES.iframe) return '';
  return `<div class="live-preview-wrap"><div class="lp-label">LIVE PREVIEW</div><iframe class="live-preview-frame" id="preview-${editorId}" sandbox="allow-scripts"></iframe></div>`;
}
function renderLivePreview(code, editorId){
  if(currentRuntime() !== RUNTIMES.iframe) return;
  const frame = document.getElementById('preview-'+editorId);
  if(frame) frame.srcdoc = code;
}

async function gradeCode(code, tests){
  const rt = currentRuntime();
  await rt.ensure();
  // Some runtimes (Web Design's sandboxed iframe) can't be inspected from the
  // outside at all — they grade themselves internally and report the whole
  // result set back in one shot, bypassing the per-test loop below.
  if(rt.gradeAll) return rt.gradeAll(code, tests);
  const {ns, output, error} = await rt.execIsolated(code);
  const results = [];
  if(error){
    tests.forEach(t=>results.push({label:t.label, pass:false, msg:'Your code hit an error before it could be checked: '+shortenError(error)}));
    if(rt.cleanup) rt.cleanup(ns);
    return {results, output, error};
  }
  for(const t of tests){
    if(t.type === 'output'){
      const pass = t.contains.every(sub=>output.includes(sub));
      results.push({label:t.label, pass, msg: pass ? 'Passed' : 'Expected output was not found'});
    } else if(t.type === 'assert'){
      try{
        await rt.runAssert(ns, t.expr);
        results.push({label:t.label, pass:true, msg:'Passed'});
      }catch(e){
        results.push({label:t.label, pass:false, msg: shortenError((e && e.message) || String(e))});
      }
    }
  }
  if(rt.cleanup) rt.cleanup(ns);
  return {results, output, error:null};
}

/* CodeMirror mounting */
const SUBJECT_CM_MODE = {py:'python', ml:'python', ds:'python', cy:'python', mlr:'python', r:'r', wd:'htmlmixed'};
function mountEditorsIn(containerId){
  const container = document.getElementById(containerId);
  if(!container) return;
  container.querySelectorAll('textarea.code-editor').forEach(ta=>{
    if(window._editors[ta.id]){ window._editors[ta.id].refresh(); return; }
    const cm = CodeMirror.fromTextArea(ta, {
      mode: SUBJECT_CM_MODE[CURRENT_SUBJECT] || 'python', lineNumbers:true, theme:'dracula', indentUnit:4, tabSize:4,
      viewportMargin: Infinity,
      extraKeys:{Tab:function(cmInst){ cmInst.replaceSelection('    '); }}
    });
    window._editors[ta.id] = cm;
  });
}
function getEditorValue(id){
  if(window._editors[id]) return window._editors[id].getValue();
  const ta = document.getElementById(id);
  return ta ? ta.value : '';
}

// NOTE: this text-console output box is the right UX for text-REPL subjects
// (Python/AutoML/R). Web Design additionally gets a visible live-preview
// iframe (see previewPaneHtml()/renderLivePreview() above) rendered right
// after the console, since seeing your actual page is the point of the track.
async function runSandbox(editorId, outId, weekKey){
  const btn = document.getElementById('btn-'+editorId);
  if(btn) btn.disabled = true;
  const outEl = document.getElementById(outId);
  outEl.classList.remove('empty');
  outEl.textContent = `Loading ${currentSubjectMeta().name} engine (first run takes a few seconds)...`;
  try{
    const rt = currentRuntime();
    await rt.ensure();
    const code = getEditorValue(editorId);
    const {ns, output, error} = await rt.execIsolated(code);
    const text = (output||'') + (error ? ('\n'+error) : '');
    outEl.textContent = text || '(no output)';
    if(rt.cleanup) rt.cleanup(ns);
    renderLivePreview(code, editorId);
    if(weekKey){
      localStorage.setItem('pyac_'+subjectKeyPrefix()+CURRENT_LEVEL+'_sandbox_'+weekKey, 'done');
      syncProgress();
      refreshDayCompleteState(weekKey, 1);
    }
  }catch(e){
    outEl.textContent = `Could not load the ${currentSubjectMeta().name} engine: ` + (e.message||e);
  }
  if(btn) btn.disabled = false;
}

async function runAndGrade(editorId, outId, testsId, tests, onDone){
  const btn = document.getElementById('btn-'+editorId);
  if(btn) btn.disabled = true;
  const outEl = document.getElementById(outId);
  const testsEl = document.getElementById(testsId);
  outEl.classList.remove('empty');
  outEl.textContent = `Loading ${currentSubjectMeta().name} engine...`;
  const code = getEditorValue(editorId);
  let graded;
  try{
    graded = await gradeCode(code, tests);
  }catch(e){
    outEl.textContent = 'Could not run your code: ' + (e.message||e);
    if(btn) btn.disabled = false;
    return;
  }
  outEl.textContent = graded.output || graded.error || '(no output)';
  testsEl.innerHTML = graded.results.map(r=>
    `<div class="test-row ${r.pass?'pass':'fail'}"><span class="ti">${r.pass?'✓':'✗'}</span> ${escapeHtml(r.label)}${r.pass?'':' — '+escapeHtml(r.msg||'')}</div>`
  ).join('');
  renderLivePreview(code, editorId);
  const allPass = graded.results.length>0 && graded.results.every(r=>r.pass);
  if(btn) btn.disabled = false;
  onDone(allPass);
}

async function checkExercise(weekKey, exIdx, editorId, outId, testsId){
  const week = currentWeeks().find(w=>w.key===weekKey);
  const ex = week.exercises[exIdx];
  await runAndGrade(editorId, outId, testsId, ex.tests, (allPass)=>{
    localStorage.setItem(`pyac_${subjectKeyPrefix()}${CURRENT_LEVEL}_ex_${weekKey}_${exIdx}`, allPass?'pass':'fail');
    syncProgress();
    refreshDayCompleteState(weekKey, (exIdx===0||exIdx===1||exIdx===4) ? 2 : 3);
  });
}

async function checkMP1Stage(stageKey, editorId, outId, testsId){
  const stage = currentMP1().stages.find(s=>s.key===stageKey);
  await runAndGrade(editorId, outId, testsId, stage.tests, (allPass)=>{
    localStorage.setItem(`pyac_${subjectKeyPrefix()}${CURRENT_LEVEL}_mp1stage_${stageKey}`, allPass?'pass':'fail');
    syncProgress();
    const badge = document.getElementById(`badge-${CURRENT_LEVEL}_mp1-${stageKey}`);
    if(badge){ badge.textContent = allPass ? '✓ Complete' : 'Try again'; badge.className = 'stage-badge'+(allPass?' pass':''); }
    refreshMP1CompleteState();
  });
}

async function checkMP2Door(doorKey, editorId, outId, testsId){
  const door = currentMP2().doors.find(d=>d.key===doorKey);
  await runAndGrade(editorId, outId, testsId, door.tests, (allPass)=>{
    localStorage.setItem(`pyac_${subjectKeyPrefix()}${CURRENT_LEVEL}_mp2door_${doorKey}`, allPass?'pass':'fail');
    syncProgress();
    const badge = document.getElementById(`badge-${CURRENT_LEVEL}_mp2-${doorKey}`);
    if(badge){ badge.textContent = allPass ? '✓ Complete' : 'Try again'; badge.className = 'stage-badge'+(allPass?' pass':''); }
    refreshMP2CompleteState();
  });
}

/* ---------------------------------------------------------------------
   Quiz
   --------------------------------------------------------------------- */
function quizQuestionHtml(weekKey, qIdx){
  const week = currentWeeks().find(w=>w.key===weekKey);
  const q = week.quiz[qIdx];
  const answered = localStorage.getItem(`pyac_${subjectKeyPrefix()}${CURRENT_LEVEL}_quiz_${weekKey}_${qIdx}`);
  const answeredIdx = answered !== null ? parseInt(answered,10) : null;
  const optsHtml = q.options.map((opt,i)=>{
    let cls = 'quiz-opt';
    if(answeredIdx !== null){
      cls += ' disabled';
      if(i === q.correct) cls += ' correct';
      else if(i === answeredIdx) cls += ' wrong';
    }
    return `<div class="${cls}" onclick="answerQuiz('${weekKey}',${qIdx},${i})">${escapeHtml(opt)}</div>`;
  }).join('');
  const feedback = answeredIdx !== null
    ? `<div class="quiz-feedback show ${answeredIdx===q.correct?'ok':'bad'}">${answeredIdx===q.correct?'✅ Correct! ':'❌ Not quite. '}${escapeHtml(q.explain)}</div>`
    : `<div class="quiz-feedback"></div>`;
  return `<div class="quiz-q">Q${qIdx+1}. <span>${escapeHtml(q.q)}</span></div><div class="quiz-options">${optsHtml}</div>${feedback}`;
}

function answerQuiz(weekKey, qIdx, optIdx){
  const already = localStorage.getItem(`pyac_${subjectKeyPrefix()}${CURRENT_LEVEL}_quiz_${weekKey}_${qIdx}`);
  if(already !== null) return;
  localStorage.setItem(`pyac_${subjectKeyPrefix()}${CURRENT_LEVEL}_quiz_${weekKey}_${qIdx}`, String(optIdx));
  syncProgress();
  const el = document.getElementById(`quizq-${CURRENT_LEVEL}_${weekKey}-${qIdx}`);
  if(el) el.innerHTML = quizQuestionHtml(weekKey, qIdx);
  updateQuizScoreBanner(weekKey);
  refreshDayCompleteState(weekKey, 3);
}

function quizScore(weekKey){
  const week = currentWeeks().find(w=>w.key===weekKey);
  let correct = 0, answeredCount = 0;
  week.quiz.forEach((q,i)=>{
    const a = localStorage.getItem(`pyac_${subjectKeyPrefix()}${CURRENT_LEVEL}_quiz_${weekKey}_${i}`);
    if(a !== null){ answeredCount++; if(parseInt(a,10) === q.correct) correct++; }
  });
  return {correct, answeredCount, total: week.quiz.length};
}

function updateQuizScoreBanner(weekKey){
  const el = document.getElementById(`quiz-score-banner-${CURRENT_LEVEL}_${weekKey}`);
  if(!el) return;
  const s = quizScore(weekKey);
  const remaining = s.total - s.answeredCount;
  el.textContent = `Score: ${s.correct}/${s.total} correct` + (remaining>0 ? ` (${remaining} question${remaining===1?'':'s'} left)` : '');
}

/* ---------------------------------------------------------------------
   Mini project completion
   --------------------------------------------------------------------- */
function refreshMP1CompleteState(){
  const allDone = currentMP1().stages.every(s=>localStorage.getItem(`pyac_${subjectKeyPrefix()}${CURRENT_LEVEL}_mp1stage_${s.key}`) === 'pass');
  const done = getStatus('mp1') === 'done';
  const btn = document.getElementById(`complete-btn-${CURRENT_LEVEL}_mp1`);
  if(btn){ btn.disabled = !allDone || done; btn.textContent = done ? '✓ Mini Project 1 complete' : '✓ Mark Mini Project 1 Complete'; }
  const reqList = document.getElementById(`reqlist-${CURRENT_LEVEL}_mp1`);
  if(reqList){
    reqList.innerHTML = currentMP1().stages.map(s=>
      `<li class="${localStorage.getItem('pyac_'+subjectKeyPrefix()+CURRENT_LEVEL+'_mp1stage_'+s.key)==='pass'?'met':''}">${escapeHtml(s.title)}</li>`
    ).join('');
  }
}

function refreshMP2CompleteState(){
  const allDone = currentMP2().doors.every(d=>localStorage.getItem(`pyac_${subjectKeyPrefix()}${CURRENT_LEVEL}_mp2door_${d.key}`) === 'pass');
  const done = getStatus('mp2') === 'done';
  const btn = document.getElementById(`complete-btn-${CURRENT_LEVEL}_mp2`);
  if(btn){ btn.disabled = !allDone || done; btn.textContent = done ? '✓ Mini Project 2 complete' : '✓ Mark Mini Project 2 Complete'; }
  const reqList = document.getElementById(`reqlist-${CURRENT_LEVEL}_mp2`);
  if(reqList){
    reqList.innerHTML = currentMP2().doors.map(d=>
      `<li class="${localStorage.getItem('pyac_'+subjectKeyPrefix()+CURRENT_LEVEL+'_mp2door_'+d.key)==='pass'?'met':''}">${escapeHtml(d.title)}</li>`
    ).join('');
  }
}

function markStepComplete(key){
  setStatus(key, 'done');
  refreshSidebarLocks();
  refreshHubCards();
  if(key === 'mp1') refreshMP1CompleteState();
  else if(key === 'mp2') refreshMP2CompleteState();
  else if(key === 'cert'){
    const nextLevel = LEVEL_META[CURRENT_LEVEL].next;
    const btn = document.getElementById(`complete-btn-${CURRENT_LEVEL}_cert`);
    if(btn) btn.textContent = nextLevel ? `✓ ${LEVEL_META[nextLevel].name} Unlocked` : '✓ Programme Complete';
  }
  if(key === 'cert'){
    const nextLevel = LEVEL_META[CURRENT_LEVEL].next;
    toast(nextLevel ? `${LEVEL_META[nextLevel].name} level unlocked! 🎉` : "You've completed the whole programme! 🎉");
  } else if(isGuestCapped(currentChain()[currentChain().indexOf(key)+1])){
    toast("🎓 That's the end of the free demo — get in touch to unlock the full 9-week course!");
  } else {
    toast('Step complete — the next one is unlocked! 🎉');
  }
}

/* ---------------------------------------------------------------------
   Page renderers
   --------------------------------------------------------------------- */
function editorBlock(editorId, starter, outId, runCallExpr, label){
  return `<div class="editor-wrap">
      <div class="editor-toolbar"><span class="et-label">${label||'PYTHON'}</span>
        <button class="run-btn" id="btn-${editorId}" onclick="${runCallExpr}">▶ Run</button></div>
      <textarea class="code-editor" id="${editorId}">${escapeHtml(starter)}</textarea>
    </div>
    <div class="console empty" id="${outId}"></div>
    ${previewPaneHtml(editorId)}`;
}

function renderExercise(wk, i, ex, displayNum){
  const editorId = `cm-${CURRENT_LEVEL}_${wk}-ex${i}`;
  const outId = `out-${CURRENT_LEVEL}_${wk}-ex${i}`;
  const testsId = `tests-${CURRENT_LEVEL}_${wk}-ex${i}`;
  const n = displayNum || (i+1);
  return `<div class="exercise">
    <div class="ex-title">${n}. ${escapeHtml(ex.title)}</div>
    <p>${ex.desc}</p>
    <div class="editor-wrap">
      <div class="editor-toolbar"><span class="et-label">EXERCISE ${n}</span>
        <button class="run-btn" id="btn-${editorId}" onclick="checkExercise('${wk}',${i},'${editorId}','${outId}','${testsId}')">▶ Run &amp; Check</button></div>
      <textarea class="code-editor" id="${editorId}">${escapeHtml(ex.starter)}</textarea>
    </div>
    <div class="console empty" id="${outId}"></div>
    ${previewPaneHtml(editorId)}
    <div class="test-results" id="${testsId}"></div>
  </div>`;
}

// Optional, ungraded-toward-progression bonus exercise for early finishers.
// Deliberately NOT rendered via renderExercise()/checkExercise() — those are
// wired to day-routing/gating side effects (refreshDayCompleteState) that the
// stretch challenge must never trigger. Writes to its own localStorage key
// that refreshDayCompleteState never reads, so it's non-blocking by
// construction rather than by a special-cased flag.
function stretchChallengeHtml(wk, sc){
  const lvl = CURRENT_LEVEL;
  const editorId = `cm-${lvl}_${wk}-stretch`;
  const outId = `out-${lvl}_${wk}-stretch`;
  const testsId = `tests-${lvl}_${wk}-stretch`;
  return `<div class="card stretch-card">
    <h2>⭐ Stretch Challenge <span class="stretch-badge">Optional</span></h2>
    <p class="stretch-intro">Finished early? This one's for the curious — it's not required and won't block your week.</p>
    <div class="exercise stretch-exercise">
      <div class="ex-title">${escapeHtml(sc.title)}</div>
      <p>${sc.desc}</p>
      <div class="editor-wrap">
        <div class="editor-toolbar"><span class="et-label">STRETCH CHALLENGE</span>
          <button class="run-btn" id="btn-${editorId}" onclick="checkStretchChallenge('${wk}','${editorId}','${outId}','${testsId}')">▶ Run &amp; Check</button></div>
        <textarea class="code-editor" id="${editorId}">${escapeHtml(sc.starter)}</textarea>
      </div>
      <div class="console empty" id="${outId}"></div>
      ${previewPaneHtml(editorId)}
      <div class="test-results" id="${testsId}"></div>
    </div>
  </div>`;
}

async function checkStretchChallenge(weekKey, editorId, outId, testsId){
  const week = currentWeeks().find(w=>w.key===weekKey);
  const sc = week.stretchChallenge;
  await runAndGrade(editorId, outId, testsId, sc.tests, (allPass)=>{
    localStorage.setItem(`pyac_${subjectKeyPrefix()}${CURRENT_LEVEL}_stretch_${weekKey}`, allPass?'pass':'fail');
    syncProgress();
  });
}

function renderWeekPage(week){
  const wk = week.key;
  const lvl = CURRENT_LEVEL;
  return `
    <div class="hero"><h1>Week ${week.num} — ${escapeHtml(week.title)}</h1>
      <div class="meta">${escapeHtml(week.scenarioTag)} · split into 3 short sessions, about 45–60 minutes each</div></div>
    <div class="day-tabs" id="daytabs-${lvl}_${wk}">
      <button class="day-tab" id="daytab-${lvl}_${wk}-1" onclick="goToDay('${wk}',1)">Day 1<span class="dt-sub">Learn the idea · ~45–50 min</span></button>
      <button class="day-tab" id="daytab-${lvl}_${wk}-2" onclick="goToDay('${wk}',2)">Day 2<span class="dt-sub">Practice · ~45–50 min</span></button>
      <button class="day-tab" id="daytab-${lvl}_${wk}-3" onclick="goToDay('${wk}',3)">Day 3<span class="dt-sub">Apply &amp; quiz · ~50–60 min</span></button>
    </div>
    <div class="day-content" id="day-${lvl}_${wk}-1">${dayHtml(week,1)}</div>
    <div class="day-content" id="day-${lvl}_${wk}-2">${dayHtml(week,2)}</div>
    <div class="day-content" id="day-${lvl}_${wk}-3">${dayHtml(week,3)}</div>`;
}

function dayHtml(week, d){
  const wk = week.key;
  const lvl = CURRENT_LEVEL;
  if(d === 1){
    return `
      <div class="scenario-box"><div class="sb-tag">The Scenario</div><p>${week.scenario}</p></div>
      <div class="card">
        <h2>What you'll learn today</h2>
        <ul>${week.objectives.map(o=>`<li>${escapeHtml(o)}</li>`).join('')}</ul>
        ${week.conceptHtml}
      </div>
      <div class="card">
        <h2>🧑‍💻 Try it yourself</h2>
        <p>Edit the code below, then press Run. This one isn't graded — just explore!</p>
        ${editorBlock(`cm-${lvl}_${wk}-sandbox`, week.sandboxStarter, `out-${lvl}_${wk}-sandbox`, `runSandbox('cm-${lvl}_${wk}-sandbox','out-${lvl}_${wk}-sandbox','${wk}')`, 'SANDBOX')}
      </div>
      <div class="card">
        <h2>🔎 Another example — try this too!</h2>
        <p>Here's the same idea from a slightly different angle. Run it, then try changing a value or two.</p>
        ${editorBlock(`cm-${lvl}_${wk}-sandbox2`, week.sandboxStarter2, `out-${lvl}_${wk}-sandbox2`, `runSandbox('cm-${lvl}_${wk}-sandbox2','out-${lvl}_${wk}-sandbox2','${wk}')`, 'SANDBOX')}
      </div>
      ${week.sandboxStarter3 ? `
      <div class="card">
        <h2>🔎 One more angle</h2>
        <p>A third look at today's idea. Run it, then tweak it to see what changes.</p>
        ${editorBlock(`cm-${lvl}_${wk}-sandbox3`, week.sandboxStarter3, `out-${lvl}_${wk}-sandbox3`, `runSandbox('cm-${lvl}_${wk}-sandbox3','out-${lvl}_${wk}-sandbox3','${wk}')`, 'SANDBOX')}
      </div>` : ''}
      <div class="complete-bar">
        <div>Run the sandbox code at least once, then move on to Day 2:</div>
        <ul class="req-list" id="reqlist-${lvl}_${wk}-day1"></ul>
        <button class="complete-btn" id="complete-btn-${lvl}_${wk}-day1" onclick="markDayComplete('${wk}',1)" disabled>✓ Mark Day 1 Complete — Unlock Day 2</button>
      </div>`;
  }
  if(d === 2){
    return `
      <div class="card">
        <h2>📝 Practice — Exercises</h2>
        ${renderExercise(wk,0,week.exercises[0],1)}
        ${renderExercise(wk,1,week.exercises[1],2)}
        ${week.exercises[4] ? renderExercise(wk,4,week.exercises[4],3) : ''}
      </div>
      <div class="complete-bar">
        <div>Pass ${week.exercises[4] ? 'all three exercises' : 'both exercises'} above to unlock Day 3:</div>
        <ul class="req-list" id="reqlist-${lvl}_${wk}-day2"></ul>
        <button class="complete-btn" id="complete-btn-${lvl}_${wk}-day2" onclick="markDayComplete('${wk}',2)" disabled>✓ Mark Day 2 Complete — Unlock Day 3</button>
      </div>`;
  }
  return `
    <div class="card">
      <h2>📝 Practice — Exercises</h2>
      ${renderExercise(wk,2,week.exercises[2],1)}
      ${renderExercise(wk,3,week.exercises[3],2)}
      ${week.exercises[5] ? renderExercise(wk,5,week.exercises[5],3) : ''}
    </div>
    <div class="card">
      <h2>🧠 Quick quiz</h2>
      ${week.quiz.map((q,i)=>`<div class="quiz-card" id="quizq-${lvl}_${wk}-${i}">${quizQuestionHtml(wk,i)}</div>`).join('')}
      <div id="quiz-score-banner-${lvl}_${wk}" style="font-size:0.82rem;font-weight:700;margin-top:6px;"></div>
    </div>
    ${week.stretchChallenge ? stretchChallengeHtml(wk, week.stretchChallenge) : ''}
    <div class="complete-bar">
      <div>Finish the requirements below to complete Week ${week.num}:</div>
      <ul class="req-list" id="reqlist-${lvl}_${wk}-day3"></ul>
      <button class="complete-btn" id="complete-btn-${lvl}_${wk}-day3" onclick="markDayComplete('${wk}',3)" disabled>✓ Mark Day 3 Complete — Finish Week ${week.num}</button>
    </div>`;
}

/* ---------------------------------------------------------------------
   Day-level lock chain (nested inside each week)
   --------------------------------------------------------------------- */
const currentDayView = {};

function dayStatus(wk, d){ return localStorage.getItem(`pyac_${subjectKeyPrefix()}${CURRENT_LEVEL}_day_${wk}_${d}`) || 'todo'; }
function setDayStatus(wk, d, val){ localStorage.setItem(`pyac_${subjectKeyPrefix()}${CURRENT_LEVEL}_day_${wk}_${d}`, val); syncProgress(); }
function dayUnlocked(wk, d){
  if(INSTRUCTOR_PREVIEW) return true;
  if(d <= 1) return true;
  return dayStatus(wk, d-1) === 'done';
}
function defaultDayFor(wk){
  if(dayStatus(wk,1) !== 'done') return 1;
  if(dayStatus(wk,2) !== 'done') return 2;
  return 3;
}

function goToDay(wk, d){
  if(!dayUnlocked(wk, d)){ toast('Complete Day '+(d-1)+' first to unlock this.'); return; }
  for(let i=1;i<=3;i++){
    const el = document.getElementById(`day-${CURRENT_LEVEL}_${wk}-${i}`);
    if(el) el.classList.toggle('active', i===d);
  }
  currentDayView[wk] = d;
  mountEditorsIn(`day-${CURRENT_LEVEL}_${wk}-${d}`);
  refreshDayCompleteState(wk, d);
  refreshDayTabs(wk);
}

function refreshDayTabs(wk){
  for(let d=1; d<=3; d++){
    const tab = document.getElementById(`daytab-${CURRENT_LEVEL}_${wk}-${d}`);
    if(!tab) continue;
    tab.classList.toggle('locked', !dayUnlocked(wk,d));
    tab.classList.toggle('done', dayStatus(wk,d) === 'done');
    tab.classList.toggle('active', currentDayView[wk] === d);
  }
}

function refreshDayCompleteState(wk, d){
  const btn = document.getElementById(`complete-btn-${CURRENT_LEVEL}_${wk}-day${d}`);
  if(!btn) return;
  const done = dayStatus(wk,d) === 'done';
  const reqList = document.getElementById(`reqlist-${CURRENT_LEVEL}_${wk}-day${d}`);
  const week = currentWeeks().find(w=>w.key===wk);
  let met;
  if(d === 1){
    met = localStorage.getItem(`pyac_${subjectKeyPrefix()}${CURRENT_LEVEL}_sandbox_${wk}`) === 'done';
    if(reqList) reqList.innerHTML = `<li class="${met?'met':''}">Run the sandbox code at least once</li>`;
  } else if(d === 2){
    const ex0Ok = localStorage.getItem(`pyac_${subjectKeyPrefix()}${CURRENT_LEVEL}_ex_${wk}_0`) === 'pass';
    const ex1Ok = localStorage.getItem(`pyac_${subjectKeyPrefix()}${CURRENT_LEVEL}_ex_${wk}_1`) === 'pass';
    const has3rd = week && week.exercises[4];
    const ex4Ok = !has3rd || localStorage.getItem(`pyac_${subjectKeyPrefix()}${CURRENT_LEVEL}_ex_${wk}_4`) === 'pass';
    met = ex0Ok && ex1Ok && ex4Ok;
    if(reqList) reqList.innerHTML =
      `<li class="${ex0Ok?'met':''}">Pass Exercise 1</li>` +
      `<li class="${ex1Ok?'met':''}">Pass Exercise 2</li>` +
      (has3rd ? `<li class="${ex4Ok?'met':''}">Pass Exercise 3</li>` : '');
  } else {
    const q = quizScore(wk);
    const quizOk = q.correct >= Math.ceil(q.total * 0.75);
    const ex2Ok = localStorage.getItem(`pyac_${subjectKeyPrefix()}${CURRENT_LEVEL}_ex_${wk}_2`) === 'pass';
    const ex3Ok = localStorage.getItem(`pyac_${subjectKeyPrefix()}${CURRENT_LEVEL}_ex_${wk}_3`) === 'pass';
    const has3rd = week && week.exercises[5];
    const ex5Ok = !has3rd || localStorage.getItem(`pyac_${subjectKeyPrefix()}${CURRENT_LEVEL}_ex_${wk}_5`) === 'pass';
    met = quizOk && ex2Ok && ex3Ok && ex5Ok;
    if(reqList) reqList.innerHTML =
      `<li class="${quizOk?'met':''}">Score at least 75% on the quiz</li>` +
      `<li class="${ex2Ok?'met':''}">Pass Exercise 1</li>` +
      `<li class="${ex3Ok?'met':''}">Pass Exercise 2</li>` +
      (has3rd ? `<li class="${ex5Ok?'met':''}">Pass Exercise 3</li>` : '');
  }
  btn.disabled = !met || done;
  if(done) btn.textContent = `✓ Day ${d} complete`;
}

function markDayComplete(wk, d){
  setDayStatus(wk, d, 'done');
  if(d === 3){
    markStepComplete(wk);
  } else {
    toast('Day '+d+' complete — Day '+(d+1)+' unlocked! 🎉');
  }
  refreshDayTabs(wk);
  refreshDayCompleteState(wk, d);
  if(d < 3) goToDay(wk, d+1);
}

function renderMP1Page(){
  const lvl = CURRENT_LEVEL;
  const mp1 = currentMP1();
  let html = `<div class="puzzle-hero"><h1>🧩 ${escapeHtml(mp1.title)}</h1><p>${mp1.intro}</p></div>
    <div class="callout new-trick"><strong>New trick:</strong> ${mp1.newTrick}</div>`;
  mp1.stages.forEach((st,i)=>{
    const editorId = `cm-${lvl}_mp1-${st.key}`;
    const outId = `out-${lvl}_mp1-${st.key}`;
    const testsId = `tests-${lvl}_mp1-${st.key}`;
    html += `<div class="stage-card">
      <div class="stage-badge" id="badge-${lvl}_mp1-${st.key}">Not started</div>
      <h3>${escapeHtml(st.title)}</h3>
      <p>${st.desc}</p>
      <div class="editor-wrap">
        <div class="editor-toolbar"><span class="et-label">STAGE ${String.fromCharCode(65+i)}</span>
          <button class="run-btn" id="btn-${editorId}" onclick="checkMP1Stage('${st.key}','${editorId}','${outId}','${testsId}')">▶ Run &amp; Check</button></div>
        <textarea class="code-editor" id="${editorId}">${escapeHtml(st.starter)}</textarea>
      </div>
      <div class="console empty" id="${outId}"></div>
      ${previewPaneHtml(editorId)}
      <div class="test-results" id="${testsId}"></div>
    </div>`;
  });
  html += `<div class="complete-bar" style="background:#0b1120;border-color:#1e293b;color:#e2e8f0;">
    <div>Complete all three stages to unlock Week 5 and the rest of the level.</div>
    <ul class="req-list" id="reqlist-${lvl}_mp1" style="color:#cbd5e1;"></ul>
    <button class="complete-btn" id="complete-btn-${lvl}_mp1" onclick="markStepComplete('mp1')" disabled>✓ Mark Mini Project 1 Complete</button>
  </div>`;
  return html;
}

function renderMP2Page(){
  const lvl = CURRENT_LEVEL;
  const mp2 = currentMP2();
  let html = `<div class="puzzle-hero"><h1>🧩 ${escapeHtml(mp2.title)}</h1><p>${mp2.intro}</p></div>
    <div class="callout new-trick">${mp2.fixtureNote}<pre class="code-block">${escapeHtml(mp2.fixtureCode)}</pre></div>`;
  mp2.doors.forEach((d,i)=>{
    const editorId = `cm-${lvl}_mp2-${d.key}`;
    const outId = `out-${lvl}_mp2-${d.key}`;
    const testsId = `tests-${lvl}_mp2-${d.key}`;
    html += `<div class="stage-card">
      <div class="stage-badge" id="badge-${lvl}_mp2-${d.key}">Not started</div>
      <h3>${escapeHtml(d.title)}</h3>
      <p>${d.desc}</p>
      <div class="editor-wrap">
        <div class="editor-toolbar"><span class="et-label">DOOR ${i+1}</span>
          <button class="run-btn" id="btn-${editorId}" onclick="checkMP2Door('${d.key}','${editorId}','${outId}','${testsId}')">▶ Run &amp; Check</button></div>
        <textarea class="code-editor" id="${editorId}">${escapeHtml(d.starter)}</textarea>
      </div>
      <div class="console empty" id="${outId}"></div>
      ${previewPaneHtml(editorId)}
      <div class="test-results" id="${testsId}"></div>
    </div>`;
  });
  html += `<div class="complete-bar" style="background:#0b1120;border-color:#1e293b;color:#e2e8f0;">
    <div>Open all three doors to unlock your ${escapeHtml(currentLevelName())} Certificate!</div>
    <ul class="req-list" id="reqlist-${lvl}_mp2" style="color:#cbd5e1;"></ul>
    <button class="complete-btn" id="complete-btn-${lvl}_mp2" onclick="markStepComplete('mp2')" disabled>✓ Mark Mini Project 2 Complete</button>
  </div>`;
  return html;
}

/* ---------------------------------------------------------------------
   Certificate
   --------------------------------------------------------------------- */
function renderCertPage(){
  const lvl = CURRENT_LEVEL;
  const meta = LEVEL_META[lvl];
  const alreadyDone = getStatus('cert') === 'done';
  const feedbackDone = localStorage.getItem(`pyac_${subjectKeyPrefix()}${lvl}_feedback_${meta.slug}`) === 'done';
  const nextName = meta.next ? LEVEL_META[meta.next].name : null;
  const unlockLine = nextName ? `Submit your feedback above to unlock ${nextName}:` : 'Submit your feedback above to complete the programme:';
  const unlockBtnLabel = alreadyDone ? `✓ ${nextName ? nextName+' Unlocked' : 'Programme Complete'}` : (nextName ? `🚀 Unlock ${nextName} Level` : '🚀 Finish the Programme');
  _feedbackRatings[lvl] = {}; // never leak a rating entered on one level's cert page into another's
  return `<div class="hero"><h1>🎓 Your ${escapeHtml(meta.name)} Certificate</h1><div class="meta">Congratulations on finishing Level ${meta.num}!</div></div>
    <div class="card cert-wrap">
      <canvas id="cert-canvas-${lvl}" width="1200" height="850"></canvas><br>
      <button class="download-btn" onclick="downloadCertificate()">⬇ Download Certificate</button>
    </div>
    <div class="card" id="feedback-card-${lvl}">
      <h2>📝 Quick feedback before you go</h2>
      <p>Help us make the next level even better — this takes under a minute.</p>
      ${ratingRow('enjoy','How much did you enjoy this level?')}
      ${ratingRow('clarity','How clear were the lessons?')}
      ${ratingRow('confidence',`How confident do you feel with ${escapeHtml(currentSubjectMeta().name)} now?`)}
      <label style="font-weight:700;font-size:0.85rem;color:var(--text-muted);display:block;margin-top:16px;">Anything you'd like to tell us? (optional)</label>
      <textarea id="fb-comment-${lvl}" rows="3" style="width:100%;padding:10px 14px;border:1px solid var(--border);border-radius:8px;font-family:inherit;font-size:0.9rem;margin-top:8px;resize:vertical;" placeholder="What did you like? What could be better?" ${feedbackDone?'disabled':''}></textarea>
      <div id="feedback-status-${lvl}" style="font-size:0.85rem;margin:10px 0;"></div>
      <button class="complete-btn" id="feedback-submit-btn-${lvl}" onclick="submitFeedback('${meta.slug}')" ${feedbackDone?'disabled':''}>${feedbackDone?'✓ Feedback submitted — thank you!':'Submit Feedback'}</button>
    </div>
    <div class="complete-bar">
      <div>${unlockLine}</div>
      <ul class="req-list" id="reqlist-${lvl}_cert"></ul>
      <button class="complete-btn" id="complete-btn-${lvl}_cert" onclick="markStepComplete('cert')" disabled>${unlockBtnLabel}</button>
    </div>`;
}

const _feedbackRatings = {b:{}, i:{}, a:{}};
function ratingRow(qKey, label){
  let opts = '';
  for(let i=1;i<=5;i++){
    opts += `<button type="button" class="rate-btn" data-v="${i}" onclick="setRating('${qKey}',${i})">${i}</button>`;
  }
  return `<div class="fb-row"><div class="fb-label">${escapeHtml(label)}</div><div class="fb-scale" id="fbscale-${CURRENT_LEVEL}-${qKey}">${opts}</div></div>`;
}
function setRating(qKey, val){
  _feedbackRatings[CURRENT_LEVEL][qKey] = val;
  const scale = document.getElementById(`fbscale-${CURRENT_LEVEL}-${qKey}`);
  if(scale){
    scale.querySelectorAll('.rate-btn').forEach(b=>{
      b.classList.toggle('active', parseInt(b.dataset.v,10) === val);
    });
  }
}

async function submitFeedback(level){
  const lvl = CURRENT_LEVEL;
  const statusEl = document.getElementById(`feedback-status-${lvl}`);
  const ratings = _feedbackRatings[lvl];
  const required = ['enjoy','clarity','confidence'];
  const missing = required.filter(k => !ratings[k]);
  if(missing.length){ statusEl.style.color='var(--danger)'; statusEl.textContent = 'Please rate all three questions above.'; return; }
  if(!fbOk()){ statusEl.style.color='var(--danger)'; statusEl.textContent = 'Cannot submit right now — no connection to the server.'; return; }
  statusEl.style.color='var(--text-muted)'; statusEl.textContent = 'Submitting...';
  const payload = {
    username: localStorage.getItem(sk('username')) || '',
    displayName: localStorage.getItem(sk('name')) || '',
    classCode: localStorage.getItem(sk('class')) || '',
    yearGroup: localStorage.getItem(sk('year')) || '',
    level,
    ratings: Object.assign({}, ratings),
    comment: (document.getElementById(`fb-comment-${lvl}`) || {}).value || '',
    submittedAt: new Date().toISOString()
  };
  try{
    const res = await fetch(fbUrl(fbBase()+'/feedback/'+level+'.json'), {method:'POST', body: JSON.stringify(payload)});
    if(!res.ok) throw new Error('failed');
    localStorage.setItem(`pyac_${subjectKeyPrefix()}${lvl}_feedback_${level}`, 'done');
    syncProgress();
    statusEl.style.color = 'var(--success)';
    statusEl.textContent = '✅ Thank you for your feedback!';
    const btn = document.getElementById(`feedback-submit-btn-${lvl}`);
    if(btn){ btn.disabled = true; btn.textContent = '✓ Feedback submitted — thank you!'; }
    const comment = document.getElementById(`fb-comment-${lvl}`);
    if(comment) comment.disabled = true;
    refreshCertCompleteState();
  }catch(e){
    statusEl.style.color = 'var(--danger)';
    statusEl.textContent = 'Could not submit feedback — please try again.';
  }
}

function refreshCertCompleteState(){
  const meta = LEVEL_META[CURRENT_LEVEL];
  const feedbackDone = localStorage.getItem(`pyac_${subjectKeyPrefix()}${CURRENT_LEVEL}_feedback_${meta.slug}`) === 'done';
  const done = getStatus('cert') === 'done';
  const btn = document.getElementById(`complete-btn-${CURRENT_LEVEL}_cert`);
  if(btn) btn.disabled = !feedbackDone || done;
  const reqList = document.getElementById(`reqlist-${CURRENT_LEVEL}_cert`);
  if(reqList) reqList.innerHTML = `<li class="${feedbackDone?'met':''}">Submit the feedback form above</li>`;
}

function getCertId(){
  let id = localStorage.getItem(`pyac_${subjectKeyPrefix()}${CURRENT_LEVEL}_cert_id`);
  if(!id){
    // Python keeps its original PYAC-{level}-{rand} format for back-compat
    // with already-issued certificates; every other subject gets its short
    // code folded in so ids stay unique and self-describing across subjects.
    id = CURRENT_SUBJECT==='py'
      ? 'PYAC-' + currentLevelShort() + '-' + Math.random().toString(36).slice(2,8).toUpperCase()
      : 'PYAC-' + currentSubjectMeta().short + '-' + currentLevelShort() + '-' + Math.random().toString(36).slice(2,8).toUpperCase();
    localStorage.setItem(`pyac_${subjectKeyPrefix()}${CURRENT_LEVEL}_cert_id`, id);
  }
  return id;
}

const CERT_VERIFY_BASE = 'https://drtertseghaanande.com/python-academy-verify.html';

async function registerCertificate(certId, name){
  if(!fbOk()) return;
  if(localStorage.getItem(sk('is_guest')) === 'true') return; // keep demo certs out of the public verification table
  try{
    const existing = await fetch(fbUrl(fbBase()+'/certificates/'+encodeURIComponent(certId)+'.json')).then(r=>r.json());
    if(existing) return; // already registered — never overwrite
    await fetch(fbUrl(fbBase()+'/certificates/'+encodeURIComponent(certId)+'.json'), {
      method:'PUT',
      body: JSON.stringify({
        username: localStorage.getItem(sk('username')) || '',
        displayName: name,
        subject: currentSubjectMeta().name,
        level: currentLevelName(),
        awardedAt: new Date().toISOString()
      })
    });
  }catch(e){}
}

function drawQrCode(ctx, text, x, y, size){
  if(typeof qrcode === 'undefined') return; // library failed to load — skip gracefully, certificate still works
  const qr = qrcode(0, 'M');
  qr.addData(text);
  qr.make();
  const moduleCount = qr.getModuleCount();
  const cellSize = size / moduleCount;
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(x, y, size, size);
  ctx.fillStyle = '#211f3d';
  for(let row=0; row<moduleCount; row++){
    for(let col=0; col<moduleCount; col++){
      if(qr.isDark(row,col)){
        ctx.fillRect(x + col*cellSize, y + row*cellSize, Math.ceil(cellSize), Math.ceil(cellSize));
      }
    }
  }
}

function maybeDrawCertificate(){
  const canvas = document.getElementById(`cert-canvas-${CURRENT_LEVEL}`);
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  const name = localStorage.getItem(sk('name')) || 'Student';
  const date = new Date().toLocaleDateString('en-GB', {day:'numeric', month:'long', year:'numeric'});
  const certId = getCertId();

  ctx.fillStyle = '#ffffff'; ctx.fillRect(0,0,1200,850);
  const grad = ctx.createLinearGradient(0,0,1200,0);
  grad.addColorStop(0,'#4338ca'); grad.addColorStop(1,'#6366f1');
  ctx.fillStyle = grad;
  ctx.fillRect(0,0,1200,26);
  ctx.fillRect(0,824,1200,26);
  ctx.strokeStyle = '#c7d2fe'; ctx.lineWidth = 6; ctx.strokeRect(40,40,1120,770);
  ctx.strokeStyle = '#4338ca'; ctx.lineWidth = 2; ctx.strokeRect(56,56,1088,738);

  const subjMeta = currentSubjectMeta();
  ctx.textAlign = 'center';
  ctx.fillStyle = '#4338ca';
  ctx.font = '700 22px Segoe UI, sans-serif';
  ctx.fillText(`${subjMeta.icon} ${subjMeta.academyName.toUpperCase()}`, 600, 140);
  ctx.font = '400 12px Segoe UI, sans-serif';
  ctx.fillStyle = '#6b6890';
  ctx.fillText('A Codify Track', 600, 160);

  ctx.font = '800 42px Segoe UI, sans-serif';
  ctx.fillStyle = '#211f3d';
  ctx.fillText('Certificate of Completion', 600, 208);

  const meta = LEVEL_META[CURRENT_LEVEL];
  ctx.font = '400 18px Segoe UI, sans-serif';
  ctx.fillStyle = '#6b6890';
  ctx.fillText(`Level ${meta.num} · ${meta.name} — ${meta.tagline}`, 600, 236);

  ctx.font = '400 20px Segoe UI, sans-serif';
  ctx.fillStyle = '#211f3d';
  ctx.fillText('This certifies that', 600, 320);

  ctx.font = '700 46px Georgia, serif';
  ctx.fillStyle = '#4338ca';
  ctx.fillText(name, 600, 390);

  ctx.strokeStyle = '#c7d2fe'; ctx.lineWidth = 1.5;
  ctx.beginPath(); ctx.moveTo(360,410); ctx.lineTo(840,410); ctx.stroke();

  ctx.font = '400 18px Segoe UI, sans-serif';
  ctx.fillStyle = '#211f3d';
  ctx.fillText('has successfully completed all 9 weeks and both puzzle mini-projects of', 600, 450);
  ctx.font = '700 20px Segoe UI, sans-serif';
  ctx.fillText(`the ${subjMeta.academyName} ${meta.name} Level`, 600, 480);

  ctx.font = '400 15px Segoe UI, sans-serif';
  ctx.fillStyle = '#6b6890';
  ctx.fillText('Awarded ' + date + '  ·  Certificate ID: ' + certId, 600, 540);

  ctx.textAlign = 'left';
  ctx.font = 'italic 22px Georgia, serif';
  ctx.fillStyle = '#211f3d';
  ctx.fillText('Dr T. J. Anande', 250, 700);
  ctx.strokeStyle = '#94a3b8'; ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(250,712); ctx.lineTo(500,712); ctx.stroke();
  ctx.font = '400 13px Segoe UI, sans-serif'; ctx.fillStyle = '#6b6890';
  ctx.fillText('Programme Director', 250, 730);

  const verifyUrl = CERT_VERIFY_BASE + '?id=' + encodeURIComponent(certId);
  drawQrCode(ctx, verifyUrl, 845, 615, 105);
  ctx.textAlign = 'center';
  ctx.font = '400 11px Segoe UI, sans-serif'; ctx.fillStyle = '#6b6890';
  ctx.fillText('Scan to verify', 897, 736);

  registerCertificate(certId, name);
}

function downloadCertificate(){
  const canvas = document.getElementById(`cert-canvas-${CURRENT_LEVEL}`);
  if(!canvas) return;
  const link = document.createElement('a');
  link.download = `${currentSubjectMeta().slug}-academy-${currentLevelSlug()}-certificate.png`;
  link.href = canvas.toDataURL('image/png');
  link.click();
}

/* ---------------------------------------------------------------------
   Sidebar generation — new subject shells ship an empty <div id="sidebar">
   and get their nav auto-built from LEVEL_META + this subject's own week
   titles, instead of hand-authored nav-item markup (the highest-repetition,
   highest-typo-risk part of scaffolding a new subject). python-academy.html
   keeps its original hand-authored sidebar untouched — this only runs when
   the sidebar is still empty, so it can never override working markup.
   --------------------------------------------------------------------- */
function renderSidebar(){
  const sidebar = document.getElementById('sidebar');
  if(!sidebar || sidebar.querySelector('.nav-item')) return;
  const stepLabel = {mp1:'Mini Project 1', mp2:'Mini Project 2', cert:'Certificate'};
  const stepIcon = {mp1:'🧩', mp2:'🧩', cert:'🎓'};
  function chainItemsHtml(level){
    return currentChain().map(key=>{
      const week = /^week\d+$/.test(key) ? weeksFor(level).find(w=>w.key===key) : null;
      const nb = week ? 'W'+week.num : stepIcon[key];
      const label = week ? week.title : stepLabel[key];
      return `<a class="nav-item" onclick="navGo('${level}_${key}')" id="nav-${level}_${key}"><span class="nb">${nb}</span> ${escapeHtml(label)} <span class="nav-check">✓</span></a>`;
    }).join('');
  }
  let html = `<div class="nav-section"><a class="nav-item" onclick="showPage('hub')" id="nav-hub"><span class="nb">🏠</span> Home</a></div>`;
  LEVELS.forEach(level=>{
    const meta = LEVEL_META[level];
    const overviewLink = level==='b' ? '' : `<a class="nav-item" onclick="navGo('${level}_hub')" id="nav-${level}_hub"><span class="nb">➡️</span> ${escapeHtml(meta.name)} Overview</a>`;
    html += `<div class="nav-section"><div class="nav-section-title">Level ${meta.num} <span class="lvl-badge">${escapeHtml(meta.name)}</span></div>${overviewLink}${chainItemsHtml(level)}</div>`;
  });
  html += `<div class="nav-section"><a class="nav-item" onclick="showPage('contact')" id="nav-contact"><span class="nb">✉️</span> Contact / Help</a></div>`;
  html += `<div class="nav-section"><a class="nav-item" onclick="logOut()" style="color:#f87171;"><span class="nb">↪</span> Log out</a></div>`;
  sidebar.innerHTML = html;
}

/* ---------------------------------------------------------------------
   Init
   --------------------------------------------------------------------- */
function initApp(){
  renderSidebar();
  loadRegistration();
  refreshSidebarLocks();
  refreshHubCards();
  if(INSTRUCTOR_PREVIEW){
    enterPreviewMode();
  } else {
    showPage('hub');
  }
}
document.addEventListener('DOMContentLoaded', initApp);

/* ---------------------------------------------------------------------
   Instructor preview mode — opened from the dashboard with
   ?instructor=1&go=<pageArg>&day=<n> to jump straight to any content,
   bypassing every lock. Nothing here touches localStorage's username, so
   syncProgress() never fires — no risk of writing preview data to a
   real account.
   --------------------------------------------------------------------- */
const INSTRUCTOR_PREVIEW = new URLSearchParams(location.search).get('instructor') === '1';

function enterPreviewMode(){
  setAuthOverlayVisible(false);
  document.getElementById('student-chip-name').textContent = '👁 Instructor Preview';
  showPreviewBanner();
  const params = new URLSearchParams(location.search);
  const go = params.get('go');
  const day = params.get('day');
  if(go){
    navGo(go);
    const chainKey = stripLevelPrefix(go);
    if(day && chainKey.startsWith('week')) goToDay(chainKey, parseInt(day,10));
  } else {
    showPage('hub');
  }
}

function showPreviewBanner(){
  const b = document.createElement('div');
  b.id = 'preview-banner';
  b.style.cssText = 'position:fixed;top:0;left:0;right:0;height:32px;line-height:32px;background:#f59e0b;color:#1e1b4b;text-align:center;font-weight:700;font-size:0.8rem;z-index:5000;';
  b.textContent = '👁 Instructor Preview Mode — browsing freely, nothing here is saved to any student account';
  document.body.appendChild(b);
  document.getElementById('header').style.top = '32px';
  document.getElementById('sidebar').style.top = 'calc(var(--header-h) + 32px)';
  document.getElementById('main').style.paddingTop = 'calc(var(--header-h) + 32px)';
}
