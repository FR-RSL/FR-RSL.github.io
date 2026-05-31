const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Patte Dévastatrice",
          description: `Attaque un ennemi. Possède 10 % de chances de placer un débuff ${DEBUFFS.LOCK_ACTIVE} pendant 1 tour.`,
          damage: "3*DEF",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Vent Hurlant",
          description: `Attaque tous les ennemis. Possède 75 % de chances de placer un débuff ${DEBUFFS.CRATE} de 30 % pendant 2 tours.`,
          damage: "3*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Voile Hivernal ${PASSIVE}",
          description: `Réduit de 15 % les dégâts infligés par les coups critiques à tous les alliés. Remplit de 5 % le Compteur de Tour de ce Champion dès qu'un ennemi porte un coup normal, puissant ou faible.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "17 340",
        "ATQ": "738",
        "DEF": "1 409",
        "VIT": "93",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés lors de toutes les Batailles de 25%`,
};
