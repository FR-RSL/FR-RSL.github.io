const championData = {
  type: "Attaque",
      	spells: [
        {
			img: "assets/sort1.webp",
			name: "Immense Brasier",
			description: `Attaque 3 fois un ennemi. Chaque frappe possède 15 % de chances d'augmenter d'1 tour la durée des débuffs ${DEBUFFS.BURN} sur la cible.`,
			damage: "1.05*ATQ",
			levelInfo: [
				"Dégâts +5%",
				"Chance de Buff/débuff +5%",
				"Dégâts +10%",
				"Chance de Buff/débuff +10%",
			],
        },
        {
			img: "assets/sort2.webp",
			name: "Éruption de Flammes",
			description: `Attaque tous les ennemis. A 80 % de chances de placer un débuff ${DEBUFFS.WEAKEN} de 25 % pendant 2 tours. A également 80 % de chances de placer un débuff ${DEBUFFS.DEF} de 60 % pendant 2 tours si au moins deux ennemis sont affligés de débuffs ${DEBUFFS.BURN}.${RETURN}${RETURN}

Ensuite, active instantanément un déclenchement de tous les débuffs ${DEBUFFS.BURN} sur tous les ennemis.`,
			damage: "3.7*ATQ",
			cooldown: 4,
			levelInfo: [
				"Dégâts +5%",
				"Chance de Buff/débuff +10%",
				"Dégâts +10%",
				"Chance de Buff/débuff +10%",
				"Temps de recharge -1",
			],
        },
        {
			img: "assets/sort3.webp",
			name: "Rite Tempête de Feu",
			description: `Place un débuff ${DEBUFFS.BURN} sur ce Champion pendant 3 tours, puis attaque tous les ennemis. Possède 75 % de chances de placer un débuff ${DEBUFFS.BURN} sur tous les ennemis pendant 3 tours. Accorde un Tour Supplémentaire si un débuff ${DEBUFFS.BURN} est placé sur tous les ennemis.`,
			damage: "3.5*ATQ",
			levelInfo: [
				"Dégâts +5%",
				"Chance de Buff/débuff +10%",
				"Dégâts +15%",
				"Chance de Buff/débuff +15%",
				"Temps de recharge -1",
			],
			cooldown: 5,
        },
        {
        	img: "assets/passif1.webp",
        	name: "Métaphysique [P]",
        	description: `Augmente la VIT de ce Champion de 3 et les dégâts infligés de 3 % pour chaque allié et ennemi se trouvant sous débuff ${DEBUFFS.BURN}.${RETURN}
Si Cardiel se trouve dans l'équipe, tous les alliés seront soignés de 3 % de leurs PV MAX grâce aux débuffs ${DEBUFFS.BURN} au lieu de subir des dégâts et de perdre des PV.`,
          	isPassive: true,
        },
      ],
      stats: {
        PV: "13 050",
        ATQ: "1 586",
        DEF: "1 123",
        VIT: "97",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        RÉS: "30",
        PRÉ: "20",
      },
  };

  const aura = {
    img: "../../../../../../assets/images/auras/acc.webp",
    description: `
      Augmente la statistique PRE des Alliés lors de toutes les Batailles de 60.
    `,
  };

