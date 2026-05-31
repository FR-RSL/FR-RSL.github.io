const championForms = {
  form1: {
    type: "Soutien",
    spells: [
        {
          img: "assets/sort1.webp",
          name: "Déferlement de chaos",
          description: `Attaque tous les ennemis. 

Soigne tous les alliés. La valeur du soin est proportionnelle à l'ATQ de cette Championne.`,
          damage: "3*ATQ",
          levelInfo: ["Dégâts +10%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Tout pour Siroth",
          description: `Retire tous les débuffs sur tous les alliés.

Ensuite, place un buff ${BUFFS.ATK} de 50 % et un buff ${BUFFS.SHIELD} sur tous les alliés pendant 2 tours.
La valeur du ${BUFFS.SHIELD} est proportionnelle à l'ATQ de cette Championne.`,
          cooldown: 4,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Propagation",
          description: `Place un buff ${BUFFS.TAUNT} et un buff ${BUFFS.FORTIFY} de 25 % sur cette Championne pendant 2 tours.
Place également un buff ${BUFFS.UNKILLABLE} sur tous les alliés sauf cette Championne pendant 2 tours.`,
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
          name: "Collectrice de pions [P]",
          description: `${PASSIVE}

Reçoit 15 % de dégâts en moins pour chaque allié vivant.

${ACTIVE}

Fait instantanément passer cette Championne à sa Forme alternative dès que son dernier allié vivant est tué. Accorde ensuite un Tour supplémentaire.`,
          cooldown: 4,
          isPassive: true
        }
      ],
    stats: {
        "PV": "19 155",
        "ATQ": "1 509",
        "DEF": "1 068",
        "VIT": "110",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "0"
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
          name: "Destructrice de tout",
          description: `Attaque 3 fois un ennemi. 

Si cette attaque tue un ennemi, inflige des dégâts bruts à tous les autres ennemis. Si les autres ennemis ne sont pas des Boss ou des sbires, la quantité de dégâts bruts infligés est égale à 30 % des PV MAX de la cible initiale. Si les autres ennemis sont des Boss ou des sbires, les dégâts bruts infligés sont égaux à 10 % de leurs PV MAX. Cette attaque ne peut pas être critique.`,
          damage: "1.3*ATQMultiplier: Boss/Minion: 0.1*Enemy Max HP or Champion: 0.3 * Target Max HP",
          levelInfo: ["Dégâts +20%"],
          isPassive: false
        },
        {
          img: "assets/sort5.webp",
          name: "Icône de dévastation",
          description: `Attaque tous les ennemis. Avant d'attaquer, vole tous les buffs de tous les ennemis. Les cibles dont l'ATQ est inférieure à l'ATQ de cette Championne ne peuvent pas résister à cet effet. Place également un débuff ${DEBUFFS.WEAKEN} de 25 % sur tous les ennemis pendant 2 tours. Les cibles dont l'ATQ est inférieure ou égale à l'ATQ de cette Championne ne peuvent pas résister à cet effet.`,
          damage: "4*ATQ",
          cooldown: 3,
          levelInfo: ["Dégâts +20%", "Ignorer la RES +20%"],
          isPassive: false
        },
        {
          img: "assets/sort6.webp",
          name: "Agente impitoyable",
          description: `Place un buff ${BUFFS.SHATTER} de 15 % et un buff ${BUFFS.CRATE} de 30 % sur cette Championne pendant 3 tours. 

Place un débuff ${DEBUFFS.TRUE_FEAR} sur tous les ennemis pendant 1 tour. Les cibles dont l'ATQ est inférieure ou égale à l'ATQ de cette Championne ne peuvent pas résister à cet effet. 

Accorde un Tour supplémentaire.`,
          cooldown: 5,
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
          name: "Vile meurtrière [P]",
          description: `Inflige 15 % de dégâts supplémentaires pour chaque allié mort. Chaque coup critique booste le Compteur de Tour de cette Championne de 10 % pour chaque allié mort.`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "17 175",
        "ATQ": "1 641",
        "DEF": "1 068",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
    aura: {
    img: "../../../../../assets/images/auras/attack.webp",
    description: `Augmente la statistique ATQ des Alliés lors de toutes les Batailles de 35%`,
  },
  },
};
