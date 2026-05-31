const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Ébranle Crâne",
          description: `Attaque un ennemi. Possède 15 % de chances de placer un débuff d'${DEBUFFS.STUN} pendant 1 tour.`,
          damage: "3.8*DEF",
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Cri de Bataille",
          description: `Attaque tous les ennemis. Possède 50 % de chances de placer un débuff de ${DEBUFFS.PROVOKE} pendant 1 tour.`,
          damage: "4.9*DEF",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Réduire en Cendres",
          description: `Attaque tous les ennemis. Possède 75 % de chances de placer un débuff de ${DEBUFFS.BURN} de 2 tours. Il est impossible de résister à ce débuff.`,
          damage: "5.6*DEF",
          cooldown: 6,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "18 825",
        "ATQ": "1 057",
        "DEF": "1 266",
        "VIT": "93",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Alliés lors de toutes les Batailles de 25%`,
};
