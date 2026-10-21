// GENG0014 Routes to Success — Semaines 1 à 4
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
  // =========================== SEMAINE 4 ===========================
  S[4] = {
    titre: 'R3 — Data Analysis Skills',
    titreFr: 'R3 — Analyser et présenter des données',
    resume: 'Les types de données (discrètes, continues, catégorielles, ordinales), comment faire un bon tableau de résultats, quel graphique choisir (nuage de points, courbe, barres, camembert) et comment écrire l\'analyse d\'un graphique. C\'est la base du devoir A.2 (Excel, à rendre le 30 nov.).',
    sources: 'R3 Data Analysis Skills.pdf (diapos) · vidéo R3 (.mp4) · A.2 Assignment brief.pdf (Blackboard, 19–20 oct.)',
    en: String.raw`
<h4>Route 3 — what we will discuss</h4>
<ul><li>Types of data</li><li>How to present data</li><li>How to write an analytical report</li></ul>
<h4>Types of data</h4>
<p>When you plan an experiment or data collection, think about the best way to record and present your data. Experiments always involve some measurement, and it all depends on what sort of data you have.</p>
<ul><li><b>Discrete data:</b> obtained by <b>counting</b>; the results are integers (e.g. the number of cars entering the city each day). Scatter graphs and bar charts are often used.</li>
<li><b>Continuous data:</b> obtained by <b>measuring</b> on a scale; can take any value, including decimals (e.g. gauge length 50.4 mm, potential difference 2.1 mV). Accuracy is limited by the instrument. Best shown with a line graph or scatter graph.</li>
<li><b>Categoric data:</b> values sorted into categories (e.g. brass, wood, glass, steel; types of air pollutant). Use a pie chart or bar chart.</li>
<li><b>Ordered (ordinal) data:</b> categories that can be put in order (e.g. "low", "fairly high", "very high"). A bar chart is often used.</li></ul>
<h4>Tables of data</h4>
<p>Your results table should include:</p>
<ol><li>Space for the <b>independent variable</b> (the thing you change) and the <b>dependent variable</b> (the thing you measure).</li>
<li>Units in the <b>headers</b>, not after each value (e.g. "Time / s", "Current / A").</li>
<li>Space to <b>repeat</b> each test, to see how precise and repeatable the results are.</li>
<li>Space for <b>data processing</b> (e.g. the mean of the repeats, to 3 d.p.).</li>
<li>A <b>title</b>: "Table 1: …" (preferred) with the caption <b>above</b> the table, or "Figure 1: …" with the caption <b>below</b>.</li></ol>
<table><tr><th>Time / s</th><th>Current / A (1)</th><th>Current / A (2)</th><th>Current / A (3)</th><th>Mean current / A</th></tr>
<tr><td>0.0</td><td>0.370</td><td>0.368</td><td>0.371</td><td>0.370</td></tr>
<tr><td>1.0</td><td>0.218</td><td>0.219</td><td>0.172</td><td>0.219</td></tr>
<tr><td>2.0</td><td>0.118</td><td>0.122</td><td>0.116</td><td>0.119</td></tr></table>
<p class="muted" style="font-size:13px">At t = 1.0 s, 0.172 is an anomaly, so the mean is taken from the two other readings.</p>
<h4>Presenting data using graphs</h4>
<ul><li><b>Scatter graphs</b> show how two sets of data are related (<b>correlated</b>): positive, negative or no correlation. Only use "correlation" for a linear relationship (e.g. Hooke's law, Ohm's law, gas law).</li>
<li><b>Curved graphs:</b> for a non-linear relationship (e.g. charging capacitor), draw a smooth curve of best fit with about the same number of points on each side.</li>
<li><b>Straight-line graphs:</b> \(y=mx+c\), where \(m\) is the gradient and \(c\) the y-intercept; you can use them to work out values and the relationship. A good graph has a caption below, label and unit on each axis, and the equation of the line.</li>
<li><b>Bar charts:</b> vertical, horizontal, grouped, stacked.</li>
<li><b>Pie charts:</b> the whole circle is the total, each slice a part (percentage). Needs categorical variables and numerical values.</li></ul>
<h4>Analytical skills</h4>
<p>Before interpreting, check: what type of presentation was chosen and why; is there a title; are there labels, headings, legends; what do the points, lines, colours represent; what units are used (percentages, coefficients, index numbers?).</p>
<h4>Writing about graphs</h4>
<ol><li>Locate the key words: title, labels, units, type of graph.</li>
<li>Identify the trend: max, min, steady value, sharp rise or drop.</li>
<li>Make notes: what is happening, the main change over time, the most noticeable thing, the pattern.</li></ol>
<p><b>Introduction:</b> first sentence describes the graph ("The graph shows…"); second sentence gives the overall trend ("Overall, …").</p>
<p><b>Describing the trend:</b> start with a sentence with no number ("City size increased sharply over the period."), follow with an example with a number, and keep alternating.</p>
<p><b>Don'ts:</b> don't say "x-axis"/"y-axis" — give the information; don't describe everything — pick the biggest, smallest, main trends and group similar things; don't write "the line went up" — write about the idea ("the number of people going to work by train increased gradually"); don't use "I feel", "as you can see" — keep it professional.</p>
<h4>Activities</h4>
<p>Activity 1 and 2: fill in the gaps of two graph descriptions (gold sales; consumption of butter, margarine and low-fat spreads 1981–2007). Activity 3: linear regression on wind data (Camborne, May 2015). Then a self-reflection: grade your confidence from 1 to 5.</p>`,
    fr: String.raw`
<h4>Les 4 types de données</h4>
<table><tr><th>Type</th><th>Comment on l'obtient</th><th>Exemple</th><th>Graphique conseillé</th></tr>
<tr><td><b>Discrète</b></td><td>en <b>comptant</b> (nombres entiers)</td><td>nombre de voitures par jour</td><td>barres, nuage de points</td></tr>
<tr><td><b>Continue</b></td><td>en <b>mesurant</b> (décimales possibles)</td><td>longueur 50,4 mm, tension 2,1 mV</td><td>courbe, nuage de points</td></tr>
<tr><td><b>Catégorielle</b></td><td>des catégories sans ordre</td><td>laiton, bois, verre, acier</td><td>camembert, barres</td></tr>
<tr><td><b>Ordinale</b></td><td>des catégories qu'on peut classer</td><td>faible / moyen / élevé</td><td>barres</td></tr></table>
<div class="ex"><div class="lab">Exemple concret — ton téléphone</div>
Le nombre de notifications par jour : <b>discrète</b> (on compte). Le temps d'écran en heures : <b>continue</b> (on mesure, 3,7 h). Les applis (Instagram, WhatsApp, YouTube) : <b>catégorielle</b> → camembert du temps passé par appli. Ton niveau de batterie « faible / moyen / plein » : <b>ordinale</b>.</div>

<h4>Un bon tableau de résultats</h4>
<ul><li>Une colonne pour ce que tu <b>fais varier</b> (variable indépendante, souvent à gauche) et une pour ce que tu <b>mesures</b> (variable dépendante).</li>
<li>Les <b>unités dans l'en-tête</b> : « Temps / s », jamais « 2 s, 3 s… » dans chaque case.</li>
<li>Des colonnes pour les <b>répétitions</b> (mesure 1, 2, 3) et une pour la <b>moyenne</b>.</li>
<li>Un titre : « Table 1 : … » <b>au-dessus</b> du tableau (préféré), ou « Figure 1 : … » <b>en dessous</b>.</li></ul>
<div class="tip"><div class="lab">Valeur aberrante</div>Dans l'exemple du cours, à 1,0 s on lit 0,218 ; 0,219 ; 0,172. Le 0,172 est très différent des deux autres : c'est une <b>anomalie</b>, on ne la prend pas dans la moyenne (0,219).</div>

<h4>Quel graphique choisir ?</h4>
<ul><li><b>Nuage de points</b> : pour voir si deux grandeurs sont liées (<b>corrélation</b> positive, négative ou nulle). Ex. : plus on tire sur un ressort, plus il s'allonge (loi de Hooke).</li>
<li><b>Droite</b> \(y=mx+c\) : \(m\) = pente, \(c\) = ordonnée à l'origine. Excel peut afficher l'équation de la droite (« trendline »).</li>
<li><b>Courbe</b> lisse : quand la relation n'est pas une droite (charge d'un condensateur, comme en Maths cette semaine).</li>
<li><b>Barres</b> : verticales, horizontales, groupées (plusieurs séries côte à côte), empilées (les parts s'additionnent).</li>
<li><b>Camembert</b> : les parts d'un tout, en pourcentages.</li></ul>
<div class="warnbox"><div class="lab">Un bon graphique a toujours</div>un <b>titre</b> (ou une légende « Figure 1 : … » en dessous), un <b>nom et une unité sur chaque axe</b>, et une <b>légende</b> s'il y a plusieurs séries. C'est exactement ce que regarde la grille de notation du devoir A.2.</div>

<h4>Écrire l'analyse d'un graphique</h4>
<ol><li><b>Repère</b> : titre, axes, unités, type de graphique.</li>
<li><b>Trouve la tendance</b> : maximum, minimum, palier, forte hausse, chute.</li>
<li><b>Introduction</b> en 2 phrases : « The graph shows… » puis « Overall, … » (la tendance générale).</li>
<li><b>Paragraphe</b> : une phrase sans chiffre (l'idée), puis une phrase avec un chiffre (la preuve), et on alterne.</li></ol>
<div class="ex"><div class="lab">Exemple concret — la pluie à Johor Bahru (chiffres inventés)</div>
« The graph shows the average monthly rainfall in Johor Bahru in 2025. Overall, rainfall was highest at the end of the year. » → idée : « Rainfall increased sharply in November. » → chiffre : « It rose from about 200 mm in October to over 300 mm in December. »</div>
<div class="warnbox"><div class="lab">À ne pas faire</div>
Ne pas écrire « l'axe des x montre… » : dis directement de quoi il s'agit.<br>
Ne pas tout décrire : garde le plus grand, le plus petit, les grandes tendances.<br>
Ne pas écrire « la courbe monte » : écris « la consommation a augmenté progressivement ».<br>
Pas de « I feel », « as you can see » : ton professionnel.</div>
<p>Vocabulaire des tendances : <i>rise / increase / grow</i> (monter), <i>fall / drop / decline / decrease</i> (baisser), <i>remain steady</i> (rester stable), <i>reach a peak</i> (atteindre un pic), <i>reach a low point</i> (atteindre un minimum), <i>double</i> (doubler), <i>recover</i> (remonter après une baisse). Et l'intensité : <i>slightly / gradually / steadily / sharply / dramatically</i>.</p>

<h4>Le lien avec le devoir A.2</h4>
<p>Le devoir A.2 (20 %) te demande exactement ces compétences sur des données d'énergie du Royaume-Uni (1970–2025) : calculs dans Excel avec des formules visibles, trois graphiques (dont un combiné et un camembert en %), puis 750 mots d'analyse. Les détails sont dans l'onglet <b>Devoirs</b>. Rappel : l'IA générative est <b>interdite</b> pour faire ce devoir ; tu peux seulement t'en servir pour comprendre le cours.</p>`,
    vocab: [
      ['discrete data', 'données discrètes', 'obtenues en comptant'],
      ['continuous data', 'données continues', 'obtenues en mesurant'],
      ['categoric data', 'données catégorielles'],
      ['ordered (ordinal) data', 'données ordinales'],
      ['independent variable', 'variable indépendante', 'ce qu\'on fait varier'],
      ['dependent variable', 'variable dépendante', 'ce qu\'on mesure'],
      ['header', 'en-tête (de colonne)'],
      ['repeatable / precise', 'reproductible / précis'],
      ['caption', 'légende (titre sous ou sur une figure)'],
      ['scatter graph', 'nuage de points'],
      ['correlation', 'corrélation'],
      ['line of best fit', 'droite (courbe) de tendance'],
      ['gradient / y-intercept', 'pente / ordonnée à l\'origine'],
      ['bar chart (grouped, stacked)', 'diagramme en barres (groupées, empilées)'],
      ['pie chart', 'diagramme circulaire (camembert)'],
      ['trend', 'tendance'],
      ['to reach a peak / a low point', 'atteindre un pic / un minimum'],
      ['sharply / gradually / steadily', 'fortement / progressivement / régulièrement'],
      ['linear regression', 'régression linéaire']
    ],
    formules: [
      { nom: 'Équation d\'une droite', tex: 'y = mx + c', why: 'm = pente (gradient), c = ordonnée à l\'origine.' },
      { nom: 'Moyenne', tex: '\\bar x = \\dfrac{x_1 + x_2 + \\dots + x_n}{n}', why: 'Moyenne des répétitions (sans les valeurs aberrantes).' },
      { nom: 'Pourcentage d\'une part (camembert)', tex: '\\% = \\dfrac{\\text{partie}}{\\text{total}} \\times 100', why: 'Angle de la part = % × 3,6°.' }
    ],
    exos: [
      { src: 'Blackboard', niveau: 1, en: 'R3 Activity 1: fill the gaps (words: remained, from, dropped, doubled, decline, a low point, sudden, recovered, rising, increased, slight, were, sharply, to). "In January, gold sales ___ about 200 million dirhams per month. In February they ___ to Dhs 220 million, ___ to a peak of Dhs 350 million in March. Over the next four months, sales ___ steadily, reaching ___ of Dhs 120 million in July. In August, there was a ___ increase. Sales almost ___, rising ___ Dhs 120 million in July to Dhs 210 million in August. This was followed by a ___ in September to Dhs 120 million. From September to October, sales ___ from Dhs 120 million to Dhs 180 million. In October and November, sales ___ steady, and there was a small increase in December ___ Dhs 190 million."', fr: 'Activité 1 : complète la description des ventes d\'or avec les bons mots.',
        sol: '<p>were · increased · rising · dropped · a low point · sudden · doubled · from · decline · recovered · remained · to. (« slight » et « sharply » ne servent pas.)</p>' },
      { src: 'Blackboard', niveau: 2, en: 'R3 Activity 2: complete the description of butter, margarine and low-fat spread consumption (1981–2007) with: a significant decrease, more popular, a significant rise, a steady downward trend, a sharp decline, reached a peak, exceeded, a marked increase.', fr: 'Activité 2 : complète la description (beurre, margarine, pâtes à tartiner allégées).',
        sol: '<p>1. a significant decrease · 2. a significant rise · 3. reached a peak · 4. a sharp decline · 5. exceeded · 6. a steady downward trend · 7. a marked increase · 8. more popular</p>' },
      { src: 'Blackboard', niveau: 2, en: String.raw`R3 Activity 3: daily mean windspeed \(w\) and daily maximum gust \(g\) (knots), Camborne, 1–15 May 2015: w = 14, 13, 13, 9, 18, 18, 7, 15, 10, 14, 11, 9, 8, 10, 7; g = 33, 37, 29, 23, 43, 38, 17, 30, 28, 29, 29, 23, 21, 28, 20. (1) Plot the data. (2) Describe the correlation. (3) The regression line is \(g=1.82w+7.23\): (i) interpret the gradient; (ii) justify the use of a linear regression.`, fr: 'Activité 3 : vent moyen et rafale maximale — corrélation et droite de régression.',
        sol: String.raw`<p>(2) Corrélation <b>positive</b> (assez forte) : les jours plus venteux ont des rafales plus fortes.<br>(3)(i) Quand la vitesse moyenne du vent augmente de 1 nœud, la rafale maximale augmente en moyenne d'environ <b>1,82 nœud</b>.<br>(ii) Les points sont à peu près alignés (relation linéaire, forte corrélation positive), donc une droite décrit bien les données.<br>Exemple : pour \(w=12\), \(g\approx1.82\times12+7.23=29.1\) nœuds.</p>` },
      { src: 'Claude', niveau: 1, en: 'Classify each data type and choose a graph: (a) number of students in each tutorial group; (b) temperature of a cooling cup of coffee every minute; (c) favourite mode of transport to campus; (d) satisfaction: poor / fair / good / excellent.', fr: 'Donne le type de données et le graphique adapté.',
        sol: '<p>(a) discrète → barres · (b) continue → courbe (temps en abscisse) · (c) catégorielle → camembert ou barres · (d) ordinale → barres (dans l\'ordre).</p>' },
      { src: 'Claude', niveau: 1, en: 'What is wrong with this table header: "Length | Force" with values "12 cm | 3 N", "15 cm | 4 N"?', fr: 'Qu\'est-ce qui ne va pas dans ce tableau ?',
        sol: '<p>Les unités doivent être dans l\'en-tête (« Length / cm », « Force / N ») et pas dans chaque case. Il manque aussi un titre (« Table 1: … »), et la variable indépendante (la force qu\'on applique) devrait être dans la première colonne.</p>' },
      { src: 'Claude', niveau: 2, en: 'Rewrite these sentences in a professional style: (a) "As you can see, the line goes up a lot in 2020." (b) "The y-axis shows the sales and the x-axis shows the years."', fr: 'Réécris ces phrases dans un style professionnel.',
        sol: '<p>(a) « Sales increased sharply in 2020. » (puis donne le chiffre). (b) « The graph shows annual sales between 2015 and 2025. »</p>' }
    ]
  };
})();
