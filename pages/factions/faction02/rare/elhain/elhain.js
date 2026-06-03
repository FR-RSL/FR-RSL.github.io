const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Tir Appliqué",
          description: `Attaque un ennemi. Place un coup supplémentaire si cette attaque passe en critique.`,
          damage: "2.2*ATQ + 100",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Flèche Éclair",
          description: `Attaque 1 ennemi, puis tous les ennemis. Possède 15% de chances supplémentaires de porter un coup critique. Place un buff d'${BUFFS.CRATE} de 30% sur ce Champion, pendant 3 tours, si la cible est tuée.`,
          damage: "2.2*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Vallée de la Mort",
          description: `Attaque 2 fois tous les ennemis.`,
          damage: "2.2*ATQ",
          cooldown: 3,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 370",
        "ATQ": "1 233",
        "DEF": "837",
        "VIT": "107",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `
Augmente la statistique PV des Alliés lors de toutes les Batailles de 15%`,
};
