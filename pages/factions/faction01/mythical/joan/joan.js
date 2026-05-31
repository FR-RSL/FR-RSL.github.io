const championForms = {
  form1: {
    type: "Soutien",
    spells: [
        {
          img: "assets/sort1.webp",
          name: "Lance sacrée",
          description: `Attaque un ennemi. 

Soigne tous les alliés. La valeur du soin est proportionnelle à leur RÉS et 5 % de leurs PV MAX. 

A 35 % de chances d'appliquer un effet [Propagation de Buffs], prenant un buff aléatoire sur chaque allié pour le placer sur tous les alliés.`,
          damage: "ATQ*(6+RES/1000)",
          levelInfo: ["Soins +20%", "Chances de Buff/Debuff +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Symbole d'espoir",
          description: `Retire tous les débuffs sur tous les alliés. Place ensuite un buff ${BUFFS.ATK} de 50 % et un buff ${BUFFS.RES} de 50 % sur tous les alliés pendant 3 tours. 

Remplit également les Compteurs de Tour de tous les alliés de 15 %.`,
          cooldown: 4,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Foi retrouvée",
          description: `Ranime un seul allié avec 75 % de PV, puis place un buff ${BUFFS.UNKILLABLE} sur cet allié pendant 2 tours. 

Active ensuite un effet ${INSTANT} sur l'allié ranimé.`,
          cooldown: 4,
          levelInfo: ["Temps de recharge -1"],
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
          name: "Lames radieuses",
          description: `Attaque tous les ennemis. Cette attaque inflige à chaque cible individuelle des dégâts sur cible unique plutôt que des dégâts de zone. 

Dès que cette Championne contre-attaque, augmente l'effet Ignorer la DÉF de cette compétence de 5 % (s'accumule jusqu'à 25 %).

${PASSIVE}

Inflige le double de dégâts lors d'une contre-attaque.`,
          cooldown: 3,
          isPassive: true
        }
      ],
    stats: {
        "PV": "22 635",
        "ATQ": "958",
        "DEF": "1 387",
        "VIT": "109",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "0"
      },
    aura: {
    img: "../../../../../assets/images/auras/res.webp",
    description: `Augmente la statistique RÉS des Alliés lors de toutes les Batailles de 80`,
  },
  },
  form2: {
    type: "Attaque",
    spells: [
        {
          img: "assets/sort4.webp",
          name: "Percé par la lumière",
          description: `Attaque tous les ennemis. Avant d'attaquer, vole 25 % du Compteur de Tour de chaque ennemi. Il est impossible de résister à cet effet.

Les dégâts infligés par cette compétence augmentent de 35 % contre les ennemis dont la RÉS est inférieure à celle de cette Championne. 

Place ensuite un buff ${BUFFS.BLOCK_DAMAGE} sur cette Championne pendant 2 tours.`,
          damage: "ATQ*(2.9+RES/1000)",
          levelInfo: ["Dégâts +20%"],
          isPassive: false
        },
        {
          img: "assets/sort5.webp",
          name: "Balayage séraphique",
          description: `Attaque 3 fois un ennemi. 

Ignorera les buffs ${BUFFS.SHIELD}, ${BUFFS.BLOCK_DAMAGE} et ${BUFFS.UNKILLABLE}. Ignorera également 35 % de la DÉF contre les cibles dont la RÉS est inférieure à celle de cette Championne.
 

Si la cible est tuée et que sa RÉS est inférieure à celle de cette Championne, lui inflige un débuff ${DEBUFFS.BLOCK_REA}. Si la cible n'est pas tuée, accorde au lieu de ça un Tour supplémentaire.`,
          damage: "ATQ*(4.4+RES/1000)",
          cooldown: 4,
          levelInfo: ["Dégâts +20%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort6.webp",
          name: "Métamorphe",
          description: `Fait passer cette Championne à sa Forme de base. Accorde ensuite un Tour supplémentaire.`,
          damage: "ATQ*(2+RES/1000)",
          cooldown: 5,
          levelInfo: ["Dégâts +20%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/meta2.webp",
          name: "Metamorph",
          description: `Transforms this Champion into their Base Form. Then grants an Extra Turn.`,
          cooldown: 4,
          isPassive: false
        },
        {
          img: "assets/passif2.webp",
          name: "Lumaya's Glory [P]",
          description: `Decreases the damage this Champion receives from enemies whose RES is lower than this Champion’s by 15%. <br><br>Places on this Champion a protected ${BUFFS.COUNTER} buff for 1 turn at the end of their turn.`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "19 320",
        "ATQ": "1 520",
        "DEF": "1 046",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "50",
        "PRÉ": "0"
      },
    aura: {
    img: "../../../../../assets/images/auras/res.webp",
    description: `Augmente la statistique RÉS des Alliés lors de toutes les Batailles de 80`,
  },
  },
};
