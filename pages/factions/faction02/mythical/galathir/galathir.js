const championForms = {
  form1: {
    type: "Soutien",
    spells: [
        {
          img: "assets/sort1.webp",
          name: "Tempête astrale",
          description: `Attaque tous les ennemis.${RETURN}${RETURN}

Remplit le Compteur de Tour de tous les alliés de 10 %. Remplit également le Compteur de Tour de chaque allié de 5 % supplémentaires s'ils possèdent des buffs actifs que ce Champion leur a accordés.`,
          damage: "3.5*ATQ",
          levelInfo: ["Dégâts +20%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Embryon stellaire",
          description: `Retire tous les débuffs sur tous les alliés, puis les soigne à hauteur de 25 % des PV MAX de ce Champion.${RETURN}${RETURN}

Remplit également le Compteur de tour de tous les alliés de 15 % et leur accorde un buff ${BUFFS.BLOCK_DEBUFFS} pendant 2 tours.`,
          cooldown: 4,
          levelInfo: ["Soins +20%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Lever le voile",
          description: `Ranime tous les alliés morts avec 50 % de PV et 50 % de Compteur de Tour.${RETURN}${RETURN}

Place également un buff ${BUFFS.PERFECT_VEIL} sur tous les alliés sauf ce Champion pendant 2 tours.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
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
          name: "Au-delà éternel [P]",
          description: `${PASSIVE}

Ce Champion reçoit 5 % de dégâts en moins par tranche de 100 RÉS qu'il possède (s'accumule jusqu'à 25 %).${RETURN}${RETURN}

${ACTIVE}

Empêche la mort de ce Champion et le garde vivant avec 1 PV lorsqu'il reçoit des dégâts mortels, puis égalise ses PV. Le niveau de PV de ce Champion sera ramené au niveau de PV moyen de l'équipe.`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "22 305",
        "ATQ": "1 013",
        "DEF": "1 354",
        "VIT": "115",
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
    type: "Soutien",
    spells: [
        {
          img: "assets/sort4.webp",
          name: "Rayon de décréation",
          description: `Attaque tous les ennemis.${RETURN}${RETURN}

Réduit le Compteur de Tour de tous les ennemis de 10 %. Réduit le Compteur de Tour de chaque ennemi de 5 % supplémentaires s'ils se trouvent sous un débuff ${DEBUFFS.LOCK_ACTIVE}, ${DEBUFFS.RES} ou ${DEBUFFS.STUN} placé par ce Champion.`,
          damage: "3.5*ATQ",
          levelInfo: ["Dégâts +20%", "Ignorer la RES +20%"],
          isPassive: false
        },
        {
          img: "assets/sort5.webp",
          name: "Déchirure d'éclipse",
          description: `Attaque tous les ennemis. Avant d'attaquer, retire tous les buffs de tous les ennemis.${RETURN}${RETURN}

Place ensuite un débuff ${DEBUFFS.LOCK_ACTIVE} pendant 2 tours.${RETURN}${RETURN}

Cette attaque ne déclenchera pas de contre-attaques.`,
          damage: "5.5*ATQ",
          cooldown: 4,
          levelInfo: ["Ignorer la RES +20%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort6.webp",
          name: "Sombre nébuleuse",
          description: `Place un buff ${BUFFS.PRE} de 50 % sur tous les alliés pendant 2 tours.${RETURN}${RETURN}

Ensuite, place un débuff ${DEBUFFS.RES} de 50 % sur tous les ennemis pendant 2 tours et un débuff ${DEBUFFS.STUN} sur tous les ennemis pendant 1 tour.`,
          cooldown: 4,
          levelInfo: ["Ignorer la RES +20%"],
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
          name: "Reflet d'étoile [P]",
          description: `${PASSIVE}

Augmente la PRÉ de ce Champion afin qu'elle soit équivalente à 75 % de sa RÉS lorsqu'il place des débuffs ou active des effets instantanés.${RETURN}${RETURN}

${ACTIVE}

Si la PRÉ d'un ennemi est plus élevée que la RÉS de ce Champion, possède 50 % de chances de renvoyer tout débuff ${DEBUFFS.FEAR}, ${DEBUFFS.TRUE_FEAR}, ${DEBUFFS.GEL}, ${DEBUFFS.PROVOKE}, ${DEBUFFS.SLEEP}, ${DEBUFFS.STUN} ou ${DEBUFFS.PETRIFICATION} sur l'ennemi lorsqu'il place ces débuffs sur ce Champion.`,
          cooldown: 3,
          isPassive: true
        }
      ],
    stats: {
        "PV": "22 305",
        "ATQ": "1 013",
        "DEF": "1 354",
        "VIT": "115",
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
