// Données des deux formes de Toshiro
const championForms = {
  form1: {
        type: "Defense",
        spells: [
          {
            img: "assets/sort1.png",
            name: "Coupure d'aile",
            description: `
              Attaque un ennemi. Place un débuff
              <span class='gbt'>Réduction de VIT</span> de 30% pendant 2 tours.<br><br>
			  Lors d'une contre-attaque, les degats infliges par cette compétence
			  sont bases sur la DEF ce ce Champion et les PV MAX de l'ennemi.
            `,
            damage: "3.6*DEF",
            levelInfo: [
              "Dégâts +20%",
              "Ignorer la RES +20%"
            ]
          },
          {
            img: "assets/sort2.png",
            name: "Sarcasme tranchant",
            description: `
              Attaque tous les ennemis.<br><br>
			  Place un débuff <span class='gbt'>Provocation</span> pendant 1 tour.
			  Si la cible est un Boss, place au lieu de ca un débuff
			  <span class='gbt'>Provocation</span> pendant 2 tours.<br><br>
			  Place également un buff <span class='gbt'>Invincible</span> sur ce Champion
			  pendant 1 tour et un buff <span class='gbt'>Contre-attaque</span> pendant 2 tours.
            `,
            damage: "4.7*DEF",
            cooldown: 3,
            levelInfo: [
              "Dégâts +20%",
              "Ignorer la RES +20%"
            ]
          },
          {
            img: "assets/sort3.png",
            name: "Appel de Crete-sang",
            description: `
              Retablit totalement les PV MAX detruits de tous les alliés.<br><br>
			  Place également un buff <span class='gbt'>Ranimation apres la Mort</span> et un buff
			  <span class='gbt'>Augmentation de DEF</span> de 60% sur tous les alliés pendant 2 tours.<br><br>
			  Accorde ensuite un Tour supplémentaire.
            `,
            cooldown: 4,
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
            name: "Regne sur le perchoir [P]",
            description: `
              Renvoie sur l'assaillant 50% des degats recus par ce Champion.<br><br>
			  Si l'assaillant est un Boss, renvoie 100% des degats que recoit ce Champion.<br><br>
			  Soigne également ce Champion a hauteur de 50% des degats recus.
            `,
            isPassive: true,
          },
        ],
        stats: {
          "PV": "22 140",
          "ATQ": "881",
          "DEF": "1 498",
          "VIT": "101",
          "TAUX C.": "15%",
          "DÉG C.": "50%",
          "RÉS": "50",
          "PRÉ": "20"
        },
      },
      form2: {
        type: "Defense",
        spells: [
        {
            img: "assets/sort4.png",
            name: "Cri fulminant",
            description: `
              Attaque un ennemi.
			  Place une frappe supplémentaire sur tous les ennemis sous débuffs
			  <span class='gbt'>Reduction de DEF</span>.
            `,
            damage: "4*DEF (seul) | 3*DEF (zone)",
            levelInfo: [
              "Dégâts +20%"
            ]
          },
          {
            img: "assets/sort5.png",
            name: "Ciel dechire",
            description: `
              Attaque tous les ennemis.<br><br>
              Avant d'attaquer, place un débuff <span class='gbt'>Reduction de DEF</span>
			  de 60% pendant 2 tours. Il est impossible de resister a cet effet.<br><br>
			  Les degats augmentent de 10% pour chaque ennemi sous débuff
			  <span class='gbt'>Reduction de DEF</span>.
              Vole également 20% du Compteur de Tour de chaque ennemi.
            `,
            damage: "4.5*DEF",
            cooldown: 3,
            levelInfo: [
              "Dégâts +20%",
              "Ignorer la RES +20%"
            ]
          },
		  {
            img: "assets/sort6.png",
            name: "Torture sonique",
            description: `
              Attaque tous les ennemis.<br><br>
			  Ignorera 20% de la DEF de chaque ennemi n'ayant aucun buff.<br>
			  Ignore les buffs <span class='gbt'>Blocage des Degats</span>.<br><br>
              Les degats augmentent de 15% pour chaque buff sur chaque cible.<br><br>
			  Reduit la durée de tous les buffs des ennemis de 2 tours.
            `,
            damage: "4.7*DEF",
            cooldown: 4,
            levelInfo: [
              "Dégâts +20%",
              "Ignorer la RES +20%"
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
            name: "Experience impie [P]",
            description: `
              Immunise contre les débuffs
			  <span class='gbt'>Etourdissement</span>,
			  <span class='gbt'>Gel</span>,
			  <span class='gbt'>Sommeil</span>,
			  <span class='gbt'>Peur</span>,
			  <span class='gbt'>Peur Absolue</span>,
			  <span class='gbt'>Provocation</span>,
			  <span class='gbt'>Mouton</span> et 
			  <span class='gbt'>Petrification</span>.<br><br>
			  Reinitialise également de facon aleatoire le temps de recharge de l'une
			  des compétences de ce Champion chaque fois qu'il tue un ennemi. Se produit une fois par compétence.
            `,
            isPassive: true,
          },
        ],
        stats: {
          "PV": "22 140",
          "ATQ": "881",
          "DEF": "1 498",
          "VIT": "101",
          "TAUX C.": "15%",
          "DÉG C.": "63%",
          "RÉS": "30",
          "PRÉ": "20"
        },
      },
    };

    const aura = {
      img: "../../../../../../assets/images/auras/defence.png",
      description: `
        Augmente la statistique DEF des Alliés lors de toutes les Batailles de 35%.
      `,
    };
