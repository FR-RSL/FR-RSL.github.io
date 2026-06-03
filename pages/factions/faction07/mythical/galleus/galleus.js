const championForms = {
  form1: {
    type: "Défense",
    spells: [
        {
          img: "assets/sort1.webp",
          name: "Coupure d'aile",
          description: `Attaque un ennemi. Place un débuff ${DEBUFFS.SPD} de 30 % pendant 2 tours.${RETURN}${RETURN}

Lors d'une contre-attaque, les dégâts infligés par cette compétence sont basés sur la DÉF de ce Champion et les PV MAX de l'ennemi.`,
          damage: "3.6*DEF",
          levelInfo: ["Dégâts +20%", "Ignorer la RES +20%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Sarcasme tranchant",
          description: `Attaque tous les ennemis.${RETURN}${RETURN}

Place un débuff ${DEBUFFS.PROVOKE} pendant 1 tour. Si la cible est un Boss, place au lieu de ça un débuff ${DEBUFFS.PROVOKE} pendant 2 tours.${RETURN}${RETURN}

Place également un buff ${BUFFS.UNKILLABLE} sur ce Champion pendant 1 tour et un buff ${BUFFS.COUNTER} pendant 2 tours.`,
          damage: "4.7*DEF",
          cooldown: 3,
          levelInfo: ["Dégâts +20%", "Ignorer la RES +20%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Appel de Crête-sang",
          description: `Rétablit totalement les PV MAX détruits de tous alliés.${RETURN}${RETURN}

Place également un buff ${BUFFS.REVIVE_ON_DEATH} et un buff ${BUFFS.DEF} de 60 % sur tous les alliés pendant 2 tours.${RETURN}${RETURN}

Accorde ensuite un Tour supplémentaire.`,
          cooldown: 4,
          levelInfo: ["Temps de recharge -1"],
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
          name: "Régner sur le perchoir [P]",
          description: `Renvoie sur l'assaillant 50 % des dégâts reçus par ce Champion.${RETURN}${RETURN}

Si l'assaillant est un Boss, renvoie 100 % des dégâts reçus par ce Champion.${RETURN}${RETURN}

Soigne également ce Champion à hauteur de 50 % des dégâts reçus.`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "22 140",
        "ATQ": "881",
        "DEF": "1 498",
        "VIT": "101",
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
    type: "Défense",
    spells: [
        {
          img: "assets/sort4.webp",
          name: "Cri fulminant",
          description: `Attaque un ennemi. Place une frappe supplémentaire sur tous les ennemis sous débuffs ${DEBUFFS.DEF}.`,
          damage: "4*DEFMultiplier: 3*DEF",
          levelInfo: ["Dégâts +20%"],
          isPassive: false
        },
        {
          img: "assets/sort5.webp",
          name: "Ciel déchiré",
          description: `Attaque tous les ennemis.${RETURN}${RETURN}

Avant d'attaquer, place un débuff ${DEBUFFS.DEF} de 60 % pendant 2 tours. Il est impossible de résister à cet effet.${RETURN}${RETURN}

Les dégâts augmentent de 10 % pour chaque ennemi sous débuff ${DEBUFFS.DEF}. Vole également 20 % du Compteur de Tour de chaque ennemi.`,
          damage: "4.5*DEF",
          cooldown: 3,
          levelInfo: ["Dégâts +20%", "Ignorer la RES +20%"],
          isPassive: false
        },
        {
          img: "assets/sort6.webp",
          name: "Torture sonique",
          description: `Attaque tous les ennemis.${RETURN}${RETURN}

Ignorera 20 % de la DÉF de chaque cible si elle ne dispose d'aucun buff.${RETURN}
Ignore les buffs ${BUFFS.BLOCK_DAMAGE}.${RETURN}${RETURN}

Les dégâts augmentent de 15 % pour chaque buff sur chaque cible.${RETURN}${RETURN}

Réduit la durée de tous les buffs des ennemis de 2 tours.`,
          damage: "4.7*DEF*(1+0.15*Active Target Buffs)",
          cooldown: 4,
          levelInfo: ["Dégâts +20%", "Ignorer la RES +20%"],
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
          name: "Expérience impie [P]",
          description: `Immunisé contre les débuffs ${DEBUFFS.STUN}, ${DEBUFFS.GEL}, ${DEBUFFS.SLEEP}, ${DEBUFFS.FEAR}, ${DEBUFFS.TRUE_FEAR}, ${DEBUFFS.PROVOKE}, ${DEBUFFS.SHEEP} et ${DEBUFFS.PETRIFICATION}.${RETURN}${RETURN}

Réinitialise également de façon aléatoire le temps de recharge de l'une des compétences de ce Champion chaque fois qu'il tue un ennemi. Se produit une fois par compétence.`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "22 140",
        "ATQ": "881",
        "DEF": "1 498",
        "VIT": "101",
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
