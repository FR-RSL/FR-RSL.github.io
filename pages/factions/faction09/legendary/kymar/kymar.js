const championData = {
  type: "Soutien",
      spells: [
        {
          img: "assets/sort1.webp",
          name: "Feu Fantome",
          description: `
            Attaque tous les ennemis. Place un débuff de <span class='gbt'>Poison</span> de 5% pendant 1 tour
			si cette attaque passe en critique.
          `,
          damage: "3*ATQ",
          levelInfo: [
            "Dégâts +5%",
            "Dégâts +5%",
            "Dégâts +5%",
            "Dégâts +5%",
          ],
        },
        {
          img: "assets/sort2.webp",
          name: "Regard Abyssal",
          description: `
            Attaque tous les ennemis. Retire tous les buffs. Place un débuff de
			<span class='gbt'>Sommeil</span> pendant 1 tour.
          `,
          damage: "3.6*ATQ",
          cooldown: 5,
          levelInfo: [
            "Dégâts +10%",
            "Dégâts +10%",
            "Temps de recharge -1",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/sort3.webp",
          name: "Sceau de Magie",
          description: `
            Réinitialise tous les temps de recharge de toutes les compétences alliées. Remplit de 20% le
			Compteur de Tours de tous les alliés, sauf celui de ce Champion. Ne réinitialisera pas ou ne réduira
			pas les temps de recharge des compétences de ce Champion. Ne réinitialisera pas non plus ou ne
			réduira pas les temps de recharge des compétences d’aucun autre Champion
			avec cette compétence.
          `,
          cooldown: 7,
          levelInfo: [
            "Temps de recharge -1",
          ],
        },
      ],
      stats: {
        PV: "18 990",
        ATQ: "1 046",
        DEF: "1 266",
        VIT: "103",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        RÉS: "40",
        PRÉ: "0",
      },
  };

  const aura = {
    img: "../../../../../../assets/images/auras/speed.webp",
    description: `
      Augmente la statistique VIT des Alliés dans les batailles d'Arene de 30%.
    `,
  };

