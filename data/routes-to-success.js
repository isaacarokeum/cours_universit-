// GENG0014 Routes to Success — Semaines 1 et 2
(function () {
  const S = DATA.matieres.rs.semaines;

  S[1] = {
    titre: 'Introduction to Routes to Success',
    titreFr: 'Présentation du module Routes to Success',
    resume: 'Le module en 3 parties (A : analyse, B : recherche et écriture, C : projet de groupe), les évaluations et le thème Engineers Without Borders.',
    sources: 'RTS Introduction slides (Blackboard)',
    en: String.raw`
<h4>The big picture</h4>
<p>Routes to Success (RTS) is divided into three parts:</p>
<ul><li><b>Part A</b> — analytical and error-analysis skills (8 weeks) — Dr Beh Shiao Lin</li>
<li><b>Part B</b> — writing, referencing and independent learning (6 weeks) — Mr Ivan Lai</li>
<li><b>Part C</b> — formal group work and a group project (6 weeks + 1 presentation) — Mr Lee Shing Chuan</li></ul>
<p>RTS supports learning in other modules and the transition into Higher Education, and makes students think about professional values and skills for their future careers.</p>
<h4>Assessment</h4>
<p>No final exam. Part A 30 %, Part B 30 %, Part C 40 %. <b>Pass mark: 60 %.</b> Deadlines are on Blackboard — respect them.</p>
<h4>Key theme</h4>
<p>This year's theme linking the three parts is the <b>Engineers Without Borders</b> challenge project. Parts A and B introduce materials and exercises on the theme; Part C is the main assessment and presentation.</p>
<h4>Content of each part</h4>
<ul><li><b>Part A — Analytical skills:</b> problem solving in maths and engineering; precision and accuracy; diagrams and graphs; errors and uncertainty; analysing and presenting data and predicting outcomes from trends. Assessed by an in-class quiz (10 %, Week 8) and a data-analysis assignment (20 %, due Week 9 – needs MS Excel).</li>
<li><b>Part B — Research & writing:</b> professional values and standards of engineering, critical thinking, independent learning, finding resources, referencing, writing for specific audiences, reflection. Assessed by a Research and Writing Portfolio (30 %, Semester 2).</li>
<li><b>Part C — Group work & communication:</b> teams, conflict management, peer assessment, cross-cultural communication, presenting, academic conferences. Assessed by a group poster, research paper and presentation (40 %, Semester 2).</li></ul>
<h4>General advice</h4>
<p>Read the programme requirements; prepare for and attend all classes; check Blackboard announcements and e-mails; be independent; understand how assessments work and the limits of instructors' roles.</p>`,
    fr: String.raw`
<h4>À quoi sert ce module ?</h4>
<p>Routes to Success t'apprend les <b>compétences de l'étudiant ingénieur</b> : analyser des données, écrire et citer ses sources, travailler en équipe. Il n'y a <b>pas d'examen final</b> : tout se joue sur les devoirs, donc chaque rendu compte. Et attention, il faut <b>60 %</b> pour valider (plus que d'habitude).</p>
<h4>Les 3 parties</h4>
<table><tr><th>Partie</th><th>Thème</th><th>Évaluation</th><th>Poids</th></tr>
<tr><td>A</td><td>Analyse de données, erreurs, graphes</td><td>Quiz en classe (S8) + devoir Excel (S9)</td><td>10 % + 20 %</td></tr>
<tr><td>B</td><td>Recherche, écriture, références</td><td>Portfolio écrit (semestre 2)</td><td>30 %</td></tr>
<tr><td>C</td><td>Travail de groupe, communication</td><td>Poster + article + présentation (sem. 2)</td><td>40 %</td></tr></table>
<h4>Le fil rouge : Engineers Without Borders</h4>
<p>Toutes les parties tournent autour d'un projet <b>Engineers Without Borders</b> (Ingénieurs sans frontières) : trouver des solutions d'ingénierie pour une communauté réelle (eau, énergie, logement…). La partie C sera ton projet final en groupe.</p>
<div class="tip"><div class="lab">Conseil</div>Pour la partie A, mets-toi tout de suite à <b>Excel</b> (formules, graphiques, courbe de tendance) : le devoir de 20 % en a besoin, et c'est aussi utile pour les TP.</div>
<h4>Les règles du jeu à l'université</h4>
<ul><li>Lis tes mails et les annonces Blackboard (les changements de salle/horaire passent par là).</li>
<li>Sois autonome : cherche par toi-même avant de demander.</li>
<li>Respecte les dates limites (et si tu as un problème : formulaire de <i>Special Consideration</i>).</li></ul>`,
    vocab: [
      ['Higher Education (HE)', 'enseignement supérieur'], ['assessment', 'évaluation'], ['pass mark', 'note minimale pour valider'],
      ['deadline / due date', 'date limite'], ['submission', 'rendu (dépôt d\'un devoir)'], ['analytical skills', 'compétences d\'analyse'],
      ['error analysis', 'analyse des erreurs'], ['uncertainty', 'incertitude'], ['precision / accuracy', 'fidélité / justesse'],
      ['referencing', 'citation des sources'], ['independent learning', 'apprentissage autonome'], ['critical thinking', 'esprit critique'],
      ['portfolio', 'dossier (portfolio)'], ['group work', 'travail de groupe'], ['peer assessment', 'évaluation par les pairs'],
      ['conflict management', 'gestion des conflits'], ['poster', 'poster (affiche scientifique)'], ['research paper', 'article de recherche'],
      ['Special Consideration', 'demande de circonstances exceptionnelles']
    ],
    formules: [],
    exos: [
      { src: 'Claude', niveau: 1, en: 'What is the pass mark for RTS, and what percentage of the module is assessed in Part C?', fr: 'Quelle est la note pour valider RTS, et combien pèse la partie C ?',
        sol: '<p>60 % pour valider ; la partie C compte pour 40 %.</p>' },
      { src: 'Claude', niveau: 1, en: 'Which software do you need for the Part A assignment, and when is the in-class quiz?', fr: 'Quel logiciel faut-il pour le devoir de la partie A, et quand a lieu le quiz ?',
        sol: '<p>Microsoft Excel (ou équivalent). Quiz en semaine 8 (16–20 nov), dans ton créneau de groupe.</p>' },
      { src: 'Claude', niveau: 2, en: 'Explain the difference between precision and accuracy using the example of darts on a dartboard.', fr: 'Explique la différence entre fidélité (precision) et justesse (accuracy) avec l\'exemple des fléchettes.',
        sol: '<p><b>Accurate</b> (juste) : les fléchettes sont autour du centre en moyenne. <b>Precise</b> (fidèle) : elles sont très groupées, même si ce n\'est pas au centre. On peut être précis mais pas juste (toutes groupées dans un coin).</p>' }
    ]
  };

  S[2] = {
    titre: 'R1 — Developing Mathematic Skills for Data Analysis',
    titreFr: 'R1 — Développer ses compétences en maths pour l\'analyse de données',
    resume: 'Pourquoi l\'algèbre est essentielle en statistiques, utiliser et manipuler des formules, priorités de calcul, et comment débloquer un problème.',
    sources: 'R1 Developing Mathematic Skills for Data Analysis (Blackboard)',
    en: String.raw`
<h4>Part A: Analytical Skills — overview</h4>
<p>Routes in Part A: <b>R1</b> Developing mathematic skills · <b>R2</b> Problem solving · <b>R3</b> Data analysis · <b>R4</b> Statistical interpreting · <b>R5</b> Errors and uncertainty · <b>R6</b> Writing a lab report.</p>
<ul><li><b>Quiz (10 %)</b>: Week 8 (16–20 Nov 2026) in your tutorial group, topic R5, 45 minutes, open book (printed slides allowed). If you cannot attend, submit a Special Consideration Request Form.</li>
<li><b>Assignment (20 %)</b>: individual, uses Excel. Released 19 Oct 2026 (Mon) 5 pm; due <b>30 Nov 2026 (Mon) 5 pm</b> (Malaysia time). The Academic Responsibility Agreement must also be completed by then.</li></ul>
<h4>Route 1 — Learning outcomes</h4>
<p>1. Describe the role of algebra in statistics. 2. Apply basic algebraic concepts essential in statistics. 3. Manipulate and satisfy formulas to solve problems.</p>
<h4>Why do students struggle in mathematics?</h4>
<p>Not enough practice; focusing on the procedure rather than the explanation of the steps; weak basic knowledge; stress and panic; high expectations; lack of motivation.</p>
<h4>Mathematics, statistics and engineering</h4>
<p>School maths (numbers, simple operations) leads to university maths (differentiation, integration…), used in science and engineering to analyse mathematical relations and data. Almost all information comes as numbers, graphs and charts; statistics uses algebra to collect, analyse and interpret data and to understand patterns and uncertainty.</p>
<p>Algebra in statistics: symbols in formulas for mean, variance, standard deviation; solving for unknowns (\(y=mx+b\)); describing patterns on graphs; rearranging and simplifying formulas.</p>
<h4>Strategies when you are stuck</h4>
<ol><li><b>Don't know how to begin?</b> Work more on understanding the topic, then on understanding the problem; develop a systematic approach.</li>
<li><b>Making algebra/arithmetic errors?</b> Practise numeracy a lot and review notes — maths is a building skill.</li>
<li><b>Know what to find but not how?</b> Use standard approaches: refer to worked examples, write reflection notes after an example, re-read the lecture notes.</li></ol>`,
    fr: String.raw`
<h4>Pourquoi des maths dans « analyse de données » ?</h4>
<p>Presque toute l'information que tu verras en ingénierie arrive sous forme de <b>nombres, tableaux et graphiques</b>. Pour les comprendre, on utilise des <b>statistiques</b>, et les statistiques sont écrites avec de l'<b>algèbre</b> : des lettres et des formules (moyenne, écart-type, droite de tendance \(y=mx+b\)…).</p>
<div class="ex"><div class="lab">Exemple concret</div>La moyenne de tes notes s'écrit \(\bar x=\frac{x_1+x_2+\dots+x_n}{n}\). Si tu as 12, 15 et 9 : \(\bar x=36/3=12\). Si tu veux 14 de moyenne avec une 4e note \(x\) : \(\frac{36+x}{4}=14\) → \(x=20\). Voilà l'algèbre au service des stats !</div>

<h4>3 compétences de base</h4>
<p><b>1. Utiliser une formule</b> : remplacer les lettres par les valeurs. \(F=1{,}8C+32\) : pour 30 °C, \(F=1{,}8\times30+32=86\) °F.</p>
<p><b>2. Vérifier si des valeurs satisfont une équation</b> : on remplace et on regarde si l'égalité est vraie. Pour \(Y=3X+5\), est-ce que \(X=0, Y=5\) marche ? \(3\times0+5=5\) ✓.</p>
<p><b>3. Isoler une inconnue</b> (« make … the subject ») : on fait la même opération des deux côtés pour laisser la lettre voulue seule.<br>\(F=1{,}8C+32\) → \(F-32=1{,}8C\) → \(C=\dfrac{F-32}{1{,}8}\).</p>
<div class="warnbox"><div class="lab">Priorités de calcul</div>Multiplication et division <b>avant</b> addition et soustraction : \(2+3\times4=2+12=14\) (pas 20). Ta calculatrice respecte ces règles, donc tape bien les parenthèses quand il en faut.</div>

<h4>Quand tu bloques sur un exo</h4>
<ul><li><b>Tu ne sais pas par où commencer</b> → relis le cours d'abord, puis reformule l'énoncé avec tes mots : qu'est-ce qu'on me donne, qu'est-ce qu'on me demande ?</li>
<li><b>Tu fais des erreurs de calcul</b> → entraîne-toi beaucoup, écris chaque étape, vérifie les unités et l'ordre de grandeur.</li>
<li><b>Tu sais ce qu'il faut trouver mais pas comment</b> → cherche un exemple corrigé qui ressemble, et après chaque exemple, note en une phrase « l'astuce » utilisée.</li></ul>
<div class="tip"><div class="lab">À faire cette semaine</div>Fais l'auto-évaluation de la fin du cours : note de 1 à 5 ta confiance sur « je connais mes forces et faiblesses », « les problèmes vont devenir plus durs », « je sais quoi faire face à une série d'exercices », et écris un plan pour t'améliorer.</div>`,
    vocab: [
      ['algebra', 'algèbre'], ['statistics', 'statistiques'], ['data analysis', 'analyse de données'],
      ['formula (pl. formulae)', 'formule'], ['to satisfy an equation', 'vérifier (satisfaire) une équation'],
      ['to make x the subject', 'isoler x'], ['to rearrange', 'réarranger, transformer'], ['to substitute', 'remplacer (substituer)'],
      ['mean', 'moyenne'], ['variance', 'variance'], ['standard deviation', 'écart-type'], ['pattern / trend', 'tendance'],
      ['numeracy', 'aisance avec les nombres (calcul)'], ['worked example', 'exemple corrigé'], ['open book', 'documents autorisés'],
      ['lab report', 'compte rendu de TP'], ['problem solving', 'résolution de problèmes'], ['self-reflection', 'auto-évaluation (réflexion personnelle)']
    ],
    formules: [
      { nom: 'Celsius → Fahrenheit', tex: 'F = 1.8\\,C + 32', why: '' },
      { nom: 'Fahrenheit → Celsius', tex: 'C = \\dfrac{F - 32}{1.8}', why: 'La même formule, avec C isolé.' },
      { nom: 'Droite', tex: 'y = mx + b', why: 'm = pente, b = ordonnée à l\'origine.' },
      { nom: 'Moyenne', tex: '\\bar{x} = \\dfrac{1}{n}\\sum_{i=1}^{n} x_i', why: '' },
      { nom: 'Équation du mouvement (Ex. 4)', tex: 'v^2 = u^2 + 2as', why: '' }
    ],
    exos: [
      { src: 'Blackboard', niveau: 1, en: 'Use the formula F = 1.8C + 32 to convert into degrees Fahrenheit: 0 °C, 100 °C, 30 °C, −17.8 °C.', fr: 'Utilise la formule pour convertir en °F.',
        sol: '<p>32 °F · 212 °F · 86 °F · 1,8 × (−17,8) + 32 = −0,04 ≈ <b>0 °F</b></p>' },
      { src: 'Blackboard', niveau: 1, en: 'Which one of these pairs satisfies Y = 3X + 5? (a) X = 3, Y = 4 (b) X = 0, Y = 5 (c) X = −2, Y = −11', fr: 'Quel couple vérifie l\'équation ?',
        sol: '<p>(a) 3×3+5 = 14 ≠ 4 ✗ · (b) 5 = 5 ✓ · (c) −6+5 = −1 ≠ −11 ✗ → <b>réponse (b)</b></p>' },
      { src: 'Blackboard', niveau: 1, en: 'Guess, then check with your calculator: 2 × 3 – 4; 2 + 3 × 4; 2 – 3 × 4; 2 – 3 ÷ 4', fr: 'Devine le résultat, puis vérifie à la calculatrice.',
        sol: '<p>2 · 14 · −10 · 1,25 (multiplication/division en premier)</p>' },
      { src: 'Blackboard', niveau: 2, en: String.raw`(a) Make \(m\) the subject: \(C=2m^2+3\). (b) Make \(C\) the subject: \(F=1.8C+32\). (c) Find \(v\) if \(u=3\), \(a=2\), \(s=4\): \(v^2=u^2+2as\).`, fr: '(a) Isole m. (b) Isole C. (c) Calcule v.',
        sol: String.raw`<p>(a) \(m=\sqrt{\dfrac{C-3}{2}}\) · (b) \(C=\dfrac{F-32}{1{,}8}\) · (c) \(v^2=9+16=25\) → \(v=5\)</p>` },
      { src: 'Claude', niveau: 1, en: 'Your marks are 12, 15 and 9. What mark do you need on the next test to get an average of 13?', fr: 'Tes notes : 12, 15, 9. Quelle note te faut-il au prochain test pour avoir 13 de moyenne ?',
        sol: String.raw`<p>\(\frac{36+x}{4}=13\) → \(x=52-36=16\).</p>` },
      { src: 'Claude', niveau: 2, en: String.raw`Make \(r\) the subject of \(A=\pi r^2\), then find \(r\) when \(A=50\) cm².`, fr: 'Isole r dans la formule de l\'aire du disque, puis calcule r pour 50 cm².',
        sol: String.raw`<p>\(r=\sqrt{A/\pi}=\sqrt{50/\pi}\approx3{,}99\) cm.</p>` },
      { src: 'Claude', niveau: 2, en: String.raw`Make \(t\) the subject of \(v=u+at\). A car goes from 5 m/s to 25 m/s with \(a=4\) m/s². How long does it take?`, fr: 'Isole t, puis calcule le temps.',
        sol: String.raw`<p>\(t=\dfrac{v-u}{a}=\dfrac{25-5}{4}=5\) s.</p>` }
    ]
  };
})();
