// GENG0003 Mechanical Science — Semaines 1 et 2
(function () {
  const S = DATA.matieres.ms.semaines;

  // =========================== SEMAINE 1 ===========================
  S[1] = {
    titre: 'Lecture 1 — Units and Dimensions',
    titreFr: 'Cours 1 — Unités et dimensions',
    resume: 'Les 7 grandeurs de base du SI, les préfixes, les dimensions (M, L, T) et comment vérifier qu\'une formule est cohérente.',
    sources: '2026-27 MS overview.pdf · MS L1 slides (filled) · Course notes L1.pdf · Worksheet 1 (Blackboard)',
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
    sources: 'MS L2 & L3 slides (filled) · Course notes L2.pdf & L3.pdf · Worksheet 2 (Blackboard)',
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
<div class="ex"><div class="lab">Exemple concret</div>Un câble d'ascenseur en acier casse à 1000 MPa. Avec un coefficient de 10, on ne l'utilise qu'à 100 MPa. Si on veut savoir quelle masse il peut porter : \(F=\sigma_{appliquée}\times A\), puis \(m=F/g\).</div>`,
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
        sol: '<p>F = 245 N ; A = π × 1² = 3,14 mm² → σ = 78,1 MPa. Coefficient = 700/78,1 ≈ <b>9</b>.</p>' },
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
})();
