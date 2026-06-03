const championData = {
   	type: "PV",
      spells: [
        {
			img: "assets/sort1.webp",
			name: "Sceau Abyssal",
			description: `Attaque un ennemi. Place un débuff ${DEBUFFS.BURN} sur la cible pendant 2 tours si elle se trouve sous débuff ${DEBUFFS.TRUE_FEAR} ou ${DEBUFFS.ATK}.${RETURN}${RETURN}

Place sur ce Champion un buff ${BUFFS.SHIELD} égal à 10 % de ses PV MAX pendant 2 tours.`,
			damage: "0.25*PV",
			levelInfo: [
				"Dégâts +5%",
				"Dégâts +5%",
				"Dégâts +5%",
				"Dégâts +5%",
			],
        },
        {
			img: "assets/sort2.webp",
			name: "Ténèbres Infernales",
			description: `Attaque tous les ennemis. Possède 75 % de chances de placer un débuff ${DEBUFFS.TRUE_FEAR} et un débuff ${DEBUFFS.ATK} de 50 % pendant 2 tours.`,
			damage: "0.27*PV",
			cooldown: 5,
			levelInfo: [
				"Dégâts +5%",
				"Dégâts +5%",
				"Chance de Buff/débuff +10%",
				"Chance de Buff/débuff +15%",
				"Temps de recharge -1",
				"Temps de recharge -1",
			],
        },
        {
			img: "assets/sort3.webp",
			name: "Possession Démoniaque",
			description: `Équilibre les PV de tous les alliés. Les niveaux de PV de tous les alliés seront amenés au niveau de l'allié ayant le plus de PV. Après l'équilibrage des PV, accorde un Tour supplémentaire.`,
			levelInfo: [
				"Temps de recharge -1",
				"Temps de recharge -1",
			],
			cooldown: 6,
        },
        {
        	img: "assets/passif1.webp",
        	name: "Légion de Ruine [P]",
        	description: `Reçoit 20 % de dégâts en moins de la part des Champions des Factions des Grands Seigneurs, des Hauts Elfes et de l'Ordre Sacré.${RETURN}${RETURN}

S'il y a 2 Champions Rejetons Démoniaques ou plus dans l'équipe aux côtés de ce Champion, augmente de 20 % les DÉG C. de tous les Champions Rejetons Démoniaques de l'équipe.${RETURN}
[L'augmentation des DÉG C. ne fonctionne que lorsque ce Champion est vivant.]`,
          	isPassive: true,
        },
      ],
      stats: {
        PV: "21 315",
        ATQ: "870",
        DEF: "1 288",
        VIT: "98",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        RÉS: "40",
        PRÉ: "20",
      },
  };

  const aura = {
    img: "../../../../../../assets/images/auras/hp.webp",
    description: `
      Augmente la statistique PV des Alliés lors de toutes les Batailles de 33%.
    `,
  };

