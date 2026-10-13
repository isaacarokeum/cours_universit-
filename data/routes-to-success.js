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

  S[3] = {
    titre: 'R2 — Science and Engineering Problem Solving Skills',
    titreFr: 'R2 — Méthode pour résoudre un problème de sciences ou d\'ingénierie',
    resume: 'Comment attaquer un problème : bien lire (infos explicites et implicites), faire un schéma, choisir une stratégie, travailler avec des lettres, puis vérifier la réponse. Quatre activités d\'analyse de problème et une auto-évaluation.',
    sources: 'R2 Science and Engineering Problem Solving Skills.pdf (diapos) · vidéo R2 (.mp4) (Blackboard)',
    en: String.raw`
<h4>Route 2 — what we will discuss</h4>
<ul><li>How to analyse a problem initially.</li><li>Get an overview of strategies for solution.</li><li>Investigate the benefits of working in symbols.</li><li>Consider ways to tell if your solution is working.</li></ul>
<p>This is not a step-by-step recipe, only general advice found effective when solving problems. The more you interact with a problem, the more you learn — you experience it by doing the exercises.</p>
<h4>The problem-solving process</h4>
<table><tr><th>1. Thinking</th><th>2. Doing</th></tr>
<tr><td>Understanding the problem · devising the strategy</td><td>Carrying out the strategy · writing down the steps · checking your answer</td></tr></table>
<h5>Thinking</h5>
<ul><li>What are you being asked to find?</li><li>Do you understand all the words in the problem?</li><li>What information and/or relationships are you given?</li><li>Will you need other facts or relationships that are not explicitly given?</li></ul>
<h5>Doing</h5>
<ul><li>What technique will you use? Carry out the solution with it.</li><li>Is it working? Are you making progress? Are you being accurate?</li>
<li>Is your answer correct? If not: are you sure what you are doing? Did you assume anything that was not given? Were your assumptions correct? Can you try another technique or variation?</li></ul>
<h4>Read the problem carefully</h4>
<p>You need to know exactly what information the problem gives and what it asks you to determine.</p>
<ul><li><b>Explicit</b> (direct) information: e.g. "a person has a mass of 70 kg".</li>
<li><b>Implicit</b> (indirect) information: "a car starts from rest" means its initial speed is zero; "a 5 kg mass" means its weight is 50 N (taking g = 10 m s⁻²).</li></ul>
<p>Careful reading is the essential first step. In an exam, see what is given and understand clearly what the question asks.</p>
<p><b>Expert knowledge:</b> to solve your problem you need the given information <i>plus</i> part of everything you already know (the expert knowledge needed for the problem).</p>
<h4>Sketch the system</h4>
<p>Don't skip this. A sketch gives you a physical feeling for the system and lets you label the known quantities and those to be determined. Some exam questions ask you to sketch the system.</p>
<h4>Strategise</h4>
<p>The most difficult but most creative part. From your sketch, identify the physical processes at work; ask which concepts or principles are involved; then develop a game plan (written down or visualised).</p>
<h4>Identify appropriate equations and solve</h4>
<p>Find the specific equations needed. Work with <b>symbols</b> (x, y, or physics symbols such as m for mass) for most of the working: it is easier to go back and find mistakes, and to explore limits and special cases.</p>
<h4>Check your answer</h4>
<ul><li>Does it make sense? Correct dimensions/units? Is the number reasonable?</li><li>Are you confident each step is correct?</li><li>Have you used all the information given?</li></ul>
<h4>Getting extra help</h4>
<p>Timetabled workshops or support sessions; your tutor's office hours; it is OK to email your lecturer.</p>
<h4>Activities</h4>
<ol><li><b>What are you looking for?</b> Identify what you are trying to find and what form the solution will take (apples problem, "design an efficient tin opener", a pair of simultaneous equations).</li>
<li><b>Identifying the given:</b> list the information given in each of the same three problems.</li>
<li><b>Expert knowledge:</b> a wheel problem — which knowledge is assumed but not given?</li>
<li><b>Problem analysis:</b> a right-angled triangle — what to find, what is given, expert knowledge, diagram.</li></ol>
<h4>Self-reflection</h4>
<p>Grade your confidence from 1 (poor) to 5 (good), with plans to improve: getting started on a problem; choosing a method for solution; working with symbols; knowing if you are heading the right way.</p>`,
    fr: String.raw`
<h4>1. Deux temps : réfléchir, puis faire</h4>
<p>Résoudre un problème, ce n'est pas foncer dans les calculs. Il y a d'abord une phase <b>« réfléchir »</b> (comprendre l'énoncé, choisir une stratégie), puis une phase <b>« faire »</b> (appliquer, écrire les étapes, vérifier).</p>
<div class="tip"><div class="lab">Les 4 questions avant de calculer</div>Qu'est-ce qu'on me demande ? Est-ce que je comprends tous les mots ? Qu'est-ce qu'on me donne ? De quoi d'autre ai-je besoin qui n'est pas écrit ?</div>

<h4>2. Bien lire : l'explicite et l'implicite</h4>
<p>Certaines infos sont <b>écrites noir sur blanc</b> (explicites), d'autres sont <b>cachées dans les mots</b> (implicites).</p>
<div class="ex"><div class="lab">Exemples concrets</div>• « Une voiture démarre » → vitesse initiale \(u = 0\).<br>• « Une masse de 5 kg » → poids \(= 5\times10 = 50\) N (avec g = 10).<br>• « Un objet lâché » → il part sans vitesse, et seule la gravité agit.<br>• « Surface lisse » → pas de frottement.</div>
<p>Pour résoudre, tu combines ce qu'on te donne avec tes <b>connaissances</b> (formules, lois, définitions). Le prof appelle ça l'« expert knowledge ».</p>

<h4>3. Toujours faire un schéma</h4>
<p>Même si ça paraît inutile. Le schéma t'aide à « voir » la situation et à noter ce que tu connais et ce que tu cherches. En examen, on te demande parfois explicitement de le faire.</p>

<h4>4. Choisir une stratégie</h4>
<p>C'est la partie la plus difficile et la plus créative : quels phénomènes sont en jeu (chaleur, forces, mouvement…) ? Quelles lois s'appliquent ? Quel plan d'attaque ?</p>

<h4>5. Calculer avec des lettres</h4>
<p>Écris les équations avec les symboles (m, v, x…) et ne remplace par les nombres <b>qu'à la fin</b>.</p>
<div class="ex"><div class="lab">Exemple concret</div>On cherche la vitesse finale d'un objet lâché de \(h = 20\) m. En lettres : \(v^2 = 2gh\) donc \(v = \sqrt{2gh}\). Avantages : tu vois tout de suite que si \(h\) est multiplié par 4, \(v\) double ; et si tu t'es trompé, tu retrouves l'erreur facilement. Seulement maintenant : \(v = \sqrt{2\times10\times20} = 20\) m/s.</div>

<h4>6. Vérifier la réponse</h4>
<ul><li>Est-ce que ça a du sens ? Les <b>unités</b> sont-elles bonnes ? L'ordre de grandeur est-il raisonnable ?</li><li>Chaque étape est-elle juste ?</li><li>As-tu utilisé <b>toutes</b> les données ? (Si une donnée n'a pas servi, méfie-toi.)</li></ul>
<div class="warnbox">Une voiture qui roule à 3000 m/s, une masse négative, une aire en mètres : il y a une erreur quelque part.</div>

<h4>7. Demander de l'aide</h4>
<p>Les séances de soutien, les heures de consultation des profs, et un mail au prof : c'est normal et encouragé.</p>

<h4>8. Auto-évaluation</h4>
<p>Note-toi de 1 à 5 : démarrer un problème, choisir une méthode, travailler avec des lettres, savoir si tu vas dans la bonne direction. Pour chaque note basse, écris une action concrète pour progresser.</p>`,
    vocab: [
      ['problem solving', 'résolution de problèmes'], ['to devise a strategy', 'élaborer une stratégie'], ['to carry out', 'réaliser, appliquer'],
      ['explicit / implicit', 'explicite (écrit) / implicite (sous-entendu)'], ['given', 'donnée(s) de l\'énoncé'], ['to determine', 'déterminer, trouver'],
      ['to start from rest', 'partir de l\'arrêt (vitesse initiale nulle)'], ['weight', 'poids'], ['sketch', 'schéma, croquis'],
      ['to strategise / game plan', 'établir un plan d\'attaque'], ['symbol', 'symbole, lettre'], ['special case', 'cas particulier'],
      ['dimensions / units', 'dimensions / unités'], ['reasonable', 'plausible'], ['office hours', 'heures de consultation'],
      ['revolution', 'tour (rotation)'], ['axle', 'essieu'], ['hypotenuse', 'hypoténuse'], ['confidence level', 'niveau de confiance']
    ],
    formules: [
      { nom: 'Poids', tex: 'W = mg', why: 'Info implicite : « une masse de 5 kg » donne W = 50 N avec g = 10 m/s².' },
      { nom: 'Périmètre du cercle', tex: 'C = 2\\pi r', why: 'Connaissance « experte » nécessaire pour l\'activité de la roue.' },
      { nom: 'Pythagore', tex: 'c^2 = a^2 + b^2', why: 'Activité 4 (triangle rectangle).' }
    ],
    exos: [
      { src: 'Blackboard', niveau: 1, en: 'If Tom has three times as many apples as Susan and Susan has a quarter as many as Joe, who has four, how many does Mary have if Mary has two more than Tom? Identify what you are looking for, what you are given, then solve.', fr: 'Tom a trois fois plus de pommes que Susan, Susan en a quatre fois moins que Joe, qui en a 4. Combien Mary en a-t-elle si elle en a deux de plus que Tom ? Dis ce que tu cherches, ce qu\'on te donne, puis résous.',
        sol: '<p>On cherche un nombre (les pommes de Mary). Données : J = 4, S = J/4, T = 3S, M = T + 2. Donc S = 1, T = 3, <b>M = 5</b>.</p>' },
      { src: 'Blackboard', niveau: 1, en: String.raw`Solve \(2x+3y=1\), \(x-4y=17\). What form will the answer take, and what are you given?`, fr: 'Résous le système. Quelle forme aura la réponse, et que te donne-t-on ?',
        sol: String.raw`<p>Réponse : deux nombres x et y. On donne deux relations entre x et y. \(x=17+4y\) → \(2(17+4y)+3y=1\) → \(11y=-33\) → \(y=-3\), \(x=5\). Vérif : \(10-9=1\) ✓, \(5+12=17\) ✓.</p>` },
      { src: 'Blackboard', niveau: 1, en: '"Design an efficient tin opener." What are you looking for, and what are you given?', fr: '« Conçois un ouvre-boîte efficace. » Que cherches-tu, et que te donne-t-on ?',
        sol: '<p>La réponse sera un schéma ou une description en mots. On ne te donne presque rien : tu sais à quoi sert un ouvre-boîte, mais tu dois d\'abord <b>définir « efficace »</b> (rapide ? peu d\'effort ? sûr ?).</p>' },
      { src: 'Blackboard', niveau: 2, en: 'A round wheel with a radius of 37 cm rolls at a constant speed of 3 revolutions per second. How far does the axle move in 8 seconds? Which expert knowledge is needed?', fr: 'Une roue de rayon 37 cm roule à 3 tours par seconde. Quelle distance parcourt l\'essieu en 8 s ? Quelles connaissances faut-il ?',
        sol: String.raw`<p>Il faut savoir ce que veulent dire roue, rouler, rayon, tours par seconde, essieu, et que \(C=2\pi r\). Un tour = \(2\pi\times0{,}37\approx2{,}325\) m ; 24 tours en 8 s → \(\approx\) <b>55,8 m</b>.</p>` },
      { src: 'Blackboard', niveau: 2, en: 'In a right-angled triangle the hypotenuse is twice as long as one of the sides forming the right angle. The remaining side is 80 mm long. Calculate the area of the triangle.', fr: 'Dans un triangle rectangle, l\'hypoténuse est deux fois plus longue qu\'un des côtés de l\'angle droit. L\'autre côté mesure 80 mm. Calcule l\'aire.',
        sol: String.raw`<p>Côtés x et 80, hypoténuse 2x. Pythagore : \(4x^2=x^2+6400\) → \(x^2=6400/3\) → \(x\approx46{,}2\) mm. Aire \(=\frac12\times46{,}2\times80\approx\) <b>1848 mm²</b>.</p>` },
      { src: 'Claude', niveau: 1, en: 'List the implicit information in: "A 2 kg box is released from rest on a smooth slope."', fr: 'Quelles infos implicites dans : « Une boîte de 2 kg est lâchée sans vitesse sur une pente lisse » ?',
        sol: '<p>Vitesse initiale nulle ; poids 20 N (g = 10) ; pas de frottement (« lisse »).</p>' },
      { src: 'Claude', niveau: 2, en: 'A student finds that a kettle takes 3 hours to boil 1 L of water. Use the "check your answer" questions to explain why this is suspicious.', fr: 'Un étudiant trouve qu\'une bouilloire met 3 heures à faire bouillir 1 L d\'eau. Avec les questions de vérification, explique pourquoi c\'est louche.',
        sol: '<p>L\'ordre de grandeur n\'est pas raisonnable (une bouilloire met quelques minutes). Vérifier les unités (kW et W ? minutes et secondes ?) et chaque étape.</p>' }
    ]
  };
})();
