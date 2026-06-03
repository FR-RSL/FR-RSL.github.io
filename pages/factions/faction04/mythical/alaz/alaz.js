const championForms = {
  form1: {
    type: "Défense",
    spells: [
        {
          img: "assets/sort1.webp",
          name: "Hache à photons",
          description: `Attaque 2 fois un ennemi. Place une frappe supplémentaire si la cible se trouve sous buff ${BUFFS.SHIELD}.${RETURN}${RETURN}

Chaque frappe ignorera les buffs ${BUFFS.SHIELD}.`,
          damage: "2*DEF",
          levelInfo: ["Dégâts +20%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Tonnerre retentissant",
          description: `Attaque tous les ennemis. Avant d'attaquer, place un buff ${BUFFS.DEF} de 60% sur tous les alliés pendant 2 tours.${RETURN}${RETURN}

Place une frappe supplémentaire sur les cibles ayant moins de 50% de PV après la première frappe. Si les PV de la cible sont supérieurs ou égaux à 50% après la première frappe, réduit plutôt les PV MAX de la cible de 30% des dégâts infligés.`,
          damage: "4.2*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +20%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Regard ardent",
          description: `Place un débuff ${DEBUFFS.PROVOKE} sur l'ennemi ciblé pendant 2 tours. Il est impossible de résister à ce débuff si la cible possède moins de 50% de PV.${RETURN}${RETURN}

Place également sur tous les alliés un buff ${BUFFS.COUNTER} pendant 2 tours et un buff ${BUFFS.BLOCK_DAMAGE} pendant 1 tour.`,
          cooldown: 4,
          levelInfo: ["Ignorer la RES +20%", "Temps de recharge -1"],
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
          name: "Cuirasse du soleil [P]",
          description: `Augmente la DÉF de ce Champion de 5% chaque fois qu'il contre-attaque (s'accumule jusqu'à 100%). Se réinitialise à chaque round.`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "20 970",
        "ATQ": "980",
        "DEF": "1 476",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "50",
        "PRÉ": "0"
      },
    aura: {
    img: "../../../../../assets/images/auras/defence.webp",
    description: `Augmente la statistique DEF des Alliés lors de toutes les Batailles de 35%`,
  },
  },
  form2: {
    type: "PV",
    spells: [
        {
          img: "assets/sort4.webp",
          name: "Secousse d'éclair",
          description: `Attaque tous les ennemis. Place une frappe supplémentaire sur les ennemis sous débuffs ${DEBUFFS.BURN}.`,
          damage: "0.18*PV",
          levelInfo: ["Dégâts +20%"],
          isPassive: false
        },
        {
          img: "assets/sort5.webp",
          name: "Éruption solaire",
          description: `Attaque tous les ennemis. Place un débuff ${DEBUFFS.BURN} pendant 2 tours. Les ennemis sous buff ${BUFFS.STONE_SKIN} ne peuvent pas résister à ce débuff.${RETURN}${RETURN}

Ensuite, active instantanément un déclenchement de tous les débuffs ${DEBUFFS.BURN} sur les ennemis sous buff ${BUFFS.STONE_SKIN}.${RETURN}${RETURN}

Place également un débuff ${DEBUFFS.TRUE_FEAR} sur tous les ennemis pendant 1 tour.`,
          damage: "0.3*PV",
          cooldown: 3,
          levelInfo: ["Dégâts +20%", "Ignorer la RES +20%"],
          isPassive: false
        },
        {
          img: "assets/sort6.webp",
          name: "Rayon régénérant",
          description: `Restaure totalement tous les PV MAX détruits des alliés, puis soigne tous les alliés de 30% des PV MAX de ce Champion.${RETURN}${RETURN}

Place également un buff ${BUFFS.STRENGTHEN} de 25% et un buff ${BUFFS.RES} de 50% sur tous les alliés pendant 2 tours.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1"],
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
          name: "Coeur des cieux [P]",
          description: `Augmente les PV de ce Champion de 6 points par tranche de 1 point de DÉF dont il dispose lorsqu'il est sous sa Forme alternative.${RETURN}${RETURN}

Augmente de 20% les chances que les compétences des ennemis ne s'activent pas lorsqu'ils se trouvent sous débuff ${DEBUFFS.FEAR} ou ${DEBUFFS.TRUE_FEAR} tout en étant affligés d'un débuff ${DEBUFFS.BURN}.`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "23 955",
        "ATQ": "958",
        "DEF": "1 299",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "50",
        "PRÉ": "0"
      },
    aura: {
    img: "../../../../../assets/images/auras/defence.webp",
    description: `Augmente la statistique DEF des Alliés lors de toutes les Batailles de 35%`,
  },
  },
};
