# Mes Cours — consignes pour Claude

App perso d'Isaac (University of Southampton Malaysia, Foundation Year) : ses cours Blackboard, semaine par semaine.
**Ne JAMAIS rien modifier sur Blackboard : lecture seule.**

## Structure
- Pages : `index.html` (accueil), `matiere.html?m=ID`, `cours.html?m=ID&w=N`, `edt.html`, `devoirs.html`, `vocab.html`. Rendu dans `app.js`, style dans `style.css`.
- Données : `data/base.js` (matières, devoirs, emploi du temps) + un fichier par matière :
  `math-a.js` (ma), `mechanical-science.js` (ms), `engineering-principles.js` (ep), `routes-to-success.js` (rs), `coursework.js` (cw).
- Electricity & Electronics (GENG0004) : NE PAS inclure (demande d'Isaac).
- Semaine 1 = lundi 28 sept 2026 (calcul automatique dans app.js).

## Ajouter une semaine
Dans le fichier de la matière : `S[n] = { titre, titreFr, resume, sources, en, fr, vocab, formules, exos }`
- `en` : le cours détaillé en anglais, fidèle au support (HTML : h4, h5, p, ul, table, <div class="ex">…).
- `fr` : le même cours expliqué en français, simple, avec BEAUCOUP d'exemples concrets (`<div class="ex"><div class="lab">Exemple concret</div>…</div>`, `tip`, `warnbox`).
- `vocab` : `[anglais, français, note?]`. `formules` : `{nom, tex (KaTeX), why}`.
- `exos` : `{src:'Blackboard'|'Claude', niveau:1-3, en, fr, sol}`. Consigne en anglais + traduction FR. Corrections vérifiées.
- Maths : `\( … \)` en ligne, `$$ … $$` en bloc. Utiliser String.raw pour les chaînes avec des backslashes.
- Ajouter les nouvelles échéances dans `devoirs` (base.js).

## Récupérer les cours sur Blackboard (navigateur intégré, session d'Isaac)
- API : `fetch('https://blackboard.soton.ac.uk/learn/api/public/v1/courses/{id}/contents…', {credentials:'include'})` (URL absolue).
- IDs : ma `_237607_1`, ms `_237611_1`, ep `_237615_1`, rs `_237619_1`, cw `_237621_1`.
- PDF texte : naviguer (navigateur intégré) vers le lien de téléchargement (redirige vers prod01-euc1-prod01-xythos.prod.files.blackboard.com), puis extraire le texte avec pdf.js (cdnjs) via fetch(location.href).
- PowerPoint / Word / PDF en images (diapos de maths, notes manuscrites) : utiliser **Chrome (Claude in Chrome)**. Ouvrir un NOUVEL onglet par fichier, naviguer vers le lien de téléchargement, attendre 2 s, puis sur la page xythos : `fetch(location.href)` → blob → `<a download="nom">` .click(). Le fichier arrive dans C:\Users\ISHAQ\Downloads (dossier connecté) → device_stage_files → lire (zip XML pour pptx/docx, `pdftoppm` + lecture des images pour les PDF scannés). Fermer les onglets ensuite.
- Les diapos de Maths A sont des IMAGES : toujours les rendre en images et les lire visuellement.
- Annonces : `/courses/{id}/announcements`. Échéances : `/v2/courses/{id}/gradebook/columns`.

## Avant de pousser
`for f in data/*.js app.js; do node --check $f; done`, puis commit + push sur main.
