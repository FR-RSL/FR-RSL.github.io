const championData = {
  type: "Attaque",
      spells: [
        {
			img: "assets/sort1.png",
			name: "Punis l'Orgueil",
			description: `
				Attaque 1 ennemi.<br><br>
				Place une frappe supplémentaire si la cible Possède n'importe quel buff.
			`,
			damage: "3*ATQ",
			levelInfo: [
				"Dégâts +5%",
				"Dégâts +5%",
				"Dégâts +10%",
				"Dégâts +10%",
			],
        },
        {
			img: "assets/sort2.png",
			name: "Allegresse du Boucher",
			description: `
				Attaque tous les ennemis.<br><br>
				Accorde un Tour supplémentaire et reinitialise le temps de recharge de la compétence <span class='gt'>En Chasse</span> si cette attaque tue un ennemi.
			`,
			damage: "3.7*ATQ",
			cooldown: 4,
			levelInfo: [
				"Dégâts +5%",
				"Dégâts +5%",
				"Dégâts +5%",
				"Dégâts +5%",
				"Temps de recharge -1",
			],
        },
        {
			img: "assets/sort3.png",
			name: "En Chasse",
			description: `
				Place un buff <span class='gbt'>Voile Parfait</span>, un buff <span class='gbt'>Augmentation d'ATQ</span> de 50%,
				un buff <span class='gbt'>Augmentation de VIT</span> de 30% et un buff <span class='gbt'>Augmentation des DEG C.</span> de 30%
				sur ce Champion pendant 2 tours.
			`,
			cooldown: 5,
        },
        {
        	img: "assets/passif1.png",
        	name: "Depuis les Ombres [P]",
        	description: `
				<span class='gbt'>Effet Passif</span><br><br>
				Les degats augmentent de 40% lorsque ce Champion attaque alors qu'il dispose d'un buff <span class='gbt'>Voile</span> ou <span class='gbt'>Voile Parfait</span>.<br>
				Recoit 40% de degats en moins lorsqu'il dispose d'un buff <span class='gbt'>Voile</span> ou <span class='gbt'>Voile Parfait</span>. Augmente également le Compteur de Tour
				de ce Champion de 15% chaque fois qu'il recoit des degats alors qu'il dispose d'un buff <span class='gbt'>Voile</span> ou <span class='gbt'>Voile Parfait</span>.<br>
				Ne fonctionne pas si ce Champion est le seul allié vivant de l'equipe.<br><br>
				<span class='gbt'>Effet Actif</span><br><br>
				Place un buff <span class='gbt'>Voile Parfait</span> d'1 tour sur ce Champion chaque fois que le Compteur de Tour d'un ennemi est rempli.
				Il est impossible de retirer ce buff.
        	`,
          	isPassive: true,
        },
      ],
      stats: {
        PV: "17 505",
        ATQ: "1 509",
        DEF: "903",
        VIT: "96",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        RÉS: "30",
        PRÉ: "10",
      },
  };

  const aura = {
    img: "../../../../../../assets/images/auras/attack.png",
    description: `
      Augmente la statistique ATQ des Alliés dans les batailles d'Arene de 33%.
    `,
  };

