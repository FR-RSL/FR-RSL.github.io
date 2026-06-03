const championForms = {
  form1: {
    type: "Attaque",
    spells: [
        {
          img: "assets/sort1.webp",
          name: "Entaille de souffrance",
          description: `Attaque 2 fois un ennemi. Possède 50 % de chances de retirer 1 buff aléatoire sur la cible.${RETURN}${RETURN}

${PASSIVE}

Dès qu'un ennemi frappe ce Champion ou un allié, possède 50 % de chances de contre-attaquer avec cette compétence. Ces chances augmentent de 10 % pour chaque débuff sur l'ennemi.`,
          damage: "2.3*(ATQ+ACC)",
          levelInfo: ["Dégâts +15%", "Ignorer la RES +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Accord diabolique",
          description: `Attaque 2 fois un ennemi.${RETURN}${RETURN}

Avant d'attaquer, échange ses PV avec un ennemi, puis vole tous ses buffs. Transfère également tous les débuffs de ce Champion sur la cible et place un débuff ${DEBUFFS.SCEAU} sur la cible pendant 2 tours. Il est impossible de retirer ce débuff.${RETURN}${RETURN}

Il est impossible de résister à ce débuff et de le bloquer si la cible possède 50 % de PV ou moins.`,
          damage: "3.5*(ATQ+ACC)",
          cooldown: 4,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Trinité de douleur",
          description: `Attaque 3 fois un ennemi. La première frappe place un débuff ${DEBUFFS.LOCK_PASSIF} pendant 2 tours. Il est impossible de retirer ce débuff.${RETURN}${RETURN}

La deuxième frappe place un débuff ${DEBUFFS.LOCK_ACTIVE} pendant 2 tours. Il est impossible de retirer ce débuff.${RETURN}${RETURN}

La troisième frappe vole 100 % du Compteur de Tour de la cible.`,
          damage: "2.7*(ATQ+ACC)",
          cooldown: 3,
          levelInfo: ["Ignorer la RES +15%", "Ignorer la RES +15%"],
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
          name: "Avatar d'anarchie [P]",
          description: `Chaque frappe infligée par ce Champion possède 50 % de chances d'appliquer un effet de ${PROP_DEBUFF} qui prend 1 débuff aléatoire de la cible pour le placer sur tous les ennemis.${RETURN}${RETURN}

Dès que ce Champion tue un ennemi, possède 100 % de chances d'appliquer un effet de ${PROP_DEBUFF}, prenant tous les débuffs de la cible pour les placer sur tous les ennemis. Il est impossible de résister à cet effet.`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "19 155",
        "ATQ": "1 476",
        "DEF": "1 101",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "20"
      },
    aura: {
    img: "../../../../../assets/images/auras/speed.webp",
    description: `Augmente la statistique VIT des Alliés lors des les batailles d'Arène de 33%`,
  },
  },
  form2: {
    type: "Attaque",
    spells: [
        {
          img: "assets/sort4.webp",
          name: "Dard de démon",
          description: `Attaque 2 fois un ennemi. Soigne ce Champion à hauteur de 20 % des dégâts infligés.${RETURN}${RETURN}

${PASSIVE}

Dès qu'un ennemi frappe ce Champion ou un allié, possède 50 % de chances de contre-attaquer avec cette compétence. Ces chances augmentent de 10 % pour chaque débuff sur l'ennemi.`,
          damage: "1.8*(ATQ+ACC)",
          levelInfo: ["Dégâts +15%", "Dégâts +15%"],
          isPassive: false
        },
        {
          img: "assets/sort5.webp",
          name: "Douleur singulière",
          description: `Attaque tous les ennemis. Ignorera les buffs ${BUFFS.SHIELD}.${RETURN}${RETURN}

Ignorera également les buffs ${BUFFS.ALLY_PROTECT} lorsqu'il attaque des ennemis affligés d'1 débuff ou plus et les buffs ${BUFFS.UNKILLABLE} lorsqu'il attaque des ennemis affligés de 2 débuffs ou plus.`,
          damage: "4*(ATQ+ACC)",
          cooldown: 4,
          levelInfo: ["Dégâts +20%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort6.webp",
          name: "Étoiles infernales",
          description: `Attaque 2 fois tous les ennemis.${RETURN}${RETURN}

Si une cible est tuée par cette compétence lorsqu'elle se trouve sous 3 débuffs différents ou plus, lui inflige un débuff ${DEBUFFS.BLOCK_REA}.${RETURN}${RETURN}

Soigne également ce Champion à hauteur de 30 % des dégâts infligés.`,
          damage: "2.5*(ATQ+ACC)",
          cooldown: 5,
          levelInfo: ["Dégâts +20%", "Temps de recharge -1"],
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
          name: "Karnage éternel [P]",
          description: `Les DÉG C. de ce Champion augmentent de 1 % par tranche de 3 points de PRÉ qu'il possède.${RETURN}${RETURN}

Ignore 10 % de la DÉF de la cible pour chaque débuff dont elle est affligée.`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "14 370",
        "ATQ": "1 960",
        "DEF": "936",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "20"
      },
    aura: {
    img: "../../../../../assets/images/auras/speed.webp",
    description: `Augmente la statistique VIT des Alliés lors des les batailles d'Arène de 33%`,
  },
  },
};
