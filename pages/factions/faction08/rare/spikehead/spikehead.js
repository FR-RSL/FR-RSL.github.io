const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Piétiner",
          description: `Attaque 2 fois un ennemi.`,
          damage: "1.5*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Cri Guerrier",
          description: `Place un buff d'${BUFFS.CRATE} de 15 % et un buff d'${BUFFS.ATK} de 50 % sur ce Champion pendant 2 tours.`,
          cooldown: 4,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Déchirure",
          description: `Attaque 3 fois un ennemi. Possède 20 % de chances supplémentaires de porter un coup critique.`,
          damage: "1.4*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "11 895",
        "ATQ": "1 465",
        "DEF": "771",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Alliés lors des batailles d'Arène de 30%`,
};
