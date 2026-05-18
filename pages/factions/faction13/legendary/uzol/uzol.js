const championData = {
  type: "Attaque",
      spells: [
        {
          img: "assets/sort1.webp",
          name: "Maitre-hache impitoyable",
          description: `
            Attaque un ennemi.<br><br>
			A 20% de chances d'accorder un Tour supplémentaire.
			Si cette attaque tue un ennemi, accorde un Tour supplémentaire.
          `,
          damage: "3.7*ATQ",
          levelInfo: [
            "Dégâts +5%",
            "Dégâts +5%",
            "Dégâts +5%",
            "Dégâts +5%"
          ],
        },
        {
          img: "assets/sort2.webp",
          name: "Coeur de pierre",
          description: `
            Attaque tous les ennemis.
			Avant d'attaquer, reduit de 100% la valeur des buffs
			<span class='gbt'>Bouclier</span> sur tous les ennemis et
			leur inflige un débuff <span class='gbt'>Reduction de DEF</span> de 60% pendant 2 tours.
			Il est impossible de resister a ces effets si la cible de la compétence est utilisee
			lors d'un Tour supplémentaire.<br><br>
			A 20% de chances d'accorder un Tour supplémentaire. Ces chances augmentent de 10% pour
			chaque coup critique.
          `,
          damage: "4*ATQ",
          cooldown: 4,
          levelInfo: [
            "Dégâts +5%",
            "Dégâts +5%",
            "Dégâts +10%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/sort3.webp",
          name: "Fureur royale",
          description: `
            Attaque ennemi.
            Ignorera les buffs <span class='gbt'>Bouclier</span>,
			<span class='gbt'>Blocage des Degats</span> et
			<span class='gbt'>Invincible</span>.<br><br>
			Ignorera également les buffs <span class='gbt'>Peau de Pierre</span>
			et 100% de la DEF de la cible si cette compétence est utilisee
			lors d'un Tour supplémentaire ou d'un Tour instantane.
          `,
          damage: "5.5*ATQ",
          cooldown: 4,
          levelInfo: [
            "Dégâts +10%",
            "Dégâts +10%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/passif1.webp",
          name: "Roi de jade [P]",
          description: `
            Augmente de 5% les chances qu'ont tous les alliés d'obtenir un Tour supplémentaire.
			Si plusieurs Champions de l'equipe disposent de cette compétence, une seule sera activee.<br><br>
			Ce Champion inflige 25% de degats en plus lors de Tours supplémentaires.
          `,
          isPassive: true,
        },
      ],
      stats: {
        PV: "15 195",
        ATQ: "1 498",
        DEF: "1 068",
        VIT: "99",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        RÉS: "30",
        PRÉ: "0",
      },
  };

  const aura = {
    img: "../../../../../../assets/images/auras/attack.webp",
    description: `
      Augmente la statistique ATQ des Alliés dans les batailles d'Arene de 33%.
    `,
  };

