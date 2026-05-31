const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Pointes de Scorpion",
          description: `Attaque un ennemi. Possède 40 % de chances de placer un débuff ${DEBUFFS.POISON} de 5 % pendant 2 tours.`,
          damage: "2.77*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Tactiques Épuisantes",
          description: `Attaque un ennemi. Possède 75 % de chances de placer un débuff ${DEBUFFS.WEAKEN} de 15 % pendant 2 tours.`,
          damage: "4.5*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Force du Tigre",
          description: `Place un buff ${BUFFS.BLOCK_DEBUFFS} et un buff ${BUFFS.DEF} de 60 % sur ce Champion pendant 2 tours.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "11 070",
        "ATQ": "1 255",
        "DEF": "1 035",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = null;
