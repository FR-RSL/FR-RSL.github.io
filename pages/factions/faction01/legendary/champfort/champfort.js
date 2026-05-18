const championData = {
  type: "PV",
      spells: [
        {
          img: "assets/sort1.webp",
          name: "Annihilation",
          description: `
            Attaque un ennemi. Offre 45% de chances de placer un debuff ${DEBUFFS.DEF} de 60% pendant 2 tours.
          `,
          damage: "0.2*PV",
          levelInfo: [
            "Dégâts +5%",
            "Dégâts +5%",
            "Dégâts +5%",
            "Dégâts +10%"
          ],
        },
        {
          img: "assets/sort2.webp",
          name: "Trembleterre",
          description: `
            Attaque tous les ennemis.
			Place un debuff de ${DEBUFFS.PRE} et un debuff ${DEBUFFS.ATK} de 50% pendant 2 tours.
          `,
          damage: "0.23*PV",
          cooldown: 4,
          levelInfo: [
            "Dégâts +5%",
            "Dégâts +5%",
            "Dégâts +5%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/passif1.webp",
          name: "Spherepine [P]",
          description: `
            Au debut de chaque tour, place sur ce Champion un buff ${BUFFS.SHIELD} equivalent a 20% de ses PV MAX pendant 2 tours.
			Placera un debuff ${DEBUFFS.SPD} de 15% pendant 1 tour sur tout ennemi attaquant ce Champion.
          `,
          isPassive: true,
          cooldown: 2,
          levelInfo: [
            "Temps de recharge -1",
          ],
        },
      ],
      stats: {
        PV: "22 305",
        ATQ: "1 079",
        DEF: "1 013",
        VIT: "97",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        RÉS: "40",
        PRÉ: "20",
      },
    };

  	const aura = {
    img: "../../../../../../assets/images/auras/hp.webp",
    description: `
      Augmente la statistique PV des Alliés dans les Donjons de 50%.
    `,
  };

