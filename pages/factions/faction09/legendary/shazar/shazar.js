const championData = {
  type: "Attaque",
      spells: [
        {
			img: "assets/sort1.webp",
			name: "Damnation",
			description: `Attaque 3 fois 1 ennemi. Les dégâts augmentent de 15% pour chaque débuff dont est affligée la cible.`,
			damage: "1.3*ATQ",
			levelInfo: [
				"Dégâts +5%",
				"Dégâts +5%",
				"Dégâts +5%",
				"Dégâts +10%",
			],
        },
        {
			img: "assets/sort2.webp",
			name: "Fureur Éternelle",
			description: `Place un buff d'${BUFFS.ATK} de 50% sur ce Champion pendant 2 tours. Il est impossible de retirer ce buff. Place un buff de ${BUFFS.BLOCK_DEBUFFS} sur ce Champion pendant 2 tours. Octroie un Tour Supplémentaire.`,
			levelInfo: [
				"Temps de recharge -1",
			],
			cooldown: 4,
        },
        {
			img: "assets/sort3.webp",
			name: "Destin Cruel",
			description: `Attaque tous les ennemis. Possède 75% de chances de placer deux débuffs de ${DEBUFFS.BOMB} qui détonent après 2 tours.`,
			damage: "3.2*ATQ | 4.2*ATQ (Bombe)",
			levelInfo: [
				"Dégâts +10%",
				"Chance de Buff/débuff +10%",
				"Chance de Buff/débuff +15%",
				"Dégâts +15%",
				"Temps de recharge -1",
			],
			cooldown: 6,
        },
      ],
      stats: {
        PV: "15 590",
        ATQ: "1 343",
        DEF: "1 189",
        VIT: "101",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        RÉS: "30",
        PRÉ: "0",
      },
  };

  const aura = {
      img: "../../../../../../assets/images/auras/speed.webp",
      description: `
        Augmente la statistique VIT des Alliés dans les batailles d'Arene de 32%.
    `,
  };

