const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Épée en Os",
          description: `Attaque 3 fois un ennemi. Possède 20% de chances de retirer un buff aléatoire sur chaque cible.`,
          damage: "DEF*1.5",
          levelInfo: ["Dégâts +10%", "Dégâts +15%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Cisaille",
          description: `Attaque un ennemi. Possède 75% de chances de placer un débuff de ${DEBUFFS.DEF} de 60% et un débuff d'${DEBUFFS.WEAKEN} de 25% pendant 2 tours.`,
          damage: "DEF*6",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Embourber",
          description: `Attaque tous les ennemis. Réduit de 100% le Compteur de Tours.`,
          damage: "DEF*4",
          cooldown: 7,
          levelInfo: ["Dégâts +10%", "Dégâts +15%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "18 330",
        "ATQ": "1 046",
        "DEF": "1 310",
        "VIT": "91",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Augmente la statistique RÉS des Alliés lors des batailles d'Arène de 90`,
};
