const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Coup Éclatant",
          description: `Attaque un ennemi. Possède 75 % de chances de placer un débuff ${DEBUFFS.WEAKEN} de 25 % pendant 2 tours.`,
          damage: "3.2*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Souffle Piquant",
          description: `Attaque tous les ennemis. Augmente de 2 tours le temps de recharge de toutes les compétences sur chaque ennemi.`,
          damage: "3.8*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Cause la Peur",
          description: `Attaque 4 fois au hasard. Possède 75 % de chances de placer un débuff de ${DEBUFFS.BLOCK_BUFFS} de 2 tours.`,
          damage: "1.55*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "13 545",
        "ATQ": "1 498",
        "DEF": "903",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés lors de toutes les Batailles de 25%`,
};
