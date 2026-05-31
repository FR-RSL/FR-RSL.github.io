const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Engrenages Sanglants",
          description: `Attaque un ennemi. Place un buff ${BUFFS.HEALS} de 7,5 % sur ce Champion pendant 1 tour si cette attaque passe en critique.`,
          damage: "0.15*HP",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Giclées Curatives",
          description: `Soigne tous tes alliés à hauteur de 15 % de leurs PV max.`,
          cooldown: 5,
          levelInfo: ["Soins +5%", "Soins +5%", "Soins +5%", "Soins +5%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Nécro Rouages",
          description: `Ranime un allié mort avec 50 % de PV et 50 % de Compteur de Tour.`,
          cooldown: 7,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "19 320",
        "ATQ": "826",
        "DEF": "914",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés lors des Cryptes de Faction de 25%`,
};
