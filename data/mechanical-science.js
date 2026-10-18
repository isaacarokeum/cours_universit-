// GENG0003 Mechanical Science — Semaines 1 à 3
(function () {
  const S = DATA.matieres.ms.semaines;

  // =========================== SEMAINE 1 ===========================
  S[1] = {
    titre: 'Lecture 1 — Units and Dimensions',
    titreFr: 'Cours 1 — Unités et dimensions',
    resume: 'Les 7 grandeurs de base du SI, les préfixes, les dimensions (M, L, T) et comment vérifier qu\'une formule est cohérente.',
    sources: '2026-27 MS overview.pdf · MS L1 slides (filled) · Course notes L1.pdf · Worksheet 1 · WS1 marked student working (corrigé du prof, 8 oct.) (Blackboard)',
    en: String.raw`
<h4>Module overview</h4>
<ul><li><b>Lecture</b> (2R014, all students together) + <b>tutorial</b> (4 groups — attend your group only) + 2 <b>labs</b> in Weeks 6 & 8 (marked in GENG0015 Coursework).</li>
<li>All classes are in person; lectures are recorded and uploaded to Blackboard (no recordings for tutorials/labs).</li>
<li>Assessment: <b>exam at the end of Semester 2 = 100 %</b> of the module.</li>
<li>Semester 1 topics: elasticity, vectors, statics, torque, friction, linear motion, projectiles, rotation, linear momentum, work–energy–power, collisions.</li>
<li>Advice: study regularly, ask regularly, try tutorial questions on your own before looking at solutions.</li></ul>

<h4>Learning outcomes</h4>
<p>1. Understand the units and dimensions frequently used in mechanics. 2. Understand the consistency of dimensions in an equation.</p>

<h4>Quantities, units and dimensions</h4>
<p>There are seven fundamental (base) quantities, each with an SI unit. Other units can represent the same quantity, but <b>all units of a quantity have the same dimension</b>.</p>
<table><tr><th>Base quantity</th><th>Dimension</th><th>SI unit</th><th>Other units</th></tr>
<tr><td>Length</td><td>L</td><td>metre (m)</td><td>km, mm, in, mi</td></tr>
<tr><td>Mass</td><td>M</td><td>kilogram (kg)</td><td>g, ounce, pound</td></tr>
<tr><td>Time</td><td>T</td><td>second (s)</td><td>min, h, day</td></tr>
<tr><td>Temperature</td><td>K (Θ)</td><td>kelvin (K)</td><td>°C, °F</td></tr>
<tr><td>Electric current</td><td>I</td><td>ampere (A)</td><td></td></tr>
<tr><td>Luminous intensity</td><td>J</td><td>candela (cd)</td><td></td></tr>
<tr><td>Amount of substance</td><td>N</td><td>mole (mol)</td><td></td></tr></table>
<p><b>Derived quantities</b> are products of base quantities. In mechanics the dimensions that appear most are length, mass and time:</p>
<table><tr><th>Derived quantity</th><th>Dimension</th><th>SI unit</th></tr>
<tr><td>Area</td><td>L²</td><td>m²</td></tr><tr><td>Speed</td><td>L T⁻¹</td><td>m s⁻¹</td></tr>
<tr><td>Density</td><td>M L⁻³</td><td>kg m⁻³</td></tr><tr><td>Force</td><td>M L T⁻²</td><td>kg m s⁻² = N</td></tr></table>

<h4>Prefixes</h4>
<p>Prefixes act as multipliers: 1 kg = 10³ g, 1 TB = 10¹² B, 1 mm = 10⁻³ m, 1 µs = 10⁻⁶ s. Others: giga (10⁹), mega (10⁶), centi (10⁻²), nano (10⁻⁹).</p>

<h4>Adding, subtracting, multiplying, dividing</h4>
<p>We can only add or subtract quantities with the <b>same dimension</b> (convert them to the same unit first). 2 cm + 3 kg cannot be added. We can multiply or divide quantities of any dimensions, which creates a new quantity: 3 m × 4 m = 12 m²; 2 N × 3 m = 6 N m (work); m ÷ s = m s⁻¹; m s⁻¹ ÷ s = m s⁻².</p>

<h4>Dimensionless quantities</h4>
<p>Some quantities have no dimension and no unit, e.g. <b>strain</b> = change of length ÷ original length, <b>Mach number</b> = speed of object ÷ speed of sound.</p>

<h4>From the course notes (L1)</h4>
<p>The SI system has four advantages: <b>uniformity</b> (the same unit for the same quantity in all branches, e.g. the watt for mechanical and electrical power), <b>coherence</b> (the product or ratio of basic units gives the unit of the result: joule = watt × second), <b>consistency</b> (one basic unit per quantity) and <b>manageability</b> (powers of 10). Supplementary dimensionless units: radian (plane angle) and steradian (solid angle).</p>
<p><b>Area</b>: 1 m² = 100 dm² = 10 000 cm² = 10⁶ mm². <b>Volume</b>: 1 m³ = 1000 dm³ = 10⁶ cm³ = 10⁹ mm³; 1 dm³ = 1 litre, 1 cm³ = 1 ml. <b>Mass</b>: 1 tonne = 1 Mg = 1000 kg. <b>Density</b> (kg m⁻³): water ≈ 1000 kg m⁻³. When converting from large to small units, the number must get BIGGER.</p>
<p><b>Speed</b> has no direction and is always positive; <b>velocity</b> has a direction and can be negative. <b>Acceleration</b> (m s⁻²) is the rate of change of velocity: final velocity = initial velocity + acceleration × time. The acceleration due to gravity is \(g\approx9.81\) m s⁻² (standard 9.80665), independent of mass.</p>
<p><b>Force</b> = mass × acceleration, unit the newton (1 N = 1 kg m s⁻²). The <b>weight</b> of a body is the force \(mg\). <b>Mass</b> is the quantity of matter and is not affected by gravity; weight depends on gravity.</p>
<div class="ex"><div class="lab">Course notes examples</div>
1a: triangle, base 300 cm and height 700 cm → 3 m × 7 m / 2 = 10.5 m². · 1c: tank 4 × 3 × 2 m = 24 m³ = 24 000 litres. · 1d: steel block 200 × 100 × 60 mm, 9.42 kg → V = 0.0012 m³ → ρ = 7850 kg m⁻³. · 1g: 120 m s⁻¹ = 120 × 3600 / 1000 = 432 km h⁻¹. · 1h: 20 km h⁻¹ for 5 min → (20 000/3600) × 300 = 1667 m. · 1m: from 35 m s⁻¹ at −5 m s⁻², time to stop = 35/5 = 7 s.</div>
<h4>Dimensional consistency</h4>
<p>In a valid equation, every term must have the same dimension. (a) \(v=u+at\): \(v\) and \(u\) are L T⁻¹, \(at\) is (L T⁻²)(T) = L T⁻¹ → consistent. (b) \(F=ma^2\): F is M L T⁻², \(ma^2\) is M L² T⁻⁴ → the equation is wrong.</p>
<p>But consistency is not proof: \(s=ut+at^2\) is dimensionally consistent but the correct equation is \(s=ut+\tfrac12at^2\). A dimension check is an <b>initial check</b> that can detect a wrong equation.</p>`,
    fr: String.raw`
<h4>Le module en bref</h4>
<p>Cours magistral pour tout le monde + TD par groupe + 2 TP (semaines 6 et 8, notés dans Coursework). <b>Toute la note vient de l'examen de fin d'année (semestre 2).</b> Donc ce qui compte, c'est de travailler régulièrement les feuilles de TD.</p>

<h4>Grandeur, unité, dimension : quelle différence ?</h4>
<ul><li>La <b>grandeur</b>, c'est ce qu'on mesure : une longueur, une masse, un temps…</li>
<li>L'<b>unité</b>, c'est l'étalon qu'on choisit : mètre, pied, mile… pour une longueur.</li>
<li>La <b>dimension</b>, c'est la « nature » de la grandeur : une longueur est toujours de dimension <b>L</b>, qu'on l'exprime en mètres ou en miles.</li></ul>
<div class="ex"><div class="lab">Exemple concret</div>La distance Marrakech–Casablanca : 240 km, ou 240 000 m, ou 149 miles. Trois unités différentes, mais une seule dimension : L.</div>

<p>Il y a <b>7 grandeurs de base</b> dans le SI. En mécanique, on utilise surtout 3 : <b>masse M</b> (kg), <b>longueur L</b> (m) et <b>temps T</b> (s). Toutes les autres grandeurs mécaniques se construisent avec elles :</p>
<ul><li>vitesse = distance ÷ temps → L T⁻¹ (m/s)</li>
<li>accélération = vitesse ÷ temps → L T⁻² (m/s²)</li>
<li>force = masse × accélération → M L T⁻² (kg·m/s² = <b>newton</b>)</li>
<li>masse volumique = masse ÷ volume → M L⁻³ (kg/m³)</li></ul>

<h4>Les préfixes</h4>
<p>Ce sont des multiplicateurs : k = 10³, M = 10⁶, G = 10⁹, T = 10¹², c = 10⁻², m = 10⁻³, µ = 10⁻⁶, n = 10⁻⁹.</p>
<div class="warnbox"><div class="lab">Piège</div>Pour les surfaces et volumes, le préfixe est aussi au carré ou au cube ! 1 m² = (1000 mm)² = 10⁶ mm². 1 L = 1 dm³ = 10⁶ mm³.</div>

<h4>Les règles de calcul</h4>
<p><b>Additionner / soustraire</b> : seulement des grandeurs de même dimension, et après les avoir mises dans la même unité. 2 m + 3 cm = 2,03 m. Mais 2 cm + 3 kg n'a aucun sens (comme additionner des pommes et des voitures).</p>
<p><b>Multiplier / diviser</b> : toujours possible, et ça crée une nouvelle grandeur. Force × distance = travail (N·m = J).</p>
<p><b>Grandeurs sans dimension</b> : un rapport de deux grandeurs de même dimension. La déformation (strain) = allongement ÷ longueur initiale : m ÷ m, donc pas d'unité. Le nombre de Mach : un avion à Mach 2 va 2 fois plus vite que le son.</p>

<h4>Masse ≠ poids</h4>
<p>La <b>masse</b> (kg), c'est la quantité de matière : la même sur Terre et sur la Lune. Le <b>poids</b>, c'est une <b>force</b> (en newtons) : \(P=mg\), avec \(g\approx9{,}81\) m/s². Un élève de 60 kg pèse 60 × 9,81 ≈ 589 N sur Terre, mais seulement ≈ 97 N sur la Lune (\(g\approx1{,}6\)). Sa masse reste 60 kg.</p>
<div class="ex"><div class="lab">Exemples des notes de cours</div>
• Une cuve de 4 m × 3 m × 2 m = 24 m³ = <b>24 000 litres</b> (1 m³ = 1000 L).<br>
• Un bloc d'acier de 200 × 100 × 60 mm pèse 9,42 kg : V = 0,2 × 0,1 × 0,06 = 0,0012 m³ → ρ = 9,42 / 0,0012 = <b>7850 kg/m³</b>.<br>
• Un train à 120 m/s : 120 × 3,6 = <b>432 km/h</b>.<br>
• Une voiture à 20 km/h pendant 5 min : convertis tout en SI d'abord : 5,56 m/s × 300 s ≈ <b>1667 m</b>.</div>
<div class="tip"><div class="lab">Astuce des notes</div>Quand tu passes d'une grande unité à une petite (m → mm), le nombre doit <b>grossir</b>. Dans l'autre sens, il doit <b>diminuer</b>.</div>
<div class="warnbox"><div class="lab">Les erreurs corrigées par le prof (Worksheet 1)</div>
Le Dr Beh a publié les copies corrigées des étudiants. Les erreurs qu'il entoure le plus :
<ul><li><b>Confondre unité et dimension</b> : la dimension de la masse est <b>M</b>, pas « kg ». Écrire « Force = kg m s⁻² » donne l'<i>unité</i>, pas la <i>dimension</i> (M L T⁻²). Pareil pour la puissance : « J s⁻¹ » est une unité, la dimension est M L² T⁻³.</li>
<li><b>Les puissances négatives</b> : m s⁻² donne L T⁻² (et pas L T⁻¹).</li>
<li><b>Diviser par une dimension</b> : M ÷ L³ = M L⁻³ (on passe l'exposant en négatif).</li>
<li><b>Écrire l'unité finale</b> : une réponse sans unité (ex. « 2034 » au lieu de « 2034 mm ») est incomplète.</li></ul>
Les bonnes réponses de la feuille sont celles de la page Exercices (2034 mm ; 3,004005 g ; 2002,002 GB ; 3,2 L ; 128 km/h ; 4,2 cm² et 420 mm² ; 144 mm ; M L⁻³, M L T⁻², M L⁻¹ T⁻², M L² T⁻², M L² T⁻³).</div>
<h4>Vérifier une formule avec les dimensions</h4>
<p>Dans une formule juste, <b>tous les termes ont la même dimension</b>. C'est un super réflexe à l'examen pour repérer une erreur.</p>
<div class="ex"><div class="lab">Exemple</div>
\(v=u+at\) : \([v]=\) L T⁻¹ ; \([at]=\) L T⁻² × T = L T⁻¹ ✓ cohérent.<br>
\(F=ma^2\) : \([F]=\) M L T⁻² mais \([ma^2]=\) M L² T⁻⁴ ✗ → formule fausse.</div>
<div class="tip"><div class="lab">Limite</div>Une formule cohérente n'est pas forcément juste : \(s=ut+at^2\) est cohérente mais la bonne formule est \(s=ut+\tfrac12at^2\). Les dimensions ne voient pas les nombres comme ½ ou 2π.</div>`,
    vocab: [
      ['weight', 'poids (une force, en N)'], ['acceleration due to gravity (g)', 'accélération de la pesanteur'], ['litre / millilitre', 'litre / millilitre'], ['tonne', 'tonne (1000 kg)'],
      ['quantity', 'grandeur'], ['unit', 'unité'], ['dimension', 'dimension'],
      ['base / fundamental quantity', 'grandeur de base / fondamentale'], ['derived quantity', 'grandeur dérivée'],
      ['length', 'longueur'], ['mass', 'masse'], ['time', 'temps'],
      ['electric current', 'courant électrique'], ['luminous intensity', 'intensité lumineuse'], ['amount of substance', 'quantité de matière'],
      ['speed / velocity', 'vitesse (scalaire / vectorielle)'], ['acceleration', 'accélération'],
      ['density', 'masse volumique'], ['force', 'force'], ['work', 'travail'], ['power', 'puissance'], ['pressure', 'pression'],
      ['prefix', 'préfixe'], ['dimensionless', 'sans dimension'], ['strain', 'déformation (relative)'],
      ['dimensional consistency', 'homogénéité des dimensions'], ['tutorial', 'TD'], ['worksheet', 'feuille d\'exercices']
    ],
    formules: [
      { nom: 'Vitesse', tex: '[v] = \\mathrm{L\\,T^{-1}} \\quad (\\mathrm{m\\,s^{-1}})', why: '' },
      { nom: 'Accélération', tex: '[a] = \\mathrm{L\\,T^{-2}} \\quad (\\mathrm{m\\,s^{-2}})', why: '' },
      { nom: 'Force (2e loi de Newton)', tex: 'F = ma \\;\\Rightarrow\\; [F] = \\mathrm{M\\,L\\,T^{-2}} = \\mathrm{N}', why: '1 N = 1 kg·m·s⁻².' },
      { nom: 'Masse volumique', tex: '\\rho = \\dfrac{m}{V} \\;\\Rightarrow\\; [\\rho] = \\mathrm{M\\,L^{-3}}', why: '' },
      { nom: 'Pression', tex: 'p = \\dfrac{F}{A} \\;\\Rightarrow\\; [p] = \\mathrm{M\\,L^{-1}\\,T^{-2}} = \\mathrm{Pa}', why: '' },
      { nom: 'Énergie / travail', tex: 'W = F\\,d \\;\\Rightarrow\\; [W] = \\mathrm{M\\,L^{2}\\,T^{-2}} = \\mathrm{J}', why: '' },
      { nom: 'Puissance', tex: 'P = \\dfrac{W}{t} \\;\\Rightarrow\\; [P] = \\mathrm{M\\,L^{2}\\,T^{-3}} = \\mathrm{W}', why: '' }
    ],
    exos: [
      { src: 'Blackboard', niveau: 1, en: 'Express in the required units: (a) 2 m + 3 cm + 4 mm, in millimetres (b) 3 g + 4 mg + 5 µg, in grams (c) 1 hour + 2 minutes + 3 seconds, in seconds', fr: 'Exprime dans l\'unité demandée.',
        sol: '<p>(a) 2000 + 30 + 4 = <b>2034 mm</b> · (b) 3 + 0,004 + 0,000005 = <b>3,004005 g</b> · (c) 3600 + 120 + 3 = <b>3723 s</b></p>' },
      { src: 'Blackboard', niveau: 1, en: 'Express in the required units: (d) 2 TB + 2 GB + 2 MB, in gigabytes (e) 2.5 litres + 700 ml, in litres (f) 30 m s⁻¹ + 20 km h⁻¹, in km h⁻¹', fr: 'Exprime dans l\'unité demandée.',
        sol: '<p>(d) 2000 + 2 + 0,002 = <b>2002,002 GB</b> · (e) 2,5 + 0,7 = <b>3,2 L</b> · (f) 30 m/s × 3,6 = 108 km/h ; + 20 = <b>128 km/h</b></p>' },
      { src: 'Blackboard', niveau: 1, en: 'The sides of a rectangle are 3.5 cm and 12 mm. Express its area in cm² and mm².', fr: 'Les côtés d\'un rectangle font 3,5 cm et 12 mm. Donne l\'aire en cm² et en mm².',
        sol: '<p>3,5 cm × 1,2 cm = <b>4,2 cm²</b> = 35 mm × 12 mm = <b>420 mm²</b>.</p>' },
      { src: 'Blackboard', niveau: 2, en: 'The volume of a cubic box is 3 litres. What is the length of each side in mm?', fr: 'Une boîte cubique a un volume de 3 L. Quelle est la longueur d\'un côté en mm ?',
        sol: String.raw`<p>3 L = 3 dm³ = 3 × 10⁶ mm³. Côté = \(\sqrt[3]{3\times10^6}\approx\) <b>144 mm</b>.</p>` },
      { src: 'Blackboard', niveau: 2, en: 'Find the dimension of: (a) density = mass ÷ volume (b) force = mass × acceleration (c) pressure = force ÷ area (d) energy = force × distance (e) power = energy ÷ time', fr: 'Trouve la dimension de chaque grandeur.',
        sol: '<p>(a) M L⁻³ · (b) M L T⁻² · (c) M L⁻¹ T⁻² · (d) M L² T⁻² · (e) M L² T⁻³</p>' },
      { src: 'Blackboard', niveau: 1, en: 'Course notes 1e: A rectangular tank is 22 m long and 10 m wide. What depth of water is contained in it if the mass of the water is 660 tonnes?', fr: 'Une cuve fait 22 m × 10 m. Quelle est la hauteur d\'eau si la masse d\'eau est de 660 tonnes ?',
        sol: '<p>profondeur = m / (L × l × ρ) = 660 000 / (22 × 10 × 1000) = <b>3 m</b>.</p>' },
      { src: 'Blackboard', niveau: 1, en: 'Course notes 1i: A train travels 100 km in 1 hour 40 minutes. What is its average speed in m s⁻¹?', fr: 'Un train parcourt 100 km en 1 h 40. Vitesse moyenne en m/s ?',
        sol: '<p>100 000 m / 6000 s ≈ <b>16,7 m/s</b>.</p>' },
      { src: 'Blackboard', niveau: 1, en: 'Course notes 1k–1m: (k) A car decelerates uniformly at 5 m s⁻² from 20 m s⁻¹: speed after 3 s? (l) A train goes from 10 m s⁻¹ with 5 m s⁻² for 5 s: final speed? (m) It then slows down at 5 m s⁻²: time to stop?', fr: 'Accélérations : (k) vitesse après 3 s ; (l) vitesse finale ; (m) temps pour s\'arrêter.',
        sol: '<p>(k) 20 − 5 × 3 = <b>5 m/s</b> · (l) 10 + 5 × 5 = <b>35 m/s</b> · (m) 35 / 5 = <b>7 s</b></p>' },
      { src: 'Claude', niveau: 1, en: String.raw`Is the equation \(v^2=u^2+2as\) dimensionally consistent?`, fr: 'Cette équation est-elle homogène ?',
        sol: String.raw`<p>\([v^2]=\) L² T⁻² ; \([as]=\) L T⁻² × L = L² T⁻² ✓ cohérente.</p>` },
      { src: 'Claude', niveau: 2, en: String.raw`A student writes the period of a pendulum as \(T=2\pi\sqrt{g/L}\). Use dimensions to show it is wrong, and correct it.`, fr: 'Un élève écrit la période d\'un pendule ainsi. Montre avec les dimensions que c\'est faux, puis corrige.',
        sol: String.raw`<p>\(\sqrt{g/L}=\sqrt{\mathrm{L\,T^{-2}}/\mathrm{L}}=\) T⁻¹, ce n'est pas un temps ✗. La bonne formule : \(T=2\pi\sqrt{L/g}\) → \(\sqrt{\mathrm{T^2}}=\) T ✓.</p>` },
      { src: 'Claude', niveau: 1, en: 'Convert 72 km/h to m/s, and 1 g/cm³ to kg/m³.', fr: 'Convertis 72 km/h en m/s, et 1 g/cm³ en kg/m³.',
        sol: '<p>72 ÷ 3,6 = <b>20 m/s</b>. 1 g/cm³ = 10⁻³ kg / 10⁻⁶ m³ = <b>1000 kg/m³</b> (l\'eau).</p>' },
      { src: 'Claude', niveau: 2, en: 'Kinetic energy is E = ½mvⁿ. Use dimensions to find n.', fr: 'L\'énergie cinétique s\'écrit E = ½mvⁿ. Trouve n avec les dimensions.',
        sol: '<p>[E] = M L² T⁻² et [m vⁿ] = M Lⁿ T⁻ⁿ. Donc n = 2.</p>' }
    ]
  };

  // =========================== SEMAINE 2 ===========================
  S[2] = {
    titre: 'Lectures 2 & 3 — Elasticity 1 & 2',
    titreFr: 'Cours 2 et 3 — Élasticité (ressorts, contraintes, coefficient de sécurité)',
    resume: 'Loi de Hooke, ressorts en série/parallèle, contrainte, déformation, module de Young, cisaillement, compression uniforme et coefficient de sécurité.',
    sources: 'MS L2 & L3 slides (filled) · Course notes L2.pdf & L3.pdf · Worksheet 2 · WS2 marked student working (corrigé du prof, 12 oct.) (Blackboard)',
    en: String.raw`
<h4>Lecture 2 — Elasticity 1</h4>
<p><b>Learning outcomes:</b> apply Hooke's Law to systems of springs and materials; calculate stress, strain and Young's modulus.</p>
<h5>Hooke's Law</h5>
<p>Credited to Robert Hooke (1635–1703). If a tensile (stretching) force \(F\) is applied to a spring with spring constant \(k\), the extension is \(\Delta L=F/k\), i.e. \(F=k\,\Delta L\). SI unit of \(k\): N m⁻¹ (also kN m⁻¹ or N mm⁻¹).</p>
<p>A spring with a high \(k\) is <b>stiff</b> (hard to stretch, small extension); a small \(k\) means a <b>soft</b> spring. Hooke's Law also applies to bars and wires, and to compression. On a graph of \(F\) against \(\Delta L\), the straight part is the <b>elastic region</b> (gradient = \(k\)); when the graph curves, Hooke's Law is no longer valid: that is the <b>plastic region</b>.</p>
<div class="ex"><div class="lab">Example</div>A spring extends by 2 mm under 45 N. \(k=45/0.002=22\,500\) N m⁻¹. Under 100 N: \(\Delta L=100/22\,500=4.44\) mm.</div>
<h5>Series and parallel springs</h5>
<p><b>Series:</b> \(k_{total}=\dfrac{k_Ak_B}{k_A+k_B}\) (identical springs: \(k/2\)). Springs in series are <b>softer</b> than either spring. e.g. 2 and 3 N m⁻¹ → 1.2 N m⁻¹; 3 and 3 → 1.5 N m⁻¹.</p>
<p><b>Parallel:</b> \(k_{total}=k_A+k_B\) (identical: \(2k\)). Springs in parallel are <b>stiffer</b>.</p>
<h5>Stress, strain and Young's modulus</h5>
<ul><li>Stress \(\sigma=F/A\) (force ÷ cross-section area), unit pascal (Pa) = N m⁻².</li>
<li>Strain \(\varepsilon=\Delta L/L\) (change of length ÷ original length), no unit; often in microstrain (µε = 10⁻⁶).</li>
<li>Young's modulus \(E=\sigma/\varepsilon\), unit Pa (usually MPa or GPa).</li></ul>
<p>Combining: \(E=\dfrac{FL}{A\,\Delta L}\Rightarrow \Delta L=\dfrac{FL}{AE}\), and from Hooke \(k=\dfrac{AE}{L}\): the spring constant is <b>not</b> the same as Young's modulus.</p>
<div class="ex"><div class="lab">Example</div>A steel bar (E = 200 GPa), cross-section 5 mm × 20 mm, length 100 mm, supports 500 N. \(A=100\) mm² = 10⁻⁴ m², \(\sigma=500/10^{-4}=5\) MPa (compressive), \(\varepsilon=5\times10^6/200\times10^9=25\) µε.</div>

<h5>From the course notes (L2)</h5>
<p>Stiffness \(k\) depends on the wire's dimensions: twice the cross-section → half the extension; twice the length → twice the extension. Young's modulus \(E=\dfrac{kL}{A}\) is independent of the dimensions: an intrinsic property depending on the forces binding the atoms. Typical values ~100 GPa (1 GPa = 1 kN mm⁻²).</p>
<table><tr><th>Material</th><th>E (GPa)</th><th>G (GPa)</th><th>B (GPa)</th><th>Tensile strength (MPa)</th></tr>
<tr><td>Aluminium</td><td>71</td><td>26</td><td>74</td><td>150–450</td></tr><tr><td>Copper</td><td>130</td><td>48</td><td>138</td><td>300–500</td></tr>
<tr><td>Iron</td><td>211</td><td>82</td><td>170</td><td>400–600</td></tr><tr><td>Lead</td><td>17</td><td>5.5</td><td>46</td><td>10–15</td></tr>
<tr><td>Tin</td><td>45</td><td>18</td><td>58</td><td>100–150</td></tr><tr><td>Brass</td><td>37</td><td>37</td><td>112</td><td>350–550</td></tr>
<tr><td>Mild steel</td><td>212</td><td>82</td><td>169</td><td>1000–1200</td></tr></table>
<div class="ex"><div class="lab">Course notes examples</div>2a: bar 5 × 20 mm supports 500 kg → F = 4905 N, A = 10⁻⁴ m², σ = 49 MPa. · 2b: 2 m wire extends 0.25 mm → ε = 1.25 × 10⁻⁴. · 2c: 1 m steel rod, 100 MPa, extension 0.5 mm → ε = 5 × 10⁻⁴, E = 200 GPa.</div>
<h4>Lecture 3 — Elasticity 2</h4>
<p><b>Learning outcomes:</b> calculate normal, shear and bulk stresses; calculate the safety factor.</p>
<h5>Shear stress</h5>
<p>A force acting <b>parallel</b> to a surface is a shear force. Shear stress \(\tau=F/A\). Shear strain \(\gamma\) is the angle between the undeformed and deformed shape. Shear modulus \(G=\tau/\gamma\). Everyday examples: knife, hole puncher, scissors.</p>
<ul><li>Punching a hole of diameter \(D\) in a plate of thickness \(h\): the sheared area is the side of the cylinder, \(A=\pi Dh\).</li>
<li>A rivet joining two plates pulled in opposite directions: the sheared area is the rivet cross-section, \(A=\pi d^2/4\).</li></ul>
<h5>Bending</h5>
<p>A deck of cards shears (edges stay straight); a block of jelly bends: one side is stretched, the other compressed — a combination of shear and normal effects.</p>
<h5>Bulk (hydraulic) stress</h5>
<p>From the course notes: a body taken down to the sea bed feels <b>hydrostatic pressure</b> in all directions: \(p=h\rho g\). At 1 km depth: \(10^3\times10^3\times10=10^7\) Pa (≈ 100 atmospheres). Hydraulic strain = \(\Delta V/V\), and hydraulic stress = bulk modulus × hydraulic strain, \(p=B\,\Delta V/V\). Example 3a: water (B = 2.2 GPa) at 4000 m: \(\Delta V/V=4\times10^7/2.2\times10^9=1.8\,\%\); for iron (B = 170 GPa) only 0.025 %.</p>
<h5>Tensile testing (course notes)</h5>
<p>On the stress–strain curve of a <b>ductile</b> material: O→P straight (P = <b>limit of proportionality</b>), Q = <b>elastic limit</b> (beyond it a permanent strain remains), R = <b>yield point</b> (extension with little extra load), S = maximum stress = <b>ultimate tensile strength</b>, T = <b>fracture</b>. A <b>brittle</b> material fails before or near the yield point. Compressive and shear strengths are defined similarly.</p>
<p>Force applied equally in all directions, perpendicular to the surface. Bulk stress = force ÷ area; bulk strain = \(\Delta V/V\); bulk modulus \(B\) = bulk stress ÷ bulk strain.</p>
<h5>Strength and safety factor</h5>
<p>The <b>ultimate tensile strength (UTS)</b> is the maximum stress an object can support. In practice we apply less: applied stress = UTS ÷ safety factor. The safety factor is dimensionless and greater than 1. e.g. UTS 100 MPa with SF 2 → 50 MPa applied.</p>
<div class="ex"><div class="lab">Example</div>A wire of 1 mm² with UTS 100 MPa and SF 10: allowed stress 10 MPa → \(F=10\times10^6\times10^{-6}=10\) N → \(m=10/9.81\approx1.02\) kg.</div>`,
    fr: String.raw`
<h4>1. La loi de Hooke (les ressorts)</h4>
<p>Quand tu tires sur un ressort, il s'allonge. Tant que tu ne tires pas trop fort, <b>l'allongement est proportionnel à la force</b> : si tu tires 2 fois plus fort, il s'allonge 2 fois plus. C'est la loi de Hooke : \(F=k\,\Delta L\).</p>
<ul><li>\(k\) = <b>raideur</b> du ressort (N/m) : grand \(k\) = ressort dur (amortisseur de voiture), petit \(k\) = ressort mou (ressort de stylo).</li>
<li>Ça marche aussi pour une barre ou un fil d'acier (ils s'allongent un tout petit peu), et en compression.</li></ul>
<p>Sur le graphe force/allongement : la partie droite = <b>zone élastique</b> (le matériau revient à sa forme si on lâche). Quand la courbe se plie = <b>zone plastique</b> : déformation permanente (comme un trombone que tu as trop tordu).</p>
<div class="ex"><div class="lab">Exemple concret</div>Tu accroches un sac de 5 kg (≈ 49 N) à un peson à ressort et il descend de 2 cm. \(k=49/0{,}02=2450\) N/m. Avec 10 kg, il descendra de 4 cm.</div>

<h4>2. Ressorts en série et en parallèle</h4>
<p><b>En série</b> (l'un au bout de l'autre) : chaque ressort porte toute la force, donc les allongements s'additionnent → l'ensemble est <b>plus mou</b>. \(k_{tot}=\frac{k_Ak_B}{k_A+k_B}\). Deux ressorts identiques → \(k/2\).</p>
<p><b>En parallèle</b> (côte à côte) : ils se partagent la force → l'ensemble est <b>plus raide</b>. \(k_{tot}=k_A+k_B\). Deux identiques → \(2k\). Ex : les 4 ressorts d'une suspension de voiture.</p>
<div class="tip"><div class="lab">Astuce mémo</div>C'est l'inverse des résistances électriques : les ressorts en <b>parallèle</b> s'additionnent directement.</div>

<h4>3. Contrainte, déformation, module de Young</h4>
<p>Le problème avec \(k\) : il dépend de la taille de l'objet. Pour décrire le <b>matériau</b> lui-même, on utilise :</p>
<ul><li><b>Contrainte</b> (stress) \(\sigma=F/A\) : la force par unité de surface (Pa). Un fil fin casse plus vite qu'un gros sous la même force, car la contrainte est plus grande.</li>
<li><b>Déformation</b> (strain) \(\varepsilon=\Delta L/L\) : l'allongement relatif, sans unité. Souvent en microstrain : 1 µε = 0,000001.</li>
<li><b>Module de Young</b> \(E=\sigma/\varepsilon\) : la « raideur » du matériau. Acier ≈ 200 GPa, aluminium ≈ 70 GPa, caoutchouc ≈ 0,01 GPa.</li></ul>
<div class="ex"><div class="lab">Exemple pas à pas</div>Un fil d'acier de 2 m, section 1 mm², porte 100 N. \(\sigma=100/10^{-6}=100\) MPa. \(\varepsilon=\sigma/E=100\times10^6/200\times10^9=5\times10^{-4}\). Allongement : \(\Delta L=\varepsilon L=0{,}001\) m = 1 mm.</div>
<div class="warnbox"><div class="lab">Piège des unités</div>Mets tout en SI : mm² → m² (× 10⁻⁶), MPa → Pa (× 10⁶), GPa → Pa (× 10⁹). Astuce : 1 N/mm² = 1 MPa.</div>

<h4>4. Cisaillement (shear)</h4>
<p>Quand la force est <b>parallèle</b> à la surface (et non perpendiculaire), elle fait glisser les couches de matière les unes sur les autres : c'est le cisaillement. Contrainte de cisaillement \(\tau=F/A\). Exemples : ciseaux, perforatrice, couteau.</p>
<p>Le plus dur : trouver <b>la bonne surface</b>, celle qui « glisse ».</p>
<ul><li><b>Perforatrice</b> : on découpe un disque de diamètre \(D\) dans une plaque d'épaisseur \(h\) → la surface cisaillée est le tour du trou : \(A=\pi D h\).</li>
<li><b>Rivet</b> entre deux plaques tirées en sens opposés → la surface cisaillée est la section du rivet : \(A=\pi d^2/4\).</li></ul>
<p>Flexion : quand tu plies une règle, le dessus s'allonge et le dessous se comprime.</p>

<h4>5. Compression uniforme (bulk)</h4>
<p>Une pression qui s'applique <b>de tous les côtés</b> (comme un objet au fond de la mer). Contrainte = force/surface, déformation = \(\Delta V/V\), module de compressibilité \(B\).</p>

<h4>Ce que montre un essai de traction</h4>
<p>On tire sur une éprouvette de plus en plus fort et on trace contrainte/déformation :</p>
<ol><li><b>P – limite de proportionnalité</b> : jusque-là, c'est une droite (loi de Hooke).</li>
<li><b>Q – limite élastique</b> : au-delà, le matériau garde une déformation permanente.</li>
<li><b>R – limite d'écoulement (yield)</b> : il s'allonge presque sans qu'on ajoute de force.</li>
<li><b>S – résistance maximale (UTS)</b> : la contrainte la plus haute supportée.</li>
<li><b>T – rupture</b>.</li></ol>
<p>Un matériau <b>ductile</b> (acier doux, cuivre) s'allonge beaucoup avant de casser. Un matériau <b>fragile</b> (verre, fonte) casse presque sans prévenir, près de la limite élastique.</p>
<div class="ex"><div class="lab">Pression sous l'eau (notes de cours)</div>\(p=h\rho g\) : à 4000 m de profondeur, \(p=4000\times1000\times10=4\times10^7\) Pa. L'eau (B = 2,2 GPa) se comprime de \(\Delta V/V=4\times10^7/2{,}2\times10^9\approx1{,}8\,\%\). Le fer (B = 170 GPa) seulement de 0,025 %.</div>
<h4>6. Coefficient de sécurité</h4>
<p>La <b>résistance maximale</b> (UTS) est la contrainte à laquelle le matériau casse. Un ingénieur ne travaille jamais à cette limite : il divise par un <b>coefficient de sécurité</b> (> 1).</p>
<div class="ex"><div class="lab">Exemple concret</div>Un câble d'ascenseur en acier casse à 1000 MPa. Avec un coefficient de 10, on ne l'utilise qu'à 100 MPa. Si on veut savoir quelle masse il peut porter : \(F=\sigma_{appliquée}\times A\), puis \(m=F/g\).</div>
<div class="warnbox"><div class="lab">Les remarques du prof sur la Worksheet 2</div>
Le Dr Beh a publié les copies corrigées des étudiants (Q1 à Q9). Toutes les réponses finales sont justes, mais voici ce qu'il souligne :
<ul><li><b>Lire la question jusqu'au bout</b> (Q1) : « how much <i>more</i> » demande l'allongement <i>en plus</i>. Avec 140 kg le ressort s'allonge de 21 mm au total, mais la réponse est 21 − 6 = <b>15 mm</b>. Il écrit « not final ans » à côté des 21 mm.</li>
<li><b>Masse ≠ force</b> : il entoure « 40 kg » et écrit N et kg à côté. Dans F = kx, il faut le <b>poids</b> F = mg = 40 × 9,81 N.</li>
<li><b>Faire un schéma</b> : pour chaque question il dessine le montage (ressorts en série, fil tiré par 1,25 kN, rivet vu de dessus). Ça aide à trouver la bonne surface.</li>
<li><b>Toujours une unité</b> (Q3) : « L = 1,6 » est incomplet, il écrit « unit? (metres) ». Et il conseille de mettre « ⇒ » au début de chaque ligne de calcul.</li>
<li><b>Rejeter la solution impossible</b> (Q5) : x² = 0,0225 donne x = ±0,15 m ; une longueur négative n'a pas de sens, donc x = <b>0,15 m</b>.</li>
<li><b>Cisaillement, pas traction</b> (Q7) : il écrit « not tensile » : la contrainte du rivet est une contrainte de cisaillement τ = F/A, avec A = section du rivet.</li>
<li><b>Vérifier l'ordre de grandeur</b> (Q7) : un étudiant a écrit 4,71 N au lieu de <b>471 N</b> (24 MPa × 19,6 mm² = 471 N). Rappel : 1 MPa × 1 mm² = 1 N.</li>
<li><b>Coefficient de sécurité</b> (Q8) : contrainte appliquée = UTS / coefficient, donc coefficient = 700 / 78,06 ≈ <b>8,97</b>.</li>
<li><b>3 chiffres significatifs</b> : il note « 3 s.f. » (Q2 : 3,57 mm ; Q4 : 99,5 MPa).</li></ul></div>`,
    vocab: [
      ['Hooke\'s Law', 'loi de Hooke'], ['spring constant / stiffness', 'raideur (constante de raideur)'],
      ['extension', 'allongement'], ['tensile force', 'force de traction'], ['compressive force', 'force de compression'],
      ['stiff / soft', 'raide / souple'], ['elastic region', 'zone élastique'], ['plastic region', 'zone plastique'], ['elastic limit', 'limite d\'élasticité'],
      ['in series / in parallel', 'en série / en parallèle'],
      ['stress', 'contrainte'], ['strain', 'déformation (relative)'], ['microstrain (µε)', 'microdéformation'],
      ['Young\'s modulus', 'module de Young (module d\'élasticité)'], ['cross-section area', 'section (aire)'],
      ['shear force / shear stress', 'effort / contrainte de cisaillement'], ['shear modulus', 'module de cisaillement'],
      ['bending', 'flexion'], ['bulk stress / bulk modulus', 'contrainte / module de compressibilité'],
      ['ultimate tensile strength (UTS)', 'résistance à la rupture en traction'], ['safety factor', 'coefficient de sécurité'],
      ['rivet', 'rivet'], ['limit of proportionality', 'limite de proportionnalité'], ['yield point', 'limite d\'écoulement'], ['fracture', 'rupture'], ['ductile / brittle', 'ductile / fragile'], ['hydrostatic pressure', 'pression hydrostatique'], ['load', 'charge'], ['wire', 'fil'], ['bar / column', 'barre / poteau']
    ],
    formules: [
      { nom: 'Loi de Hooke', tex: 'F = k\\,\\Delta L \\quad\\Leftrightarrow\\quad \\Delta L = \\dfrac{F}{k}', why: 'Valable dans la zone élastique seulement.' },
      { nom: 'Ressorts en série', tex: 'k_{tot} = \\dfrac{k_A\\,k_B}{k_A + k_B}', why: 'Plus mou. Identiques : \\(k/2\\).' },
      { nom: 'Ressorts en parallèle', tex: 'k_{tot} = k_A + k_B', why: 'Plus raide. Identiques : \\(2k\\).' },
      { nom: 'Contrainte normale', tex: '\\sigma = \\dfrac{F}{A}', why: 'En Pa (N/m²). Pour un fil rond : \\(A=\\pi d^2/4\\).' },
      { nom: 'Déformation', tex: '\\varepsilon = \\dfrac{\\Delta L}{L}', why: 'Sans unité.' },
      { nom: 'Module de Young', tex: 'E = \\dfrac{\\sigma}{\\varepsilon} = \\dfrac{F\\,L}{A\\,\\Delta L}', why: '' },
      { nom: 'Allongement d\'une barre', tex: '\\Delta L = \\dfrac{F\\,L}{A\\,E}', why: '' },
      { nom: 'Raideur d\'une barre', tex: 'k = \\dfrac{A\\,E}{L}', why: '\\(k\\) dépend de la forme, \\(E\\) seulement du matériau.' },
      { nom: 'Cisaillement', tex: '\\tau = \\dfrac{F}{A}, \\qquad G = \\dfrac{\\tau}{\\gamma}', why: '\\(A\\) = surface parallèle à la force.' },
      { nom: 'Compressibilité', tex: 'B = \\dfrac{F/A}{\\Delta V / V}', why: '' },
      { nom: 'Pression hydrostatique', tex: 'p = h\\,\\rho\\,g', why: 'h = profondeur, ρ = masse volumique du liquide.' },
      { nom: 'Coefficient de sécurité', tex: '\\sigma_{appliquée} = \\dfrac{\\text{UTS}}{\\text{coefficient de sécurité}}', why: '' }
    ],
    exos: [
      { src: 'Blackboard', niveau: 1, en: 'When a mass of 40 kg is hung from a spring, the spring stretches by 6 mm. Assuming that Hooke\'s Law holds good, by how much more would the spring stretch if an additional mass of 100 kg were hung from it? What is the spring constant?', fr: 'Un ressort s\'allonge de 6 mm sous 40 kg. De combien s\'allonge-t-il en plus avec 100 kg supplémentaires ? Quelle est sa raideur ?',
        sol: '<p>Proportionnel : 100/40 × 6 = <b>15 mm de plus</b>. k = 40 × 9,81 / 0,006 ≈ <b>65 400 N/m</b> (65,4 kN/m).</p>' },
      { src: 'Blackboard', niveau: 1, en: 'A spring has a spring constant of 55 kN m⁻¹. Two such springs are connected end to end, the top one attached to the ceiling, with a mass of 10 kg supported from the bottom. What is the total extension?', fr: 'Deux ressorts de 55 kN/m sont accrochés l\'un sous l\'autre avec 10 kg en bas. Allongement total ?',
        sol: '<p>Série, identiques : k = 27,5 kN/m. F = 98,1 N → ΔL = 98,1 / 27 500 ≈ <b>3,57 mm</b>.</p>' },
      { src: 'Blackboard', niveau: 1, en: 'A wire has 500 microstrain and an extension of 0.8 mm. Find its original length.', fr: 'Un fil a une déformation de 500 µε et un allongement de 0,8 mm. Trouve sa longueur initiale.',
        sol: '<p>L = ΔL / ε = 0,8 / (500 × 10⁻⁶) = <b>1600 mm = 1,6 m</b>.</p>' },
      { src: 'Blackboard', niveau: 1, en: 'Calculate the stress in a wire of circular cross-section, 4 mm in diameter, when it supports a load of 1.25 kN.', fr: 'Calcule la contrainte dans un fil de 4 mm de diamètre qui porte 1,25 kN.',
        sol: '<p>A = π × 2² = 12,57 mm². σ = 1250 / 12,57 ≈ <b>99,5 MPa</b>.</p>' },
      { src: 'Blackboard', niveau: 2, en: 'Calculate the width of the sides of the cross-section of a square concrete column if it is to support a compressive load of 225 kN and the stress is not to exceed 10 MPa.', fr: 'Quelle largeur doit avoir un poteau carré en béton qui porte 225 kN sans dépasser 10 MPa ?',
        sol: '<p>A = F/σ = 225 000 / 10 = 22 500 mm² → côté = √22 500 = <b>150 mm</b>.</p>' },
      { src: 'Blackboard', niveau: 2, en: 'Calculate Young\'s modulus for aluminium from a tensile test: diameter 10 mm, length 500 mm, load 4 kN, extension 0.36 mm.', fr: 'Calcule le module de Young de l\'aluminium à partir de cet essai de traction.',
        sol: '<p>A = π × 5² = 78,54 mm² → σ = 4000/78,54 = 50,9 MPa. ε = 0,36/500 = 7,2 × 10⁻⁴. E = σ/ε ≈ <b>70,7 GPa</b>.</p>' },
      { src: 'Blackboard', niveau: 3, en: 'The ultimate shear strength of iron is 240 MPa. For a riveted joint, what is the maximum tension it will stand if the rivet diameter is 8 mm? If the diameter is only 5 mm with a safety factor of 10, what is the maximum tension?', fr: 'Rivet en fer (résistance au cisaillement 240 MPa) : tension max avec un rivet de 8 mm ? Et avec 5 mm et un coefficient de sécurité de 10 ?',
        sol: '<p>(Rivet en simple cisaillement, une seule section coupée.) A = π × 4² = 50,3 mm² → F = 240 × 50,3 ≈ <b>12,1 kN</b>.<br>5 mm : A = 19,6 mm², contrainte permise = 24 MPa → F ≈ <b>471 N</b>.<br><i>(Réponses confirmées par les notes de cours, question 3b : 12,064 kN et 471 N.)</i></p>' },
      { src: 'Blackboard', niveau: 2, en: 'A mass of 25 kg is suspended by a wire of diameter 2 mm and ultimate tensile strength 700 MPa. What is the safety factor applied to the wire?', fr: 'Une masse de 25 kg pend à un fil de 2 mm (UTS = 700 MPa). Quel est le coefficient de sécurité ?',
        sol: '<p>F = 245 N ; A = π × 1² = 3,14 mm² → σ = 78,1 MPa. Coefficient = 700/78,1 ≈ <b>8,97 ≈ 9</b>.</p>' },
      { src: 'Blackboard', niveau: 1, en: 'A wire is 2 m long and made from steel with Young\'s modulus 150 GPa. By what distance will it stretch under a tensile stress of 3 MPa?', fr: 'Un fil d\'acier de 2 m (E = 150 GPa) subit 3 MPa. De combien s\'allonge-t-il ?',
        sol: '<p>ε = 3 × 10⁶ / 150 × 10⁹ = 2 × 10⁻⁵ → ΔL = 2 × 2 × 10⁻⁵ = <b>0,04 mm</b>.</p>' },
      { src: 'Blackboard', niveau: 1, en: 'Lecture example: springs kA = 2 N m⁻¹ and kB = 3 N m⁻¹ in series. Find k_total. Repeat for two springs of 3 N m⁻¹.', fr: 'Exemple du cours : raideur totale en série.',
        sol: '<p>(2×3)/(2+3) = <b>1,2 N/m</b> ; (3×3)/(3+3) = <b>1,5 N/m</b>.</p>' },
      { src: 'Blackboard', niveau: 1, en: 'Course notes 2a–2c: (a) A bar 5 mm × 20 mm supports 500 kg: find the stress. (b) A 2 m wire extends by 0.25 mm: find the strain. (c) A 1 m steel rod under 100 MPa extends 0.5 mm: find E.', fr: 'Notes de cours : (a) contrainte, (b) déformation, (c) module de Young.',
        sol: '<p>(a) 4905 N / 10⁻⁴ m² = <b>49 MPa</b> · (b) 0,25/2000 = <b>1,25 × 10⁻⁴</b> · (c) ε = 5 × 10⁻⁴ → E = <b>200 GPa</b></p>' },
      { src: 'Blackboard', niveau: 2, en: 'Course notes 3a: The bulk modulus of water is 2.2 GPa. Calculate the fractional change in the density of water at the bottom of the Pacific Ocean, 4000 m deep.', fr: 'Variation relative de la masse volumique de l\'eau à 4000 m de profondeur (B = 2,2 GPa) ?',
        sol: '<p>p = hρg ≈ 4 × 10⁷ Pa → ΔV/V = p/B ≈ <b>1,8 %</b> (donc la masse volumique augmente d\'environ 1,8 %).</p>' },
      { src: 'Claude', niveau: 1, en: 'Two identical springs (k = 400 N/m) support a 20 kg mass side by side (in parallel). Find the extension.', fr: 'Deux ressorts identiques (400 N/m) en parallèle portent 20 kg. Allongement ?',
        sol: '<p>k_tot = 800 N/m ; F = 196,2 N → ΔL = 0,245 m = <b>24,5 cm</b>.</p>' },
      { src: 'Claude', niveau: 2, en: 'A hole of diameter 20 mm is punched in a steel plate 3 mm thick. The shear strength of the steel is 300 MPa. What force is needed?', fr: 'On perce un trou de 20 mm dans une tôle de 3 mm (résistance au cisaillement 300 MPa). Quelle force faut-il ?',
        sol: '<p>A = π D h = π × 20 × 3 = 188,5 mm² → F = 300 × 188,5 ≈ <b>56,5 kN</b>.</p>' },
      { src: 'Claude', niveau: 3, en: 'A climbing rope (steel core equivalent) must hold a 90 kg climber with a safety factor of 5. The material UTS is 500 MPa. What minimum diameter is needed?', fr: 'Un câble doit tenir un grimpeur de 90 kg avec un coefficient de sécurité de 5 (UTS = 500 MPa). Diamètre minimum ?',
        sol: String.raw`<p>σ permise = 100 MPa ; F = 883 N → A = 8,83 mm² → \(d=\sqrt{4A/\pi}\approx\) <b>3,35 mm</b>.</p>` }
    ]
  };

  // =========================== SEMAINE 3 ===========================
  S[3] = {
    titre: 'Lecture 4 — Vectors 1',
    titreFr: 'Cours 4 — Vecteurs (1) : composantes et vecteur résultant',
    resume: 'Scalaires et vecteurs, notations, composantes x, y, z, norme et direction, multiplication par un scalaire, addition et soustraction de vecteurs (calcul et schéma), exemple du bateau sur la rivière.',
    sources: '2026-27 MS L4 Vectors 1 (diapos « blank » 10 oct. et « filled » 15 oct.) · Course notes L4.pdf · vidéo du cours L4 Vectors 1 (Recorded Lectures, Blackboard)',
    en: String.raw`
<h4>Lecture 4 — Vectors 1</h4>
<p><b>Learning outcomes:</b> (1) resolve a vector in \(x\)-, \(y\)- and \(z\)-directions; (2) find the resultant vector by applying vector addition or subtraction.</p>
<h5>Scalar and vector</h5>
<p>A <b>scalar</b> is a quantity with magnitude (a number) and unit. It has no direction. e.g. mass = 2.5 kg (we don't say 2.5 kg to the right), time = 3 minutes.</p>
<p>A <b>vector</b> has both magnitude (with unit) and direction. e.g. force (7 N to the north), velocity (−2 m s⁻¹: the negative sign could mean to the left or down).</p>
<p>A vector can be shown by: (1) an arrow on a diagram; (2) an underscore (<u>a</u>); (3) bold print (<b>a</b>); (4) two end points with an arrow above, \(\overrightarrow{AB}\).</p>
<p>From the course notes: other vector quantities include velocity (wind maps), momentum (mass × velocity: a scalar times a vector is a vector), acceleration and force (\(F=ma\)). A vector may be drawn in any position as long as its magnitude and direction are preserved. The magnitude of \(\mathbf{A}\) is written \(|\mathbf{A}|\) or simply \(A\), and it is a scalar.</p>
<h5>Representing a vector</h5>
<p>A 3-dimensional vector is represented by its \(x\)-, \(y\)- and \(z\)-components, using the unit vectors \(\mathbf{i},\mathbf{j},\mathbf{k}\):</p>
$$\mathbf{a}=a_x\mathbf{i}+a_y\mathbf{j}+a_z\mathbf{k}=\begin{pmatrix}a_x\\a_y\\a_z\end{pmatrix},\qquad |\mathbf{a}|=\sqrt{a_x^2+a_y^2+a_z^2}$$
<p>A 2-dimensional vector is the case where one component (usually \(a_z\)) is zero: \(\mathbf{a}=a_x\mathbf{i}+a_y\mathbf{j}\), \(|\mathbf{a}|=\sqrt{a_x^2+a_y^2}\).</p>
<p>The <b>direction</b> of a 2-D vector is the angle \(\theta\) measured <b>anticlockwise from the +\(x\) axis</b>, where \(\tan\theta=a_y/a_x\). Conversely, if the magnitude and angle are given, the vector is <b>resolved</b> as</p>
$$\mathbf{a}=\begin{pmatrix}|\mathbf{a}|\cos\theta\\|\mathbf{a}|\sin\theta\end{pmatrix}$$
<p>Course notes: a <b>unit vector</b> has magnitude one and just represents a direction (\(\mathbf{i},\mathbf{j},\mathbf{k}\), also written \(\hat{x},\hat{y},\hat{z}\) or \(\mathbf{e}_x,\mathbf{e}_y,\mathbf{e}_z\)). The <b>projection</b> of \(\mathbf{A}\) onto the direction of \(\mathbf{B}\), with angle \(\alpha\) between them, is \(A_B=A\cos\alpha\).</p>
<h5>Multiplying a scalar and a vector</h5>
<p>The result is a vector: all components are multiplied by the scalar.</p>
<div class="ex"><div class="lab">Example (slides)</div>If \(\mathbf{a}=\begin{pmatrix}-1\\3\end{pmatrix}\): \(-\mathbf{a}=\begin{pmatrix}1\\-3\end{pmatrix}\), \(2\mathbf{a}=\begin{pmatrix}-2\\6\end{pmatrix}\), \(-\tfrac12\mathbf{a}=\begin{pmatrix}1/2\\-3/2\end{pmatrix}\).</div>
<p>The magnitude changes. The direction stays the same if the scalar is positive, and becomes the opposite direction if the scalar is negative.</p>
<h5>Resultant vector</h5>
<p>The outcome of adding or subtracting vectors is the <b>resultant vector</b>. It can be found by (i) vector algebra or (ii) sketching.</p>
<p><b>Vector algebra:</b> add or subtract the corresponding components.</p>
$$\mathbf{a}\pm\mathbf{b}=(a_x\pm b_x)\mathbf{i}+(a_y\pm b_y)\mathbf{j}+(a_z\pm b_z)\mathbf{k}$$
<p>In general \(\mathbf{a}+\mathbf{b}=\mathbf{b}+\mathbf{a}\) and \(\mathbf{a}-\mathbf{b}=\mathbf{a}+(-\mathbf{b})\).</p>
<div class="ex"><div class="lab">Example (slides)</div>\(\mathbf{a}=\mathbf{i}-3\mathbf{j}+4\mathbf{k}\), \(\mathbf{b}=-5\mathbf{i}+2\mathbf{j}-\mathbf{k}\), \(\mathbf{c}=6\mathbf{j}-7\mathbf{k}\). Then \(\mathbf{a}+\mathbf{b}-\mathbf{c}=(1-5-0)\mathbf{i}+(-3+2-6)\mathbf{j}+(4-1+7)\mathbf{k}=-4\mathbf{i}-7\mathbf{j}+10\mathbf{k}\).</div>
<p><b>Sketching</b> is suitable for 2-D vectors; trigonometry is needed to find the resultant. Course notes: to add \(\mathbf{B}\) to \(\mathbf{A}\), slide \(\mathbf{B}\) (without changing it) so that its tail sits on the head of \(\mathbf{A}\) ("tip to tail"); \(\mathbf{C}=\mathbf{A}+\mathbf{B}\) goes from the start of \(\mathbf{A}\) to the end of \(\mathbf{B}\). It is the diagonal of the parallelogram built on \(\mathbf{A}\) and \(\mathbf{B}\); \(\mathbf{A}-\mathbf{B}\) is the other diagonal. \(\overrightarrow{PR}=\overrightarrow{PQ}+\overrightarrow{QR}\).</p>
<div class="ex"><div class="lab">Course notes example</div>\(\mathbf{A}=(2,5,1)\), \(\mathbf{B}=(3,-7,4)\): \(\mathbf{A}+\mathbf{B}=(5,-2,5)\), \(\mathbf{A}-\mathbf{B}=(-1,12,-3)\).</div>
<h5>Resultant vector example: the boat</h5>
<p>A boat attempts to travel straight across a river at 2 m s⁻¹, but the current flows at 1.20 m s⁻¹ to the right. What is the actual velocity of the boat? Then: if the boat really wants to reach straight across, with the same speeds, what should its direction be? (Worked in the exercises.)</p>
<h5>Summary</h5>
<ul><li>A 2-D vector is resolved into \(x\)- and \(y\)-components.</li><li>The resultant vector is the outcome of adding or subtracting vectors.</li></ul>
<h5>Resolving vectors example (slide 5, filled in class)</h5>
<table><tr><th>Vector</th><th>Given</th><th>Components</th></tr>
<tr><td>\(\mathbf{a}\)</td><td>from the origin to (3, 4)</td><td>\(\mathbf{a}=\begin{pmatrix}3\\4\end{pmatrix}\), \(\tan\theta=4/3\), \(\theta=53.1^\circ\)</td></tr>
<tr><td>\(\mathbf{b}\)</td><td>\(|\mathbf{b}|=10\) at \(120^\circ\)</td><td>\(\begin{pmatrix}10\cos120^\circ\\10\sin120^\circ\end{pmatrix}=\begin{pmatrix}-5\\8.66\end{pmatrix}\)</td></tr>
<tr><td>\(\mathbf{c}\)</td><td>\(|\mathbf{c}|=7\) at \(20^\circ\) below the \(-x\) axis, i.e. \(180^\circ+20^\circ\)</td><td>\(\begin{pmatrix}7\cos200^\circ\\7\sin200^\circ\end{pmatrix}=\begin{pmatrix}-6.58\\-2.39\end{pmatrix}\)</td></tr>
<tr><td>\(\mathbf{d}\)</td><td>\(|\mathbf{d}|=2\) at \(45^\circ\) below the \(+x\) axis, i.e. \(270^\circ+45^\circ\)</td><td>\(\begin{pmatrix}2\cos315^\circ\\2\sin315^\circ\end{pmatrix}=\begin{pmatrix}1.41\\-1.41\end{pmatrix}\)</td></tr></table>
<p>Method used in class: always convert the angle to one measured <b>anticlockwise from +\(x\)</b>, then the signs of \(\cos\) and \(\sin\) give the correct signs of the components automatically.</p>
<h5>Resultant by sketching (slide 8, filled in class)</h5>
<ul><li>\(\mathbf{a}+\mathbf{b}\): draw \(\mathbf{a}\), then draw \(\mathbf{b}\) starting from the <b>tip</b> of \(\mathbf{a}\) (tip-to-tail). The resultant goes from the start point of \(\mathbf{a}\) to the end point of \(\mathbf{b}\). \(\mathbf{b}+\mathbf{a}\) gives the same resultant.</li>
<li>\(\mathbf{a}-\mathbf{b}=\mathbf{a}+(-\mathbf{b})\): reverse \(\mathbf{b}\), then add tip-to-tail. Note \(\mathbf{b}-\mathbf{a}=-(\mathbf{a}-\mathbf{b})\) (same length, opposite direction).</li>
<li>To find the size and angle of the resultant from the sketch you need trigonometry: Pythagoras, the sine rule and the cosine rule.</li></ul>`,
    fr: String.raw`
<h4>1. Scalaire ou vecteur ?</h4>
<p>Un <b>scalaire</b>, c'est juste un nombre avec une unité : ta masse (70 kg), la durée d'un cours (1 h), une température. Ça n'a pas de sens de dire « 70 kg vers la gauche ».</p>
<p>Un <b>vecteur</b>, c'est un nombre <b>et une direction</b> : « je pousse la porte avec 20 N <b>vers l'avant</b> », « le vent souffle à 30 km/h <b>vers l'est</b> ». Les forces, vitesses, accélérations et déplacements sont des vecteurs.</p>
<div class="ex"><div class="lab">Exemple concret</div>« J'ai marché 3 km » : c'est une distance (scalaire). « J'ai marché 3 km vers le nord » : c'est un déplacement (vecteur). Si tu fais 3 km vers le nord puis 3 km vers le sud, tu as marché 6 km mais ton déplacement total est <b>zéro</b>.</div>
<p>Comment on l'écrit : une flèche sur un dessin, une lettre en <b>gras</b> (\(\mathbf{a}\)), une lettre soulignée (<u>a</u>) à la main, ou \(\overrightarrow{AB}\) (de A vers B). La <b>norme</b> (la longueur) se note \(|\mathbf{a}|\) ou juste \(a\) : c'est un scalaire.</p>
<div class="tip"><div class="lab">Astuce</div>À l'examen, à la main, <b>souligne</b> toujours tes vecteurs : sinon on ne sait pas si tu parles du vecteur ou de sa longueur.</div>

<h4>2. Les composantes : découper un vecteur en x et y</h4>
<p>Imagine que tu traverses une place en diagonale. On peut décrire ce trajet par « combien vers la droite » (\(a_x\)) et « combien vers le haut » (\(a_y\)). Ce sont les <b>composantes</b>. On écrit \(\mathbf{a}=a_x\mathbf{i}+a_y\mathbf{j}\) : \(\mathbf{i}\) = « un pas vers la droite », \(\mathbf{j}\) = « un pas vers le haut » (et \(\mathbf{k}\) = « un pas vers toi » en 3D). Ce sont des <b>vecteurs unitaires</b> (longueur 1).</p>
<p><b>Longueur</b> (Pythagore) : \(|\mathbf{a}|=\sqrt{a_x^2+a_y^2}\) (en 3D on ajoute \(a_z^2\)).</p>
<p><b>Direction</b> : l'angle \(\theta\) mesuré <b>depuis l'axe +x, dans le sens inverse des aiguilles d'une montre</b>, avec \(\tan\theta=a_y/a_x\).</p>
<div class="ex"><div class="lab">Exemple concret</div>Tu marches 4 m vers l'est et 3 m vers le nord : \(\mathbf{d}=4\mathbf{i}+3\mathbf{j}\). Longueur : \(\sqrt{16+9}=5\) m. Angle : \(\tan^{-1}(3/4)=36{,}9°\) au-dessus de l'axe des x.</div>
<div class="warnbox"><div class="lab">Piège de la calculatrice</div>\(\tan^{-1}\) donne un angle entre −90° et 90° seulement. Si \(a_x\) est <b>négatif</b>, le vecteur pointe vers la gauche : il faut <b>ajouter 180°</b>. Ex : \(\mathbf{a}=-3\mathbf{i}+3\mathbf{j}\) → la calculatrice donne −45°, mais le vrai angle est 135°. Fais toujours un petit croquis pour vérifier le quadrant.</div>
<p><b>Résoudre</b> un vecteur (resolve), c'est le chemin inverse : on connaît la longueur et l'angle, on cherche les composantes :</p>
<p>\(a_x=|\mathbf{a}|\cos\theta\) et \(a_y=|\mathbf{a}|\sin\theta\).</p>
<div class="ex"><div class="lab">Exemple concret</div>Tu tires une valise avec une force de 50 N, la poignée fait 30° avec le sol. Partie utile (horizontale) : \(50\cos30°=43{,}3\) N. Partie qui soulève (verticale) : \(50\sin30°=25\) N. C'est pour ça qu'une poignée trop inclinée te fatigue : tu soulèves au lieu d'avancer.</div>

<h4>3. Multiplier un vecteur par un nombre</h4>
<p>On multiplie <b>chaque composante</b>. Avec \(\mathbf{a}=(-1,\,3)\) : \(2\mathbf{a}=(-2,\,6)\) (deux fois plus long, même direction), \(-\mathbf{a}=(1,\,-3)\) (même longueur, sens <b>opposé</b>), \(-\tfrac12\mathbf{a}=(\tfrac12,\,-\tfrac32)\) (moitié moins long, sens opposé).</p>
<div class="ex"><div class="lab">Exemple concret</div>Tu roules à vélo à \(\mathbf{v}\). Si tu doubles ta vitesse dans la même direction : \(2\mathbf{v}\). Si tu fais demi-tour à la même allure : \(-\mathbf{v}\).</div>

<h4>4. Additionner et soustraire : le vecteur résultant</h4>
<p><b>Par le calcul</b> : on additionne (ou soustrait) composante par composante. C'est la méthode la plus sûre.</p>
<div class="ex"><div class="lab">Exemple du cours, pas à pas</div>\(\mathbf{a}=\mathbf{i}-3\mathbf{j}+4\mathbf{k}\), \(\mathbf{b}=-5\mathbf{i}+2\mathbf{j}-\mathbf{k}\), \(\mathbf{c}=6\mathbf{j}-7\mathbf{k}\). On cherche \(\mathbf{a}+\mathbf{b}-\mathbf{c}\).<br>
i : \(1+(-5)-0=-4\) · j : \(-3+2-6=-7\) · k : \(4+(-1)-(-7)=10\).<br>Résultat : \(-4\mathbf{i}-7\mathbf{j}+10\mathbf{k}\).</div>
<div class="warnbox"><div class="lab">Piège des signes</div>Soustraire \(-7\mathbf{k}\), c'est <b>ajouter</b> 7. Écris chaque ligne avec des parenthèses pour ne pas te tromper.</div>
<p><b>Par le dessin</b> (« tip to tail », bout à bout) : on pose le début de \(\mathbf{b}\) au bout de \(\mathbf{a}\) ; le résultant va du départ de \(\mathbf{a}\) à l'arrivée de \(\mathbf{b}\). C'est la diagonale du parallélogramme construit sur \(\mathbf{a}\) et \(\mathbf{b}\). Pour \(\mathbf{a}-\mathbf{b}\), on ajoute \(-\mathbf{b}\) (la flèche retournée).</p>
<div class="ex"><div class="lab">Exemple concret</div>Tu vas de chez toi (P) à l'épicerie (Q), puis de l'épicerie à la fac (R). Ton déplacement total est la flèche directe de chez toi à la fac : \(\overrightarrow{PR}=\overrightarrow{PQ}+\overrightarrow{QR}\). Le chemin réel ne compte pas, seulement le départ et l'arrivée.</div>

<h4>5. L'exemple du bateau (à savoir refaire)</h4>
<p>Un bateau veut traverser une rivière tout droit à 2 m/s, mais le courant le pousse à 1,2 m/s vers la droite.</p>
<p><b>Question 1 : vitesse réelle ?</b> Les deux vitesses sont perpendiculaires, donc Pythagore : \(\sqrt{2^2+1{,}2^2}=\sqrt{5{,}44}\approx2{,}33\) m/s. Direction : \(\tan^{-1}(1{,}2/2)\approx31{,}0°\) vers la droite par rapport à la traversée tout droit. Le bateau arrive donc plus loin en aval.</p>
<p><b>Question 2 : pour arriver juste en face ?</b> Il faut viser un peu <b>vers l'amont</b> (contre le courant) pour que la partie « gauche » de sa vitesse annule le courant : \(2\sin\theta=1{,}2\Rightarrow\sin\theta=0{,}6\Rightarrow\theta\approx36{,}9°\) vers la gauche par rapport à la traversée tout droit. Il ne lui reste alors que \(2\cos36{,}9°=1{,}6\) m/s pour traverser.</p>
<div class="tip"><div class="lab">Même idée dans la vie</div>Un avion avec du vent de travers, un nageur dans un courant, toi qui marches dans un train : on additionne toujours les vecteurs vitesse.</div>`,
    vocab: [
      ['scalar', 'scalaire'], ['vector', 'vecteur'], ['magnitude', 'norme, intensité (longueur du vecteur)'], ['direction', 'direction (et sens)'],
      ['component', 'composante'], ['to resolve a vector', 'décomposer un vecteur (trouver ses composantes)'], ['resultant vector', 'vecteur résultant'],
      ['unit vector', 'vecteur unitaire'], ['projection', 'projection'], ['anticlockwise / clockwise', 'sens inverse / sens des aiguilles d\'une montre'],
      ['displacement', 'déplacement'], ['velocity', 'vitesse (vectorielle)'], ['speed', 'vitesse (valeur, scalaire)'], ['momentum', 'quantité de mouvement'],
      ['bold print', 'caractères gras'], ['underscore', 'soulignement'], ['tip to tail', 'bout à bout'], ['parallelogram', 'parallélogramme'],
      ['current (river)', 'courant'], ['upstream / downstream', 'en amont / en aval'], ['sketch', 'schéma, croquis']
    ],
    formules: [
      { nom: 'Vecteur en composantes', tex: '\\mathbf{a}=a_x\\mathbf{i}+a_y\\mathbf{j}+a_z\\mathbf{k}', why: '\\(\\mathbf{i},\\mathbf{j},\\mathbf{k}\\) : vecteurs unitaires selon x, y, z.' },
      { nom: 'Norme', tex: '|\\mathbf{a}|=\\sqrt{a_x^2+a_y^2+a_z^2}', why: 'Pythagore. En 2D, sans \\(a_z\\).' },
      { nom: 'Direction (2D)', tex: '\\tan\\theta=\\dfrac{a_y}{a_x}', why: 'Angle depuis +x, sens inverse des aiguilles. Vérifie le quadrant (ajoute 180° si \\(a_x<0\\)).' },
      { nom: 'Décomposer (resolve)', tex: 'a_x=|\\mathbf{a}|\\cos\\theta,\\qquad a_y=|\\mathbf{a}|\\sin\\theta', why: '' },
      { nom: 'Multiplication par un scalaire', tex: 'c\\,\\mathbf{a}=(c\\,a_x,\;c\\,a_y,\;c\\,a_z)', why: 'c < 0 : sens opposé.' },
      { nom: 'Somme et différence', tex: '\\mathbf{a}\\pm\\mathbf{b}=(a_x\\pm b_x)\\mathbf{i}+(a_y\\pm b_y)\\mathbf{j}+(a_z\\pm b_z)\\mathbf{k}', why: '' },
      { nom: 'Projection', tex: 'A_B=A\\cos\\alpha', why: 'Projection de A sur la direction de B (α = angle entre les deux).' }
    ],
    exos: [
      { src: 'Blackboard', niveau: 1, en: 'Slides: if a = (−1, 3), find −a, 2a and −½a.', fr: 'Diapos : avec a = (−1, 3), calcule −a, 2a et −½a.',
        sol: '<p>−a = <b>(1, −3)</b> ; 2a = <b>(−2, 6)</b> ; −½a = <b>(½, −3/2)</b>.</p>' },
      { src: 'Blackboard', niveau: 1, en: 'Slides: if a = i − 3j + 4k, b = −5i + 2j − k and c = 6j − 7k, find a + b − c.', fr: 'Diapos : calcule a + b − c.',
        sol: '<p>(1 − 5 − 0)i + (−3 + 2 − 6)j + (4 − 1 + 7)k = <b>−4i − 7j + 10k</b>.</p>' },
      { src: 'Blackboard', niveau: 1, en: 'Course notes: A = (2, 5, 1) and B = (3, −7, 4). Find A + B and A − B.', fr: 'Notes de cours : calcule A + B et A − B.',
        sol: '<p>A + B = <b>(5, −2, 5)</b> ; A − B = <b>(−1, 12, −3)</b>.</p>' },
      { src: 'Blackboard', niveau: 2, en: 'Slides: a boat attempts to travel straight across a river at 2 m s⁻¹. The current flows at 1.20 m s⁻¹ to the right. What is the actual velocity of the boat?', fr: 'Diapos : un bateau traverse à 2 m/s, le courant va à 1,2 m/s vers la droite. Vitesse réelle du bateau ?',
        sol: '<p>|v| = √(2² + 1,2²) = √5,44 ≈ <b>2,33 m/s</b>, à tan⁻¹(1,2/2) ≈ <b>31,0°</b> vers la droite (en aval) par rapport à la traversée perpendiculaire (soit ≈ 59,0° par rapport à la berge).</p>' },
      { src: 'Blackboard', niveau: 3, en: 'Slides: continuing, if the boat really wants to reach straight across the river, with the same current and boat speed, what should the direction of the boat be?', fr: 'Diapos : suite. Pour arriver juste en face, dans quelle direction le bateau doit-il viser ?',
        sol: '<p>La composante du bateau vers l\'amont doit annuler le courant : 2 sin θ = 1,2 → sin θ = 0,6 → <b>θ ≈ 36,9° vers l\'amont (à gauche)</b> par rapport à la perpendiculaire aux berges. Vitesse de traversée : 2 cos 36,9° = 1,6 m/s.</p>' },
      { src: 'Blackboard', niveau: 2, en: 'Slide 5: resolve b, of magnitude 10 at 120° from the +x axis, and c, of magnitude 7 at 20° below the −x axis.', fr: 'Diapo 5 : décompose b (norme 10, à 120° de l\'axe +x) et c (norme 7, à 20° sous l\'axe −x).',
        sol: '<p>b = (10 cos 120°, 10 sin 120°) = <b>(−5 ; 8,66)</b>. Pour c, l\'angle depuis +x dans le sens direct vaut 180° + 20° = 200° : c = (7 cos 200°, 7 sin 200°) = <b>(−6,58 ; −2,39)</b>. Vérification : √(6,58² + 2,39²) ≈ 7.</p>' },
      { src: 'Blackboard', niveau: 1, en: 'Slide 5: resolve d, of magnitude 2 at 45° below the +x axis, and find the angle of a = (3, 4).', fr: 'Diapo 5 : décompose d (norme 2, à 45° sous l\'axe +x) et trouve l\'angle de a = (3 ; 4).',
        sol: '<p>Angle de d depuis +x : 270° + 45° = 315° → d = (2 cos 315°, 2 sin 315°) = <b>(1,41 ; −1,41)</b>. Pour a : tan θ = 4/3 → <b>θ = 53,1°</b>.</p>' },
      { src: 'Claude', niveau: 1, en: 'Resolve a force of 50 N acting at 30° above the +x axis into x- and y-components.', fr: 'Décompose une force de 50 N à 30° au-dessus de l\'axe +x.',
        sol: '<p>Fx = 50 cos 30° = <b>43,3 N</b> ; Fy = 50 sin 30° = <b>25,0 N</b>.</p>' },
      { src: 'Claude', niveau: 1, en: 'Find the magnitude of a = 2i − 3j + 6k.', fr: 'Trouve la norme de a = 2i − 3j + 6k.',
        sol: '<p>√(4 + 9 + 36) = √49 = <b>7</b>.</p>' },
      { src: 'Claude', niveau: 2, en: 'Find the magnitude and direction (anticlockwise from +x) of a = 3i − 4j.', fr: 'Norme et direction (depuis +x, sens inverse des aiguilles) de a = 3i − 4j.',
        sol: '<p>|a| = √(9 + 16) = <b>5</b>. tan⁻¹(−4/3) = −53,1° : le vecteur est en bas à droite (4e quadrant), donc θ = 360° − 53,1° = <b>306,9°</b> (ou 53,1° sous l\'axe +x).</p>' },
      { src: 'Claude', niveau: 2, en: 'a = (−1, 3) and b = (4, −2). Find 2a − b, its magnitude and its direction.', fr: 'a = (−1, 3), b = (4, −2). Calcule 2a − b, sa norme et sa direction.',
        sol: '<p>2a − b = (−2 − 4, 6 + 2) = <b>(−6, 8)</b>. Norme = √(36 + 64) = <b>10</b>. tan⁻¹(8/−6) donne −53,1° sur la calculatrice, mais x < 0 et y > 0 (2e quadrant) : θ = −53,1° + 180° = <b>126,9°</b>.</p>' },
      { src: 'Claude', niveau: 2, en: 'A plane heads due north at 200 m s⁻¹ while the wind blows due east at 50 m s⁻¹. Find the resultant velocity.', fr: 'Un avion vole plein nord à 200 m/s, le vent souffle plein est à 50 m/s. Vitesse résultante ?',
        sol: '<p>√(200² + 50²) = √42 500 ≈ <b>206 m/s</b>, à tan⁻¹(50/200) ≈ <b>14,0° à l\'est du nord</b>.</p>' },
      { src: 'Claude', niveau: 3, en: 'A student walks 3 km due east, then 4 km at 60° north of east. Find the resultant displacement.', fr: 'Un étudiant marche 3 km plein est, puis 4 km à 60° au nord de l\'est. Déplacement résultant ?',
        sol: '<p>2e trajet : (4 cos 60°, 4 sin 60°) = (2 ; 3,46). Total : (5 ; 3,46) km. Norme = √(25 + 12) = √37 ≈ <b>6,08 km</b>, direction tan⁻¹(3,46/5) ≈ <b>34,7° au nord de l\'est</b>.</p>' },
      { src: 'Claude', niveau: 1, en: 'Vector A has magnitude 10 N and makes an angle of 60° with vector B. Find the projection of A onto the direction of B.', fr: 'A vaut 10 N et fait 60° avec B. Projection de A sur la direction de B ?',
        sol: '<p>A cos 60° = 10 × 0,5 = <b>5 N</b>.</p>' }
    ]
  };
  S[4] = {
    titre: 'Lecture 6 — Vectors 2',
    titreFr: 'Cours 6 — Vecteurs (2) : produit scalaire et produit vectoriel',
    resume: 'Les deux façons de multiplier deux vecteurs : le produit scalaire (donne un nombre et l\'angle entre les vecteurs) et le produit vectoriel (donne un vecteur perpendiculaire). Vecteurs perpendiculaires et parallèles.',
    sources: '2026-27 MS L6 Vectors 2 blank.pdf (Blackboard, 18 oct.) — la version « filled » sera ajoutée quand elle sera publiée',
    en: String.raw`
<p><b>Learning outcomes:</b> (1) identify two methods of multiplying vectors; (2) perform scalar multiplication of vectors.</p>
<h4>Scalar and vector multiplication</h4>
<p>There are two ways to multiply two vectors, named after their outcome:</p>
<ul><li><b>Scalar multiplication</b>, also called the <b>dot product</b>, gives a <b>scalar</b>.</li>
<li><b>Vector multiplication</b>, also called the <b>cross product</b>, gives a <b>vector</b>.</li></ul>
<h4>Dot product</h4>
<p>For \(\mathbf{a}=(a_x, a_y, a_z)\) and \(\mathbf{b}=(b_x, b_y, b_z)\):</p>
$$\mathbf{a}\cdot\mathbf{b}=a_xb_x+a_yb_y+a_zb_z$$
<p>The dot product also gives the angle \(\theta\) between the two vectors:</p>
$$\mathbf{a}\cdot\mathbf{b}=|\mathbf{a}|\,|\mathbf{b}|\cos\theta\quad\Rightarrow\quad\cos\theta=\frac{\mathbf{a}\cdot\mathbf{b}}{|\mathbf{a}|\,|\mathbf{b}|}$$
<h5>Example (slide 5)</h5>
<p>Sketch \(\mathbf{a}=(2,3)\) and \(\mathbf{b}=(4,1)\), then find the angle between them.</p>
<div class="ex">\(\mathbf{a}\cdot\mathbf{b}=2\times4+3\times1=11\), \(|\mathbf{a}|=\sqrt{13}\), \(|\mathbf{b}|=\sqrt{17}\), so \(\cos\theta=\dfrac{11}{\sqrt{13}\sqrt{17}}=0.740\) and \(\theta\approx42.3^\circ\).</div>
<h5>Perpendicular vectors (slide 6)</h5>
<p>If two vectors are perpendicular, \(\theta=90^\circ\), \(\cos90^\circ=0\), so \(\mathbf{a}\cdot\mathbf{b}=0\).</p>
<div class="ex">\(\mathbf{a}=(-3,4)\), \(\mathbf{b}=(4,3)\): \(\mathbf{a}\cdot\mathbf{b}=-12+12=0\), so they are perpendicular.</div>
<h5>Parallel vectors (slide 7)</h5>
<p>Same direction: \(\theta=0^\circ\). Opposite directions: \(\theta=180^\circ\).</p>
<div class="ex">\(\mathbf{a}=(4,3)\), \(\mathbf{b}=(8,6)\): \(\mathbf{a}\cdot\mathbf{b}=50=5\times10\), \(\cos\theta=1\), \(\theta=0^\circ\). With \(\mathbf{b}=(-4,-3)\): \(\mathbf{a}\cdot\mathbf{b}=-25=5\times5\times(-1)\), \(\theta=180^\circ\).</div>
<h4>Cross product</h4>
$$\mathbf{a}\times\mathbf{b}=(a_yb_z-a_zb_y)\,\mathbf{i}+(a_zb_x-a_xb_z)\,\mathbf{j}+(a_xb_y-a_yb_x)\,\mathbf{k}$$
<p>The angle is given by \(|\mathbf{a}\times\mathbf{b}|=|\mathbf{a}|\,|\mathbf{b}|\sin\theta\). The details are covered in the Mathematics module; for now remember that (1) the result is a <b>vector</b> and (2) its direction is <b>perpendicular to both</b> \(\mathbf{a}\) and \(\mathbf{b}\).</p>
<h4>Summary</h4>
<ul><li>Two ways to multiply vectors: dot product and cross product.</li><li>\(\mathbf{a}\cdot\mathbf{b}=a_xb_x+a_yb_y+a_zb_z=|\mathbf{a}|\,|\mathbf{b}|\cos\theta\).</li></ul>
<p><i>The worked solutions above were computed from the blank slides; the teacher's filled version will be added when it is published.</i></p>`,
    fr: String.raw`
<h4>Deux façons de multiplier deux vecteurs</h4>
<ul><li><b>Produit scalaire</b> (dot product, noté \(\mathbf{a}\cdot\mathbf{b}\)) : le résultat est un <b>nombre</b>.</li>
<li><b>Produit vectoriel</b> (cross product, noté \(\mathbf{a}\times\mathbf{b}\)) : le résultat est un <b>vecteur</b>.</li></ul>
<h4>Le produit scalaire</h4>
<p>On multiplie les composantes une à une, puis on additionne :</p>
$$\mathbf{a}\cdot\mathbf{b}=a_xb_x+a_yb_y+a_zb_z$$
<div class="ex"><div class="lab">Exemple concret</div>\(\mathbf{a}=(2,3)\), \(\mathbf{b}=(4,1)\) : \(2\times4+3\times1=8+3=11\). Le résultat est juste le nombre 11, pas un vecteur.</div>
<h4>Trouver l'angle entre deux vecteurs</h4>
<p>On utilise aussi \(\mathbf{a}\cdot\mathbf{b}=|\mathbf{a}|\,|\mathbf{b}|\cos\theta\), donc :</p>
$$\cos\theta=\frac{\mathbf{a}\cdot\mathbf{b}}{|\mathbf{a}|\,|\mathbf{b}|}$$
<div class="ex"><div class="lab">Exemple concret (diapo 5)</div>\(\mathbf{a}\cdot\mathbf{b}=11\), \(|\mathbf{a}|=\sqrt{2^2+3^2}=\sqrt{13}\approx3{,}61\), \(|\mathbf{b}|=\sqrt{4^2+1^2}=\sqrt{17}\approx4{,}12\).<br>\(\cos\theta=11/(3{,}61\times4{,}12)\approx0{,}740\) → \(\theta=\cos^{-1}(0{,}740)\approx42{,}3°\).</div>
<h4>Deux cas à reconnaître tout de suite</h4>
<ul><li><b>Produit scalaire = 0</b> → les vecteurs sont <b>perpendiculaires</b> (90°). Ex : \((-3,4)\cdot(4,3)=-12+12=0\).</li>
<li><b>\(\cos\theta=1\)</b> → même direction (0°) ; <b>\(\cos\theta=-1\)</b> → directions opposées (180°). Ex : \((4,3)\) et \((8,6)\) donnent 0° ; \((4,3)\) et \((-4,-3)\) donnent 180°.</li></ul>
<div class="tip"><div class="lab">Astuce</div>Si un vecteur est un multiple de l'autre (\((8,6)=2\times(4,3)\)), ils sont parallèles : pas besoin de calculer.</div>
<h4>Le produit vectoriel (pour l'instant, juste l'idée)</h4>
<p>Le résultat est un vecteur <b>perpendiculaire aux deux</b> vecteurs de départ, et sa norme vaut \(|\mathbf{a}|\,|\mathbf{b}|\sin\theta\). Le calcul détaillé sera vu en maths.</p>
<div class="warnbox">Ne confonds pas : le point « · » donne un nombre (avec cos), la croix « × » donne un vecteur (avec sin).</div>`,
    vocab: [
      ['dot product / scalar product', 'produit scalaire'], ['cross product / vector product', 'produit vectoriel'],
      ['scalar multiplication', 'multiplication scalaire (produit scalaire)'], ['perpendicular', 'perpendiculaire'],
      ['parallel', 'parallèle'], ['angle between two vectors', 'angle entre deux vecteurs'], ['outcome', 'résultat'],
      ['magnitude', 'norme (longueur) d\'un vecteur'], ['opposite direction', 'sens opposé']
    ],
    formules: [
      { nom: 'Produit scalaire (composantes)', tex: String.raw`\mathbf{a}\cdot\mathbf{b}=a_xb_x+a_yb_y+a_zb_z`, why: 'Le résultat est un nombre.' },
      { nom: 'Angle entre deux vecteurs', tex: String.raw`\cos\theta=\frac{\mathbf{a}\cdot\mathbf{b}}{|\mathbf{a}|\,|\mathbf{b}|}`, why: 'Vient de a·b = |a||b|cos θ.' },
      { nom: 'Vecteurs perpendiculaires', tex: String.raw`\mathbf{a}\perp\mathbf{b}\iff\mathbf{a}\cdot\mathbf{b}=0`, why: 'cos 90° = 0.' },
      { nom: 'Produit vectoriel', tex: String.raw`\mathbf{a}\times\mathbf{b}=(a_yb_z-a_zb_y)\mathbf{i}+(a_zb_x-a_xb_z)\mathbf{j}+(a_xb_y-a_yb_x)\mathbf{k}`, why: 'Résultat perpendiculaire à a et b ; |a×b| = |a||b|sin θ.' }
    ],
    exos: [
      { src: 'Blackboard', niveau: 2, en: 'Slide 5: sketch a = (2, 3) and b = (4, 1), then label and calculate the angle between a and b.', fr: 'Diapo 5 : dessine a = (2 ; 3) et b = (4 ; 1), puis calcule l\'angle entre eux.',
        sol: '<p>a·b = 8 + 3 = 11 ; |a| = √13, |b| = √17 ; cos θ = 11/√221 ≈ 0,740 → <b>θ ≈ 42,3°</b>.</p>' },
      { src: 'Blackboard', niveau: 1, en: 'Slide 6: show by calculation that a = (−3, 4) and b = (4, 3) are perpendicular.', fr: 'Diapo 6 : montre par le calcul que a = (−3 ; 4) et b = (4 ; 3) sont perpendiculaires.',
        sol: '<p>a·b = (−3)(4) + (4)(3) = −12 + 12 = <b>0</b>, donc cos θ = 0 et θ = 90°.</p>' },
      { src: 'Blackboard', niveau: 1, en: 'Slide 7: find the angle between a = (4, 3) and b = (8, 6); repeat for a = (4, 3) and b = (−4, −3).', fr: 'Diapo 7 : angle entre (4 ; 3) et (8 ; 6), puis entre (4 ; 3) et (−4 ; −3).',
        sol: '<p>(4,3)·(8,6) = 50 = 5 × 10 → cos θ = 1 → <b>0°</b>. (4,3)·(−4,−3) = −25 = 5 × 5 × (−1) → cos θ = −1 → <b>180°</b>.</p>' },
      { src: 'Claude', niveau: 2, en: 'Find the angle between a = (3, 0, 4) and b = (1, 2, 2).', fr: 'Trouve l\'angle entre a = (3 ; 0 ; 4) et b = (1 ; 2 ; 2).',
        sol: '<p>a·b = 3 + 0 + 8 = 11 ; |a| = 5, |b| = 3 ; cos θ = 11/15 ≈ 0,733 → <b>θ ≈ 42,8°</b>.</p>' },
      { src: 'Claude', niveau: 2, en: 'Find k so that (k, 2) is perpendicular to (3, −6).', fr: 'Trouve k pour que (k ; 2) soit perpendiculaire à (3 ; −6).',
        sol: '<p>3k − 12 = 0 → <b>k = 4</b>.</p>' }
    ]
  };
})();
