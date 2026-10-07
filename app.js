// ============================================================
//  Mes Cours — moteur de l'app (rendu des pages)
//  Les données sont dans /data/*.js
// ============================================================
(function () {
  const D = window.DATA;
  const SEM1_START = new Date(2026, 8, 28); // Semaine 1 = lundi 28 sept 2026
  const $ = (s) => document.querySelector(s);
  const qs = new URLSearchParams(location.search);
  const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (m) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[m]));
  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  };

  // ---------- Dates ----------
  function weekOf(date) { return Math.floor((date - SEM1_START) / (7 * 864e5)) + 1; }
  const NOW = new Date();
  const CUR_WEEK = Math.max(1, weekOf(NOW));
  function weekStart(n) { return new Date(SEM1_START.getTime() + (n - 1) * 7 * 864e5); }
  function fmtDate(d, opt) { return new Date(d).toLocaleDateString('fr-FR', opt || { day: 'numeric', month: 'short' }); }
  function weekRange(n) { const a = weekStart(n), b = new Date(a.getTime() + 4 * 864e5); return fmtDate(a) + ' – ' + fmtDate(b); }
  function daysLeft(d) { return Math.ceil((new Date(d) - NOW) / 864e5); }

  // ---------- Coque (en-tête + barre du bas) ----------
  function shell(title, opts = {}) {
    document.title = title + ' · Mes Cours';
    const back = opts.back ? `<a class="back" href="${opts.back}" aria-label="Retour">‹</a>` : '';
    document.body.insertAdjacentHTML('afterbegin', `
      <header class="top" ${opts.color ? `style="background:${opts.color}"` : ''}>
        <div class="row">${back}<h1>${esc(title)}</h1></div>
        ${opts.sub ? `<div class="sub">${esc(opts.sub)}</div>` : ''}
      </header>`);
    const tab = opts.tab || '';
    document.body.insertAdjacentHTML('beforeend', `
      <nav class="tabbar">
        <a href="index.html" class="${tab === 'home' ? 'on' : ''}"><span>🏠</span>Accueil</a>
        <a href="edt.html" class="${tab === 'edt' ? 'on' : ''}"><span>🗓️</span>Emploi du temps</a>
        <a href="devoirs.html" class="${tab === 'dev' ? 'on' : ''}"><span>📝</span>Devoirs</a>
        <a href="vocab.html" class="${tab === 'voc' ? 'on' : ''}"><span>🔤</span>Lexique</a>
      </nav>`);
  }

  function renderMath() {
    if (window.renderMathInElement) {
      renderMathInElement(document.body, {
        delimiters: [{ left: '$$', right: '$$', display: true }, { left: '\\(', right: '\\)', display: false }, { left: '\\[', right: '\\]', display: true }],
        throwOnError: false
      });
    }
  }

  // ---------- Briques ----------
  function dueItem(d) {
    const m = D.matieres[d.matiere];
    const left = daysLeft(d.date);
    const dt = new Date(d.date);
    const past = left < 0;
    const badge = past ? '<span class="pill">passé</span>' : left <= 7 ? `<span class="pill warn">J-${left}</span>` : `<span class="pill">dans ${left} j</span>`;
    return `<div class="due ${past ? 'past' : ''}">
      <div class="d"><b>${dt.getDate()}</b><small>${dt.toLocaleDateString('fr-FR', { month: 'short' })}</small></div>
      <div><div class="t">${esc(d.titre)}</div>
      <div class="s">${m ? m.icone + ' ' + esc(m.nom) + ' · ' : ''}${esc(d.type)} · ${badge}</div>
      ${d.details ? `<div class="s" style="margin-top:4px">${d.details}</div>` : ''}</div></div>`;
  }
  function upcoming(filter) {
    return D.devoirs.filter((d) => (!filter || d.matiere === filter)).sort((a, b) => new Date(a.date) - new Date(b.date));
  }
  function slotsFor(dayIdx, group) {
    return D.edt.filter((s) => s.jour === dayIdx && (!s.groupes || !group || s.groupes.includes(group)))
      .sort((a, b) => a.debut.localeCompare(b.debut));
  }
  function slotHTML(s) {
    const m = D.matieres[s.matiere];
    const c = m ? m.couleur : '#888';
    const g = s.groupes ? ' · Groupe ' + s.groupes.join('/') : '';
    return `<div class="slot" style="--c:${c}"><div class="h">${s.debut}<small>${s.fin}</small></div>
      <div><div class="t">${m ? m.icone + ' ' : ''}${esc(s.titre)}</div><div class="s">${esc(s.type)} · ${esc(s.salle)} · ${esc(s.prof)}${g}</div></div></div>`;
  }

  // ---------- Pages ----------
  const pages = {};

  pages.home = function () {
    shell('Mes Cours', { tab: 'home', sub: 'University of Southampton Malaysia · Foundation Year' });
    const group = store.get('groupe', null);
    const dow = (NOW.getDay() + 6) % 7; // 0 = lundi
    const today = dow < 5 ? slotsFor(dow, group) : [];
    const next = upcoming().filter((d) => daysLeft(d.date) >= 0).slice(0, 3);
    const ids = Object.keys(D.matieres);
    $('#app').innerHTML = `
      <div class="card hero"><div class="small">Nous sommes en</div><div class="big">Semaine ${CUR_WEEK}</div>
        <div class="small">${weekRange(CUR_WEEK)} · Semestre 1</div></div>

      <h2 class="sec">Mes matières</h2>
      <div class="grid">${ids.map((id) => { const m = D.matieres[id]; const n = Object.keys(m.semaines).length;
        return `<a class="subj" style="--c:${m.couleur}" href="matiere.html?m=${id}"><div class="ico">${m.icone}</div>
          <div class="n">${esc(m.nom)}</div><div class="c">${m.code} · ${n} semaine${n > 1 ? 's' : ''}</div></a>`; }).join('')}</div>

      <h2 class="sec">Aujourd'hui${group ? ' · Groupe ' + group : ''}</h2>
      <div>${dow > 4 ? '<div class="card muted">Week-end, pas de cours 🎉</div>'
        : today.length ? today.map(slotHTML).join('') : '<div class="card muted">Rien de prévu.</div>'}
        ${group ? '' : '<div class="card muted" style="font-size:14px">👉 Choisis ton groupe dans <a href="edt.html"><b>Emploi du temps</b></a> pour ne voir que tes cours.</div>'}</div>

      <h2 class="sec">Prochains devoirs</h2>
      <div class="card">${next.length ? next.map(dueItem).join('') : '<div class="muted">Aucun devoir à venir.</div>'}
        <a href="devoirs.html" class="muted" style="display:block;margin-top:10px;font-size:14px">Tout voir ›</a></div>`;
  };

  pages.matiere = function () {
    const id = qs.get('m'); const m = D.matieres[id];
    if (!m) { location.href = 'index.html'; return; }
    shell(m.nom, { back: 'index.html', color: m.couleur, sub: m.code + ' · ' + m.prof });
    const weeks = Object.keys(m.semaines).map(Number).sort((a, b) => a - b);
    const sel = Number(qs.get('w')) || (m.semaines[CUR_WEEK] ? CUR_WEEK : weeks[weeks.length - 1]);
    const w = m.semaines[sel];
    const allWeeks = Array.from({ length: Math.max(12, ...weeks) }, (_, i) => i + 1);
    const dues = upcoming(id).filter((d) => weekOf(new Date(d.date)) === sel || (daysLeft(d.date) >= 0 && daysLeft(d.date) <= 14));
    $('#app').innerHTML = `
      <h2 class="sec">Semaines</h2>
      <div class="chips" style="--c:${m.couleur}">${allWeeks.map((n) => m.semaines[n]
        ? `<a class="chip ${n === sel ? 'on' : ''}" href="matiere.html?m=${id}&w=${n}">S${n}${n === CUR_WEEK ? ' •' : ''}</a>`
        : `<span class="chip off">S${n}</span>`).join('')}</div>

      <h2 class="sec">Devoirs — semaine ${sel}</h2>
      <div class="card">${dues.length ? dues.map(dueItem).join('') : '<div class="muted">✅ Rien à rendre cette semaine.</div>'}</div>

      <h2 class="sec">Cours de la semaine ${sel}</h2>
      ${w ? `<a class="card" href="cours.html?m=${id}&w=${sel}" style="display:block;--c:${m.couleur}">
          <div class="list"><div class="it"><div class="wk"><small>SEM</small><b>${sel}</b></div>
          <div><div class="t">${esc(w.titre)}</div><div class="s">${esc(w.titreFr)}</div></div><span class="chev">›</span></div></div>
          ${w.resume ? `<p class="muted" style="font-size:14px;margin-top:10px">${w.resume}</p>` : ''}
          <div style="margin-top:10px;display:flex;gap:6px;flex-wrap:wrap">
            <span class="pill ok">🇬🇧 Cours EN</span><span class="pill">🇫🇷 Cours FR</span>
            <span class="pill">🔤 ${w.vocab.length} mots</span><span class="pill">∑ ${w.formules.length} formules</span><span class="pill">✏️ ${w.exos.length} exos</span></div></a>`
        : '<div class="card muted">Pas encore de cours pour cette semaine.</div>'}

      <h2 class="sec">Toutes les semaines</h2>
      <div class="card list" style="--c:${m.couleur}">${weeks.map((n) => `<a href="cours.html?m=${id}&w=${n}">
        <div class="wk"><small>SEM</small><b>${n}</b></div><div><div class="t">${esc(m.semaines[n].titre)}</div>
        <div class="s">${weekRange(n)}</div></div><span class="chev">›</span></a>`).join('')}</div>`;
  };

  pages.cours = function () {
    const id = qs.get('m'); const n = Number(qs.get('w')); const m = D.matieres[id]; const w = m && m.semaines[n];
    if (!w) { location.href = 'index.html'; return; }
    shell(`S${n} · ${m.nom}`, { back: `matiere.html?m=${id}&w=${n}`, color: m.couleur });
    const exoHTML = (e, i) => `<div class="exo"><div class="top2"><span class="num">${i + 1}.</span>
        <span class="pill ${e.src === 'Blackboard' ? 'ok' : ''}">${e.src === 'Blackboard' ? '📘 Blackboard' : '✨ Bonus'}</span>
        ${e.niveau ? `<span class="pill">${'★'.repeat(e.niveau)}</span>` : ''}</div>
        <div class="q">${e.en}</div><div class="qfr">🇫🇷 ${e.fr}</div>
        ${e.sol ? `<details><summary>Voir la correction</summary><div class="sol">${e.sol}</div></details>` : ''}</div>`;
    $('#app').innerHTML = `
      <nav class="secnav" id="secnav">
        <a href="#en">🇬🇧 Cours EN</a><a href="#fr">🇫🇷 Cours FR</a><a href="#vocab">🔤 Vocabulaire</a><a href="#formules">∑ Formules</a><a href="#exos">✏️ Exercices</a>
      </nav>
      <div class="card" style="--c:${m.couleur}"><div class="muted" style="font-size:13px">Semaine ${n} · ${weekRange(n)}</div>
        <div style="font-size:21px;font-weight:800;line-height:1.25;margin-top:2px">${esc(w.titre)}</div>
        <div class="muted">${esc(w.titreFr)}</div></div>

      <section class="blk" id="en"><div class="head"><div class="ic">🇬🇧</div><h3>Lecture (English)</h3></div>
        <div class="card lesson" style="--c:${m.couleur}">${w.en}${w.sources ? `<div class="src">Source : ${w.sources}</div>` : ''}</div></section>

      <section class="blk" id="fr"><div class="head"><div class="ic">🇫🇷</div><h3>Le cours en français</h3></div>
        <div class="card lesson" style="--c:${m.couleur}">${w.fr}</div></section>

      <section class="blk" id="vocab"><div class="head"><div class="ic">🔤</div><h3>Mots à connaître</h3></div>
        <div class="card vocab">${w.vocab.map((v) => `<div class="v"><div class="e">${esc(v[0])}</div><div class="f">${esc(v[1])}${v[2] ? `<span class="x">${esc(v[2])}</span>` : ''}</div></div>`).join('')}</div></section>

      <section class="blk" id="formules"><div class="head"><div class="ic">∑</div><h3>Formules</h3></div>
        <div class="card">${w.formules.length ? w.formules.map((f) => `<div class="formula"><div class="nm">${f.nom}</div><div class="tex">$$${f.tex}$$</div>${f.why ? `<div class="why">${f.why}</div>` : ''}</div>`).join('') : '<div class="muted">Pas de formule cette semaine.</div>'}</div></section>

      <section class="blk" id="exos"><div class="head"><div class="ic">✏️</div><h3>Exercices</h3></div>
        <div class="card">${w.exos.map(exoHTML).join('')}</div></section>

      <div style="display:flex;gap:10px;margin-top:6px">
        ${m.semaines[n - 1] ? `<a class="card" style="flex:1;text-align:center;font-weight:600" href="cours.html?m=${id}&w=${n - 1}">‹ Semaine ${n - 1}</a>` : '<div style="flex:1"></div>'}
        ${m.semaines[n + 1] ? `<a class="card" style="flex:1;text-align:center;font-weight:600" href="cours.html?m=${id}&w=${n + 1}">Semaine ${n + 1} ›</a>` : '<div style="flex:1"></div>'}
      </div>`;
    // surlignage de la section visible
    const links = [...document.querySelectorAll('#secnav a')];
    const secs = links.map((a) => document.querySelector(a.getAttribute('href')));
    let last = -1;
    const onScroll = () => { let i = 0; secs.forEach((s, k) => { if (s.getBoundingClientRect().top < 140) i = k; });
      links.forEach((a, k) => a.classList.toggle('on', k === i));
      if (i !== last) { last = i; const nav = document.getElementById('secnav'); const a = links[i]; nav.scrollTo({ left: a.offsetLeft - nav.clientWidth / 2 + a.clientWidth / 2, behavior: 'smooth' }); } };
    window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
  };

  pages.edt = function () {
    shell('Emploi du temps', { tab: 'edt', sub: D.edtInfo });
    const draw = () => {
      const group = store.get('groupe', null);
      const dow = (NOW.getDay() + 6) % 7;
      const jours = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'];
      $('#app').innerHTML = `
        <h2 class="sec">Mon groupe</h2>
        <div class="groups">${[1, 2, 3, 4].map((g) => `<button data-g="${g}" class="${group === g ? 'on' : ''}">Groupe ${g}</button>`).join('')}</div>
        ${group ? '' : '<div class="card muted" style="font-size:14px">Choisis ton groupe : tous les TD et labos sont affichés en attendant.</div>'}
        ${jours.map((j, i) => { const sl = slotsFor(i, group); return `<div class="day"><h3 class="${i === dow ? 'today' : ''}">${j}${i === dow ? ' · aujourd\'hui' : ''}</h3>
          ${sl.length ? sl.map(slotHTML).join('') : '<div class="card muted">Pas de cours</div>'}</div>`; }).join('')}
        <div class="card muted" style="font-size:13px;margin-top:14px">${D.edtNote}</div>`;
      document.querySelectorAll('.groups button').forEach((b) => b.onclick = () => {
        const g = Number(b.dataset.g); store.set('groupe', store.get('groupe', null) === g ? null : g); draw(); });
    };
    draw();
  };

  pages.devoirs = function () {
    shell('Devoirs', { tab: 'dev' });
    const all = upcoming();
    const fut = all.filter((d) => daysLeft(d.date) >= 0), past = all.filter((d) => daysLeft(d.date) < 0);
    $('#app').innerHTML = `
      <h2 class="sec">À venir</h2><div class="card">${fut.length ? fut.map(dueItem).join('') : '<div class="muted">Rien à venir.</div>'}</div>
      ${past.length ? `<h2 class="sec">Passés</h2><div class="card">${past.map(dueItem).join('')}</div>` : ''}`;
  };

  pages.vocab = function () {
    shell('Lexique', { tab: 'voc', sub: 'Tous les mots scientifiques EN → FR' });
    let all = [];
    for (const [id, m] of Object.entries(D.matieres)) for (const [n, w] of Object.entries(m.semaines))
      w.vocab.forEach((v) => all.push({ en: v[0], fr: v[1], m, n }));
    all.sort((a, b) => a.en.localeCompare(b.en));
    const norm = (s) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
    $('#app').innerHTML = `<input id="q" type="search" placeholder="Chercher un mot (anglais ou français)…" autocomplete="off"
        style="width:100%;padding:12px 14px;border-radius:12px;border:1px solid var(--line);background:var(--card);color:var(--ink);font:inherit;margin-bottom:12px">
      <div class="card vocab" id="list"></div>`;
    const draw = () => { const t = norm($('#q').value.trim());
      const l = all.filter((v) => !t || norm(v.en + ' ' + v.fr).includes(t));
      $('#list').innerHTML = l.length ? l.map((v) => `<div class="v"><div class="e">${esc(v.en)}<span class="x">${v.m.icone} ${esc(v.m.nom)} · S${v.n}</span></div><div class="f">${esc(v.fr)}</div></div>`).join('') : '<div class="muted">Aucun mot.</div>'; };
    $('#q').oninput = draw; draw();
  };

  window.App = { page(name) { pages[name](); renderMath(); } };
  if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(() => {});
})();
