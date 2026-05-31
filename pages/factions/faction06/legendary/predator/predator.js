const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Lames de poignet",
          description: `Attaque un ennemi. Soigne ce Champion à hauteur de 30 % des dégâts infligés.

${PASSIVE} 

Lorsque ce Champion réussit à Esquiver une compétence ennemie et tous ses effets associés, contre-attaque avec cette compétence. Ne peut se produire qu'une fois par tour.`,
          damage: "0.26*PV",
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Dégâts +10%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Disque intelligent",
          description: `Attaque 2 fois tous les ennemis. Après avoir frappé l'ennemi sélectionné initialement, tous les autres ennemis seront frappés dans un ordre aléatoire. Pour la première frappe, les dégâts reçus par l'ennemi sélectionné initialement augmenteront de 75 %. Chaque ennemi frappé après la frappe initiale recevra 15 % de dégâts bonus en moins (se réduit jusqu'à 15 % de dégâts bonus). Détruit également les PV MAX de chaque ennemi de 30 % des dégâts infligés (s'accumule jusqu'à 50 %).

Pour la seconde frappe, les dégâts reçus par l'ennemi sélectionné initialement augmenteront de 15 %. Chaque ennemi frappé après la frappe initiale recevra 15 % de dégâts bonus en plus (s'accumule jusqu'à 75 % de dégâts bonus).

Cette attaque ignore 15 % de la DÉF de chaque cible si ce Champion se trouve sous buff ${BUFFS.VEIL} ou ${BUFFS.PERFECT_VEIL}.`,
          damage: "0.19*PV",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.webp",
          name: "Lancer de combi-bâton",
          description: `Attaque un ennemi. Avant d'attaquer, place un débuff ${DEBUFFS.HUNTER} pendant 1 tour. Il est impossible de résister à ce débuff si ce Champion se trouve sous un buff ${BUFFS.VEIL} ou ${BUFFS.PERFECT_VEIL}.

Si cette attaque tue un ennemi, place un débuff ${DEBUFFS.BLOCK_REA} sur la cible et un débuff ${DEBUFFS.HUNTER} sur un ennemi vivant aléatoire pendant 1 tour. Il est impossible de résister au débuff ${DEBUFFS.HUNTER} si ce Champion se trouve sous un buff ${BUFFS.VEIL} ou ${BUFFS.PERFECT_VEIL}.

Si cette attaque ne tue pas un ennemi, place un buff ${BUFFS.PERFECT_VEIL} sur ce Champion pendant 2 tours, puis remplit son Compteur de Tour de 50 %.`,
          damage: "0.38*PV",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort4.webp",
          name: "Voile de Yautja [P]",
          description: `Au début de chaque Tour, place un buff ${BUFFS.PERFECT_VEIL} sur ce Champion pendant 1 tour. 

Avant que ce Champion joue un tour, a également 50 % de chances initiales d'Esquiver une compétence ennemie et tous ses effets associés. Ces chances initiales passent à 0 % après le premier tour de ce Champion dans une Manche.

Dès que ce Champion tue un ennemi, accorde à ce Champion 20 % de chances d'Esquiver les compétences ennemies et les effets associés (s'accumule jusqu'à 60 %).`,
          isPassive: true,
        }
  ],
  stats: {
        "PV": "25 770",
        "ATQ": "716",
        "DEF": "1 145",
        "VIT": "98",
        "TAUX C.": "15%",
        "DEG C.": "63%",
        "RES": "40",
        "PRE": "0"
  }
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Allies dans les batailles d'Arene de 35%.`
};
