const championForms = {
  form1: {
    type: "Attaque",
    spells: [
        {
          img: "assets/sort1.webp",
          name: "Zèle brûlant",
          description: `Attaque un ennemi. Place une frappe supplémentaire si la cible est affligée de débuffs. 

A 25 % de chances d'accorder un Tour supplémentaire.`,
          damage: "4*DEF+1.2*ATQ",
          levelInfo: ["Dégâts +20%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Conflagration fidèle",
          description: `Attaque 3 fois un ennemi. 

Chaque frappe ignorera 25 % de la DÉF de la cible. Chaque frappe ignorera au lieu de ça 50 % de la DÉF de la cible si la cible est affligée d'un débuff ${DEBUFFS.BURN} ou ${DEBUFFS.GEL}. 

Chaque frappe détruit également la DÉF et la RÉS de la cible de 3 % (s'accumule jusqu'à 30 %). 

Place un débuff ${DEBUFFS.BURN} sur tous les ennemis pendant 2 tours si la cible est tuée par cette compétence. Il est impossible de résister à ce débuff.`,
          damage: "1.8*DEF+1.2*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +20%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Pyro Maxima",
          description: `Attaque tous les ennemis. Cette attaque inflige à chaque cible individuelle des dégâts sur cible unique plutôt que des dégâts de zone. Ignorera les buffs ${BUFFS.SHIELD}, ${BUFFS.BLOCK_DAMAGE} et ${BUFFS.UNKILLABLE}. 

Active instantanément les débuffs ${DEBUFFS.BURN} sur tous les ennemis. 

Place un débuff ${DEBUFFS.BLOCK_REA} sur les cibles tuées lorsqu'elles sont affligées d'un débuff ${DEBUFFS.BURN} ou ${DEBUFFS.GEL}.`,
          damage: "4*DEF+1.2*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +20%", "Temps de recharge -1"],
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
          name: "Maîtresse élémentaire [P]",
          description: `Cette Championne inflige 25 % de dégâts en plus aux ennemis affligés d'un débuff ${DEBUFFS.BURN} ou ${DEBUFFS.GEL}. Cette Championne inflige 100 % de dégâts en plus contre les ennemis affligés simultanément de débuffs ${DEBUFFS.BURN} et ${DEBUFFS.GEL}. 

Cette Championne ignore la réduction des dégâts accordée par les débuffs ${DEBUFFS.GEL}.`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "15 195",
        "ATQ": "1 509",
        "DEF": "1 332",
        "VIT": "104",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
    aura: {
    img: "../../../../../assets/images/auras/attack.webp",
    description: `Augmente la statistique ATQ des Alliés lors des les batailles d'Arène de 40%`,
  },
  },
  form2: {
    type: "Défense",
    spells: [
        {
          img: "assets/sort4.webp",
          name: "Découpe glaciale",
          description: `Attaque un ennemi. 

Place un buff ${BUFFS.ALLY_PROTECT} de 50 % sur un allié aléatoire, sauf cette Championne, pendant 2 tours. Si l'allié se trouve déjà sous buff ${BUFFS.ALLY_PROTECT}, le place sur un autre allié choisi de manière aléatoire. 

Soigne cette Championne et les alliés sous buffs ${BUFFS.ALLY_PROTECT}. La valeur du soin est proportionnelle à la DÉF de cette Championne.`,
          damage: "3*DEF+0.8*ATQ",
          levelInfo: ["Dégâts +20%", "Soins +20%"],
          isPassive: false
        },
        {
          img: "assets/sort5.webp",
          name: "Vrilles gelées",
          description: `Place un buff ${BUFFS.BLOCK_DEBUFFS} et un buff ${BUFFS.STRENGTHEN} de 25 % sur tous les alliés pendant 2 tours. 

Place un débuff ${DEBUFFS.TRAP} de 100 % sur tous les ennemis pendant 2 tours. Les ennemis affligés d'un débuff ${DEBUFFS.BURN} ou ${DEBUFFS.GEL} ne peuvent pas résister à ce débuff.`,
          cooldown: 4,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort6.webp",
          name: "Tempête de lame-glace",
          description: `Attaque tous les ennemis. Avant d'attaquer, place une pile d'${BUFFS.INTERCEPT} sur tous les alliés. 

Place un débuff ${DEBUFFS.GEL} sur tous les ennemis pendant 1 tour. Il est impossible de résister à ce débuff.`,
          damage: "3*DEF+0.8*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +20%", "Temps de recharge -1"],
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
          name: "Réveil cryomantique [P]",
          description: `${PASSIVE}

Les alliés affligés d'un débuff ${DEBUFFS.GEL} reçoivent 90 % de dégâts en moins. Si plusieurs Champions de l'équipe disposent de cette Compétence, une seule sera activée. Cette compétence ne s'activera pas sur les copies en double de ce Champion si ce Champion spécifique est mort.

${ACTIVE}

Une fois par Manche, ranime chaque allié, dont cette Championne, avec 100 % de PV. Place un débuff ${DEBUFFS.GEL} sur l'allié ranimé pendant 1 tour. Il est impossible de bloquer ce débuff et d'y résister.`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "17 835",
        "ATQ": "1 123",
        "DEF": "1 542",
        "VIT": "106",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "0"
      },
    aura: {
    img: "../../../../../assets/images/auras/attack.webp",
    description: `Augmente la statistique ATQ des Alliés lors des les batailles d'Arène de 40%`,
  },
  },
};
