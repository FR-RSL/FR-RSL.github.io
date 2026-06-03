const championData = {
  type: "Soutien",
      spells: [
        {
			img: "assets/sort1.webp",
			name: "Invocation Abyssale",
			description: `Attaque deux fois un ennemi, puis place sur ce Champion et sur l'allié ayant le moins de PV, un buff de ${BUFFS.SHIELD} égal à 10% des PV MAX de ce Champion pendant 2 tours.`,
			damage: "1.7*DEF",
			levelInfo: [
				"Dégâts +10%",
				"Dégâts +10%",
			],
        },
        {
			img: "assets/sort2.webp",
			name: "Linceul d'Âmes",
			description: `Place un buff ${BUFFS.BLOCK_DEBUFFS} et un buff ${BUFFS.ATK} de 50% sur tous les alliés pendant 2 tours.${RETURN}${RETURN}
 
Place un buff ${BUFFS.VEIL} sur tous les alliés sauf cette Championne pendant 1 tour.`,
			levelInfo: [
				"Temps de recharge -1",
			],
			cooldown: 5,
        },
        {
			img: "assets/sort3.webp",
			name: "Renaissance Spectrale",
			description: `Ranime tous alliés tombés avec 70% de leurs PV.${RETURN}${RETURN}

Place, pendant 1 tour, un buff ${BUFFS.VEIL} sur tous les alliés, sauf sur ce Champion.${RETURN}
Place un buff de ${BUFFS.HEALS} de 15% sur tous les alliés pendant 2 tours.`,
			levelInfo: [
				"Temps de recharge -1",
				"Temps de recharge -1",
			],
			cooldown: 6,
        },
        {
        	img: "assets/passif1.webp",
        	name: "Chemins Éthérés [P]",
        	description: `Réduit de 25% les dégâts reçus par tous les alliés lors des attaques de zone (15% contre les Boss).`,
          	isPassive: true,
        },
      ],
      stats: {
        PV: "22 470",
        ATQ: "793",
        DEF: "1 288",
        VIT: "103",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        RÉS: "50",
        PRÉ: "0",
      },
  };

  const aura = {
    img: "../../../../../../assets/images/auras/speed.webp",
    description: `
      Augmente la statistique VIT des Alliés lors de toutes les Batailles de 19%.
    `,
  };

