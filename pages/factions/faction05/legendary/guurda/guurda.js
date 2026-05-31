const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Maman infusion",
          description: `Attaque un ennemi. Possède 60 % de chances d'appliquer un effet de [Propagation de Débuff] qui prend 1 débuff aléatoire de la cible pour le placer sur tous les ennemis sous débuff ${DEBUFFS.WEAKEN}. Réduit le Compteur de Tour de la cible de 10 % si elle n'est affligée d'aucun débuff.`,
          damage: "3.5*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Décoction branchmoisie",
          description: `Attaque tous les ennemis. Possède 80 % de chances de placer un débuff ${DEBUFFS.WEAKEN} de 25 % pendant 2 tours. Après l'attaque, possède 80 % de chances de placer deux débuffs ${DEBUFFS.POISON} de 5 % pendant 2 tours sur tous les ennemis sans débuff ${DEBUFFS.WEAKEN}. Il est impossible de bloquer ces débuffs ${DEBUFFS.POISON} ou d'y résister.`,
          damage: "4*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Ciguë surprise",
          description: `Possède 80 % de chances de retirer 1 buff aléatoire sur tous les ennemis, puis 80 % de chances de placer deux débuffs ${DEBUFFS.POISON} de 5 % sur tous les ennemis pendant 2 tours. Retire également 2 débuffs aléatoires sur tous les alliés.`,
          cooldown: 4,
          levelInfo: ["Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Ceps néfastes [P]",
          description: `Dès qu'un ennemi reçoit un débuff, son Compteur de Tour est réduit de 3 %.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "20 640",
        "ATQ": "892",
        "DEF": "1 310",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Augmente la statistique RÉS des Alliés lors des batailles d'Arène de 65`,
};
