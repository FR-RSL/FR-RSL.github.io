const championData = {
  type: "Attaque",
      spells: [
        {
			img: "assets/sort1.webp",
			name: "Punis l'Orgueil",
			description: `Attaque 1 ennemi.${RETURN}${RETURN}

Place une frappe supplémentaire si la cible possède n'importe quel buff.`,
			damage: "3*ATQ",
			levelInfo: [
				"Dégâts +5%",
				"Dégâts +5%",
				"Dégâts +10%",
				"Dégâts +10%",
			],
        },
        {
			img: "assets/sort2.webp",
			name: "Allégresse du Boucher",
			description: `Attaque tous les ennemis.${RETURN}${RETURN}

Accorde un Tour Supplémentaire et réinitialise le temps de recharge de la Compétence En Chasse si cette attaque tue un ennemi.`,
			damage: "3.7*ATQ",
			cooldown: 4,
			levelInfo: [
				"Dégâts +5%",
				"Dégâts +5%",
				"Dégâts +5%",
				"Dégâts +5%",
				"Temps de recharge -1",
			],
        },
        {
			img: "assets/sort3.webp",
			name: "En Chasse",
			description: `Place un buff ${BUFFS.PERFECT_VEIL}, un buff ${BUFFS.ATK} de 50 %, un buff ${BUFFS.SPD} de 30 % et un buff ${BUFFS.CDAM} de 30 % sur ce Champion pendant 2 tours.`,
			cooldown: 5,
        },
        {
        	img: "assets/passif1.webp",
        	name: "Depuis les Ombres [P]",
        	description: `${PASSIVE}

Les dégâts augmentent de 40 % lorsque ce Champion attaque alors qu'il dispose d'un buff ${BUFFS.VEIL} ou ${BUFFS.PERFECT_VEIL}.${RETURN}
Reçoit 40 % de dégâts en moins lorsqu'il dispose d'un buff ${BUFFS.VEIL} ou ${BUFFS.PERFECT_VEIL}. Augmente également le Compteur de Tour de ce Champion de 15 % chaque fois qu'il reçoit des dégâts alors qu'il dispose d'un buff ${BUFFS.VEIL} ou ${BUFFS.PERFECT_VEIL}.${RETURN}
Ne fonctionne pas si ce Champion est le seul allié vivant de l'équipe.${RETURN}${RETURN}

${ACTIVE}

Place un buff ${BUFFS.PERFECT_VEIL} d'1 tour sur ce Champion chaque fois que le Compteur de Tour d'un ennemi est rempli. Il est impossible de retirer ce buff.`,
          	isPassive: true,
        },
      ],
      stats: {
        PV: "17 505",
        ATQ: "1 509",
        DEF: "903",
        VIT: "96",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        RÉS: "30",
        PRÉ: "10",
      },
  };

  const aura = {
    img: "../../../../../../assets/images/auras/attack.webp",
    description: `
      Augmente la statistique ATQ des Alliés dans les batailles d'Arene de 33%.
    `,
  };

