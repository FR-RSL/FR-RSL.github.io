const championForms = {
  form1: {
    type: "Attaque",
    spells: [
        {
          img: "assets/sort1.webp",
          name: "Fil écorchant",
          description: `Attaque 2 fois un ennemi. 

La première frappe transfère tous les débuffs de ce Champion sur la cible. La seconde frappe augmente ensuite d'1 tour la durée de tous les débuffs de la cible.`,
          damage: "2*ATQ",
          levelInfo: ["Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Vague séraphique",
          description: `Attaque tous les ennemis. Chaque coup critique remplit le Compteur de Tour de ce Champion de 25 %. 

Réinitialise le temps de recharge de la compétence Rage du Nephel si cette attaque tue un ennemi. 

Réinitialise le temps de recharge de toutes les compétences de ce Champion si cette attaque tue 2 ennemis ou plus.`,
          damage: "4.6*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +20%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Rage du Nephel",
          description: `Attaque un ennemi. Ignore 50 % de la DÉF de la cible. Si la cible initiale est tuée, attaquera tous les ennemis restants avec l'excédent de dégâts. 

Soigne totalement ce Champion si la frappe initiale tue un ennemi.`,
          damage: "6*ATQMultiplier: Remaining Damage Amount",
          cooldown: 4,
          levelInfo: ["Dégâts +20%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/meta1.webp",
          name: "Métamorphe [P]",
          description: `Fait passer ce Champion à sa Forme alternative lorsque tous les alliés sont morts et que ce Champion est vivant.

Accorde ensuite un Tour supplémentaire.`,
          cooldown: 4,
          isPassive: true
        },
        {
          img: "assets/passif1.webp",
          name: "Stopper la lame [P]",
          description: `Si ce Champion est sur le point de se faire tuer par un coup fatal, bloque les dégâts en approche et place un buff ${BUFFS.BLOCK_DAMAGE} sur ce Champion pendant 2 tours. 

Soigne ensuite ce Champion de 50 % de ses PV max et remplit son Compteur de Tour de 100 %.`,
          cooldown: 3,
          isPassive: true
        }
      ],
    stats: {
        "PV": "16 350",
        "ATQ": "1 663",
        "DEF": "1 101",
        "VIT": "110",
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
  form2: {
    type: "Soutien",
    spells: [
        {
          img: "assets/sort4.webp",
          name: "Consumer",
          description: `Attaque tous les ennemis. Soigne tous les alliés à hauteur de 20 % des dégâts infligés.`,
          damage: "3*ATQ",
          levelInfo: ["Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort5.webp",
          name: "Parade néphélique",
          description: `Retire tous les débuffs sur tous les alliés. 

Soigne ensuite une cible alliée de 30 % de ses PV MAX, puis lui accorde un buff ${BUFFS.BLOCK_DEBUFFS} pendant 2 tours.`,
          cooldown: 4,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort6.webp",
          name: "Lumière de l'au-delà",
          description: `Ranime tous les alliés morts avec 50 % de PV et 50 % de Compteur de Tour, puis place un buff ${BUFFS.BLOCK_DAMAGE} sur tous les alliés pendant 2 tours.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
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
          name: "Bouclier de défi [P]",
          description: `Réduit les dégâts infligés par des compétences de 20 %.`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "20 640",
        "ATQ": "1 112",
        "DEF": "1 365",
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
};
