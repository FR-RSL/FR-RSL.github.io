const championData = {
  type: "Defense",
      spells: [
        {
			img: "assets/sort1.png",
			name: "Griffe Pyroclastique",
			description: `
				Attaque deux fois un ennemi.
				Chaque frappe Possède 30% de chances de placer un débuff <span class='gbt'>Affaiblissement</span>
				de 25% pendant 2 tours.
				Ignorera les buffs <span class='gbt'>Bouclier</span> et <span class='gbt'>Blocage des Degats</span>.
			`,
			damage: "1.8*DEF",
			levelInfo: [
				"Dégâts +5%",
				"Dégâts +5%",
				"Chance de Buff/débuff +10%",
				"Chance de Buff/débuff +10%",
			],
        },
        {
			img: "assets/sort2.png",
			name: "Vents de la fosse",
			description: `
				Attaque tous les ennemis.
				Place un buff <span class='gbt'>Bouclier</span> sur tous les alliés pendant 2 tours.
				La valeur du <span class='gbt'>Bouclier</span> est proportionnelle a la DEF de ce Champion.
			`,
			damage: "3.8*DEF | 3.5*DEF (Bouclier)",
			levelInfo: [
				"Dégâts +5%",
				"Dégâts +5%",
				"Dégâts +10%",
				"Bouclier +10%",
				"Temps de recharge -1",
			],
			cooldown: 4,
        },
        {
			img: "assets/sort3.png",
			name: "Fervents serviteurs",
			description: `
				<span class='gbt'>Effet Actif</span><br><br>
				Place un buff <span class='gbt'>Blocage des Degats</span> sur tous les alliés pendant 2 tours.<br><br>
				<span class='gbt'>Effet Passif</span><br><br>
				Lorsqu'un buff <span class='gbt'>Blocage des Degats</span> place sur un allié par ce Champion est retire ou vole, ou qu'il expire, place un buff 
				<span class='gbt'>Augmentation de DEF</span> de 60% sur cet allié pendant 2 tours.
			`,
			levelInfo: [
				"Temps de recharge -1",
				"Temps de recharge -1",
			],
			cooldown: 6,
        },
        {
        	img: "assets/passif1.png",
        	name: "Festin d'agonie [P]",
        	description: `
				Augmente la DEF de ce Champion de 5% pour chaque allié sous buff <span class='gbt'>Blocage des Degats</span>.<br><br>
				Contre-attaque avec la compétence par defaut des qu'un allié se fait frapper lorsqu'il est sous buff <span class='gbt'>Blocage des Degats</span>.
				Ne peut survenir qu'une fois par tour ennemi.
        	`,
          	isPassive: true,
        },
      ],
      stats: {
        PV: "19 155",
        ATQ: "859",
        DEF: "1 443",
        VIT: "102",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        RÉS: "50",
        PRÉ: "0",
      },
  };

  const aura = {
    img: "../../../../../../assets/images/auras/defence.png",
    description: `
      Augmente la statistique DEF des Alliés lors de toutes les Batailles de 30%.
    `,
  };

