// GENG0015 Coursework — Semaines 1 et 2 (Computer Applications)
// ⚠️ Les diapos de ce module sont en PowerPoint/Word (illisibles automatiquement) :
// contenu rédigé à partir des titres et documents Blackboard + connaissances générales.
(function () {
  const S = DATA.matieres.cw.semaines;

  S[1] = {
    titre: 'Computer Applications Week 1 — Digital Skills',
    titreFr: 'Applications informatiques S1 — Compétences numériques',
    resume: 'Faire le point sur tes compétences numériques (outil Jisc Discovery), te fixer des objectifs avec le modèle GROW, et remplir la Digital Capabilities Worksheet.',
    sources: 'GENG0015_Intro, Digital Skills slides, GROW model handout & examples, Jisc Discovery Tool (Blackboard) — slides PowerPoint non lisibles automatiquement, contenu reconstitué',
    en: String.raw`
<div class="warnbox"><div class="lab">Note</div>This week's slides are PowerPoint/Word files that the app cannot read automatically. This summary is based on the Blackboard materials' titles and structure plus general knowledge of the topics. Check the original slides on Blackboard.</div>
<h4>Module overview — GENG0015 Coursework</h4>
<p>The Coursework module groups the practical work of the Foundation Year: <b>Computer Applications (CA)</b> sessions and <b>laboratory</b> work linked to other modules (e.g. two Mechanical Science labs in Weeks 6 & 8). Labs lead to <b>formal reports</b> (Formal report 1 = 15 %, Formal report 2 = 35 %). CA labs run in room 2R004 by group.</p>
<h4>Digital skills / digital capabilities</h4>
<p>Digital capability is the set of skills you need to live, learn and work in a digital society. The Jisc framework describes six areas:</p>
<ol><li><b>ICT proficiency</b> — using devices, applications and software confidently.</li>
<li><b>Information, data and media literacies</b> — finding, evaluating, managing and sharing information and data.</li>
<li><b>Digital creation, problem solving and innovation</b> — creating digital content, solving problems with digital tools.</li>
<li><b>Digital communication, collaboration and participation</b>.</li>
<li><b>Digital learning and development</b> — using digital tools to learn.</li>
<li><b>Digital identity and wellbeing</b> — managing your online presence and wellbeing.</li></ol>
<p>The <b>Jisc Discovery Tool</b> is an online self-assessment questionnaire: it gives a personal report of your strengths and areas to develop, with suggested resources.</p>
<h4>The GROW model</h4>
<p>A simple coaching framework for setting and reaching goals:</p>
<ul><li><b>G — Goal:</b> what do you want to achieve? (specific, measurable, with a deadline)</li>
<li><b>R — Reality:</b> where are you now? What have you already tried? What are the obstacles?</li>
<li><b>O — Options:</b> what could you do? List several possibilities.</li>
<li><b>W — Way forward / Will:</b> what will you actually do, and when?</li></ul>
<p>Engineering student example: <i>Goal</i> — be confident building charts and formulas in Excel by Week 9. <i>Reality</i> — I only know basic sums. <i>Options</i> — LinkedIn Learning course, CA lab exercises, practise with lab data. <i>Way forward</i> — one 30-minute Excel video every Monday and redo the lab exercise each week.</p>
<h4>Task</h4>
<p>Complete the <b>Digital Capabilities Worksheet</b> on Blackboard (due 5 Oct), using your Discovery Tool report and the GROW model.</p>`,
    fr: String.raw`
<div class="warnbox"><div class="lab">À savoir</div>Les diapos de cette semaine sont en PowerPoint, et l'app ne peut pas les lire automatiquement. Ce résumé se base sur les documents Blackboard. Jette un œil aux diapos originales.</div>
<h4>Le module Coursework</h4>
<p>C'est le module des <b>travaux pratiques</b> : des séances d'informatique (Computer Applications, salle 2R004) et des <b>TP de labo</b> liés aux autres matières. Tu rendras des <b>comptes rendus de TP</b> (formal reports) : le 1er compte pour 15 %, le 2e pour 35 %.</p>

<h4>Les compétences numériques</h4>
<p>Être à l'aise avec le numérique, ce n'est pas juste savoir utiliser un téléphone : c'est savoir <b>trouver et trier l'info</b>, <b>créer</b> (un tableur, un rapport, un graphique), <b>collaborer</b> en ligne, <b>apprendre</b> avec des outils numériques et <b>gérer son identité en ligne</b>.</p>
<p>L'<b>outil Jisc Discovery</b> est un questionnaire d'auto-évaluation : à la fin, il te donne un rapport avec tes points forts, tes points à travailler et des ressources pour progresser.</p>

<h4>Le modèle GROW (se fixer un objectif)</h4>
<ul><li><b>G – Goal (objectif)</b> : qu'est-ce que je veux atteindre, précisément, et pour quand ?</li>
<li><b>R – Reality (réalité)</b> : où j'en suis aujourd'hui ? qu'est-ce qui me bloque ?</li>
<li><b>O – Options</b> : quelles sont toutes les solutions possibles ?</li>
<li><b>W – Way forward / Will (plan d'action)</b> : qu'est-ce que je fais concrètement, et quand ?</li></ul>
<div class="ex"><div class="lab">Exemple concret pour toi</div>
<b>G</b> : maîtriser Excel (formules, graphiques, courbe de tendance) avant le devoir de Routes to Success (fin novembre).<br>
<b>R</b> : je connais seulement les bases, je n'ai jamais fait de graphique avec une droite de tendance.<br>
<b>O</b> : vidéos LinkedIn Learning, refaire les exos du labo CA, m'entraîner avec les données des TD de maths (exos « Cartesian coordinates »).<br>
<b>W</b> : 30 min d'Excel tous les lundis soir, et je refais les exos de maths S1 dans Excel cette semaine.</div>

<h4>À rendre</h4>
<p>La <b>Digital Capabilities Worksheet</b> sur Blackboard (date limite : 5 oct.). Tu la remplis avec ton rapport Jisc et ton plan GROW.</p>`,
    vocab: [
      ['coursework', 'contrôle continu / travaux pratiques'], ['computer applications (CA)', 'applications informatiques'],
      ['digital skills / capabilities', 'compétences numériques'], ['self-assessment', 'auto-évaluation'],
      ['ICT proficiency', 'maîtrise des outils informatiques'], ['information literacy', 'maîtrise de l\'information'],
      ['digital identity', 'identité numérique'], ['wellbeing', 'bien-être'], ['goal', 'objectif'], ['reality', 'situation actuelle'],
      ['options', 'pistes / solutions possibles'], ['way forward / will', 'plan d\'action'], ['formal report', 'compte rendu (rapport) de TP'],
      ['spreadsheet', 'tableur'], ['handout', 'polycopié / fiche']
    ],
    formules: [],
    exos: [
      { src: 'Blackboard', niveau: 1, en: 'Complete the Jisc Discovery Tool self-assessment and note your three strongest and three weakest areas.', fr: 'Fais l\'auto-évaluation Jisc Discovery et note tes 3 points forts et tes 3 points faibles.',
        sol: '<p>Exercice personnel : garde ton rapport, il sert pour la Digital Capabilities Worksheet.</p>' },
      { src: 'Blackboard', niveau: 1, en: 'Using the GROW model, write a development plan for one digital skill you want to improve this semester.', fr: 'Avec le modèle GROW, écris un plan pour améliorer une compétence numérique ce semestre.',
        sol: '<p>Structure attendue : G (objectif précis + date), R (où j\'en suis), O (au moins 3 options), W (actions concrètes + calendrier). Voir l\'exemple dans le cours en français.</p>' },
      { src: 'Claude', niveau: 1, en: 'What do the four letters of GROW stand for? Give one question you would ask yourself for each.', fr: 'Que veulent dire les 4 lettres de GROW ? Donne une question à te poser pour chacune.',
        sol: '<p>Goal : « que veux-je atteindre ? » · Reality : « où en suis-je ? » · Options : « que pourrais-je faire ? » · Way forward : « que vais-je faire et quand ? »</p>' },
      { src: 'Claude', niveau: 2, en: 'Rewrite this vague goal as a SMART goal: "I want to get better at Excel."', fr: 'Réécris cet objectif flou en objectif SMART : « je veux être meilleur en Excel ».',
        sol: '<p>Ex. : « D\'ici le 16 novembre, je sais tracer un nuage de points avec une courbe de tendance et son équation dans Excel, en suivant 2 vidéos par semaine. » (Spécifique, Mesurable, Atteignable, Réaliste, Temporel.)</p>' }
    ]
  };

  S[2] = {
    titre: 'CA Week 2 — Information Literacy',
    titreFr: 'Applications informatiques S2 — Maîtrise de l\'information',
    resume: 'Trouver, évaluer et utiliser des sources fiables (bibliothèque, bases de données), éviter le plagiat, et ressources Office / LinkedIn Learning. Lecture obligatoire avant le 30 oct.',
    sources: 'Information Literacy slides, ESSENTIAL READING – Information Literacy, DigiSkills Metro Map, Office tutorials, LinkedIn Learning (Blackboard) — slides PowerPoint non lisibles automatiquement, contenu reconstitué',
    en: String.raw`
<div class="warnbox"><div class="lab">Note</div>This week's slides are a PowerPoint file. This summary follows the Blackboard structure (Information Literacy, Essential reading, DigiSkills Metro Map, Office & LinkedIn Learning resources) plus general knowledge. Check the original on Blackboard. <b>No CA lab this week</b> (announcement of 5 Oct).</div>
<h4>What is information literacy?</h4>
<p>Information literacy is the ability to <b>recognise</b> when information is needed, and to <b>find</b>, <b>evaluate</b>, <b>use</b> and <b>reference</b> it effectively and ethically.</p>
<h4>Finding information</h4>
<ul><li>Use the university <b>library search</b> and subject databases (e.g. engineering databases, e-books, journals) rather than only general web search.</li>
<li>Choose good <b>keywords</b>, synonyms, and use search operators: AND (narrows), OR (broadens), quotation marks for exact phrases, truncation (engin* → engine, engineer, engineering).</li>
<li>Know the types of source: books, journal articles (peer-reviewed), conference papers, standards, patents, reports, websites.</li></ul>
<h4>Evaluating sources — the CRAAP test</h4>
<ul><li><b>Currency</b> — is it recent enough?</li><li><b>Relevance</b> — does it answer my question, at the right level?</li>
<li><b>Authority</b> — who wrote it? Are they qualified?</li><li><b>Accuracy</b> — is it supported by evidence, reviewed?</li>
<li><b>Purpose</b> — why was it written: to inform, sell, persuade?</li></ul>
<h4>Using information ethically</h4>
<p>Always <b>cite</b> your sources in the text and in a reference list, using a consistent style (e.g. Harvard or IEEE in engineering). Copying, or paraphrasing without citing, is <b>plagiarism</b> — a breach of academic integrity.</p>
<h4>Digital literacy resources</h4>
<ul><li><b>Essential reading</b>: Information Literacy (Blackboard, complete by 30 Oct) and the <b>DigiSkills Metro Map</b>.</li>
<li>Additional: Excel in Microsoft Windows, Office tutorials, setting up and using <b>LinkedIn Learning</b> (free via the university), creating a LinkedIn profile, specialist digital skills resources for engineering students.</li></ul>`,
    fr: String.raw`
<div class="warnbox"><div class="lab">À savoir</div>Diapos en PowerPoint : ce résumé se base sur la structure Blackboard. <b>Pas de labo CA cette semaine</b> (annonce du 5 oct.). À faire : la lecture obligatoire « Information Literacy » avant le <b>30 octobre</b>.</div>
<h4>C'est quoi « information literacy » ?</h4>
<p>C'est savoir <b>trouver</b> la bonne information, <b>juger si elle est fiable</b>, l'<b>utiliser</b> correctement et <b>citer d'où elle vient</b>. À l'université, c'est indispensable pour tes rapports de TP et ton portfolio de Routes to Success (partie B).</p>

<h4>1. Trouver de l'info (mieux que Google)</h4>
<ul><li>Utilise la <b>recherche de la bibliothèque</b> de l'université : livres numériques, articles scientifiques, normes…</li>
<li>Choisis bien tes <b>mots-clés</b> (en anglais !) et combine-les :<br>
<b>AND</b> = les deux mots (moins de résultats, plus précis) · <b>OR</b> = l'un ou l'autre (plus de résultats) · <b>"guillemets"</b> = expression exacte · <b>engin*</b> = engine, engineer, engineering…</li></ul>
<div class="ex"><div class="lab">Exemple</div>Tu cherches des infos sur l'isolation thermique des maisons : <code>"thermal insulation" AND (house OR building)</code>.</div>

<h4>2. Vérifier si une source est fiable : le test CRAAP</h4>
<ul><li><b>C</b>urrency (actualité) : c'est récent ?</li>
<li><b>R</b>elevance (pertinence) : ça répond à ma question ?</li>
<li><b>A</b>uthority (autorité) : qui l'a écrit ? un expert, une université, un anonyme ?</li>
<li><b>A</b>ccuracy (exactitude) : il y a des preuves, des sources, une relecture par des pairs ?</li>
<li><b>P</b>urpose (but) : informer, vendre, convaincre ?</li></ul>
<div class="ex"><div class="lab">Exemple concret</div>Un article de blog d'une marque de panneaux solaires qui dit que « leurs panneaux sont les meilleurs » → objectif = <b>vendre</b>, pas fiable. Un article publié dans une revue scientifique relue par des pairs → bien plus fiable.</div>

<h4>3. Citer ses sources (et éviter le plagiat)</h4>
<p>Chaque idée, chiffre ou image qui ne vient pas de toi doit être <b>cité</b> : dans le texte, puis dans une liste de références à la fin, toujours dans le même style (Harvard ou IEEE en ingénierie). Copier, ou reformuler sans citer, c'est du <b>plagiat</b>, et les sanctions sont sévères à l'université.</p>

<h4>4. Ressources pour progresser</h4>
<p>Sur Blackboard : la <b>DigiSkills Metro Map</b> (lecture obligatoire), des tutos Office et Excel, et <b>LinkedIn Learning</b> (gratuit avec ton compte de l'université) : il y a plein de cours vidéo sur Excel, Word, la rédaction de rapports…</p>`,
    vocab: [
      ['information literacy', 'maîtrise de l\'information'], ['library search', 'catalogue / moteur de la bibliothèque'],
      ['database', 'base de données'], ['keyword', 'mot-clé'], ['search operator (AND / OR)', 'opérateur de recherche'],
      ['truncation', 'troncature (engin*)'], ['peer-reviewed', 'relu par des pairs (évalué par des experts)'], ['journal article', 'article de revue scientifique'],
      ['source', 'source'], ['reliable / credible', 'fiable / crédible'], ['to evaluate', 'évaluer'], ['bias', 'biais, parti pris'],
      ['to cite / citation', 'citer / citation'], ['reference list', 'bibliographie (liste de références)'], ['referencing style (Harvard, IEEE)', 'norme de citation'],
      ['plagiarism', 'plagiat'], ['academic integrity', 'intégrité académique'], ['to paraphrase', 'reformuler'], ['essential reading', 'lecture obligatoire']
    ],
    formules: [],
    exos: [
      { src: 'Blackboard', niveau: 1, en: 'Complete the ESSENTIAL READING – Information Literacy activity on Blackboard (due 30 Oct).', fr: 'Fais la lecture obligatoire « Information Literacy » sur Blackboard (avant le 30 oct.).',
        sol: '<p>À faire sur Blackboard, section « CA Week 2 ».</p>' },
      { src: 'Blackboard', niveau: 1, en: 'Read the DigiSkills Metro Map and choose two "stations" (skills) you will develop this term.', fr: 'Lis la DigiSkills Metro Map et choisis deux compétences à développer ce semestre.',
        sol: '<p>Exercice personnel. Astuce : relie-les à ton plan GROW de la semaine 1.</p>' },
      { src: 'Claude', niveau: 1, en: 'Write a library search string to find articles about the specific heat capacity of building materials.', fr: 'Écris une requête de recherche pour trouver des articles sur la chaleur massique des matériaux de construction.',
        sol: '<p>Ex. : <code>"specific heat capacity" AND ("building material*" OR concrete OR brick)</code></p>' },
      { src: 'Claude', niveau: 2, en: 'Apply the CRAAP test to a Wikipedia page about Young\'s modulus. Can you cite it in a lab report?', fr: 'Applique le test CRAAP à une page Wikipédia sur le module de Young. Peut-on la citer dans un rapport ?',
        sol: '<p>Currency : souvent à jour · Relevance : bonne pour comprendre · Authority : auteurs anonymes ✗ · Accuracy : variable · Purpose : informer. Conclusion : bien pour démarrer et trouver des sources, mais cite plutôt un manuel ou un article (les références en bas de la page Wikipédia peuvent t\'aider).</p>' },
      { src: 'Claude', niveau: 1, en: 'What is the difference between AND and OR in a database search?', fr: 'Quelle différence entre AND et OR dans une recherche ?',
        sol: '<p>AND : les deux termes doivent apparaître → moins de résultats, plus précis. OR : l\'un ou l\'autre → plus de résultats (utile pour les synonymes).</p>' }
    ]
  };
})();
