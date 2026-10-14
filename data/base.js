// ============================================================
//  Données générales : matières, devoirs, emploi du temps
//  (Source : Blackboard Southampton — lecture seule)
// ============================================================
window.DATA = {
  matieres: {
    ma: { code: 'GENG0001', nom: 'Mathematics A', icone: '📐', couleur: '#f0a04b', bb: '_237607_1', prof: 'Dr Lee', semaines: {} },
    ms: { code: 'GENG0003', nom: 'Mechanical Science', icone: '⚙️', couleur: '#e5736b', bb: '_237611_1', prof: 'Dr Beh Shiao Lin', semaines: {} },
    ep: { code: 'GENG0005', nom: 'Engineering Principles', icone: '🔥', couleur: '#b47ccf', bb: '_237615_1', prof: 'Dr Kok-Geng Lim', semaines: {} },
    rs: { code: 'GENG0014', nom: 'Routes to Success', icone: '🧭', couleur: '#5aae8f', bb: '_237619_1', prof: 'Dr Beh · Mr Ivan Lai · Mr Lee Shing Chuan', semaines: {} },
    cw: { code: 'GENG0015', nom: 'Coursework', icone: '💻', couleur: '#5a9fd6', bb: '_237621_1', prof: 'Dr Kok-Geng Lim', semaines: {} }
  },

  // ---------- Devoirs / échéances ----------
  // date en ISO (heure de Malaisie = UTC+8)
  devoirs: [
    { matiere: 'cw', titre: 'Digital Capabilities Worksheet', type: 'Questionnaire Blackboard', rendu: true, url: 'https://blackboard.soton.ac.uk/ultra/courses/_237621_1/assessment/_8267422_1/overview?courseId=_237621_1', date: '2026-10-05T17:00:00+08:00',
      details: 'Fiche « Digital Capabilities » (CA Semaine 1) à remplir sur Blackboard.' },
    { matiere: 'cw', titre: 'ESSENTIAL READING — Information Literacy', type: 'Parcours LinkedIn Learning (formatif)', url: 'https://blackboard.soton.ac.uk/ultra/courses/_237621_1/assessment/_8271320_1/overview?courseId=_237621_1', date: '2026-10-30T18:00:00+00:00',
      details: 'Parcours de vidéos LinkedIn Learning « University of Southampton – Information Literacy » (trouver et évaluer des sources, citer, éviter le plagiat), lancé depuis Blackboard. Évaluation formative : ne compte pas dans la note finale. Tentative commencée, à terminer. Si le lien affiche « Contenu non disponible », désactiver les protections Brave pour Blackboard ou utiliser Chrome/Edge.' },
    { matiere: 'rs', titre: 'Part A — Devoir d\'analyse de données', type: 'Devoir (20 %)', date: '2026-11-30T17:00:00+08:00',
      url: 'https://blackboard.soton.ac.uk/ultra/courses/_237619_1/outline',
      details: 'Devoir individuel d\'analyse de données (Excel ou logiciel équivalent). Sujet publié le lundi 19 oct. à 17 h, à rendre le lundi 30 nov. avant 17 h (heure de Malaisie). Remplir aussi l\'Academic Responsibility Agreement (sur Blackboard) avant la même date. À noter : le quiz Part A (10 %, sur R5 Errors and Uncertainty, 45 min, documents autorisés) aura lieu en semaine 8 (16–20 nov.) en TD. Source : Part A assessment info.pdf (10 oct.).' }
  ],

  // ---------- Emploi du temps (semaine type, d'après « EFY – W1 ») ----------
  // jour : 0 = lundi … 4 = vendredi · groupes : null = tout le monde
  edtInfo: 'Semaine type · Campus de Malaisie',
  edtNote: '<b>Cours en présentiel sur le campus</b> depuis le mardi 13 oct. (seul le lundi 12 oct. était en ligne à cause de la brume). <b>Mathematics A</b> : heures de consultation de Lee SC lundi 11h–17h, mardi 9h–17h (sauf 14h–16h), vendredi 9h–17h (sauf 11h–12h), foyer du 2e étage. <b>GENG0016 English</b> (Ms Effa) : enregistrement du cours du 12 oct. demandé par mail. Source : emploi du temps EFY Semaine 1 et annonces Blackboard. Les cours d\'Electricity & Electronics ne sont pas affichés.',
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
