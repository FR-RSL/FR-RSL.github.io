const championForms = {
  form1: {
    type: "Attaque",
    spells: [
        {
          img: "assets/sort1.webp",
          name: "Massacre faucheur",
          description: `Attaque 2 fois un ennemi. Chaque frappe a 20 % de chances supplémentaires de porter un coup critique.

Chaque frappe restaure les PV MAX détruits de ce Champion à hauteur des dégâts infligés. Chaque frappe soigne également ce Champion à hauteur de 30 % des dégâts infligés. 

Accorde un Tour supplémentaire si cette attaque tue un ennemi.`,
          damage: "2.1*ATQ",
          levelInfo: ["Dégâts +20%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Horde de calamité",
          description: `Attaque 4 fois un ennemi. Chaque frappe a 20 % de chances supplémentaires de porter un coup critique.

La première frappe ignorera 10 % de la DÉF de la cible. Chaque frappe suivante ignorera 5 % supplémentaires de la DÉF de la cible.

La première frappe place un débuff ${DEBUFFS.BLOCK_BUFFS} pendant 2 tours. 

La deuxième frappe place un débuff ${DEBUFFS.DEF} de 60 % pendant 2 tours. 

La troisième frappe place un débuff ${DEBUFFS.WEAKEN} de 25 % pendant 2 tours. 

La quatrième frappe place un débuff ${DEBUFFS.SPD} de 30 % pendant 2 tours.`,
          damage: "1.8*ATQ",
          cooldown: 3,
          levelInfo: ["Dégâts +20%", "Ignorer la RES +20%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Nécroclysme",
          description: `Attaque tous les ennemis. Cette attaque est toujours critique et ignorera 20 % de la DÉF de chaque ennemi.

Si cette attaque tue un ennemi, place un buff ${BUFFS.UNKILLABLE} sur ce Champion pendant 1 tour. 

Si cette attaque tue 2 ennemis ou plus, place au lieu de ça un buff ${BUFFS.UNKILLABLE} sur ce Champion pendant 2 tours.`,
          damage: "4.8*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +20%", "Temps de recharge -1"],
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
          name: "Création immortelle [P]",
          description: `Au début du tour de ce Champion, lui accorde un buff ${BUFFS.SHIELD} équivalent à 50 % de ses PV MAX pendant 1 tour. Place également un buff ${BUFFS.ATK} de 50 % sur ce Champion pendant 1 tour.`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "16 845",
        "ATQ": "1 553",
        "DEF": "1 178",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "20"
      },
    aura: {
    img: "../../../../../assets/images/auras/attack.webp",
    description: `Augmente la statistique ATQ des Alliés lors de toutes les Batailles de 35%`,
  },
  },
  form2: {
    type: "Attaque",
    spells: [
        {
          img: "assets/sort4.webp",
          name: "Faux cruelle",
          description: `Attaque un ennemi. Possède 20 % de chances supplémentaires de porter un coup critique.

Après l'attaque, transfère tous les débuffs de ce Champion sur la cible. 

Si la cible se trouve sous débuff ${DEBUFFS.HEX} avant l'attaque, transfère au lieu de ça tous les débuffs de ce Champion sur la cible avant l'attaque.`,
          damage: "4*ATQ",
          levelInfo: ["Dégâts +20%", "Ignorer la RES +20%"],
          isPassive: false
        },
        {
          img: "assets/sort5.webp",
          name: "Ultime testament",
          description: `Attaque tous les ennemis. Possède 20 % de chances supplémentaires de porter un coup critique. Avant d'attaquer, retire tous les débuffs sur ce Champion. 

Ignorera 20 % de la DÉF de chaque ennemi. Ignorera au lieu de ça 35 % de la DÉF de la cible si elle se trouve sous débuff ${DEBUFFS.HEX}.

Les dégâts augmentent de 10 % pour chaque débuff sur chaque cible.`,
          damage: "4.2*ATQ*(1+0.1*Target Debuffs)",
          cooldown: 4,
          levelInfo: ["Dégâts +20%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort6.webp",
          name: "Extinction",
          description: `Attaque tous les ennemis. Possède 20 % de chances supplémentaires de porter un coup critique. Avant d'attaquer, place un débuff ${DEBUFFS.HEX} et un débuff ${DEBUFFS.DEF} de 60 % pendant 2 tours. 

Ignorera les buffs ${BUFFS.LIFE_BARRIER}, ${BUFFS.POISON_CLOUD} et ${BUFFS.ALLY_PROTECT}.`,
          damage: "4.4*ATQ",
          cooldown: 3,
          levelInfo: ["Dégâts +20%", "Ignorer la RES +20%"],
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
          name: "Banquet de la mort [P]",
          description: `Dès que ce Champion attaque un ennemi sous débuff ${DEBUFFS.HEX}, soigne ce Champion de 30 % des dégâts infligés.

Augmente l'ATQ de ce Champion de 20 % pour chaque ennemi sous débuff ${DEBUFFS.HEX}.`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "16 845",
        "ATQ": "1 553",
        "DEF": "1 178",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "20"
      },
    aura: {
    img: "../../../../../assets/images/auras/attack.webp",
    description: `Augmente la statistique ATQ des Alliés lors de toutes les Batailles de 35%`,
  },
  },
};
