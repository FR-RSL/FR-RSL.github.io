const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Toxine Glaçante",
          description: `Attaque un ennemi. Possède 40% de chances de placer un débuff ${DEBUFFS.POISON} de 5% pendant 1 tour.`,
          damage: "3.9*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Glace les Sangs",
          description: `Attaque un ennemi. Possède 75% de chances de placer un débuff ${DEBUFFS.DEF} de 30% pendant 2 tours. Possède, à la place, 75% de chances de placer sur la cible un débuff ${DEBUFFS.DEF} de 60% si la cible souffre d'un débuff ${DEBUFFS.POISON}.`,
          damage: "6.8*ATQ",
          cooldown: 4,
          levelInfo: ["Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Icy Veins",
          description: `Attacks 1 enemy 2 times.Each hit places a 2.5% ${DEBUFFS.POISON} debuff for 2 turns. Places a 5% ${DEBUFFS.POISON} debuff instead if the target is under a ${DEBUFFS.POISON_S} debuff.`,
          damage: "2.65*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Dégâts +10%", "Dégâts +10%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "13 545",
        "ATQ": "1 233",
        "DEF": "892",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = null;
