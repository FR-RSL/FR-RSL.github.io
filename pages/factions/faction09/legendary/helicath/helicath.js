const championData = {
  type: "Defense",
      spells: [
        {
			img: "assets/sort1.webp",
			name: "Griffe Pyroclastique",
			description: `Attaque 2 fois un ennemi. Chaque frappe possède 30 % de chances de placer un débuff ${DEBUFFS.WEAKEN} de 25 % pendant 2 tours. Ignorera les buffs ${BUFFS.SHIELD} et ${BUFFS.BLOCK_DAMAGE}.`,
			damage: "1.8*DEF",
			levelInfo: [
				"Dégâts +5%",
				"Dégâts +5%",
				"Chance de Buff/débuff +10%",
				"Chance de Buff/débuff +10%",
			],
        },
        {
			img: "assets/sort2.webp",
			name: "Vents de la fosse",
			description: `Attaque tous les ennemis. Place un buff ${BUFFS.SHIELD} sur tous les alliés pendant 2 tours. La valeur du ${BUFFS.SHIELD} est proportionnelle à la DÉF de ce Champion.`,
			damage: "3.8*DEF",
			levelInfo: [
				"Dégâts +5%",
				"Dégâts +5%",
				"Dégâts +10%",
				"Bouclier +10%",
				"Temps de recharge -1",
			],
			cooldown: 4,
        },
        {
			img: "assets/sort3.webp",
			name: "Fervents serviteurs",
			description: `${ACTIVE}

Place un buff ${BUFFS.BLOCK_DAMAGE} sur tous les alliés pendant 2 tours.${RETURN}${RETURN}

${PASSIVE}

Lorsqu'un buff ${BUFFS.BLOCK_DAMAGE} placé sur un allié par ce Champion est retiré ou volé, ou qu'il expire, place un buff ${BUFFS.DEF} de 60 % sur cet allié pendant 2 tours.`,
			levelInfo: [
				"Temps de recharge -1",
				"Temps de recharge -1",
			],
			cooldown: 6,
        },
        {
        	img: "assets/passif1.webp",
        	name: "Festin d'agonie [P]",
        	description: `Augmente la DÉF de ce Champion de 5 % pour chaque allié sous buff ${BUFFS.BLOCK_DAMAGE}.${RETURN}${RETURN}

Contre-attaque avec la compétence par défaut dès qu'un allié se fait frapper lorsqu'il est sous buff ${BUFFS.BLOCK_DAMAGE}. Ne peut survenir qu'une fois par tour ennemi.`,
          	isPassive: true,
        },
      ],
      stats: {
        PV: "19 155",
        ATQ: "859",
        DEF: "1 443",
        VIT: "102",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        RÉS: "50",
        PRÉ: "0",
      },
  };

  const aura = {
    img: "../../../../../../assets/images/auras/defence.webp",
    description: `
      Augmente la statistique DEF des Alliés lors de toutes les Batailles de 30%.
    `,
  };

