const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Pourchasser",
          description: `Attaque un ennemi. Possède 30% de chances supplémentaires de porter un coup critique.`,
          damage: "3.8*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Brisarmure",
          description: `Place un débuff ${DEBUFFS.DEF} de 60% pendant 2 tours, puis attaque 1 ennemi. Possède 30% de chances supplémentaires de porter un coup critique.`,
          damage: "5.3*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Tir Chargé",
          description: `Attaque un ennemi. Place un débuff de ${DEBUFFS.SPD} de 30% pendant 2 tours. Réduit de 50% le Compteur de Tour de la cible. Possède 30% de chances supplémentaires de porter un coup critique.`,
          damage: "6.1*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "13 875",
        "ATQ": "1 542",
        "DEF": "837",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/crit.webp",
  description: `Augmente la statistique TAUX DE C. des Alliés lors des Cryptes de Faction de 20%`,
};
