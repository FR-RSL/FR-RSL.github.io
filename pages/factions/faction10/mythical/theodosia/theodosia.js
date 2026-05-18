// Données des deux formes de Toshiro
const championForms = {
  form1: {
        type: "Soutien",
        spells: [
          {
            img: "assets/sort1.webp",
            name: "Tempete de Serpentia",
            description: `
              Attaque un ennemi.<br><br>
			  Soigne tous tes alliés a hauteur de 5% des PV MAX de cette Championne.<br><br>
			  Remplit le Compteur de Tour de cette Championne de 5% pour chaque allié vivant
			  et de 2,5% supplémentaires pour chaque ennemi vivant.
            `,
            damage: "0.27*PV",
            levelInfo: [
              "Dégâts +10%",
			  "Soins +10%"
            ]
          },
          {
            img: "assets/sort2.webp",
            name: "Fortitude derangee",
            description: `
              Retire tous les débuffs sur tous les alliés,
			  puis place un buff <span class='gbt'>Voile parfait</span>
			  sur tous les alliés, sauf cette Championne, pendant 2 tours.<br><br>
			  Place un buff <span class='gbt'>Peau de Pierre</span> sur cette Championne pendant 1 tour.
            `,
            cooldown: 4,
            levelInfo: [
              "Temps de recharge -1"
            ]
          },
          {
            img: "assets/sort3.webp",
            name: "Regeneration anormale",
            description: `
              Ranime tous les alliés morts avec 50% de PV et 50% de Compteur de Tour.<br><br>
			  Place un buff <span class='gbt'>Invincible</span> sur tous les alliés pendant 2 tours.
            `,
            cooldown: 6,
            levelInfo: [
              "Temps de recharge -1",
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
            name: "Protection haineuse [P]",
            description: `
              Tous les 7 tours, equilibre les PV de tous les alliés.
			  Le niveau de PV ce cette Championne sera ramene au niveau de PV moyen de l'equipe.<br><br>
			  Les alliés recevront 1% de degats en moins par tranche de 2% de PV perdus (s'accumule jusqu'a 25%).
			  Si plusieurs Champions de l'equipe disposent de cette compétence, une seule sera activee.
            `,
            isPassive: true,
          },
        ],
        stats: {
          "PV": "22 470",
          "ATQ": "925",
          "DEF": "1 432",
          "VIT": "115",
          "TAUX C.": "15%",
          "DÉG C.": "50%",
          "RÉS": "50",
          "PRÉ": "0"
        },
      },
      form2: {
        type: "Soutien",
        spells: [
        {
            img: "assets/sort4.webp",
            name: "Je te trouverai...",
			description: `
              Attaque un ennemi.<br><br>
			  Detruit la VIT de la cible de 3 points (s'accumule jusqu'a 30).<br><br>
			  Reduit le Compteur de Tour de la cible de 5% pour chaque allié vivant 
			  et de 2,5% supplémentaires pour chaque ennemi vivant.
            `,
            damage: "0.29*PV",
            levelInfo: [
              "Ignorer la RES +20%"
            ]
          },
          {
            img: "assets/sort5.webp",
            name: "Sinistre massacre",
			description: `
              Attaque tous les ennemis. Avant d'attaquer, vole tous les buffs de tous les ennemis.<br><br>
			  Place un débuff <span class='gbt'>Blocage des Buffs</span> et un débuff <span class='gbt'>Reduction de DEF</span>
			  de 60% sur tous les ennemis pendant 2 tours. Si la VIT d'un ennemi est inferieure a la VIT
			  de cette Championne, ces débuffs seront proteges.
            `,
            damage: "0.27*PV",
            cooldown: 4,
            levelInfo: [
              "Ignorer la RES +20%",
              "Temps de recharge -1"
            ]
          },
          {
            img: "assets/sort6.webp",
            name: "Murmure somnolent",
			description: `
              Place un débuff <span class='gbt'>Sommeil</span> pendant 1 tour
			  et un débuff <span class='gbt'>Reduction de VIT</span> de 30% pendant 2 tours sur tous les ennemis.
			  Si la VIT d'un ennemi est inferieure a la VIT de cette Championne, le débuff
			  <span class='gbt'>Reduction de VIT</span> sera protege.<br><br>
			  Reduit ensuite le Compteur de Tour de tous les ennemis de 25%.
			`,
            cooldown: 4,
            levelInfo: [
              "Ignorer la RES +20%",
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
          name: "Ils sont inferieurs [P]",
          description: `
            Cette Championne est immunisee contre les débuffs <span class='gbt'>Blocage des compétences Actives</span>.<br><br>
			Lorsque les alliés attaquent, leurs degats seront augmentes de 25% du Compteur de Tour actuel de leur cible.
			Si plusieurs Champions de l'equipe disposent de cette compétence, une seule sera activee.
          `,
            isPassive: true,
          },
        ],
        stats: {
          "PV": "22 470",
          "ATQ": "925",
          "DEF": "1 432",
          "VIT": "115",
          "TAUX C.": "15%",
          "DÉG C.": "50%",
          "RÉS": "30",
          "PRÉ": "20"
        },
      },
    };

    const aura = {
      img: "../../../../../../assets/images/auras/speed.webp",
      description: `
        Augmente la statistique VIT des Alliés lors de toutes les Batailles de 25%.
      `,
    };
