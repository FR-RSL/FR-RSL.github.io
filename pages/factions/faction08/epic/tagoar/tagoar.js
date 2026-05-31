const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Bâton magique",
          description: `Attaque 2 fois un ennemi. Place un buff ${BUFFS.DEF} de 60 % pendant 2 tours sur l'allié ayant le moins de PV.`,
          damage: "1.8*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Charge inclinée",
          description: `Attaque tous les ennemis. Place un buff ${BUFFS.SPD} de 30 % sur tous les alliés pendant 2 tours, puis soigne tous les alliés de 15 % des PV MAX de ce Champion.`,
          damage: "3.7*ATQ",
          cooldown: 5,
          levelInfo: ["Soins +10%", "Soins +10%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Lève-toi et combats",
          description: `Ranime tous alliés tombés avec 30 % de PV. Place également sur tous les alliés un buff ${BUFFS.SHIELD} équivalent à 20 % des PV MAX de ce Champion pendant 2 tours.`,
          cooldown: 7,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Aider les faibles [P]",
          description: `Réduit de 10 % les dégâts reçus par les alliés ayant 50 % de PV ou moins.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 165",
        "ATQ": "1 145",
        "DEF": "947",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés lors de toutes les Batailles de 25%`,
};
