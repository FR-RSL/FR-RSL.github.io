// Données des deux formes de Toshiro
const championForms = {
  form1: {
        type: "PV",
        spells: [
        {
            img: "assets/sort1.png",
            name: "Ecrase-ennemi",
            description: `
              Attaque un ennemi.
			  Possède 50% de chances d'augmenter de 2 tours le temps
			  de recharge d'une compétence aleatoire sur la cible.<br><br>
			  Retire également tous les buffs <span class='gbt'>Bouclier</span>.
            `,
            damage: "0.28*PV",
            levelInfo: [
              "Dégâts +10%",
              "Ignorer la RES +20%"
            ]
          },
          {
            img: "assets/sort2.png",
            name: "Marteau-seisme",
            description: `
              Attaque tous les ennemis.
			  Place un débuff <span class='gbt'>Provocation</span> 
			  sur tous les ennemis pendant 1 tour.<br><br>
			  Place un buff <span class='gbt'>Invincible</span>
			  sur ce Champion pendant 3 tours.
            `,
            damage: "0.25*PV",
            cooldown: 4,
            levelInfo: [
              "Dégâts +20%",
              "Ignorer la RES +20%"
            ]
		},
		{
			img: "assets/sort3.png",
            name: "Lies par le sang",
            description: `
			Retire les débuffs <span class='gbt'>Blocage des Buffs</span> sur tous les alliés et place
			un buff <span class='gbt'>Protection d'allié</span> de 50% sur tous les alliés sauf
			cette Championne pendant 2 tours.<br><br>
			Place eglament sur tous les alliés un buff <span class='gbt'>Bouclier</span> equivalent a 30%
			des PV MAX de cette Championne pendant 2 tours
            `,
            cooldown: 5,
			levelInfo: [
			  "Temps de recharge -1",
			  "Temps de recharge -1"
			],
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
            name: "Tuer ou soigner [P]",
            description: `
              Lorsqu'elle est attaquee, reduit d'1 tour la durée de tous les buffs
			  de l'assaillant. Se produit une fois par frappe.<br><br>
			  Soigne également tous les alliés sauf cette Championne a hauteur de 50%
			  des degats subis des que cette Championne est frappée.
			  Se produit une fois par frappe.
           `,
            isPassive: true,
          },
        ],
        stats: {
          "PV": "23 955",
          "ATQ": "958",
          "DEF": "1 299",
          "VIT": "102",
          "TAUX C.": "15%",
          "DÉG C.": "50%",
          "RÉS": "50",
          "PRÉ": "20"
        },
      },
      form2: {
        type: "Attaque",
        spells: [
        {
            img: "assets/sort4.png",
            name: "Cognement de magma",
            description: `
              Attaque tous les ennemis. Possède 20% de chances de repeter l'attaque.
            `,
            damage: "2.7*ATQ",
            levelInfo: [
				"Dégâts +10%",
            	"Dégâts +10%",
            ]
          },
          {
            img: "assets/sort5.png",
            name: "Massue calamiteuse",
            description: `
              Attaque tous les ennemis. Les degats augmentent de cette 
			  compétence augmentent de 10% pour chaque buff sur cette Championne.<br><br>
			  Ignorera 30% de la DEF de la cible.
            `,
            damage: "4*ATQ",
            cooldown: 3,
            levelInfo: [
            	"Dégâts +10%",
            	"Dégâts +10%",
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
            name: "Brume pourpre [P]",
            description: `
              Des qu'un allié attaque, cette Championne Possède 25% de chances de faire
			  equipe avec lui et de rejoindre l'attaque.<br><br>
			  Les degats augmentent a mesure que les PV du Champion baissent
			  (+1% par tranche de 1% de PV perdus).
            `,
            isPassive: true,
          },
        ],
        stats: {
          "PV": "16 020",
          "ATQ": "1 608",
          "DEF": "1 178",
          "VIT": "102",
          "TAUX C.": "15%",
          "DÉG C.": "63%",
          "RÉS": "50",
          "PRÉ": "0"
        },
      },
    };

    const aura = {
      img: "../../../../../../assets/images/auras/hp.png",
      description: `
        Augmente la statistique PV des Alliés lors de toutes les Batailles de 35%.
      `,
    };
