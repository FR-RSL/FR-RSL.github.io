const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.png",
          name: "Avancee Infatigable",
          description: `Attaque 2 fois un ennemi. Remplit de 10% le Compteur de Tour de cette Championne.`,
          damage: "1*DEF + 1*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Dégâts +10%"],
        },
        {
          img: "assets/sort2.png",
          name: "Balayage Spectaculaire",
          description: `Attaque tous les ennemis. Soigne tous les allies a hauteur de 15% des PV MAX de cette Championne.`,
          damage: "0.12*PV + 2*ATQ",
          cooldown: 5,
          levelInfo: ["Soins +5%", "Soins +5%", "Dégâts +5%", "Soins +10%", "Soins +15%", "Dégâts +15%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.png",
          name: "Tactiques de Combat",
          description: `Réduit d'1 tour les temps de recharge de toutes les compétences alliées.`,
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
  img: "../../../../../assets/images/auras/hp.png",
  description: `Augmente la statistique PV des Alliés dans les Cryptes de Faction de 21%.`
};
