const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Grand Marteau",
          description: `Attaque un ennemi. Réinitialise le compteur de tour de la compétence Dévastateur si cette attaque tue un ennemi.`,
          damage: "3.2*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Dévastateur",
          description: `Attaque un ennemi. Possède 65% de chances de placer un débuff ${DEBUFFS.STUN} pendant 1 tour. Remplit le Compteur de Tour de tous les ennemis de 10% si cette attaque passe en critique.`,
          damage: "5*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Brise-dos",
          description: `Attaque tous les ennemis. Possède 75% de chances de placer un débuff ${DEBUFFS.WEAKEN} de 15% pendant 2 tours.`,
          damage: "3.5*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "10 905",
        "ATQ": "1 498",
        "DEF": "804",
        "VIT": "103",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés lors de toutes les Batailles de 12%`,
};
