const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Choc d'étoile filante",
          description: `Attaque un ennemi. Possède 50 % de chances de placer un débuff ${DEBUFFS.ATK} de 50 % pendant 2 tours.`,
          damage: "3.6*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Frénésie de fracas",
          description: `Attaque tous les ennemis. Possède 75 % de chances de réduire d'1 tour la durée de tous les buffs ennemis. Possède également 75 % de chances de placer un débuff ${DEBUFFS.PRE} de 50 % pendant 2 tours.`,
          damage: "3.8*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Défense coordonnée",
          description: `Place un buff ${BUFFS.ALLY_PROTECT} de 50 % sur tous les alliés sauf ce Champion pendant 2 tours. Place un buff ${BUFFS.DEF} de 60 % sur tous les alliés pendant 2 tours.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Fléau du pillard [P]",
          description: `Lorsqu'un allié se fait attaquer alors qu'il bénéficie d'un buff ${BUFFS.ALLY_PROTECT}, place un débuff ${DEBUFFS.ATK} de 50 % sur l'assaillant pendant 1 tour.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "19 485",
        "ATQ": "870",
        "DEF": "1 409",
        "VIT": "104",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "0"
      },
};

const aura = null;
