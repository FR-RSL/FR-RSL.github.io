// Données des deux formes de Toshiro
const championForms = {
  form1: {
        type: "PV",
        spells: [
        {
            img: "assets/sort1.png",
            name: "Arc d'ignition",
            description: `
              Attaque 3 fois un ennemi.<br><br>
              Chaque frappe a 50% de chances d'augmenter d'1 tour la durée de tous les débuffs de la cible.<br><br>
              Chaque frappe a 100% de chances d'augmenter d'1 tour la durée d'un débuff <span class='gbt'>Brulure de PV</span> sur la cible
              si les chances initiales ne se sont pas activees.
            `,
            damage: "0.09*PV",
            levelInfo: [
              "Dégâts +20%",
            ]
          },
          {
            img: "assets/sort2.png",
            name: "Tempete pyroclaste",
            description: `
              Attaque tous les ennemis.<br><br>
              Active instantanement tous les débuffs <span class='gbt'>Brulure de PV</span> sur tous les ennemis et alliés.<br><br>
              Des que cette compétence active un débuff <span class='gbt'>Brulure de PV</span> sur un ennemi, reduit sa RES de 10 points
              (s'accumule jusqu'a 100).
              Des que cette compétence active un débuff <span class='gbt'>Brulure de PV</span> sur un allié, augmente sa RES de 10 points
              (s'accumule jusqu'a 100).<br><br>
              Remplit également le Compteur de Tour de tous les alliés de 5% pour chaque débuff <span class='gbt'>Brulure de PV</span> active sur les ennemis.
            `,
            damage: "0.26*PV",
            cooldown: 5,
            levelInfo: [
              "Dégâts +20%",
              "Temps de recharge -1"
            ],
          },
          {
            img: "assets/sort3.png",
            name: "Couronne de flammes",
            description: `
              Place un débuff <span class='gbt'>Affaiblissement</span> de 25% 
              et un débuff <span class='gbt'>Brulure de PV</span> sur tous les ennemis pendant 2 tours.<br><br>
              Place également un débuff <span class='gbt'>Brulure de PV</span> sur tous les alliés pendant 2 tours.
              Il est impossible de resister a ce débuff et de le bloquer.<br><br>
              Remplit ensuite le Compteur de Tour de tous les alliés de 30%.
            `,
            cooldown: 3,
            levelInfo: [
              "Ignorer la RES +20%"
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
            name: "Que le feu te soigne [P]",
            description: `
              Chaque débuff <span class='gbt'>Brulure de PV</span> place par ce Champion sous sa Forme de base augmente
              ses PV MAX et sa DEF de 5% (s'accumule jusqu'a 25% pour les deux Formes et ne se reinitialisera pas).<br><br>
              Les débuffs <span class='gbt'>Brulure de PV</span> places sur les alliés les soignent au lieu de leur infliger des degats.<br><br>
              Les alliés infligent 3% de degats en plus pour chaque débuff <span class='gbt'>Brulure de PV</span> actif.
              Si plusieurs Champions de l'equipe disposent de cette compétence, une seule sera activee.
           `,
            isPassive: true,
          },
        ],
        stats: {
          "PV": "23 130",
          "ATQ": "1 013",
          "DEF": "1 299",
          "VIT": "115",
          "TAUX C.": "15%",
          "DÉG C.": "50%",
          "RÉS": "30",
          "PRÉ": "20"
        },
      },
      form2: {
        type: "Defense",
        spells: [
        {
            img: "assets/sort4.png",
            name: "Etoile de tonnerre",
            description: `
              Attaque 2 fois un ennemi. A 25% de chances de repeter chaque frappe.<br><br>
              Chaque frappe place également un débuff <span class='gbt'>Reduction de DEF</span> de 60% pendant 2 tours.
            `,
            damage: "1.9*DEF",
            levelInfo: [
              "Chances de Buff/débuff +15%",
              "Dégâts +20%",
            ]
          },
          {
            img: "assets/sort5.png",
            name: "Geyser de magma",
            description: `
              Attaque un ennemi.<br><br>
              Applique un effet de <span class='gbt'>Propagation de débuffs</span>, prenant tous les débuffs
              de la cible pour les placer sur tous les ennemis.<br><br>
              Ensuite, repete l'attaque sur tous les ennemis.
              Augment d'1 tour la durée de tous les débuffs de tous les ennemis.<br><br>
              Les deux attaques ignoreront 20% de la DEF de chaque cible.
            `,
            damage: "4.9*DEF (seul)\t|\t3.7*DEF (zone)",
            cooldown: 3,
            levelInfo: [
              "Dégâts +10%",
              "Dégâts +20%",
            ]
          },
          {
            img: "assets/sort6.png",
            name: "Ecrasement de cataclysme",
            description: `
              Attaque tous les ennemis. Avant d'attaquer, place un buff <span class='gbt'>Augmentation de DEF</span> de 60%
              et un buff <span class='gbt'>Augmentation des DEG C.</span> de 30% sur tous les alliés pendant 2 tours.<br><br>
              Place un débuff <span class='gbt'>Provocation</span> pendant 1 tour.
              Si la cible de cette compétence est un Boss, place au lieu de ca un débuff <span class='gbt'>Provocation</span> pendant 2 tours.<br><br>
              Cette attaque ne peut pas etre une frappe faible lorsqu'elle touche des ennemis sous débuff <span class='gbt'>Brulure de PV</span>.
            `,
            damage: "4.5*DEF",
            cooldown: 4,
            levelInfo: [
              "Dégâts +10%",
              "Dégâts +20%",
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
            name: "Que le feu te brise [P]",
            description: `
              Chaque débuff <span class='gbt'>Brulure de PV</span> place par ce Champion sous sa Forme de base augmente
              ses PV MAX et sa DEF de 5% (s'accumule jusqu'a 25% pour les deux Formes et ne se reinitialisera pas).<br><br>
              Toutes les compétences de ce Champion ignoreront 20% de la DEF de l'ennemi si ce dernier se trouve sous débuff <span class='gbt'>Brulure de PV</span>.<br><br>
              Les débuffs <span class='gbt'>Brulure de PV</span> places sur les alliés les soignent au lieu de leur infliger des degats.
            `,
            isPassive: true,
          },
        ],
        stats: {
          "PV": "19 650",
          "ATQ": "947",
          "DEF": "1 597",
          "VIT": "105",
          "TAUX C.": "15%",
          "DÉG C.": "63%",
          "RÉS": "30",
          "PRÉ": "20"
        },
      },
    };

    const aura = {
      img: "../../../../../../assets/images/auras/hp.png",
      description: `
        Augmente la statistique PV des Alliés lors de toutes les Batailles de 35%.
      `,
    };
