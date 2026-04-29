const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.png",
          name: "Lames de poignet",
          description: `Attaque un ennemi. Soigne ce Champion a hauteur de 30% des degats infliges.${RETURN}${RETURN}
${PASSIVE}
Lorsque ce Champion reussit a Esquiver une competence ennemie et tous ses effets assoicies, contre-attaque avec cette competence.
Ne peut pas produire qu'une fois par tour`,
          damage: "0.26*PV",
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Dégâts +10%"],
        },
        {
          img: "assets/sort2.png",
          name: "Disque intelligent",
          description: `Attaque 2 fois tous les ennemis. Apres avoir frappe l'ennemi selectionne initialement, tous les autres ennenis seront frappes dans un ordre aleatoire.${RETURN}${RETURN}
Pour la premiere frappe, les degats recus par l'ennemi selectionne initialement augmenteront de 75%.
Chaque ennemi frappe apres la frappe initiale recevra 15% de degats bonus en moins (se reduit jusqu'a 15% de degats bonus).${RETURN}
Detruit egalement les PV MAX de chaque ennemi de 30% des degats infliges (s'accumule jusqu'a 50%).${RETURN}${RETURN}
Pour la seconde frappe, les degats recus par l'ennemi selectionne initialement augmenteront de 15%. Chaque ennemi frappe apres la frappe initiale recevra 15% de degats bonus en plus (s'accumule jusqu'a 75% de degats bonus).${RETURN}${RETURN}
Cette attaque ignore 15% de la DEF de chaque cible si ce Champion se trouve sous buff ${BUFFS.VEIL} ou ${BUFFS.PERFECT_VEIL}.`,
          damage: "0.19*PV",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.png",
          name: "Lancer de combi-baton",
          description: `Attaque un ennemi. Avant d'attaquer, place un debuff ${DEBUFFS.HUNTER} pendant 1 tour. Il est impossible de resister a ce debuff si ce Champion se trouve sous un buff ${BUFFS.VEIL} ou ${BUFFS.PERFECT_VEIL}.${RETURN}${RETURN}

Si cette attaque tue un ennemi, place un debuff ${DEBUFFS.BLOCK_REA} sur la cible et un debuff ${DEBUFFS.HUNTER} sur un ennemi vivant aleatoire pendant 1 tour. Il est impossible de resister au debuff ${DEBUFFS.HUNTER} si ce Champion se trouve sous un buff ${BUFFS.VEIL} ou ${BUFFS.PERFECT_VEIL}.${RETURN}${RETURN}

Si cette attaque ne tue pas un ennemi, place un buff ${BUFFS.PERFECT_VEIL} sur ce Champion pendant 2 tours, puis remplit son Compteur de Tour de 50%.`,
          damage: "0.38*PV",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort4.png",
          name: "Voile de Yautja [P]",
          description: `Au debut de chaque Round, place un buff ${BUFFS.PERFECT_VEIL} sur ce Champion pendant 1 tour.${RETURN}${RETURN}

Avant que ce Champion joue un tour, a egalement 50% de chances initiales d'Esquiver une competence ennemie et tous ses effets associes. Ces chances initiales passent a 0% apres le premier tour de ce Champion dans une Manche.${RETURN}${RETURN}

Des que ce Champion tue un ennemi, accorde a ce Champion 20% de chances d'Esquiver les competences ennemies et les effets associes (s'accumule jusqu'a 60%).`,
          isPassive: true,
        }
  ],
  stats: {
        "PV": "25770",
        "ATQ": "716",
        "DEF": "1145",
        "VIT": "98",
        "TAUX C.": "15",
        "DEG C.": "63",
        "RES": "40",
        "PRE": "0"
  }
};

const aura = {
  img: "../../../../../assets/images/auras/hp.png",
  description: `Augmente la statistique PV des Allies dans les batailles d'Arene de 35%.`
};
