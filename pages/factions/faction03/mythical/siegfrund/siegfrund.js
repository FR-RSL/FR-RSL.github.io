// Données des deux formes de Toshiro
const championForms = {
  form1: {
        type: "Attaque",
        spells: [
          {
            img: "assets/sort1.png",
            name: "Fil ecorchant",
            description: `
              Attaque 2 fois un ennemi.<br><br>
              La première frappe transfère tous les débuffs de ce Champion sur la cible.
              La second frappe augmente ensuite d’1 tour la durée de tous les débuffs sur la cible.
            `,
            damage: "2*ATQ",
            levelInfo: ["Dégâts +10%"],
          },
          {
            img: "assets/sort2.png",
            name: "Vague seraphique",
            description: `
              Attaque tous les ennemis. Chaque coup critique remplit le Compteur de Tour de ce Champion de 25%.<br><br>
              Reinitialise le temps de recharge de la compétence <span class='gt'>Rage du Nephel</span> si cette attaque tue un ennemi.<br><br>
              Reinitialise le temps de recharge de toutes les compétences de ce Champion si cette attaque tue 2 ennemis ou plus.
            `,
            damage: "4.6*ATQ",
            cooldown: 4,
            levelInfo: ["Dégâts +20%", "Temps de recharge -1"],
          },
          {
            img: "assets/sort3.png",
            name: "Rage du Nephel",
            description: `
              Attaque un ennemi. Ignore 50% de la DEF de la cibe.
              Si la cible est tuée, attaquera tous les ennemis restants avec l'excédent de dégâts.<br><br>
              Soigne totalement ce Champion si la frappe initiable tue un ennemi.
            `,
            damage: "6*ATQ",
            cooldown: 4,
            levelInfo: ["Dégâts +20%", "Temps de recharge -1"],
          },
          {
            img: "assets/meta1.png",
            name: "Metamorphe [P]",
            description: `
              Fait passer ce Champion à sa Forme alternative dès que son dernier allié vivant est tué.
              Accorde ensuite un tour supplémentaire.
            `,
            cooldown: 4,
            isPassive: true,
          },
          {
            img: "assets/passif1.png",
            name: "Stopper la lame [P]",
            description: `
              Si ce Champion est sur le point de se faire tuer par un coup fatal,
              bloque les dégâts en approche et place un buff <span class='gbt'>Blocage de dégâts</span> sur ce champion pendant 2 tours.<br><br>
              Soigne ensuite ce champion de 50% de ses PV MAX et remplit son compteur de tours de 100%.
            `,
            cooldown: 3,
            isPassive: true,
          },
        ],
        stats: {
          PV: "16 350",
          ATQ: "1 663",
          DEF: "1 101",
          VIT: "110",
          "TAUX C.": "15%",
          "DÉG C.": "63%",
          RÉS: "30",
          PRÉ: "0",
        },
      },
      form2: {
        type: "Soutien",
        spells: [
          {
            img: "assets/sort4.png",
            name: "Consumer",
            description: `
              Attaque tous les ennemis. Soigne tous les alliés de 30% des dégâts infligés.
            `,
            damage: "3*ATQ",
            levelInfo: ["Dégâts +10%"],
          },
          {
            img: "assets/sort5.png",
            name: "Parade nephelique",
            description: `
              Retire tous les débuffs sur tous les alliés.<br><br>
              Soigne ensuite tous les alliés de 30% de leurs PV MAX, puis leur accorde un buff
              <span class='gbt'>Blocage des débuffs</span> pendant 2 tours.
            `,
            cooldown: 4,
            levelInfo: ["Temps de recharge -1"],
          },
          {
            img: "assets/sort6.png",
            name: "Lumiere de l'au-delà",
            description: `
              Ranime tous les alliés morts avec 50% de PV et 50% de Compteur de Tour, puis place un buff
              <span class='gbt'>Blocage des Degats</span> sur tous les alliés pendant 2 tours.
            `,
            cooldown: 6,
            levelInfo: ["Temps de recharge -1","Temps de recharge -1"],
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
            name: "Bouclier de defi [P]",
            description: `
              Reduit les degats infliges par des compétences de 20%.
            `,
            isPassive: true,
          },
        ],
        stats: {
          PV: "20 640",
          ATQ: "1 112",
          DEF: "1 365",
          VIT: "110",
          "TAUX C.": "15%",
          "DÉG C.": "50%",
          RÉS: "50",
          PRÉ: "0",
        },
      },
    };

    const aura = {
      img: "../../../../../../assets/images/auras/attack.png",
      description: `
        Augmente la statistique ATQ des Alliés lors de toutes les Batailles de 35%.
      `,
    };
