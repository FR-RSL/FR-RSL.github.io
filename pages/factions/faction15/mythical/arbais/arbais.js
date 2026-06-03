const championForms = {
  form1: {
    type: "Soutien",
    spells: [
        {
          img: "assets/sort1.webp",
          name: "Lame-ouragan",
          description: `Attaque tous les ennemis. Possède 40% de chances de placer un débuff ${DEBUFFS.LOCK_ACTIVE} pendant 1 tour.`,
          damage: "3.75*ATQ",
          levelInfo: ["Dégâts +10%", "Ignorer la RES +20%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Renaissance verdoyante",
          description: `Retire tous les buffs dont disposent les ennemis. Augmente d'1 tour la durée de tous les buffs alliés.${RETURN}${RETURN}

Place ensuite un buff ${BUFFS.REVIVE_ON_DEATH} sur tous les alliés pendant 2 tours.`,
          cooldown: 4,
          levelInfo: ["Ignorer la RES +20%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Murmure harmonieux",
          description: `Remplit le Compteur de Tour de tous les alliés de 30%, puis place un buff ${BUFFS.ATK} de 50% et un buff ${BUFFS.PRE} de 50% sur tous les alliés pendant 2 tours.`,
          cooldown: 5,
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
          name: "Étreinte de Pierrépine [P]",
          description: `Dès qu'un allié disposant d'un buff ${BUFFS.REVIVE_ON_DEATH} placé par cette Championne se fait attaquer, possède 30% de chances de placer un débuff ${DEBUFFS.PETRIFICATION} sur l'assaillant pendant 1 tour.`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "22 305",
        "ATQ": "980",
        "DEF": "1 387",
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
  form2: {
    type: "PV",
    spells: [
        {
          img: "assets/sort4.webp",
          name: "Lance-rocher",
          description: `Attaque un ennemi. Réduit le Compteur de Tour de la cible de 30%.${RETURN}${RETURN}

Place ensuite un buff ${BUFFS.HEALS} de 15% sur cette Championne pendant 1 tour. Place également un buff ${BUFFS.HEALS} de 15% sur l'allié ayant le moins de PV, sauf cette Championne, pendant 1 tour.`,
          damage: "0.27*PV",
          levelInfo: ["Dégâts +10%", "Ignorer la RES +20%"],
          isPassive: false
        },
        {
          img: "assets/sort5.webp",
          name: "Brûleronce",
          description: `Attaque tous les ennemis. Place un débuff ${DEBUFFS.LEECH} et un débuff ${DEBUFFS.BURN} pendant 2 tours.`,
          damage: "0.25*PV",
          cooldown: 3,
          levelInfo: ["Dégâts +10%", "Ignorer la RES +20%"],
          isPassive: false
        },
        {
          img: "assets/sort6.webp",
          name: "Clameur du Bois de Brume",
          description: `Place deux buffs ${BUFFS.HEALS} de 15% sur tous les alliés pendant 2 tours.${RETURN}${RETURN}

Place également un buff ${BUFFS.TAUNT} sur cette Championne pendant 2 tours, ainsi qu'un buff ${BUFFS.STONE_SKIN} pendant 1 tour.`,
          cooldown: 5,
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
          name: "Fouillis d'épine [P]",
          description: `Lorsqu'elle est attaquée, place un débuff ${DEBUFFS.SPD} de 30% sur l'assaillant pendant 2 tours. Se produit une fois par frappe.${RETURN}${RETURN}

Réduit également de 20% les dégâts infligés par des compétences pour tous les alliés. Cette Championne recevra ces dégâts à la place.`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "23 955",
        "ATQ": "958",
        "DEF": "1 299",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "20"
      },
    aura: {
    img: "../../../../../assets/images/auras/speed.webp",
    description: `Augmente la statistique VIT des Alliés lors de toutes les Batailles de 25%`,
  },
  },
};
