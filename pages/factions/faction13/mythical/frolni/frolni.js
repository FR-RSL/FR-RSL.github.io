const championForms = {
  form1: {
    type: "PV",
    spells: [
        {
          img: "assets/sort1.webp",
          name: "Choc sismique",
          description: `Attaque un ennemi. Ignorera 5 % de la DÉF de la cible pour chaque buff dont bénéficie ce Champion.`,
          damage: "0.23*HP",
          levelInfo: ["Dégâts +20%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Larcin sanglant",
          description: `Attaque un ennemi. Vole 2 buffs à une cible ennemie. Il est impossible de résister à cet effet.${RETURN}${RETURN}

Si cette attaque passe en critique, répète une fois l'attaque.`,
          damage: "0.34*HP",
          cooldown: 4,
          levelInfo: ["Dégâts +20%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Exterminer les faibles",
          description: `Attaque tous les ennemis. Les dégâts de cette compétence augmentent de 30 % si les PV MAX de ce Champion sont plus élevés que les PV MAX de chaque cible.`,
          damage: "0.31*HP",
          cooldown: 4,
          levelInfo: ["Dégâts +20%", "Temps de recharge -1"],
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
          name: "Science infinie [P]",
          description: `Les DÉG C. de ce Champion sont augmentés de 1 % par tranche de 1 000 PV qu'il possède.${RETURN}${RETURN}

Augmente les PV MAX de ce Champion de 20 % (s'accumule jusqu'à 100 %) et sa VIT de 20 (s'accumule jusqu'à 100) dès que ce Champion tue un ennemi. Se réinitialise à chaque round.`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "22 305",
        "ATQ": "980",
        "DEF": "1 387",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "50",
        "PRÉ": "0"
      },
    aura: {
    img: "../../../../../assets/images/auras/hp.webp",
    description: `Augmente la statistique PV des Alliés lors de toutes les Batailles de 35%`,
  },
  },
  form2: {
    type: "Défense",
    spells: [
        {
          img: "assets/sort4.webp",
          name: "Arcs de douleur",
          description: `Attaque 2 fois un ennemi. Chaque frappe augmente la DÉF de ce Champion de 5 % (s'accumule jusqu'à 100 %).`,
          damage: "1.79*DEF",
          levelInfo: ["Dégâts +20%"],
          isPassive: false
        },
        {
          img: "assets/sort5.webp",
          name: "Procédure de broyage",
          description: `Attaque un ennemi. Soigne ce Champion à hauteur de 50 % de ses PV MAX.${RETURN}${RETURN}

Équilibre les PV de tous les alliés. Les niveaux de PV de tous les alliés seront amenés au niveau de l'allié ayant le plus de PV.`,
          damage: "5.31*DEF",
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort6.webp",
          name: "Moteur de guerre",
          description: `Place un buff ${BUFFS.ALLY_PROTECT} de 50 % sur tous les alliés sauf ce Champion pendant 2 tours. Place également un buff ${BUFFS.UNKILLABLE} sur ce Champion pendant 2 tours.${RETURN}${RETURN}

Place ensuite un buff ${BUFFS.SHIELD} de 2 tours sur les alliés ayant moins de 50 % de PV. La valeur du ${BUFFS.SHIELD} est proportionnelle à la DÉF de ce Champion.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
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
          name: "Armure ensorcelée [P]",
          description: `Lorsqu'il est attaqué, renvoie sur l'assaillant 80 % des dégâts reçus par ce Champion. Les débuffs placés sur ce Champion détruisent la PRÉ de celui qui les produit de 10 % (s'accumule jusqu'à 50 %).`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "21 975",
        "ATQ": "837",
        "DEF": "1 553",
        "VIT": "110",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "0"
      },
    aura: {
    img: "../../../../../assets/images/auras/hp.webp",
    description: `Augmente la statistique PV des Alliés lors de toutes les Batailles de 35%`,
  },
  },
};
