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
  function hoursLeft(d) { return (new Date(d) - NOW) / 36e5; }

  // ---------- Devoirs : statut « rendu » ----------
  const dueId = (d) => d.id || (d.matiere + '|' + d.titre);
  function isDone(d) { return !!d.rendu; }
  const needsAction = (d) => d.type !== 'Info' && !isDone(d);
  function urgent() { return D.devoirs.filter((d) => needsAction(d) && hoursLeft(d.date) > 0 && hoursLeft(d.date) <= 24); }

  const SUBJ = (m) => m ? `<b class="sname" style="color:${m.couleur}">${esc(m.nom)}</b>` : '';
  // ---------- Coque (en-tête + barre du bas) ----------
  function shell(title, opts = {}) {
    document.title = title + ' · Mes Cours';
    const back = opts.back ? `<a class="back" href="${opts.back}" aria-label="Retour">‹</a>` : '';
    document.body.insertAdjacentHTML('afterbegin', `
      <header class="top" style="--c:${opts.color || 'var(--accent)'}">
        <div class="row">${back}<h1>${esc(title)}</h1></div>
        ${opts.sub ? `<div class="sub">${esc(opts.sub)}</div>` : ''}
      </header>`);
    const tab = opts.tab || '';
    const nb = D.devoirs.filter((d) => needsAction(d) && hoursLeft(d.date) > 0 && daysLeft(d.date) <= 7).length;
    document.body.insertAdjacentHTML('beforeend', `
      <nav class="tabbar">
        <a href="index.html" class="${tab === 'home' ? 'on' : ''}"><span><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/></svg></span>Accueil</a>
        <a href="edt.html" class="${tab === 'edt' ? 'on' : ''}"><span><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="17" rx="2"/><path d="M3 9h18M8 2v4M16 2v4"/></svg></span>Planning</a>
        <a href="devoirs.html" class="${tab === 'dev' ? 'on' : ''}"><span><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 4h6M8 3h8v3H8z"/><rect x="5" y="5" width="14" height="16" rx="2"/><path d="M9 12l2 2 4-4"/></svg>${nb ? `<i class="dot">${nb}</i>` : ''}</span>Devoirs</a>
        <a href="notes.html" class="${tab === 'notes' ? 'on' : ''}"><span><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16v12l-4 4H4z"/><path d="M16 20v-4h4M8 9h8M8 13h5"/></svg></span>Notes</a>
        <a href="vocab.html" class="${tab === 'voc' ? 'on' : ''}"><span><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19l4-12 4 12M5.5 15h5M15 9h5l-5 10h5"/></svg></span>Lexique</a>
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

  // ---------- Notifications (24 h avant) ----------
  function urgentBanner() {
    const u = urgent();
    if (!u.length) return '';
    return `<div class="alert"><div><b>À rendre dans moins de 24 h !</b>${u.map((d) => `<div>${SUBJ(D.matieres[d.matiere])} — ${esc(d.titre)} — ${new Date(d.date).toLocaleString('fr-FR', { weekday: 'short', hour: '2-digit', minute: '2-digit' })}</div>`).join('')}</div></div>`;
  }
  function notifyUrgent() {
    if (!('Notification' in window) || Notification.permission !== 'granted') return;
    const sent = store.get('notifEnvoyees', {});
    urgent().forEach((d) => {
      if (sent[dueId(d)]) return;
      const body = `${D.matieres[d.matiere]?.nom || ''} — à rendre le ${new Date(d.date).toLocaleString('fr-FR', { weekday: 'long', hour: '2-digit', minute: '2-digit' })}`;
      const show = () => navigator.serviceWorker && navigator.serviceWorker.ready
        ? navigator.serviceWorker.ready.then((r) => r.showNotification('Rappel : ' + d.titre, { body, icon: 'icon-192.png', tag: dueId(d) }))
        : new Notification('Rappel : ' + d.titre, { body, icon: 'icon-192.png' });
      try { show(); sent[dueId(d)] = Date.now(); } catch (e) {}
    });
    store.set('notifEnvoyees', sent);
  }
  function notifButton() {
    if (!('Notification' in window)) return '<div class="hint">Sur iPhone, ajoute d\'abord l\'app à l\'écran d\'accueil pour pouvoir activer les notifications.</div>';
    if (Notification.permission === 'granted') return '<div class="hint">Rappels activés : l\'app te prévient 24 h avant chaque devoir pas encore rendu (quand tu l\'ouvres), et Claude t\'envoie aussi un rappel chaque matin.</div>';
    if (Notification.permission === 'denied') return '<div class="hint">Notifications bloquées dans les réglages du navigateur.</div>';
    return '<button class="btn" id="notifBtn">Activer les rappels 24 h avant</button>';
  }
  function bindNotif() {
    const b = $('#notifBtn'); if (!b) return;
    b.onclick = () => Notification.requestPermission().then(() => { notifyUrgent(); location.reload(); });
  }

  // ---------- Briques ----------
  function dueItem(d) {
    const m = D.matieres[d.matiere];
    const left = daysLeft(d.date), h = hoursLeft(d.date);
    const dt = new Date(d.date);
    const done = isDone(d), past = h < 0, info = d.type === 'Info';
    let badge;
    if (done) badge = '<span class="pill ok">Rendu</span>';
    else if (info) badge = '<span class="pill">Info</span>';
    else if (past) badge = '<span class="pill warn">En retard / passé</span>';
    else if (h <= 24) badge = '<span class="pill hot">Moins de 24 h</span>';
    else if (left <= 7) badge = `<span class="pill warn">J-${left}</span>`;
    else badge = `<span class="pill">dans ${left} j</span>`;
    const url = d.url || (m && m.bb ? `https://blackboard.soton.ac.uk/ultra/courses/${m.bb}/outline` : '#');
    return `<div class="due ${done ? 'done' : ''} ${past && !done ? 'past' : ''}">
      <a class="due-main" href="${url}" target="_blank" rel="noopener">
        <div class="d"><b>${dt.getDate()}</b><small>${dt.toLocaleDateString('fr-FR', { month: 'short' })}</small></div>
        <div><div class="t">${esc(d.titre)} <span class="ext">↗</span></div>
        <div class="s">${m ? SUBJ(m) + ' · ' : ''}${esc(d.type)} · ${badge}</div>
        ${d.details ? `<div class="s" style="margin-top:4px">${d.details}</div>` : ''}</div></a>
    </div>`;
  }
  function bindDue() {}
  function upcoming(filter) {
    return D.devoirs.filter((d) => (!filter || d.matiere === filter)).sort((a, b) => new Date(a.date) - new Date(b.date));
  }
  function slotsFor(dayIdx, group) {
    return D.edt.filter((s) => s.jour === dayIdx && (!s.groupes || !group || s.groupes.includes(group)))
      .sort((a, b) => a.debut.localeCompare(b.debut));
  }
  function slotHTML(s) {
    const m = D.matieres[s.matiere];
    const c = m ? m.couleur : '#b9a99b';
    const g = s.groupes ? ' · Groupe ' + s.groupes.join('/') : '';
    return `<div class="slot" style="--c:${c}"><div class="h">${s.debut}<small>${s.fin}</small></div>
      <div><div class="t">${esc(s.titre)}</div><div class="s">${esc(s.type)} · ${esc(s.salle)} · ${esc(s.prof)}${g}</div></div></div>`;
  }

  // Sections d'un cours (chacune sur sa propre page)
  const SECTIONS = [
    { id: 'en', ic: 'EN', nom: 'Cours en anglais', sub: 'Le cours détaillé, comme sur Blackboard' },
    { id: 'fr', ic: 'FR', nom: 'Cours en français', sub: 'Expliqué simplement, avec des exemples concrets' },
    { id: 'vocab', ic: 'Aa', nom: 'Mots à connaître', sub: 'Vocabulaire scientifique anglais → français' },
    { id: 'formules', ic: '∑', nom: 'Formules', sub: 'Toutes les formules de la semaine' },
    { id: 'exos', ic: '✎', nom: 'Exercices', sub: 'Blackboard + bonus, avec corrections' }
  ];

  // ---------- Pages ----------
  const pages = {};

  pages.home = function () {
    shell('Mes Cours', { tab: 'home', sub: 'University of Southampton Malaysia · Foundation Year' });
    const group = store.get('groupe', null);
    const dow = (NOW.getDay() + 6) % 7; // 0 = lundi
    const today = dow < 5 ? slotsFor(dow, group) : [];
    const next = upcoming().filter((d) => hoursLeft(d.date) > 0 && !isDone(d)).slice(0, 3);
    const ids = Object.keys(D.matieres);
    const draw = () => {
      $('#app').innerHTML = `
        ${urgentBanner()}
        <div class="card hero"><div class="small">Nous sommes en</div><div class="big">Semaine ${CUR_WEEK}</div>
          <div class="small">${weekRange(CUR_WEEK)} · Semestre 1</div></div>

        <h2 class="sec">Mes matières</h2>
        <div class="grid">${ids.map((id) => { const m = D.matieres[id]; const n = Object.keys(m.semaines).length;
          return `<a class="subj" style="--c:${m.couleur}" href="matiere.html?m=${id}"><div class="ico">${id.toUpperCase()}</div>
            <div class="n">${esc(m.nom)}</div><div class="c">${m.code} · ${n} semaine${n > 1 ? 's' : ''}</div></a>`; }).join('')}</div>

        <h2 class="sec">Aujourd'hui${group ? ' · Groupe ' + group : ''}</h2>
        <div>${dow > 4 ? '<div class="card muted">Week-end, pas de cours.</div>'
          : today.length ? today.map(slotHTML).join('') : '<div class="card muted">Rien de prévu.</div>'}
          ${group ? '' : '<div class="card muted" style="font-size:14px">Choisis ton groupe dans <a href="edt.html"><b>Planning</b></a> pour ne voir que tes cours.</div>'}</div>

        <h2 class="sec">Prochains devoirs</h2>
        <div class="card">${next.length ? next.map(dueItem).join('') : '<div class="muted">Rien à rendre pour l\'instant.</div>'}
          <a href="devoirs.html" class="more">Tout voir ›</a></div>
        ${notifButton()}`;
      bindDue(draw); bindNotif();
    };
    draw();
  };

  pages.matiere = function () {
    const id = qs.get('m'); const m = D.matieres[id];
    if (!m) { location.href = 'index.html'; return; }
    shell(m.nom, { back: 'index.html', color: m.couleur, sub: m.code + ' · ' + m.prof });
    const weeks = Object.keys(m.semaines).map(Number).sort((a, b) => a - b);
    const sel = Number(qs.get('w')) || (m.semaines[CUR_WEEK] ? CUR_WEEK : weeks[weeks.length - 1]);
    const w = m.semaines[sel];
    const allWeeks = Array.from({ length: Math.max(12, ...weeks) }, (_, i) => i + 1);
    const draw = () => {
      const dues = upcoming(id).filter((d) => weekOf(new Date(d.date)) === sel || (hoursLeft(d.date) > 0 && daysLeft(d.date) <= 14));
      $('#app').innerHTML = `
        <h2 class="sec">Semaines</h2>
        <div class="chips" style="--c:${m.couleur}">${allWeeks.map((n) => m.semaines[n]
          ? `<a class="chip ${n === sel ? 'on' : ''}" href="matiere.html?m=${id}&w=${n}">S${n}${n === CUR_WEEK ? ' •' : ''}</a>`
          : `<span class="chip off">S${n}</span>`).join('')}</div>

        <h2 class="sec">Devoirs — semaine ${sel}</h2>
        <div class="card">${dues.length ? dues.map(dueItem).join('') : '<div class="muted">Rien à rendre cette semaine.</div>'}</div>

        <h2 class="sec">Cours de la semaine ${sel}</h2>
        ${w ? `<a class="card lessoncard" href="cours.html?m=${id}&w=${sel}" style="--c:${m.couleur}">
            <div class="list"><div class="it"><div class="wk"><small>SEM</small><b>${sel}</b></div>
            <div><div class="t">${esc(w.titre)}</div><div class="s">${esc(w.titreFr)}</div></div><span class="chev">›</span></div></div>
            ${w.resume ? `<p class="muted" style="font-size:14px;margin-top:10px">${w.resume}</p>` : ''}</a>`
          : '<div class="card muted">Pas encore de cours pour cette semaine.</div>'}

        <h2 class="sec">Toutes les semaines</h2>
        <div class="card list" style="--c:${m.couleur}">${weeks.map((n) => `<a href="cours.html?m=${id}&w=${n}">
          <div class="wk"><small>SEM</small><b>${n}</b></div><div><div class="t">${esc(m.semaines[n].titre)}</div>
          <div class="s">${weekRange(n)}</div></div><span class="chev">›</span></a>`).join('')}</div>`;
      bindDue(draw);
    };
    draw();
  };

  // Page « sommaire » du cours : un bouton par section, chacune ouvre une nouvelle page
  pages.cours = function () {
    const id = qs.get('m'); const n = Number(qs.get('w')); const m = D.matieres[id]; const w = m && m.semaines[n];
    if (!w) { location.href = 'index.html'; return; }
    shell(`S${n} · ${m.nom}`, { back: `matiere.html?m=${id}&w=${n}`, color: m.couleur });
    const count = { en: '', fr: '', vocab: w.vocab.length + ' mots', formules: w.formules.length + ' formules', exos: w.exos.length + ' exercices' };
    const nNotes = store.get('notes', []).filter((x) => x.m === id && x.w === n).length;
    $('#app').innerHTML = `
      <div class="card" style="--c:${m.couleur}"><div class="muted" style="font-size:13px">Semaine ${n} · ${weekRange(n)}</div>
        <div class="ctitle">${esc(w.titre)}</div><div class="muted">${esc(w.titreFr)}</div>
        ${w.resume ? `<p style="font-size:14px;margin-top:8px">${w.resume}</p>` : ''}</div>
      <div class="sections">${SECTIONS.map((s) => `<a class="secbtn" style="--c:${m.couleur}" href="section.html?m=${id}&w=${n}&s=${s.id}">
        <div class="ic">${s.ic}</div><div><div class="t">${s.nom}</div><div class="s">${s.sub}${count[s.id] ? ' · ' + count[s.id] : ''}</div></div><span class="chev">›</span></a>`).join('')}
        <a class="secbtn" style="--c:${m.couleur}" href="notes.html?m=${id}&w=${n}"><div class="ic">✎</div><div><div class="t">Mes notes</div>
        <div class="s">${nNotes ? nNotes + ' note' + (nNotes > 1 ? 's' : '') + ' pour ce cours' : 'Ajouter une note ou un « à réviser »'}</div></div><span class="chev">›</span></a></div>
      ${w.sources ? `<div class="src">Source : ${w.sources}</div>` : ''}
      <div class="pager">
        ${m.semaines[n - 1] ? `<a class="card" href="cours.html?m=${id}&w=${n - 1}">‹ Semaine ${n - 1}</a>` : '<span></span>'}
        ${m.semaines[n + 1] ? `<a class="card" href="cours.html?m=${id}&w=${n + 1}">Semaine ${n + 1} ›</a>` : '<span></span>'}
      </div>`;
  };

  // Une section seule, sur sa propre page
  pages.section = function () {
    const id = qs.get('m'); const n = Number(qs.get('w')); const sid = qs.get('s');
    const m = D.matieres[id]; const w = m && m.semaines[n]; const k = SECTIONS.findIndex((s) => s.id === sid);
    if (!w || k < 0) { location.href = 'index.html'; return; }
    const S = SECTIONS[k];
    shell(S.nom, { back: `cours.html?m=${id}&w=${n}`, color: m.couleur, sub: `${m.nom} · Semaine ${n} — ${w.titre}` });
    let body = '';
    if (sid === 'en') body = `<div class="card lesson" style="--c:${m.couleur}">${w.en}</div>`;
    if (sid === 'fr') body = `<div class="card lesson" style="--c:${m.couleur}">${w.fr}</div>`;
    if (sid === 'vocab') body = `<div class="card vocab">${w.vocab.map((v) => `<div class="v"><div class="e">${esc(v[0])}</div><div class="f">${esc(v[1])}${v[2] ? `<span class="x">${esc(v[2])}</span>` : ''}</div></div>`).join('')}</div>`;
    if (sid === 'formules') body = `<div class="card">${w.formules.length ? w.formules.map((f) => `<div class="formula"><div class="nm">${f.nom}</div><div class="tex">$$${f.tex}$$</div>${f.why ? `<div class="why">${f.why}</div>` : ''}</div>`).join('') : '<div class="muted">Pas de formule cette semaine.</div>'}</div>`;
    if (sid === 'exos') body = `<div class="card">${w.exos.map((e, i) => `<div class="exo"><div class="top2"><span class="num">${i + 1}.</span>
        <span class="pill ${e.src === 'Blackboard' ? 'ok' : 'bonus'}">${e.src === 'Blackboard' ? 'Blackboard' : 'Bonus'}</span>
        ${e.niveau ? `<span class="pill">${'★'.repeat(e.niveau)}</span>` : ''}</div>
        <div class="q">${e.en}</div><div class="qfr">FR : ${e.fr}</div>
        ${e.sol ? `<details><summary>Voir la correction</summary><div class="sol">${e.sol}</div></details>` : ''}</div>`).join('')}</div>`;
    const prev = SECTIONS[k - 1], next = SECTIONS[k + 1];
    $('#app').innerHTML = body + `<div class="pager">
      ${prev ? `<a class="card" href="section.html?m=${id}&w=${n}&s=${prev.id}">‹ ${prev.nom}</a>` : `<a class="card" href="cours.html?m=${id}&w=${n}">‹ Sommaire</a>`}
      ${next ? `<a class="card" href="section.html?m=${id}&w=${n}&s=${next.id}">${next.nom} ›</a>` : `<a class="card" href="notes.html?m=${id}&w=${n}">Mes notes ›</a>`}
    </div>`;
    window.scrollTo(0, 0);
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
    shell('Devoirs', { tab: 'dev', sub: 'Appuie sur un devoir pour l\'ouvrir sur Blackboard. Le statut « rendu » est vérifié sur Blackboard.' });
    const draw = () => {
      const all = upcoming();
      const todo = all.filter((d) => !isDone(d) && hoursLeft(d.date) > 0);
      const done = all.filter((d) => isDone(d));
      const past = all.filter((d) => !isDone(d) && hoursLeft(d.date) <= 0);
      $('#app').innerHTML = `${urgentBanner()}
        <h2 class="sec">À faire</h2><div class="card">${todo.length ? todo.map(dueItem).join('') : '<div class="muted">Rien à faire.</div>'}</div>
        ${past.length ? `<h2 class="sec">Date passée (pas marqué rendu)</h2><div class="card">${past.map(dueItem).join('')}</div>` : ''}
        ${done.length ? `<h2 class="sec">Rendus</h2><div class="card">${done.map(dueItem).join('')}</div>` : ''}
        ${notifButton()}`;
      bindDue(draw); bindNotif();
    };
    draw();
  };

  pages.notes = function () {
    shell('Mes notes', { tab: 'notes', sub: 'Tes notes et tes « à réviser » (enregistrés sur ce téléphone)' });
    const fm = qs.get('m') || '', fw = Number(qs.get('w')) || 0;
    let filtre = fm || 'tout';
    const draw = () => {
      const notes = store.get('notes', []);
      const list = notes.filter((x) => filtre === 'tout' || (filtre === 'reviser' ? x.reviser && !x.fait : x.m === filtre))
        .sort((a, b) => (a.fait - b.fait) || (b.reviser - a.reviser) || (b.t - a.t));
      const opts = Object.entries(D.matieres).map(([k, m]) => `<option value="${k}" ${k === (fm || '') ? 'selected' : ''}>${m.icone} ${m.nom}</option>`).join('');
      $('#app').innerHTML = `
        <div class="card noteform">
          <select id="nm"><option value="">Général</option>${opts}</select>
          <input id="nt" placeholder="Titre (ex. : Revoir le discriminant)" maxlength="120">
          <textarea id="nx" rows="3" placeholder="Ta note…"></textarea>
          <label class="tick"><input type="checkbox" id="nr" checked> À réviser</label>
          <button class="btn" id="nadd">Ajouter la note</button>
        </div>
        <div class="chips">${[['tout', 'Toutes'], ['reviser', 'À réviser'], ...Object.entries(D.matieres).map(([k, m]) => [k, m.nom])]
          .map(([k, l]) => `<button class="chip ${filtre === k ? 'on' : ''}" data-f="${k}">${l}</button>`).join('')}</div>
        <div>${list.length ? list.map((x) => { const m = D.matieres[x.m];
          return `<div class="note ${x.fait ? 'fait' : ''}" style="--c:${m ? m.couleur : 'var(--accent)'}">
            <div class="nh"><span class="pill">${m ? SUBJ(m) : '<b>Général</b>'}${x.w ? ' · S' + x.w : ''}</span>
            ${x.reviser ? `<button class="pill ${x.fait ? 'ok' : 'hot'}" data-done="${x.id}">${x.fait ? 'Révisé' : 'À réviser'}</button>` : ''}
            <button class="del" data-del="${x.id}" aria-label="Supprimer">Supprimer</button></div>
            ${x.titre ? `<div class="t">${esc(x.titre)}</div>` : ''}${x.texte ? `<div class="nx">${esc(x.texte).replace(/\n/g, '<br>')}</div>` : ''}
            <div class="s">${new Date(x.t).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })}
            ${m && x.w ? ` · <a href="cours.html?m=${x.m}&w=${x.w}">ouvrir le cours ›</a>` : ''}</div></div>`; }).join('')
          : '<div class="card muted">Aucune note ici pour l\'instant.</div>'}</div>`;
      $('#nadd').onclick = () => {
        const t = $('#nt').value.trim(), tx = $('#nx').value.trim(); if (!t && !tx) return;
        const mm = $('#nm').value;
        const all = store.get('notes', []);
        all.push({ id: Date.now().toString(36), m: mm, w: mm && mm === fm ? fw : 0, titre: t, texte: tx, reviser: $('#nr').checked, fait: false, t: Date.now() });
        store.set('notes', all); draw();
      };
      document.querySelectorAll('[data-f]').forEach((b) => b.onclick = () => { filtre = b.dataset.f; draw(); });
      document.querySelectorAll('[data-done]').forEach((b) => b.onclick = () => {
        const all = store.get('notes', []); const x = all.find((y) => y.id === b.dataset.done); x.fait = !x.fait; store.set('notes', all); draw(); });
      document.querySelectorAll('[data-del]').forEach((b) => b.onclick = () => {
        if (!confirm('Supprimer cette note ?')) return;
        store.set('notes', store.get('notes', []).filter((y) => y.id !== b.dataset.del)); draw(); });
    };
    draw();
  };

  pages.vocab = function () {
    shell('Lexique', { tab: 'voc', sub: 'Tous les mots scientifiques EN → FR' });
    let all = [];
    for (const [id, m] of Object.entries(D.matieres)) for (const [n, w] of Object.entries(m.semaines))
      w.vocab.forEach((v) => all.push({ en: v[0], fr: v[1], m, n }));
    all.sort((a, b) => a.en.localeCompare(b.en));
    const norm = (s) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
    $('#app').innerHTML = `<input id="q" class="search" type="search" placeholder="Chercher un mot (anglais ou français)…" autocomplete="off">
      <div class="card vocab" id="list"></div>`;
    const draw = () => { const t = norm($('#q').value.trim());
      const l = all.filter((v) => !t || norm(v.en + ' ' + v.fr).includes(t));
      $('#list').innerHTML = l.length ? l.map((v) => `<div class="v"><div class="e">${esc(v.en)}<span class="x">${SUBJ(v.m)} · S${v.n}</span></div><div class="f">${esc(v.fr)}</div></div>`).join('') : '<div class="muted">Aucun mot.</div>'; };
    $('#q').oninput = draw; draw();
  };

  window.App = { page(name) { pages[name](); renderMath(); notifyUrgent(); } };
  if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(() => {});
})();
