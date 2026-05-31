const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Flèche Enflammée",
          description: `Attaque un ennemi. Possède 30 % de chances de placer un débuff de ${DEBUFFS.POISON} de 5 % pendant 2 tours.`,
          damage: "4.6*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Tir Glacé",
          description: `Attaque 3 fois au hasard. Chaque frappe possède 25 % de chances de placer un débuff de ${DEBUFFS.GEL} d'1 tour.`,
          damage: "2.6*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Poison Engourdissant",
          description: `Attaque tous les ennemis. Possède 75 % de chances de placer un débuff de ${DEBUFFS.SPD} de 30 % pendant 2 tours.`,
          damage: "4.5*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 370",
        "ATQ": "1 277",
        "DEF": "1 068",
        "VIT": "93",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/crit.webp",
  description: `
Augmente la statistique TAUX DE C. des Alliés lors des Donjons de 33%`,
};
