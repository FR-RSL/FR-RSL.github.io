const championForms = {
  form1: {
    type: "Attaque",
    spells: [
        {
          img: "assets/sort1.webp",
          name: "Entaille éclair",
          description: `Attaque un ennemi. Place un débuff ${DEBUFFS.DEF} de 60 % pendant 2 tours.

Place également un buff ${BUFFS.PERFECT_VEIL} sur ce Champion pendant 1 tour.`,
          damage: "3.9*ATQ",
          levelInfo: ["Dégâts +20%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Sombres dards",
          description: `Attaque tous les ennemis. Avant d'attaquer, place un buff ${BUFFS.ATK} de 50 % sur tous les alliés pendant 2 tours.

Ignorera 25 % de la DÉF de la cible si elle ne se trouve pas sous débuff ${DEBUFFS.BURN}. Ignorera 50 % de la DÉF de la cible si elle se trouve sous débuff ${DEBUFFS.BURN}.

Augmente ensuite d'1 tour la durée de tous les débuffs des ennemis.`,
          damage: "4*ATQ",
          cooldown: 3,
          levelInfo: ["Dégâts +20%", "Ignorer la RES +20%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Horde de bêtes-cloques",
          description: `Attaque tous les ennemis. Les dégâts augmentent de 25 % contre les cibles qui sont affligées de débuffs.

Active instantanément un déclenchement de tous les débuffs ${DEBUFFS.BURN} sur tous les ennemis. 

Si un ennemi ne se trouve pas sous débuff ${DEBUFFS.BURN}, lui inflige un débuff ${DEBUFFS.BURN} pendant 2 tours.`,
          damage: "4*ATQ",
          cooldown: 3,
          levelInfo: ["Dégâts +20%", "Ignorer la RES +20%"],
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
          name: "Brûle-chair [P]",
          description: `Chaque fois que ce Champion place un débuff ${DEBUFFS.BURN}, réduit la DÉF de la cible de 3 % (s'accumule jusqu'à 30 %). 

Pour chaque débuff ${DEBUFFS.BURN} sur l'équipe ennemie, augmente les DÉG. C. de ce Champion de 10 % (s'accumule jusqu'à 100 %). 

Dès que le débuff ${DEBUFFS.BURN} d'un ennemi s'active, augmente l'ATQ de ce Champion de 5 % (s'accumule jusqu'à 50 %). Se réinitialise à chaque round.`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "17 010",
        "ATQ": "1 586",
        "DEF": "1 134",
        "VIT": "103",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "20"
      },
    aura: {
    img: "../../../../../assets/images/auras/attack.webp",
    description: `Augmente la statistique ATQ des Alliés lors de toutes les Batailles de 35%`,
  },
  },
  form2: {
    type: "Défense",
    spells: [
        {
          img: "assets/sort4.webp",
          name: "Pinces écrasantes",
          description: `Attaque un ennemi. Place un buff ${BUFFS.PRE} de 50 % sur l'allié ayant la PRÉ la plus élevée pendant 2 tours et remplit son Compteur de Tour de 10 %.`,
          damage: "3.7*DEF",
          levelInfo: ["Dégâts +20%"],
          isPassive: false
        },
        {
          img: "assets/sort5.webp",
          name: "Cocon putride",
          description: `Attaque tous les ennemis. Place un débuff ${DEBUFFS.STUN} sur tous les ennemis pendant 1 tour. 

Place également deux buffs ${BUFFS.HEALS} de 15 % sur tous les alliés pendant 2 tours.`,
          damage: "2.5*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +20%", "Ignorer la RES +20%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort6.webp",
          name: "Et voici la Bête",
          description: `Place un débuff ${DEBUFFS.PROVOKE} sur tous les ennemis pendant 1 tour. 

Place également un buff ${BUFFS.STRENGTHEN} de 25 % et un buff ${BUFFS.DEF} de 60 % sur tous les alliés pendant 2 tours.`,
          cooldown: 5,
          levelInfo: ["Ignorer la RES +20%", "Temps de recharge -1", "Temps de recharge -1"],
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
          name: "Entomophobie [P]",
          description: `Lorsque le Champion est attaqué, a 100 % de chances de placer un débuff ${DEBUFFS.WEAKEN} de 25 % et 40 % de chances de placer un débuff ${DEBUFFS.STUN} sur l'assaillant pendant 1 tour. 

Augmente la DÉF de ce Champion d'1 point par tranche de 2 points d'ATQ lorsqu'il est sous sa Forme alternative.`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "18 165",
        "ATQ": "1 145",
        "DEF": "1 498",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "20"
      },
    aura: {
    img: "../../../../../assets/images/auras/attack.webp",
    description: `Augmente la statistique ATQ des Alliés lors de toutes les Batailles de 35%`,
  },
  },
};
