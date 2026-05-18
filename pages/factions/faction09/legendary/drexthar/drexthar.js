const championData = {
  type: "Defense",
      spells: [
        {
			img: "assets/sort1.webp",
			name: "Flammes Mysterieuses",
			description: `
				Attaque 3 fois un ennemi.
				Possède 30% de chances de placer un débuff <span class='gbt'>Brulure de PV</span> de 2 tours.
				Soigne ce Champion de 20% des dégats infligés si la cible est affligée d'un
				débuff <span class='gbt'>Brulure de PV</span>.
			`,
			damage: "1*DEF",
			levelInfo: [
				"Dégâts +5%",
				"Dégâts +5%",
				"Dégâts +10%",
			],
        },
        {
			img: "assets/sort2.webp",
			name: "Fouet Brulant",
			description: `
				Attaque tous les ennemis. Possède 40% de chances de placer un débuff
				<span class='gbt'>Provocation</span> pendant 1 tour.
				Ces chances passent a 100% si la cible est affligee d'un débuff <span class='gbt'>Brulure de PV</span>.
				Place également un débuff <span class='gbt'>Reduction d'ATQ</span> de 50% pendant 2 tours si le débuff 
				<span class='gbt'>Provocation</span> est place.
			`,
			damage: "5.2*DEF",
			cooldown: 4,
			levelInfo: [
				"Dégâts +5%",
				"Chance de Buff/débuff +10%",
				"Dégâts +10%",
				"Chance de Buff/débuff +10%",
				"Temps de recharge -1",
			],
        },
        {
        	img: "assets/passif1.webp",
        	name: "Sang de Feu [P]",
        	description: `
				Possède 55% de chances de placer un débuff <span class='gbt'>Brulure de PV</span> pendant 2 tours
				sur l'assaillant lorsque le Champion est frappe. La RES de ce Champion augmente de 10 pour chaque ennemi
				sous débuff <span class='gbt'>Brulure de PV</span>. S'accumule jusqu'a 50.
        	`,
		  	levelInfo: [
            	"Chance de Buff/débuff +5%",
            	"Chance de Buff/débuff +5%",
            	"Chance de Buff/débuff +10%",
          	],
          	isPassive: true,
        },
      ],
      stats: {
        PV: "18 990",
        ATQ: "914",
        DEF: "1 398",
        VIT: "100",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        RÉS: "50",
        PRÉ: "10",
      },
  };

  const aura = {
    img: "../../../../../../assets/images/auras/acc.webp",
    description: `
      Augmente la statistique PRE des Alliés lors de toutes les Batailles de 70.
    `,
  };

