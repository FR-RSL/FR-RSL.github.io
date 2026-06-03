const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Éclair de dorure",
          description: `Attaque un ennemi. Possède 25 % de chances de placer un débuff ${DEBUFFS.PROVOKE} pendant 1 tour.`,
          damage: "0.22*PV",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Désarmement élégant",
          description: `Attaque tous les ennemis. Possède 75 % de chances de placer un débuff ${DEBUFFS.ATK} de 50 % pendant 2 tours.`,
          damage: "0.22*PV",
          cooldown: 5,
          levelInfo: ["Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Dominé [P]",
          description: `Contre-attaque lorsqu'elle est attaquée par des ennemis sous débuffs ${DEBUFFS.ATK}.`,
          cooldown: 3,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "20 475",
        "ATQ": "749",
        "DEF": "1 189",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Augmente la statistique PRÉ des Alliés lors de toutes les Batailles de 40`,
};
