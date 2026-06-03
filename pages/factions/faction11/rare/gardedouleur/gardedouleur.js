const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Avancée Infatigable",
          description: `Attaque 2 fois un ennemi. Remplit de 10% le Compteur de Tour de ce Champion.`,
          damage: "1*DEF + 1*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Dégâts +10%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Balayage Spectaculaire",
          description: `Attaque tous les ennemis, puis soigne tous les alliés à hauteur de 15% de ses PV MAX.`,
          damage: "0.12*PV + 2*ATQ",
          cooldown: 5,
          levelInfo: ["Soins +5%", "Soins +5%", "Dégâts +5%", "Soins +10%", "Soins +15%", "Dégâts +15%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.webp",
          name: "Tactiques de Combat",
          description: `Réduit d'1 tour la durée des temps de recharge de toutes les compétences alliées. Cette compétence ne verra pas son temps de recharge réduit par d'autres compétences qui réduisent les temps de recharge d'1 tour.`,
          cooldown: 7,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1", "Temps de recharge -1"],
        }
  ],
  stats: {
        "PV": "19 320",
        "ATQ": "969",
        "DEF": "771",
        "VIT": "102",
        "TAUX C.": "15%",
        "DEG C.": "50%",
        "RES": "40",
        "PRE": "0"
  }
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés dans les Cryptes de Faction de 21%.`
};
