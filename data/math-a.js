// GENG0001 Mathematics A — Semaines 1 et 2
(function () {
  const S = DATA.matieres.ma.semaines;

  // =========================== SEMAINE 1 ===========================
  S[1] = {
    titre: 'Linear Equations, Cartesian Coordinates & Factorising',
    titreFr: 'Systèmes d\'équations linéaires, repère cartésien et factorisation',
    resume: '3 chapitres : résoudre 2 équations à 2 inconnues, tracer une droite et trouver une loi à partir de mesures, factoriser une expression.',
    sources: 'GENG0001 Ch. 01, 02, 03 (filled, diapos) · Online notes & exercises de Jan Spakula (Blackboard)',
    en: String.raw`
<h4>Chapter 01 — Simultaneous Linear Equations</h4>
<p><b>Learning outcomes:</b> (1) solve simultaneous linear equations with two equations and two unknowns; (2) use the <b>substitution method</b> and the <b>elimination method</b>.</p>
<p><b>Terminology:</b> in \(x+2=x^2-3\), \(y=3x+4\), \(xy=4\): terms in \(x, y\) (power 1) are <b>linear</b>; terms like \(x^2, y^2, xy\) are <b>non-linear</b>.</p>
<p>An <b>equation</b> is a mathematical statement that relates two expressions with the equal sign "=" (e.g. \(x+2=x^2-3\), \(y=3x+4\), \(xy=4\)). A <b>function</b> shows how the inputs (independent variables) are related to the output (dependent variable), e.g. \(f(x)=2x-3\).</p>
<h5>Linear equations</h5>
<ul>
<li>One unknown: \(ax=b\) with \(a\neq 0\) has the single solution \(x=b/a\).</li>
<li>Two unknowns: \(ax+by=c\) has infinitely many solutions; plotted, they form a <b>straight line</b>. If \(c=0\) the equation is called <i>homogeneous</i>.</li>
</ul>
<div class="ex"><div class="lab">Slides — one unknown</div>\(10x=15\Rightarrow x=\frac{15}{10}=1.5=\frac32\). In general the solution of \(ax=b\) is \(x=\frac ba\).</div>
<div class="ex"><div class="lab">Slides — two unknowns</div>\(3x-2y=4\): make \(x\) the subject, \(x=\frac{4+2y}{3}\); or \(y\), \(y=\frac{3x-4}{2}\). For each value of \(x\) we get one value of \(y\) (and vice versa), so the equation has infinitely many solutions. Table for \(y=\frac32x-2\): \(x=-2,-1,0,1,2\) gives \(y=-5,-\frac72,-2,-\frac12,1\). Linear functions always give straight-line graphs.</div>
<h5>Solving a pair of equations</h5>
<p><b>Substitution method:</b> express one variable from one equation, substitute it into the other equation, solve, then back-substitute.</p>
<p><b>Elimination method:</b> multiply one or both equations by constants so that one variable has the same coefficient, then add or subtract the equations to eliminate it.</p>
<div class="ex"><div class="lab">Worked example</div>
Solve \(x+2y=-2\) …(A) and \(2x+3y=1\) …(B).<br>
From (A): \(x=-2-2y\). Into (B): \(2(-2-2y)+3y=1 \Rightarrow -4-y=1 \Rightarrow y=-5\). Then \(x=-2-2(-5)=8\).<br>
<b>Solution: \(x=8,\ y=-5\).</b> Check in (B): \(16-15=1\) ✓</div>
<div class="ex"><div class="lab">Slides — a pair of linear equations</div>Solve \(4x+y=9\) (A) and \(-x+y=-1\) (B).<br>(a) <b>By substitution</b>: from (B) \(y=x-1\); into (A): \(4x+x-1=9\Rightarrow x=2\), \(y=1\).<br>(b) <b>By elimination</b>: (A) − (B): \(5x=10\Rightarrow x=2\), then \(y=1\). On the graph the two lines cross at (2, 1).</div>
<h5>Graphical interpretation</h5>
<p>Each equation is a line; the solution is where the lines meet. Three cases: one intersection point (unique solution), the same line (infinitely many solutions), parallel lines (no solution).</p>

<h4>Chapter 02 — Graphs in Cartesian Coordinates</h4>
<p><b>Learning outcomes:</b> (1) plot the graph of an equation on the \((x,y)\)-plane; (2) solve real-world problems by plotting Cartesian coordinates.</p>
<p>A point \(P\) is located by two perpendicular axes; \((x,y)\) are its <b>Cartesian (rectangular) coordinates</b>. The axes split the plane into four <b>quadrants</b>.</p>
<p>The graph of \(f(x)=mx+c\) is a straight line: \(m\) is the <b>slope (gradient)</b> and \(c=f(0)\) is the <b>y-intercept</b>. Through two points: \(m=\dfrac{y_2-y_1}{x_2-x_1}\).</p>
<div class="ex"><div class="lab">Slides — quadrants and slope</div>1st quadrant: \(x>0, y>0\) · 2nd: \(x<0, y>0\) · 3rd: \(x<0, y<0\) · 4th: \(x>0, y<0\).<br>The line \(y=\frac32+\frac12x\) passes through \(P_1=(1,2)\) and \(P_2=(5,4)\): \(m=\frac{4-2}{5-1}=\frac12\) and \(c=f(0)=\frac32\).</div>
<h5>Guessing a law from experimental data</h5>
<p>If measured points \((x,y)\) lie approximately on a line, we suspect a <b>linear law</b> \(y=mx+c\). Draw the best straight line, read \(c\) where it crosses the y-axis and compute \(m\) from two points far apart on the line. Data can also look quadratic, exponential or trigonometric. Today, <b>linear regression</b> gives the best-fit line.</p>
<div class="ex"><div class="lab">Slides — velocity data</div>
<table><tr><th>t (s)</th><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td></tr><tr><th>v (m s⁻¹)</th><td>7.7</td><td>10.5</td><td>13.3</td><td>15.5</td><td>16.3</td><td>20.5</td><td>23.0</td></tr></table>
The points lie roughly on a line, so we look for \(v=at+u\).</div>

<h4>Chapter 03 — Factorising</h4>
<p><b>Learning outcomes:</b> (1) factorise algebraic expressions by common factors and by grouping; (2) use the products of simple factors to factorise.</p>
<p>Expanding uses the distributive law: \(a(b+c)=ab+ac\). <b>Factorising</b> is the reverse: writing an expression as a <b>product</b>. The factors of a whole number \(a\) always include 1 and \(a\). A <b>prime number</b> \(p\neq1\) has no other factors than 1 and \(p\): 2, 3, 5, 7, 11, 13, 17, 19, 23, 29…</p>
<div class="ex"><div class="lab">Slides — multiplying out</div>\(3(2+4)=3\cdot6=18=3\cdot2+3\cdot4\). Examples: \(3(2y-7)=6y-21\) · \((2x+y)(3y-1)=6xy-2x+3y^2-y\) · \((a+2b-3)(2a+5)=2a^2+4ab-a+10b-15\) · \((x+2)(3y-1)(x-y)\).</div>
<p><b>Factors</b> are the constituents of a product: \(1\cdot2\cdot2\cdot3\), \(x(y+z)\), \((a+b)(b+3)\). A whole number \(a>0\) is a factor of \(b\) if \(b/a\) is a whole number. Factors of 24: 1, 2, 3, 4, 6, 8, 12, 24, and \(24=2^3\times3\); 31 is prime. \(27+81=27(1+3)\) with \(27=3^3\), \(81=3^4\).</p>
<p><b>Comments:</b> it is not always possible to sensibly factorise an expression; positive whole numbers can always be factorised uniquely as a product of primes.</p>
<h5>1. Highest common factor (HCF)</h5><p>\(10x+8=2(5x+4)\), \(x^3-3x^2y=x^2(x-3y)\).</p>
<h5>2. Grouping (four terms)</h5><p>\(2ac+6bc+ad+3bd=2c(a+3b)+d(a+3b)=(a+3b)(2c+d)\). Sometimes you must re-order the terms first.</p>
<h5>3. Special products</h5><p>\((a+b)^2=a^2+2ab+b^2\), \((a-b)^2=a^2-2ab+b^2\), \((a+b)(a-b)=a^2-b^2\). Read backwards, they factorise.</p>
<h5>4. Three-term expressions</h5><p>Split the middle term into two terms, then group: \(3x^2-5xy-2y^2=3x^2-6xy+xy-2y^2=3x(x-2y)+y(x-2y)=(3x+y)(x-2y)\).</p>`,
    fr: String.raw`
<h4>1. Systèmes de 2 équations à 2 inconnues</h4>
<p>Une équation à deux inconnues comme \(2x+y=10\) a <b>une infinité</b> de solutions : (0 ; 10), (1 ; 8), (5 ; 0)… Si on les place dans un repère, elles forment une <b>droite</b>. Avec <b>deux</b> équations, on cherche le couple \((x ; y)\) qui marche pour les deux à la fois : c'est le point où les deux droites se croisent.</p>
<div class="ex"><div class="lab">Exemple concret</div>
Au snack, 2 burgers et 1 boisson coûtent 25 MAD ; 1 burger et 3 boissons coûtent 20 MAD. Combien coûte chaque article ?<br>
On note \(b\) le burger et \(d\) la boisson : \(2b+d=25\) et \(b+3d=20\).<br>
<b>Substitution</b> : de la 1re, \(d=25-2b\). Dans la 2e : \(b+3(25-2b)=20 \Rightarrow b+75-6b=20 \Rightarrow -5b=-55 \Rightarrow b=11\). Puis \(d=25-22=3\).<br>
→ burger 11 MAD, boisson 3 MAD. <b>Toujours vérifier</b> : \(11+9=20\) ✓</div>
<p><b>Méthode par substitution</b> : on isole une inconnue dans une équation, puis on la remplace dans l'autre. C'est la plus pratique quand une inconnue est déjà seule (\(y=2x\), \(x=5y-3\)…).</p>
<p><b>Méthode par élimination (combinaison)</b> : on multiplie les équations pour qu'une inconnue ait le même coefficient, puis on soustrait (ou on additionne) pour la faire disparaître.</p>
<div class="ex"><div class="lab">Exemple — élimination</div>
\(3x+4y=11\) et \(x+7y=15\). On multiplie la 2e par 3 : \(3x+21y=45\).<br>
On soustrait la 1re : \((3x+21y)-(3x+4y)=45-11 \Rightarrow 17y=34 \Rightarrow y=2\). Puis \(x=15-14=1\).</div>
<p><b>Les 3 cas possibles</b> (pense aux deux droites) :</p>
<ul><li>elles se coupent → <b>une seule solution</b> (cas normal) ;</li>
<li>elles sont parallèles → <b>aucune solution</b> (ex. \(x+y=2\) et \(x+y=5\) : impossible) ;</li>
<li>elles sont confondues → <b>infinité de solutions</b> (ex. \(x+y=2\) et \(2x+2y=4\) : c'est la même équation).</li></ul>
<div class="tip"><div class="lab">En ingénierie</div>Dès qu'il y a 2 forces inconnues (par ex. composantes horizontale \(F_H\) et verticale \(F_V\)) et 2 conditions d'équilibre, tu obtiens exactement ce genre de système. Tu le reverras en Mechanical Science.</div>

<h4>2. Le repère cartésien et les droites</h4>
<p>Un point est repéré par ses <b>coordonnées</b> \((x ; y)\) : \(x\) = abscisse (horizontal), \(y\) = ordonnée (vertical). Les axes coupent le plan en 4 <b>quadrants</b>.</p>
<p>Une fonction \(y=mx+c\) donne une <b>droite</b> :</p>
<ul><li>\(m\) = <b>pente</b> (coefficient directeur) : de combien \(y\) monte quand \(x\) augmente de 1 ;</li>
<li>\(c\) = <b>ordonnée à l'origine</b> : la valeur de \(y\) quand \(x=0\).</li></ul>
<div class="ex"><div class="lab">Exemple concret — un taxi</div>
Un taxi prend 7 MAD de prise en charge + 4 MAD par km : \(prix = 4\times km + 7\). La pente \(m=4\) (MAD/km), l'ordonnée à l'origine \(c=7\). Pour 10 km : \(4\times10+7=47\) MAD.</div>
<p><b>Trouver une loi à partir de mesures</b> : en TP, tu mesures des couples \((x ; y)\). S'ils sont à peu près alignés, la loi est \(y=mx+c\). Tu traces la meilleure droite, tu lis \(c\) sur l'axe des \(y\) et tu calcules \(m\) avec deux points <b>éloignés</b> de la droite (pas forcément des points de mesure).</p>
<div class="ex"><div class="lab">Exemple — pression d'un gaz</div>
Dans une cuve, \(p\) passe de 248 kPa à 270 kPa quand \(T\) passe de 273 K à 298 K. Pente : \(m=\frac{270-248}{298-273}=\frac{22}{25}=0{,}88\) kPa/K. Donc \(p\approx0{,}88\,T+8\) kPa.</div>

<div class="ex"><div class="lab">Exemple des diapos — vitesse d'un mobile</div>On mesure \(v\) = 7,7 ; 10,5 ; 13,3 ; 15,5 ; 16,3 ; 20,5 ; 23,0 m/s pour \(t\) = 1 à 7 s. Les points sont presque alignés, donc \(v=at+u\). Droite d'ajustement : \(v\approx2{,}5\,t+5{,}4\). Interprétation : accélération ≈ 2,5 m/s² et vitesse de départ ≈ 5,4 m/s.</div>
<div class="tip"><div class="lab">Signes dans les quadrants (au tableau)</div>1er quadrant : x +, y + · 2e : x −, y + · 3e : x −, y − · 4e : x +, y −.</div>
<h4>3. Factoriser</h4>
<p><b>Développer</b>, c'est transformer un produit en somme : \(4(6x-2)=24x-8\). <b>Factoriser</b>, c'est l'inverse : écrire une somme sous forme de <b>produit</b>. C'est super utile pour simplifier et pour résoudre des équations (un produit est nul si un des facteurs est nul).</p>
<p><b>Facteurs d'un nombre</b> : \(24=2\times2\times2\times3=2^3\times3\) ; 31 est premier (pas d'autres facteurs que 1 et 31). Pour \(27+81\) : \(27=3^3\) et \(81=3^4\), donc \(27+81=27(1+3)=108\).</p>
<p><b>Méthode 1 — facteur commun</b> : on cherche ce qui est dans tous les termes. \(10x+8=2(5x+4)\) ; \(x^3-3x^2y=x^2(x-3y)\).</p>
<p><b>Méthode 2 — regroupement</b> (4 termes) : on fait deux paquets qui ont un facteur commun.<br>\(6ax+3ay+2bx+by=3a(2x+y)+b(2x+y)=(2x+y)(3a+b)\).</p>
<p><b>Méthode 3 — identités remarquables</b> (à connaître par cœur) :<br>\(a^2+2ab+b^2=(a+b)^2\) · \(a^2-2ab+b^2=(a-b)^2\) · \(a^2-b^2=(a+b)(a-b)\).<br>Exemple : \(25x^2y^2-30xy+9=(5xy-3)^2\) ; \(x^2-49=(x+7)(x-7)\).</p>
<p><b>Méthode 4 — trinôme \(ax^2+bx+c\)</b> : on cherche deux nombres dont le <b>produit</b> vaut \(a\times c\) et la <b>somme</b> vaut \(b\), puis on coupe le terme du milieu et on regroupe.</p>
<div class="ex"><div class="lab">Exemple pas à pas</div>
\(10a^2+ab-21b^2\) : \(a\times c=10\times(-21)=-210\) et somme \(=1\) → les nombres sont \(15\) et \(-14\).<br>
\(10a^2+15ab-14ab-21b^2=5a(2a+3b)-7b(2a+3b)=(2a+3b)(5a-7b)\).</div>
<div class="tip"><div class="lab">Astuce</div>Pour vérifier une factorisation, redéveloppe-la : tu dois retomber sur l'expression de départ.</div>`,
    vocab: [
      ['simultaneous equations', 'système d\'équations', 'à résoudre en même temps'],
      ['linear equation', 'équation linéaire'],
      ['unknown / variable', 'inconnue / variable'],
      ['substitution method', 'méthode par substitution'],
      ['elimination method', 'méthode par élimination (combinaison)'],
      ['coefficient', 'coefficient'],
      ['independent variable', 'variable indépendante (l\'entrée)'],
      ['dependent variable', 'variable dépendante (la sortie)'],
      ['Cartesian / rectangular coordinates', 'coordonnées cartésiennes'],
      ['origin', 'origine (0 ; 0)'],
      ['quadrant', 'quadrant'],
      ['slope / gradient', 'pente / coefficient directeur'],
      ['y-intercept', 'ordonnée à l\'origine'],
      ['straight line', 'droite'],
      ['to plot', 'tracer, placer des points'],
      ['best-fit line / linear regression', 'droite d\'ajustement / régression linéaire'],
      ['to expand / multiply out brackets', 'développer'],
      ['to factorise', 'factoriser'],
      ['factor', 'facteur'],
      ['highest common factor (HCF)', 'plus grand facteur commun (PGCD)'],
      ['prime number', 'nombre premier'],
      ['grouping', 'regroupement'],
      ['perfect square', 'carré parfait'],
      ['difference of two squares', 'différence de deux carrés']
    ],
    formules: [
      { nom: 'Équation d\'une droite', tex: 'y = mx + c', why: '\\(m\\) = pente, \\(c\\) = ordonnée à l\'origine.' },
      { nom: 'Pente entre deux points', tex: 'm = \\dfrac{y_2 - y_1}{x_2 - x_1}', why: 'Toujours (y du 2e − y du 1er) sur (x du 2e − x du 1er).' },
      { nom: 'Distributivité', tex: 'a(b+c) = ab + ac', why: 'Sert à développer… et à factoriser en sens inverse.' },
      { nom: 'Identités remarquables', tex: '(a+b)^2 = a^2+2ab+b^2 \\qquad (a-b)^2 = a^2-2ab+b^2', why: '' },
      { nom: 'Différence de deux carrés', tex: 'a^2 - b^2 = (a+b)(a-b)', why: 'Très fréquente : \\(x^2-16=(x+4)(x-4)\\).' }
    ],
    exos: [
      { src: 'Blackboard', niveau: 1, en: String.raw`Solve the following equations simultaneously: \(x+2y=-2\) and \(2x+3y=1\).`, fr: 'Résous le système : x + 2y = −2 et 2x + 3y = 1.',
        sol: String.raw`<p>Substitution : \(x=-2-2y\) → \(2(-2-2y)+3y=1\) → \(-4-y=1\) → \(y=-5\), \(x=8\).</p>` },
      { src: 'Blackboard', niveau: 1, en: String.raw`Slides: solve \(4x+y=9\) and \(-x+y=-1\) (a) by substitution, (b) by elimination.`, fr: 'Exemple du cours : résous le système (a) par substitution, (b) par élimination.',
        sol: String.raw`<p>(a) \(y=x-1\) → \(5x-1=9\) → \(x=2, y=1\). (b) (A) − (B) : \(5x=10\) → même résultat. Les droites se coupent en (2 ; 1).</p>` },
      { src: 'Blackboard', niveau: 1, en: String.raw`Slides: complete the table of values for \(y=\frac32x-2\) for \(x=-2,-1,0,1,2\) and plot the graph.`, fr: 'Exemple du cours : complète le tableau de valeurs et trace la droite.',
        sol: String.raw`<p>\(y=-5;\ -3{,}5;\ -2;\ -0{,}5;\ 1\). Les points sont alignés : droite de pente 1,5 qui coupe l'axe des y en −2.</p>` },
      { src: 'Blackboard', niveau: 1, en: String.raw`Use the elimination method: \(3x+4y=11\), \(x+7y=15\).`, fr: 'Utilise la méthode par élimination.',
        sol: String.raw`<p>×3 sur la 2e : \(3x+21y=45\). On soustrait : \(17y=34\) → \(y=2\), puis \(x=1\).</p>` },
      { src: 'Blackboard', niveau: 1, en: String.raw`Use the elimination method: \(2x+3y=16\), \(3x+2y=14\).`, fr: 'Utilise la méthode par élimination.',
        sol: String.raw`<p>1re ×3 : \(6x+9y=48\) ; 2e ×2 : \(6x+4y=28\). On soustrait : \(5y=20\) → \(y=4\), \(x=2\).</p>` },
      { src: 'Blackboard', niveau: 1, en: String.raw`Use substitution: \(y=3x-7\) and \(5x-3y=1\).`, fr: 'Utilise la substitution.',
        sol: String.raw`<p>\(5x-3(3x-7)=1\) → \(-4x+21=1\) → \(x=5\), \(y=8\).</p>` },
      { src: 'Blackboard', niveau: 2, en: String.raw`Solve: \(\frac{y}{2}-x=2\) and \(6x-\frac{3y}{2}=3\).`, fr: 'Résous le système (avec fractions).',
        sol: String.raw`<p>De la 1re : \(y=2x+4\). Dans la 2e : \(6x-1{,}5(2x+4)=3\) → \(3x-6=3\) → \(x=3\), \(y=10\).</p>` },
      { src: 'Blackboard', niveau: 2, en: String.raw`Forces in a structure satisfy \(9F_H-1.5F_V=7.5\) and \(6.25F_H-2.5F_V=8.75\). Find \(F_H\) and \(F_V\).`, fr: 'Les forces d\'une structure vérifient ces deux équations. Trouve F_H et F_V.',
        sol: String.raw`<p>1re × 5/3 : \(15F_H-2{,}5F_V=12{,}5\). On soustrait la 2e : \(8{,}75F_H=3{,}75\) → \(F_H\approx0{,}43\). Puis \(F_V=(9\times0{,}43-7{,}5)/1{,}5\approx-2{,}43\). Le signe − veut dire que la force est dans l'autre sens.</p>` },
      { src: 'Blackboard', niveau: 2, en: String.raw`The strain \(\varepsilon\) in a wire for stresses \(\sigma\) = 10.8, 21.6, 33.3, 37.8, 45.9 MPa is \(\varepsilon\) = 12, 24, 37, 42, 51 (×10⁻⁵). Show that \(\sigma=E\varepsilon\) and find \(E\).`, fr: 'Montre que la contrainte est proportionnelle à la déformation et trouve la constante E.',
        sol: String.raw`<p>Les points sont alignés avec l'origine. \(E=\sigma/\varepsilon=10{,}8/(12\times10^{-5})=90\,000\) MPa \(=90\) GPa (pareil pour les autres points).</p>` },
      { src: 'Blackboard', niveau: 2, en: String.raw`Data: F = 19, 37, 50, 93, 125, 149 N for loads L = 40, 120, 230, 410, 540, 680 N. Assuming \(F=kL+c\), find the force needed to lift a 1 kN load.`, fr: 'En supposant F = kL + c, trouve la force pour soulever 1 kN.',
        sol: String.raw`<p>Droite d'ajustement : \(k\approx0{,}207\), \(c\approx9{,}1\) N. Pour \(L=1000\) N : \(F\approx0{,}207\times1000+9{,}1\approx216\) N.</p>` },
      { src: 'Blackboard', niveau: 1, en: String.raw`Solve graphically: \(2.5x+0.45-3y=0\) and \(1.6x+0.8y-0.8=0\).`, fr: 'Résous graphiquement (trace les deux droites).',
        sol: String.raw`<p>\(y=(2{,}5x+0{,}45)/3\) et \(y=1-2x\). Elles se coupent en \(x=0{,}3\), \(y=0{,}4\).</p>` },
      { src: 'Blackboard', niveau: 1, en: String.raw`Factorise: (a) \(27+81\) (b) \(2x^4+5x^2y^2\) (c) \(10ax+2ay+5bx+by\)`, fr: 'Factorise ces expressions.',
        sol: String.raw`<p>(a) \(27(1+3)=108=2^2\times3^3\)<br>(b) \(x^2(2x^2+5y^2)\)<br>(c) \(2a(5x+y)+b(5x+y)=(5x+y)(2a+b)\)</p>` },
      { src: 'Blackboard', niveau: 2, en: String.raw`Factorise: (a) \(20x^2-3y^2+4xy^2-15x\) (b) \(2x^2-7xy-15y^2\) (c) \(21a^2+5ab-6b^2\)`, fr: 'Factorise (regroupement et trinômes).',
        sol: String.raw`<p>(a) on réordonne : \(5x(4x-3)+y^2(4x-3)=(4x-3)(5x+y^2)\)<br>(b) produit −30, somme −7 → −10 et 3 : \((2x+3y)(x-5y)\)<br>(c) produit −126, somme 5 → 14 et −9 : \((3a+2b)(7a-3b)\)</p>` },
      { src: 'Blackboard', niveau: 1, en: String.raw`Slides: multiply out (a) \(3(2y-7)\) (b) \((2x+y)(3y-1)\) (c) \((a+2b-3)(2a+5)\) (d) \((x+2)(3y-1)(x-y)\).`, fr: 'Diapos : développe.',
        sol: String.raw`<p>(a) \(6y-21\) · (b) \(6xy-2x+3y^2-y\) · (c) \(2a^2+4ab-a+10b-15\) · (d) \(3x^2y-x^2+7xy-2x-3xy^2-6y^2+2y\)</p>` },
      { src: 'Blackboard', niveau: 2, en: 'Slides: the velocity v of a body is measured at times t = 1…7 s: 7.7, 10.5, 13.3, 15.5, 16.3, 20.5, 23.0 m/s. Plot the data and find a law v = at + u.', fr: 'Diapos : trace les mesures et trouve une loi v = at + u.',
        sol: String.raw`<p>Les points sont presque alignés. Droite d'ajustement : \(a\approx2{,}46\) m/s², \(u\approx5{,}4\) m/s, donc \(v\approx2{,}5t+5{,}4\).</p>` },
      { src: 'Blackboard', niveau: 1, en: 'Slides: write 24 and 31 as products of prime numbers.', fr: 'Diapos : décompose 24 et 31 en facteurs premiers.',
        sol: String.raw`<p>\(24=2^3\times3\) ; 31 est premier.</p>` },
      { src: 'Claude', niveau: 1, en: 'A cinema ticket for an adult and two children costs 110 MAD. Two adults and one child cost 130 MAD. Find the price of each ticket.', fr: 'Au cinéma, 1 adulte + 2 enfants = 110 MAD ; 2 adultes + 1 enfant = 130 MAD. Trouve le prix de chaque billet.',
        sol: String.raw`<p>\(a+2e=110\) et \(2a+e=130\). 1re ×2 : \(2a+4e=220\) ; on soustrait : \(3e=90\) → \(e=30\), \(a=50\).</p>` },
      { src: 'Claude', niveau: 1, en: 'A line passes through (1, 3) and (4, 12). Find its equation.', fr: 'Une droite passe par (1 ; 3) et (4 ; 12). Trouve son équation.',
        sol: String.raw`<p>\(m=\frac{12-3}{4-1}=3\). \(3=3\times1+c\) → \(c=0\). Donc \(y=3x\).</p>` },
      { src: 'Claude', niveau: 2, en: String.raw`Show that the system \(2x+4y=6\), \(x+2y=5\) has no solution. Explain using graphs.`, fr: 'Montre que ce système n\'a pas de solution et explique avec les droites.',
        sol: String.raw`<p>En divisant la 1re par 2 : \(x+2y=3\). Or la 2e dit \(x+2y=5\) : impossible. Les deux droites ont la même pente \(-\tfrac12\) mais pas la même ordonnée à l'origine → parallèles.</p>` },
      { src: 'Claude', niveau: 2, en: String.raw`Factorise completely: \(3x^3-12x\).`, fr: 'Factorise complètement.',
        sol: String.raw`<p>\(3x(x^2-4)=3x(x+2)(x-2)\).</p>` }
    ]
  };

  // =========================== SEMAINE 2 ===========================
  S[2] = {
    titre: 'Quadratic Equations',
    titreFr: 'Équations du second degré',
    resume: 'Résoudre \\(ax^2+bx+c=0\\) par factorisation ou avec la formule (discriminant), tracer une parabole, et résoudre un système droite + parabole.',
    sources: 'GENG0001 04 Quadratic Equations (diapos + version corrigée « filled » du 9 oct.) · Online notes & Tutorial Topic 4 de Jan Spakula (Blackboard)',
    en: String.raw`
<h4>Chapter 04 — Quadratic Equations</h4>
<p><b>Learning outcomes:</b> (1) determine the roots of quadratic equations using factorisation and the formula; (2) solve simultaneous equations involving one linear and one quadratic equation; (3) sketch the graphs of quadratic functions.</p>
<h5>Definitions</h5>
<p class="muted" style="font-size:13px">(Slides: graphs of \(y=x^2\), \(y=x^2-2\), \(y=(x-2)^2\), \(y=(x-2)^2-5\), \(y=-x^2\), and \(y=\frac12x^2, x^2, 2x^2\): adding a constant shifts the parabola up/down, replacing \(x\) by \(x-2\) shifts it right, a minus sign flips it, a bigger coefficient makes it narrower.)</p>
<p>A <b>quadratic polynomial</b> is \(ax^2+bx+c\) with \(a\neq0\). A <b>root</b> is a value of \(x\) such that \(ax^2+bx+c=0\). The graph of \(y=ax^2+bx+c\) is a <b>parabola</b>: it opens upwards if \(a>0\), downwards if \(a&lt;0\). Its roots are where it crosses the x-axis.</p>
<h5>Method 1 — Factorisation</h5>
<p><b>Slide problems:</b> find the roots of \(2x^2-7x-4\), \(9x^2-6x+1\), \(-x^2-5x-6\); factorise and find the roots of \(2x^2+7x+3\) and \(4x^2-4x-3\).</p>
<p>If \(ax^2+bx+c=(px+q)(rx+s)\), then the product is zero when one factor is zero. Example: \(2x^2-x-6=(2x+3)(x-2)=0 \Rightarrow x=-\tfrac32\) or \(x=2\).</p>
<h5>Method 2 — The quadratic formula</h5>
<p>The <b>discriminant</b> \(b^2-4ac\) tells us how many real roots there are:</p>
<ul><li>\(b^2-4ac&lt;0\): no real roots;</li><li>\(b^2-4ac=0\): one (repeated) root \(x=-\frac{b}{2a}\);</li><li>\(b^2-4ac>0\): two roots \(x=\dfrac{-b\pm\sqrt{b^2-4ac}}{2a}\).</li></ul>
<p>Example: \(x^2+3x+1=0\Rightarrow x=\dfrac{-3\pm\sqrt5}{2}\). <b>"You need to learn this formula by heart!"</b> Slide problems: \(x^2-8x+5\), \(x^2-16\), \(4x^2+4x+1\).</p>
<h5>Method 3 — Completing the square</h5>
<p>Rewrite \(x^2+bx+c\) as \(\left(x+\frac b2\right)^2-\left(\frac b2\right)^2+c\), then take square roots. The formula is derived this way (derivation non-examinable).</p>
<h5>Sketching</h5>
<p>Find: the y-intercept (\(x=0\)), the x-intercepts (roots), and the vertex. In the form \(y=a(x-h)^2+k\) the vertex is \((h,k)\).</p>
<h5>Linear + quadratic systems (4.2)</h5>
<p><b>Slide problem:</b> solve \(y=x^2-3x+4\) (A) and \(y-x=1\) (B). The graph shows the line crossing the parabola at two points. Then: <b>sketch</b> \(y=3x^2-17x+10\).</p>
<p>Make one variable the subject of the linear equation, substitute into the quadratic, solve the resulting quadratic, then find the other variable. There can be 2, 1 or 0 solutions (line cuts, touches or misses the parabola).</p>
<p class="muted" style="font-size:13px">Note: general formulas exist for polynomials up to degree 4 only.</p>`,
    fr: String.raw`
<h4>C'est quoi une équation du second degré ?</h4>
<p>C'est une équation où l'inconnue apparaît au <b>carré</b> : \(ax^2+bx+c=0\) avec \(a\neq0\). Ses solutions s'appellent les <b>racines</b>. Le graphique de \(y=ax^2+bx+c\) est une <b>parabole</b> (forme de U) : tournée vers le haut si \(a>0\), vers le bas si \(a&lt;0\). Les racines, ce sont les endroits où la parabole coupe l'axe des \(x\).</p>
<div class="ex"><div class="lab">Exemple concret — un ballon lancé</div>
Tu lances un ballon vers le haut à 20 m/s. Sa hauteur est \(h=20t-4{,}9t^2\). Quand est-il à 15 m ?<br>
\(4{,}9t^2-20t+15=0\) → deux réponses : \(t\approx0{,}99\) s (en montant) et \(t\approx3{,}09\) s (en redescendant). Les deux ont un sens physique !</div>

<h4>Méthode 1 — Factoriser</h4>
<p>Si on arrive à écrire l'équation comme un produit, c'est gagné : <b>un produit est nul si l'un des facteurs est nul</b>.</p>
<p>\(x^2-x-6=0\) : on cherche deux nombres de produit −6 et de somme −1 → −3 et 2. Donc \((x-3)(x+2)=0\) → \(x=3\) ou \(x=-2\).</p>
<p>Cas faciles à repérer : \(x^2-2x=x(x-2)\) → \(x=0\) ou \(2\) ; \(x^2-16=(x-4)(x+4)\) → \(x=\pm4\).</p>

<h4>Méthode 2 — La formule (le discriminant)</h4>
<p>Marche <b>toujours</b>. On calcule d'abord \(\Delta=b^2-4ac\) (le discriminant) :</p>
<ul><li>\(\Delta>0\) : <b>2 solutions</b> \(x=\dfrac{-b\pm\sqrt{\Delta}}{2a}\)</li>
<li>\(\Delta=0\) : <b>1 solution</b> (double) \(x=-\dfrac{b}{2a}\) — la parabole touche juste l'axe</li>
<li>\(\Delta&lt;0\) : <b>pas de solution réelle</b> — la parabole ne touche jamais l'axe</li></ul>
<div class="ex"><div class="lab">Exemple pas à pas</div>
\(3x^2-8x+2=0\) : \(a=3, b=-8, c=2\).<br>
\(\Delta=(-8)^2-4\times3\times2=64-24=40\) → positif, donc 2 solutions.<br>
\(x=\dfrac{8\pm\sqrt{40}}{6}=\dfrac{8\pm6{,}32}{6}\) → \(x\approx2{,}39\) ou \(x\approx0{,}28\).</div>
<div class="warnbox"><div class="lab">Piège classique</div>Attention aux signes : si \(b=-8\), alors \(-b=+8\) et \(b^2=64\) (pas −64). Mets toujours des parenthèses : \((-8)^2\).</div>

<h4>Méthode 3 — Compléter le carré</h4>
<p>On fait apparaître une identité remarquable. \(x^2+6x+5\) : la moitié de 6 est 3, donc \(x^2+6x=(x+3)^2-9\). Ainsi \(x^2+6x+5=(x+3)^2-4\).<br>
Résoudre \((x+3)^2-4=0\) → \(x+3=\pm2\) → \(x=-1\) ou \(x=-5\).<br>
Bonus : cette forme donne directement le <b>sommet</b> de la parabole : \((-3 ; -4)\).</p>

<h4>Tracer une parabole</h4>
<ol><li>Le sens : \(a>0\) → ∪ ; \(a&lt;0\) → ∩.</li>
<li>L'ordonnée à l'origine : on remplace \(x\) par 0 → c'est \(c\).</li>
<li>Les racines (si elles existent) : coupures avec l'axe des \(x\).</li>
<li>Le sommet : en \(x=-\frac{b}{2a}\), ou directement avec la forme \(a(x-h)^2+k\) → sommet \((h ; k)\).</li></ol>

<h4>Système droite + parabole</h4>
<p>On isole une inconnue dans l'équation linéaire, on remplace dans l'autre, et on tombe sur une équation du second degré.</p>
<div class="ex"><div class="lab">Exemple</div>
\(y=x^2+5x-3\) et \(y=3x-2\). Donc \(x^2+5x-3=3x-2\) → \(x^2+2x-1=0\) → \(x=-1\pm\sqrt2\).<br>
\(x\approx0{,}41\) → \(y\approx-0{,}77\) ; \(x\approx-2{,}41\) → \(y\approx-9{,}24\). La droite coupe la parabole en 2 points.</div>`,
    vocab: [
      ['quadratic equation', 'équation du second degré'],
      ['quadratic polynomial', 'trinôme / polynôme du second degré'],
      ['root', 'racine (solution)'],
      ['repeated root', 'racine double'],
      ['real roots', 'racines réelles'],
      ['discriminant', 'discriminant (Δ)'],
      ['quadratic formula', 'formule du second degré'],
      ['completing the square', 'compléter le carré (forme canonique)'],
      ['parabola', 'parabole'],
      ['vertex / turning point', 'sommet'],
      ['x-intercept / y-intercept', 'point d\'intersection avec l\'axe des x / des y'],
      ['to sketch a graph', 'esquisser une courbe'],
      ['square root', 'racine carrée'],
      ['subject of the formula', 'inconnue isolée (« make x the subject »)'],
      ['non-examinable', 'hors programme d\'examen']
    ],
    formules: [
      { nom: 'Forme générale', tex: 'ax^2 + bx + c = 0 \\quad (a \\neq 0)', why: '' },
      { nom: 'Discriminant', tex: '\\Delta = b^2 - 4ac', why: '> 0 : 2 racines · = 0 : 1 racine · < 0 : aucune racine réelle.' },
      { nom: 'Formule des racines', tex: 'x = \\dfrac{-b \\pm \\sqrt{b^2-4ac}}{2a}', why: 'Le ± donne les deux solutions.' },
      { nom: 'Racine double', tex: 'x = -\\dfrac{b}{2a}', why: 'Quand Δ = 0. C\'est aussi l\'abscisse du sommet.' },
      { nom: 'Compléter le carré', tex: 'x^2 + bx = \\left(x + \\tfrac{b}{2}\\right)^2 - \\left(\\tfrac{b}{2}\\right)^2', why: 'Donne la forme \\(a(x-h)^2+k\\), sommet \\((h ; k)\\).' }
    ],
    exos: [
      { src: 'Blackboard', niveau: 1, en: String.raw`Slides: find the roots of (a) \(2x^2-7x-4\) (b) \(9x^2-6x+1\) (c) \(-x^2-5x-6\).`, fr: 'Diapos : trouve les racines.',
        sol: String.raw`<p>(a) \((2x+1)(x-4)\) → \(-\tfrac12\) ; 4 · (b) \((3x-1)^2\) → \(\tfrac13\) (double) · (c) \(-(x+2)(x+3)\) → −2 ; −3</p>` },
      { src: 'Blackboard', niveau: 1, en: String.raw`Slides: factorise and find the roots of (a) \(2x^2+7x+3\) (b) \(4x^2-4x-3\).`, fr: 'Diapos : factorise puis trouve les racines.',
        sol: String.raw`<p>(a) produit 6, somme 7 → 6 et 1 : \((2x+1)(x+3)\) → \(-\tfrac12\) ; −3<br>(b) produit −12, somme −4 → −6 et 2 : \((2x+1)(2x-3)\) → \(-\tfrac12\) ; \(\tfrac32\)</p>` },
      { src: 'Blackboard', niveau: 1, en: String.raw`Slides: use the formula to find the roots of (a) \(x^2-8x+5\) (b) \(x^2-16\) (c) \(4x^2+4x+1\).`, fr: 'Diapos : utilise la formule.',
        sol: String.raw`<p>(a) Δ = 64 − 20 = 44 → \(x=4\pm\sqrt{11}\) ≈ 7,32 ; 0,68 · (b) Δ = 64 → ±4 · (c) Δ = 0 → \(x=-\tfrac12\) (double)</p>` },
      { src: 'Blackboard', niveau: 2, en: String.raw`Slides: solve simultaneously \(y=x^2-3x+4\) (A) and \(y-x=1\) (B).`, fr: 'Diapos : résous le système droite + parabole.',
        sol: String.raw`<p>(B) : \(y=x+1\). Donc \(x^2-3x+4=x+1\) → \(x^2-4x+3=0\) → \((x-1)(x-3)=0\). Solutions : (1 ; 2) et (3 ; 4), les deux points d'intersection du graphique.</p>` },
      { src: 'Blackboard', niveau: 2, en: String.raw`Slides: sketch a graph of \(y=3x^2-17x+10\).`, fr: 'Diapos : esquisse la courbe.',
        sol: String.raw`<p>\(a=3>0\) → ∪. Ordonnée à l'origine : 10. Racines : \((3x-2)(x-5)=0\) → \(\tfrac23\) et 5. Sommet en \(x=-\tfrac{b}{2a}=\tfrac{17}{6}\approx2{,}83\), \(y=3\left(\tfrac{17}{6}\right)^2-17\cdot\tfrac{17}{6}+10=-\tfrac{169}{12}\approx-14{,}1\). <i>(Même méthode et même résultat que la correction du prof : x = 0 → y = 10 ; y = 0 → racines ; sommet en −b/2a.)</i></p>` },
      { src: 'Blackboard', niveau: 1, en: String.raw`Solve by factorisation: (a) \(x^2-x-6=0\) (b) \(x^2-16=0\) (c) \(x^2-2x=0\) (d) \(x^2-6x+9=0\)`, fr: 'Résous en factorisant.',
        sol: String.raw`<p>(a) \((x-3)(x+2)\) → 3 ; −2 · (b) \((x-4)(x+4)\) → ±4 · (c) \(x(x-2)\) → 0 ; 2 · (d) \((x-3)^2\) → 3 (double)</p>` },
      { src: 'Blackboard', niveau: 2, en: String.raw`Solve by factorisation: (a) \(6x^2+18x+12=0\) (b) \(6x^2-11x-7=0\) (c) \(14x^2=29x-12\)`, fr: 'Résous en factorisant.',
        sol: String.raw`<p>(a) \(6(x+1)(x+2)\) → −1 ; −2<br>(b) \((3x-7)(2x+1)\) → 7/3 ; −1/2<br>(c) \(14x^2-29x+12=(7x-4)(2x-3)\) → 4/7 ; 3/2</p>` },
      { src: 'Blackboard', niveau: 1, en: String.raw`Use the quadratic formula: (a) \(3x^2-8x+2=0\) (b) \(4x^2-3x-2=0\) (c) \(5x^2-4x-1=0\)`, fr: 'Utilise la formule.',
        sol: String.raw`<p>(a) Δ = 40 → 2,39 ; 0,28<br>(b) Δ = 9 + 32 = 41 → \((3\pm6{,}40)/8\) → 1,17 ; −0,42<br>(c) Δ = 16 + 20 = 36 → \((4\pm6)/10\) → 1 ; −0,2</p>` },
      { src: 'Blackboard', niveau: 2, en: String.raw`Solve: \(x(x+4)+2x(x+3)=5\).`, fr: 'Développe d\'abord, puis résous.',
        sol: String.raw`<p>\(x^2+4x+2x^2+6x=5\) → \(3x^2+10x-5=0\). Δ = 100 + 60 = 160 → \(x=(-10\pm12{,}65)/6\) → 0,44 ; −3,77.</p>` },
      { src: 'Blackboard', niveau: 1, en: String.raw`Sketch \(y=(x+2)^2-3\), marking the x and y intercepts.`, fr: 'Esquisse la courbe en indiquant les points d\'intersection avec les axes.',
        sol: String.raw`<p>Sommet \((-2 ; -3)\), ∪. En \(x=0\) : \(y=1\). Racines : \((x+2)^2=3\) → \(x=-2\pm\sqrt3\) → −0,27 et −3,73.</p>` },
      { src: 'Blackboard', niveau: 2, en: String.raw`Solve simultaneously: \(p-2q=1\) and \(p^2-3pq+4q^2=11\).`, fr: 'Résous le système (linéaire + second degré).',
        sol: String.raw`<p>\(p=1+2q\). On remplace : \(2q^2+q+1=11\) → \(2q^2+q-10=0\) → \((2q+5)(q-2)=0\).<br>\(q=2, p=5\) ou \(q=-\tfrac52, p=-4\).</p>` },
      { src: 'Blackboard', niveau: 2, en: String.raw`Solve simultaneously: \(y=x^2+5x-3\) and \(y=3x-2\).`, fr: 'Trouve les points d\'intersection de la droite et de la parabole.',
        sol: String.raw`<p>\(x^2+2x-1=0\) → \(x=-1\pm\sqrt2\). Points ≈ (0,41 ; −0,77) et (−2,41 ; −9,24).</p>` },
      { src: 'Claude', niveau: 1, en: String.raw`Without solving, how many real roots does \(2x^2+3x+5=0\) have?`, fr: 'Sans résoudre, combien de racines réelles a cette équation ?',
        sol: String.raw`<p>Δ = 9 − 40 = −31 &lt; 0 → aucune racine réelle.</p>` },
      { src: 'Claude', niveau: 2, en: 'A ball is thrown upwards: its height is h = 20t − 4.9t² (m). When is it 15 m high? When does it hit the ground?', fr: 'Un ballon lancé vers le haut : h = 20t − 4,9t². Quand est-il à 15 m ? Quand retombe-t-il au sol ?',
        sol: String.raw`<p>\(4{,}9t^2-20t+15=0\) : Δ = 400 − 294 = 106 → \(t=(20\pm10{,}3)/9{,}8\) → 0,99 s et 3,09 s.<br>Au sol : \(t(20-4{,}9t)=0\) → \(t=20/4{,}9\approx4{,}08\) s.</p>` },
      { src: 'Claude', niveau: 2, en: 'A rectangular plate has a perimeter of 34 cm and an area of 60 cm². Find its dimensions.', fr: 'Une plaque rectangulaire a un périmètre de 34 cm et une aire de 60 cm². Trouve ses dimensions.',
        sol: String.raw`<p>\(L+l=17\), \(Ll=60\) → \(l(17-l)=60\) → \(l^2-17l+60=0\) → \((l-5)(l-12)=0\). Dimensions : 12 cm × 5 cm.</p>` },
      { src: 'Claude', niveau: 3, en: String.raw`For which values of \(k\) does \(x^2+kx+9=0\) have a repeated root?`, fr: 'Pour quelles valeurs de k l\'équation a-t-elle une racine double ?',
        sol: String.raw`<p>Racine double ⇔ Δ = 0 : \(k^2-36=0\) → \(k=6\) ou \(k=-6\).</p>` }
    ]
  };
})();
