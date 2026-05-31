const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Crochet Diabolique",
          description: `Attaque un ennemi. Possède 25 % de chances de placer un débuff ${DEBUFFS.PROVOKE} pendant 1 tour.`,
          damage: "3.6*DEF",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Dessèche Âme",
          description: `Attaque tous les ennemis. Possède 75 % de chances de placer un débuff ${DEBUFFS.WEAKEN} de 25 % pendant 2 tours.`,
          damage: "3.2*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Possession Démoniaque",
          description: `Place un buff ${BUFFS.DEF} de 60 % sur tous les alliés pendant 2 tours. Remplit le Compteur de Tour de tous les alliés de 20 %.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Toujours Plus [P]",
          description: `Place un buff ${BUFFS.STRENGTHEN} de 25 % sur ce Champion pendant 2 tours lorsque ses PV tombent sous 50 %.`,
          cooldown: 4,
          isPassive: true
        }
      ],
  stats: {
        "PV": "17 175",
        "ATQ": "760",
        "DEF": "1 398",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = null;
