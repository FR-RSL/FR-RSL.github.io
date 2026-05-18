// Données des deux formes de Toshiro
const championForms = {
  form1: {
        type: "Soutien",
        spells: [
          {
            img: "assets/sort1.webp",
            name: "Entaille de lance-epee",
            description: `
              Attaque 2 fois un ennemi.
              Chaque frappe Possède 50% de chances d'augmenter d'1 tour la durée
              de tous les débuffs de la cible.
            `,
            damage: "2*ATQ",
            levelInfo: [
              "Dégâts +10%",
              "Ignorer la RES +20%"
            ]
          },
          {
            img: "assets/sort2.webp",
            name: "Lanterne de ruine",
            description: `
              Place un débuff <span class='gbt'>Reduction de RES</span> de 50%
              et un débuff <span class='gbt'>Blocage des Buffs</span> sur tous les ennemis pendant 2 tours.<br><br>
              Reduit également le Compteur de Tour de chaque cible de 20%.
            `,
            cooldown: 4,
            levelInfo: [
              "Ignorer la RES +20%",
              "Temps de recharge -1"
            ]
          },
          {
            img: "assets/sort3.webp",
            name: "Apparition mortelle",
            description: `
              Attaque tous les ennemis.
              Retire tous les buffs dont disposent les ennemis.<br><br>
              Augmente également de 3 tours la durée des temps de recharge de toutes les compétence des ennemis.
            `,
            damage: "4*ATQ",
            cooldown: 5,
            levelInfo: [
              "Ignorer la RES +20%",
              "Temps de recharge -1"
            ]
          },
          {
            img: "assets/meta1.webp",
            name: "Metamorphe",
            description: `
              Fait passer ce Champion a sa Forme alternative.
              Accorde ensuite un Tour supplémentaire.
            `,
            cooldown: 4,
          },
          {
            img: "assets/passif1.webp",
            name: "Sombre vigile [P]",
            description: `
              Immunisee contre les débuffs <span class='gbt'>Etourdissement</span>.
              Augmente la PRE de cette Championne de 1 point par tranche de 2 RES qu'elle Possède.
            `,
            isPassive: true,
          },
        ],
        stats: {
          "PV": "20 970",
          "ATQ": "1 189",
          "DEF": "1 266",
          "VIT": "110",
          "TAUX C.": "15%",
          "DÉG C.": "50%",
          "RÉS": "30",
          "PRÉ": "20"
        },
      },
      form2: {
        type: "Soutien",
        spells: [
        {
            img: "assets/sort4.webp",
            name: "Aile-lame",
            description: `
              Attaque 2 fois un ennemi. Chaque frappe Possède 50% de chances 
              de reduire d'1 tour la durée de tous les débuffs sur un allié aleatoire.
            `,
            damage: "2*ATQ",
            levelInfo: [
              "Dégâts +10%",
              "Chance de Buff/débuff +10%"
            ]
          },
          {
            img: "assets/sort5.webp",
            name: "Pluie de damnation",
            description: `
              Attaque tous les ennemis. Place un buff
              <span class='gbt'>Blocage des débuffs</span> et un buff
              <span class='gbt'>Augmentation de RES</span> de 50% sur
              tous les alliés pendant 2 tours.<br><br>
              Ensuite, remplit le Compteur de Tour de tous les alliés de 20%.
            `,
            damage: "4*ATQ",
            cooldown: 4,
            levelInfo: [
              "Dégâts +10%",
              "Temps de recharge -1"
            ]
          },
          {
            img: "assets/sort6.webp",
            name: "Purge nocturne",
            description: `
              Retire tous les débuffs sur tous les alliés, puis
              reduit de 3 tours le temps de recharge de toutes les compétences des alliés sauf celles de cette Championne.
              Le temps de recharge de cette compétence ne peut pas etre reduit ou reinitialise.
            `,
            cooldown: 6,
            levelInfo: [
              "Temps de recharge -1"
            ]
          },
          {
            img: "assets/meta2.webp",
            name: "Metamorphe",
            description: `
              Fait passer ce Champion a sa Forme de base.
              Accorde ensuite un Tour supplémentaire.
            `,
            cooldown: 4,
          },
          {
            img: "assets/passif2.webp",
          name: "Reine des Tenebres [P]",
          description: `
              Immunisee contre les débuffs <span class='gbt'>Sommeil</span>.
              Augmente la VIT de cette Championne de 1 point par tranche de 10 RES qu'elle Possède
              (s'accumule jusqu'a 50).
            `,
            isPassive: true,
          },
        ],
        stats: {
          "PV": "20 970",
          "ATQ": "1 189",
          "DEF": "1 266",
          "VIT": "110",
          "TAUX C.": "15%",
          "DÉG C.": "50%",
          "RÉS": "50",
          "PRÉ": "0"
        },
      },
    };

    const aura = {
      img: "../../../../../../assets/images/auras/res.webp",
      description: `
        Augmente la statistique RES des Alliés lors de toutes les Batailles de 80.
      `,
    };
