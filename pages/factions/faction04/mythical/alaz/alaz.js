// Données des deux formes de Toshiro
const championForms = {
  form1: {
        type: "Defense",
        spells: [
        {
            img: "assets/sort1.png",
            name: "Hache a photons",
            description: `
              Attaque 2 fois un ennemi.
			  Place une frappe supplémentaire si la cible
			  se trouve sous buff <span class='gbt'>Bouclier</span>.<br><br>
			  Chaque frappe ignorera les buffs <span class='gbt'>Bouclier</span>.
			`,
            damage: "2*DEF",
            levelInfo: [
              "Dégâts +20%",
            ]
          },
          {
            img: "assets/sort2.png",
            name: "Tonnerre retentissant",
            description: `
              Attaque tous les ennemis.
			  Avant d'attaquer, place un buff <span class='gbt'>Augmentation de DEF</span>
			  de 60% sur tous les alliés pendant 2 tours.<br><br>
			  Place une frappe supplémentaire sur les cibles ayant moins de 50% de PV apres
			  la premiere frappe. Si les PV de la cible sont superieurs ou egaux a 50% apres
			  la premiere frappe, reduit plutot les PV MAX de la cible de 30% des degats infliges.
			`,
            damage: "4.2*DEF",
            cooldown: 4,
            levelInfo: [
              "Dégâts +20%",
              "Temps de recharge -1"
            ],
          },
          {
            img: "assets/sort3.png",
            name: "Regard argent",
            description: `
              Place un débuff <span class='gbt'>Provocation</span> sur l'ennemi cible pendant 2 tours.
			  Il est impossible de resister a ce débuff si la cible Possède moins de 50% de PV.<br><br>
			  Place également sur tous les alliés un buff <span class='gbt'>Contre-attaque</span>
			  pendant 2 tours et un buff <span class='gbt'>Blocage des Degats</span> pendant 1 tour.
            `,
            cooldown: 4,
            levelInfo: [
              "Ignorer la RES +20%",
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
            name: "Cuirasse du soleil [P]",
            description: `
              Augmente la DEF de ce Champion de 5% chaque fois qu'il contre-attaque
			  (s'accumule jusqu'a 100%). Se reinitialise a chaque round.
			`,
            isPassive: true,
          },
        ],
        stats: {
          "PV": "20 970",
          "ATQ": "980",
          "DEF": "1 476",
          "VIT": "105",
          "TAUX C.": "15%",
          "DÉG C.": "63%",
          "RÉS": "50",
          "PRÉ": "0"
        },
      },
      form2: {
        type: "PV",
        spells: [
        {
            img: "assets/sort4.png",
            name: "Secousse d'eclair",
            description: `
              Attaque tous les ennemis.
			  Place une frappe supplémentaire sur les ennemis
			  sous débuff <span class='gbt'>Brulure de PV</span>.
            `,
            damage: "0.18*PV",
            levelInfo: [
              "Dégâts +20%"
            ]
          },
          {
            img: "assets/sort5.png",
            name: "Eruption solaire",
            description: `
              Attaque tous les ennemis.
			  Place un débuff <span class='gbt'>Brulure de PV</span> pendant 2 tours.
			  Les ennemis sous buff <span class='gbt'>Peau de Pierre</span> ne peuvent pas resister a ce débuff.<br><br>
			  Active ensuite instantanement les débuffs <span class='gbt'>Brulure de PV</span> sur les ennemis
			  sous buff <span class='gbt'>Peau de Pierre</span>.<br><br>
			  Place également un débuff <span class='gbt'>Peur absolue</span> sur tous les ennemis pendant 1 tour.
            `,
            damage: "0.3*PV",
            cooldown: 3,
            levelInfo: [
              "Dégâts +20%",
              "Ignorer la RES +20%",
            ]
          },
          {
            img: "assets/sort6.png",
            name: "Rayon regenerant",
            description: `
              Restaure totalement tous les PV MAX detruits des alliés,
			  puis soigne tous les alliés de 30% des PV MAX de ce Champion.<br><br>
			  Place également un buff <span class='gbt'>Renforcer</span> de 25% et un buff
			  <span class='gbt'>Augmentation de RES</span> de 50% sur tous les alliés pendant 2 tours.
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
            name: "Coeur de cieux [P]",
            description: `
              Augmente les PV de ce Champion de 6 points par tranche de 1 point de DEF
			  dont il dispose lorsqu'il est sous sa Forme alternative.<br><br>
			  Augmente de 20% les chances que les compétences des ennemis ne s'activent pas
			  lorsqu'ils se trouve sous débuff <span class='gbt'>Peur</span> ou <span class='gbt'>Peur absolue</span>
			  tout en etant affliges d'un débuff <span class='gbt'>Brulure de PV</span>.
            `,
            isPassive: true,
          },
        ],
        stats: {
          "PV": "23 955",
          "ATQ": "958",
          "DEF": "1 299",
          "VIT": "105",
          "TAUX C.": "15%",
          "DÉG C.": "63%",
          "RÉS": "50",
          "PRÉ": "0"
        },
      },
    };

    const aura = {
      img: "../../../../../../assets/images/auras/defence.png",
      description: `
        Augmente la statistique DEF des Alliés lors de toutes les Batailles de 35%.
      `,
    };
