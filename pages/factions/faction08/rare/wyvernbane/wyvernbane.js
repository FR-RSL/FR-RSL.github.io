const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Percée Inhibante",
          description: `Attaque un ennemi. Possède 20 % de chances de placer un débuff ${DEBUFFS.SPD} de 15 % pendant 2 tours.`,
          damage: "3.2*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Revers",
          description: `Attaque un ennemi. Possède 35 % de chances de réduire le Compteur de Tour de la cible de 20 %.`,
          damage: "5.9*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Lance Fléau de feu",
          description: `Attaque un ennemi. Possède 75 % de chances de placer un débuff ${DEBUFFS.BURN} pendant 2 tours.`,
          damage: "6.1*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "12 555",
        "ATQ": "1 288",
        "DEF": "903",
        "VIT": "94",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
