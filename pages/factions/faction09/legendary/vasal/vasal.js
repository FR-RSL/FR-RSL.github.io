const championData = {
   	type: "PV",
      spells: [
        {
			img: "assets/sort1.webp",
			name: "Sceau Abyssal",
			description: `
				Attaque un ennemi. Place un débuff <span class='gbt'>Brulure de PV</span>
				sur la cible pendant 2 tours si elle se trouve sous débuff
				<span class='gbt'>Peur Absolue</span> ou <span class='gbt'>Reduction d'ATQ</span>.<br><br>
				Place sur ce Champion un buff <span class='gbt'>Bouclier</span> egal a 10% de ses PV MAX pendant 2 tours.
			`,
			damage: "0.25*PV",
			levelInfo: [
				"Dégâts +5%",
				"Dégâts +5%",
				"Dégâts +5%",
				"Dégâts +5%",
			],
        },
        {
			img: "assets/sort2.webp",
			name: "Tenebres Infernales",
			description: `
				Attaque tous les ennemis. Possède 75% de chances de placer un débuff <span class='gbt'>Peur Absolue</span>
				et un débuff <span class='gbt'>Reduction d'ATQ</span> de 50% pendant 2 tours.
			`,
			damage: "0.27*PV",
			cooldown: 5,
			levelInfo: [
				"Dégâts +5%",
				"Dégâts +5%",
				"Chance de Buff/débuff +10%",
				"Chance de Buff/débuff +15%",
				"Temps de recharge -1",
				"Temps de recharge -1",
			],
        },
        {
			img: "assets/sort3.webp",
			name: "Possession Demoniaque",
			description: `
				Equilibre les PV de tous les alliés. Les niveaux de PV de tous les alliés seront amenes au niveau de l'allié ayant le plus de PV.
				Apres l'equilibrage des PV, accorde un Tour supplémentaire.
			`,
			levelInfo: [
				"Temps de recharge -1",
				"Temps de recharge -1",
			],
			cooldown: 6,
        },
        {
        	img: "assets/passif1.webp",
        	name: "Legion de Ruine [P]",
        	description: `
				Recoit 20% de degats en moins de la part des Champions des Factions des Grands Seigneurs, des Hauts Elfes et de l'ordre Sacre.<br><br>
				S'il y a 2 Champions Rejetons Demoniaques ou plus dans l'equipe aux cotes de ce Champion, augmente de 20% les DEG C. de tous les Champions
				Rejetons Demoniaques de l'equipe.<br>
				[L'augmentation des DEG C. ne fonctionne que lorsque ce Champion est vivant.]
        	`,
          	isPassive: true,
        },
      ],
      stats: {
        PV: "21 315",
        ATQ: "870",
        DEF: "1 288",
        VIT: "98",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        RÉS: "40",
        PRÉ: "20",
      },
  };

  const aura = {
    img: "../../../../../../assets/images/auras/hp.webp",
    description: `
      Augmente la statistique PV des Alliés lors de toutes les Batailles de 33%.
    `,
  };

