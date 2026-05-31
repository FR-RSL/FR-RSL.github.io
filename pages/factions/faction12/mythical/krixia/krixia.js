const championForms = {
  form1: {
    type: "Soutien",
    spells: [
        {
          img: "assets/sort1.webp",
          name: "Entaille de lance-épée",
          description: `Attaque 2 fois un ennemi. Chaque frappe possède 50 % de chances d'augmenter d'1 tour la durée de tous les débuffs de la cible.`,
          damage: "2*ATQ",
          levelInfo: ["Dégâts +10%", "Ignorer la RES +20%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Lanterne de ruine",
          description: `Place un débuff ${DEBUFFS.RES} de 50 % et un débuff ${DEBUFFS.BLOCK_BUFFS} sur tous les ennemis pendant 2 tours. 

Réduit également le Compteur de Tour de chaque cible de 20 %.`,
          cooldown: 4,
          levelInfo: ["Ignorer la RES +20%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Apparition mortelle",
          description: `Attaque tous les ennemis. Retire tous les buffs dont disposent les ennemis.
Augmente également de 3 tours la durée des temps de recharge de toutes les compétences des ennemis.`,
          damage: "4*ATQ",
          cooldown: 5,
          levelInfo: ["Ignorer la RES +20%", "Temps de recharge -1"],
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
          name: "Sombre vigile [P]",
          description: `Immunisée contre les débuffs ${DEBUFFS.STUN}. Augmente la PRÉ de cette Championne de 1 point par tranche de 2 RÉS qu'elle possède.`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "20 970",
        "ATQ": "1 189",
        "DEF": "1 266",
        "VIT": "110",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
    aura: {
    img: "../../../../../assets/images/auras/res.webp",
    description: `Augmente la statistique RÉS des Alliés lors de toutes les Batailles de 80`,
  },
  },
  form2: {
    type: "Soutien",
    spells: [
        {
          img: "assets/sort4.webp",
          name: "Aile-lame",
          description: `Attaque 2 fois un ennemi. Chaque frappe possède 50 % de chances de réduire d'1 tour la durée de tous les débuffs sur un allié aléatoire.`,
          damage: "2*ATQ",
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort5.webp",
          name: "Pluie de damnation",
          description: `Attaque tous les ennemis. Place un buff ${BUFFS.BLOCK_DEBUFFS} et un buff ${BUFFS.RES} de 50 % sur tous les alliés pendant 2 tours. 

Ensuite, remplit le Compteur de Tour de tous les alliés de 20 %.`,
          damage: "4*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort6.webp",
          name: "Purge nocturne",
          description: `Retire tous les débuffs de tous les alliés, puis réduit de 3 tours le temps de recharge de toutes les compétences des alliés sauf celles de cette Championne. Le temps de recharge de cette compétence ne peut pas être réduit ou réinitialisé.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1"],
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
          name: "Reine des Ténèbres [P]",
          description: `Immunisée contre les débuffs ${DEBUFFS.SLEEP}. Augmente la VIT de cette Championne de 1 point par tranche de 10 RÉS qu'elle possède (s'accumule jusqu'à 50).`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "20 970",
        "ATQ": "1 189",
        "DEF": "1 266",
        "VIT": "110",
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
};
