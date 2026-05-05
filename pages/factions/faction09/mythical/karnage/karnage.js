// Données des deux formes de Toshiro
const championForms = {
  form1: {
        type: "Attaque",
        spells: [
        {
            img: "assets/sort1.png",
            name: "Entaille de souffrance",
            description: `
            	Attaque 2 fois un ennemi. Possède 50% de chances de retirer 1 buff aleatoire sur la cible.<br><br>
				<span class='gbt'>Effet Passif</span><br><br>
				Dès qu'un ennemi frappe ce Champion ou un allié, possède 50% de chances de contre-attaquer avec cette compétence. 
				Ces chances augmentent de 10% pour chaque débuff sur l'ennemi.
            `,
            damage: "2.3*(ATQ + PRE)",
            levelInfo: [
              "Dégâts +15%",
              "Ignorer la RES +15%",
            ]
          },
          {
            img: "assets/sort2.png",
            name: "Accord diabolique",
            description: `
            	Attaque 2 fois un ennemi.<br><br>
				Avant d'attaquer, échange ses PV avec un ennemi, puis vole tout ses buffs.
				Transfere également tout les débuffs de ce Champion sur la cible et place 
				un débuff <span class='gbt'>Sceau</span> sur la cible pendant 2 tours. Il est impossible de retirer ce débuff.<br><br>
				Il est impossible de résister à ce débuff et de le bloquer si la cible possède 50% de PV ou moins.
            `,
            damage: "3.5*(ATQ + PRE)",
            cooldown: 4,
            levelInfo: [
              "Temps de recharge -1"
            ],
          },
          {
            img: "assets/sort3.png",
            name: "Trinité de douleur",
            description: `
            	Attaque 3 fois un ennemi. La premiere frappe place un débuff <span class='gbt'>Blocage des Compétences Passives</span> pendant 2 tours. 
				Il est impossible de retirer ce débuff.<br><br>
				La deuxieme frappe place un débuff <span class='gbt'>Blocage des Compétences Actives</span> pendant 2 tours. 
				Il est impossible de retirer ce débuff.<br><br>
				La troisieme frappe vole 100% du Compteur de tour de la cible.
            `,
            damage: "2.7*(ATQ + PRE)",
            cooldown: 3,
            levelInfo: [
              "Ignorer la RES +15%",
              "Ignorer la RES +15%",
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
            name: "Avatar d'anarchie [P]",
            description: `
            	Chaque frappe infligée par ce Champion possède 50% de chances d'appliquer un effet de 
				<span class='gbt'>Propagation de Débuffs</span> qui prend 1 débuff aleatoire de la cible pour le placer sur tous les ennemis.<br><br>
				Dès que ce Champion tue un ennemi, possède 100% de chances d'appliquer un effet de <span class='gbt'>Propagation de Débuffs</span>, 
				prenant tout les débuffs de la cible pour les placer sur tous les ennemis. il est impossible de résister à cet effet.
            `,
            isPassive: true,
          },
        ],
        stats: {
          "PV": "19 155",
          "ATQ": "1 476",
          "DEF": "1 101",
          "VIT": "100",
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
            name: "Dard de démon",
            description: `
            	Attaque 2 fois un ennemi. Soigne ce Champion à hauteur de 20% des dégâts infligés.<br><br>
				<span class='gbt'>Effet Passif</span><br><br>
				Dès qu'un ennemi frappe ce Champion ou un allié, possède 50% de chances de contre-attaquer avec cette compétence. 
				Ces chances augmentent de 10% pour chaque débuff sur l'ennemi.
            `,
            damage: "1.8*(ATQ + PRE)",
            levelInfo: [
              "Dégâts +15%",
			  "Dégâts +15%"
            ]
          },
          {
            img: "assets/sort5.png",
            name: "Douleur singulière",
            description: `
				Attaque tous les ennemis. Ignorera les buffs <span class='gbt'>Bouclier</span>.<br><br>
				Ignorera également les buffs <span class='gbt'>Protection d'allié</span> 
				lorsqu'il attaque des ennemis affliges d'1 débuff 
				ou plus et les buffs <span class='gbt'>Invicible</span> lorsqu'il 
				attaque des ennemis affligés de 2 débuffs ou plus.
            `,
            damage: "4*(ATQ + PRE)",
            cooldown: 4,
            levelInfo: [
              "Dégâts +20%",
              "Temps de recharge -1"
            ]
          },
          {
            img: "assets/sort6.png",
            name: "Etoiles infernales",
            description: `
				Attaque 2 fois tous les ennemis.<br><br>
				Si une cible est tuée par cette compétence lorsqu'elle se trouve 
				sous 3 débuffs differents ou plus, lui inflige un débuff 
				<span class='gbt'>Blocage de réanimation</span>.<br><br>
				Soigne également ce Champion à hauteur de 30% des dégâts infligés.
            `,
            damage: "2.5*(ATQ + PRE)",
            cooldown: 5,
            levelInfo: [
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
            name: "Karnage éternel [P]",
            description: `
				Les DEG C. de ce Champion augmentent de 1% par tranche de 3 points de PRE qu'il possède.<br><br>
				Ignore 10% de la DEF de la cible pour chaque débuff dont elle est affligée.
            `,
            isPassive: true,
          },
        ],
        stats: {
          "PV": "14 370",
          "ATQ": "1 960",
          "DEF": "936",
          "VIT": "100",
          "TAUX C.": "15%",
          "DÉG C.": "63%",
          "RÉS": "30",
          "PRÉ": "20"
        },
      },
    };

    const aura = {
      img: "../../../../../../assets/images/auras/speed.png",
      description: `
        Augmente la statistique VIT des Alliés dans les batailles d'Arene de 33%.
      `,
    };
