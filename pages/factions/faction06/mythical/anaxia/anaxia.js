const championForms = {
  form1: {
    type: "Défense",
    spells: [
        {
          img: "assets/sort1.webp",
          name: "Épée assoiffée",
          description: `Attaque un ennemi.${RETURN}${RETURN}

Soigne tous tes alliés de 5 % de leurs PV MAX. Soigne tous les alliés de 5 % supplémentaires de leurs PV MAX si cette Championne attaque une cible sous débuff ${DEBUFFS.LEECH}.`,
          damage: "4*DEF",
          levelInfo: ["Dégâts +20%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Fente mortelle",
          description: `Attaque tous les ennemis.${RETURN}${RETURN}

Soigne tous les alliés de 15 % des PV MAX de cette Championne. La valeur du soin augmente de 5 % pour chaque débuff ${DEBUFFS.LEECH} dont est affligée l'équipe ennemie.${RETURN}${RETURN}

Si un Champion reçoit un surplus de soins, place un buff ${BUFFS.SHIELD} sur ce Champion pendant 2 tours. La valeur du ${BUFFS.SHIELD} est égale à la quantité de soins en surplus reçus, jusqu'à 30 % des PV MAX du Champion.`,
          damage: "3.7*DEF",
          cooldown: 3,
          levelInfo: ["Dégâts +20%", "Soins +20%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Rugissement dévorant",
          description: `Attaque tous les ennemis.${RETURN}${RETURN}

Place un débuff ${DEBUFFS.LEECH} pendant 2 tours et un débuff ${DEBUFFS.PROVOKE} pendant 1 tour sur tous les ennemis.${RETURN}${RETURN}

Place également un buff ${BUFFS.COUNTER} sur cette Championne pendant 2 tours.`,
          damage: "4*DEF",
          cooldown: 3,
          levelInfo: ["Dégâts +20%", "Ignorer la RES +20%"],
          isPassive: false
        },
        {
          img: "assets/meta1.webp",
          name: "Métamorphe",
          description: `Fait passer cette Championne à sa Forme alternative. Accorde ensuite un Tour supplémentaire.`,
          cooldown: 4,
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Réjouissance du combat [P]",
          description: `Chaque fois que cette Championne frappe un ennemi sous débuff ${DEBUFFS.LEECH}, augmente la DÉF et les PV de cette Championne de 5 % (s'accumule jusqu'à 50 %).${RETURN}${RETURN}

Lorsqu'elle est attaquée par des ennemis dont l'ATQ est supérieure ou égale à leur DÉF, a 100 % de chances de placer un débuff ${DEBUFFS.ATK} de 50 % pendant 2 tours. Lorsqu'elle est attaquée par des ennemis dont la DÉF est supérieure à leur ATQ, a au lieu de cela 100 % de chances de placer un débuff ${DEBUFFS.DEF} de 60 % pendant 2 tours.${RETURN}${RETURN}

Lorsqu'elle est attaquée par des ennemis sous débuff ${DEBUFFS.LEECH}, a 50 % de chances de placer un débuff ${DEBUFFS.PROVOKE} pendant 1 tour.`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "20 145",
        "ATQ": "936",
        "DEF": "1 575",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "20"
      },
    aura: {
    img: "../../../../../assets/images/auras/defence.webp",
    description: `Augmente la statistique DEF des Alliés lors de toutes les Batailles de 35%`,
  },
  },
  form2: {
    type: "PV",
    spells: [
        {
          img: "assets/sort4.webp",
          name: "Axel de lames",
          description: `Attaque un ennemi.${RETURN}${RETURN}

Place un débuff ${DEBUFFS.BLOCK_BUFFS} pendant 2 tours. Il est impossible de résister à ce débuff si les PV de la cible sont inférieurs à ceux de cette Championne.`,
          damage: "0.23*HP",
          levelInfo: ["Dégâts +20%"],
          isPassive: false
        },
        {
          img: "assets/sort5.webp",
          name: "Exécution frénétique",
          description: `Attaque un ennemi.${RETURN}${RETURN}

Ignorera les buffs ${BUFFS.STONE_SKIN}. Les dégâts infligés par cette compétence augmentent de 50 % si les PV de la cible sont inférieurs à ceux de cette Championne.${RETURN}${RETURN}

Réinitialise le temps de recharge de cette compétence si la cible est tuée.`,
          damage: "0.3*HP",
          cooldown: 4,
          levelInfo: ["Dégâts +20%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort6.webp",
          name: "Séparateur d'âme",
          description: `Attaque un ennemi. Avant d'attaquer, place un buff ${BUFFS.CDAM} de 30 % sur tous les alliés pendant 2 tours.${RETURN}${RETURN}

Vole 50 % du Compteur de Tour de la cible. Vole au lieu de cela 100 % du Compteur de Tour si les PV de la cible sont inférieurs à ceux de cette Championne.${RETURN}${RETURN}

Détruit les PV MAX de la cible de 25 % des dégâts infligés. Détruit les PV MAX de la cible de 50 % des dégâts infligés si les PV MAX de la cible sont moins élevés que ceux de cette Championne.`,
          damage: "0.28*HP",
          cooldown: 3,
          levelInfo: ["Dégâts +20%", "Ignorer la RES +20%"],
          isPassive: false
        },
        {
          img: "assets/meta2.webp",
          name: "Métamorphe",
          description: `Fait passer cette Championne à sa Forme de base. Accorde ensuite un Tour supplémentaire.`,
          cooldown: 4,
          isPassive: false
        },
        {
          img: "assets/passif2.webp",
          name: "Liaison de rage [P]",
          description: `Ignorera 15 % de la DÉF d'une cible si les PV de la cible sont inférieurs à ceux de cette Championne. Ignorera également 15 % de la DÉF de la cible si la cible se trouve sous débuff ${DEBUFFS.LEECH}.${RETURN}${RETURN}

Chaque troisième compétence que cette Championne utilise attaquera au lieu de cela tous les ennemis.${RETURN}${RETURN}

Cette Championne rejoint chaque troisième compétence d'attaque utilisée par les alliés. Cette Championne utilisera sa compétence par défaut lorsqu'elle rejoint cette compétence.`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "26 430",
        "ATQ": "793",
        "DEF": "1 299",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "20"
      },
    aura: {
    img: "../../../../../assets/images/auras/defence.webp",
    description: `Augmente la statistique DEF des Alliés lors de toutes les Batailles de 35%`,
  },
  },
};
