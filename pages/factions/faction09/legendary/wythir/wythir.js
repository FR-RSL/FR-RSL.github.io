const championData = {
   	type: "Soutien",
      spells: [
        {
			img: "assets/sort1.webp",
			name: "Empalement d'Âme",
			description: `Attaque tous les ennemis. Possède 50% de chances de placer un débuff ${DEBUFFS.LEECH} pendant 1 tour. Place un buff ${BUFFS.HEALS} de 15% sur une cible aléatoire pendant 2 tours.`,
			damage: "2.8*DEF",
			levelInfo: [
				"Dégâts +5%",
				"Dégâts +5%",
				"Dégâts +5%",
				"Dégâts +5%",
			],
        },
        {
			img: "assets/sort2.webp",
			name: "Ignorer la Douleur",
			description: `Place un buff ${BUFFS.DEF} de 60% sur tous les alliés pendant 2 tours. Augmente également d'1 tour la durée de tous les buffs ${BUFFS.HEALS} sur les alliés, puis active instantanément les buffs ${BUFFS.HEALS} sur tous les alliés.`,
			levelInfo: [
				"Temps de recharge -1",
				"Temps de recharge -1",
			],
			cooldown: 5,
        },
        {
			img: "assets/sort3.webp",
			name: "Rédemptrice azurée",
			description: `Retire tous les débuffs sur tous les alliés, puis les soigne à hauteur de 30% des PV MAX de ce Champion.`,
			levelInfo: [
				"Temps de recharge -1",
				"Temps de recharge -1",
			],
			cooldown: 5,
        },
        {
        	img: "assets/passif1.webp",
        	name: "Flamme éternelle [P]",
        	description: `Au début de chaque tour, place un buff ${BUFFS.HEALS} de 15% pendant 1 tour sur l'allié ayant le moins de PV.`,
          	isPassive: true,
        },
      ],
      stats: {
        PV: "24 120",
        ATQ: "793",
        DEF: "1 178",
        VIT: "108",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        RÉS: "40",
        PRÉ: "0",
      },
  };

  const aura = {
    img: "../../../../../../assets/images/auras/res.webp",
    description: `
      Augmente la statistique RES des Alliés lors de toutes les Batailles de 50.
    `,
  };

