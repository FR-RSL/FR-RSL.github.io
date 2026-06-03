const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Coup Goguenard",
          description: `Attaque un ennemi. Possède 25% de chances de placer un débuff de ${DEBUFFS.PROVOKE} d'1 tour.`,
          damage: "4*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Intercéder",
          description: `Place, pendant 2 tours, une ${BUFFS.ALLY_PROTECT} de 50% sur l'allié le plus sévèrement blessé. Accorde un Tour supplémentaire.`,
          cooldown: 4,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Se venger",
          description: `Place, pendant 2 tours, un buff ${BUFFS.COUNTER} sur ce Champion. Soigne ce Champion de 15%.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 865",
        "ATQ": "914",
        "DEF": "1 123",
        "VIT": "92",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = null;
