// Données des deux formes de Toshiro
const championForms = {
  form1: {
        type: "PV",
        spells: [
        {
            img: "assets/sort1.png",
            name: "Choc sismique",
            description: `
              Attaque un ennemi.
              Ignorera 5% de la DEF de la cible pour chaque buff dont benificie ce Champion.`,
            damage: "0.23*PV",
            levelInfo: [
              "Dégâts +20%",
            ]
          },
          {
            img: "assets/sort2.png",
            name: "Larcin sanglant",
            description: `
              Attaque un ennemi. Vole 2 buffs a une cible ennemie.
              Il est impossible de resister a cet effet.<br><br>
              Si cette attaque passe en critique, repete une fois l'attaque.`,
            damage: "0.34*PV",
            cooldown: 4,
            levelInfo: [
              "Dégâts +20%",
              "Temps de recharge -1"
            ],
          },
          {
            img: "assets/sort3.png",
            name: "Exterminer les faibles",
            description: `
              Attaque tous les ennemis. Les degats de cette
              compétence augmentent de 30% si les PV MAX de ce Champion
              sont plus eleves que les PV MAX de la cible.
            `,
            damage: "0.31*PV",
            cooldown: 4,
            levelInfo: [
              "Dégâts +20%",
              "Temps de recharge -1"
            ],
          },
          {
            img: "assets/meta1.png",
            name: "Metamorphe",
            description: `
              Fait passer ce Champion a sa Forme alternative.
              Accorde ensuite un Tour supplémentaire.
            `,
            cooldown: 4,
          },
          {
            img: "assets/passif1.png",
            name: "Science infinie [P]",
            description: `
              Les DEG C. de ce Champion sont augmentes de 1% par tranche de
              1000 PV qu'il Possède.<br><br>
              Augmente les PV MAX de ce Champion de 20% (s'accumule jusqu'a 100%)
              et sa VIT de 20 (s'accumule jusqu'a 100). des que ce Champion tue un ennemi.
              Se reinitialise a chaque round.`,
            isPassive: true,
          },
        ],
        stats: {
          "PV": "22 305",
          "ATQ": "980",
          "DEF": "1 387",
          "VIT": "100",
          "TAUX C.": "15%",
          "DÉG C.": "63%",
          "RÉS": "50",
          "PRÉ": "0"
        },
      },
      form2: {
        type: "Defense",
        spells: [
        {
            img: "assets/sort4.png",
            name: "Arcs de douleur",
            description: `
              Attaque 2 fois un ennemi. Chaque frappe augmente 
              la DEF de ce Champion de 5% (s'accumule jusqu'a 100%).
            `,
            damage: "1.79*DEF",
            levelInfo: [
              "Dégâts +20%"
            ]
          },
          {
            img: "assets/sort5.png",
            name: "Procedure de broyage",
            description: `
              Attaque un ennemi. Soigne ce Champion a hauteur de 50% de ses PV MAX.<br><br>
              Equilibre les PV de tous les alliés. Les niveaux de PV de tous les alliés
              seront amenes au niveau de l'allié ayant le plus de PV.
            `,
            damage: "5.31*DEF",
            cooldown: 5,
            levelInfo: [
              "Temps de recharge -1",
              "Temps de recharge -1"
            ]
          },
          {
            img: "assets/sort6.png",
            name: "Moteur de guerre",
            description: `
              Place un buff <span class='gbt'>Protection d'allié</span> de 50%
              sur tous les alliés sauf ce Champion pendant 2 tours.
              Place également un buff <span class='gbt'>Invincible</span> sur ce Champion pendant 2 tours.<br><br>
              Place ensuite un buff <span class='gbt'>Bouclier</span> de 2 tours sur les alliés
              ayant moins de 50% de PV. La valeur du bouclier est proportionnelle a la DEF de ce Champion.
            `,
            damage: "3.5*DEF (Bouclier)",
            cooldown: 5,
            levelInfo: [
              "Temps de recharge -1",
              "Temps de recharge -1"
            ]
          },
          {
            img: "assets/meta2.png",
            name: "Metamorphe",
            description: `
              Fait passer ce Champion a sa Forme de base.
              Accorde ensuite un Tour supplémentaire.
            `,
            cooldown: 4,
          },
          {
            img: "assets/passif2.png",
            name: "Armure ensorcelee [P]",
            description: `
              Lorsqu'il est attaqué, renvoie sur l'assaillant 80% des degats recus par ce Champion.
              Les débuffs places sur ce Champion detruisent la PRE de celui qui les produit de 10%
              (s'accumule jusqu'a 50%).
            `,
            isPassive: true,
          },
        ],
        stats: {
          "PV": "21 975",
          "ATQ": "837",
          "DEF": "1 553",
          "VIT": "110",
          "TAUX C.": "15%",
          "DÉG C.": "50%",
          "RÉS": "50",
          "PRÉ": "0"
        },
      },
    };

    const aura = {
      img: "../../../../../../assets/images/auras/hp.png",
      description: `
        Augmente la statistique PV des Alliés lors de toutes les Batailles de 35%.
      `,
    };
