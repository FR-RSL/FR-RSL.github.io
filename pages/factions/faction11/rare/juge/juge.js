const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Éviscérer",
          description: `Attaque 1 ennemi. Les dégâts augmentent de 10 % pour chaque débuff dont est affligé la cible, s'additionnant jusqu'à un maximum de 100 %.`,
          damage: "3*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Danse de Lame",
          description: `Attaque 2 fois tous les ennemis. Remplit de 10 % le Compteur de Tours de la cible lors de chaque coup critique.`,
          damage: "1.7*ATQ",
          cooldown: 3,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
        },
        {
          img: "assets/sort3.webp",
          name: "Armure Chaos [P]",
          description: `Chaque frappe possède 30 % de chances de placer, pendant 1 tour, un débuff de ${DEBUFFS.PRE} de 50 % OU un débuff de ${DEBUFFS.SPD} de 30 % OU un débuff de ${DEBUFFS.ATK} de 50 % OU un débuff de ${DEBUFFS.DEF} de 60 % sur la cible.`,
          isPassive: true,
        }
  ],
  stats: {
        "PV": "12 225",
        "ATQ": "1 476",
        "DEF": "738",
        "VIT": "103",
        "TAUX C.": "15%",
        "DEG C.": "57%",
        "RES": "30",
        "PRE": "0"
  }
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Augmente la statistique PRE des Alliés lors de toutes les Batailles de 30.`
};
