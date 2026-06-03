const championForms = {
  form1: {
    type: "Soutien",
    spells: [
        {
          img: "assets/sort1.webp",
          name: "Lancer de magma",
          description: `Attaque un ennemi.${RETURN}${RETURN}

Augmente d'1 tour la durée des débuffs ${DEBUFFS.BURN} sur la cible. Si la cible n'est pas sous débuff ${DEBUFFS.BURN}, réduit d'1 tour la durée de 2 buffs aléatoires sur cet ennemi à la place. Il est impossible de résister à ces effets si cette attaque passe en critique.${RETURN}${RETURN}

Ensuite, attaque tous les ennemis qui ne sont pas sous débuffs ${DEBUFFS.BURN}, sauf la cible initiale. Réduit d'1 tour la durée de 2 buffs aléatoires sur tous les ennemis frappés. Il est impossible de résister à cet effet si cette attaque passe en critique.`,
          damage: "5.5*ATQ",
          levelInfo: ["Dégâts +10%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Flammes de ressentiment",
          description: `Attaque tous les ennemis.${RETURN}${RETURN}

Avant d'attaquer, augmente d'1 tour la durée de tous les débuffs ${DEBUFFS.BURN} sur tous les ennemis, puis active instantanément un déclenchement de tous les débuffs ${DEBUFFS.BURN} sur tous les ennemis. Il est impossible de résister à cet effet si le TAUX C. de ce Champion est supérieur ou égal à 100 %.${RETURN}${RETURN}

Enfin, augmente d'1 tour la durée de tous les débuffs sur tous les ennemis, puis place un débuff ${DEBUFFS.SPD} de 30 % sur tous les ennemis pendant 2 tours. Il est impossible de résister à ces effets si cette attaque est critique.`,
          damage: "5.8*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Laissez-les moi !",
          description: `Place un buff ${BUFFS.CDAM} de 30 %, un buff ${BUFFS.CRATE} de 30 % et un buff ${BUFFS.SPD} de 30 % sur tous les alliés pendant 3 tours.${RETURN}${RETURN}

Accorde ensuite un Tour supplémentaire.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1"],
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
          name: "Étincelle de colère [P]",
          description: `Avant qu'un Champion joue son tour dans une Manche, place un débuff ${DEBUFFS.BURN} sur tous les ennemis pendant 2 tours. Se produit une fois par Manche. Il est impossible de résister à cet effet si le TAUX C. de ce Champion est supérieur ou égal à 100 %.${RETURN}${RETURN}

Également avant le début du tour de ce Champion, a 50 % de chances de placer un débuff ${DEBUFFS.BURN} sur tous les ennemis pendant 1 tour. Il est impossible de résister à cet effet si le TAUX C. de ce Champion est supérieur ou égal à 100 %.`,
          cooldown: 1,
          isPassive: true
        }
      ],
    stats: {
        "PV": "22 800",
        "ATQ": "991",
        "DEF": "1 343",
        "VIT": "115",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "0"
      },
    aura: {
    img: "../../../../../assets/images/auras/crit.webp",
    description: `Augmente la statistique TAUX DE C. des Alliés lors de toutes les Batailles de 27%`,
  },
  },
  form2: {
    type: "PV",
    spells: [
        {
          img: "assets/sort4.webp",
          name: "Vengeance totémique",
          description: `Attaque un ennemi. Si les PV de ce Champion ou les PV de la cible initiale sont inférieurs ou égaux à 50 %, attaque tous les ennemis à la place.${RETURN}${RETURN}

Augmente d'1 tour la durée de 2 débuffs aléatoires de la cible. En cas d'attaque sur tous les ennemis, augmente d'1 tour la durée de 2 débuffs aléatoires sur tous les ennemis à la place. Il est impossible de résister à cet effet si cette attaque passe en critique.`,
          damage: "0.14*PV+0.7*DEFMultiplier: 0.2*PV+0.7*DEF",
          levelInfo: ["Dégâts +10%", "Dégâts +20%"],
          isPassive: false
        },
        {
          img: "assets/sort5.webp",
          name: "BOUM !",
          description: `Attaque tous les ennemis.${RETURN}${RETURN}

Avant d'attaquer, place un débuff ${DEBUFFS.DEF} de 60 % sur tous les ennemis pendant 2 tours. Il est impossible de résister à ce débuff si la cible se trouve sous débuff ${DEBUFFS.BURN}.${RETURN}${RETURN}

Place une frappe supplémentaire sur les ennemis sous débuffs ${DEBUFFS.BURN}.${RETURN}${RETURN}

Accorde un Tour supplémentaire si cette attaque tue un ennemi.`,
          damage: "0.23*PV+0.7*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +20%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort6.webp",
          name: "Furie impie",
          description: `Place un débuff ${DEBUFFS.PAIN_LINK} sur l'ennemi ciblé pendant 2 tours. Il est impossible de retirer ce débuff, d'y résister et de le bloquer.${RETURN}${RETURN}

Lors du calcul des dégâts infligés par le débuff ${DEBUFFS.PAIN_LINK}, 75 % du multiplicateur de compétence de l'assaillant sont reflétés. Les dégâts infligés par le débuff ${DEBUFFS.PAIN_LINK} ignoreront 100 % de la DÉF de la cible.${RETURN}${RETURN}

Place également un buff ${BUFFS.TAUNT} et un buff ${BUFFS.UNKILLABLE} sur ce Champion pendant 2 tours. Enfin, place un buff ${BUFFS.ALLY_PROTECT} de 50 % sur tous les alliés sauf ce Champion pendant 2 tours.`,
          cooldown: 4,
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
          name: "Mastodonte brûlant [P]",
          description: `Ignorera 15 % de la DÉF d'une cible si les PV de ce Champion ou les PV de la cible sont supérieurs ou égaux à 50 %. Si les PV de ce Champion ou les PV de la cible sont inférieurs à 50 %, ignorera 25 % de la DÉF de la cible à la place.${RETURN}${RETURN}

Ignorera également les buffs ${BUFFS.BLOCK_DAMAGE} et ${BUFFS.SHIELD} lors des attaques sur les ennemis sous débuffs ${DEBUFFS.BURN}.${RETURN}${RETURN}

Inflige 20 % de dégâts en plus aux ennemis qui ne sont pas sous débuff ${DEBUFFS.BURN}.`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "24 780",
        "ATQ": "738",
        "DEF": "1 465",
        "VIT": "101",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "50",
        "PRÉ": "0"
      },
    aura: {
    img: "../../../../../assets/images/auras/crit.webp",
    description: `Augmente la statistique TAUX DE C. des Alliés lors de toutes les Batailles de 27%`,
  },
  },
};
