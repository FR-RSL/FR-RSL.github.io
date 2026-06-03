const championData = {
  type: "Soutien",
      spells: [
        {
			img: "assets/sort1.webp",
			name: "Éclair d'affliction",
			description: `Attaque un ennemi.${RETURN}${RETURN}

Transfère tous les débuffs de cette Championne sur la cible. Il est impossible de résister à cet effet si cette Championne est affligée de 3 débuffs ou plus.`,
			damage: "5.1*ATQ",
			levelInfo: [
				"Dégâts +10%",
				"Dégâts +10%",
			],
        },
        {
			img: "assets/sort2.webp",
			name: "Énergie maligne",
			description: `Soigne tous tes alliés à hauteur de 25 % des PV MAX de cette Championne.${RETURN}${RETURN}

Place ensuite un buff ${BUFFS.DEF} de 60 % et un buff ${BUFFS.SPD} de 30 % sur tous les alliés pendant 2 tours.`,
			levelInfo: [
				"Soins +5%",
				"Soins +5%",
				"Temps de recharge -1",
				"Temps de recharge -1",
			],
			cooldown: 5,
        },
        {
			img: "assets/sort3.webp",
			name: "Graine de corruption",
			description: `Ranime un seul allié avec 100 % de PV et 50 % de Compteur de Tour. Réinitialise totalement les temps de recharge de toutes ses compétences.`,
			levelInfo: [
				"Temps de recharge -1",
				"Temps de recharge -1",
			],
			cooldown: 6,
        },
        {
        	img: "assets/passif1.webp",
        	name: "Servante sacrificielle [P]",
        	description: `Au début du tour de cette Championne, transfère 1 débuff de chaque allié sur cette Championne. Ne transférera pas les débuffs ${DEBUFFS.STUN}, ${DEBUFFS.SLEEP}, ${DEBUFFS.GEL}, ${DEBUFFS.PROVOKE}, ${DEBUFFS.FEAR}, ${DEBUFFS.TRUE_FEAR}, ${DEBUFFS.PETRIFICATION} ou ${DEBUFFS.SHEEP}. Il est impossible de résister à cet effet et de le bloquer. Si plusieurs Champions de l'équipe disposent de cette Compétence, une seule sera activée. Cette compétence ne s'activera pas sur les copies en double de cette Championne si cette Championne spécifique est morte.${RETURN}${RETURN}

À la fin du tour de cette Championne, remplit les Compteurs de Tour de tous les alliés de 10 % et de 2 % supplémentaires pour chaque débuff sur cette Championne. Si plusieurs Champions de l'équipe disposent de cette Compétence, une seule sera activée. Cette compétence ne s'activera pas sur les copies en double de cette Championne si cette Championne spécifique est morte.`,
          	isPassive: true,
        },
      ],
      stats: {
        PV: "21 975",
        ATQ: "947",
        DEF: "1 167",
        VIT: "110",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        RÉS: "40",
        PRÉ: "0",
      },
  };

  const aura = {
    img: "../../../../../../assets/images/auras/speed.webp",
    description: `
      Augmente la statistique VIT des Alliés lors de toutes les Batailles de 20%.
    `,
  };

