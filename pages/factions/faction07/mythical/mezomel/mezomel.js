// Données des deux formes de Toshiro
const championForms = {
  form1: {
        type: "Attaque",
        spells: [
          {
            img: "assets/sort1.png",
            name: "Griffe-lune",
            description: `
              Attaque un ennemi. Place un débuff
              <span class='gbt'>Réduction de DEF</span> de 60% pendant 2 tours.
            `,
            damage: "4.05*ATQ",
            levelInfo: [
              "Dégâts +10%",
              "Ignorer la RES +20%"
            ]
          },
          {
            img: "assets/sort2.png",
            name: "Croissant ecarlate",
            description: `
              Attaque 2 fois un ennemi.<br><br>
              Ignorera 15% de la DEF de la cible ainsi que
              les buffs <span class='gbt'>Peau de Pierre</span>,
              <span class='gbt'>Renforcer</span>,
              <span class='gbt'>Protection d'allié</span> et 
              <span class='gbt'>Bouclier</span>.<br><br>
              Place un débuff <span class='gbt'>Blocage de reanimation</span>
              si la cible est tuee.
              `,
            damage: "2.8*ATQ",
            cooldown: 4,
            levelInfo: [
              "Dégâts +20%",
              "Temps de recharge -1",
            ]
          },
          {
            img: "assets/sort3.png",
            name: "Cadeau de clair de lune",
            description: `
              Place un buff <span class='gbt'>Augmentation d'ATQ</span> de 50%,
              un buff <span class='gbt'>Augmentation du TAUX C.</span> de 30% et
              un buff <span class='gbt'>Augmentation des DEG C.</span> de 30%
              sur cette Championne pendant 3 tours.<br><br>
              Accorde un Tour supplémentaire.
            `,
            cooldown: 6,
            levelInfo: [
              "Temps de recharge -1",
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
            name: "Chasse implacable [P]",
            description: `
              Soigne cette Championne a hauteur de 20% des degats infliges.
              Place un buff <span class='gbt'>Ranimer apres la Mort</span>
              sur cette Championne pendant 2 tours lorsqu'elle tue un ennemi.
            `,
            isPassive: true,
          },
        ],
        stats: {
          "PV": "16 680",
          "ATQ": "1 652",
          "DEF": "1 090",
          "VIT": "105",
          "TAUX C.": "15%",
          "DÉG C.": "63%",
          "RÉS": "30",
          "PRÉ": "20"
        },
      },
      form2: {
        type: "Attaque",
        spells: [
        {
            img: "assets/sort4.png",
            name: "Esprit de la meute",
            description: `
              Attaque tous les ennemis.
              Cette attaque ne declenchera pas de contre-attaques.<br><br>
              Place une frappe supplémentaire sur les ennemis sous débuffs
              <span class='gbt'>Peur Absolue</span>.
              `,
            damage: "2.5*ATQ",
            levelInfo: [
              "Dégâts +10%",
              "Dégâts +10%"
            ]
          },
          {
            img: "assets/sort5.png",
            name: "Dechiquette-vie",
            description: `
              Attaque tous les ennemis.
              Place un débuff <span class='gbt'>Peur Absolue</span> pendant 2 tours.<br><br>
              Cette attaque ne declenchera pas de contre-attaques.
              Ignorera également les buffs 
              <span class='gbt'>Invincible</span> et <span class='gbt'>Blocage des Degats</span>.
            `,
            damage: "2.15*ATQ",
            cooldown: 4,
            levelInfo: [
              "Dégâts +20%",
              "Ignorer la RES +20%",
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
            name: "Etreindre la bete [P]",
            description: `
              Augmente l'ATQ et les DEG C. de cette Championne de 20%
              lorsqu'elle se trouve sous sa Forme alternative.
            `,
            isPassive: true,
          },
        ],
        stats: {
          "PV": "16 680",
          "ATQ": "1 652",
          "DEF": "1 090",
          "VIT": "105",
          "TAUX C.": "15%",
          "DÉG C.": "63%",
          "RÉS": "30",
          "PRÉ": "20"
        },
      },
    };

    const aura = {
      img: "../../../../../../assets/images/auras/crit.png",
      description: `
        Augmente la statistique TAUX C. des Alliés lors de toutes les Batailles de 27%.
      `,
    };
