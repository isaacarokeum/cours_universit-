// GENG0005 Engineering Principles — Semaines 1 à 5
(function () {
  const S = DATA.matieres.ep.semaines;

  // =========================== SEMAINE 1 ===========================
  S[1] = {
    titre: 'Introduction · Heat 1: Temperature & Fixed Points · Heat 2: Thermometry',
    titreFr: 'Introduction · Température, points fixes et thermométrie',
    resume: 'Organisation du module, les échelles de température (kelvin, Celsius, Fahrenheit), les points fixes et le fonctionnement des thermomètres.',
    sources: '0-Introduction.pptx · thermometry.pdf · Celsius to fahrenheit.docx (notes du tableau) · Lecture notes « 1. Temperature and Heat » · GENG0005 Timetable (Blackboard)',
    en: String.raw`
<h4>Introduction to the module (Dr Lim Kok Geng)</h4>
<ul><li><b>Lectures</b>: 2 hours per week, mainly PowerPoint; slides are available on Blackboard after the lecture, and all lecture notes are on Blackboard.</li>
<li><b>Workshops / tutorials</b>: 1 hour per week, starting in Week 2 — check your own timetable for the location. You work on the Example Sheets; attendance is recorded; help from Post-Graduate Teaching Assistants (PGTAs); there are <b>formative tests</b> to give feedback on your progress.</li>
<li><b>Laboratories</b>: 3-hour sessions to acquire skill in experimental work and in recording/reporting results. Experiments: <b>specific heat</b>, <b>constant-volume gas law</b>, <b>simple harmonic motion</b>, <b>sound</b>.</li>
<li><b>Assessment</b>: a <b>2-hour written examination</b> at the end of the academic year. Lab work (including attendance and participation) gives a coursework mark that counts towards the end-of-year coursework total.</li></ul>
<p><b>Semester 1 plan:</b> W1 Heat 1 (temperature & fixed points) + Heat 2 (thermometry) · W2 Heat 3 (heat transfer modes & heat capacity) + Heat 4 (specific heat) · W3 Heat 5 (latent heat) + Heat 6 (thermal expansion) · W4–7 expansion, conduction, convection, radiation · W8–14 Gases (pressure, gas laws, kinetic theory, thermodynamics, cycles).</p>
<h4>1. Temperature scales</h4>
<p><b>Temperature</b> is the measure of how hot a body is. A temperature scale needs at least two <b>fixed points</b> — temperatures at which a particular event takes place:</p>
<ul><li><b>Ice point</b>: pure ice in equilibrium with pure water at standard atmospheric pressure (1.013 bar, 760 mmHg).</li>
<li><b>Triple point</b>: ice, water and water vapour coexist in equilibrium (about 0.01 °C above the ice point; not at atmospheric pressure).</li>
<li><b>Steam point</b>: pure water in equilibrium with its vapour at standard atmospheric pressure.</li>
<li><b>Absolute zero</b>: particles have minimal motion; the lowest possible temperature, independent of any material.</li></ul>
<h5>1.1 Thermodynamic (absolute) scale</h5>
<p>Symbol \(T\), unit the <b>kelvin (K)</b>, the SI unit of temperature. It starts at absolute zero (0 K) and uses the triple point of water, defined as 273.16 K. The ice point is 273.15 K and the steam point 373.15 K (in practice 273 K and 373 K).</p>
<h5>1.2 Celsius scale</h5>
<p>Originally: ice point 0 °C, steam point 100 °C. Now defined by \(\theta=T-273.15\). A <b>change</b> of 1 K equals a change of 1 °C, so for temperature differences either scale can be used.</p>
<h5>1.3 Thermometry</h5>
<p>Any property that changes with temperature can be used:</p>
<ul><li><b>Mercury-in-glass</b> (thermal expansion): cheap, reliable, fairly accurate, but fragile and hard to connect to electronics. Alcohol-in-glass: more sensitive, lower temperatures.</li>
<li><b>Thermistor</b>: semiconductor whose resistance <i>falls</i> strongly as temperature rises; fast, cheap, easy to integrate, but not very accurate and drifts.</li>
<li><b>Platinum resistance thermometer</b>: resistance <i>rises</i> with temperature; very stable and repeatable (used as a standard), but slow and expensive.</li>
<li><b>Thermocouple</b>: two different metals in contact generate an e.m.f. depending on temperature; fast and sensitive, but needs a second (cold) junction at constant temperature.</li>
<li><b>Liquid crystals</b>: change colour; very cheap, not accurate.</li>
<li><b>Constant-volume gas thermometer</b>: pressure ∝ absolute temperature; slow and bulky, but simple and reproducible.</li></ul>
<p>Board notes: \(T_{°F}=T_{°C}\times\frac95+32\); \(T(\mathrm K)=\theta(°\mathrm C)+273.15\), so 0 K ⇔ −273.15 °C, and \(T_2-T_1=\theta_2-\theta_1\) (\(\Delta T=\Delta\theta\)). A thermometric property varies linearly between the calibration points (\(y=mx+c\)): \(\Delta V\propto\Delta T\) (liquid expansion), \(\Delta R\propto\Delta T\) (resistance), \(\Delta P\propto\Delta T\) (constant-volume gas, since \(PV/T\) = constant).</p>
<p>Each thermometer has its own scale and they only agree at the fixed points. With a property \(X\) that takes values \(X_0\) at 0 °C and \(X_{100}\) at 100 °C:</p>
<p>$$\theta=\frac{X_\theta-X_0}{X_{100}-X_0}\times100$$</p>
<p>Derivation (handwritten notes, "Measuring Temperature"): on the straight-line graph of \(X\) against \(\theta\), the gradient from 0 to \(\theta\), \(m_1=\frac{X_\theta-X_0}{\theta}\), equals the gradient from 0 to 100, \(m_2=\frac{X_{100}-X_0}{100}\). Setting \(m_1=m_2\) gives the formula.</p>

`,
    fr: String.raw`
<h4>Comment marche le module</h4>
<ul><li><b>Cours</b> : 2 h par semaine, sur PowerPoint. Les diapos sont mises sur Blackboard <i>après</i> le cours.</li>
<li><b>TD (workshops)</b> : 1 h par semaine <b>à partir de la semaine 2</b>. Tu fais les « Example Sheets ». <b>La présence est notée</b>, des assistants (PGTA) t'aident, et il y a des petits tests d'entraînement.</li>
<li><b>TP</b> : séances de 3 h. Expériences : chaleur massique, loi des gaz à volume constant, oscillations (SHM), son.</li>
<li><b>Note</b> : un examen écrit de 2 h en fin d'année. Les TP comptent dans la note de Coursework.</li></ul>
<h4>1. La température et les points fixes</h4>
<p>La température mesure à quel point un corps est chaud. Pour construire une échelle, il faut des <b>points fixes</b> : des phénomènes qui se produisent toujours à la même température.</p>
<ul><li><b>Point de glace</b> : la glace fond (0 °C, à pression atmosphérique).</li>
<li><b>Point triple</b> : glace, eau liquide et vapeur coexistent (0,01 °C, 273,16 K).</li>
<li><b>Point de vapeur</b> : l'eau bout (100 °C, à pression atmosphérique).</li>
<li><b>Zéro absolu</b> : les particules ne bougent (presque) plus — rien ne peut être plus froid (0 K = −273,15 °C).</li></ul>

<h4>2. Kelvin et Celsius</h4>
<p>L'échelle <b>kelvin</b> (K) part du zéro absolu : c'est l'unité SI. L'échelle <b>Celsius</b> est juste décalée : \(\theta(°C)=T(K)-273{,}15\). Donc 0 °C = 273 K, 20 °C = 293 K, 100 °C = 373 K.</p>
<div class="tip"><div class="lab">À retenir</div>Une <b>variation</b> de 1 °C = une variation de 1 K. Pour un ΔT, pas besoin de convertir ! Mais pour une température absolue (dans les gaz, par ex.), il faut <b>toujours</b> des kelvins.</div>
<div class="ex"><div class="lab">Exemple concret</div>À Marrakech, il fait 15 °C le matin et 35 °C l'après-midi : ΔT = 20 °C = 20 K. Mais la température de l'après-midi en kelvins est 308 K.</div>
<p>Et le Fahrenheit (utilisé aux USA) : \(T_{°F}=T_{°C}\times\frac95+32\). 0 °C = 32 °F, 100 °C = 212 °F, 37 °C = 98,6 °F.</p>
<div class="tip"><div class="lab">La démo du prof (au tableau)</div>Pourquoi \(\Delta T=\Delta\theta\) ? Parce que \(T_2-T_1=(\theta_2+273{,}15)-(\theta_1+273{,}15)=\theta_2-\theta_1\) : les 273,15 s'annulent. Et le zéro absolu : \(0=\theta+273{,}15\Rightarrow\theta=-273{,}15\) °C.</div>

<h4>3. Les thermomètres</h4>
<p>Tout ce qui change avec la température peut servir de thermomètre :</p>
<ul><li><b>Thermomètre à mercure / alcool</b> : le liquide se dilate. Simple, précis, mais fragile et pas électronique.</li>
<li><b>Thermistance</b> : sa résistance <b>baisse</b> beaucoup quand il fait chaud. Rapide et pas cher (dans ton téléphone, ton four), mais peu précise.</li>
<li><b>Sonde platine</b> : sa résistance <b>augmente</b> avec la température. Très précise et stable (référence en labo), mais lente et chère.</li>
<li><b>Thermocouple</b> : deux métaux différents soudés créent une petite tension qui dépend de la température. Rapide, mesure de très hautes températures (fours, moteurs), mais il faut une « soudure froide » à température connue.</li>
<li><b>Cristaux liquides</b> : changent de couleur (bandes thermomètres pour aquarium). Pas chers, pas précis.</li>
<li><b>Thermomètre à gaz à volume constant</b> : la pression est proportionnelle à T. Encombrant mais très reproductible.</li></ul>

<h4>4. Calculer une température avec un thermomètre</h4>
<div class="tip"><div class="lab">La démo du prof (thermometry.pdf)</div>On trace la propriété \(X\) en fonction de \(\theta\) : c'est une droite de \((0 ; X_0)\) à \((100 ; X_{100})\). La pente entre 0 et \(\theta\) est la même qu'entre 0 et 100 :
\(m_1=\frac{X_\theta-X_0}{\theta-0}\) et \(m_2=\frac{X_{100}-X_0}{100-0}\). Comme \(m_1=m_2\), on obtient \(\theta=\frac{X_\theta-X_0}{X_{100}-X_0}\times100\) °C.</div>
<p>On étalonne : on mesure la grandeur \(X\) (longueur de liquide, résistance…) à 0 °C (\(X_0\)) et à 100 °C (\(X_{100}\)). On suppose que \(X\) varie <b>linéairement</b> entre les deux. Alors :</p>
<p>$$\theta=\frac{X_\theta-X_0}{X_{100}-X_0}\times100$$</p>
<div class="ex"><div class="lab">Exemple pas à pas</div>Un thermomètre à alcool : la colonne mesure 11,82 cm dans la glace et 22,85 cm dans l'eau bouillante. Elle mesure 16,70 cm. Quelle température ?<br>
\(\theta=\frac{16{,}70-11{,}82}{22{,}85-11{,}82}\times100=\frac{4{,}88}{11{,}03}\times100\approx44{,}2\) °C.</div>
<div class="warnbox"><div class="lab">Attention</div>Deux thermomètres différents donnent la même valeur aux points fixes mais pas forcément entre les deux, parce que leurs propriétés ne varient pas exactement de façon linéaire.</div>

`,
    vocab: [
      ['temperature', 'température'], ['heat', 'chaleur'], ['fixed point', 'point fixe'],
      ['ice point / steam point', 'point de glace / point de vapeur'], ['triple point', 'point triple'], ['absolute zero', 'zéro absolu'],
      ['thermodynamic (absolute) temperature', 'température thermodynamique (absolue)'], ['kelvin', 'kelvin'],
      ['equilibrium', 'équilibre'], ['standard atmospheric pressure', 'pression atmosphérique normale'],
      ['thermometry', 'thermométrie'], ['thermal expansion', 'dilatation thermique'], ['electrical resistance', 'résistance électrique'],
      ['thermistor', 'thermistance'], ['platinum resistance thermometer', 'sonde (thermomètre) à résistance de platine'],
      ['thermocouple', 'thermocouple'], ['cold junction', 'soudure froide'], ['e.m.f. (electromotive force)', 'f.é.m. (force électromotrice)'],
      ['calibration', 'étalonnage'], ['conduction', 'conduction'], ['convection (free / forced)', 'convection (naturelle / forcée)'],
      ['radiation', 'rayonnement'], ['insulator / insulation', 'isolant / isolation'], ['lagging', 'calorifugeage (isolation d\'un tuyau)'],
      ['conservation of energy', 'conservation de l\'énergie']
    ],
    formules: [
      { nom: 'Kelvin ↔ Celsius', tex: '\\theta\\,(°C) = T\\,(K) - 273.15', why: 'Un écart de 1 K = un écart de 1 °C.' },
      { nom: 'Celsius → Fahrenheit', tex: 'F = 1.8\\,C + 32', why: '' },
      { nom: 'Thermomètre étalonné entre 0 et 100 °C', tex: '\\theta = \\dfrac{X_\\theta - X_0}{X_{100} - X_0} \\times 100', why: 'X = propriété mesurée (longueur, résistance…). Suppose une variation linéaire.' },
      { nom: 'Valeur de X à une température donnée', tex: 'X_\\theta = X_0 + \\dfrac{\\theta}{100}\\,(X_{100} - X_0)', why: 'La même formule, retournée.' }
    ],
    exos: [
      { src: 'Blackboard', niveau: 1, en: 'A resistance thermometer has a resistance of 25.40 Ω at the ice point, 27.34 Ω at the steam point and 26.95 Ω at the melting point of a certain solid. Calculate the melting point of the solid.', fr: 'Une sonde à résistance vaut 25,40 Ω à 0 °C, 27,34 Ω à 100 °C et 26,95 Ω au point de fusion d\'un solide. Quel est ce point de fusion ?',
        sol: String.raw`<p>\(\theta=\frac{26{,}95-25{,}40}{27{,}34-25{,}40}\times100=\frac{1{,}55}{1{,}94}\times100\approx\) <b>79,9 °C</b>.</p>` },
      { src: 'Blackboard', niveau: 1, en: 'A resistance thermometer has a resistance of 24.6 Ω at 0 °C and 28.2 Ω at 100 °C. (a) At what temperature will its resistance be 25.8 Ω? (b) Calculate the resistance at 200 °C, stating any assumption. (c) Give two advantages of a resistance thermometer compared with mercury-in-glass.', fr: 'Une sonde vaut 24,6 Ω à 0 °C et 28,2 Ω à 100 °C. (a) À quelle température vaut-elle 25,8 Ω ? (b) Sa résistance à 200 °C (hypothèse ?). (c) Deux avantages par rapport au thermomètre à mercure.',
        sol: '<p>(a) (25,8 − 24,6)/(28,2 − 24,6) × 100 = 1,2/3,6 × 100 ≈ <b>33 °C</b>.<br>(b) En supposant que R varie linéairement au-delà de 100 °C : R = 24,6 + 2 × 3,6 = <b>31,8 Ω</b>.<br>(c) Plage de mesure plus large ; lecture électronique/à distance ; plus robuste ; très précise et stable.</p>' },
      { src: 'Blackboard', niveau: 1, en: 'In an alcohol-in-glass thermometer the column is 11.82 cm long at 0.0 °C and 22.85 cm at 100.0 °C. What is the temperature if the column is (a) 16.70 cm (b) 20.50 cm?', fr: 'Thermomètre à alcool : 11,82 cm à 0 °C, 22,85 cm à 100 °C. Température si la colonne mesure (a) 16,70 cm, (b) 20,50 cm ?',
        sol: '<p>(a) 4,88/11,03 × 100 ≈ <b>44,2 °C</b> · (b) 8,68/11,03 × 100 ≈ <b>78,7 °C</b></p>' },
      { src: 'Claude', niveau: 1, en: 'Convert: (a) 25 °C to K (b) 77 K (liquid nitrogen) to °C (c) a rise from 18 °C to 43 °C into kelvin.', fr: 'Convertis : (a) 25 °C en K (b) 77 K en °C (c) une hausse de 18 °C à 43 °C, en kelvins.',
        sol: '<p>(a) 298 K · (b) −196 °C · (c) ΔT = 25 °C = <b>25 K</b> (un écart ne change pas).</p>' },
      { src: 'Claude', niveau: 1, en: 'Which type of thermometer would you choose for: (a) a car engine exhaust at 800 °C (b) a laboratory reference standard (c) a cheap digital thermometer for a fridge? Justify.', fr: 'Quel thermomètre choisir pour : (a) un échappement à 800 °C (b) une référence de labo (c) un thermomètre de frigo pas cher ? Justifie.',
        sol: '<p>(a) Thermocouple : supporte les hautes températures, rapide. (b) Sonde platine : très stable et précise. (c) Thermistance : pas chère, électronique, assez précise sur une petite plage.</p>' },
      { src: 'Claude', niveau: 2, en: 'A thermocouple gives 0 mV at 0 °C and 4.10 mV at 100 °C. Assuming linear behaviour, what temperature corresponds to 2.87 mV?', fr: 'Un thermocouple donne 0 mV à 0 °C et 4,10 mV à 100 °C. Quelle température pour 2,87 mV (linéaire) ?',
        sol: '<p>2,87/4,10 × 100 = <b>70 °C</b>.</p>' }
    ]
  };

  // =========================== SEMAINE 2 ===========================
  S[2] = {
    titre: 'Heat 3: Heat Transfer & Heat Capacity · Heat 4: Specific Heat',
    titreFr: 'Modes de transfert de chaleur, capacité thermique et chaleur massique',
    resume: 'Conduction, convection, rayonnement ; Q = mcΔT ; méthode des mélanges (calorimètre) ; calorimétrie à débit constant. Premier TD : Example Sheet 1.',
    sources: 'Lecture notes 1 & 2 · heat capacity.docx (notes du tableau) · Example Sheet 1 · GENG0005 Timetable (Blackboard)',
    en: String.raw`
<h4>Heat 3 — Heat and heat transfer</h4>
<p>If a body's temperature rises, it has gained energy. This energy is <b>heat</b>, measured in joules (J). A body can also gain or lose heat <i>without</i> changing temperature when it changes state (melting, boiling). Energy can be converted (motor, electric heater, steam engine) — energy is always conserved, but not all of it comes out in the form we want.</p>

<h5>Transfer of heat</h5>
<p>Heat always flows from hotter to cooler bodies, by three mechanisms:</p>
<ul><li><b>Conduction</b> (mainly solids): vibrating molecules pass energy to their neighbours.</li>
<li><b>Convection</b> (liquids and gases): warm fluid becomes less dense and rises (<i>free convection</i>), or is moved by a pump/fan (<i>forced convection</i>).</li>
<li><b>Radiation</b>: energy moves directly through space; the only way through a vacuum.</li></ul>
<p>Temperature can change without heat transfer (a bicycle pump heats up from mechanical work), but heat cannot flow without a temperature difference.</p>
<h5>Insulation</h5>
<p>To stop conduction use an insulator (plastics, fibres, trapped gas); to stop convection prevent the fluid moving (foams, wetsuits, vacuum flasks); to stop radiation use reflective surfaces. A <b>jacket</b> held at the right temperature by a thermostat can keep a reactor at constant temperature.</p>
<h4>Heat 3 & 4 — Heat capacity and specific heat</h4>
<h4>1. Heat capacity</h4>
<p>The temperature rise of a body supplied with heat depends on its mass, the substance, and whether a phase change happens. The <b>heat capacity</b> \(C\) is the heat needed to raise the body's temperature by 1 K: \(\Delta Q=C\,\Delta T\) (J K⁻¹).</p>
<p>\(C\) is proportional to mass; \(c=C/m\) is the <b>specific heat capacity</b>: heat to raise 1 kg by 1 K. \(\Delta Q=mc\,\Delta T\), with \(c\) in J kg⁻¹ K⁻¹.</p>
<div class="ex"><div class="lab">Example — storage heater</div>50 kg of firebricks (c = 810 J kg⁻¹ K⁻¹) heated from 20 °C to 250 °C in 6 h. \(\Delta Q=810\times50\times230=9.32\) MJ. Average power \(=9.315\times10^6/21\,600=431\) W.</div>
<p>Typical values (J kg⁻¹ K⁻¹): water 4190, rubber 2500, polyethylene 2100, diesel 1800, air 1005, limestone 909, brick 810, steel 460, copper 385. Liquids and organic solids are high, metals low.</p>
<p>Board notes (Dr Lim): electrical conduction ↔ heat conduction — electrical potential difference \(\Delta V=V_2-V_1\) drives current, temperature difference \(\Delta T=T_2-T_1\) drives heat. \(C=\dfrac{\Delta Q}{\Delta T}\) (J K⁻¹ = J °C⁻¹), \(C\propto m\Rightarrow C=cm\), \(c=\dfrac{1}{m}\dfrac{\Delta Q}{\Delta T}\): the heat for 1 kg and 1 K. Heat loss = heat gain: \(\Delta Q_{metal}=\Delta Q_{water}+\Delta Q_{calorimeter}\), or with signs \(\Delta Q+\Delta Q_1+\Delta Q_2=0\).</p>
<h5>1.1 Measuring specific heat (calorimeter)</h5>
<p>The specimen is placed in an insulated calorimeter with an electric heater (power \(P=IV\)). Measure \(m\), \(T_1\), \(I\), \(V\), time \(t\) and final \(T_2\). Assuming no heat loss: \(IVt=mc(T_2-T_1)\Rightarrow c=\dfrac{IVt}{m(T_2-T_1)}\).</p>
<p><b>Method of mixtures:</b> objects at different temperatures exchange heat until they reach the same final temperature. By conservation of energy the <b>sum of all heat gains is zero</b> (always write gain = final − initial; a loss comes out negative).</p>
<div class="ex"><div class="lab">Example</div>0.5 kg metal at 100 °C dropped into a 0.05 kg copper calorimeter with 0.9 kg water at 20 °C; final 25 °C. Metal: \(0.5c(25-100)=-37.5c\); water: \(0.9\times4190\times5=18\,855\) J; calorimeter: \(0.05\times385\times5=96.25\) J. \(-37.5c+18\,855+96.25=0\Rightarrow c\approx505\) J kg⁻¹ K⁻¹.</div>

<h4>2. Specific heat of a liquid or gas — constant-flow calorimetry</h4>
<p>Callendar and Barnes (1899): fluid flows at a steady rate through a glass tube past a heating wire; thermometers measure inlet \(T_1\) and outlet \(T_2\); a vacuum jacket reduces losses. Allowing a heat loss \(h\): \(IVt=mc(T_2-T_1)+h\) …(1). Change the flow rate to \(m'\) and adjust \(I',V'\) so that \(T_2\) is unchanged (same losses): \(I'V't=m'c(T_2-T_1)+h\) …(2). Solve (1) and (2) for \(c\) and \(h\).</p>
<p>Per unit time: \(IV=\dot m\,c\,(T_2-T_1)+\dot h\), with \(\dot m=\rho\dot V\).</p>
<div class="ex"><div class="lab">Example</div>12.0 V, 1.5 A, 90 g/min and 16.0 V, 2.00 A, 310 g/min; \(T_1=25.20\) °C, \(T_2=26.51\) °C. \(18=1.965\times10^{-3}c+\dot h\) and \(32=6.768\times10^{-3}c+\dot h\) → \(c\approx2915\) J kg⁻¹ K⁻¹, \(\dot h\approx12.3\) W.</div>

`,
    fr: String.raw`
<h4>La chaleur et ses 3 modes de transfert</h4>
<p>La <b>chaleur</b> est de l'énergie (en joules) qui passe d'un corps chaud vers un corps froid. <b>Température ≠ chaleur</b> : une piscine à 25 °C contient beaucoup plus de chaleur qu'une tasse de thé à 80 °C.</p>
<ul><li><b>Conduction</b> : à travers un solide, de proche en proche. La poignée d'une casserole en métal devient chaude.</li>
<li><b>Convection</b> : le fluide chaud monte et le froid descend (l'eau dans une casserole, l'air au-dessus d'un radiateur). Forcée avec un ventilateur ou une pompe (radiateur de voiture).</li>
<li><b>Rayonnement</b> : la chaleur du Soleil traverse le vide. Tu le sens sur ta peau au soleil.</li></ul>
<p><b>Isoler</b> : contre la conduction, un isolant (plastique, laine, air immobile) ; contre la convection, empêcher l'air de bouger (doudoune, double vitrage) ; contre le rayonnement, une surface brillante (couverture de survie, bouteille isotherme).</p>
<h4>1. Capacité thermique et chaleur massique</h4>
<p>Pour chauffer quelque chose, il faut de l'énergie. Combien ? Ça dépend de 3 choses : <b>la masse</b> (chauffer 2 L d'eau prend 2 fois plus d'énergie qu'1 L), <b>la matière</b> (l'eau est très « dure » à chauffer, le métal très facile), et <b>l'écart de température</b>.</p>
<p>$$Q = m\,c\,\Delta T$$</p>
<ul><li>\(Q\) : chaleur (J) · \(m\) : masse (kg) · \(\Delta T\) : variation de température (K ou °C, c'est pareil)</li>
<li>\(c\) : <b>chaleur massique</b> (specific heat capacity), en J/(kg·K) : l'énergie pour chauffer 1 kg de 1 degré. Eau : 4190 ; acier : 460 ; cuivre : 385.</li>
<li>\(C=mc\) : <b>capacité thermique</b> d'un objet entier (J/K).</li></ul>
<div class="ex"><div class="lab">Exemple concret — ta bouilloire</div>Tu fais chauffer 1 L d'eau (1 kg) de 20 °C à 100 °C. \(Q=1\times4190\times80=335\,200\) J ≈ 335 kJ. Avec une bouilloire de 2000 W : \(t=Q/P=335\,200/2000\approx168\) s ≈ 3 min. C'est bien ce qu'on observe !</div>
<div class="tip"><div class="lab">Pourquoi la mer se réchauffe lentement</div>L'eau a une très grande chaleur massique : il faut beaucoup d'énergie pour la chauffer. C'est pour ça que la plage reste fraîche alors que le sable brûle (le sable a un \(c\) bien plus petit).</div>

<div class="tip"><div class="lab">L'analogie du prof (au tableau)</div>La chaleur se comporte comme l'électricité : le courant va du potentiel électrique le plus haut vers le plus bas (\(\Delta V=V_2-V_1\)), et la chaleur va de la température la plus haute vers la plus basse (\(\Delta T=T_2-T_1\)). Pas de différence de potentiel = pas de courant ; pas de différence de température = pas de flux de chaleur.</div>
<h4>2. Mesurer c : le calorimètre</h4>
<p>Un <b>calorimètre</b> est un récipient isolé. On chauffe l'échantillon avec une résistance électrique : l'énergie fournie vaut \(E=P\,t=I\,V\,t\). Si on suppose qu'il n'y a pas de pertes :</p>
<p>$$IVt = mc(T_2 - T_1) \quad\Rightarrow\quad c = \frac{IVt}{m(T_2-T_1)}$$</p>

<h4>3. La méthode des mélanges</h4>
<p>Quand on met en contact des objets chauds et froids (dans un calorimètre isolé), ils échangent de la chaleur jusqu'à avoir <b>la même température finale</b>. L'énergie est conservée, donc :</p>
<p>$$\sum \text{(chaleurs gagnées)} = 0$$</p>
<p>Méthode sûre : pour chaque objet, écris \(Q=mc(T_{finale}-T_{initiale})\). Le chaud aura un \(Q\) négatif (il perd), le froid un \(Q\) positif. Puis additionne tout = 0.</p>
<div class="ex"><div class="lab">Exemple pas à pas</div>Tu plonges un bloc de métal de 0,5 kg à 100 °C dans 0,9 kg d'eau à 20 °C (dans un récipient en cuivre de 0,05 kg). Tout finit à 25 °C. Quel est \(c\) du métal ?<br>
• Métal : \(0{,}5\times c\times(25-100)=-37{,}5c\)<br>
• Eau : \(0{,}9\times4190\times(25-20)=18\,855\) J<br>
• Récipient : \(0{,}05\times385\times5=96{,}25\) J<br>
Somme = 0 → \(37{,}5c=18\,951\) → \(c\approx505\) J/(kg·K).</div>
<div class="warnbox"><div class="lab">Oubli fréquent</div>Le récipient (calorimètre) et même le thermomètre chauffent aussi ! S'ils sont donnés dans l'énoncé, il faut les compter.</div>

<h4>4. Pour un liquide qui coule : calorimétrie à débit constant</h4>
<p>Un liquide passe dans un tube chauffé par un fil électrique. On mesure la température à l'entrée \(T_1\) et à la sortie \(T_2\). Ici on ne néglige pas les pertes \(h\) :</p>
<p>$$IV = \dot m\,c\,(T_2-T_1) + \dot h$$</p>
<p>(\(\dot m\) = débit massique en kg/s, \(\dot h\) = pertes en W.) Deux inconnues (\(c\) et \(\dot h\)) → on fait <b>deux expériences</b> avec deux débits différents mais les mêmes températures, et on résout le système (comme en Maths A semaine 1 !).</p>
<div class="tip"><div class="lab">Conversion débit</div>90 g/min = 0,090 kg / 60 s = 1,5 × 10⁻³ kg/s.</div>

`,
    vocab: [
      ['heat transfer', 'transfert de chaleur'], ['conduction / convection / radiation', 'conduction / convection / rayonnement'], ['insulator', 'isolant'], ['potential difference', 'différence de potentiel'],
      ['heat capacity', 'capacité thermique (J/K)'], ['specific heat capacity', 'chaleur massique (J/kg·K)'],
      ['calorimeter', 'calorimètre'], ['method of mixtures', 'méthode des mélanges'], ['lagging jacket', 'enveloppe isolante'],
      ['heating element / heater', 'résistance chauffante'], ['current / voltage (p.d.)', 'intensité / tension'], ['power', 'puissance'],
      ['heat loss', 'perte de chaleur'], ['constant-flow calorimetry', 'calorimétrie à débit constant'],
      ['mass flow rate', 'débit massique'], ['volume flow rate', 'débit volumique'], ['fluid', 'fluide (liquide ou gaz)'],
      ['steady state', 'régime permanent'], ['significant figures (s.f.)', 'chiffres significatifs'], ['immersion heater', 'thermoplongeur']
    ],
    formules: [
      { nom: 'Capacité thermique', tex: '\\Delta Q = C\\,\\Delta T', why: 'C en J/K, pour un objet entier.' },
      { nom: 'Chaleur massique', tex: '\\Delta Q = m\\,c\\,\\Delta T', why: 'c en J kg⁻¹ K⁻¹. Eau : 4190.' },
      { nom: 'Énergie électrique fournie', tex: 'E = P\\,t = I\\,V\\,t', why: '' },
      { nom: 'Calorimètre électrique (sans pertes)', tex: 'c = \\dfrac{I\\,V\\,t}{m\\,(T_2 - T_1)}', why: '' },
      { nom: 'Méthode des mélanges', tex: '\\sum_i m_i\\,c_i\\,(T_f - T_{i}) = 0', why: 'Gain = final − initial pour chaque objet.' },
      { nom: 'Calorimétrie à débit constant', tex: 'I\\,V = \\dot m\\,c\\,(T_2 - T_1) + \\dot h', why: 'Deux débits → deux équations → c et ḣ.' },
      { nom: 'Débit massique', tex: '\\dot m = \\rho\\,\\dot V', why: '' },
      { nom: 'Énergie cinétique (utile en TD)', tex: 'E_k = \\tfrac12 m v^2', why: '' }
    ],
    exos: [
      { src: 'Claude', niveau: 1, en: 'Name the main heat transfer mechanism in each case: (a) a metal spoon in hot tea gets hot (b) warm air rising above a heater (c) feeling the heat of a fire from across a room.', fr: 'Quel mode de transfert dans chaque cas ?',
        sol: '<p>(a) Conduction · (b) Convection · (c) Rayonnement</p>' },
      { src: 'Blackboard', niveau: 2, en: 'A 0.236 kg block of silver heated to 335 °C is plunged into an aluminium calorimeter of mass 0.10 kg containing 0.150 kg of water at 12.5 °C; the temperature stabilises at 35.0 °C. A 17 g glass thermometer is used. Find the specific heat capacity of silver. (c_Al = 900, c_glass = 840 J kg⁻¹ K⁻¹)', fr: 'Un bloc d\'argent de 0,236 kg à 335 °C est plongé dans un calorimètre en alu (0,10 kg) avec 0,150 kg d\'eau à 12,5 °C ; final 35,0 °C ; thermomètre en verre de 17 g. Trouve c de l\'argent.',
        sol: '<p>Gains : alu 0,10 × 900 × 22,5 = 2025 J ; eau 0,150 × 4190 × 22,5 = 14 141 J ; verre 0,017 × 840 × 22,5 = 321 J → total 16 488 J.<br>Perte de l\'argent : 0,236 × c × 300 = 70,8c. Donc c ≈ <b>233 J kg⁻¹ K⁻¹</b>.</p>' },
      { src: 'Blackboard', niveau: 1, en: 'A metal calorimeter containing 1 litre of water at 10 °C is heated until the water reaches 90 °C. Total heat input is 350 kJ, with 7.5 kJ lost to the atmosphere. What is the heat capacity of the calorimeter?', fr: 'Un calorimètre avec 1 L d\'eau passe de 10 °C à 90 °C. On fournit 350 kJ, dont 7,5 kJ perdus. Capacité thermique du calorimètre ?',
        sol: '<p>Utile : 342 500 J. Eau : 1 × 4190 × 80 = 335 200 J. Reste 7300 J pour 80 K → C = <b>91,25 J/K</b>.</p>' },
      { src: 'Blackboard', niveau: 3, en: 'A 0.11 kg metal block (c = 400 J kg⁻¹ K⁻¹) at 100 °C is put in a calorimeter with 0.20 kg of liquid at 10 °C: final 18 °C. Repeated with 0.40 kg of liquid at 10 °C: final 14.5 °C. Find (a) c of the liquid (b) the heat capacity of the container.', fr: 'Deux expériences avec le même bloc et le même récipient : trouve c du liquide et la capacité thermique du récipient.',
        sol: '<p>Exp. 1 : 0,11 × 400 × 82 = 3608 = 0,20c × 8 + 8C → 1,6c + 8C = 3608.<br>Exp. 2 : 0,11 × 400 × 85,5 = 3762 = 0,40c × 4,5 + 4,5C → 1,8c + 4,5C = 3762.<br>De la 1re : C = 451 − 0,2c → 1,8c + 2029,5 − 0,9c = 3762 → c = <b>1925 J kg⁻¹ K⁻¹</b>, C = <b>66 J/K</b>.</p>' },
      { src: 'Blackboard', niveau: 2, en: '* Estimate the temperature rise of the brake discs (total mass 5 kg, c = 800 J kg⁻¹ K⁻¹) of a 1200 kg car travelling at 30 m s⁻¹ brought to rest by the brakes alone. Assume no heat loss.', fr: '* Une voiture de 1200 kg à 30 m/s freine jusqu\'à l\'arrêt. Hausse de température des disques (5 kg au total, c = 800) ?',
        sol: '<p>E = ½ × 1200 × 30² = 540 000 J → ΔT = 540 000 / (5 × 800) = <b>135 K</b>. (C\'est pour ça que les freins chauffent !)</p>' },
      { src: 'Blackboard', niveau: 2, en: 'A room is heated during the day by a 1 kW electric fire. It is replaced by a storage heater: a concrete cube heated overnight that cools from 70 °C to 30 °C during the day, giving out the same heat as the fire in 8 hours. Estimate the edge of the cube. (ρ = 2700 kg m⁻³, c = 850 J kg⁻¹ K⁻¹)', fr: 'Un radiateur à accumulation (cube de béton qui refroidit de 70 °C à 30 °C) doit donner autant de chaleur qu\'un radiateur de 1 kW pendant 8 h. Côté du cube ?',
        sol: '<p>Q = 1000 × 8 × 3600 = 28,8 MJ. m = Q/(cΔT) = 28,8 × 10⁶ / (850 × 40) = 847 kg. V = 847/2700 = 0,314 m³ → côté ≈ <b>0,68 m</b>.</p>' },
      { src: 'Blackboard', niveau: 1, en: 'Water in a tank is heated by a 10 kW immersion heater for 10 minutes; its temperature rises by 20 °C. Assuming no losses, what is the heat capacity of the tank? (heat capacity of the water = 1.2 × 10⁵ J K⁻¹)', fr: 'Un thermoplongeur de 10 kW chauffe l\'eau d\'un réservoir 10 min (+20 °C). Capacité thermique du réservoir ?',
        sol: '<p>Q = 10 000 × 600 = 6 MJ → C_total = 6 × 10⁶ / 20 = 3 × 10⁵ J/K. Réservoir : 3 × 10⁵ − 1,2 × 10⁵ = <b>1,8 × 10⁵ J/K</b>.</p>' },
      { src: 'Blackboard', niveau: 2, en: 'A steady stream of air (ρ = 1.2 kg m⁻³, c = 1000 J kg⁻¹ K⁻¹) is drawn through a tube containing a 500 W heater at 0.4 m³ s⁻¹. Find the maximum temperature rise.', fr: 'De l\'air passe à 0,4 m³/s devant une résistance de 500 W. Hausse de température maximale ?',
        sol: '<p>ṁ = 1,2 × 0,4 = 0,48 kg/s → ΔT = 500 / (0,48 × 1000) ≈ <b>1,04 °C</b>.</p>' },
      { src: 'Blackboard', niveau: 1, en: 'The bit of a soldering iron is 3.3 g of copper (c = 385). The element power is 45 W. How long to heat from 15 °C to 370 °C, with no losses?', fr: 'La panne d\'un fer à souder (3,3 g de cuivre) chauffée par 45 W : combien de temps de 15 à 370 °C ?',
        sol: '<p>Q = 0,0033 × 385 × 355 ≈ 451 J → t = 451/45 ≈ <b>10 s</b>.</p>' },
      { src: 'Blackboard', niveau: 3, en: '* Mr Brown boils water by shaking it in a flask: 0.5 L at 23 °C, the water falls 30 cm per shake, 30 shakes per minute. Neglecting losses, how long until it boils?', fr: '* M. Brown fait bouillir de l\'eau en la secouant dans un thermos (0,5 L à 23 °C, chute de 30 cm, 30 secousses/min). Combien de temps ?',
        sol: '<p>Par secousse : mgh = 0,5 × 9,81 × 0,3 = 1,47 J → 44,1 J/min. Il faut 0,5 × 4190 × 77 = 161 315 J → 3654 min ≈ 61 h ≈ <b>2,5 jours</b>.</p>' },
      { src: 'Claude', niveau: 1, en: 'How much energy is needed to heat 250 g of water for tea from 20 °C to 95 °C? How long with a 1.5 kW kettle?', fr: 'Combien d\'énergie pour chauffer 250 g d\'eau de 20 à 95 °C ? Combien de temps avec une bouilloire de 1,5 kW ?',
        sol: '<p>Q = 0,25 × 4190 × 75 ≈ 78,6 kJ → t = 78 600/1500 ≈ <b>52 s</b>.</p>' },
      { src: 'Claude', niveau: 2, en: 'In a constant-flow experiment: 10 V, 2 A with 1.0 × 10⁻³ kg/s, and 15 V, 2.5 A with 2.0 × 10⁻³ kg/s, temperature rise 4.0 K in both cases. Find c and the rate of heat loss.', fr: 'Calorimétrie à débit constant : trouve c et les pertes.',
        sol: '<p>20 = 0,004c + ḣ et 37,5 = 0,008c + ḣ → 0,004c = 17,5 → c = <b>4375 J kg⁻¹ K⁻¹</b>, ḣ = <b>2,5 W</b>.</p>' }
    ]
  };

  // =========================== SEMAINE 3 ===========================
  S[3] = {
    titre: 'Heat 5: Latent Heat · Heat 6: Thermal Expansion 1',
    titreFr: 'Chaleur latente · Dilatation thermique',
    resume: 'Les changements d\'état (chaleur latente, paliers de température), puis la dilatation thermique : linéaire, surfacique et volumique, liquides, dilatation apparente, cas de l\'eau, et applications (frettage, bilame, pendule compensé). Example Sheet 2.',
    sources: 'Lecture notes « 2. Heat Capacity and Latent Heat », section 3 · Lecture notes « 3. Thermal Expansion » · diapos « Thermal Expansion (part 1) » (Prof Ling Wang) · Example Sheet 2 · GENG0005 Timetable (Blackboard)',
    en: String.raw`
<h4>Heat 5 — Latent heat</h4>
<p>During a change of state, the heat absorbed or released changes the bonds between molecules; <b>there is no temperature change</b>. Heating ice from −5 °C: (A) ice warms to 0 °C, (B) ice melts at 0 °C, (C) water warms to 100 °C, (D) water boils at 100 °C, (E) steam is superheated.</p>
<ul><li><b>Specific latent heat of fusion</b>: heat to turn 1 kg of solid into liquid (or released in reverse).</li>
<li><b>Specific latent heat of vaporisation</b>: heat to turn 1 kg of liquid into vapour (or released in reverse).</li></ul>
<p>\(\Delta Q=m\,l\). Applications: wind chill, steam scalds being worse than hot-water scalds, refrigerators, steam engines.</p>
<div class="ex"><div class="lab">Example</div>1 kg of vegetables (c = 2200) at 373 K plunged into ice water at 273 K. Heat given: \(1\times2200\times100=220\) kJ = \(m\times330\times10^3\) → \(m=0.67\) kg of ice melted.</div>

<h4>Heat 6 — Thermal expansion (part 1)</h4>
<p><b>Learning outcomes:</b> explain what thermal expansion is; calculate the coefficient of linear expansion for solids; describe applications of thermal expansion.</p>
<h5>1. Solids — linear expansion</h5>
<p>When a body heats up (ignoring phase changes), the amplitude of molecular vibration increases; this also increases the average distance between molecules slightly, so the body gets slightly larger. For small temperature changes the change in size is proportional to the change in temperature, and also proportional to the original size (two 1 m bars that each grow by 0.1 mm behave like one 2 m bar growing by 0.2 mm).</p>
<p>$$\delta L=\alpha L\,\delta\theta \qquad\text{or}\qquad \alpha=\frac{\delta L}{L}\,(\delta\theta)^{-1}$$</p>
<p>\(\alpha\) is the <b>linear expansivity</b> (coefficient of thermal expansion), in K⁻¹ (or °C⁻¹); it depends on the material and the mean temperature. \(\delta L/L\) is the <b>strain</b>: a ratio of two lengths, so it is dimensionless. Because \(\alpha\) is tiny it is often quoted ×10⁶, in μm/(m K) (μstrain).</p>
<table><tr><th>Material</th><th>α (K⁻¹)</th></tr>
<tr><td>Steel, cast iron</td><td>12×10⁻⁶</td></tr><tr><td>Aluminium</td><td>24×10⁻⁶</td></tr><tr><td>Brass</td><td>21×10⁻⁶</td></tr><tr><td>Glass</td><td>8×10⁻⁶</td></tr><tr><td>Wood</td><td>4×10⁻⁶</td></tr><tr><td>Polyethylene</td><td>220×10⁻⁶</td></tr><tr><td>Nylon</td><td>120×10⁻⁶</td></tr><tr><td>Rubber</td><td>600×10⁻⁶</td></tr></table>
<p>Polymers tend to have much higher values than metals (a version of this table is in the data booklet).</p>
<div class="ex"><div class="lab">Example — steam boiler</div>A steel boiler has a diameter of 1.2 m at 20 °C. Diameter at 100 °C? The metal that actually expands is the circumference, but \(C=\pi D\) before and after, so \(\delta C/C=\delta D/D\): we can treat the diameter like a piece of material. \(\delta D=\alpha D\delta\theta=12\times10^{-6}\times1.2\times80=0.0012\) m = 1.2 mm → new diameter <b>1.2012 m</b>. (80 °C is not strictly small, but α is so small that the change in size stays small.)</div>
<h5>Applications</h5>
<ul><li><b>Shrink fitting:</b> the hole is made slightly smaller than the shaft; the part with the hole is heated (or the shaft is cooled, e.g. in liquid nitrogen at −196 °C), they are assembled and, on returning to room temperature, a very strong joint forms. They cannot be separated by re-heating, since both heat up together.</li>
<li><b>Bimetal strip</b> (sensors, thermostats): two metals with different α bonded together; the strip bends when heated, converting a temperature change into a mechanical displacement. Coiled versions are more compact and more sensitive.</li>
<li><b>Temperature compensation:</b> John Harrison's gridiron pendulum (1725) uses alternating brass and steel rods; with the right lengths the brass expansion cancels the steel expansion and the pendulum length stays constant.</li></ul>
<h5>2. Area</h5>
<p>Isotropic materials (e.g. metals) expand equally in every direction; anisotropic ones (wood, glass-reinforced plastic, many composites) do not. For a plate \(a\times b\): \(A+\delta A=(a+\delta a)(b+\delta b)=ab+a\delta b+b\delta a+\delta a\delta b\). The term \(\delta a\,\delta b\) is a <b>second-order small quantity</b> and is neglected, so \(\dfrac{\delta A}{A}=\dfrac{\delta a}{a}+\dfrac{\delta b}{b}=2\alpha\,\delta\theta\): the area expansivity is <b>2α</b>.</p>
<h5>3. Volume</h5>
<p>$$\frac{\delta V}{V}=3\alpha\,\delta\theta=\beta\,\delta\theta$$ The volume (cubical) expansivity is \(\beta=3\alpha\).</p>
<p><b>Liquids and gases</b> have no fixed shape, only a volume expansivity \(\beta\) — typically about 100 times larger than α for solids. For a perfect gas \(\beta=1/T\) (seen later).</p>
<table><tr><th>Fluid</th><th>β (K⁻¹)</th></tr><tr><td>Water</td><td>0.21×10⁻³</td></tr><tr><td>Ethyl alcohol</td><td>1.08×10⁻³</td></tr><tr><td>Engine oil</td><td>0.8×10⁻³</td></tr><tr><td>Mercury</td><td>0.18×10⁻³</td></tr><tr><td>Gases</td><td>3×10⁻³</td></tr></table>
<div class="ex"><div class="lab">Example — whisky bottle</div>A 1 L bottle is filled at 35 °C. Short measure at 15 °C? \(\delta V=V\beta\delta\theta=1000\times1.08\times10^{-3}\times(-20)=-21.6\) ml.</div>
<h5>Apparent expansion</h5>
<p>The container also expands, with the volume expansivity of its own material (imagine a solid glass insert that fits exactly). Glass bottle: \(\delta V=1000\times(3\times8\times10^{-6})\times(-20)=-0.48\) ml. The expansivity measured ignoring the container is the <b>apparent</b> expansivity: \(\beta_{true}=\beta_{apparent}+\beta_{container}=\beta_{apparent}+3\alpha_{container}\).</p>
<h5>4. Properties of water</h5>
<p>When cooled, water contracts until about <b>4 °C</b> (minimum volume, maximum density), then expands again down to 0 °C. On freezing it expands significantly (ice ≈ 900 kg/m³): this bursts pipes, makes ice float, and makes water freeze from the top (the coldest water, below 4 °C, rises).</p>`,
    fr: String.raw`
<h4>La chaleur latente (changement d'état)</h4>
<p>Quand la glace fond ou que l'eau bout, on continue à fournir de la chaleur mais <b>la température ne bouge pas</b> : toute l'énergie sert à casser les liaisons entre molécules. C'est la <b>chaleur latente</b>.</p>
<p>$$Q = m\,l$$</p>
<ul><li>\(l_f\) = chaleur latente de <b>fusion</b> (solide ↔ liquide). Eau : 330 kJ/kg.</li>
<li>\(l_v\) = chaleur latente de <b>vaporisation</b> (liquide ↔ gaz). Eau : ≈ 2260 kJ/kg (énorme !).</li></ul>
<p>Le graphique température/temps quand on chauffe de la glace à −5 °C : ça monte (glace), <b>palier à 0 °C</b> (fusion), ça monte (eau), <b>palier à 100 °C</b> (ébullition), ça remonte (vapeur).</p>
<div class="ex"><div class="lab">Exemples de la vie réelle</div>• Une brûlure par la vapeur est pire qu'avec l'eau bouillante : la vapeur libère en plus sa chaleur latente en se condensant sur ta peau.<br>
• Tu as froid en sortant de la piscine : l'eau qui s'évapore prend de la chaleur à ta peau.<br>
• Un frigo fait évaporer un fluide à l'intérieur (absorbe la chaleur) et le condense à l'arrière (rejette la chaleur).</div>
<div class="ex"><div class="lab">Exemple complet</div>Transformer 0,5 kg de glace à −10 °C en eau à 20 °C (c<sub>glace</sub> = 2100) :<br>
① chauffer la glace : 0,5 × 2100 × 10 = 10 500 J<br>② la faire fondre : 0,5 × 330 000 = 165 000 J<br>③ chauffer l'eau : 0,5 × 4190 × 20 = 41 900 J<br>Total ≈ <b>217 kJ</b>. La fusion représente la plus grosse part !</div>

<h4>La dilatation thermique</h4>
<p>Quand on chauffe un objet, ses molécules vibrent plus fort et s'écartent un tout petit peu : <b>l'objet grandit</b>. C'est la dilatation.</p>
<p>$$\Delta L=\alpha\,L\,\Delta\theta$$</p>
<ul><li>\(L\) = longueur de départ, \(\Delta\theta\) = variation de température, \(\alpha\) = coefficient de dilatation linéaire (en K⁻¹), qui dépend du matériau.</li>
<li>\(\alpha\) est minuscule : acier 12×10⁻⁶, aluminium 24×10⁻⁶, laiton 21×10⁻⁶, verre 8×10⁻⁶. Les plastiques se dilatent bien plus (nylon 120×10⁻⁶, caoutchouc 600×10⁻⁶).</li></ul>
<div class="ex"><div class="lab">Exemple concret : les rails</div>Un rail d'acier de 20 m posé à 25 °C, la nuit descend à 0 °C : \(\Delta L=12\times10^{-6}\times20\times(-25)=-0{,}006\) m. Le rail raccourcit de <b>6 mm</b>, un trou de 6 mm apparaît entre deux rails. À l'inverse, en été, sans joints, les rails flambent.</div>
<div class="ex"><div class="lab">Exemple concret : la chaudière</div>Diamètre 1,2 m à 20 °C, acier, chauffée à 100 °C : \(\Delta D=12\times10^{-6}\times1{,}2\times80=1{,}2\) mm. Astuce : même si c'est la tôle (le périmètre) qui s'allonge, on peut appliquer la formule directement au diamètre, car \(C=\pi D\) garde la même proportion.</div>
<div class="tip"><div class="lab">Retenir</div>Le rapport \(\Delta L/L\) s'appelle la <b>déformation</b> (strain). C'est un rapport de deux longueurs, donc <b>sans unité</b>.</div>

<h4>Surface et volume</h4>
<p>Un objet se dilate dans toutes les directions. Pour un matériau isotrope (comme un métal) :</p>
<ul><li><b>surface</b> : \(\Delta A/A=2\alpha\,\Delta\theta\) ;</li><li><b>volume</b> : \(\Delta V/V=3\alpha\,\Delta\theta=\beta\,\Delta\theta\).</li></ul>
<p>Pourquoi 2 et 3 ? Parce qu'on néglige les produits de deux petites variations (\(\Delta a\,\Delta b\)) : c'est comme un centime sur 100 millions d'euros.</p>
<div class="ex"><div class="lab">Exemple concret : la sphère d'aluminium</div>+50 °C : diamètre \(+24\times10^{-6}\times50=0{,}12\,\%\), surface \(+0{,}24\,\%\), volume \(+0{,}36\,\%\).</div>

<h4>Liquides et gaz</h4>
<p>Ils n'ont pas de forme, seulement un volume : on utilise \(\beta\), environ 100 fois plus grand que \(\alpha\) des solides (alcool 1,08×10⁻³, eau 0,21×10⁻³, gaz ≈ 3×10⁻³).</p>
<div class="ex"><div class="lab">Exemple concret : la bouteille</div>Une bouteille de 1 L d'alcool remplie à 35 °C, refroidie à 15 °C : \(\Delta V=1000\times1{,}08\times10^{-3}\times(-20)=-21{,}6\) ml. C'est pour ça que l'essence achetée par forte chaleur te donne un peu moins de « vrai » carburant.</div>
<p><b>Dilatation apparente</b> : le récipient se dilate aussi (avec le \(\beta=3\alpha\) de son matériau). La bouteille en verre perd 0,48 ml. Donc \(\beta_{vrai}=\beta_{apparent}+3\alpha_{récipient}\).</p>

<h4>L'eau, un liquide bizarre</h4>
<p>En refroidissant, l'eau se contracte jusqu'à <b>4 °C</b> (densité maximale), puis se dilate à nouveau jusqu'à 0 °C. En gelant, elle gonfle beaucoup (glace ≈ 900 kg/m³) : les tuyaux éclatent, les glaçons flottent, et un lac gèle <b>par le dessus</b>.</p>

<h4>À quoi ça sert</h4>
<ul><li><b>Frettage</b> (shrink fitting) : on chauffe la pièce percée (ou on refroidit l'arbre dans l'azote liquide à −196 °C), on assemble, et en revenant à température ambiante les pièces se serrent très fort.</li>
<li><b>Bilame</b> : deux métaux collés qui ne se dilatent pas pareil ; en chauffant, la lame se courbe. C'est le principe des thermostats (grille-pain, fer à repasser).</li>
<li><b>Pendule compensé</b> de Harrison (1725) : des tiges de laiton et d'acier dont les dilatations s'annulent, pour que l'horloge reste juste quelle que soit la température.</li></ul>`,
    vocab: [
      ['latent heat', 'chaleur latente'], ['specific latent heat of fusion', 'chaleur latente massique de fusion'],
      ['specific latent heat of vaporisation', 'chaleur latente massique de vaporisation'], ['change of state / phase change', 'changement d\'état'],
      ['to melt / to freeze', 'fondre / geler'], ['to boil / to condense', 'bouillir / se condenser'], ['to evaporate', 's\'évaporer'],
      ['superheated steam', 'vapeur surchauffée'], ['wind chill', 'refroidissement éolien'], ['scald', 'brûlure (par liquide ou vapeur)'],
      ['thermal expansion', 'dilatation thermique'], ['linear expansivity (α)', 'coefficient de dilatation linéaire'], ['volume (cubical) expansivity (β)', 'coefficient de dilatation volumique'],
      ['strain', 'déformation (allongement relatif)'], ['dimensionless', 'sans dimension (sans unité)'], ['isotropic / anisotropic', 'isotrope / anisotrope'],
      ['second-order small quantity', 'petite quantité du second ordre (négligeable)'], ['apparent expansion', 'dilatation apparente'],
      ['shrink fitting', 'frettage (assemblage par dilatation)'], ['bimetal strip', 'bilame'], ['shaft', 'arbre (axe)'], ['push fit', 'emmanchement juste'],
      ['radius of curvature', 'rayon de courbure'], ['to contract', 'se contracter'], ['density', 'masse volumique']
    ],
    formules: [
      { nom: 'Chaleur latente', tex: '\\Delta Q = m\\,l', why: 'Pas de variation de température pendant le changement d\'état.' },
      { nom: 'Chauffer puis changer d\'état', tex: 'Q_{tot} = m c_1 \\Delta T_1 + m l + m c_2 \\Delta T_2', why: 'On additionne chaque étape (paliers + montées).' },
      { nom: 'Dilatation linéaire', tex: '\\delta L = \\alpha L\\,\\delta\\theta', why: 'α en K⁻¹ ; δL/L est la déformation (sans unité).' },
      { nom: 'Dilatation surfacique', tex: '\\dfrac{\\delta A}{A} = 2\\alpha\\,\\delta\\theta', why: 'On néglige δa·δb (second ordre).' },
      { nom: 'Dilatation volumique', tex: '\\dfrac{\\delta V}{V} = \\beta\\,\\delta\\theta,\\quad \\beta = 3\\alpha', why: 'Pour un solide isotrope ; pour un liquide, β est donné directement.' },
      { nom: 'Dilatation apparente', tex: '\\beta_{true} = \\beta_{apparent} + 3\\alpha_{container}', why: 'Le récipient se dilate aussi.' }
    ],
    exos: [
      { src: 'Blackboard', niveau: 2, en: '1 kg of vegetables (c = 2200 J kg⁻¹ K⁻¹) at 373 K are plunged into a mixture of ice and water at 273 K. How much ice is melted? (l_f = 330 × 10³ J kg⁻¹)', fr: '1 kg de légumes à 373 K plongés dans de l\'eau glacée à 273 K : quelle masse de glace fond ?',
        sol: '<p>Chaleur cédée : 1 × 2200 × 100 = 220 kJ = m × 330 kJ/kg → m ≈ <b>0,67 kg</b>.</p>' },
      { src: 'Claude', niveau: 2, en: 'How much heat is needed to turn 0.2 kg of ice at 0 °C into steam at 100 °C? (l_f = 330 kJ/kg, l_v = 2260 kJ/kg)', fr: 'Quelle chaleur pour transformer 0,2 kg de glace à 0 °C en vapeur à 100 °C ?',
        sol: '<p>Fusion : 66 kJ · chauffage : 0,2 × 4190 × 100 = 83,8 kJ · vaporisation : 452 kJ → total ≈ <b>602 kJ</b>.</p>' },
      { src: 'Claude', niveau: 1, en: 'Why is a scald from steam at 100 °C worse than one from water at 100 °C?', fr: 'Pourquoi une brûlure par la vapeur à 100 °C est-elle pire que par l\'eau à 100 °C ?',
        sol: '<p>En se condensant sur la peau, la vapeur libère en plus sa chaleur latente de vaporisation (≈ 2260 kJ/kg), bien plus que l\'eau qui refroidit seulement.</p>' },
      { src: 'Blackboard', niveau: 2, en: 'Example Sheet 2, Q1.1 — An electric kettle with a 2.0 kW heating element has a heat capacity of 400 J K⁻¹. 1 kg of water at 20 °C is placed in the kettle. The kettle is switched on and after 13 minutes 0.5 kg of water remains. Ignoring heat losses, calculate the specific latent heat of vaporisation of water.', fr: 'Bouilloire de 2,0 kW, capacité thermique 400 J/K, 1 kg d\'eau à 20 °C. Après 13 min il reste 0,5 kg d\'eau. Sans pertes, calcule la chaleur latente de vaporisation de l\'eau.',
        sol: String.raw`<p>Énergie fournie : \(2000\times780=1{,}56\times10^6\) J. Chauffer eau + bouilloire de 20 à 100 °C : \(1\times4190\times80+400\times80=367\,200\) J. Reste pour vaporiser 0,5 kg : \(1{,}193\times10^6\) J → \(l_v=\dfrac{1{,}193\times10^6}{0{,}5}\approx\) <b>2,39×10⁶ J/kg</b>.</p>` },
      { src: 'Blackboard', niveau: 2, en: 'Q1.2 — An ice cube of mass 50 g is taken from a fridge at −10 °C and dropped into a glass of water at 0 °C. If no heat is gained or lost from the outside, how much water will freeze onto the ice cube?', fr: 'Un glaçon de 50 g à −10 °C tombe dans de l\'eau à 0 °C. Sans échange avec l\'extérieur, quelle masse d\'eau gèle sur le glaçon ?',
        sol: String.raw`<p>Le glaçon se réchauffe jusqu'à 0 °C : \(0{,}05\times2100\times10=1050\) J, pris à de l'eau à 0 °C qui gèle : \(m=\dfrac{1050}{330\,000}\approx\) <b>3,2 g</b> (le corrigé donne 3,17 g avec \(c_{glace}\approx2090\)).</p>` },
      { src: 'Blackboard', niveau: 2, en: 'Q1.3 — A 3 kW kettle is filled with 1.6 kg of water at 20 °C. Neglecting heat losses: (a) the least possible time to bring the water to the boil; (b) if 0.5 kg of water is needed to cover the element, the minimum time to boil away enough water at 100 °C to expose the element.', fr: 'Bouilloire de 3 kW, 1,6 kg d\'eau à 20 °C. (a) Temps minimum pour atteindre l\'ébullition. (b) Il faut 0,5 kg d\'eau pour couvrir la résistance : temps minimum pour en vaporiser assez pour la découvrir.',
        sol: String.raw`<p>(a) \(t=\dfrac{1{,}6\times4190\times80}{3000}\approx\) <b>179 s</b>. (b) Il faut vaporiser \(1{,}6-0{,}5=1{,}1\) kg : \(t=\dfrac{1{,}1\times2{,}25\times10^6}{3000}\approx\) <b>825 s</b>.</p>` },
      { src: 'Blackboard', niveau: 1, en: 'Q1.4 — Sketch a graph of temperature against time as ice is heated from −2 °C until it all boils away to steam. Explain what happens at each stage.', fr: 'Trace la température en fonction du temps quand on chauffe de la glace de −2 °C jusqu\'à tout vaporiser. Explique chaque étape.',
        sol: '<p>Montée de −2 à 0 °C (la glace se réchauffe) ; <b>palier à 0 °C</b> (fusion, chaleur latente) ; montée de 0 à 100 °C, plus lente car c de l\'eau > c de la glace ; <b>long palier à 100 °C</b> (ébullition, l<sub>v</sub> très grande) ; puis, si on continue, la vapeur se réchauffe.</p>' },
      { src: 'Blackboard', niveau: 2, en: 'Q1.5 — In a factory heating system water enters the radiators at 60 °C and leaves at 38 °C. It is replaced by steam at 100 °C condensing in the radiators, the condensed steam leaving at 82 °C. What mass of steam supplies the same heat as 1 kg of hot water under the old system?', fr: 'Chauffage d\'usine : l\'eau entre à 60 °C et sort à 38 °C. Nouveau système : vapeur à 100 °C qui se condense et ressort à 82 °C. Quelle masse de vapeur donne la même chaleur que 1 kg d\'eau dans l\'ancien système ?',
        sol: String.raw`<p>Ancien : \(1\times4190\times22=92\,180\) J. Vapeur : \(m(l_v+4190\times18)=m\times2{,}325\times10^6\) (avec \(l_v=2{,}25\times10^6\)) → \(m\approx\) <b>0,0396 kg</b>.</p>` },
      { src: 'Blackboard', niveau: 1, en: 'Q2.1 — A railway track consists of steel rails each 20 m long, laid at 25 °C with no gaps. What gap will appear when the temperature falls to 0 °C?', fr: 'Rails d\'acier de 20 m posés à 25 °C sans espace. Quel espace apparaît à 0 °C ?',
        sol: String.raw`<p>\(\delta L=12\times10^{-6}\times20\times25=0{,}006\) m = <b>6 mm</b>.</p>` },
      { src: 'Blackboard', niveau: 1, en: 'Q2.2 — An aluminium sphere of diameter 0.5 m undergoes a temperature increase of 50 °C. Find the percentage increase in its (i) diameter, (ii) surface area, (iii) volume.', fr: 'Sphère d\'aluminium de 0,5 m, +50 °C. Pourcentage d\'augmentation du diamètre, de la surface, du volume ?',
        sol: String.raw`<p>\(\alpha\delta\theta=24\times10^{-6}\times50=1{,}2\times10^{-3}\) → (i) <b>0,12 %</b>, (ii) ×2 = <b>0,24 %</b>, (iii) ×3 = <b>0,36 %</b>. Le diamètre de départ ne sert pas.</p>` },
      { src: 'Blackboard', niveau: 2, en: 'Q2.3 — (a) A brass shaft of diameter 2.50 mm at room temperature (18 °C) is to be shrunk fit into the hole of a steel gear wheel; the hole is 2.49 mm at room temperature. To what temperature must the brass shaft be cooled to give a push fit? (b) To what temperature must the steel wheel be heated instead?', fr: '(a) Arbre en laiton de 2,50 mm à 18 °C, trou de 2,49 mm dans une roue en acier. À quelle température refroidir l\'arbre pour qu\'il entre ? (b) À quelle température chauffer plutôt la roue ?',
        sol: String.raw`<p>(a) \(\delta\theta=\dfrac{-0{,}01}{2{,}50\times21\times10^{-6}}\approx-190{,}5\) °C → <b>−172,5 °C</b>. (b) \(\delta\theta=\dfrac{0{,}01}{2{,}49\times12\times10^{-6}}\approx334{,}7\) °C → <b>352,7 °C</b>.</p>` },
      { src: 'Blackboard', niveau: 3, en: 'Q2.4 — A pendulum (brass bar L1 and steel bar L2, see sketch on the sheet) must have a length L0 = 1 m from pivot to bob, independent of temperature. What lengths must L1 and L2 be? (α_steel = 1.2×10⁻⁵ K⁻¹, α_brass = 2.1×10⁻⁵ K⁻¹)', fr: 'Pendule compensé : barre de laiton L1 et barre d\'acier L2, la distance pivot-masse doit rester 1 m quelle que soit la température. Calcule L1 et L2.',
        sol: String.raw`<p>Les dilatations doivent s'annuler : \(\alpha_b L_1=\alpha_s L_2\), et \(L_2-L_1=1\) m. Donc \(L_1=\frac{12}{21}L_2\) → \(L_2(1-\frac{12}{21})=1\) → \(L_2=\frac{21}{9}\approx\) <b>2,33 m</b> (acier), \(L_1\approx\) <b>1,33 m</b> (laiton). Attention : sur la feuille, les réponses (4) et (5) sont inversées.</p>` },
      { src: 'Blackboard', niveau: 3, en: 'Q2.5 — A bimetallic strip of brass and steel, each 2 mm thick, is straight and 10.0 cm long at 20 °C. Find its radius of curvature r at 100 °C.', fr: 'Bilame laiton/acier, chaque lame fait 2 mm d\'épaisseur, droit et long de 10,0 cm à 20 °C. Rayon de courbure à 100 °C ?',
        sol: String.raw`<p>Les deux lames font le même angle \(\theta\) ; leurs lignes médianes sont distantes de \(t=2\) mm. \(\frac{(r+t)\theta}{r\theta}=\frac{1+\alpha_b\delta\theta}{1+\alpha_s\delta\theta}\) → \(\frac{t}{r}\approx(\alpha_b-\alpha_s)\delta\theta=9\times10^{-6}\times80=7{,}2\times10^{-4}\) → \(r\approx\frac{0{,}002}{7{,}2\times10^{-4}}\approx\) <b>2,78 m</b>. La longueur de 10 cm ne sert pas.</p>` },
      { src: 'Claude', niveau: 1, en: 'A 1 L glass bottle is full of ethyl alcohol at 15 °C and warmed to 35 °C. How much spills out? (β_alcohol = 1.08×10⁻³ K⁻¹, α_glass = 8×10⁻⁶ K⁻¹)', fr: 'Une bouteille en verre de 1 L pleine d\'alcool à 15 °C est chauffée à 35 °C. Combien de liquide déborde ?',
        sol: String.raw`<p>Alcool : \(+1000\times1{,}08\times10^{-3}\times20=21{,}6\) ml ; bouteille : \(+1000\times24\times10^{-6}\times20=0{,}48\) ml. Débordement ≈ <b>21,1 ml</b> (dilatation apparente).</p>` }
    ]
  };
  // =========================== SEMAINES 4 et 5 ===========================
  S[4] = {
    titre: 'Heat 7–10: Conduction (parts 1 to 3)',
    titreFr: 'La conduction thermique',
    resume: 'Comment la chaleur traverse un matériau : la loi de la conduction (conductivité thermique k), la température qui varie en ligne droite le long d\'une barre, les matériaux en série (paroi + isolant), la résistance thermique (comme une résistance électrique) et l\'équation générale de la conduction.',
    sources: 'Lecture notes « 4. Conduction » (GENG0005-4-Conduction.pdf) · notes du tableau « analogy.pdf » (résistances thermiques en série et en parallèle) · Example Sheet 3 (Conduction) avec réponses (Blackboard, mis à jour les 19–21 oct.). Les diapos PowerPoint « 7-Thermal Expansion (part 2) », « 8/9/10-Conduction » ne s\'ouvrent pas depuis ici : à ajouter plus tard.',
    en: String.raw`
<h4>1. Thermal conductivity</h4>
<p>Conduction of heat takes place through collisions between the basic particles of the material (molecules, atoms or sometimes electrons). These tend to transfer energy from the faster, more energetic (hotter) particles to the slower, less energetic (cooler) ones.</p>
<p>Consider a bar of material, insulated so that heat cannot leave its sides, with the two ends held at constant temperatures \(T_1\) and \(T_2\). If \(T_1=T_2\) no heat flows; if \(T_1>T_2\), heat flows from the hotter end to the cooler. The rate of heat flow depends on four things:</p>
<ul><li>the temperature difference \(T_1-T_2\) — the rate of flow is <b>proportional</b> to it;</li>
<li>the length \(L\) — the flow is <b>inversely proportional</b> to it;</li>
<li>the cross-sectional area \(A\) — the flow is proportional to it;</li>
<li>the material of which the bar is made.</li></ul>
<p>$$\dot Q=\frac{kA(T_1-T_2)}{L}$$</p>
<p>where \(\dot Q\) is the rate of heat flow (a power, in W) and \(k\) is the <b>thermal conductivity</b> of the material, in W m⁻¹ K⁻¹. \(k\) depends somewhat on temperature, but we assume it is constant at its room-temperature value.</p>
<table><tr><th>Material</th><th>Copper</th><th>Mild steel</th><th>Stainless steel</th><th>Glass</th><th>Water</th><th>Firebrick</th><th>Nylon</th><th>Engine oil</th><th>Air</th></tr>
<tr><td>k (W/(m K))</td><td>393</td><td>50</td><td>15</td><td>1</td><td>0.6</td><td>0.4</td><td>0.2</td><td>0.15</td><td>0.026</td></tr></table>
<p>(A version of this table is in the Foundation Year Data Booklet.) Very good thermal conductors (such as copper) are also very good electrical conductors: the energy is carried by electrons in both cases. But there are no very good thermal insulators in the way there are electrical insulators: the ratio of electrical conductivity between copper and nylon is about \(10^{22}\), while for thermal conductivity it is about 2000. Values for fluids assume no convection (as in foam materials and double glazing).</p>
<p><b>Example:</b> a domestic hot water cylinder has a surface area of 2 m² and is lagged with 35 mm of foam (k = 0.04 W m⁻¹ K⁻¹). It contains water at 45 °C in a room at 15 °C. What power must the immersion heater provide to maintain the temperature?<br>
\(\dot Q=0.04\times(45-15)\times2/0.035=68.6\) W (3 s.f.).</p>
<h4>2. Temperature distribution</h4>
<p>If we cut the bar in half (keeping the halves in contact), the heat flow is the same in both halves (conservation of energy), the area and conductivity are the same, but the length is halved — so the temperature difference must be halved. The outcome is that the temperature varies <b>linearly</b> from one end to the other:</p>
<p>$$T=T_1-\frac xL(T_1-T_2)$$ where \(x\) is the distance from the hot end.</p>
<p><b>Example:</b> a barbecue skewer is 30 cm long between the sausage (150 °C) and the handle (40 °C). How far from the handle is the temperature 100 °C?<br>
\(\dfrac xL=\dfrac{T_1-T}{T_1-T_2}=\dfrac{150-100}{150-40}=0.455\), so \(x=0.455\times30=13.6\) cm from the hot end, i.e. \(30-13.6=16.4\) cm from the handle. This is independent of the material of the skewer. Notice the use of ratios.</p>
<h4>3. Combinations of material</h4>
<p>Consider a bar made of 50 cm of copper attached to 50 cm of steel, same cross-section. What is the temperature \(T_3\) at the junction? For the copper \(\dot Q=k_1A(T_1-T_3)/L\), for the steel \(\dot Q=k_2A(T_3-T_2)/L\). By conservation of energy the heat flow is the same in both, so</p>
<p>$$\frac{\text{temperature drop in copper}}{\text{temperature drop in steel}}=\frac{T_1-T_3}{T_3-T_2}=\frac{k_2}{k_1}=\frac{50}{393}=\frac1{7.86}$$</p>
<p>The temperature drop in the copper is only about 11 % of the total. General result: where a good conductor and a poorer one are in series, <b>most of the temperature drop occurs across the poorer conductor</b>. It is often appropriate to neglect the drop across a good conductor.</p>
<p><b>Example:</b> in the hot water cylinder above, the cylinder is copper 1 mm thick (k = 393). Temperature difference across (a) the copper, (b) the insulation?<br>
\(\dfrac{T_3-T_2}{T_1-T_3}=\dfrac{k_{copper}L_{insulation}}{k_{insulation}L_{copper}}=\dfrac{393\times0.035}{0.04\times0.001}=344\,000\). The difference across the copper is only about 0.0001 °C, while that across the insulation is almost 30 °C.</p>
<h4>4. Thermal resistance</h4>
<p>For a given piece of material, \(k\), \(A\) and \(L\) are constant, so \(\Delta T=R\dot Q\) with $$R=\frac{L}{kA}$$ the <b>thermal resistance</b> (units K W⁻¹). This is similar to Ohm's law (\(V=RI\)). Thermal resistances obey the same rules as electrical ones:</p>
<ul><li><b>In series</b> (same heat flow): \(\Delta T_{total}=(R_1+R_2)\dot Q\), so \(R_{total}=R_1+R_2\).</li>
<li><b>In parallel</b> (same temperature drop): \(\dot Q=\dot Q_A+\dot Q_B\), so \(\dfrac1{R_{total}}=\dfrac1{R_1}+\dfrac1{R_2}\).</li></ul>
<p>Hot water cylinder again: \(R_{copper}=0.001/(393\times2)=1.27\times10^{-6}\) K W⁻¹, \(R_{insulation}=0.035/(0.04\times2)=0.438\) K W⁻¹. They are in series; the insulation obviously dominates.</p>
<p><b>Analogy (board notes):</b> thermal — \(\Delta T\) ↔ voltage \(V\), \(\dot Q\) ↔ current \(I\), \(R\) ↔ \(R\). Electrical: in parallel \(I=I_A+I_B\), \(V=V_A=V_B\), \(\frac1R=\frac1{R_A}+\frac1{R_B}\); in series \(I_A=I_B=I\), \(V=V_A+V_B\), \(R=R_A+R_B\).</p>
<h4>5. More general treatment</h4>
<p>For a bar whose section and/or conductivity vary along its length: $$\dot Q=-kA\frac{dT}{dx}$$ This is the <b>heat conduction equation</b>. \(dT/dx\) is the temperature (thermal) gradient, the slope of the graph of temperature against position. The negative sign appears because heat flows in the direction of falling temperature. If \(k\) and \(A\) are constant and there is no heat loss, the gradient is constant (straight line).</p>
<h4>6. Temperature variation with heat loss</h4>
<p>If there are heat losses from the sides, \(\dot Q\) must fall as \(x\) increases, so the temperature gradient must also fall (the curve flattens). If heat is gained from the surroundings, the gradient increases. Bars whose cross-section changes require integration, beyond the scope of this course.</p>`,
    fr: String.raw`
<h4>L'idée de la conduction</h4>
<p>La conduction, c'est la chaleur qui <b>traverse un objet solide</b> sans que la matière bouge. Les particules chaudes vibrent fort et bousculent leurs voisines plus lentes, qui bousculent les suivantes… comme une rumeur qui se propage de proche en proche.</p>
<div class="ex"><div class="lab">Exemple concret — la cuillère dans le thé</div>
Tu laisses une cuillère en métal dans un thé chaud : au bout d'une minute le manche brûle. Avec une cuillère en bois, non. Le métal est un bon <b>conducteur</b> thermique, le bois un <b>isolant</b>.</div>
<h4>La formule clé</h4>
<p style="text-align:center">\(\dot Q=\dfrac{kA(T_1-T_2)}{L}\)</p>
<ul><li>\(\dot Q\) (« Q point ») : le <b>débit de chaleur</b>, en joules par seconde, donc en <b>watts</b>.</li>
<li>\(k\) : la <b>conductivité thermique</b> du matériau (cuivre 393, acier 50, verre 1, air 0,026).</li>
<li>\(A\) : la surface traversée (m²). Plus c'est large, plus ça passe.</li>
<li>\(T_1-T_2\) : l'écart de température. Plus il est grand, plus ça passe.</li>
<li>\(L\) : l'épaisseur (m). Plus c'est épais, moins ça passe.</li></ul>
<div class="ex"><div class="lab">Exemple du cours — le ballon d'eau chaude</div>
Ballon de 2 m², isolé par 35 mm de mousse (k = 0,04), eau à 45 °C, pièce à 15 °C.<br>
\(\dot Q=\dfrac{0{,}04\times2\times30}{0{,}035}=68{,}6\) W.<br>
Le chauffe-eau doit donc fournir en continu 68,6 W, juste pour compenser les pertes (comme une petite ampoule allumée en permanence).</div>
<div class="warnbox"><div class="lab">Piège des unités</div>Mets toujours \(L\) en <b>mètres</b> (35 mm = 0,035 m) et \(A\) en <b>m²</b> (10 cm × 10 cm = 0,01 m²). Un écart en °C est le même qu'en K : \(45-15=30\) °C = 30 K.</div>
<p>Pourquoi le cuivre conduit bien la chaleur ET l'électricité : ce sont les mêmes électrons libres qui transportent les deux. Mais même le meilleur isolant thermique (le nylon) n'est que 2 000 fois moins bon que le cuivre, alors qu'en électricité l'écart est de \(10^{22}\).</p>

<h4>La température le long d'une barre : une ligne droite</h4>
<p>Si la barre est isolée sur les côtés, la température baisse <b>régulièrement</b> du bout chaud au bout froid : à mi-chemin, on est pile à mi-température.</p>
<p style="text-align:center">\(T=T_1-\dfrac xL(T_1-T_2)\) &nbsp; (x mesuré depuis le bout chaud)</p>
<div class="ex"><div class="lab">Exemple du cours — la brochette du barbecue</div>
Brochette de 30 cm, saucisse à 150 °C, manche à 40 °C. Où fait-il 100 °C ?<br>
On a descendu 50 °C sur les 110 °C d'écart : \(\dfrac{50}{110}=0{,}455\) de la longueur, soit \(0{,}455\times30=13{,}6\) cm depuis la saucisse, donc <b>16,4 cm depuis le manche</b>.<br>
Le matériau n'intervient pas : bois ou métal, la répartition est la même (seul le débit change).</div>

<h4>Deux matériaux à la suite (en série)</h4>
<p>La même chaleur traverse les deux couches (rien ne se perd au milieu). Donc là où ça conduit mal, il faut un plus grand écart de température pour faire passer le même débit.</p>
<div class="tip"><div class="lab">À retenir</div>Quand un bon conducteur et un mauvais sont collés, <b>presque toute la chute de température se fait dans le mauvais conducteur</b>. Cuivre + acier : 11 % de la chute dans le cuivre, 89 % dans l'acier.</div>
<div class="ex"><div class="lab">Exemple du cours — la paroi du ballon</div>
Ballon en cuivre de 1 mm + 35 mm de mousse. La chute dans le cuivre est 344 000 fois plus petite que dans la mousse : environ 0,0001 °C dans le cuivre contre presque 30 °C dans la mousse. C'est pour ça qu'on a pu ignorer le cuivre dans le premier calcul.</div>
<div class="ex"><div class="lab">Exemple concret — ta fenêtre à double vitrage</div>
Verre (k = 1) + lame d'air (k = 0,026) + verre. L'air immobile conduit 40 fois moins bien que le verre : c'est lui qui fait presque toute l'isolation. C'est la question 1.6 de la feuille d'exercices.</div>

<h4>La résistance thermique : comme en électricité</h4>
<p>On peut écrire la loi comme la loi d'Ohm : \(\Delta T=R\,\dot Q\), avec \(R=\dfrac{L}{kA}\) (en K/W).</p>
<table><tr><th>Électricité</th><th>Chaleur</th></tr>
<tr><td>tension \(V\)</td><td>écart de température \(\Delta T\)</td></tr>
<tr><td>courant \(I\)</td><td>débit de chaleur \(\dot Q\)</td></tr>
<tr><td>résistance \(R\)</td><td>résistance thermique \(R=L/(kA)\)</td></tr></table>
<ul><li><b>En série</b> (couches empilées, la chaleur traverse l'une puis l'autre) : \(R=R_1+R_2\).</li>
<li><b>En parallèle</b> (côte à côte, la chaleur a deux chemins) : \(\dfrac1R=\dfrac1{R_1}+\dfrac1{R_2}\).</li></ul>
<div class="ex"><div class="lab">Exemple concret — un mur avec une fenêtre</div>
La chaleur sort de ta chambre par le mur ET par la fenêtre en même temps : deux chemins en <b>parallèle</b>. Une fenêtre mal isolée, c'est comme une petite résistance en parallèle : elle laisse filer presque toute la chaleur, même si le mur est très bien isolé.</div>

<h4>L'équation générale (pour aller plus loin)</h4>
<p>\(\dot Q=-kA\dfrac{dT}{dx}\) : le débit est proportionnel à la <b>pente</b> de la courbe de température. Le signe « − » dit que la chaleur va vers le froid. Si la barre perd de la chaleur par les côtés, moins de chaleur arrive au bout, donc la pente s'adoucit (la courbe se tasse) ; si elle en gagne, la pente augmente.</p>`,
    vocab: [
      ['conduction', 'conduction'],
      ['thermal conductivity (k)', 'conductivité thermique', 'en W/(m·K)'],
      ['rate of heat flow', 'débit (flux) de chaleur', 'Q point, en watts'],
      ['cross-sectional area', 'aire de la section'],
      ['lagged / lagging', 'calorifugé / isolant (calorifuge)'],
      ['hot water cylinder', 'ballon d\'eau chaude'],
      ['immersion heater', 'thermoplongeur (résistance chauffante)'],
      ['temperature distribution', 'répartition de la température'],
      ['in series / in parallel', 'en série / en parallèle'],
      ['temperature drop', 'chute de température'],
      ['thermal resistance', 'résistance thermique', 'R = L/(kA), en K/W'],
      ['temperature (thermal) gradient', 'gradient de température (pente)'],
      ['heat conduction equation', 'équation de la conduction'],
      ['heat loss / heat gain', 'perte / gain de chaleur'],
      ['double glazing', 'double vitrage'],
      ['fire cement', 'ciment réfractaire'],
      ['lime scale', 'calcaire (tartre)']
    ],
    formules: [
      { nom: 'Loi de la conduction', tex: '\\dot Q = \\dfrac{kA(T_1 - T_2)}{L}', why: 'Q point en W, k en W/(m·K), A en m², L en m.' },
      { nom: 'Température le long d\'une barre', tex: 'T = T_1 - \\dfrac{x}{L}(T_1 - T_2)', why: 'x depuis le bout chaud ; barre isolée sur les côtés.' },
      { nom: 'Deux matériaux en série (même L, même A)', tex: '\\dfrac{T_1 - T_3}{T_3 - T_2} = \\dfrac{k_2}{k_1}', why: 'La chute est plus grande dans le moins bon conducteur.' },
      { nom: 'Résistance thermique', tex: '\\Delta T = R\\,\\dot Q \\qquad R = \\dfrac{L}{kA}', why: 'Comme la loi d\'Ohm V = RI.' },
      { nom: 'Série et parallèle', tex: 'R_{série} = R_1 + R_2 \\qquad \\dfrac{1}{R_{par}} = \\dfrac{1}{R_1} + \\dfrac{1}{R_2}', why: '' },
      { nom: 'Plusieurs couches empilées', tex: '\\dot Q = \\dfrac{A(T_2 - T_1)}{\\dfrac{L_1}{k_1} + \\dfrac{L_2}{k_2} + \\dfrac{L_3}{k_3}}', why: 'Question 1.6 de l\'Example Sheet 3 ; marche pour n couches.' },
      { nom: 'Équation de la conduction', tex: '\\dot Q = -kA\\,\\dfrac{dT}{dx}', why: 'Le signe − : la chaleur va vers le froid.' }
    ],
    exos: [
      { src: 'Blackboard', niveau: 1, en: 'Example Sheet 3, Q1.1: A furnace is surrounded by a layer of fire cement 20 mm thick. Inside 1200 °C, outside 40 °C. How much power is lost through a square area of wall 10 cm on each side? (k = 0.5 W/mK)', fr: 'Four entouré de 20 mm de ciment réfractaire : quelle puissance perdue à travers un carré de 10 cm de côté ?',
        sol: String.raw`<p>\(A=0.1\times0.1=0.01\) m². \(\dot Q=\dfrac{0.5\times0.01\times1160}{0.02}=290\) W.</p>` },
      { src: 'Blackboard', niveau: 2, en: 'Example Sheet 3, Q1.2: The bit of a 60 W soldering iron is a copper cylinder 25 mm long and 7 mm diameter, heated at one end; the other end is in molten solder at 480 K. Ignoring losses: (a) temperature of the heated end? (b) same if the bit were steel? (k_Cu = 393, k_steel = 50 W/mK)', fr: 'Panne de fer à souder en cuivre : température du bout chauffé ? et si elle était en acier ?',
        sol: String.raw`<p>\(A=\pi(0.0035)^2=3.85\times10^{-5}\) m². \(\Delta T=\dfrac{\dot QL}{kA}\).<br>(a) \(\Delta T=\dfrac{60\times0.025}{393\times3.85\times10^{-5}}=99\) K → \(T=480+99=579\) K.<br>(b) \(\Delta T=\dfrac{1.5}{50\times3.85\times10^{-5}}=780\) K → \(T=1259\) K. L'acier conduit 8 fois moins bien : il faudrait chauffer beaucoup plus fort.</p>` },
      { src: 'Blackboard', niveau: 1, en: 'Example Sheet 3, Q1.3: A submarine window: glass 0.3 m wide, 0.2 m high, 5 cm thick. Inner surface 23 °C, outer −2 °C. Estimate the rate of heat loss. (k = 1 W/mK)', fr: 'Hublot de sous-marin : estime la perte de chaleur par conduction.',
        sol: String.raw`<p>\(\dot Q=\dfrac{1\times0.06\times25}{0.05}=30\) W.</p>` },
      { src: 'Blackboard', niveau: 3, en: 'Example Sheet 3, Q1.4: A steam boiler is copper plate 7 mm thick; inside 200 °C, outside combustion gases 350 °C. (a) Heat flow across 1 m². (b) Mass of water evaporated per second per m². (c) With 0.5 mm of lime scale inside (k = 1 W/mK), new heat flow and evaporation rate. (k_Cu = 393 W/mK)', fr: 'Chaudière en cuivre : débit de chaleur, eau évaporée, puis effet d\'une couche de calcaire.',
        sol: String.raw`<p>(a) \(\dot Q=\dfrac{393\times1\times150}{0.007}=8.4\times10^6\) W = 8,4 MW.<br>(b) Chaleur latente de vaporisation de l'eau \(\approx2.26\times10^6\) J/kg : \(\dot m=\dfrac{8.4\times10^6}{2.26\times10^6}=3.7\) kg/s.<br>(c) Résistances en série (pour 1 m²) : \(\dfrac{0.007}{393}+\dfrac{0.0005}{1}=1.78\times10^{-5}+5\times10^{-4}=5.18\times10^{-4}\) K/W. \(\dot Q=\dfrac{150}{5.18\times10^{-4}}=2.9\times10^5\) W = 290 kW, soit \(0.13\) kg/s. Un demi-millimètre de calcaire divise le débit par presque 30 !</p>` },
      { src: 'Blackboard', niveau: 3, en: 'Example Sheet 3, Q1.5: A component: a layer of steel sandwiched between two layers of copper, each 20 mm thick; the component is 60 mm high and 60 mm wide. Heat flow when (a) side A is at 240 °C and side C at 20 °C (B and D insulated), (b) side B is at 240 °C and side D at 20 °C (A and C insulated).', fr: 'Sandwich cuivre-acier-cuivre : débit de chaleur à travers les couches (a), puis le long des couches (b).',
        sol: String.raw`<p>(a) La chaleur traverse les 3 couches : <b>série</b>. \(A=0.06\times0.06=0.0036\) m². \(R=2\times\dfrac{0.02}{393\times0.0036}+\dfrac{0.02}{50\times0.0036}=0.0283+0.1111=0.139\) K/W. \(\dot Q=220/0.139=1580\) W.<br>(b) La chaleur longe les 3 couches : <b>parallèle</b>. Chaque couche : \(A=0.02\times0.06=0.0012\) m², \(L=0.06\) m. \(\dot Q=\dfrac{(393+50+393)\times0.0012\times220}{0.06}=3680\) W.</p>` },
      { src: 'Blackboard', niveau: 2, en: 'Example Sheet 3, Q1.6: For a double glazed window (glass k1, air k2, glass k3, thicknesses L1, L2, L3), (a) show that the rate of heat flow is Q = A(T2 − T1)/(L1/k1 + L2/k2 + L3/k3); (b) deduce whether this can be generalised to any number of materials.', fr: 'Double vitrage : démontre la formule du débit à travers 3 couches, puis généralise.',
        sol: String.raw`<p>(a) Même débit \(\dot Q\) dans chaque couche : \(\Delta T_i=\dot Q\dfrac{L_i}{k_iA}\). On additionne : \(T_2-T_1=\Delta T_1+\Delta T_2+\Delta T_3=\dfrac{\dot Q}{A}\left(\dfrac{L_1}{k_1}+\dfrac{L_2}{k_2}+\dfrac{L_3}{k_3}\right)\), d'où la formule.<br>(b) Oui : pour n couches en série, \(\dot Q=\dfrac{A\,\Delta T}{\sum L_i/k_i}\) (les résistances s'additionnent).</p>` },
      { src: 'Blackboard', niveau: 1, en: 'Lecture notes: a 30 cm skewer, sausage end at 150 °C, handle at 40 °C. How far from the handle is the temperature 100 °C?', fr: 'Notes de cours : la brochette.',
        sol: String.raw`<p>\(x/L=(150-100)/(150-40)=0.455\) → 13,6 cm du côté chaud → <b>16,4 cm</b> du manche.</p>` },
      { src: 'Claude', niveau: 1, en: 'A 4 mm thick glass window measures 1.2 m × 1.0 m. Inside 22 °C, outside 32 °C (Malaysia, air-conditioned room). Heat flow through the glass? (k = 1 W/mK)', fr: 'Vitre de ta chambre climatisée : quel débit de chaleur entre par le verre ?',
        sol: String.raw`<p>\(\dot Q=\dfrac{1\times1.2\times10}{0.004}=3000\) W. Énorme : en réalité, des couches d'air immobile collées au verre réduisent beaucoup ce chiffre.</p>` },
      { src: 'Claude', niveau: 2, en: 'Calculate the thermal resistance of a 10 cm brick wall of area 5 m² (k = 0.6 W/mK) and of 5 cm of foam (k = 0.04) on the same area. Total resistance and heat flow for a 20 °C difference?', fr: 'Mur en brique + mousse : résistances, total et débit de chaleur.',
        sol: String.raw`<p>\(R_{brique}=0.1/(0.6\times5)=0.0333\) K/W ; \(R_{mousse}=0.05/(0.04\times5)=0.25\) K/W. Série : \(R=0.283\) K/W. \(\dot Q=20/0.283=70.6\) W. 5 cm de mousse isolent 7,5 fois mieux que 10 cm de brique.</p>` }
    ]
  };
})();
