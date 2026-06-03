const championForms = {
  form1: {
    type: "Attaque",
    spells: [
        {
          img: "assets/sort1.webp",
          name: "Griffe-lune",
          description: `Attaque un ennemi. Place un débuff ${DEBUFFS.DEF} de 60% pendant 2 tours.`,
          damage: "4.05*ATQ",
          levelInfo: ["Dégâts +10%", "Ignorer la RES +20%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Croissant écarlate",
          description: `Attaque 2 fois un ennemi.${RETURN}${RETURN}

Ignorera 15% de la DÉF de la cible ainsi que les buffs ${BUFFS.STONE_SKIN}, ${BUFFS.STRENGTHEN}, ${BUFFS.ALLY_PROTECT} et ${BUFFS.SHIELD}.${RETURN}${RETURN}

Place un débuff ${DEBUFFS.BLOCK_REA} si la cible est tuée.`,
          damage: "2.8*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +20%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Cadeau de clair de lune",
          description: `Place un buff ${BUFFS.ATK} de 50%, un buff ${BUFFS.CRATE} de 30% et un buff ${BUFFS.CDAM} de 30% sur cette Championne pendant 3 tours.${RETURN}${RETURN}

Accorde un Tour supplémentaire.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
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
          name: "Chasse implacable [P]",
          description: `Soigne cette Championne à hauteur de 20% des dégâts infligés. Place un buff ${BUFFS.REVIVE_ON_DEATH} sur cette Championne pendant 2 tours lorsqu'elle tue un ennemi.`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "16 680",
        "ATQ": "1 652",
        "DEF": "1 090",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "20"
      },
    aura: {
    img: "../../../../../assets/images/auras/crit.webp",
    description: `Augmente la statistique TAUX DE C. des Alliés lors de toutes les Batailles de 27%`,
  },
  },
  form2: {
    type: "Attaque",
    spells: [
        {
          img: "assets/sort4.webp",
          name: "Esprit de la meute",
          description: `Attaque tous les ennemis. Cette attaque ne déclenchera pas de contre-attaques.${RETURN}${RETURN}

Place une frappe supplémentaire sur les ennemis sous débuffs ${DEBUFFS.TRUE_FEAR}.`,
          damage: "2.5*ATQ",
          levelInfo: ["Dégâts +10%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort5.webp",
          name: "Déchiquette-vie",
          description: `Attaque 2 fois tous les ennemis. Place un débuff ${DEBUFFS.TRUE_FEAR} pendant 2 tours.${RETURN}${RETURN}

Cette attaque ne déclenchera pas de contre-attaques. Ignorera également les buffs ${BUFFS.UNKILLABLE} et ${BUFFS.BLOCK_DAMAGE}.`,
          damage: "2.15*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +20%", "Ignorer la RES +20%", "Temps de recharge -1"],
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
          name: "Étreindre la bête [P]",
          description: `Augmente l'ATQ et les DÉG C. de cette Championne de 20% lorsqu'elle se trouve sous sa Forme alternative.`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "16 680",
        "ATQ": "1 652",
        "DEF": "1 090",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "20"
      },
    aura: {
    img: "../../../../../assets/images/auras/crit.webp",
    description: `Augmente la statistique TAUX DE C. des Alliés lors de toutes les Batailles de 27%`,
  },
  },
};
