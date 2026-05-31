const championForms = {
  form1: {
    type: "Soutien",
    spells: [
        {
          img: "assets/sort1.webp",
          name: "Attiser l'angoisse",
          description: `Attaque 2 fois un ennemi. 

Chaque frappe réduit la DÉF de la cible de 2 % (s'accumule jusqu'à 20 %). 

Chaque frappe vole également 10 % du Compteur de Tour de la cible.`,
          damage: "0.11*HP",
          levelInfo: ["Dégâts +10%", "Ignorer la RES +20%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Agonie accablante",
          description: `Attaque tous les ennemis. Retire tous les buffs sur tous les ennemis et leur inflige un débuff ${DEBUFFS.LOCK_ACTIVE} pendant 2 tours. 

Vole également 20 % du Compteur de Tour de chaque ennemi sous débuff ${DEBUFFS.LOCK_ACTIVE}.`,
          damage: "0.22*HP",
          cooldown: 3,
          levelInfo: ["Dégâts +20%", "Ignorer la RES +20%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Voleur de joie",
          description: `Attaque un ennemi. Vole 100 % du Compteur de Tour de la cible. 

Place également les compétences de la cible en recharge.`,
          damage: "0.3*HP",
          cooldown: 4,
          levelInfo: ["Dégâts +20%", "Ignorer la RES +20%", "Temps de recharge -1"],
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
          name: "Dramatis Miserae [P]",
          description: `Dès que ce Champion perd 30 % de PV ou plus lors d'un seul tour, inflige des dégâts équivalents à 30 % des PV MAX de ce Champion à l'assaillant. Se produit une fois par tour. 

De plus, lorsque ce Champion perd 30 % de PV ou plus lors d'un seul tour, lui accorde un buff ${BUFFS.SHIELD} équivalent à 30 % des PV MAX de ce Champion pendant 2 tours.`,
          damage: "0.3*HP",
          isPassive: true
        }
      ],
    stats: {
        "PV": "21 975",
        "ATQ": "1 035",
        "DEF": "1 354",
        "VIT": "110",
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
          name: "Artiste instable",
          description: `Attaque 2 fois un ennemi. 

Chaque frappe a 50 % de chances de placer un débuff ${DEBUFFS.BOMB} pendant 2 tours. 

Soigne ce Champion de 10 % de ses PV MAX pour chaque débuff ${DEBUFFS.BOMB} placé.`,
          damage: "0.12*HP",
          levelInfo: ["Dégâts +20%", "Ignorer la RES +20%"],
          isPassive: false
        },
        {
          img: "assets/sort5.webp",
          name: "Clou du spectacle explosif",
          description: `Attaque tous les ennemis. 

Place 2 débuffs ${DEBUFFS.BOMB} sur tous les ennemis pendant 2 tours. 

Fait exploser instantanément tous les débuffs ${DEBUFFS.BOMB} sur les ennemis dotés de buffs ${BUFFS.STONE_SKIN} ou les ennemis dont les PV sont inférieurs aux PV de ce Champion. 

Ensuite, place un débuff ${DEBUFFS.STUN} pendant 1 tour sur tous les ennemis dont les débuffs ${DEBUFFS.BOMB} ont explosé à cause de cette compétence.`,
          damage: "0.25*HP",
          cooldown: 3,
          levelInfo: ["Dégâts +20%", "Ignorer la RES +20%"],
          isPassive: false
        },
        {
          img: "assets/sort6.webp",
          name: "Rappel mortel",
          description: `Soigne ce Champion à hauteur de 50 % de ses PV MAX. 

Place également un débuff ${DEBUFFS.WEAKEN} de 25 % pendant 2 tours sur tous les ennemis. 

Accorde ensuite un Tour supplémentaire.`,
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
          name: "Rira bien [P]",
          description: `Possède 100 % de chances de renvoyer sur un assaillant tous les débuffs ${DEBUFFS.BOMB} placés sur ce Champion. Possède également 30 % de chances de renvoyer sur un assaillant tous les autres débuffs placés sur ce Champion. 

Soigne ce Champion de 20 % de ses PV MAX chaque fois qu'un ennemi est tué par un débuff ${DEBUFFS.BOMB}.`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "23 625",
        "ATQ": "958",
        "DEF": "1 321",
        "VIT": "110",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "20"
      },
    aura: {
    img: "../../../../../assets/images/auras/acc.webp",
    description: `Augmente la statistique PRÉ des Alliés lors de toutes les Batailles de 80`,
  },
  },
};
