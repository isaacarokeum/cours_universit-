// ============================================================
//  Données générales : matières, devoirs, emploi du temps
//  (Source : Blackboard Southampton — lecture seule)
// ============================================================
window.DATA = {
  matieres: {
    ma: { code: 'GENG0001', nom: 'Mathematics A', icone: '📐', couleur: '#2563eb', prof: 'Dr Lee', semaines: {} },
    ms: { code: 'GENG0003', nom: 'Mechanical Science', icone: '⚙️', couleur: '#c2410c', prof: 'Dr Beh Shiao Lin', semaines: {} },
    ep: { code: 'GENG0005', nom: 'Engineering Principles', icone: '🔥', couleur: '#7c3aed', prof: 'Dr Kok-Geng Lim', semaines: {} },
    rs: { code: 'GENG0014', nom: 'Routes to Success', icone: '🧭', couleur: '#0f766e', prof: 'Dr Beh · Mr Ivan Lai · Mr Lee Shing Chuan', semaines: {} },
    cw: { code: 'GENG0015', nom: 'Coursework', icone: '💻', couleur: '#b45309', prof: 'Dr Kok-Geng Lim', semaines: {} }
  },

  // ---------- Devoirs / échéances ----------
  // date en ISO (heure de Malaisie = UTC+8)
  devoirs: [
    { matiere: 'cw', titre: 'Digital Capabilities Worksheet', type: 'Questionnaire Blackboard', date: '2026-10-05T17:00:00+08:00',
      details: 'Fiche « Digital Capabilities » (CA Semaine 1) à remplir sur Blackboard.' },
    { matiere: 'ms', titre: 'Préparer la Worksheet 2 (Elasticity)', type: 'TD à préparer', date: '2026-10-07T10:00:00+08:00',
      details: 'Essaie les 9 questions avant ton TD du mercredi. Elles sont aussi dans l\'app (S2 › Exercices).' },
    { matiere: 'ep', titre: 'Préparer l\'Example Sheet 1 (Temperature & Heat)', type: 'TD à préparer', date: '2026-10-07T11:00:00+08:00',
      details: 'Premier TD d\'Engineering Principles cette semaine. Questions dans l\'app (S2 › Exercices).' },
    { matiere: 'ma', titre: 'Exercices Topic 4 — Quadratic Equations', type: 'TD à préparer', date: '2026-10-08T14:00:00+08:00',
      details: 'Tutorial de Jan Spakula (Topic 4) — à faire avant ton TD de maths.' },
    { matiere: 'rs', titre: 'Part A — sortie du devoir d\'analyse de données', type: 'Info', date: '2026-10-19T17:00:00+08:00',
      details: 'Le sujet du devoir (20 %) est publié ce jour-là sur Blackboard. Il faudra Excel.' },
    { matiere: 'cw', titre: 'ESSENTIAL READING — Information Literacy', type: 'Lecture obligatoire', date: '2026-10-30T18:00:00+00:00',
      details: 'Lecture « Information Literacy » à faire sur Blackboard (CA Semaine 2).' },
    { matiere: 'rs', titre: 'Part A — Quiz en classe (Errors & Uncertainty)', type: 'Quiz (10 %)', date: '2026-11-16T09:00:00+08:00',
      details: 'Semaine 8 (16–20 nov), dans ton créneau de groupe. 45 min, documents autorisés.' },
    { matiere: 'rs', titre: 'Part A — Devoir d\'analyse de données', type: 'Devoir (20 %)', date: '2026-11-30T17:00:00+08:00',
      details: 'À rendre avant 17 h (heure de Malaisie). Remplir aussi l\'Academic Responsibility Agreement.' }
  ],

  // ---------- Emploi du temps (semaine type, d'après « EFY – W1 ») ----------
  // jour : 0 = lundi … 4 = vendredi · groupes : null = tout le monde
  edtInfo: 'Semaine type · Campus de Malaisie',
  edtNote: '📄 Source : emploi du temps EFY Semaine 1 et annonces Blackboard. ⚠️ Semaine 3 : le cours de Routes to Success passe au lundi 12 oct, 14h–15h (2R014). Pas de labo CA en semaine 2. Les cours d\'Electricity & Electronics ne sont pas affichés.',
  edt: [
    { jour: 0, debut: '10:00', fin: '11:00', matiere: 'ms', titre: 'Mechanical Science', type: 'Cours magistral', salle: '2R014', prof: 'Beh', groupes: null },
    { jour: 0, debut: '11:00', fin: '13:00', matiere: 'ma', titre: 'Mathematics A', type: 'Cours magistral', salle: '2R014', prof: 'Lee', groupes: null },
    { jour: 0, debut: '14:00', fin: '15:00', matiere: 'cw', titre: 'Coursework', type: 'Cours magistral', salle: '2R014', prof: 'KG Lim', groupes: null },
    { jour: 0, debut: '15:00', fin: '17:00', matiere: null, titre: 'GENG0016', type: 'Cours magistral', salle: '2R013', prof: 'Effa', groupes: null },

    { jour: 1, debut: '11:00', fin: '12:00', matiere: 'rs', titre: 'Routes to Success', type: 'Cours magistral', salle: '2R014', prof: 'Beh', groupes: null },
    { jour: 1, debut: '12:00', fin: '13:00', matiere: 'cw', titre: 'Coursework — labo CA', type: 'Labo', salle: '2R004', prof: 'KG Lim', groupes: [1] },
    { jour: 1, debut: '12:00', fin: '13:00', matiere: 'ma', titre: 'Mathematics A — TD', type: 'TD', salle: '3R023', prof: 'Lee', groupes: [2] },
    { jour: 1, debut: '12:00', fin: '13:00', matiere: 'ma', titre: 'Mathematics A — TD (G4/G2)', type: 'TD', salle: '3R022', prof: 'Beh', groupes: [4] },
    { jour: 1, debut: '14:00', fin: '16:00', matiere: 'ep', titre: 'Engineering Principles', type: 'Cours magistral', salle: '2R014', prof: 'KG Lim', groupes: null },
    { jour: 1, debut: '16:00', fin: '17:00', matiere: 'ma', titre: 'Mathematics A — TD', type: 'TD', salle: '3R024', prof: 'Lee', groupes: [1] },

    { jour: 2, debut: '10:00', fin: '11:00', matiere: 'ms', titre: 'Mechanical Science — TD', type: 'TD', salle: '2R012', prof: 'Beh', groupes: [1] },
    { jour: 2, debut: '10:00', fin: '11:00', matiere: 'cw', titre: 'Coursework — labo CA', type: 'Labo', salle: '2R004', prof: 'KG Lim', groupes: [2] },
    { jour: 2, debut: '11:00', fin: '12:00', matiere: 'ep', titre: 'Engineering Principles — TD', type: 'TD', salle: '3R024', prof: 'KG Lim', groupes: [1] },
    { jour: 2, debut: '12:00', fin: '13:00', matiere: 'ms', titre: 'Mechanical Science — TD', type: 'TD', salle: '3R025', prof: 'Beh', groupes: [2] },
    { jour: 2, debut: '14:00', fin: '15:00', matiere: 'ms', titre: 'Mechanical Science — TD', type: 'TD', salle: '3R025', prof: 'Beh', groupes: [4] },
    { jour: 2, debut: '14:00', fin: '15:00', matiere: 'ep', titre: 'Engineering Principles — TD', type: 'TD', salle: '3R030', prof: 'KG Lim', groupes: [3] },
    { jour: 2, debut: '14:00', fin: '16:00', matiere: 'ma', titre: 'Mathematics A — TD', type: 'TD', salle: '3R022', prof: 'Lee', groupes: [2] },
    { jour: 2, debut: '15:00', fin: '16:00', matiere: 'ms', titre: 'Mechanical Science — TD', type: 'TD', salle: '3R025', prof: 'Beh', groupes: [3] },
    { jour: 2, debut: '15:00', fin: '16:00', matiere: 'ep', titre: 'Engineering Principles — TD', type: 'TD', salle: '3R030', prof: 'KG Lim', groupes: [4] },

    { jour: 3, debut: '09:00', fin: '11:00', matiere: 'ma', titre: 'Mathematics A — TD', type: 'TD', salle: '3R022', prof: 'Lee', groupes: [3] },
    { jour: 3, debut: '10:00', fin: '11:00', matiere: 'cw', titre: 'Coursework — labo CA', type: 'Labo', salle: '2R004', prof: 'KG Lim', groupes: [4] },
    { jour: 3, debut: '11:00', fin: '12:00', matiere: 'cw', titre: 'Coursework — labo CA', type: 'Labo', salle: '2R004', prof: 'KG Lim', groupes: [3] },
    { jour: 3, debut: '14:00', fin: '15:00', matiere: 'ep', titre: 'Engineering Principles — TD', type: 'TD', salle: '3R025', prof: 'KG Lim', groupes: [2] },
    { jour: 3, debut: '14:00', fin: '16:00', matiere: 'ma', titre: 'Mathematics A — TD', type: 'TD', salle: '3R024', prof: 'Lee', groupes: [1] },
    { jour: 3, debut: '14:00', fin: '16:00', matiere: 'ma', titre: 'Mathematics A — TD (G4/G2)', type: 'TD', salle: '3R022', prof: 'Beh', groupes: [4] },

    { jour: 4, debut: '09:00', fin: '11:00', matiere: null, titre: 'GENG0016', type: 'TD', salle: '3R024', prof: 'Effa', groupes: null },
    { jour: 4, debut: '11:00', fin: '12:00', matiere: 'ma', titre: 'Mathematics A — TD', type: 'TD', salle: '3R022', prof: 'Lee', groupes: [3] }
  ]
};
