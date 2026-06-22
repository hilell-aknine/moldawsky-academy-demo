/* ============================================================
   MOLDAWSKY ACADEMY — Shared portal core.
   Theme, mock-auth, progress (localStorage), toast, nav helpers.
   Loaded on every page AFTER data/curriculum.js.
   ============================================================ */
(function () {
  const LS = {
    theme: 'mold_theme',
    progress: 'mold_progress',     // {lessonId: true}
    streak: 'mold_streak',
    user: 'mold_user',
    xp: 'mold_xp',
  };

  /* ---------- Theme ---------- */
  const savedTheme = localStorage.getItem(LS.theme) || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  window.toggleTheme = function () {
    const cur = document.documentElement.getAttribute('data-theme');
    const next = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem(LS.theme, next);
  };

  /* ---------- Mock user (demo) ---------- */
  window.User = {
    get() {
      let u = localStorage.getItem(LS.user);
      if (!u) { u = JSON.stringify({ name:'דניאל', initial:'ד', role:'student', plan:'free' }); localStorage.setItem(LS.user, u); }
      return JSON.parse(u);
    },
    isPaid() { return this.get().plan === 'dma'; },
    upgrade() { const u=this.get(); u.plan='dma'; u.role='paid_customer'; localStorage.setItem(LS.user, JSON.stringify(u)); }
  };

  /* ---------- Progress ---------- */
  window.Progress = {
    _all() { try { return JSON.parse(localStorage.getItem(LS.progress) || '{}'); } catch { return {}; } },
    isDone(id) { return !!this._all()[id]; },
    completedCount() { return Object.keys(this._all()).length; },
    moduleStats(mod) {
      const done = mod.lessons.filter(l => this.isDone(l.id)).length;
      return { done, total: mod.lessons.length, pct: Math.round(done / mod.lessons.length * 100) };
    },
    markDone(id) {
      const a = this._all();
      if (!a[id]) { a[id] = true; localStorage.setItem(LS.progress, JSON.stringify(a)); this.addXp(50); }
      return a;
    },
    toggle(id) {
      const a = this._all();
      if (a[id]) delete a[id]; else { a[id] = true; this.addXp(50); }
      localStorage.setItem(LS.progress, JSON.stringify(a));
      return !!a[id];
    },
    totalPct() { return Math.round(this.completedCount() / (window.LESSON_COUNT || 31) * 100); },
    nextLesson() { return (window.ALL_LESSONS || []).find(l => !this.isDone(l.id)) || null; },
    /* XP + streak (gamification) */
    xp() { return parseInt(localStorage.getItem(LS.xp) || '0', 10); },
    addXp(n) { localStorage.setItem(LS.xp, String(this.xp() + n)); },
    streak() { return parseInt(localStorage.getItem(LS.streak) || '3', 10); }, // demo seed
    timeLeftLabel() {
      const left = (window.LESSON_COUNT || 31) - this.completedCount();
      const mins = left * 8; const h = Math.floor(mins/60);
      return h > 0 ? `${h} ש' ${mins%60} ד'` : `${mins} ד'`;
    }
  };

  /* ---------- Toast ---------- */
  window.toast = function (msg, icon = '✓') {
    let t = document.querySelector('.portal-toast');
    if (!t) { t = document.createElement('div'); t.className = 'portal-toast'; document.body.appendChild(t); }
    t.innerHTML = `<span style="font-size:18px">${icon}</span><span>${msg}</span>`;
    requestAnimationFrame(() => t.classList.add('show'));
    clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove('show'), 2600);
  };

  /* ---------- Shared chrome (topbar + bottom-nav) ---------- */
  const NAV = [
    { href:'course-library.html', ico:'📚', label:'הקורס' },
    { href:'workbooks.html',      ico:'📔', label:'חוברות' },
    { href:'ai-mentor.html',      ico:'🤖', label:'מורה AI' },
    { href:'community.html',      ico:'👥', label:'קהילה' },
    { href:'profile.html',        ico:'🎮', label:'פרופיל' },
  ];
  window.renderTopbar = function (active) {
    const u = window.User.get();
    return `<header class="portal-header">
      <a class="brand" href="course-library.html"><span class="logo">M</span> אקדמיית <b>מולדבסקי</b></a>
      <div class="topbar-spacer"></div>
      ${ (() => { const n = window.Progress.nextLesson();
          return n ? `<a class="btn btn--primary btn--sm" href="course-library.html?lesson=${n.id}">המשך בשיעור הבא ←</a>` : ''; })() }
      <a class="icon-btn hide-sm" href="game.html" title="משחק תרגול">🎮</a>
      <a class="icon-btn hide-sm" href="ambassador.html" title="שגרירים">💸</a>
      <button class="icon-btn" title="מצב תצוגה" onclick="toggleTheme()">◐</button>
      <a class="icon-btn hide-sm" href="admin.html" title="ניהול (מאחורי הקלעים)">⚙️</a>
      <a class="icon-btn" href="dma.html" title="DMA — הרמה הבאה">🔓</a>
      <a class="avatar" href="profile.html" title="${u.name}">${u.initial}</a>
    </header>`;
  };
  window.renderBottomNav = function (active) {
    return `<nav class="bottom-nav">${NAV.map(n =>
      `<a href="${n.href}" class="${active===n.href?'active':''}"><span class="ico">${n.ico}</span>${n.label}</a>`).join('')}</nav>`;
  };

  /* ---------- Reveal on scroll ---------- */
  function revealAll(){ document.querySelectorAll('.reveal:not(.in)').forEach(el => el.classList.add('in')); }
  window.addEventListener('load', () => {
    if (!('IntersectionObserver' in window)) { revealAll(); return; }
    const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && e.target.classList.add('in')), { threshold:.08 });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
    // safety: never leave content invisible if the observer misfires (mobile/headless)
    setTimeout(revealAll, 1500);
  });
  // also reveal on first user scroll/touch immediately
  window.addEventListener('touchstart', revealAll, { once:true, passive:true });

  /* ---------- tiny query helper ---------- */
  window.qs = (k) => new URLSearchParams(location.search).get(k);
})();
