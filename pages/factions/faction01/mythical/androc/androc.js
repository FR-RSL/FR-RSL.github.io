const championForms = {
  form1: {
    type: "Défense",
    spells: [
        {
          img: "assets/sort1.webp",
          name: "Morsure de la meute",
          description: `Attaque un ennemi. Place un buff ${BUFFS.DEF} de 60% sur tous les alliés pendant 1 tour.`,
          damage: "3.3*DEF",
          levelInfo: ["Dégâts +20%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Griffe rayonnante",
          description: `Attaque tous les ennemis.${RETURN}${RETURN}

Augmente d'1 tour la durée de tous les buffs alliés. Soigne également tous les alliés de 4% de leurs PV MAX pour chaque buff dont la durée a été augmentée.`,
          damage: "3.5*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +20%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Rocher de Werinbur",
          description: `Place un buff ${BUFFS.RES} de 50%, un buff ${BUFFS.STRENGTHEN} de 25% et un buff ${BUFFS.HEALS} de 15% sur tous les alliés pendant 2 tours.${RETURN}${RETURN}

Place pendant 2 tours un buff ${BUFFS.HEALS} de 15% sur tous les alliés qui ont moins de 50% de PV.${RETURN}${RETURN}

Remplit également le Compteur de Tour de tous les alliés de 15%.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/meta1.webp",
          name: "Métamorphe",
          description: `Fait passer ce Champion à sa Forme alternative. Accorde ensuite un Tour supplémentaire.`,
          cooldown: 4,
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Chevaliers sauvages [P]",
          description: `Augmente la RÉS de chaque allié de 10 points pour chaque buff sur tous les alliés.${RETURN}${RETURN}

Les coups critiques infligés par les alliés remplissent les Compteurs de Tour de tous les alliés de 5%. Se produit une fois par compétence.${RETURN}${RETURN}

Si plusieurs Champions de l'équipe disposent de cette Compétence, une seule sera activée. Cette compétence ne s'activera pas sur les copies en double de ce Champion si ce Champion spécifique est mort.`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "20 640",
        "ATQ": "859",
        "DEF": "1 619",
        "VIT": "110",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "0"
      },
    aura: {
    img: "../../../../../assets/images/auras/defence.webp",
    description: `Augmente la statistique DEF des Alliés lors de toutes les Batailles de 35%`,
  },
  },
  form2: {
    type: "Soutien",
    spells: [
        {
          img: "assets/sort4.webp",
          name: "Assaut d'Épine-dorée",
          description: `Attaque un ennemi. Possède 50% de chances de placer un débuff ${DEBUFFS.DEF} de 60% sur tous les ennemis pendant 1 tour.`,
          damage: "3.6*DEF",
          levelInfo: ["Dégâts +20%"],
          isPassive: false
        },
        {
          img: "assets/sort5.webp",
          name: "Brise-palissade",
          description: `Attaque tous les ennemis. Place un débuff ${DEBUFFS.RES} de 50%, un débuff ${DEBUFFS.WEAKEN} de 25% et un débuff ${DEBUFFS.UNFEEBLE} sur tous les ennemis pendant 2 tours.${RETURN}${RETURN}

Si les ennemis possèdent 50% de PV ou moins, il est impossible de retirer le débuff ${DEBUFFS.UNFEEBLE}.${RETURN}${RETURN}

Réduit également le Compteur de Tour de tous les ennemis de 15%.`,
          damage: "4*DEF",
          cooldown: 4,
          levelInfo: ["Ignorer la RES +20%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort6.webp",
          name: "Rugissement de Kitherus",
          description: `Attaque tous les ennemis. Avant d'attaquer, retire tous les buffs de tous les ennemis et place un débuff ${DEBUFFS.BLOCK_BUFFS} sur tous les ennemis sans buff pendant 2 tours. Si la cible est un Boss, les dégâts infligés sont équivalents à 10% de ses PV MAX.`,
          damage: "0.1*Target Max HP",
          cooldown: 4,
          levelInfo: ["Ignorer la RES +20%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/meta2.webp",
          name: "Métamorphe",
          description: `Fait passer ce Champion à sa Forme de base. Accorde ensuite un Tour supplémentaire.`,
          cooldown: 4,
          isPassive: false
        },
        {
          img: "assets/passif2.webp",
          name: "Coeur-de-lion [P]",
          description: `Augmente la PRÉ de chaque allié de 10 points pour chaque buff sur tous les ennemis.${RETURN}${RETURN}

Chaque coup critique infligé par les alliés réduit les Compteurs de Tour de tous les ennemis de 5%.${RETURN}${RETURN}

Si plusieurs Champions de l'équipe disposent de cette Compétence, une seule sera activée. Cette compétence ne s'activera pas sur les copies en double de ce Champion si ce Champion spécifique est mort.`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "23 955",
        "ATQ": "859",
        "DEF": "1 398",
        "VIT": "115",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
    aura: {
    img: "../../../../../assets/images/auras/defence.webp",
    description: `Augmente la statistique DEF des Alliés lors de toutes les Batailles de 35%`,
  },
  },
};
