// GENG0005 Engineering Principles — Semaines 1 et 2
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
        sol: '<p>Par secousse : mgh = 0,5 × 9,81 × 0,3 = 1,47 J → 44,1 J/min. Il faut 0,5 × 4190 × 77 = 161 315 J → 3654 min ≈ 61 h ≈ <b>2,5 jours</b>. 😄</p>' },
      { src: 'Claude', niveau: 1, en: 'How much energy is needed to heat 250 g of water for tea from 20 °C to 95 °C? How long with a 1.5 kW kettle?', fr: 'Combien d\'énergie pour chauffer 250 g d\'eau de 20 à 95 °C ? Combien de temps avec une bouilloire de 1,5 kW ?',
        sol: '<p>Q = 0,25 × 4190 × 75 ≈ 78,6 kJ → t = 78 600/1500 ≈ <b>52 s</b>.</p>' },
      { src: 'Claude', niveau: 2, en: 'In a constant-flow experiment: 10 V, 2 A with 1.0 × 10⁻³ kg/s, and 15 V, 2.5 A with 2.0 × 10⁻³ kg/s, temperature rise 4.0 K in both cases. Find c and the rate of heat loss.', fr: 'Calorimétrie à débit constant : trouve c et les pertes.',
        sol: '<p>20 = 0,004c + ḣ et 37,5 = 0,008c + ḣ → 0,004c = 17,5 → c = <b>4375 J kg⁻¹ K⁻¹</b>, ḣ = <b>2,5 W</b>.</p>' }
    ]
  };

  // =========================== SEMAINE 3 ===========================
  S[3] = {
    titre: 'Heat 5: Latent Heat (Heat 6: Thermal Expansion à venir)',
    titreFr: 'Chaleur latente (dilatation thermique : à venir)',
    resume: 'Les changements d\'état : chaleur latente de fusion et de vaporisation, et le palier de température. Example Sheet 1 (suite). La partie « Thermal expansion » sera ajoutée quand elle sera publiée.',
    sources: 'Lecture notes « 2. Heat Capacity and Latent Heat », section 3 · GENG0005 Timetable (Blackboard)',
    en: String.raw`
<h4>Heat 5 — Latent heat</h4>
<p>During a change of state, the heat absorbed or released changes the bonds between molecules; <b>there is no temperature change</b>. Heating ice from −5 °C: (A) ice warms to 0 °C, (B) ice melts at 0 °C, (C) water warms to 100 °C, (D) water boils at 100 °C, (E) steam is superheated.</p>
<ul><li><b>Specific latent heat of fusion</b>: heat to turn 1 kg of solid into liquid (or released in reverse).</li>
<li><b>Specific latent heat of vaporisation</b>: heat to turn 1 kg of liquid into vapour (or released in reverse).</li></ul>
<p>\(\Delta Q=m\,l\). Applications: wind chill, steam scalds being worse than hot-water scalds, refrigerators, steam engines.</p>
<div class="ex"><div class="lab">Example</div>1 kg of vegetables (c = 2200) at 373 K plunged into ice water at 273 K. Heat given: \(1\times2200\times100=220\) kJ = \(m\times330\times10^3\) → \(m=0.67\) kg of ice melted.</div>
<p class="muted">Heat 6 (Thermal expansion 1) will be added when the material is published on Blackboard.</p>`,
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
① chauffer la glace : 0,5 × 2100 × 10 = 10 500 J<br>② la faire fondre : 0,5 × 330 000 = 165 000 J<br>③ chauffer l'eau : 0,5 × 4190 × 20 = 41 900 J<br>Total ≈ <b>217 kJ</b>. La fusion représente la plus grosse part !</div>`,
    vocab: [
      ['latent heat', 'chaleur latente'], ['specific latent heat of fusion', 'chaleur latente massique de fusion'],
      ['specific latent heat of vaporisation', 'chaleur latente massique de vaporisation'], ['change of state / phase change', 'changement d\'état'],
      ['to melt / to freeze', 'fondre / geler'], ['to boil / to condense', 'bouillir / se condenser'], ['to evaporate', 's\'évaporer'],
      ['superheated steam', 'vapeur surchauffée'], ['wind chill', 'refroidissement éolien'], ['scald', 'brûlure (par liquide ou vapeur)']
    ],
    formules: [
      { nom: 'Chaleur latente', tex: '\\Delta Q = m\\,l', why: 'Pas de variation de température pendant le changement d\'état.' },
      { nom: 'Chauffer puis changer d\'état', tex: 'Q_{tot} = m c_1 \\Delta T_1 + m l + m c_2 \\Delta T_2', why: 'On additionne chaque étape (paliers + montées).' }
    ],
    exos: [
      { src: 'Blackboard', niveau: 2, en: '1 kg of vegetables (c = 2200 J kg⁻¹ K⁻¹) at 373 K are plunged into a mixture of ice and water at 273 K. How much ice is melted? (l_f = 330 × 10³ J kg⁻¹)', fr: '1 kg de légumes à 373 K plongés dans de l\'eau glacée à 273 K : quelle masse de glace fond ?',
        sol: '<p>Chaleur cédée : 1 × 2200 × 100 = 220 kJ = m × 330 kJ/kg → m ≈ <b>0,67 kg</b>.</p>' },
      { src: 'Claude', niveau: 2, en: 'How much heat is needed to turn 0.2 kg of ice at 0 °C into steam at 100 °C? (l_f = 330 kJ/kg, l_v = 2260 kJ/kg)', fr: 'Quelle chaleur pour transformer 0,2 kg de glace à 0 °C en vapeur à 100 °C ?',
        sol: '<p>Fusion : 66 kJ · chauffage : 0,2 × 4190 × 100 = 83,8 kJ · vaporisation : 452 kJ → total ≈ <b>602 kJ</b>.</p>' },
      { src: 'Claude', niveau: 1, en: 'Why is a scald from steam at 100 °C worse than one from water at 100 °C?', fr: 'Pourquoi une brûlure par la vapeur à 100 °C est-elle pire que par l\'eau à 100 °C ?',
        sol: '<p>En se condensant sur la peau, la vapeur libère en plus sa chaleur latente de vaporisation (≈ 2260 kJ/kg), bien plus que l\'eau qui refroidit seulement.</p>' }
    ]
  };
})();
