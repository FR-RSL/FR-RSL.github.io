const championForms = {
  form1: {
    type: "Soutien",
    spells: [
        {
          img: "assets/sort1.webp",
          name: "Tempête de Serpentia",
          description: `Attaque un ennemi.${RETURN}${RETURN}

Soigne tous tes alliés à hauteur de 5 % des PV MAX de cette Championne.${RETURN}${RETURN}

Remplit le Compteur de Tour de cette Championne de 5 % pour chaque allié vivant et de 2,5 % supplémentaires pour chaque ennemi vivant.`,
          damage: "0.27*PV",
          levelInfo: ["Dégâts +10%", "Soins +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Fortitude dérangée",
          description: `Retire tous les débuffs sur tous les alliés, puis place un buff ${BUFFS.PERFECT_VEIL} sur tous les alliés, sauf cette Championne, pendant 2 tours.${RETURN}${RETURN}

Place un buff ${BUFFS.STONE_SKIN} sur cette Championne pendant 1 tour.`,
          cooldown: 4,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Régénération anormale",
          description: `Ranime tous les alliés morts avec 50 % de PV et 50 % de Compteur de Tour.${RETURN}${RETURN}

Place un buff ${BUFFS.UNKILLABLE} sur tous les alliés pendant 2 tours.`,
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
          name: "Protection haineuse [P]",
          description: `Tous les 7 tours, équilibre les PV de tous les alliés. Les niveaux de PV de tous les alliés seront ramenés au niveau de PV moyen de l'équipe.${RETURN}${RETURN}

Les alliés recevront 1 % de dégâts en moins par tranche de 2 % de PV perdus (s'accumule jusqu'à 25 %). Si plusieurs Champions de l'équipe disposent de cette Compétence, une seule sera activée. Cette compétence ne s'activera pas sur les copies en double de cette Championne si cette Championne spécifique est morte.`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "22 470",
        "ATQ": "925",
        "DEF": "1 432",
        "VIT": "115",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "0"
      },
    aura: {
    img: "../../../../../assets/images/auras/speed.webp",
    description: `Augmente la statistique VIT des Alliés lors de toutes les Batailles de 25%`,
  },
  },
  form2: {
    type: "Soutien",
    spells: [
        {
          img: "assets/sort4.webp",
          name: "Je te trouverai",
          description: `Attaque un ennemi.${RETURN}${RETURN}

Détruit la VIT de la cible de 3 points (s'accumule jusqu'à 30).${RETURN}${RETURN}

Réduit le Compteur de Tour de la cible de 5 % pour chaque allié vivant et de 2,5 % supplémentaires pour chaque ennemi vivant.`,
          damage: "0.29*PV",
          levelInfo: ["Ignorer la RES +20%"],
          isPassive: false
        },
        {
          img: "assets/sort5.webp",
          name: "Sinistre massacre",
          description: `Attaque tous les ennemis. Avant d'attaquer, vole tous les buffs de tous les ennemis.${RETURN}${RETURN}

Place un débuff ${DEBUFFS.BLOCK_BUFFS} et un débuff ${DEBUFFS.DEF} de 60 % sur tous les ennemis pendant 2 tours. Si la VIT d'un ennemi est inférieure à la VIT de cette Championne, ces débuffs seront protégés.`,
          damage: "0.27*PV",
          cooldown: 4,
          levelInfo: ["Ignorer la RES +20%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort6.webp",
          name: "Murmure somnolent",
          description: `Place un débuff ${DEBUFFS.SLEEP} pendant 1 tour et un débuff ${DEBUFFS.SPD} de 30 % pendant 2 tours sur tous les ennemis. Si la VIT d'un ennemi est inférieure à la VIT de cette Championne, le débuff ${DEBUFFS.SPD} sera protégé.${RETURN}${RETURN}

Réduit ensuite le Compteur de Tour de tous les ennemis de 25 %.`,
          cooldown: 4,
          levelInfo: ["Ignorer la RES +20%", "Temps de recharge -1"],
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
          name: "Ils sont inférieurs [P]",
          description: `Cette Championne est immunisée contre les débuffs ${DEBUFFS.LOCK_ACTIVE}.${RETURN}${RETURN}

Lorsque les alliés attaquent, leurs dégâts sont augmentés de 25 % du Compteur de Tour actuel de leur cible. Si plusieurs Champions de l'équipe disposent de cette Compétence, une seule sera activée. Cette compétence ne s'activera pas sur les copies en double de cette Championne si cette Championne spécifique est morte.`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "22 470",
        "ATQ": "925",
        "DEF": "1 432",
        "VIT": "115",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
    aura: {
    img: "../../../../../assets/images/auras/speed.webp",
    description: `Augmente la statistique VIT des Alliés lors de toutes les Batailles de 25%`,
  },
  },
};
