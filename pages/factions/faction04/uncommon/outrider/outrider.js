const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Poignard",
          description: `Attaque un ennemi. Offre 30 % de chances de placer un débuff de ${DEBUFFS.DEF} de 30 % pendant 1 tour.`,
          damage: "5*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Flèche de Feu",
          description: `Attaque un ennemi. Détruit les PV MAX des ennemis de 15 % des dégâts infligés.`,
          damage: "7.7*ATQ",
          cooldown: 3,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Salve",
          description: `Attaque tous les ennemis.`,
          damage: "4.8*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "12 390",
        "ATQ": "1 112",
        "DEF": "815",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
