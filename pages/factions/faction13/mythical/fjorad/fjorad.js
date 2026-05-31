const championForms = {
  form1: {
    type: "Soutien",
    spells: [
        {
          img: "assets/sort1.webp",
          name: "Morsure du loup",
          description: `Attaque 2 fois un ennemi. Chaque frappe a 50 % de chances de placer un débuff ${DEBUFFS.GEL} pendant 1 tour. Il est impossible de résister à ce débuff et de le bloquer si le Champion ciblé fait partie du Pacte Gaellen.

Si la cible ne se trouve pas sous débuff ${DEBUFFS.GEL}, répétera une fois l'attaque.`,
          damage: "2.6*ATQ",
          levelInfo: ["Dégâts +10%", "Ignorer la RES +20%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Grand Capitaine",
          description: `Place un buff ${BUFFS.BLOCK_DEBUFFS} et un buff ${BUFFS.SPD} de 30 % sur tous les alliés pendant 2 tours. 

Réduit d'1 tour le temps de recharge de toutes les compétences des alliés, sauf celles de ce Champion.`,
          cooldown: 4,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Rage du Coeur-de-loup",
          description: `Attaque tous les ennemis. 

Place un débuff ${DEBUFFS.GEL} sur tous les ennemis pendant 1 tour et un débuff ${DEBUFFS.SPD} de 30 % sur tous les ennemis pendant 2 tours. Si un ennemi appartient au Pacte Gaellen, place au lieu de cela un débuff ${DEBUFFS.GEL} pendant 2 tours, et il est impossible de bloquer ce débuff et d'y résister.

Réduit également le Compteur de Tour de la cible de 30 %. Si l'ennemi fait partie du Pacte Gaellen, réduit son Compteur de Tour de 50 %.

Accorde un Tour supplémentaire.`,
          damage: "5.6*ATQ",
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
          name: "Se mange froid [P]",
          description: `Dès que ce Champion ou un allié reçoit un débuff d'un ennemi, a 30 % de chances de placer un débuff ${DEBUFFS.GEL} sur cet ennemi pendant 1 tour.

Ces chances augmentent jusqu'à 100 %, et il est impossible de bloquer ce débuff et d'y résister si la cible fait partie du Pacte Gaellen.`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "22 635",
        "ATQ": "1 068",
        "DEF": "1 277",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "20"
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
          name: "Fente de givre",
          description: `Attaque un ennemi.

Ignorera 15 % de la DÉF de la cible. Si la cible se trouve sous débuff ${DEBUFFS.GEL}, ignorera au lieu de cela 35 % de la DÉF de la cible.

Si cette attaque tue un ennemi, réinitialise le temps de recharge d'une compétence aléatoire de ce Champion.`,
          damage: "0.28*HP",
          levelInfo: ["Dégâts +20%"],
          isPassive: false
        },
        {
          img: "assets/sort5.webp",
          name: "Séisme de glacier",
          description: `Attaque tous les ennemis. Inflige une frappe supplémentaire aux ennemis sous débuffs ${DEBUFFS.GEL}, ${DEBUFFS.STUN}, ${DEBUFFS.FEAR}, ${DEBUFFS.TRUE_FEAR}, ${DEBUFFS.PROVOKE} ou ${DEBUFFS.PETRIFICATION}. 

Chaque frappe réduit les PV MAX de chaque cible de 25 % des dégâts infligés (s'accumule jusqu'à 50 %). 

Chaque frappe réduit également le Compteur de Tour de chaque cible de 25 %. Il est impossible de résister à cet effet si un ennemi se trouve sous débuff ${DEBUFFS.GEL}, ${DEBUFFS.STUN}, ${DEBUFFS.FEAR}, ${DEBUFFS.TRUE_FEAR}, ${DEBUFFS.PROVOKE} ou ${DEBUFFS.PETRIFICATION}.`,
          damage: "0.3*HPMultiplier: 0.28*HP",
          cooldown: 3,
          levelInfo: ["Dégâts +20%", "Ignorer la RES +20%"],
          isPassive: false
        },
        {
          img: "assets/sort6.webp",
          name: "Disciple de Tormin",
          description: `Attaque un ennemi. 

Ignorera 50 % de la DÉF de la cible. Si la cible se trouve sous débuff ${DEBUFFS.GEL}, ignorera au lieu de cela 100 % de la DÉF de la cible et les buffs ${BUFFS.BLOCK_DAMAGE}. 

Si la cible est tuée lorsqu'elle se trouve sous débuff ${DEBUFFS.GEL}, place également un débuff ${DEBUFFS.BLOCK_REA} sur elle et place un débuff ${DEBUFFS.GEL} sur tous les ennemis pendant 1 tour.

Il est impossible pour les ennemis du Pacte Gaellen de bloquer le débuff ${DEBUFFS.GEL} et d'y résister.`,
          damage: "0.37*HP",
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
          name: "Résolution glaciale [P]",
          description: `Contre-attaque avec la compétence Fente de givre dès qu'un ennemi augmente le temps de recharge d'une des compétences de ce Champion.

Lorsqu'un allié est tué, a 50 % de chances de placer un débuff ${DEBUFFS.GEL} sur tous les ennemis pendant 1 tour. Ces chances augmentent jusqu'à 100 % et il est impossible pour les ennemis du Pacte Gaellen de le bloquer ou d'y résister.`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "22 635",
        "ATQ": "925",
        "DEF": "1 421",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "50",
        "PRÉ": "0"
      },
    aura: {
    img: "../../../../../assets/images/auras/acc.webp",
    description: `Augmente la statistique PRÉ des Alliés lors de toutes les Batailles de 80`,
  },
  },
};
