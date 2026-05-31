const championData = {
  type: "Defense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Coupe Déchirante",
          description: `Attaque 1 ennemi. Possède 40 % de chances de placer un débuff de ${DEBUFFS.DEF} de 30 % pendant 2 tours.`,
          damage: "3.2*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Posture Résolue",
          description: `Soigne ce Champion à hauteur de 40 % de ses PV MAX, puis place un buff de ${BUFFS.COUNTER} sur ce Champion pendant 2 tours.`,
          cooldown: 4,
          levelInfo: ["Soins +5%", "Soins +5%", "Soins +5%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.webp",
          name: "Hypnotiser",
          description: `Attaque 1 ennemi. Réduit de 50 % le Compteur de Tours de la cible. Si le Compteur de Tours de la cible est totalement épuisé, place un débuff de ${DEBUFFS.SLEEP} d'1 tour.`,
          damage: "4.7*DEF",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
        }
  ],
  stats: {
        "PV": "16 185",
        "ATQ": "672",
        "DEF": "1 277",
        "VIT": "93",
        "TAUX C.": "15%",
        "DEG C.": "50%",
        "RES": "40",
        "PRE": "0"
  }
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Alliés dans les Cryptes de Faction de 19%.`
};
