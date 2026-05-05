// Données des deux formes de Toshiro
const championForms = {
  form1: {
        type: "Soutien",
        spells: [
          {
            img: "assets/sort1.png",
            name: "Lame-ouragan",
            description: `
              Attaque tous les ennemis.
              Possède 40% de chances de placer un débuff
              <span class='gbt'>Blocage des compétences Actives</span> pendant 1 tour.
            `,
            damage: "3.75*ATQ",
            levelInfo: [
              "Dégâts +10%",
              "Ignorer la RES +20%"
            ]
          },
          {
            img: "assets/sort2.png",
            name: "Renaissance verdoyante",
            description: `
              Retire tous les buffs dont disposent les ennemis.
              Augmente d'1 tour la durée de tous les buffs alliés.<br><br>
              Place ensuite un buff <span class='gbt'>Ranimer apres la Mort</span>
              sur tous les alliés pendant 2 tours.
            `,
            cooldown: 4,
            levelInfo: [
              "Ignorer la RES +20%",
              "Temps de recharge -1"
            ]
          },
          {
            img: "assets/sort3.png",
            name: "Murmure harmonieux",
            description: `
              Remplit le Compteur de Tour de tous les alliés de 30%,
              puis place un buff <span class='gbt'>Augmentation d'ATQ</span> de 50% 
              et un buff <span class='gbt'>Augmentation de PRE</span> de 50%
              sur tous les alliés pendant 2 tours.
            `,
            cooldown: 5,
            levelInfo: [
              "Temps de recharge -1"
            ]
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
            name: "Etreinte de Pierrepine [P]",
            description: `
              Des qu'un allié disposant d'un buff <span class='gbt'>Ranimer apres la Mort</span>
              place par cette Championne se fait attaquer, Possède 30% de chances
              de placer un débuff <span class='gbt'>Petrification</span>
              sur l'assaillant pendant 1 tour.
            `,
            isPassive: true,
          },
        ],
        stats: {
          "PV": "22 305",
          "ATQ": "980",
          "DEF": "1 387",
          "VIT": "115",
          "TAUX C.": "15%",
          "DÉG C.": "50%",
          "RÉS": "30",
          "PRÉ": "20"
        },
      },
      form2: {
        type: "PV",
        spells: [
        {
            img: "assets/sort4.png",
            name: "Lance-rocher",
            description: `
              Attaque un ennemi. Reduit le Compteur de Tour de la cible de 30%.<br><br>
              Place ensuite un buff <span class='gbt'>Soins continus</span> de 15%
              sur cette Championne pendant 1 tour.
              place également un buff <span class='gbt'>Soins continus</span> de 15%
              sur l'allié ayanat le moins de PV, sauf cette Championne, pendant 1 tour.
            `,
            damage: "0.27*PV",
            levelInfo: [
              "Dégâts +10%",
              "Ignorer la RES +20%"
            ]
          },
          {
            img: "assets/sort5.png",
            name: "Bruleronce",
            description: `
              Attaque tous les ennemis. 
              Place un débuff <span class='gbt'>Sangsue</span>
              et un débuff <span class='gbt'>Brulure de PV</span> pendant 2 tours.
            `,
            damage: "0.25*PV",
            cooldown: 3,
            levelInfo: [
              "Dégâts +10%",
              "Ignorer la RES +20%"
            ]
          },
          {
            img: "assets/sort6.png",
            name: "Clameur du Bois de Brume",
            description: `
              Place deux buffs <span class='gbt'>Soins continus</span> de 15%
              sur tous les alliés pendant 2 tours.<br><br>
              Place également un buff <span class='gbt'>Raillerie</span>
              sur cette Championne pendant 2 tours, ainsi qu'un buff
              <span class='gbt'>Peau de Pierre</span> pendant 1 tour.
            `,
            cooldown: 5,
            levelInfo: [
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
          name: "Fouillis d'epine [P]",
          description: `
              Lorsqu'elle est attaquee, place un débuff
              <span class='gbt'>Reduction de VIT</span> de 30% sur l'assaillant pendant 2 tours.
              Se produit une fois par frappe.<br><br>
              Reduit également de 20% les degats infliges par des compétences pour tous les alliés.
              Cette Championne recevra ces degats a la place.
            `,
            isPassive: true,
          },
        ],
        stats: {
          "PV": "23 955",
          "ATQ": "958",
          "DEF": "1 299",
          "VIT": "100",
          "TAUX C.": "15%",
          "DÉG C.": "50%",
          "RÉS": "50",
          "PRÉ": "20"
        },
      },
    };

    const aura = {
      img: "../../../../../../assets/images/auras/speed.png",
      description: `
        Augmente la statistique VIT des Alliés lors de toutes les Batailles de 25%.
      `,
    };
