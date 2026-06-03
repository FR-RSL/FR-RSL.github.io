const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Lance de l'aube",
          description: `Attaque un ennemi.${RETURN}${RETURN}

Soigne l'allié qui a le moins de PV à hauteur de 10 % des PV MAX de cette Championne.`,
          damage: "4.6*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Rayon fortifiant",
          description: `Place un buff ${BUFFS.DEF} de 60 % et un buff ${BUFFS.ATK} de 50 % sur tous les alliés pendant 2 tours.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Chatoiement de vie",
          description: `Ranime un allié avec 25 % de PV et 100 % de Compteur de Tour.${RETURN}${RETURN}

Place également un buff ${BUFFS.BLOCK_DAMAGE} sur cet allié pendant 2 tours.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Destin prometteur [P]",
          description: `Dès que cette Championne ranime un allié, réduit d'1 tour le temps de recharge d'une des compétences de cette Championne.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "17 670",
        "ATQ": "837",
        "DEF": "1 288",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés lors de toutes les Batailles de 25%`,
};
