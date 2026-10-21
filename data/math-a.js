// GENG0001 Mathematics A — Semaines 1 à 4
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

  // =========================== SEMAINE 3 ===========================
  S[3] = {
    titre: 'Inequalities & Indices',
    titreFr: 'Inéquations et puissances (indices)',
    resume: '2 chapitres : résoudre une inéquation (linéaire, du second degré, rationnelle) et l\'écrire sur la droite des réels ; les lois des puissances et l\'écriture scientifique / ingénieur des nombres.',
    sources: 'GENG0001 05 Inequalities et GENG0001 06 Indices (Blank Lecture Notes, diapos, publiées le 12 oct.)',
    en: String.raw`
<h4>Chapter 05 — Inequalities</h4>
<p><b>Learning outcomes:</b> (1) write inequality statements involving different inequality symbols; (2) determine the range of values of a variable that satisfies an inequality statement.</p>
<h5>Symbols</h5>
<p>For two numbers \(a\) and \(b\):</p>
<ul><li>\(a&lt;b\) means that \(a\) is less than \(b\);</li>
<li>\(a>b\) means that \(a\) is greater than \(b\);</li>
<li>\(a\le b\) means that \(a\) is less than or equal to \(b\);</li>
<li>\(a\ge b\) means that \(a\) is greater than or equal to \(b\).</li></ul>
<p>For example: \(1&lt;2\), \(-10&lt;-5\), \(-3\le-3\), \(-2\ge-4\). Note: \(a>0\) means the same as "\(a\) is positive".</p>
<h5>Number line and set notation</h5>
<p>On the number line, a number further to the left is smaller. The notation \(\{x : x>2\}\) means "the set of all numbers that are greater than 2". The slides ask you to depict on a number line: \(\{x : x>2\}\), \(\{x : x\le-2\}\), \(\{x : -3\le x&lt;4\}\) and \(\{x : x&lt;1 \text{ or } x\ge3\}\).</p>
<p class="muted" style="font-size:13px">Convention: an <b>open</b> circle at an end point that is excluded (\(&lt;\), \(>\)), a <b>filled</b> circle at an end point that is included (\(\le\), \(\ge\)), and a thick line over all the values in the set.</p>
<h5>Axioms of inequalities</h5>
<ol><li>If \(a&lt;b\) then \(a+c&lt;b+c\).</li>
<li>If \(a&lt;b\) then \(a-c&lt;b-c\).</li>
<li>If \(a&lt;b\) <b>and</b> \(c>0\) then \(ac&lt;bc\).</li>
<li>If \(a&lt;b\) <b>and</b> \(c&lt;0\) then \(ac>bc\).</li></ol>
<p>So adding or subtracting the same number keeps the inequality; multiplying (or dividing) by a <b>negative</b> number <b>reverses</b> it.</p>
<h5>Problems on the slides</h5>
<ul><li>Solve \(-3x+2>11\).</li>
<li>Determine the set \(\{x : 2x+x^2&lt;5x+10\}\).</li>
<li>Solve \(\dfrac{2x-5}{x-7}&lt;0\).</li>
<li>Solve \(\dfrac{3x+8}{x-1}\ge-2\).</li>
<li>Solve \(\dfrac{x-1}{x-2}&lt;0\).</li>
<li>Solve \(\dfrac{3x-2}{1+x}\le1\).</li></ul>
<p>Method for quadratic and rational inequalities: bring everything to one side so that the other side is 0, factorise (or write as a single fraction), find the critical values (zeros of each factor, and values where the denominator is 0), then study the sign of each factor in a sign table. Never multiply both sides by an expression whose sign you don't know (e.g. \(x-7\)).</p>

<h4>Chapter 06 — Indices</h4>
<p><b>Learning outcomes:</b> (1) apply the laws of exponents to simplify expressions with indices; (2) write numbers in standard and engineering scientific notations.</p>
<h5>6.1 Indices</h5>
<p>Subscripts and superscripts are also called <b>indices</b> (singular: <b>index</b>). Subscripts are usually used to denote a family of variables, e.g. \(a_1,a_2,a_3\) (instead of \(a,b,c\)). Superscripts usually denote an <b>exponent</b>, i.e. the power to which a given number is raised.</p>
<p>Examples: \(4^3=4\cdot4\cdot4=64\), \(2^5=2\cdot2\cdots2=32\) (5 times), \(x^4=x\cdot x\cdot x\cdot x\).</p>
<p>In general, we <b>define</b>:</p>
<ul><li>\(x^n:=x\cdot x\cdots x\) (\(n\) times), when \(n>0\);</li>
<li>\(x^0:=1\);</li>
<li>\(x^{-n}:=\dfrac{1}{x\cdot x\cdots x}\) (\(n\) times), when \(n>0\);</li>
<li>\(x^{1/2}:=\sqrt{x}\) for \(x\ge0\), \(x^{1/3}:=\sqrt[3]{x}\).</li></ul>
<p>Assume \(x\ge0\) and \(m,n>0\). Then \(x^{1/n}:=\sqrt[n]{x}\), \(x^{m/n}:=\sqrt[n]{x^m}\), \(x^{-m/n}:=\dfrac{1}{\sqrt[n]{x^m}}\).</p>
<h5>6.2 Laws of exponents</h5>
<p>The basic ones are: (1) \(a^r\cdot a^s=a^{r+s}\); (2) \((a\cdot b)^r=a^r\cdot b^r\); (3) \((a^r)^s=a^{r\cdot s}\).</p>
<p>From these, one can derive: (4) \(\dfrac{a^r}{a^s}=a^{r-s}\); (5) \(\left(\sqrt[n]{a}\right)^m=a^{m/n}\).</p>
<p>Deriving 4: \(\frac{a^r}{a^s}=a^r\cdot\frac{1}{a^s}=a^r\cdot a^{-s}\overset{1.}{=}a^{r-s}\). Deriving 5: \(\left(\sqrt[n]{a}\right)^m=\left(a^{1/n}\right)^m\overset{3.}{=}a^{\frac1n\cdot m}=a^{m/n}\).</p>
<p><b>Problems on the slides:</b> write using only positive indices: \(x^{-4}\), \(2x^{-5}\), \((2x)^{-5}\), \(\dfrac{3}{y^{-5}}\). Write using only a single index: \((x^3)^{-2}\), \(((-x)^4)^{-5}\), \(\left(\dfrac{t}{t^{-3}}\right)^2\). Simplify so that it uses only positive indices: \(\dfrac{3\left(xy^{1/3}\right)^3}{2x^{-2}y^2}\div\dfrac{\sqrt[3]{27x^2y^6}}{\sqrt{4y^4}}\).</p>
<h5>6.3 Scientific notation of numbers</h5>
<p><b>Standard</b> (or <b>normalised</b>) scientific notation is \(a\cdot10^n\) where \(1\le|a|&lt;10\) and \(n\) is an integer.</p>
<p><b>Engineering</b> scientific notation is \(a\cdot10^n\) where \(1\le|a|&lt;1000\) and \(n\) is a multiple of 3.</p>
<p>The "\(a\)" is called the <b>mantissa</b>, the "\(n\)" is called the <b>exponent</b>.</p>
<table><tr><th>Decimal expansion</th><th>Standard</th><th>Engineering</th></tr>
<tr><td>17</td><td>\(1.7\cdot10^1\)</td><td>17</td></tr>
<tr><td>21</td><td>\(2.1\cdot10^1\)</td><td>21</td></tr>
<tr><td>17 425</td><td>\(1.7425\cdot10^4\)</td><td>\(17.425\cdot10^3\)</td></tr>
<tr><td>150, −242, 713 527, 0.0002, −0.00007</td><td colspan="2">to complete (see exercises)</td></tr></table>`,
    fr: String.raw`
<h4>Partie 1 — Les inéquations</h4>
<p>Une <b>inéquation</b>, c'est comme une équation, mais avec un signe de comparaison à la place du « = ». La réponse n'est plus un seul nombre mais <b>tout un intervalle</b> de nombres.</p>
<ul><li>\(&lt;\) : strictement plus petit · \(>\) : strictement plus grand</li>
<li>\(\le\) : plus petit <b>ou égal</b> · \(\ge\) : plus grand <b>ou égal</b></li></ul>
<div class="ex"><div class="lab">Exemple concret — une limite de vitesse</div>
Sur l'autoroute en Malaisie, la vitesse \(v\) (km/h) doit vérifier \(v\le110\). Rouler à 110 est autorisé (le « égal »), à 111 non. Et si une voie impose aussi un minimum de 60 km/h : \(60\le v\le110\).</div>
<p>Avec les négatifs, attention : \(-10&lt;-5\) (−10 est plus à gauche sur la droite, donc plus petit).</p>

<h4>La droite des réels et la notation d'ensemble</h4>
<p>\(\{x : x>2\}\) se lit « l'ensemble des \(x\) tels que \(x>2\) ». Sur la droite :</p>
<ul><li>rond <b>vide</b> (○) quand la borne est exclue (\(&lt;\) ou \(>\)) ;</li>
<li>rond <b>plein</b> (●) quand la borne est incluse (\(\le\) ou \(\ge\)) ;</li>
<li>on surligne toute la partie qui marche.</li></ul>
<div class="ex"><div class="lab">Les 4 dessins des diapos</div>
\(\{x : x>2\}\) : ○ en 2, trait vers la droite.<br>
\(\{x : x\le-2\}\) : ● en −2, trait vers la gauche.<br>
\(\{x : -3\le x&lt;4\}\) : ● en −3, ○ en 4, trait entre les deux.<br>
\(\{x : x&lt;1 \text{ ou } x\ge3\}\) : ○ en 1 avec trait vers la gauche, et ● en 3 avec trait vers la droite (deux morceaux séparés).</div>

<h4>Les règles (axiomes)</h4>
<p>On peut <b>ajouter ou retirer</b> le même nombre des deux côtés : rien ne change. On peut <b>multiplier ou diviser</b> par un nombre <b>positif</b> : rien ne change. Mais si on multiplie ou divise par un nombre <b>négatif</b>, <b>le sens s'inverse</b>.</p>
<div class="ex"><div class="lab">Pourquoi le sens s'inverse</div>
\(2&lt;5\). Multiplie par −1 : \(-2\) et \(-5\). Or \(-2>-5\) ! Le « plus petit » est devenu « plus grand ». C'est exactement l'axiome 4.</div>
<div class="ex"><div class="lab">Exemple des diapos — \(-3x+2>11\)</div>
On retire 2 : \(-3x>9\).<br>
On divise par −3 (négatif !) donc on retourne le signe : \(x&lt;-3\).<br>
Vérification avec \(x=-4\) : \(-3(-4)+2=14>11\) ✓.</div>
<div class="warnbox"><div class="lab">Piège classique</div>Oublier de retourner le signe quand on divise par un nombre négatif. Réflexe : dès que tu vois un « − » devant le \(x\) au moment de diviser, retourne le signe.</div>

<h4>Inéquation du second degré</h4>
<p>Méthode : tout mettre d'un côté (l'autre côté = 0), factoriser, puis regarder le signe.</p>
<div class="ex"><div class="lab">Exemple des diapos — \(\{x : 2x+x^2&lt;5x+10\}\)</div>
\(x^2-3x-10&lt;0\) → \((x-5)(x+2)&lt;0\).<br>
Un produit est négatif quand les deux facteurs ont des signes contraires. Les valeurs « frontières » sont −2 et 5.<br>
Avec une parabole ∪ qui coupe l'axe en −2 et 5 : elle est sous l'axe <b>entre</b> les racines. Réponse : \(\{x : -2&lt;x&lt;5\}\).<br>
Vérif : \(x=0\) → \(0&lt;10\) ✓ ; \(x=6\) → \(48&lt;40\) ✗.</div>

<h4>Inéquation avec une fraction (rationnelle)</h4>
<p>On ne multiplie <b>jamais</b> par le dénominateur (on ne sait pas s'il est positif ou négatif). On fait plutôt un <b>tableau de signes</b>.</p>
<div class="ex"><div class="lab">Exemple des diapos — \(\dfrac{2x-5}{x-7}&lt;0\)</div>
Valeurs frontières : \(2x-5=0\) → \(x=2{,}5\) ; \(x-7=0\) → \(x=7\) (interdite).<br>
<table><tr><th></th><th>x &lt; 2,5</th><th>2,5 &lt; x &lt; 7</th><th>x &gt; 7</th></tr>
<tr><td>2x − 5</td><td>−</td><td>+</td><td>+</td></tr>
<tr><td>x − 7</td><td>−</td><td>−</td><td>+</td></tr>
<tr><td>fraction</td><td>+</td><td><b>−</b></td><td>+</td></tr></table>
Réponse : \(2{,}5&lt;x&lt;7\).</div>
<div class="ex"><div class="lab">Quand il n'y a pas 0 à droite — \(\dfrac{3x+8}{x-1}\ge-2\)</div>
On ramène à 0 : \(\dfrac{3x+8}{x-1}+2\ge0\) → \(\dfrac{3x+8+2(x-1)}{x-1}\ge0\) → \(\dfrac{5x+6}{x-1}\ge0\).<br>
Frontières : \(x=-\tfrac65\) (incluse, car la fraction peut valoir 0) et \(x=1\) (exclue, division par 0).<br>
Réponse : \(x\le-\tfrac65\) ou \(x>1\).</div>
<div class="warnbox"><div class="lab">À retenir</div>La valeur qui annule le <b>dénominateur</b> est <b>toujours exclue</b> (rond vide), même avec \(\le\) ou \(\ge\).</div>

<h4>Partie 2 — Les puissances (indices)</h4>
<p>En anglais, « index » (pluriel « indices ») désigne les petits nombres en haut ou en bas. En bas (\(a_1, a_2\)) c'est juste une étiquette. En haut, c'est un <b>exposant</b> : \(4^3=4\times4\times4=64\).</p>
<h4>Les définitions</h4>
<ul><li>\(x^0=1\) (toujours, pour \(x\neq0\)).</li>
<li>Exposant négatif = « 1 sur » : \(x^{-3}=\dfrac{1}{x^3}\). Exemple : \(2^{-3}=\frac18\).</li>
<li>Exposant fraction = racine : \(x^{1/2}=\sqrt x\), \(x^{1/3}=\sqrt[3]{x}\), \(x^{m/n}=\sqrt[n]{x^m}\). Exemple : \(8^{2/3}=(\sqrt[3]{8})^2=2^2=4\).</li></ul>
<h4>Les 5 lois des puissances</h4>
<ol><li>\(a^r\times a^s=a^{r+s}\) — même base, on <b>additionne</b> les exposants : \(2^3\times2^4=2^7=128\).</li>
<li>\((ab)^r=a^rb^r\) : \((3x)^2=9x^2\).</li>
<li>\((a^r)^s=a^{rs}\) — puissance de puissance, on <b>multiplie</b> : \((x^2)^5=x^{10}\).</li>
<li>\(\dfrac{a^r}{a^s}=a^{r-s}\) — on <b>soustrait</b> : \(\dfrac{x^7}{x^3}=x^4\).</li>
<li>\((\sqrt[n]{a})^m=a^{m/n}\) : \((\sqrt{x})^3=x^{3/2}\).</li></ol>
<div class="ex"><div class="lab">Exemple concret — la mémoire d'un téléphone</div>
1 Go = \(2^{30}\) octets et 1 Mo = \(2^{20}\) octets. Combien de Mo dans 1 Go ? \(\dfrac{2^{30}}{2^{20}}=2^{10}=1024\). Loi 4 !</div>
<div class="warnbox"><div class="lab">Pièges classiques</div>
\(2x^{-5}=\dfrac{2}{x^5}\) (le −5 ne touche que le \(x\)), mais \((2x)^{-5}=\dfrac{1}{32x^5}\) (il touche tout ce qui est dans la parenthèse).<br>
\(x^2+x^3\neq x^5\) : les lois marchent pour les <b>produits</b>, pas pour les sommes.</div>

<h4>Écriture scientifique et écriture « ingénieur »</h4>
<p><b>Scientifique (standard)</b> : un seul chiffre non nul avant la virgule, \(1\le|a|&lt;10\). <b>Ingénieur</b> : l'exposant est un multiple de 3 (\(10^3, 10^6, 10^{-3}\)…) et \(1\le|a|&lt;1000\). C'est l'écriture des préfixes kilo, méga, milli, micro !</p>
<div class="ex"><div class="lab">Exemple concret — des résistances et des courants</div>
Une résistance de 4 700 Ω : scientifique \(4{,}7\times10^3\) Ω, ingénieur \(4{,}7\times10^3\) Ω = 4,7 kΩ.<br>
Un courant de 0,00035 A : scientifique \(3{,}5\times10^{-4}\) A, ingénieur \(350\times10^{-6}\) A = 350 µA.<br>
Une distance de 384 400 km : scientifique \(3{,}844\times10^5\) km, ingénieur \(384{,}4\times10^3\) km.</div>
<p>Astuce : pour l'écriture ingénieur, déplace la virgule <b>par paquets de 3 chiffres</b>.</p>`,
    vocab: [
      ['inequality', 'inégalité / inéquation'],
      ['less than / greater than', 'inférieur à / supérieur à (strictement)'],
      ['less than or equal to', 'inférieur ou égal à'],
      ['greater than or equal to', 'supérieur ou égal à'],
      ['number line', 'droite des réels (droite graduée)'],
      ['set', 'ensemble', '{x : x > 2} = « l\'ensemble des x tels que x > 2 »'],
      ['range of values', 'intervalle (plage) de valeurs'],
      ['axiom', 'axiome (règle de base)'],
      ['to reverse the inequality', 'changer le sens de l\'inégalité'],
      ['critical value', 'valeur critique (frontière)'],
      ['sign table', 'tableau de signes'],
      ['index (pl. indices)', 'indice / exposant', 'en anglais, « indices » = les puissances'],
      ['subscript / superscript', 'indice (en bas) / exposant (en haut)'],
      ['exponent / power', 'exposant / puissance'],
      ['laws of exponents', 'règles de calcul sur les puissances'],
      ['positive / negative index', 'exposant positif / négatif'],
      ['n-th root', 'racine n-ième'],
      ['standard (normalised) form', 'écriture scientifique'],
      ['engineering notation', 'notation ingénieur', 'exposant multiple de 3'],
      ['mantissa', 'mantisse'],
      ['decimal expansion', 'écriture décimale']
    ],
    formules: [
      { nom: 'Multiplier par un négatif', tex: 'a<b \\text{ et } c<0 \\;\\Rightarrow\\; ac>bc', why: 'Le sens de l\'inégalité s\'inverse.' },
      { nom: 'Exposant nul et négatif', tex: 'x^0 = 1 \\qquad x^{-n} = \\dfrac{1}{x^n}', why: '' },
      { nom: 'Exposant fractionnaire', tex: 'x^{m/n} = \\sqrt[n]{x^m} \\qquad x^{-m/n} = \\dfrac{1}{\\sqrt[n]{x^m}}', why: 'Pour x ≥ 0.' },
      { nom: 'Produit et quotient', tex: 'a^r a^s = a^{r+s} \\qquad \\dfrac{a^r}{a^s} = a^{r-s}', why: 'Même base : on additionne / soustrait les exposants.' },
      { nom: 'Puissance de puissance et de produit', tex: '(a^r)^s = a^{rs} \\qquad (ab)^r = a^r b^r', why: '' },
      { nom: 'Racine et puissance', tex: '\\left(\\sqrt[n]{a}\\right)^m = a^{m/n}', why: '' },
      { nom: 'Écriture scientifique', tex: 'a \\cdot 10^n,\\; 1 \\le |a| < 10', why: 'n entier.' },
      { nom: 'Écriture ingénieur', tex: 'a \\cdot 10^n,\\; 1 \\le |a| < 1000', why: 'n multiple de 3 (k, M, m, µ…).' }
    ],
    exos: [
      { src: 'Blackboard', niveau: 1, en: String.raw`Slides: solve \(-3x+2>11\).`, fr: 'Diapos : résous l\'inéquation.',
        sol: String.raw`<p>\(-3x>9\) → on divise par −3 et on retourne le signe : \(x&lt;-3\).</p>` },
      { src: 'Blackboard', niveau: 2, en: String.raw`Slides: determine the set \(\{x : 2x+x^2&lt;5x+10\}\).`, fr: 'Diapos : détermine l\'ensemble des solutions.',
        sol: String.raw`<p>\(x^2-3x-10&lt;0\) → \((x-5)(x+2)&lt;0\) → \(\{x : -2&lt;x&lt;5\}\).</p>` },
      { src: 'Blackboard', niveau: 2, en: String.raw`Slides: solve \(\dfrac{2x-5}{x-7}&lt;0\).`, fr: 'Diapos : résous l\'inéquation rationnelle.',
        sol: String.raw`<p>Frontières 2,5 et 7. Tableau de signes : la fraction est négative entre les deux → \(\tfrac52&lt;x&lt;7\).</p>` },
      { src: 'Blackboard', niveau: 3, en: String.raw`Slides: solve \(\dfrac{3x+8}{x-1}\ge-2\).`, fr: 'Diapos : résous l\'inéquation.',
        sol: String.raw`<p>\(\dfrac{3x+8}{x-1}+2\ge0\) → \(\dfrac{5x+6}{x-1}\ge0\). Frontières \(-\tfrac65\) (incluse) et 1 (exclue). Réponse : \(x\le-\tfrac65\) ou \(x>1\).<br>Vérif : \(x=0\) → \(-8\ge-2\) ✗ (0 est bien exclu) ; \(x=2\) → \(14\ge-2\) ✓.</p>` },
      { src: 'Blackboard', niveau: 2, en: String.raw`Slides: solve \(\dfrac{x-1}{x-2}&lt;0\).`, fr: 'Diapos : résous l\'inéquation.',
        sol: String.raw`<p>Frontières 1 et 2 ; la fraction est négative entre les deux : \(1&lt;x&lt;2\).</p>` },
      { src: 'Blackboard', niveau: 3, en: String.raw`Slides: solve \(\dfrac{3x-2}{1+x}\le1\).`, fr: 'Diapos : résous l\'inéquation.',
        sol: String.raw`<p>\(\dfrac{3x-2}{1+x}-1\le0\) → \(\dfrac{2x-3}{x+1}\le0\). Frontières −1 (exclue) et \(\tfrac32\) (incluse). Réponse : \(-1&lt;x\le\tfrac32\).<br>Vérif : \(x=0\) → \(-2\le1\) ✓ ; \(x=-2\) → \(8\le1\) ✗.</p>` },
      { src: 'Blackboard', niveau: 1, en: String.raw`Slides: depict on a number line \(\{x : x\le-2\}\), \(\{x : -3\le x&lt;4\}\) and \(\{x : x&lt;1 \text{ or } x\ge3\}\).`, fr: 'Diapos : représente ces ensembles sur la droite des réels.',
        sol: String.raw`<p>● en −2, trait vers la gauche · ● en −3 et ○ en 4, trait entre les deux · ○ en 1 trait vers la gauche, et ● en 3 trait vers la droite.</p>` },
      { src: 'Blackboard', niveau: 1, en: String.raw`Slides: write using only positive indices: \(x^{-4}\), \(2x^{-5}\), \((2x)^{-5}\), \(\dfrac{3}{y^{-5}}\).`, fr: 'Diapos : écris avec uniquement des exposants positifs.',
        sol: String.raw`<p>\(\dfrac1{x^4}\) · \(\dfrac2{x^5}\) · \(\dfrac1{32x^5}\) · \(3y^5\)</p>` },
      { src: 'Blackboard', niveau: 1, en: String.raw`Slides: write using only a single index: \((x^3)^{-2}\), \(((-x)^4)^{-5}\), \(\left(\dfrac{t}{t^{-3}}\right)^2\).`, fr: 'Diapos : écris avec une seule puissance.',
        sol: String.raw`<p>\(x^{-6}\) · \((-x)^4=x^4\) donc \(x^{-20}\) · \(\dfrac{t}{t^{-3}}=t^4\) donc \(t^8\)</p>` },
      { src: 'Blackboard', niveau: 3, en: String.raw`Slides: simplify so that it uses only positive indices: \(\dfrac{3\left(xy^{1/3}\right)^3}{2x^{-2}y^2}\div\dfrac{\sqrt[3]{27x^2y^6}}{\sqrt{4y^4}}\).`, fr: 'Diapos : simplifie avec uniquement des exposants positifs.',
        sol: String.raw`<p>1re fraction : \(\dfrac{3x^3y}{2x^{-2}y^2}=\tfrac32x^5y^{-1}\).<br>2e fraction : \(\sqrt[3]{27x^2y^6}=3x^{2/3}y^2\) et \(\sqrt{4y^4}=2y^2\), donc \(\tfrac32x^{2/3}\).<br>Division : \(\tfrac32x^5y^{-1}\div\tfrac32x^{2/3}=x^{5-\frac23}y^{-1}=\dfrac{x^{13/3}}{y}\).</p>` },
      { src: 'Blackboard', niveau: 1, en: 'Slides: write in standard and engineering notation: 150, −242, 713 527, 0.0002, −0.00007.', fr: 'Diapos : écris en notation scientifique et ingénieur.',
        sol: String.raw`<p>150 = \(1.5\cdot10^2\) = 150 · −242 = \(-2.42\cdot10^2\) = −242 · 713 527 = \(7.13527\cdot10^5\) = \(713.527\cdot10^3\) · 0.0002 = \(2\cdot10^{-4}\) = \(200\cdot10^{-6}\) · −0.00007 = \(-7\cdot10^{-5}\) = \(-70\cdot10^{-6}\)</p>` },
      { src: 'Claude', niveau: 1, en: String.raw`Solve \(5-2x\ge11\) and show the answer on a number line.`, fr: 'Résous et représente sur la droite des réels.',
        sol: String.raw`<p>\(-2x\ge6\) → \(x\le-3\) (signe retourné). ● en −3, trait vers la gauche.</p>` },
      { src: 'Claude', niveau: 2, en: String.raw`Solve \(x^2\ge4x\).`, fr: 'Résous l\'inéquation du second degré.',
        sol: String.raw`<p>\(x^2-4x\ge0\) → \(x(x-4)\ge0\) → \(x\le0\) ou \(x\ge4\). (Ne divise pas par \(x\) : tu perdrais des solutions !)</p>` },
      { src: 'Claude', niveau: 1, en: String.raw`Evaluate without a calculator: \(16^{3/4}\), \(27^{-2/3}\), \(5^0\).`, fr: 'Calcule sans calculatrice.',
        sol: String.raw`<p>\(16^{3/4}=(\sqrt[4]{16})^3=2^3=8\) · \(27^{-2/3}=\dfrac1{(\sqrt[3]{27})^2}=\dfrac19\) · \(5^0=1\)</p>` },
      { src: 'Claude', niveau: 2, en: 'A capacitor has C = 0.000047 F and a resistor has R = 2 200 000 Ω. Write both in engineering notation and compute RC (in seconds).', fr: 'Écris C et R en notation ingénieur, puis calcule RC (en secondes).',
        sol: String.raw`<p>\(C=47\cdot10^{-6}\) F (47 µF), \(R=2.2\cdot10^{6}\) Ω (2,2 MΩ). \(RC=47\times2{,}2\times10^{-6+6}=103{,}4\) s.</p>` }
    ]
  };
  // =========================== SEMAINE 4 ===========================
  S[4] = {
    titre: 'Logarithms & Exponentials',
    titreFr: 'Logarithmes et fonctions exponentielles',
    resume: '2 chapitres : le logarithme (définition, ln et log, les 4 lois, changement de base) pour résoudre des équations où l\'inconnue est en exposant ; la fonction exponentielle e^x et son usage en ingénierie (charge d\'un condensateur).',
    sources: 'GENG0001 07 Logarithms et GENG0001 08 Exponential Functions (diapos « blank » et « filled » annotées en cours, publiées le 19 oct., Blackboard)',
    en: String.raw`
<h4>Chapter 07 — Logarithms</h4>
<p><b>Learning outcomes:</b> (1) write different expressions of logarithm using the laws of logarithms; (2) apply the laws of logarithms to solve equations involving logarithms and indices.</p>
<p>Written on the slide in class: \(a=b^x\) (exponential form) \(\Longleftrightarrow\) \(\log_b a=x\) (logarithmic form).</p>
<h5>7.1 Logarithms</h5>
<p>If \(a=b^x\), then \(x\) is called the <b>logarithm of \(a\) to the base \(b\)</b>. Symbolically \(x=\log_b(a)\). We <i>require</i> that the base \(b\) is a positive number, not equal to 1.</p>
<p><b>Examples:</b> \(\log_3 9=2\) (because \(3^2=9\)), \(\log_2(32)=5\) (because \(2^5=32\)), \(\log_{10}(1000)=3\) (because \(10^3=1000\)).</p>
<p><b>Notation:</b></p>
<ul><li>\(\log(a):=\log_{10}(a)\) (used in engineering);</li>
<li>\(\ln(a):=\log_e(a)\), where \(e=2.7183\) (to 4 d.p.). "ln" is called the <b>natural logarithm</b>, and \(e\) is <b>Euler's constant</b>.</li></ul>
<p><b>Note:</b> \(\log_{10}(a)=0\) for \(a=1\); \(>0\) for \(a>1\); \(&lt;0\) for \(0&lt;a&lt;1\); does not exist for \(a\le0\). (In class: "\(\log_{10}(-1)=\,?\)" — it does not exist.)</p>
<p>The graph of \(y=\ln(x)\) passes through \((1,0)\), increases slowly, and goes to \(-\infty\) as \(x\) gets close to 0.</p>
<h5>7.2 Laws of logarithms</h5>
<p><b>Rule 1:</b> \(\log_b(M\cdot N)=\log_b M+\log_b N\). <i>The log of a product equals the sum of the logs.</i></p>
<p>Proof: if \(M=b^x\) then \(x=\log_b M\); if \(N=b^y\) then \(y=\log_b N\). \(M\cdot N=b^xb^y=b^{x+y}\), so \(\log_b(MN)=x+y=\log_b M+\log_b N\).</p>
<p><b>Rule 2:</b> \(\log_b(N^a)=a\cdot\log_b N\).</p>
<p>Proof: if \(N=b^y\), then \(N^a=(b^y)^a=b^{ya}\), so \(\log_b(N^a)=ya=a\log_b N\).</p>
<p><b>Rule 3:</b> \(\log_b\left(\dfrac{M}{N}\right)=\log_b M-\log_b N\). <i>The log of a quotient equals the difference of the logs.</i></p>
<p>Proof: \(M\div N=b^x\div b^y=b^{x-y}\), so \(\log_b\frac MN=x-y\).</p>
<p><b>Rule 4 (change of base):</b> \(\log_b(N)=\dfrac{\log_c(N)}{\log_c(b)}\). In class, \(c=10\) was used: \(\log_b N=\dfrac{\log_{10}N}{\log_{10}b}\).</p>
<p>Proof: \(b^{\log_b N}=N\), so \(\log_c\left(b^{\log_b N}\right)=\log_c N\), i.e. \(\log_b(N)\times\log_c(b)=\log_c(N)\).</p>
<p><b>Example (worked in class):</b> \(\log_7(3.857)=\dfrac{\log_{10}3.857}{\log_{10}7}=\dfrac{0.5862}{0.8451}=0.6936\). Check: \(7^{0.6936}=3.856\approx3.857\).</p>
<h5>7.3 Indicial equations</h5>
<p>An indicial equation has the unknown in the exponent. Take logs of both sides.</p>
<p><b>Problem:</b> solve \(3^x=7\). Method 1: \(x=\log_3 7=1.771\). Method 2: \(\log_{10}3^x=\log_{10}7\Rightarrow x\log_{10}3=\log_{10}7\Rightarrow x=\dfrac{\log_{10}7}{\log_{10}3}=1.771\).</p>
<p><b>Problem:</b> solve \(2^{x-1}=3^{2x+3}\). Taking \(\log_{10}\): \((x-1)\log_{10}2=(2x+3)\log_{10}3\Rightarrow0.301x-0.301=0.954x+1.431\Rightarrow-0.653x=1.732\Rightarrow x=-2.652\).</p>
<p><b>Problem:</b> solve \(4^x+2^x-20=0\) (left for you — see exercises).</p>

<h4>Chapter 08 — Exponential Functions</h4>
<p><b>Learning outcomes:</b> (1) define the exponential function; (2) solve real world engineering problems involving exponential functions.</p>
<p>If \(f(x)=b^x\) for some number \(b\), then \(f(x)\) is called an <b>exponential function</b>. There is a particular one: \(\exp(x):=e^x\), where \(e=2.71828\ldots\) is Euler's constant. The graph of \(e^x\) passes through \((0,1)\) and grows very fast; the graph of \(\left(\tfrac12\right)^x\) also passes through \((0,1)\) but decreases.</p>
<p>Some <i>non-examinable</i> motivation for using base \(e\) (more in Mathematics B):</p>
<ul><li>If \(f(x)=e^x\), then \(f'(x)=f(x)\) (the derivative of exp is the same function again).</li>
<li>\(\int\frac1x\,dx=\ln(x)+C\).</li>
<li>\(e=1+\frac11+\frac1{1\cdot2}+\frac1{1\cdot2\cdot3}+\ldots=\sum\frac1{n!}\).</li>
<li>\(e=\lim_{n\to\infty}\left(1+\frac1n\right)^n\) (used for compound interest).</li>
<li>\(e^{i\phi}=\cos\phi+i\sin\phi\) (Euler's formula), which gives \(e^{i\pi}+1=0\).</li></ul>
<p><b>Problem (worked in class):</b> in a circuit containing a capacitor, the instantaneous voltage across the capacitor is \(v=V\left(1-e^{-t/RC}\right)\), where \(V\) is the supply voltage, \(R\) the resistance, \(C\) the capacitance and \(t\) the time since connection. If \(V=200\) V, \(R=10\) kΩ and \(C=20\) µF, calculate the time when \(v=100\) V.</p>
<p>Solution: \(RC=10\times10^3\times20\times10^{-6}=0.2\) s. \(100=200\left(1-e^{-t/0.2}\right)\Rightarrow e^{-t/0.2}=0.5\Rightarrow-\frac t{0.2}=\ln(0.5)\Rightarrow t=0.1386\) s.</p>`,
    fr: String.raw`
<h4>Partie 1 — C'est quoi un logarithme ?</h4>
<p>Le logarithme répond à la question : <b>« à quelle puissance je dois mettre la base pour obtenir ce nombre ? »</b></p>
<p>\(\log_2 32=5\) parce que \(2^5=32\). C'est la même information écrite dans l'autre sens :</p>
<p style="text-align:center">\(a=b^x \;\Longleftrightarrow\; \log_b a=x\)</p>
<div class="ex"><div class="lab">Exemple concret — compter les zéros</div>
\(\log_{10}1000=3\) : 1000 a 3 zéros, c'est \(10^3\). \(\log_{10}1\,000\,000=6\). Le log en base 10, c'est (en gros) « combien de chiffres a le nombre ». C'est pour ça que les décibels (son) et l'échelle de Richter (séismes) utilisent des logs : un son de 60 dB est 10 fois plus intense qu'un son de 50 dB.</div>
<p>Les deux logs de ta calculatrice :</p>
<ul><li><b>log</b> = base 10 (très utilisé en ingénierie) ;</li>
<li><b>ln</b> = base \(e\approx2{,}718\), le <b>logarithme naturel</b> (\(e\) = constante d'Euler).</li></ul>
<div class="warnbox"><div class="lab">Où le log n'existe pas</div>On ne peut prendre le log que d'un nombre <b>strictement positif</b>. \(\log(0)\) et \(\log(-1)\) n'existent pas (le prof l'a demandé en cours : aucune puissance de 10 ne donne −1). Et \(\log 1=0\) dans toutes les bases, car \(b^0=1\).</div>
<p>Signe du log (base 10) : positif si le nombre est plus grand que 1, négatif s'il est entre 0 et 1 (\(\log 0{,}01=-2\)).</p>

<h4>Les 4 lois des logarithmes</h4>
<ol><li><b>Produit → somme</b> : \(\log_b(MN)=\log_b M+\log_b N\).</li>
<li><b>Puissance → multiplication</b> : \(\log_b(N^a)=a\log_b N\). L'exposant « descend » devant.</li>
<li><b>Quotient → différence</b> : \(\log_b\frac MN=\log_b M-\log_b N\).</li>
<li><b>Changement de base</b> : \(\log_b N=\dfrac{\log N}{\log b}\) (avec le log de la calculatrice).</li></ol>
<p>Pourquoi ça marche : un log, c'est un exposant. Et quand on multiplie des puissances de même base, on <b>additionne</b> les exposants (\(10^2\times10^3=10^5\)). Les lois des logs sont juste les lois des puissances de la semaine 3, vues à l'envers.</p>
<div class="ex"><div class="lab">Exemple du cours — \(\log_7(3{,}857)\)</div>
Ta calculatrice n'a pas de touche « log base 7 ». Changement de base :<br>
\(\log_7 3{,}857=\dfrac{\log 3{,}857}{\log 7}=\dfrac{0{,}5862}{0{,}8451}=0{,}6936\).<br>
Vérification faite par le prof : \(7^{0{,}6936}\approx3{,}856\). ✓</div>
<div class="warnbox"><div class="lab">Pièges classiques</div>
\(\log(M+N)\neq\log M+\log N\) : la loi 1 marche pour un <b>produit</b>, pas pour une somme.<br>
\(\dfrac{\log M}{\log N}\neq\log\dfrac MN\) : le quotient de deux logs, c'est un changement de base, pas la loi 3.</div>

<h4>Résoudre une équation avec l'inconnue en exposant</h4>
<p>Méthode : <b>prendre le log des deux côtés</b>, puis utiliser la loi 2 pour faire « descendre » l'exposant.</p>
<div class="ex"><div class="lab">Exemple du cours — \(3^x=7\)</div>
Façon 1 : \(x=\log_3 7\), puis changement de base = 1,771.<br>
Façon 2 : \(\log 3^x=\log 7\) → \(x\log 3=\log 7\) → \(x=\dfrac{\log 7}{\log 3}=\dfrac{0{,}8451}{0{,}4771}=1{,}771\).<br>
Vérif : \(3^{1{,}771}\approx7{,}0\). ✓</div>
<div class="ex"><div class="lab">Exemple du cours — \(2^{x-1}=3^{2x+3}\)</div>
On prend le log : \((x-1)\log2=(2x+3)\log3\).<br>
On remplace : \(0{,}301x-0{,}301=0{,}954x+1{,}431\).<br>
On regroupe les \(x\) : \(0{,}301x-0{,}954x=1{,}431+0{,}301\) → \(-0{,}653x=1{,}732\) → \(x=-2{,}652\).</div>
<div class="ex"><div class="lab">Exemple concret — l'argent qui double</div>
Tu places 1 000 RM à 5 % par an. Au bout de \(n\) ans tu as \(1000\times1{,}05^n\). Quand as-tu 2 000 RM ?<br>
\(1{,}05^n=2\) → \(n\log1{,}05=\log2\) → \(n=\dfrac{0{,}3010}{0{,}0212}\approx14{,}2\). Il faut environ 14 ans et 3 mois.</div>

<h4>Partie 2 — La fonction exponentielle</h4>
<p>Une fonction exponentielle, c'est \(f(x)=b^x\) : l'inconnue est en exposant. La plus importante est \(e^x\) (touche <b>e^x</b> de la calculatrice), avec \(e=2{,}71828\ldots\)</p>
<ul><li>\(e^x\) passe par \((0;1)\) et grimpe de plus en plus vite : c'est la croissance « explosive ».</li>
<li>\(\left(\tfrac12\right)^x\) passe aussi par \((0;1)\) mais diminue : chaque pas divise par 2 (décroissance, comme la radioactivité).</li>
<li>\(\ln\) et \(e^x\) s'annulent l'une l'autre : \(\ln(e^x)=x\) et \(e^{\ln x}=x\). C'est ce qui permet de « sortir » \(x\) d'un exposant avec \(e\).</li></ul>
<p class="muted" style="font-size:13px">Les propriétés de \(e\) vues en cours (dérivée de \(e^x\) = elle-même, \(e^{i\pi}+1=0\)…) sont <b>hors programme</b> à l'examen ; tu les reverras en Mathematics B.</p>
<div class="ex"><div class="lab">Exemple du cours — charge d'un condensateur</div>
La tension d'un condensateur qui se charge : \(v=V\left(1-e^{-t/RC}\right)\). Avec \(V=200\) V, \(R=10\) kΩ, \(C=20\) µF, quand a-t-on \(v=100\) V ?<br>
1. \(RC=10\times10^3\times20\times10^{-6}=0{,}2\) s.<br>
2. \(100=200(1-e^{-t/0{,}2})\) → \(1-e^{-t/0{,}2}=0{,}5\) → \(e^{-t/0{,}2}=0{,}5\).<br>
3. On prend ln : \(-\dfrac t{0{,}2}=\ln 0{,}5=-0{,}693\) → \(t=0{,}1386\) s.<br>
Le condensateur est à moitié chargé en 0,139 s. Tu retrouveras cette formule en <b>Electricity</b> et en physique.</div>
<div class="tip"><div class="lab">Astuce</div>Pour isoler un \(e^{\ldots}\) : d'abord tout isoler (\(e^{\ldots}=\) un nombre), <b>ensuite</b> prendre ln. Ne prends pas ln d'une somme.</div>`,
    vocab: [
      ['logarithm', 'logarithme'],
      ['base', 'base', 'le b de log_b'],
      ['natural logarithm (ln)', 'logarithme naturel (népérien)', 'base e'],
      ['common logarithm (log)', 'logarithme décimal', 'base 10'],
      ['Euler\'s constant (e)', 'constante d\'Euler (e ≈ 2,718)'],
      ['laws of logarithms', 'règles de calcul des logarithmes'],
      ['product / quotient', 'produit / quotient'],
      ['change of base', 'changement de base'],
      ['indicial equation', 'équation exponentielle', 'inconnue dans l\'exposant'],
      ['exponential function', 'fonction exponentielle'],
      ['exponential growth / decay', 'croissance / décroissance exponentielle'],
      ['non-examinable', 'hors programme (pas à l\'examen)'],
      ['instantaneous voltage', 'tension instantanée'],
      ['supply voltage', 'tension d\'alimentation'],
      ['capacitor / capacitance', 'condensateur / capacité'],
      ['resistance', 'résistance'],
      ['compound interest', 'intérêts composés']
    ],
    formules: [
      { nom: 'Définition du logarithme', tex: 'a = b^x \\;\\Longleftrightarrow\\; \\log_b a = x', why: 'b > 0, b ≠ 1 et a > 0.' },
      { nom: 'Valeurs à connaître', tex: '\\log_b 1 = 0 \\qquad \\log_b b = 1 \\qquad \\ln(e^x) = x \\qquad e^{\\ln x} = x', why: '' },
      { nom: 'Loi 1 — produit', tex: '\\log_b(MN) = \\log_b M + \\log_b N', why: 'Le log d\'un produit est la somme des logs.' },
      { nom: 'Loi 2 — puissance', tex: '\\log_b(N^a) = a\\,\\log_b N', why: 'Sert à faire descendre une inconnue de l\'exposant.' },
      { nom: 'Loi 3 — quotient', tex: '\\log_b\\left(\\dfrac{M}{N}\\right) = \\log_b M - \\log_b N', why: '' },
      { nom: 'Loi 4 — changement de base', tex: '\\log_b N = \\dfrac{\\log_{10} N}{\\log_{10} b} = \\dfrac{\\ln N}{\\ln b}', why: 'Pour calculer n\'importe quel log avec la calculatrice.' },
      { nom: 'Charge d\'un condensateur', tex: 'v = V\\left(1 - e^{-t/RC}\\right)', why: 'RC = constante de temps (en secondes).' }
    ],
    exos: [
      { src: 'Blackboard', niveau: 1, en: String.raw`Slides: complete \(\log_3 9\), \(\log_2(32)\), \(\log_{10}(1000)\).`, fr: 'Diapos : calcule ces logarithmes.',
        sol: String.raw`<p>2 (\(3^2=9\)) · 5 (\(2^5=32\)) · 3 (\(10^3=1000\))</p>` },
      { src: 'Blackboard', niveau: 1, en: String.raw`Slides: evaluate \(\log_7(3.857)\).`, fr: 'Diapos : calcule avec le changement de base.',
        sol: String.raw`<p>\(\dfrac{\log 3.857}{\log 7}=\dfrac{0.5862}{0.8451}=0.6936\). Vérif : \(7^{0.6936}\approx3.857\).</p>` },
      { src: 'Blackboard', niveau: 1, en: String.raw`Slides: solve \(3^x=7\).`, fr: 'Diapos : résous l\'équation.',
        sol: String.raw`<p>\(x\log3=\log7\) → \(x=\dfrac{\log7}{\log3}=1.771\).</p>` },
      { src: 'Blackboard', niveau: 2, en: String.raw`Slides: solve \(2^{x-1}=3^{2x+3}\).`, fr: 'Diapos : résous l\'équation.',
        sol: String.raw`<p>\((x-1)\log2=(2x+3)\log3\) → \(0.301x-0.301=0.954x+1.431\) → \(-0.653x=1.732\) → \(x=-2.652\).<br>Avec ln : \((x-1)(0.6931)=(2x+3)(1.0986)\) → \(-1.5041x=3.9889\) → même résultat.</p>` },
      { src: 'Blackboard', niveau: 3, en: String.raw`Slides: solve \(4^x+2^x-20=0\).`, fr: 'Diapos : résous l\'équation (indice : 4^x = (2^x)²).',
        sol: String.raw`<p>On pose \(y=2^x\) : \(4^x=(2^2)^x=(2^x)^2=y^2\). L'équation devient \(y^2+y-20=0\) → \((y+5)(y-4)=0\).<br>\(y=-5\) est impossible (\(2^x>0\)). \(y=4\) → \(2^x=4\) → \(x=2\).<br>Vérif : \(16+4-20=0\) ✓.</p>` },
      { src: 'Blackboard', niveau: 2, en: String.raw`Slides: \(v=V(1-e^{-t/RC})\) with \(V=200\) V, \(R=10\) kΩ, \(C=20\) µF. Find \(t\) when \(v=100\) V.`, fr: 'Diapos : trouve le temps pour lequel la tension vaut 100 V.',
        sol: String.raw`<p>\(RC=0.2\) s. \(e^{-t/0.2}=0.5\) → \(t=-0.2\ln0.5=0.1386\) s.</p>` },
      { src: 'Claude', niveau: 1, en: String.raw`Write in logarithmic form: \(5^3=125\), \(10^{-2}=0.01\). Write in exponential form: \(\log_4 64=3\).`, fr: 'Passe d\'une forme à l\'autre.',
        sol: String.raw`<p>\(\log_5 125=3\) · \(\log_{10}0.01=-2\) · \(4^3=64\)</p>` },
      { src: 'Claude', niveau: 1, en: String.raw`Write as a single logarithm: \(\log 5+\log 4\), \(3\log2\), \(\log 50-\log 5\).`, fr: 'Écris avec un seul logarithme.',
        sol: String.raw`<p>\(\log 20\) (loi 1) · \(\log 8\) (loi 2) · \(\log 10=1\) (loi 3)</p>` },
      { src: 'Claude', niveau: 2, en: String.raw`Expand: \(\log_b\left(\dfrac{x^2y}{z^3}\right)\).`, fr: 'Développe avec les lois des logarithmes.',
        sol: String.raw`<p>\(2\log_b x+\log_b y-3\log_b z\)</p>` },
      { src: 'Claude', niveau: 2, en: String.raw`Solve \(5e^{2x}=40\).`, fr: 'Résous l\'équation.',
        sol: String.raw`<p>\(e^{2x}=8\) → \(2x=\ln8=2.079\) → \(x=1.040\). Vérif : \(5e^{2.079}=5\times8=40\) ✓.</p>` },
      { src: 'Claude', niveau: 2, en: String.raw`Solve \(\log_2(x+3)+\log_2(x-3)=4\).`, fr: 'Résous l\'équation (attention au domaine).',
        sol: String.raw`<p>Loi 1 : \(\log_2((x+3)(x-3))=4\) → \(x^2-9=16\) → \(x^2=25\) → \(x=\pm5\).<br>\(x=-5\) donne \(\log_2(-2)\) qui n'existe pas. Seule solution : \(x=5\).</p>` },
      { src: 'Claude', niveau: 3, en: String.raw`A capacitor discharges as \(v=V e^{-t/RC}\) with \(V=12\) V, \(R=4.7\) kΩ, \(C=100\) µF. How long until \(v=3\) V?`, fr: 'Décharge d\'un condensateur : combien de temps pour descendre à 3 V ?',
        sol: String.raw`<p>\(RC=4.7\times10^3\times100\times10^{-6}=0.47\) s. \(e^{-t/0.47}=\frac3{12}=0.25\) → \(t=-0.47\ln0.25=0.47\times1.386=0.652\) s.</p>` }
    ]
  };
})();
