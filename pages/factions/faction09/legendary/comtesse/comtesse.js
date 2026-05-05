const championData = {
  type: "Attaque",
      spells: [
        {
          img: "assets/sort1.png",
          name: "Caresse Pourrissante",
          description: `
            Attaque 2 fois un ennemi.
			Possède 30% de chances de placer un débuff
			<span class='gbt'>Affaiblissement</span> de 25% pendant 2 tours.
          `,
          damage: "1.6*ATQ",
          levelInfo: [
            "Dégâts +5%",
            "Chance de Buff/débuff +10%",
            "Dégâts +5%",
            "Chance de Buff/débuff +10%",
          ],
        },
        {
          img: "assets/sort2.png",
          name: "Fange de Misere",
          description: `
            Attaque 3 fois tous les ennemis. Chaque frappe posséde 75% de chances de placer un débuff 
			<span class='gbt'>Réduction de VIT</span> de 30% pendant 2 tours. 
			Chaque frappe posséde également 75% de chances de réduire le Compteur de Tour de l'ennemi de 10%.
          `,
          cooldown: 5,
          damage: "1.15*ATQ",
          levelInfo: [
          	"Dégâts +10%",
            "Chance de Buff/débuff +10%",
            "Chance de Buff/débuff +15%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/sort3.png",
          name: "Dilatation du Temps",
          description: `
            Attaque tous les
			ennemis. Possède 75% de chances de placer un débuff 
			<span class='gbt'>Blocage des Compétences Actives</span> pendant 2 tours.
			<br><br> Réduit également d’1 tour les temps de recharge de toutes
			les compétences alliées, sauf celles de ce Champion.
          `,
          cooldown: 7,
          damage: "4*ATQ",
          levelInfo: [
            "Chance de Buff/débuff +10%",
          	"Dégâts +10%",
            "Chance de Buff/débuff +15%",
            "Temps de recharge -1",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/passif1.png",
          name: "Damnee [P]",
          description: `
            Au début de chaque tour,
			retire un débuff aléatoire sur <span class='gold-t'>Astralon</span> et ce
			Champion.<br><br> Uniquement disponible lorsque <span class='gold-t'>Astralon</span> se
			trouve dans l’équipe.
          `,
          isPassive: true,
        },
        {
          img: "assets/passif2.png",
          name: "Malheur Canalise [P]",
          description: `
            Remplit le Compteur de Tour
			de ce Champion de 5% chaque fois qu'un allié recoit
			un débuff.
          `,
          isPassive: true,
        },
      ],
      stats: {
        PV: "17 175",
        ATQ: "1 498",
        DEF: "936",
        VIT: "100",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        RÉS: "30",
        PRÉ: "20",
      },
  };

  	const aura = null;

