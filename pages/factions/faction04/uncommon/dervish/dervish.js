const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Déluge",
          description: `Attaque 2 fois au hasard. Possède 25 % de chances de placer un débuff de ${DEBUFFS.DEF} de 30 % pendant 2 tours.`,
          damage: "4.6*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Flèche Bloquante",
          description: `Attaque un ennemi. Possède 50 % de chances de placer un débuff de ${DEBUFFS.HEALS} de 50 % pendant 2 tours.`,
          damage: "8.6*ATQ",
          cooldown: 4,
          levelInfo: ["Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +20%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "10 080",
        "ATQ": "1 112",
        "DEF": "969",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
