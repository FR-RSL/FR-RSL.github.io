const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Poings vaniteux",
          description: `Attaque 2 fois un ennemi. Chaque frappe possède 35% de chances de placer un débuff ${DEBUFFS.STUN} pendant 1 tour.`,
          damage: "0.12*PV",
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Colère explosive",
          description: `Attaque tous les ennemis. Retire tous les buffs ${BUFFS.DEF} des ennemis avant d'attaquer. Place une frappe supplémentaire si cette attaque tue un ennemi.`,
          damage: "0.29*PV",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Rugissement victorieux",
          description: `Place un buff ${BUFFS.PRE} de 50% sur tous les alliés pendant 3 tours. Place également un buff ${BUFFS.CDAM} de 30% sur ce Champion pendant 3 tours, puis accorde un tour supplémentaire.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Offensé [P]",
          description: `Réduit de 20% les dégâts que ce Champion reçoit des coups critiques. Contre-attaque l'assaillant lorsque ce Champion est frappé par un coup critique.${RETURN}${RETURN}

Possède 50% de chances de contre-attaquer l'assaillant lorsque ce Champion est atteint par une frappe puissante, normale ou faible.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "22 635",
        "ATQ": "815",
        "DEF": "1 255",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Alliés lors de toutes les Batailles de 30%`,
};
