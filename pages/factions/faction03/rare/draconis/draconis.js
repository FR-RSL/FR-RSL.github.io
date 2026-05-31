const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Bonté",
          description: `Attaque un ennemi. Soigne l'allié ayant le moins de PV de 7,5 % des dégâts infligés.`,
          damage: "0.22*HP",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Soins +5%", "Soins +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Pupilles Sanctifiés",
          description: `Place sur tous les alliés un buff ${BUFFS.SHIELD} équivalent à 15 % des PV MAX de ce Champion pendant 2 tours.`,
          cooldown: 4,
          levelInfo: ["Bouclier +5%", "Bouclier +5%", "Bouclier +5%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Ordre de Clémence",
          description: `Attaque un ennemi. Retire tous les débuffs de l'allié ayant le moins de PV, puis le soigne de 25 % des dégâts infligés.`,
          damage: "0.34*HP",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "17 835",
        "ATQ": "914",
        "DEF": "925",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
