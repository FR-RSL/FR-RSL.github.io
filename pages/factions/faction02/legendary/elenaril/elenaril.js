const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Réprimande Brûlante",
          description: `Attaque un ennemi. Place un débuff de ${DEBUFFS.BURN} de 2 tours. Il est impossible de résister à ce débuff.`,
          damage: "3.6*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Bouillir",
          description: `Attaque tous les ennemis. Place un débuff de ${DEBUFFS.POISON} de 5% pendant 2 tours. Place un second débuff de ${DEBUFFS.POISON} de 5% pendant 2 tours si cette attaque passe en critique.`,
          damage: "4.7*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Allumer",
          description: `Active instantanément tous les débuffs ${DEBUFFS.POISON} sur tous les ennemis.`,
          damage: "Poison Debuff Count",
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 535",
        "ATQ": "1 387",
        "DEF": "1 222",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/crit.webp",
  description: `Augmente la statistique TAUX DE C. des Alliés lors des Cryptes de Faction de 24%`,
};
