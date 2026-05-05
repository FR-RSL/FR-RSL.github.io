const championData = {
  type: "Attaque",
      spells: [
        {
          img: "assets/sort1.png",
          name: "Epines malignes",
          description: `
            Attaque un ennemi. Avant d'attaquer, place un buff <span class='gbt'>Bouclier</span>
			sur ce Champion pendant 2 tours. La valeur du <span class='gbt'>Bouclier</span> est proportionnelle
			a l'ATQ de ce Champion.<br><br>
			A 50% de chances de placer un débuff <span class='gbt'>Sensibilite au Poison</span> de 25% pendant 2 tours.
          `,
          damage: "3.8*ATQ | 4*ATQ (Bouclier)",
          levelInfo: [
            "Dégâts +10%",
            "Chance de Buff/débuff +10%",
            "Chance de Buff/débuff +15%"
          ],
        },
        {
          img: "assets/sort2.png",
          name: "Tornade de vie",
          description: `
            Attaque un ennemi.<br><br>
			A 75% de chances de placer un débuff <span class='gbt'>Sangsue</span> sur tous les ennemis pendant 2 tours.<br><br>
			Active instantanement tous les débuffs <span class='gbt'>Poison</span> sur tous les ennemis.
          `,
          damage: "5.5*ATQ",
          cooldown: 4,
          levelInfo: [
            "Dégâts +10%",
            "Dégâts +10%",
            "Chance de Buff/débuff +10%",
            "Chance de Buff/débuff +15%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/sort3.png",
          name: "Croissance monstrueuse",
          description: `
            Attaque un ennemi.
			Avant d'attaquer, place un buff <span class='gbt'>Augmentation de PRE</span> de 50% sur tous les alliés pendant 2 tours.<br><br>
			A 75% de chances de placer un débuff <span class='gbt'>Reduction de RES</span> de 50% sur tous les ennemis pendant 2 tours.<br><br>
			Place trois débuffs <span class='gbt'>Poison</span> de 5% sur la cible initiale pendant 2 tours. Si cette attaque est critique,
			place au lieu de ca trois débuffs <span class='gbt'>Poison</span> de 5% sur tous les ennemis pendant 2 tours.
          `,
          damage: "5.8*ATQ",
          cooldown: 4,
          levelInfo: [
            "Dégâts +10%",
            "Dégâts +10%",
            "Chance de Buff/débuff +10%",
            "Chance de Buff/débuff +15%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/passif1.png",
          name: "Abandonne au chaos [P]",
          description: `
            Augmente l'effet Ignorer la DEF de ce Champion de 1% pour chaque débuff <span class='gbt'>Poison</span> active instantanement par ce Champion (s'accumule jusqu'a 20%).<br><br>
			Remplit le Compteur de Tour de ce Champion de 5% des qu'un débuff <span class='gbt'>Poison</span> est place sur un ennemi.
          `,
          isPassive: true,
        },
      ],
      stats: {
        PV: "15 360",
        ATQ: "1 586",
        DEF: "969",
        VIT: "99",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        RÉS: "30",
        PRÉ: "10",
      },
    };

  	const aura = {
    img: "../../../../../../assets/images/auras/acc.png",
    description: `
      Augmente la statistique PRE des Alliés lors de toutes les Batailles de 60.
    `,
  };

