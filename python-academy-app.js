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
   Registration
   --------------------------------------------------------------------- */
function loadRegistration(){
  const name = localStorage.getItem('pyac_name');
  if(name){
    document.getElementById('register-overlay').style.display = 'none';
    document.getElementById('student-chip-name').textContent = name;
  }
}
function submitRegistration(){
  const name = document.getElementById('reg-name').value.trim();
  const year = document.getElementById('reg-year').value;
  const cls = document.getElementById('reg-class').value.trim();
  if(!name || !year){
    alert('Please enter your name and select your year group.');
    return;
  }
  localStorage.setItem('pyac_name', name);
  localStorage.setItem('pyac_year', year);
  localStorage.setItem('pyac_class', cls);
  document.getElementById('register-overlay').style.display = 'none';
  document.getElementById('student-chip-name').textContent = name;
  syncProgress();
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
  const idx = CHAIN.indexOf(key);
  if(idx <= 0) return true;
  return getStatus(CHAIN[idx-1]) === 'done';
}

function fbOk(){
  return !!(window.CWR_FIREBASE && window.CWR_FIREBASE.databaseURL && !window.CWR_FIREBASE.databaseURL.includes('REPLACE'));
}
function fbUrl(path){ return window.CWR_FIREBASE.databaseURL + path; }
function syncProgress(){
  if(!fbOk()) return;
  const name = localStorage.getItem('pyac_name');
  if(!name) return;
  const safe = name.replace(/[.#$\[\]/]/g,'_');
  const data = {
    name,
    yearGroup: localStorage.getItem('pyac_year') || '',
    classCode: localStorage.getItem('pyac_class') || '',
    updated: new Date().toISOString(),
    beginner: {}
  };
  CHAIN.forEach(k=>{ data.beginner[k] = getStatus(k); });
  fetch(fbUrl('/pyacademy/participants/'+encodeURIComponent(safe)+'.json'), {
    method:'PUT', body: JSON.stringify(data)
  }).catch(()=>{});
}

function resetProgress(){
  Object.keys(localStorage).filter(k=>k.startsWith('pyac_')).forEach(k=>localStorage.removeItem(k));
  location.reload();
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
  if(pageArg === 'i_hub'){
    if(getStatus('cert') !== 'done'){ toast('Finish your Beginner certificate first to unlock Intermediate!'); return; }
    showPage('page-i_hub');
    return;
  }
  if(pageArg === 'a_hub'){
    if(localStorage.getItem('pyac_i_status_cert') !== 'done'){ toast('Finish Intermediate level first to unlock Advanced!'); return; }
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
    else if(chainKey === 'cert') maybeDrawCertificate();
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
    if(beginnerDone){
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
    if(advancedUnlocked){
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
    refreshDayCompleteState(weekKey, exIdx===0 ? 2 : 3);
  });
}

async function checkMP1Stage(stageKey, editorId, outId, testsId){
  const stage = BEGINNER_MP1.stages.find(s=>s.key===stageKey);
  await runAndGrade(editorId, outId, testsId, stage.tests, (allPass)=>{
    localStorage.setItem(`pyac_b_mp1stage_${stageKey}`, allPass?'pass':'fail');
    const badge = document.getElementById(`badge-mp1-${stageKey}`);
    if(badge){ badge.textContent = allPass ? '✓ Complete' : 'Try again'; badge.className = 'stage-badge'+(allPass?' pass':''); }
    refreshMP1CompleteState();
  });
}

async function checkMP2Door(doorKey, editorId, outId, testsId){
  const door = BEGINNER_MP2.doors.find(d=>d.key===doorKey);
  await runAndGrade(editorId, outId, testsId, door.tests, (allPass)=>{
    localStorage.setItem(`pyac_b_mp2door_${doorKey}`, allPass?'pass':'fail');
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

function renderExercise(wk, i, ex){
  const editorId = `cm-${wk}-ex${i}`;
  const outId = `out-${wk}-ex${i}`;
  const testsId = `tests-${wk}-ex${i}`;
  return `<div class="exercise">
    <div class="ex-title">${i+1}. ${escapeHtml(ex.title)}</div>
    <p>${ex.desc}</p>
    <div class="editor-wrap">
      <div class="editor-toolbar"><span class="et-label">EXERCISE ${i+1}</span>
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
      <div class="complete-bar">
        <div>Run the sandbox code at least once, then move on to Day 2:</div>
        <ul class="req-list" id="reqlist-${wk}-day1"></ul>
        <button class="complete-btn" id="complete-btn-${wk}-day1" onclick="markDayComplete('${wk}',1)" disabled>✓ Mark Day 1 Complete — Unlock Day 2</button>
      </div>`;
  }
  if(d === 2){
    return `
      <div class="card">
        <h2>📝 Practice — Exercise 1</h2>
        ${renderExercise(wk,0,week.exercises[0])}
      </div>
      <div class="complete-bar">
        <div>Pass the exercise above to unlock Day 3:</div>
        <ul class="req-list" id="reqlist-${wk}-day2"></ul>
        <button class="complete-btn" id="complete-btn-${wk}-day2" onclick="markDayComplete('${wk}',2)" disabled>✓ Mark Day 2 Complete — Unlock Day 3</button>
      </div>`;
  }
  return `
    <div class="card">
      <h2>📝 Practice — Exercise 2</h2>
      ${renderExercise(wk,1,week.exercises[1])}
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
function setDayStatus(wk, d, val){ localStorage.setItem(`pyac_b_day_${wk}_${d}`, val); }
function dayUnlocked(wk, d){
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
    met = localStorage.getItem(`pyac_b_ex_${wk}_0`) === 'pass';
    if(reqList) reqList.innerHTML = `<li class="${met?'met':''}">Pass Exercise 1</li>`;
  } else {
    const q = quizScore(wk);
    const quizOk = q.correct >= Math.ceil(q.total * 0.75);
    const exOk = localStorage.getItem(`pyac_b_ex_${wk}_1`) === 'pass';
    met = quizOk && exOk;
    if(reqList) reqList.innerHTML =
      `<li class="${quizOk?'met':''}">Score at least 75% on the quiz</li>` +
      `<li class="${exOk?'met':''}">Pass Exercise 2</li>`;
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
  return `<div class="hero"><h1>🎓 Your Beginner Certificate</h1><div class="meta">Congratulations on finishing Level 1!</div></div>
    <div class="card cert-wrap">
      <canvas id="cert-canvas" width="1200" height="850"></canvas><br>
      <button class="download-btn" onclick="downloadCertificate()">⬇ Download Certificate</button>
      <div style="margin-top:18px;">
        <button class="complete-btn" id="complete-btn-cert" onclick="markStepComplete('cert')">${alreadyDone?'✓ Intermediate Unlocked':'🚀 Unlock Intermediate Level'}</button>
      </div>
    </div>`;
}

function getCertId(){
  let id = localStorage.getItem('pyac_b_cert_id');
  if(!id){
    id = 'PYAC-B-' + Math.random().toString(36).slice(2,8).toUpperCase();
    localStorage.setItem('pyac_b_cert_id', id);
  }
  return id;
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

  ctx.textAlign = 'right';
  ctx.font = '700 46px Segoe UI, sans-serif'; ctx.fillStyle = '#f59e0b';
  ctx.fillText('🌱', 950, 700);
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
  showPage('hub');
}
document.addEventListener('DOMContentLoaded', initApp);
