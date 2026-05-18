// Données des deux formes de Toshiro
const championForms = {
  form1: {
        type: "Soutien",
        spells: [
        {
            img: "assets/sort1.png",
            name: "Attiser l'angoisse",
            description: `
              Attaque 2 fois un ennemi.<br><br>
			  Chaque frappe reduit la DEF de la cible de 2% (s'accumule jusqu'a 20%).<br><br>
			  Chaque frappe vole également 10% du Compteur de Tour de la cible.
            `,
            damage: "0.11*PV",
            levelInfo: [
              "Dégâts +10%",
              "Ignorer la RES +20%",
            ]
          },
          {
            img: "assets/sort2.png",
            name: "Agonie accablante",
            description: `
              Attaque tous les ennemis.
              Retire tous les buffs sur tous les ennemis et leur inflige un débuff
			  <span class='gbt'>Blocage des compétences actives</span> pendant 2 tours.<br><br>
			  Vole également 20% du Compteur de Tour de chaque ennemi sous débuff
			  <span class='gbt'>Blocage des compétences actives</span>.
            `,
            damage: "0.22*PV",
            cooldown: 3,
            levelInfo: [
              "Dégâts +20%",
              "Ignorer la RES +20%",
            ]
          },
          {
            img: "assets/sort3.png",
            name: "Voleur de joie",
            description: `
              Attaque un ennemi. Vole 100% du Compteur de Tour de la cible.<br><br>
			  Place également les compétences de la cible en recharge.
            `,
            damage: "0.3*PV",
            cooldown: 4,
            levelInfo: [
              "Dégâts +20%",
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
            name: "Dramatis Miserae [P]",
            description: `
              Des que ce Champion perd 30% de PV ou plus lors d'un seul tour, inflige des degats equivalents
			  a 30% des PV MAX de ce Champion a l'assaillant. Se produit une fois par tour.<br><br>
			  De plus, lorsque ce Champion perd 30% de PV ou plus lors d'un seul tour, lui accorde un buff
			  <span class='gbt'>Bouclier</span> equivalent a 30% des PV MAX de ce Champion pendant 2 tours.
            `,
            isPassive: true,
          },
        ],
        stats: {
          "PV": "21 975",
          "ATQ": "1 035",
          "DEF": "1 134",
          "VIT": "110",
          "TAUX C.": "15%",
          "DÉG C.": "50%",
          "RÉS": "50",
          "PRÉ": "20"
        },
      },
      form2: {
        type: "PV",
        spells: [
        {
            img: "assets/sort4.png",
            name: "Artiste instable",
            description: `
              Attaque 2 fois un ennemi.<br><br>
			  Chaque frappe Possède 50% de chances de placer un débuff
			  <span class='gbt'>Bombe</span> equivalent a 15% Des PV MAX de ce Champion pendant 2 tours.<br><br>
			  Soigne ce Champion de 10% de ses PV MAX pour chaque débuff <span class='gbt'>Bombe</span>
			  place.
            `,
            damage: "0.12*PV | 0.15*PV (Bombe)",
            levelInfo: [
              "Dégâts +20%",
              "Ignorer la RES +20%",
            ]
          },
          {
            img: "assets/sort5.png",
            name: "Clou du spectacle explosif",
            description: `
              Attaque tous les ennemis.<br><br>
			  Place 2 débuffs <span class='gbt'>Bombe</span> equivalent a 33% des PV MAX de ce Champion sur tous les ennemis pendant 2 tours.<br><br>
			  Fait exploser instantanement tous les débuffs <span class='gbt'>Bombe</span> sur les ennemis
			  dotes de buffs <span class='gbt'>Peau de Pierre</span> ou les ennemis 
			  dont les PV sont inferieurs aux PV de ce Champion.<br><br>
			  Ensuite, place un débuff <span class='gbt'>Etourdissement</span> pendant 1 tour sur tous les ennemis
			  dont les débuffs <span class='gbt'>Bombe</span> ont explose a cause de cette compétence.
            `,
            damage: "0.25*PV",
            cooldown: 3,
            levelInfo: [
              "Dégâts +20%",
              "Ignorer la RES +20%",
            ]
          },
          {
            img: "assets/sort6.png",
            name: "Rappel mortel",
            description: `
              Soigne ce Champion a hauteur de 50% de ses PV MAX.<br><br>
			  Place également un débuff <span class='gbt'>Affaiblissement</span> de 25%
			  pendant 2 tours sur tous les ennemis.<br><br>
			  Accorde ensuite un Tour supplémentaire.
            `,
            cooldown: 4,
            levelInfo: [
              "Niv. 1 : Ignorer la RES +20%",
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
            name: "Rira bien [P]",
            description: `
              Possède 100% de chances de renvoyer sur un assaillant tous les débuffs
			  <span class='gbt'>Bombe</span> places sur ce Champion.
			  Possède également 30% de chances de renvoyer sur un assaillant tous les autres débuffs
			  places sur ce Champion.<br><br>
			  Soigne ce Champion de 20% de ses PV MAX chaque fois qu'un ennemi est tue par un débuff <span class='gbt'>Bombe</span>.
            `,
            isPassive: true,
          },
        ],
        stats: {
          "PV": "23 625",
          "ATQ": "958",
          "DEF": "1 321",
          "VIT": "110",
          "TAUX C.": "15%",
          "DÉG C.": "63%",
          "RÉS": "30",
          "PRÉ": "20"
        },
      },
    };

    const aura = {
      img: "../../../../../../assets/images/auras/acc.png",
      description: `
        Augmente la statistique PRE des Alliés lors de toutes les Batailles de 80.
      `,
    };
