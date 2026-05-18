const championData = {
  type: "Attaque",
      	spells: [
        {
			img: "assets/sort1.webp",
			name: "Immense Brasier",
			description: `
				Attaque 3 fois un ennemi.
				Chaque frappe Possède 15% de chances d'augmenter d'1 tourla durée des débuffs
				<span class='gbt'>Brulure de PV</span> sur la cible.
			`,
			damage: "1.05*ATQ",
			levelInfo: [
				"Dégâts +5%",
				"Chance de Buff/débuff +5%",
				"Dégâts +10%",
				"Chance de Buff/débuff +10%",
			],
        },
        {
			img: "assets/sort2.webp",
			name: "Eruption de Flammes",
			description: `
				Attaque tous les ennemis.
				Possède 80% de chances de placer un débuff <span class='gbt'>Affaiblissement</span> de 25% pendant 2 tours.
				Possède également 80% de chances de placer un débuff <span class='gbt'>Reduction de DEF</span> de 60% pendant 2 tours
				si au moins deux ennemis sont affliges de débuffs <span class='gbt'>Brulure de PV</span>.<br><br>
				Active instantanement les débuffs <span class='gbt'>Brulure de PV</span> sur chaque cible et reduit d'1 tour
				la durée de ces débuffs <span class='gbt'>Brulure de PV</span>.
			`,
			damage: "3.7*ATQ",
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
			img: "assets/sort3.webp",
			name: "Rite Tempete de Feu",
			description: `
				Place un débuff <span class='gbt'>Brulure de PV</span> sur ce Champion pendant 3 tours, puis attaque tous les ennemis.
				Possède 75% de chances de placer un débuff <span class='gbt'>Brulure de PV</span> sur tous les ennemis pendant 3 tours.
				Accorde un Tour supplémentaire si un débuff <span class='gbt'>Brulure de PV</span> est place sur tous les ennemis.
			`,
			damage: "3.5*ATQ",
			levelInfo: [
				"Dégâts +5%",
				"Chance de Buff/débuff +10%",
				"Dégâts +15%",
				"Chance de Buff/débuff +15%",
				"Temps de recharge -1",
			],
			cooldown: 5,
        },
        {
        	img: "assets/passif1.webp",
        	name: "Metaphysique [P]",
        	description: `
				Augmente la VIT de ce Champion de 3 et les degats infliges de 3% pour chaque allié et ennemi se trouvant sous débuff <span class='gbt'>Brulure de PV</span>.
				Si <span class='gold-t'>Cardiel</span> se trouve dans l'equipe, tous les alliés seront soignes de 3% de leurs PV MAX grace aux débuffs <span class='gbt'>Brulure de PV</span>
				au lieu de subir des degats et de perdre des PV.
        	`,
          	isPassive: true,
        },
      ],
      stats: {
        PV: "13 050",
        ATQ: "1 586",
        DEF: "1 123",
        VIT: "97",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        RÉS: "30",
        PRÉ: "20",
      },
  };

  const aura = {
    img: "../../../../../../assets/images/auras/acc.webp",
    description: `
      Augmente la statistique PRE des Alliés lors de toutes les Batailles de 60.
    `,
  };

