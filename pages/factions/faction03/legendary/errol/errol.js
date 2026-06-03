const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Épée Embrasée",
          description: `Attaque 1 ennemi. Possède 30% de chances supplémentaires de porter un coup critique.`,
          damage: "3.9*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Brisheaume",
          description: `Attaque 2 fois tous les ennemis. Possède 30% de chances supplémentaires de porter un coup critique. Chaque frappe ignorera 15% de la DÉF de la cible.`,
          damage: "1.85*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Dégâts +10%", "Dégâts +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Négation",
          description: `Attaque un ennemi. Avant d'attaquer, retire tous les débuffs sur ce Champion et vole tous les buffs de la cible. Possède 30% de chances supplémentaires de porter un coup critique. Octroie un Tour supplémentaire si la cible est tuée.`,
          damage: "5.2*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +15%", "Dégâts +15%", "Dégâts +15%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 020",
        "ATQ": "1 674",
        "DEF": "837",
        "VIT": "104",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés lors de toutes les Batailles de 28%`,
};
