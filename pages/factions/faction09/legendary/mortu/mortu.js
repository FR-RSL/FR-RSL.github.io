const championData = {
  type: "PV",
      spells: [
        {
			img: "assets/sort1.webp",
			name: "Stigmates",
			description: `
				Attaque 1 ennemi.
				Possède 60% de chances de placer un débuff de <span class='gbt'>Reduction des Soins</span> de 100% pendant 2 tours.
			`,
			damage: "4.8*ATQ",
          	levelInfo: [
				"Dégâts +5%",
				"Dégâts +5%",
				"Chance de Buff/débuff +10%",
				"Dégâts +15%",
				"Chance de Buff/débuff +15%",
          	],
        },
        {
			img: "assets/sort2.webp",
			name: "Tombe en Disgrace",
			description: `
				Attaque 2 fois tous les ennemis. Chaque frappe Possède 90% de chances de placer un débuff <span class='gbt'>Blocage des Buffs</span> de 2 tours.<br><br>
				Il est impossible de resister au débuff <span class='gbt'>Blocage des Buffs</span> si la cible est affligee d'un buff <span class='gbt'>Reduction des Soins</span>.

			`,
			damage: "1*ATQ + 0.1*PV",
          	levelInfo: [
				"Dégâts +10%",
				"Chance de Buff/débuff +5%",
				"Dégâts +10%",
				"Chance de Buff/débuff +5%",
				"Temps de recharge -1",
			],
			cooldown: 5,
        },
		{
			img: "assets/passif1.webp",
			name: "Rage Ardente [P]",
			description: `
				Possède 20% de chances de debloquer une compétence secrete, Peril, pendant 1 tour lorsque ce Champion se fait attaquer.
				Possède également 20% de chances de remplir le Compteur de Tour de ce Champion de 25%.
			`,
			  isPassive: true,
		},
        {
			img: "assets/sort3.webp",
			name: "Peril",
			description: `
				Attaque 2 fois 1 ennemi.
				Ignorera les buffs <span class='gbt'>Bouclier</span> et <span class='gbt'>Blocage des Degats</span>, ainsi que la DEF.
				Les ennemis tues par cette compétence ne peuvent pas etre ranimes.
			`,
			damage: "0.2*PV",
        },
      ],
      stats: {
        PV: "23 130",
        ATQ: "1 145",
        DEF: "892",
        VIT: "94",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        RÉS: "40",
        PRÉ: "0",
      },
  };

  const aura = {
    img: "../../../../../../assets/images/auras/speed.webp",
    description: `
      Augmente la statistique VIT des Alliés lors de toutes les Batailles de 24%.
    `,
  };

