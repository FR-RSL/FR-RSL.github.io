const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Bélier",
          description: `Attaque un ennemi. Les dégâts augmentent en fonction de la quantité de PV perdus par ce Champion. Cette attaque ne peut pas être un coup puissant, critique ou faible.`,
          damage: "ATQ*(2.5+3*(1-Current HP%))",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Tambour de Guerre",
          description: `Place un débuff de ${DEBUFFS.PROVOKE} d'1 tour sur tous les ennemis. Place un buff d'${BUFFS.DEF} de 30% sur ce Champion pendant 2 tours.`,
          cooldown: 4,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Déterminé",
          description: `Place un buff ${BUFFS.UNKILLABLE} sur ce Champion pendant 2 tours.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "17 010",
        "ATQ": "958",
        "DEF": "936",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Alliés lors des Donjons de 27%`,
};
