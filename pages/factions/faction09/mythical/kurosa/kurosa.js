// Données des deux formes de Toshiro
const championForms = {
  form1: {
        type: "Soutien",
        spells: [
          {
            img: "assets/sort1.png",
            name: "Déferlement de chaos",
            description: `
              Attaque tous les ennemis.<br><br>
			  Soigne tous les alliés. La valeur du soin est proportionnelle a l'ATQ de cette Championne.
            `,
            damage: "3*ATQ | 2*ATQ (Soin)",
            levelInfo: [
              "Dégâts +10%",
              "Dégâts +10%",
            ]
          },
          {
            img: "assets/sort2.png",
            name: "Tout pour Siroth",
            description: `
              Retire tous les débuffs sur tous les alliés.<br><br>
              Ensuite, place un buff <span class='gbt'>Augmentation d'ATQ</span> de 50% 
              et un buff <span class='gbt'>Bouclier</span> sur tous les alliés pendant 2 tours.<br>
			  La valeur du <span class='gbt'>Bouclier</span> est proportionnelle a l'ATQ de cette Championne.
            `,
            cooldown: 4,
            levelInfo: [
              "Temps de recharge -1"
            ]
          },
          {
            img: "assets/sort3.png",
            name: "Propagation",
            description: `
              Place un buff <span class='gbt'>Raillerie</span> et un buff <span class='gbt'>Fortification</span> de 25% 
              sur cette Championne pendant 2 tours.<br>
			  Place également un buff <span class='gbt'>Invincible</span> sur tous les alliés sauf cette Championne pendant 2 tours.
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
            name: "Collectrice de Pions [P]",
            description: `
              <span class='gbt'>Effet Passif</span><br><br>
              Recoit 15% de degats en moins pour chaque allié vivant.<br><br>
              <span class='gbt'>Effet Actif</span><br><br>
              Fait instantanement passer cette Championne a sa Forme Alternative des que son dernier allié vivant est tue.
            `,
			cooldown: 4,
            isPassive: true,
          },
        ],
        stats: {
          "PV": "19 155",
          "ATQ": "1 509",
          "DEF": "1 068",
          "VIT": "110",
          "TAUX C.": "15%",
          "DÉG C.": "50%",
          "RÉS": "50",
          "PRÉ": "0"
        },
      },
      form2: {
        type: "Attaque",
        spells: [
        {
            img: "assets/sort4.png",
            name: "Destructrice de tout",
            description: `
              Attaque 3 fois un ennemi.<br><br>
			  Si cette attaque tue un ennemi, inflige des degats bruts a tous les autres ennemis.
			  Si les autres ennemis ne sont pas des Boss ou des sbires, la quantite de degats brut est egale a 30% des PV MAX de la cible initiale.
			  Si les autres ennemis sont des Boss ou des sbires, les degats bruts sont egaux a 10% de leurs PV MAX. Cette attaque ne peut pas etre critique.
            `,
            damage: "1.3*ATQ",
            levelInfo: [
              "Dégâts +20%",
            ]
          },
          {
            img: "assets/sort5.png",
            name: "Icône de devastation",
            description: `
              Attaque tous les ennemis. Avant d'attaquer, vole tous les buffs de tous les ennemis.
			  Les cibles dont l'ATQ est inferieure a l'ATQ de cette Championne ne peuvent pas resister a cet effet.
              Place également un débuff <span class='gbt'>Affaiblissement</span> de 25% sur tous les ennemis pendant 2 tours.
			  Les cibles dont l'ATQ est inferieure ou egale a l'ATQ de cette Championne ne peuvent pas resister a cet effet.
            `,
            damage: "4*ATQ",
            cooldown: 3,
            levelInfo: [
              "Dégâts +20%",
              "Ignorer la RES +20%"
            ]
          },
          {
            img: "assets/sort6.png",
            name: "Agent impitoyable",
            description: `
              Place un buff <span class='gbt'>Fracas</span> de 15% et un buff <span class='gbt'>Augmentation du TAUX C.</span> de 30%
			  sur cette Championne pendant 3 tours.<br><br>
			  Place un débuff <span class='gbt'>Peur Absolue</span> sur tous les ennemis pendant 1 tour.
			  Les cibles dont l'ATQ est inferieure ou egale a l'ATQ de cette Championne ne peuvent pas resister a cet effet.<br><br>
              Accorde un Tour supplémentaire.
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
          name: "Vile meurtriere [P]",
          description: `
              Inflige 15% de degats supplémentaires pour chaque allié mort.
			  Chaque coup critique booste le Compteur de Tour de cette Championne de 10% pour chaque allié mort.
            `,
            isPassive: true,
          },
        ],
        stats: {
          "PV": "17 175",
          "ATQ": "1 641",
          "DEF": "1 068",
          "VIT": "105",
          "TAUX C.": "15%",
          "DÉG C.": "63%",
          "RÉS": "30",
          "PRÉ": "0"
        },
      },
    };

    const aura = {
      img: "../../../../../../assets/images/auras/attack.png",
      description: `
        Augmente la statistique ATQ des Alliés lors de toutes les Batailles de 35%.
      `,
    };
