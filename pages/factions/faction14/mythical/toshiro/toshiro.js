// Données des deux formes de Toshiro
const championForms = {
  form1: {
    type: "Attaque",
    spells: [
      {
        img: "assets/sort1.webp",
        name: "Saignée rapide",
        description: `
          Attaque un ennemi. Possède 50% de chances d'attaquer
          un autre ennemi s'il se trouve sous débuff <span class='gbt'>Sangsue</span>.<br><br>
          Place également un buff <span class='gbt'>Voile Parfait</span> sur ce Champion pendant 1 tour.
        `,
        damage: "2.8*ATQ + 0.1*PV",
        levelInfo: [
          "Dégâts +20%",
        ]
      },
      {
        img: "assets/sort2.webp",
        name: "Fléchettes sanguines",
        description: `
          Attaque 4 fois de façon aléatoire. Chaque frappe augmente l'ATQ et les PV
          de ce Champion de 5% lorsqu'il se trouve sous sa Forme de base (s'accumule jusqu'à 100%).
          Si une cible se trouve sous débuff <span class='gbt'>Sangsue</span>, l'ATQ et les PV de ce Champion
          sont au lieu de ça augmentés de 10%.<br><br>
          Les dégâts infligés par cette compétence augmentent de 15% pour chaque débuff
          <span class='gbt'>Sangsue</span> placé sur l'équipe ennemie.
        `,
        damage: "1.5*ATQ + 0.1*PV",
        cooldown: 3,
        levelInfo: [
          "Dégâts +10%",
          "Dégâts +10%",
        ],
      },
      {
        img: "assets/sort3.webp",
        name: "Typhon sanglant",
        description: `
          Attaque tous les ennemis.<br><br>
          Place un débuff <span class='gbt'>Réduction de DEF</span> de 60% et un débuff
          <span class='gbt'>Sangsue</span> pendant 2 tours.<br><br>
          Place une frappe supplémentaire sur les ennemis sous 2 débuffs ou plus.
        `,
        damage: "3.5*ATQ + 0.1*PV",
        cooldown: 3,
        levelInfo: [
          "Dégâts +20%",
          "Ignorer la RES +20%"
        ]
      },
      {
        img: "assets/meta1.webp",
        name: "Métamorphe",
        description: `
          Fait passer ce Champion à sa Forme alternative.
          Accorde ensuite un Tour supplémentaire.
        `,
        cooldown: 4,
      },
      {
        img: "assets/passif1.webp",
        name: "Faim de Vornspore [P]",
        description: `
          Remplit le Compteur de Tour de ce Champion de 5% chaque fois 
          qu'il attaque une cible sous débuff <span class='gbt'>Sangsue</span>.<br><br>
          Inflige 25% de dégâts en plus aux ennemis sous débuff <span class='gbt'>Sangsue</span>.
        `,
        isPassive: true,
      },
    ],
    stats: {
      "PV": "18 660",
      "ATQ": "1 520",
      "DÉF": "1 090",
      "VIT": "103",
      "TAUX C.": "15%",
      "DÉG C.": "63%",
      "RÉS": "30",
      "PRÉ": "20"
    },
  },
  form2: {
    type: "PV",
    spells: [
      {
        img: "assets/sort4.webp",
        name: "Entaille d'iaito",
        description: `
          Attaque tous les ennemis.
          Possède 50% de chances d'augmenter d'1 tour la durée de tous les débuffs ennemis.
        `,
        damage: "0.16*PV + 0.7*ATQ",
        levelInfo: [
          "Dégâts +20%"
        ]
      },
      {
        img: "assets/sort5.webp",
        name: "Dessine dans le sang",
        description: `
          Attaque tous les ennemis.<br><br>
          Soigne tous les alliés sauf ce Champion à hauteur de 10% des dégâts infligés.
          La valeur du soin augmente de 5% pour chaque débuff <span class='gbt'>Sangsue</span>
          dont est affligée l'équipe ennemie.
        `,
        damage: "0.25*PV + 0.7*ATQ",
        cooldown: 4,
        levelInfo: [
          "Dégâts +20%",
          "Temps de recharge -1"
        ]
      },
      {
        img: "assets/sort6.webp",
        name: "Massacre cinglant",
        description: `
          Attaque tous les ennemis.
          Place un débuff <span class='gbt'>Réduction de VIT</span> de 30% 
          et un débuff <span class='gbt'>Sangsue</span> pendant 2 tours.<br><br>
          Accorde ensuite un Tour supplémentaire.
        `,
        damage: "0.27*PV + 0.7*ATQ",
        cooldown: 4,
        levelInfo: [
          "Dégâts +20%",
          "Ignorer la RES +20%"
        ]
      },
      {
        img: "assets/meta2.webp",
        name: "Métamorphe",
        description: `
          Fait passer ce Champion à sa Forme de base.
          Accorde ensuite un Tour supplémentaire.
        `,
        cooldown: 4,
      },
      {
        img: "assets/passif2.webp",
        name: "Enrobé de carnage [P]",
        description: `
          Double la quantité de soin reçue par ce Champion lorsqu'il attaque 
          des ennemis sous débuff <span class='gbt'>Sangsue</span>.<br><br>
          Réduit également les dégâts infligés par des ennemis sous débuffs 
          <span class='gbt'>Sangsue</span> de 50%.
        `,
        isPassive: true,
      },
    ],
    stats: {
      "PV": "25 110",
      "ATQ": "1 134",
      "DÉF": "1 046",
      "VIT": "100",
      "TAUX C.": "15%",
      "DÉG C.": "63%",
      "RÉS": "30",
      "PRÉ": "20"
    },
  },
};

// Aura commune aux deux formes
const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés lors de toutes les Batailles de 35%.`,
};
