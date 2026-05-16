const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.png",
          name: "Eviscerer",
          description: `Attaque un ennemi. Les degats augmentent de 10% pour chaque debuff sur la cible, s'accumule jusqu'a 100%.`,
          damage: "3*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
        },
        {
          img: "assets/sort2.png",
          name: "Danse de Lame",
          description: `Attaque 2 fois tous les ennemis. Remplit de 10% le Compteur de Tour de ce Champion pour chaque coup critique.`,
          damage: "1.7*ATQ",
          cooldown: 3,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
        },
        {
          img: "assets/sort3.png",
          name: "Armure Chaos [P]",
          description: `Chaque frappe de ce Champion possede 30% de chances de placer un debuff ${DEBUFFS.PRE} de 50%, un debuff ${DEBUFFS.SPD} de 30%, un debuff ${DEBUFFS.ATK} de 50% ou un debuff ${DEBUFFS.DEF} de 60% sur la cible pendant 1 tour.`,
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
  img: "../../../../../assets/images/auras/acc.png",
  description: `Augmente la statistique PRE des Alliés lors de toutes les Batailles de 30.`
};
