const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Ichor de vie",
          description: `Attaque un ennemi. Soigne l'allié ayant le moins de PV à hauteur de 10 % des PV MAX de cette Championne.`,
          damage: "3.8*ATQ",
          levelInfo: ["Dégâts +10%", "Soins +10%", "Dégâts +10%", "Soins +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Bénédiction suintante",
          description: `Retire tous les débuffs sur tous les alliés, puis place sur tous les alliés un buff ${BUFFS.ATK} de 50 % et un buff ${BUFFS.SHIELD} équivalent à 25 % des PV MAX de cette Championne pendant 2 tours.`,
          cooldown: 4,
          levelInfo: ["Bouclier +10%", "Bouclier +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Renaissance génétique",
          description: `Ranime tous les alliés morts avec 50 % de PV et 50 % de Compteur de Tour, puis place un buff ${BUFFS.BLOCK_DEBUFFS} sur tous les alliés pendant 2 tours. Placera un buff ${BUFFS.BLOCK_DEBUFFS} même s'il n'y a pas d'alliés morts.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Ramper [P]",
          description: `${ACTIVE}

Au début de chaque tour, remplit le Compteur de Tour de tous les alliés de 10 %.${RETURN}${RETURN}

${PASSIVE}

Au début de chaque tour, place sur l'allié ayant le moins de PV un buff ${BUFFS.HEALS} de 15 % pendant 2 tours. Ne placera pas de buff ${BUFFS.HEALS} sur cette Championne.`,
          cooldown: 3,
          levelInfo: ["Temps de recharge -1"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "19 650",
        "ATQ": "1 134",
        "DEF": "1 134",
        "VIT": "109",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés lors de toutes les Batailles de 19%`,
};
