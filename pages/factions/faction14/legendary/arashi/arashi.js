const championData = {
  type: "PV",
  spells: [
    {
      img: "assets/sort1.webp",
      name: "Lames dissimulées",
      description: `Attaque 2 fois un ennemi. 

Chaque frappe a 75 % de chances de voler un buff aléatoire. Il est impossible de résister à cet effet si ce Champion se trouve sous un buff ${BUFFS.VEIL} ou ${BUFFS.PERFECT_VEIL}.`,
      damage: "0.14*PV",
      levelInfo: [
        "Dégâts +10%",
        "Chance de Buff/débuff +10%",
        "Dégâts +10%",
        "Chance de Buff/débuff +15%",
      ],
    },
    {
      img: "assets/sort2.webp",
      name: "Assassin nautique",
      description: `Attaque un ennemi. 

Ignorera 25 % de la DÉF de la cible, ainsi que les buffs ${BUFFS.SHIELD} et ${BUFFS.STRENGTHEN}. Ignorera également les buffs ${BUFFS.STONE_SKIN} si ce Champion se trouve sous un buff ${BUFFS.VEIL} ou ${BUFFS.PERFECT_VEIL}. 

Si cette attaque tue un ennemi, augmente d'1 tour la durée de tous les buffs de ce Champion.`,
      damage: "0.34*PV",
      cooldown: 5,
      levelInfo: [
        "Dégâts +10%",
        "Temps de recharge -1",
        "Dégâts +10%",
        "Temps de recharge -1",
      ],
    },
    {
      img: "assets/sort3.webp",
      name: "Assaut du Ressac",
      description: `Attaque tous les ennemis. Avant d'attaquer, place un buff ${BUFFS.PERFECT_VEIL} et un buff ${BUFFS.CDAM} de 30 % sur ce Champion pendant 2 tours. 

Cette attaque inflige à chaque cible individuelle des dégâts sur cible unique plutôt que des dégâts de zone. Ignorera 15 % de la DÉF du premier ennemi. Après avoir frappé le premier ennemi, frappera chacun des autres ennemis. Après la première frappe, chaque frappe successive ignore 5 % supplémentaires de la DÉF de la cible (s'accumule jusqu'à 35 %). 

Pour chaque ennemi tué par cette attaque, augmente les PV de ce Champion de 5 % (s'accumule jusqu'à 30 %).`,
      damage: "0.32*PV",
      cooldown: 6,
      levelInfo: [
        "Dégâts +10%",
        "Temps de recharge -1",
        "Dégâts +10%",
        "Temps de recharge -1",
      ],
    },
    {
      img: "assets/passif1.webp",
      name: "Seigneur pirate [P]",
      description: `${PASSIVE}

Au début de chaque Tour, place un buff ${BUFFS.PERFECT_VEIL} sur ce Champion pendant 1 tour. 

Possède 20 % de chances de renvoyer sur l'assaillant tous les dégâts et débuffs que reçoit ce Champion. Ne fonctionnera que sur les compétences qui infligent des dégâts ou qui infligent des dégâts et placent des débuffs. Ne fonctionne pas contre les Boss.

${ACTIVE}

Si les dégâts renvoyés tuent un ennemi, remplit le Compteur de Tour de ce Champion de 30 % et place un buff ${BUFFS.PERFECT_VEIL} sur ce Champion pendant 1 tour.`,
      cooldown: 4,
      levelInfo: [
        "Temps de recharge -1",
        "Temps de recharge -1",
      ],
      isPassive: true,
    },
  ],
  stats: {
    "PV": "23 955",
    "ATQ": "793",
    "DÉF": "1 189",
    "VIT": "100",
    "TAUX C.": "15%",
    "DÉG C.": "63%",
    "RÉS": "40",
    "PRÉ": "0",
  },
};

const aura = {
  img: "../../../../../assets/images/auras//speed.webp",
  description: `Augmente la statistique VIT des Alliés dans les batailles d'Arène de 28%.`,
};

