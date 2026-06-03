const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Frappe Emmêlée",
          description: `Attaque un ennemi. Possède 25% de chances de réduire le Compteur de Tour de la cible de 10%.`,
          damage: "4.3*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Noble Posture",
          description: `Place un buff ${BUFFS.DEF} de 30% sur ce Champion et sur l'allié ayant le moins de PV pendant 2 tours. Remplit également le Compteur de Tour de ce Champion de 25%.`,
          cooldown: 3,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Balayage Furieux",
          description: `Attaque un ennemi. Possède 75% de chances de placer un débuff ${DEBUFFS.PROVOKE} pendant 1 tour.`,
          damage: "6.3*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 525",
        "ATQ": "958",
        "DEF": "1 035",
        "VIT": "93",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Alliés lors des Cryptes de Faction de 17%`,
};
