const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Flamme Bénie",
          description: `Attaque 1 ennemi. Possède 10 % de chances de placer un débuff de ${DEBUFFS.DEF} de 30 % pendant 2 tours.`,
          damage: "0.14*HP",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Rafale de Cristal",
          description: `Attaque tous les ennemis. Place un débuff de ${DEBUFFS.ATK} de 25 % pendant 2 tours.`,
          damage: "0.1*HP",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Irréductible [P]",
          description: `Réduit de 30 % les dégâts reçus par ce Champion lorsque ses PV tombent sous 30 %.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "19 650",
        "ATQ": "837",
        "DEF": "881",
        "VIT": "93",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés lors des Cryptes de Faction de 22%`,
};
