const championData = {
  type: "Soutien",
      spells: [
        {
          img: "assets/sort1.webp",
          name: "Foudre boreale",
          description: `
            Attaque 2 fois un ennemi.
			Chaque frappe Possède 35% de chances de placer un débuff
			<span class='gbt'>Gel</span> pendant 1 tour.<br><br>
			Il est impossible de resister a ce débuff si la cible
			Possède 50% de PV ou moins.
          `,
          damage: "3.5*ATQ",
          levelInfo: [
            "Dégâts +5%",
            "Dégâts +5%",
            "Chance de Buff/débuff +5%",
            "Chance de Buff/débuff +10%",
          ],
        },
        {
          img: "assets/sort2.webp",
          name: "Voile d'eau de fonte",
          description: `
            Place un buff <span class='gbt'>Augmentation d'ATQ</span> de 50%
			sur tous les alliés pendant 2 tours.<br><br>
			Possède également 80% de chances de placer un buff <span class='gbt'>Voile Parfait</span>
			sur tous les alliés sauf ce Champion pendant 2 tours.<br><br>
			Ensuite, remplit le Compteur de Tour de tous les alliés de 15%.
          `,
          cooldown: 5,
          levelInfo: [
            "Chance de Buff/débuff +10%",
            "Chance de Buff/débuff +10%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/sort3.webp",
          name: "Ruisseau de vie",
          description: `
            Ranime tous les alliés morts avec 40% de PV et 25% de Compteur de Tour.<br><br>
			Place également un buff <span class='gbt'>Augmentation de PRE</span> de 50%
			et un buff <span class='gbt'>Augmentation de DEF</span> de 60% sur tous les alliés
			pendant 3 tours. Ces buffs seront places meme si aucun allié n'a ete ranime.<br><br>
			Si aucun allié n'a ete ranime par cette compétence,
			accorde un Tour supplémentaire a ce Champion.
          `,
          cooldown: 7,
          levelInfo: [
            "Temps de recharge -1",
            "Temps de recharge -1",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/passif1.webp",
          name: "Force du degel [P]",
          description: `
            Les alliés sous buff <span class='gbt'>Voile parfait</span> place
			par ce Champion infligent 10% de degats en plus.<br><br>
            Les alliés sous buff <span class='gbt'>Voile parfait</span> place
			par ce Champion infligent 10% de degats en plus aux ennemis sous buffs
			<span class='gbt'>Voile</span> ou <span class='gbt'>Voile parfait</span>.
          `,
          isPassive: true,
        },
      ],
      stats: {
        PV: "21 480",
        ATQ: "782",
        DEF: "1 365",
        VIT: "112",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        RÉS: "40",
        PRÉ: "0",
      },
  	};

  const aura = {
    img: "../../../../../../assets/images/auras/speed.webp",
    description: `
      Augmente la statistique VIT des Alliés lors de toutes les Batailles de 19%.
    `,
  };

