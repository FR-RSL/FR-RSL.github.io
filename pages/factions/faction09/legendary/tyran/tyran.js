const championData = {
  type: "PV",
      	spells: [
        {
          img: "assets/sort1.webp",
          name: "Intimidation",
          description: `Attaque un ennemi.`,
          damage: "2.5*DEF",
          levelInfo: [
            "Dégâts +5%",
            "Dégâts +5%",
            "Dégâts +10%",
          ],
        },
        {
          img: "assets/sort2.webp",
          name: "Torrent Feu de l'enfer",
          description: `
            Attaque tous les ennemis. Possède 75% de chances de placer un débuff de
			<span class='gbt'>Brulure de PV</span> de 3 tours sur tous les ennemis.
          `,
          damage: "3.6*DEF",
          cooldown: 4,
          levelInfo: [
            "Dégâts +5%",
            "Dégâts +10%",
            "Chance de Buff/débuff +10%",
            "Chance de Buff/débuff +15%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/sort3.webp",
          name: "Sbires Infernaux",
          description: `
            Place, pendant 2 tours, un buff de <span class='gbt'>Protection d'Allié</span> de 50% sur tous les
			alliés sauf sur ce Champion. Place un buff d'<span class='gbt'>Augmentation de DEF</span> de 60% sur tous les alliés pendant 2 tours.
          `,
          cooldown: 4,
          levelInfo: [
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/passif1.webp",
          name: "Feux de Ruine [P]",
          description: `           
		  Réduit de 10% les dégats infligés par les ennemis affligés de débuffs
		  <span class='gbt'>Brulure de PV</span>.
          `,
          isPassive: true,
        },
      ],
      stats: {
        PV: "21 975",
        ATQ: "771",
        DEF: "1 343",
        VIT: "103",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        RÉS: "50",
        PRÉ: "0",
      },
  };

  const aura = {
    img: "../../../../../../assets/images/auras/hp.webp",
    description: `
      Augmente la statistique PV des Alliés lors de toutes les Batailles de 25%.
    `,
  };

