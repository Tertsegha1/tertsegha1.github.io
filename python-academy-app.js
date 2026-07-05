/* =========================================================================
   Python Academy — app engine
   Rendering, Pyodide runner, grading, progress/unlock chain, Firebase sync,
   certificate generator.
   ========================================================================= */

const CHAIN = ['week1','week2','week3','week4','mp1','week5','week6','week7','week8','week9','mp2','cert'];
window._editors = window._editors || {};

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
    const res = await fetch(fbUrl('/pyacademy/messages.json'), {method:'POST', body: JSON.stringify(payload)});
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

function loadRegistration(){
  const username = localStorage.getItem('pyac_username');
  if(username){
    document.getElementById('register-overlay').style.display = 'none';
    document.getElementById('student-chip-name').textContent = localStorage.getItem('pyac_name') || username;
  }
}

function clearLocalSession(){
  Object.keys(localStorage).filter(k=>k.startsWith('pyac_')).forEach(k=>localStorage.removeItem(k));
}

// Lets a visitor close the sign-in overlay and browse the hub/marketing
// content without an account, then reopen it later from the header chip
// whenever they're ready to create an account or log in.
function dismissAuthOverlay(){
  document.getElementById('register-overlay').style.display = 'none';
}

function onStudentChipClick(){
  if(localStorage.getItem('pyac_username')){
    showPage('hub');
  } else {
    document.getElementById('register-overlay').style.display = 'flex';
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
    const codeRecord = await fetch(fbUrl('/pyacademy/passcodes/'+encodeURIComponent(passcode)+'.json')).then(r=>r.json());
    if(!codeRecord || codeRecord.active === false){
      errEl.textContent = "That passcode isn't valid — ask your instructor for the current one.";
      return;
    }
    const existing = await fetch(fbUrl('/pyacademy/users/'+encodeURIComponent(username)+'.json')).then(r=>r.json());
    if(existing){
      errEl.textContent = 'That username is already taken — choose another, or log in instead.';
      return;
    }
    const {salt, hash} = await hashPassword(pw);
    const record = {
      username, displayName: name, yearGroup: year, classCode: cls,
      passwordSalt: salt, passwordHash: hash,
      passcodeUsed: passcode,
      createdAt: new Date().toISOString(),
      updated: new Date().toISOString(),
      passwordEvents: [{type:'created', at: new Date().toISOString()}],
      progress: {}
    };
    const res = await fetch(fbUrl('/pyacademy/users/'+encodeURIComponent(username)+'.json'), {
      method:'PUT', body: JSON.stringify(record)
    });
    if(!res.ok) throw new Error('write failed');

    // Passcodes are single-use: deactivate this one immediately so nobody else
    // can register with it, even if they saw it written down or shared.
    const usedBy = Object.assign({}, codeRecord.usedBy || {});
    usedBy[username] = new Date().toISOString();
    fetch(fbUrl('/pyacademy/passcodes/'+encodeURIComponent(passcode)+'.json'), {
      method:'PATCH', body: JSON.stringify({usedCount: (codeRecord.usedCount||0)+1, usedBy, active:false})
    }).catch(()=>{});

    clearLocalSession();
    localStorage.setItem('pyac_username', username);
    localStorage.setItem('pyac_name', name);
    localStorage.setItem('pyac_year', year);
    localStorage.setItem('pyac_class', cls);
    document.getElementById('register-overlay').style.display = 'none';
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
    const record = await fetch(fbUrl('/pyacademy/users/'+encodeURIComponent(username)+'.json')).then(r=>r.json());
    if(!record){ errEl.textContent = 'No account with that username. Create one instead?'; return; }
    const {hash} = await hashPassword(pw, record.passwordSalt);
    if(hash !== record.passwordHash){ errEl.textContent = "Incorrect password. Ask your instructor to reset it if you've forgotten."; return; }

    clearLocalSession();
    localStorage.setItem('pyac_username', username);
    localStorage.setItem('pyac_name', record.displayName || username);
    localStorage.setItem('pyac_year', record.yearGroup || '');
    localStorage.setItem('pyac_class', record.classCode || '');

    if(record.isGuest){
      // The demo account always starts fresh — ignore whatever progress a
      // previous visitor's demo session may have left on the server record,
      // and never sync this session's progress back up either.
      localStorage.setItem('pyac_is_guest', 'true');
    } else {
      const prog = record.progress || {};
      Object.keys(prog).forEach(k=>{ if(k.startsWith('pyac_')) localStorage.setItem(k, prog[k]); });
    }

    document.getElementById('register-overlay').style.display = 'none';
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
  if(!confirm('Log out? Your progress is saved to your account, so you can log back in anytime.')) return;
  clearLocalSession();
  location.reload();
}

/* ---------------------------------------------------------------------
   Progress chain (localStorage) + Firebase sync
   --------------------------------------------------------------------- */
function getStatus(key){ return localStorage.getItem('pyac_b_status_'+key) || 'todo'; }
function setStatus(key,val){
  localStorage.setItem('pyac_b_status_'+key, val);
  syncProgress();
}
function isUnlocked(key){
  if(INSTRUCTOR_PREVIEW) return true;
  const idx = CHAIN.indexOf(key);
  if(idx <= 0) return true;
  return getStatus(CHAIN[idx-1]) === 'done';
}

function fbOk(){
  return !!(window.PYAC_FIREBASE && window.PYAC_FIREBASE.databaseURL && !window.PYAC_FIREBASE.databaseURL.includes('REPLACE'));
}
function fbUrl(path){ return window.PYAC_FIREBASE.databaseURL + path; }

function collectProgressSnapshot(){
  const snap = {};
  Object.keys(localStorage).forEach(k=>{
    if(k.startsWith('pyac_') && k !== 'pyac_username') snap[k] = localStorage.getItem(k);
  });
  return snap;
}

function syncProgress(){
  if(!fbOk()) return;
  if(localStorage.getItem('pyac_is_guest') === 'true') return; // demo sessions never persist
  const username = localStorage.getItem('pyac_username');
  if(!username) return;
  const updates = {
    displayName: localStorage.getItem('pyac_name') || '',
    yearGroup: localStorage.getItem('pyac_year') || '',
    classCode: localStorage.getItem('pyac_class') || '',
    updated: new Date().toISOString(),
    progress: collectProgressSnapshot()
  };
  // PATCH (not PUT) so password fields on this user record are left untouched
  fetch(fbUrl('/pyacademy/users/'+encodeURIComponent(username)+'.json'), {
    method:'PATCH', body: JSON.stringify(updates)
  }).catch(()=>{});
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
    username: localStorage.getItem('pyac_username') || '',
    displayName: localStorage.getItem('pyac_name') || 'Unknown student',
    classCode: localStorage.getItem('pyac_class') || '',
    subject: subject || '(no subject)',
    message,
    status: 'open',
    createdAt: new Date().toISOString()
  };
  try{
    const res = await fetch(fbUrl('/pyacademy/messages.json'), {method:'POST', body: JSON.stringify(payload)});
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
  if(!INSTRUCTOR_PREVIEW && !localStorage.getItem('pyac_username')){
    document.getElementById('register-overlay').style.display = 'flex';
    toast('Create an account or log in to open this content.');
    return;
  }
  if(pageArg === 'i_hub'){
    if(!INSTRUCTOR_PREVIEW && getStatus('cert') !== 'done'){ toast('Finish your Beginner certificate first to unlock Intermediate!'); return; }
    showPage('page-i_hub');
    return;
  }
  if(pageArg === 'a_hub'){
    if(!INSTRUCTOR_PREVIEW && localStorage.getItem('pyac_i_status_cert') !== 'done'){ toast('Finish Intermediate level first to unlock Advanced!'); return; }
    showPage('page-a_hub');
    return;
  }
  const chainKey = pageArg.replace(/^b_/,'');
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
    const week = BEGINNER_WEEKS.find(w=>w.key === chainKey);
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
  CHAIN.forEach(key=>{
    const navEl = document.getElementById('nav-b_'+key);
    if(!navEl) return;
    navEl.classList.toggle('locked', !isUnlocked(key));
    navEl.classList.toggle('done', getStatus(key) === 'done');
  });
  const iNav = document.getElementById('nav-i_hub');
  if(iNav) iNav.classList.toggle('locked', getStatus('cert') !== 'done');
  const aNav = document.getElementById('nav-a_hub');
  if(aNav) aNav.classList.toggle('locked', localStorage.getItem('pyac_i_status_cert') !== 'done');
  refreshBeginnerStrip();
}

function refreshBeginnerStrip(){
  const el = document.getElementById('beginner-progress-strip');
  if(!el) return;
  const labelMap = {week1:'W1',week2:'W2',week3:'W3',week4:'W4',mp1:'MP1',week5:'W5',week6:'W6',week7:'W7',week8:'W8',week9:'W9',mp2:'MP2',cert:'🎓'};
  el.innerHTML = CHAIN.map(k=>`<span class="wp-step ${getStatus(k)==='done'?'ok':''}">${labelMap[k]}</span>`).join('');
}

function refreshHubCards(){
  const total = CHAIN.length;
  const doneCount = CHAIN.filter(k=>getStatus(k)==='done').length;
  const pct = Math.round((doneCount/total)*100);
  const pbar = document.getElementById('progress-bar');
  if(pbar) pbar.style.width = pct+'%';
  const plabel = document.getElementById('progress-label');
  if(plabel) plabel.textContent = pct+'% complete';

  const beginnerDone = getStatus('cert') === 'done';
  const bStatusEl = document.getElementById('lc-beginner-status');
  if(bStatusEl){
    bStatusEl.textContent = beginnerDone ? '✓ Certificate earned' : (doneCount>0 ? `In progress · ${doneCount}/${total}` : 'Not started');
    bStatusEl.className = 'lc-status ' + (beginnerDone ? 'done' : (doneCount>0 ? 'progress' : 'locked-s'));
  }

  const iCard = document.getElementById('lc-intermediate');
  const iStatusEl = document.getElementById('lc-intermediate-status');
  if(iCard && iStatusEl){
    if(beginnerDone || INSTRUCTOR_PREVIEW){
      iCard.classList.remove('locked');
      iCard.onclick = ()=>navGo('i_hub');
      iStatusEl.textContent = 'Unlocked — start now!';
      iStatusEl.className = 'lc-status progress';
    } else {
      iCard.classList.add('locked');
      iCard.onclick = null;
      iStatusEl.textContent = '🔒 Locked';
      iStatusEl.className = 'lc-status locked-s';
    }
  }
  const advancedUnlocked = localStorage.getItem('pyac_i_status_cert') === 'done';
  const aCard = document.getElementById('lc-advanced');
  const aStatusEl = document.getElementById('lc-advanced-status');
  if(aCard && aStatusEl){
    if(advancedUnlocked || INSTRUCTOR_PREVIEW){
      aCard.classList.remove('locked');
      aCard.onclick = ()=>navGo('a_hub');
      aStatusEl.textContent = 'Unlocked — start now!';
      aStatusEl.className = 'lc-status progress';
    } else {
      aCard.classList.add('locked');
      aCard.onclick = null;
      aStatusEl.textContent = '🔒 Locked';
      aStatusEl.className = 'lc-status locked-s';
    }
  }
}

/* ---------------------------------------------------------------------
   Pyodide runner
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
    script.onerror = ()=>reject(new Error('Failed to load the Python engine — check your internet connection.'));
    document.head.appendChild(script);
  });
  return _pyodideLoadPromise;
}

async function execIsolated(code){
  const py = await ensurePyodide();
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

async function gradeCode(code, tests){
  const {ns, output, error} = await execIsolated(code);
  const results = [];
  if(error){
    tests.forEach(t=>results.push({label:t.label, pass:false, msg:'Your code hit an error before it could be checked: '+shortenError(error)}));
    try{ ns.destroy(); }catch(e){}
    return {results, output, error};
  }
  const py = await ensurePyodide();
  for(const t of tests){
    if(t.type === 'output'){
      const pass = t.contains.every(sub=>output.includes(sub));
      results.push({label:t.label, pass, msg: pass ? 'Passed' : 'Expected output was not found'});
    } else {
      try{
        await py.runPythonAsync('assert (' + t.expr + ')', {globals: ns});
        results.push({label:t.label, pass:true, msg:'Passed'});
      }catch(e){
        results.push({label:t.label, pass:false, msg: shortenError((e && e.message) || String(e))});
      }
    }
  }
  try{ ns.destroy(); }catch(e){}
  return {results, output, error:null};
}

/* CodeMirror mounting */
function mountEditorsIn(containerId){
  const container = document.getElementById(containerId);
  if(!container) return;
  container.querySelectorAll('textarea.code-editor').forEach(ta=>{
    if(window._editors[ta.id]){ window._editors[ta.id].refresh(); return; }
    const cm = CodeMirror.fromTextArea(ta, {
      mode:'python', lineNumbers:true, theme:'dracula', indentUnit:4, tabSize:4,
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

async function runSandbox(editorId, outId, weekKey){
  const btn = document.getElementById('btn-'+editorId);
  if(btn) btn.disabled = true;
  const outEl = document.getElementById(outId);
  outEl.classList.remove('empty');
  outEl.textContent = 'Loading Python engine (first run takes a few seconds)...';
  try{
    const {output, error} = await execIsolated(getEditorValue(editorId));
    const text = (output||'') + (error ? ('\n'+error) : '');
    outEl.textContent = text || '(no output)';
    if(weekKey){
      localStorage.setItem('pyac_b_sandbox_'+weekKey, 'done');
      syncProgress();
      refreshDayCompleteState(weekKey, 1);
    }
  }catch(e){
    outEl.textContent = 'Could not load the Python engine: ' + (e.message||e);
  }
  if(btn) btn.disabled = false;
}

async function runAndGrade(editorId, outId, testsId, tests, onDone){
  const btn = document.getElementById('btn-'+editorId);
  if(btn) btn.disabled = true;
  const outEl = document.getElementById(outId);
  const testsEl = document.getElementById(testsId);
  outEl.classList.remove('empty');
  outEl.textContent = 'Loading Python engine...';
  let graded;
  try{
    graded = await gradeCode(getEditorValue(editorId), tests);
  }catch(e){
    outEl.textContent = 'Could not run your code: ' + (e.message||e);
    if(btn) btn.disabled = false;
    return;
  }
  outEl.textContent = graded.output || graded.error || '(no output)';
  testsEl.innerHTML = graded.results.map(r=>
    `<div class="test-row ${r.pass?'pass':'fail'}"><span class="ti">${r.pass?'✓':'✗'}</span> ${escapeHtml(r.label)}${r.pass?'':' — '+escapeHtml(r.msg||'')}</div>`
  ).join('');
  const allPass = graded.results.length>0 && graded.results.every(r=>r.pass);
  if(btn) btn.disabled = false;
  onDone(allPass);
}

async function checkExercise(weekKey, exIdx, editorId, outId, testsId){
  const week = BEGINNER_WEEKS.find(w=>w.key===weekKey);
  const ex = week.exercises[exIdx];
  await runAndGrade(editorId, outId, testsId, ex.tests, (allPass)=>{
    localStorage.setItem(`pyac_b_ex_${weekKey}_${exIdx}`, allPass?'pass':'fail');
    syncProgress();
    refreshDayCompleteState(weekKey, exIdx < 2 ? 2 : 3);
  });
}

async function checkMP1Stage(stageKey, editorId, outId, testsId){
  const stage = BEGINNER_MP1.stages.find(s=>s.key===stageKey);
  await runAndGrade(editorId, outId, testsId, stage.tests, (allPass)=>{
    localStorage.setItem(`pyac_b_mp1stage_${stageKey}`, allPass?'pass':'fail');
    syncProgress();
    const badge = document.getElementById(`badge-mp1-${stageKey}`);
    if(badge){ badge.textContent = allPass ? '✓ Complete' : 'Try again'; badge.className = 'stage-badge'+(allPass?' pass':''); }
    refreshMP1CompleteState();
  });
}

async function checkMP2Door(doorKey, editorId, outId, testsId){
  const door = BEGINNER_MP2.doors.find(d=>d.key===doorKey);
  await runAndGrade(editorId, outId, testsId, door.tests, (allPass)=>{
    localStorage.setItem(`pyac_b_mp2door_${doorKey}`, allPass?'pass':'fail');
    syncProgress();
    const badge = document.getElementById(`badge-mp2-${doorKey}`);
    if(badge){ badge.textContent = allPass ? '✓ Complete' : 'Try again'; badge.className = 'stage-badge'+(allPass?' pass':''); }
    refreshMP2CompleteState();
  });
}

/* ---------------------------------------------------------------------
   Quiz
   --------------------------------------------------------------------- */
function quizQuestionHtml(weekKey, qIdx){
  const week = BEGINNER_WEEKS.find(w=>w.key===weekKey);
  const q = week.quiz[qIdx];
  const answered = localStorage.getItem(`pyac_b_quiz_${weekKey}_${qIdx}`);
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
  const already = localStorage.getItem(`pyac_b_quiz_${weekKey}_${qIdx}`);
  if(already !== null) return;
  localStorage.setItem(`pyac_b_quiz_${weekKey}_${qIdx}`, String(optIdx));
  syncProgress();
  const el = document.getElementById(`quizq-${weekKey}-${qIdx}`);
  if(el) el.innerHTML = quizQuestionHtml(weekKey, qIdx);
  updateQuizScoreBanner(weekKey);
  refreshDayCompleteState(weekKey, 3);
}

function quizScore(weekKey){
  const week = BEGINNER_WEEKS.find(w=>w.key===weekKey);
  let correct = 0, answeredCount = 0;
  week.quiz.forEach((q,i)=>{
    const a = localStorage.getItem(`pyac_b_quiz_${weekKey}_${i}`);
    if(a !== null){ answeredCount++; if(parseInt(a,10) === q.correct) correct++; }
  });
  return {correct, answeredCount, total: week.quiz.length};
}

function updateQuizScoreBanner(weekKey){
  const el = document.getElementById('quiz-score-banner-'+weekKey);
  if(!el) return;
  const s = quizScore(weekKey);
  const remaining = s.total - s.answeredCount;
  el.textContent = `Score: ${s.correct}/${s.total} correct` + (remaining>0 ? ` (${remaining} question${remaining===1?'':'s'} left)` : '');
}

/* ---------------------------------------------------------------------
   Mini project completion
   --------------------------------------------------------------------- */
function refreshMP1CompleteState(){
  const allDone = BEGINNER_MP1.stages.every(s=>localStorage.getItem(`pyac_b_mp1stage_${s.key}`) === 'pass');
  const done = getStatus('mp1') === 'done';
  const btn = document.getElementById('complete-btn-mp1');
  if(btn){ btn.disabled = !allDone || done; btn.textContent = done ? '✓ Mini Project 1 complete' : '✓ Mark Mini Project 1 Complete'; }
  const reqList = document.getElementById('reqlist-mp1');
  if(reqList){
    reqList.innerHTML = BEGINNER_MP1.stages.map(s=>
      `<li class="${localStorage.getItem('pyac_b_mp1stage_'+s.key)==='pass'?'met':''}">${escapeHtml(s.title)}</li>`
    ).join('');
  }
}

function refreshMP2CompleteState(){
  const allDone = BEGINNER_MP2.doors.every(d=>localStorage.getItem(`pyac_b_mp2door_${d.key}`) === 'pass');
  const done = getStatus('mp2') === 'done';
  const btn = document.getElementById('complete-btn-mp2');
  if(btn){ btn.disabled = !allDone || done; btn.textContent = done ? '✓ Mini Project 2 complete' : '✓ Mark Mini Project 2 Complete'; }
  const reqList = document.getElementById('reqlist-mp2');
  if(reqList){
    reqList.innerHTML = BEGINNER_MP2.doors.map(d=>
      `<li class="${localStorage.getItem('pyac_b_mp2door_'+d.key)==='pass'?'met':''}">${escapeHtml(d.title)}</li>`
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
    const btn = document.getElementById('complete-btn-cert');
    if(btn) btn.textContent = '✓ Intermediate Unlocked';
  }
  toast(key === 'cert' ? 'Intermediate level unlocked! 🎉' : 'Step complete — the next one is unlocked! 🎉');
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
    <div class="console empty" id="${outId}"></div>`;
}

function renderExercise(wk, i, ex, displayNum){
  const editorId = `cm-${wk}-ex${i}`;
  const outId = `out-${wk}-ex${i}`;
  const testsId = `tests-${wk}-ex${i}`;
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
    <div class="test-results" id="${testsId}"></div>
  </div>`;
}

function renderWeekPage(week){
  const wk = week.key;
  return `
    <div class="hero"><h1>Week ${week.num} — ${escapeHtml(week.title)}</h1>
      <div class="meta">${escapeHtml(week.scenarioTag)} · split into 3 short sessions, about 45–60 minutes each</div></div>
    <div class="day-tabs" id="daytabs-${wk}">
      <button class="day-tab" id="daytab-${wk}-1" onclick="goToDay('${wk}',1)">Day 1<span class="dt-sub">Learn the idea · ~45–50 min</span></button>
      <button class="day-tab" id="daytab-${wk}-2" onclick="goToDay('${wk}',2)">Day 2<span class="dt-sub">Practice · ~45–50 min</span></button>
      <button class="day-tab" id="daytab-${wk}-3" onclick="goToDay('${wk}',3)">Day 3<span class="dt-sub">Apply &amp; quiz · ~50–60 min</span></button>
    </div>
    <div class="day-content" id="day-${wk}-1">${dayHtml(week,1)}</div>
    <div class="day-content" id="day-${wk}-2">${dayHtml(week,2)}</div>
    <div class="day-content" id="day-${wk}-3">${dayHtml(week,3)}</div>`;
}

function dayHtml(week, d){
  const wk = week.key;
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
        ${editorBlock('cm-'+wk+'-sandbox', week.sandboxStarter, 'out-'+wk+'-sandbox', `runSandbox('cm-${wk}-sandbox','out-${wk}-sandbox','${wk}')`, 'SANDBOX')}
      </div>
      <div class="card">
        <h2>🔎 Another example — try this too!</h2>
        <p>Here's the same idea from a slightly different angle. Run it, then try changing a value or two.</p>
        ${editorBlock('cm-'+wk+'-sandbox2', week.sandboxStarter2, 'out-'+wk+'-sandbox2', `runSandbox('cm-${wk}-sandbox2','out-${wk}-sandbox2','${wk}')`, 'SANDBOX')}
      </div>
      <div class="complete-bar">
        <div>Run the sandbox code at least once, then move on to Day 2:</div>
        <ul class="req-list" id="reqlist-${wk}-day1"></ul>
        <button class="complete-btn" id="complete-btn-${wk}-day1" onclick="markDayComplete('${wk}',1)" disabled>✓ Mark Day 1 Complete — Unlock Day 2</button>
      </div>`;
  }
  if(d === 2){
    return `
      <div class="card">
        <h2>📝 Practice — Exercises</h2>
        ${renderExercise(wk,0,week.exercises[0],1)}
        ${renderExercise(wk,1,week.exercises[1],2)}
      </div>
      <div class="complete-bar">
        <div>Pass both exercises above to unlock Day 3:</div>
        <ul class="req-list" id="reqlist-${wk}-day2"></ul>
        <button class="complete-btn" id="complete-btn-${wk}-day2" onclick="markDayComplete('${wk}',2)" disabled>✓ Mark Day 2 Complete — Unlock Day 3</button>
      </div>`;
  }
  return `
    <div class="card">
      <h2>📝 Practice — Exercises</h2>
      ${renderExercise(wk,2,week.exercises[2],1)}
      ${renderExercise(wk,3,week.exercises[3],2)}
    </div>
    <div class="card">
      <h2>🧠 Quick quiz</h2>
      ${week.quiz.map((q,i)=>`<div class="quiz-card" id="quizq-${wk}-${i}">${quizQuestionHtml(wk,i)}</div>`).join('')}
      <div id="quiz-score-banner-${wk}" style="font-size:0.82rem;font-weight:700;margin-top:6px;"></div>
    </div>
    <div class="complete-bar">
      <div>Finish the requirements below to complete Week ${week.num}:</div>
      <ul class="req-list" id="reqlist-${wk}-day3"></ul>
      <button class="complete-btn" id="complete-btn-${wk}-day3" onclick="markDayComplete('${wk}',3)" disabled>✓ Mark Day 3 Complete — Finish Week ${week.num}</button>
    </div>`;
}

/* ---------------------------------------------------------------------
   Day-level lock chain (nested inside each week)
   --------------------------------------------------------------------- */
const currentDayView = {};

function dayStatus(wk, d){ return localStorage.getItem(`pyac_b_day_${wk}_${d}`) || 'todo'; }
function setDayStatus(wk, d, val){ localStorage.setItem(`pyac_b_day_${wk}_${d}`, val); syncProgress(); }
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
    const el = document.getElementById(`day-${wk}-${i}`);
    if(el) el.classList.toggle('active', i===d);
  }
  currentDayView[wk] = d;
  mountEditorsIn(`day-${wk}-${d}`);
  refreshDayCompleteState(wk, d);
  refreshDayTabs(wk);
}

function refreshDayTabs(wk){
  for(let d=1; d<=3; d++){
    const tab = document.getElementById(`daytab-${wk}-${d}`);
    if(!tab) continue;
    tab.classList.toggle('locked', !dayUnlocked(wk,d));
    tab.classList.toggle('done', dayStatus(wk,d) === 'done');
    tab.classList.toggle('active', currentDayView[wk] === d);
  }
}

function refreshDayCompleteState(wk, d){
  const btn = document.getElementById(`complete-btn-${wk}-day${d}`);
  if(!btn) return;
  const done = dayStatus(wk,d) === 'done';
  const reqList = document.getElementById(`reqlist-${wk}-day${d}`);
  let met;
  if(d === 1){
    met = localStorage.getItem('pyac_b_sandbox_'+wk) === 'done';
    if(reqList) reqList.innerHTML = `<li class="${met?'met':''}">Run the sandbox code at least once</li>`;
  } else if(d === 2){
    const ex0Ok = localStorage.getItem(`pyac_b_ex_${wk}_0`) === 'pass';
    const ex1Ok = localStorage.getItem(`pyac_b_ex_${wk}_1`) === 'pass';
    met = ex0Ok && ex1Ok;
    if(reqList) reqList.innerHTML =
      `<li class="${ex0Ok?'met':''}">Pass Exercise 1</li>` +
      `<li class="${ex1Ok?'met':''}">Pass Exercise 2</li>`;
  } else {
    const q = quizScore(wk);
    const quizOk = q.correct >= Math.ceil(q.total * 0.75);
    const ex2Ok = localStorage.getItem(`pyac_b_ex_${wk}_2`) === 'pass';
    const ex3Ok = localStorage.getItem(`pyac_b_ex_${wk}_3`) === 'pass';
    met = quizOk && ex2Ok && ex3Ok;
    if(reqList) reqList.innerHTML =
      `<li class="${quizOk?'met':''}">Score at least 75% on the quiz</li>` +
      `<li class="${ex2Ok?'met':''}">Pass Exercise 1</li>` +
      `<li class="${ex3Ok?'met':''}">Pass Exercise 2</li>`;
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
  let html = `<div class="puzzle-hero"><h1>🧩 ${escapeHtml(BEGINNER_MP1.title)}</h1><p>${BEGINNER_MP1.intro}</p></div>
    <div class="callout new-trick"><strong>New trick:</strong> ${BEGINNER_MP1.newTrick}</div>`;
  BEGINNER_MP1.stages.forEach((st,i)=>{
    const editorId = `cm-mp1-${st.key}`;
    const outId = `out-mp1-${st.key}`;
    const testsId = `tests-mp1-${st.key}`;
    html += `<div class="stage-card">
      <div class="stage-badge" id="badge-mp1-${st.key}">Not started</div>
      <h3>${escapeHtml(st.title)}</h3>
      <p>${st.desc}</p>
      <div class="editor-wrap">
        <div class="editor-toolbar"><span class="et-label">STAGE ${String.fromCharCode(65+i)}</span>
          <button class="run-btn" id="btn-${editorId}" onclick="checkMP1Stage('${st.key}','${editorId}','${outId}','${testsId}')">▶ Run &amp; Check</button></div>
        <textarea class="code-editor" id="${editorId}">${escapeHtml(st.starter)}</textarea>
      </div>
      <div class="console empty" id="${outId}"></div>
      <div class="test-results" id="${testsId}"></div>
    </div>`;
  });
  html += `<div class="complete-bar" style="background:#0b1120;border-color:#1e293b;color:#e2e8f0;">
    <div>Complete all three stages to unlock Week 5 and the rest of the level.</div>
    <ul class="req-list" id="reqlist-mp1" style="color:#cbd5e1;"></ul>
    <button class="complete-btn" id="complete-btn-mp1" onclick="markStepComplete('mp1')" disabled>✓ Mark Mini Project 1 Complete</button>
  </div>`;
  return html;
}

function renderMP2Page(){
  let html = `<div class="puzzle-hero"><h1>🧩 ${escapeHtml(BEGINNER_MP2.title)}</h1><p>${BEGINNER_MP2.intro}</p></div>
    <div class="callout new-trick">${BEGINNER_MP2.fixtureNote}<pre class="code-block">${escapeHtml(BEGINNER_MP2.fixtureCode)}</pre></div>`;
  BEGINNER_MP2.doors.forEach((d,i)=>{
    const editorId = `cm-mp2-${d.key}`;
    const outId = `out-mp2-${d.key}`;
    const testsId = `tests-mp2-${d.key}`;
    html += `<div class="stage-card">
      <div class="stage-badge" id="badge-mp2-${d.key}">Not started</div>
      <h3>${escapeHtml(d.title)}</h3>
      <p>${d.desc}</p>
      <div class="editor-wrap">
        <div class="editor-toolbar"><span class="et-label">DOOR ${i+1}</span>
          <button class="run-btn" id="btn-${editorId}" onclick="checkMP2Door('${d.key}','${editorId}','${outId}','${testsId}')">▶ Run &amp; Check</button></div>
        <textarea class="code-editor" id="${editorId}">${escapeHtml(d.starter)}</textarea>
      </div>
      <div class="console empty" id="${outId}"></div>
      <div class="test-results" id="${testsId}"></div>
    </div>`;
  });
  html += `<div class="complete-bar" style="background:#0b1120;border-color:#1e293b;color:#e2e8f0;">
    <div>Open all three doors to unlock your Beginner Certificate!</div>
    <ul class="req-list" id="reqlist-mp2" style="color:#cbd5e1;"></ul>
    <button class="complete-btn" id="complete-btn-mp2" onclick="markStepComplete('mp2')" disabled>✓ Mark Mini Project 2 Complete</button>
  </div>`;
  return html;
}

/* ---------------------------------------------------------------------
   Certificate
   --------------------------------------------------------------------- */
function renderCertPage(){
  const alreadyDone = getStatus('cert') === 'done';
  const feedbackDone = localStorage.getItem('pyac_b_feedback_beginner') === 'done';
  return `<div class="hero"><h1>🎓 Your Beginner Certificate</h1><div class="meta">Congratulations on finishing Level 1!</div></div>
    <div class="card cert-wrap">
      <canvas id="cert-canvas" width="1200" height="850"></canvas><br>
      <button class="download-btn" onclick="downloadCertificate()">⬇ Download Certificate</button>
    </div>
    <div class="card" id="feedback-card">
      <h2>📝 Quick feedback before you go</h2>
      <p>Help us make the next level even better — this takes under a minute.</p>
      ${ratingRow('enjoy','How much did you enjoy this level?')}
      ${ratingRow('clarity','How clear were the lessons?')}
      ${ratingRow('confidence','How confident do you feel with Python now?')}
      <label style="font-weight:700;font-size:0.85rem;color:var(--text-muted);display:block;margin-top:16px;">Anything you'd like to tell us? (optional)</label>
      <textarea id="fb-comment" rows="3" style="width:100%;padding:10px 14px;border:1px solid var(--border);border-radius:8px;font-family:inherit;font-size:0.9rem;margin-top:8px;resize:vertical;" placeholder="What did you like? What could be better?" ${feedbackDone?'disabled':''}></textarea>
      <div id="feedback-status" style="font-size:0.85rem;margin:10px 0;"></div>
      <button class="complete-btn" id="feedback-submit-btn" onclick="submitFeedback('beginner')" ${feedbackDone?'disabled':''}>${feedbackDone?'✓ Feedback submitted — thank you!':'Submit Feedback'}</button>
    </div>
    <div class="complete-bar">
      <div>Submit your feedback above to unlock Intermediate:</div>
      <ul class="req-list" id="reqlist-cert"></ul>
      <button class="complete-btn" id="complete-btn-cert" onclick="markStepComplete('cert')" disabled>${alreadyDone?'✓ Intermediate Unlocked':'🚀 Unlock Intermediate Level'}</button>
    </div>`;
}

const _feedbackRatings = {};
function ratingRow(qKey, label){
  let opts = '';
  for(let i=1;i<=5;i++){
    opts += `<button type="button" class="rate-btn" data-v="${i}" onclick="setRating('${qKey}',${i})">${i}</button>`;
  }
  return `<div class="fb-row"><div class="fb-label">${escapeHtml(label)}</div><div class="fb-scale" id="fbscale-${qKey}">${opts}</div></div>`;
}
function setRating(qKey, val){
  _feedbackRatings[qKey] = val;
  const scale = document.getElementById('fbscale-'+qKey);
  if(scale){
    scale.querySelectorAll('.rate-btn').forEach(b=>{
      b.classList.toggle('active', parseInt(b.dataset.v,10) === val);
    });
  }
}

async function submitFeedback(level){
  const statusEl = document.getElementById('feedback-status');
  const required = ['enjoy','clarity','confidence'];
  const missing = required.filter(k => !_feedbackRatings[k]);
  if(missing.length){ statusEl.style.color='var(--danger)'; statusEl.textContent = 'Please rate all three questions above.'; return; }
  if(!fbOk()){ statusEl.style.color='var(--danger)'; statusEl.textContent = 'Cannot submit right now — no connection to the server.'; return; }
  statusEl.style.color='var(--text-muted)'; statusEl.textContent = 'Submitting...';
  const payload = {
    username: localStorage.getItem('pyac_username') || '',
    displayName: localStorage.getItem('pyac_name') || '',
    classCode: localStorage.getItem('pyac_class') || '',
    yearGroup: localStorage.getItem('pyac_year') || '',
    level,
    ratings: Object.assign({}, _feedbackRatings),
    comment: (document.getElementById('fb-comment') || {}).value || '',
    submittedAt: new Date().toISOString()
  };
  try{
    const res = await fetch(fbUrl('/pyacademy/feedback/'+level+'.json'), {method:'POST', body: JSON.stringify(payload)});
    if(!res.ok) throw new Error('failed');
    localStorage.setItem('pyac_b_feedback_'+level, 'done');
    syncProgress();
    statusEl.style.color = 'var(--success)';
    statusEl.textContent = '✅ Thank you for your feedback!';
    const btn = document.getElementById('feedback-submit-btn');
    if(btn){ btn.disabled = true; btn.textContent = '✓ Feedback submitted — thank you!'; }
    const comment = document.getElementById('fb-comment');
    if(comment) comment.disabled = true;
    refreshCertCompleteState();
  }catch(e){
    statusEl.style.color = 'var(--danger)';
    statusEl.textContent = 'Could not submit feedback — please try again.';
  }
}

function refreshCertCompleteState(){
  const feedbackDone = localStorage.getItem('pyac_b_feedback_beginner') === 'done';
  const done = getStatus('cert') === 'done';
  const btn = document.getElementById('complete-btn-cert');
  if(btn) btn.disabled = !feedbackDone || done;
  const reqList = document.getElementById('reqlist-cert');
  if(reqList) reqList.innerHTML = `<li class="${feedbackDone?'met':''}">Submit the feedback form above</li>`;
}

function getCertId(){
  let id = localStorage.getItem('pyac_b_cert_id');
  if(!id){
    id = 'PYAC-B-' + Math.random().toString(36).slice(2,8).toUpperCase();
    localStorage.setItem('pyac_b_cert_id', id);
  }
  return id;
}

const CERT_VERIFY_BASE = 'https://drtertseghaanande.com/python-academy-verify.html';

async function registerCertificate(certId, name){
  if(!fbOk()) return;
  if(localStorage.getItem('pyac_is_guest') === 'true') return; // keep demo certs out of the public verification table
  try{
    const existing = await fetch(fbUrl('/pyacademy/certificates/'+encodeURIComponent(certId)+'.json')).then(r=>r.json());
    if(existing) return; // already registered — never overwrite
    await fetch(fbUrl('/pyacademy/certificates/'+encodeURIComponent(certId)+'.json'), {
      method:'PUT',
      body: JSON.stringify({
        username: localStorage.getItem('pyac_username') || '',
        displayName: name,
        level: 'Beginner',
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
  const canvas = document.getElementById('cert-canvas');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  const name = localStorage.getItem('pyac_name') || 'Student';
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

  ctx.textAlign = 'center';
  ctx.fillStyle = '#4338ca';
  ctx.font = '700 22px Segoe UI, sans-serif';
  ctx.fillText('🧑‍💻 PYTHON ACADEMY', 600, 140);

  ctx.font = '800 42px Segoe UI, sans-serif';
  ctx.fillStyle = '#211f3d';
  ctx.fillText('Certificate of Completion', 600, 200);

  ctx.font = '400 18px Segoe UI, sans-serif';
  ctx.fillStyle = '#6b6890';
  ctx.fillText('Level 1 · Beginner — Foundations of Python', 600, 236);

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
  ctx.fillText('the Python Academy Beginner Level', 600, 480);

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
  const canvas = document.getElementById('cert-canvas');
  if(!canvas) return;
  const link = document.createElement('a');
  link.download = 'python-academy-beginner-certificate.png';
  link.href = canvas.toDataURL('image/png');
  link.click();
}

/* ---------------------------------------------------------------------
   Init
   --------------------------------------------------------------------- */
function initApp(){
  loadRegistration();
  document.getElementById('i-hub-body').innerHTML =
    `<p>The Intermediate level is being written — it will build on everything from Beginner with deeper data
    structures, file handling, error handling, and an introduction to object-oriented programming, using the same
    project-based, real-world approach.</p><p>It unlocks automatically the moment you earn your Beginner
    certificate.</p>`;
  document.getElementById('a-hub-body').innerHTML =
    `<p>The Advanced level caps off the programme with algorithms and problem solving, working with real data
    files, simple APIs, and a final capstone project you design yourself.</p><p>It unlocks automatically the moment
    you earn your Intermediate certificate.</p>`;
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
  document.getElementById('register-overlay').style.display = 'none';
  document.getElementById('student-chip-name').textContent = '👁 Instructor Preview';
  showPreviewBanner();
  const params = new URLSearchParams(location.search);
  const go = params.get('go');
  const day = params.get('day');
  if(go){
    navGo(go);
    const chainKey = go.replace(/^b_/,'');
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
