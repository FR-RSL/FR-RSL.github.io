const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Lessiver",
          description: `Attaque tous les ennemis. Possède 20% de chances de placer un débuff ${DEBUFFS.LOCK_ACTIVE} pendant 1 tour.`,
          damage: "2.6*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Beuglement Puissant",
          description: `Attaque tous les ennemis. Offre 50% de chances de placer un débuff de ${DEBUFFS.SPD} de 15% pendant 2 tours.`,
          damage: "4.2*ATQ",
          cooldown: 4,
          levelInfo: ["Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Renverser",
          description: `Attaque tous les ennemis. Offre 75% de chances de placer un débuff de ${DEBUFFS.ATK} de 25% pendant 2 tours. Possède 75% de chances de placer un débuff de ${DEBUFFS.DEF} de 30% pendant 2 tours.`,
          damage: "3.6*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 515",
        "ATQ": "1 013",
        "DEF": "914",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés lors des Cryptes de Faction de 15%`,
};
