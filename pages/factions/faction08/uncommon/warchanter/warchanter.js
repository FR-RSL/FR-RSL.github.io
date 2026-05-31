const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Blessure à la Tête",
          description: `Attaque un ennemi. Possède 20 % de chances de placer un débuff d'${DEBUFFS.STUN} d'1 tour.`,
          damage: "0.2*HP",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Frénésie",
          description: `Attaque tous les ennemis. Possède 25 % de chances de placer un débuff de ${DEBUFFS.ATK} de 25 % pendant 1 tour. Possède également 25 % de chances de placer un débuff de ${DEBUFFS.PROVOKE} d'1 tour.`,
          damage: "5.6*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Temps de recharge -1", "Dégâts +10%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "18 990",
        "ATQ": "716",
        "DEF": "771",
        "VIT": "94",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
