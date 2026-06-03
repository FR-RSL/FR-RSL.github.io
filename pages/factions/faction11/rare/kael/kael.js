const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Sombre Éclair",
          description: `Attaque 1 ennemi. Possède 80% de chances de placer un débuff de ${DEBUFFS.POISON} de 2,5% pendant 2 tours.`,
          damage: "3.5*ATQ + 100",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +10%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Dégâts +10%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Pluie Acide",
          description: `Attaque tous les ennemis. Possède 15% de chances supplémentaires de porter un coup critique. Remplit de 25% le Compteur de Tours de ce Champion pour chaque ennemi tué.`,
          damage: "4.65*ATQ",
          cooldown: 3,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
        },
        {
          img: "assets/sort3.webp",
          name: "Désintégrer",
          description: `Attaque 4 fois au hasard. Possède 40% de chances de placer un débuff de ${DEBUFFS.POISON} de 5% pendant 2 tours.`,
          damage: "1.5*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +5%", "Temps de recharge -1"],
        }
  ],
  stats: {
        "PV": "13 710",
        "ATQ": "1 200",
        "DEF": "914",
        "VIT": "103",
        "TAUX C.": "15%",
        "DEG C.": "57%",
        "RES": "30",
        "PRE": "0"
  }
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés lors de toutes les Batailles de 15%.`
};
