// ============================================================
//  MES COURS — fichier de données
//  Chaque objet = une semaine de cours.
//  - matiere : nom de la matière (sert à regrouper / filtrer)
//  - semaine : numéro de la semaine
//  - titre   : titre du cours
//  - date    : (optionnel) ex. "2026-10-05"
//  - contenu : le cours en français (HTML simple : <h3>, <p>, <ul><li>, <b>…)
//  - lexique : mots scientifiques en anglais → traduction française
// ============================================================

const COURS = [
  {
    matiere: "Exemple",
    semaine: 0,
    titre: "Comment utiliser l'app",
    date: "2026-10-07",
    contenu: `
      <p>Ceci est un cours d'exemple. Il sera remplacé par tes vrais cours.</p>
      <h3>Comment ajouter un cours</h3>
      <ul>
        <li>Envoie ton cours à Claude (photo, PDF ou notes).</li>
        <li>Claude le met en forme ici, semaine par semaine.</li>
        <li>Les mots scientifiques en anglais sont listés en bas.</li>
      </ul>
      <h3>Sur ton téléphone</h3>
      <p>Ouvre le lien, puis <b>Partager → Sur l'écran d'accueil</b> (iPhone) ou <b>⋮ → Ajouter à l'écran d'accueil</b> (Android).</p>
    `,
    lexique: [
      { en: "cell", fr: "cellule" },
      { en: "enzyme", fr: "enzyme" },
      { en: "hypothesis", fr: "hypothèse" }
    ]
  }
];
