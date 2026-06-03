const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Flèches Abrutissantes",
          description: `Attaque un ennemi. Offre 35% de chances de placer un débuff de ${DEBUFFS.PRE} de 25% pendant 2 tours.`,
          damage: "2.5*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Suppuration Fétide",
          description: `Attaque un ennemi. Possède 45% de chances de placer un débuff de ${DEBUFFS.LEECH} de 2 tours.`,
          damage: "2.7*ATQ",
          cooldown: 3,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
        }
  ],
  stats: {
        "PV": "12 720",
        "ATQ": "815",
        "DEF": "540",
        "VIT": "92",
        "TAUX C.": "15%",
        "DEG C.": "50%",
        "RES": "30",
        "PRE": "0"
  }
};

const aura = null;
