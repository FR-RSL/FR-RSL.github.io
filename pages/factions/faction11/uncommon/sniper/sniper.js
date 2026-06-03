const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Double Tir",
          description: `Attaque 2 fois un ennemi. Possède 15% de chances supplémentaires de porter un coup critique. Remplit de 15% le Compteur de Tours de ce Champion lors de chaque coup en critique.`,
          damage: "2.2*ATQ",
        },
        {
          img: "assets/sort2.webp",
          name: "Pluie de Flèches",
          description: `Attaque 2 fois tous les ennemis. Possède 10% de chances de placer un débuff de ${DEBUFFS.SPD} de 15% pendant 1 tour.`,
          damage: "1.9*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Temps de recharge -1", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +5%", "Dégâts +15%", "Chances de Buff/Debuff +5%"],
        }
  ],
  stats: {
        "PV": "12 555",
        "ATQ": "1 211",
        "DEF": "705",
        "VIT": "97",
        "TAUX C.": "15%",
        "DEG C.": "57%",
        "RES": "30",
        "PRE": "0"
  }
};

const aura = null;
