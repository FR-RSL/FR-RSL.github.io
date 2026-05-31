const championForms = {
  form1: {
    type: "Attaque",
    spells: [
        {
          img: "assets/sort1.webp",
          name: "Chant d'acier",
          description: `Attaque un ennemi. Place une frappe supplémentaire si la cible se trouve sous débuff ${DEBUFFS.DEATHBRAND}. 

Réduit les PV et la DÉF de la cible de 10 % (s'accumule jusqu'à 30 %). Cet effet ne fonctionne pas contre les Boss.`,
          damage: "ATQ*4",
          levelInfo: ["Dégâts +20%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Rage incandescente",
          description: `Attaque un ennemi. Avant d'attaquer, place un débuff ${DEBUFFS.LOCK_PASSIF} pendant 1 tour. Ignorera 50 % de la DÉF de la cible, ainsi que les buffs ${BUFFS.BLOCK_DAMAGE} et ${BUFFS.UNKILLABLE}. 

Si la cible initiale est tuée, répétera l'attaque contre tous les ennemis et ignorera 25 % de la DÉF de chaque cible. Réduira également de 2 tours le temps de recharge de la compétence Hurlement polaire si la cible initiale est tuée lorsqu'elle se trouve sous débuff ${DEBUFFS.DEATHBRAND}.`,
          damage: "ATQ*6",
          cooldown: 4,
          levelInfo: ["Dégâts +20%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Hurlement polaire",
          description: `Place un buff ${BUFFS.ATK} de 50 % et un buff ${BUFFS.PRE} de 50 % sur tous les alliés pendant 3 tours. 

Place un débuff ${DEBUFFS.DEATHBRAND} sur tous les ennemis pendant 2 tours. 

Accorde ensuite un Tour supplémentaire.`,
          cooldown: 5,
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
          name: "Volonté de la toundra [P]",
          description: `${PASSIVE}

Les ennemis sous débuff ${DEBUFFS.DEATHBRAND} reçoivent 20 % de dégâts en plus et infligent 20 % de dégâts en moins. Si plusieurs Champions de l'équipe disposent de cette Compétence, une seule sera activée. Cette compétence ne s'activera pas sur les copies en double de ce Champion si ce Champion spécifique est mort.

Ce Champion est immunisé contre les débuffs ${DEBUFFS.GEL}, ${DEBUFFS.STUN} et ${DEBUFFS.PROVOKE}. 

${ACTIVE}

Dès que ce Champion est tué, le ranime avec 50 % de PV et 100 % de Compteur de Tour, puis lui accorde un buff ${BUFFS.BLOCK_DAMAGE} pendant 1 tour.`,
          cooldown: 5,
          isPassive: true
        }
      ],
    stats: {
        "PV": "17 505",
        "ATQ": "1 707",
        "DEF": "980",
        "VIT": "115",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
    aura: {
    img: "../../../../../assets/images/auras/acc.webp",
    description: `Augmente la statistique PRÉ des Alliés lors de toutes les Batailles de 80`,
  },
  },
  form2: {
    type: "PV",
    spells: [
        {
          img: "assets/sort4.webp",
          name: "Tempête d'épées",
          description: `Attaque 2 fois un ennemi. Place un débuff ${DEBUFFS.STUN} pendant 1 tour. 

Si les PV de MAX de ce Champion sont supérieurs ou égaux à ceux de la cible, il est impossible de résister à ce débuff.`,
          damage: "0.12*HP+1.4*ATQ",
          levelInfo: ["Dégâts +20%"],
          isPassive: false
        },
        {
          img: "assets/sort5.webp",
          name: "Rugissement provoquant",
          description: `Place un débuff ${DEBUFFS.PROVOKE} sur tous les ennemis pendant 1 tour. Si la cible est un Boss, place au lieu de ça un débuff ${DEBUFFS.PROVOKE} pendant 2 tours. Si les PV MAX de ce Champion sont supérieurs ou égaux à ceux de la cible, il est impossible de résister à ces débuffs. 

Place un buff ${BUFFS.STRENGTHEN} de 25 % sur tous les alliés pendant 2 tours. Place également un buff ${BUFFS.COUNTER} sur ce Champion pendant 2 tours.`,
          cooldown: 4,
          levelInfo: ["Ignorer la RES +20%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort6.webp",
          name: "Rupture glaciale",
          description: `Attaque tous les ennemis. Avant d'attaquer, place un débuff ${DEBUFFS.DEF} de 60 % sur tous les ennemis pendant 2 tours. Si les PV de MAX de ce Champion sont supérieurs ou égaux à ceux de la cible, il est impossible de résister à ce débuff. 

Cette attaque inflige à chaque cible individuelle des dégâts sur cible unique plutôt que des dégâts de zone. Ignorera 30 % de la DÉF de chaque cible. Place une frappe supplémentaire sur les Boss et les ennemis sous débuffs ${DEBUFFS.STUN} et ${DEBUFFS.PROVOKE}. Si une cible est un Boss, ou se trouve sous débuffs ${DEBUFFS.STUN} ou ${DEBUFFS.PROVOKE}, ignorera au lieu de cela 50 % de la DÉF.`,
          damage: "0.35*HP+1.4*ATQ",
          cooldown: 4,
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
          name: "Coeur d'ours [P]",
          description: `${PASSIVE}

Chaque fois qu'un Champion est tué, augmente de 20 % les PV et la DÉF de ce Champion (s'accumule jusqu'à 100 %). 

Immunisé contre les débuffs ${DEBUFFS.GEL}, ${DEBUFFS.STUN} et ${DEBUFFS.PROVOKE}.

${ACTIVE}

Dès qu'un ennemi essaie de placer un débuff ${DEBUFFS.GEL}, ${DEBUFFS.STUN} ou ${DEBUFFS.PROVOKE} sur ce Champion, active instantanément la compétence Rupture glaciale. Ceci ne placera pas la compétence Rupture glaciale en temps de recharge.`,
          cooldown: 2,
          isPassive: true
        }
      ],
    stats: {
        "PV": "25 605",
        "ATQ": "815",
        "DEF": "1 332",
        "VIT": "115",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
    aura: {
    img: "../../../../../assets/images/auras/acc.webp",
    description: `Augmente la statistique PRÉ des Alliés lors de toutes les Batailles de 80`,
  },
  },
};
