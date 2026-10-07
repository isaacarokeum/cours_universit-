# Mes Cours — consignes pour Claude

- Ajouter un cours = ajouter un objet dans le tableau `COURS` de `cours.js` (ne pas toucher à index.html sauf demande).
- Champs : matiere, semaine, titre, date (AAAA-MM-JJ), contenu (HTML simple en français : h3, p, ul/li, b, table, <span class="en">, <div class="box">), lexique [{en, fr}].
- Cours rédigé en français, clair et structuré ; termes scientifiques anglais listés dans `lexique`.
- Supprimer l'exemple (matiere "Exemple") dès le premier vrai cours.
- Vérifier la syntaxe (`node -e "require('./cours.js')"` ne marche pas car const global : utiliser `node --check cours.js`), puis commit + push sur main.
