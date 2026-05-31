const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Douleur Suintante",
          description: `Attaque un ennemi. Les dégâts augmentent de 10 % pour chaque débuff dont est affligée la cible. Si la cible est tuée, attaquera un ennemi pris au hasard avec l'excédent de dégâts. Les dégâts infligés sont équivalents au triple de l'excédent de dégâts. Les dégâts excédentaires ne peuvent pas passer en critique.`,
          damage: "3.5*ATQMultiplier: Remaining Damage Amount*3",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Mâchoires de Poison",
          description: `Attaque 4 fois au hasard. Chaque frappe place, pour 3 tours, un débuff de ${DEBUFFS.POISON} de 5 %.`,
          damage: "1.3*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Dégâts +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "il Funeste",
          description: `Place un débuff d'${DEBUFFS.WEAKEN} de 25 % et un débuff de ${DEBUFFS.DEF} de 60 %, pendant 2 tours, sur tous les ennemis.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 195",
        "ATQ": "1 520",
        "DEF": "1 046",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Augmente la statistique PRÉ des Alliés lors des Cryptes de Faction de 50`,
};
