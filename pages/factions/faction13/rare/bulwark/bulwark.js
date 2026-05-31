const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Fléau Lourd",
          description: `Attaque 2 fois un ennemi.
Chaque frappe possède 15 % de chances de placer un débuff d'${DEBUFFS.WEAKEN} de 15 % pendant 2 tours.`,
          damage: "1.5*DEF",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Contact Fulgurant",
          description: `Attaque un ennemi.
Possède 75 % de chances de placer un débuff de ${DEBUFFS.BURN} de 2 tours.`,
          damage: "5.5*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Défenses Punitives [P]",
          description: `Lorsqu'il y a une attaque, possède 30 % de chances d'augmenter d'1 tour la durée de tous les débuffs de l'assaillant.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "13 875",
        "ATQ": "837",
        "DEF": "1 266",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Alliés lors de toutes les Batailles de 17%`,
};
