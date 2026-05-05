const championData = {
  type: "Soutien",
      spells: [
        {
			img: "assets/sort1.png",
			name: "Eclair d'affliction",
			description: `
				Attaque un ennemi.<br><br>
				Transfere tous les débuffs de cette Championne sur la cible.
				Il est impossible de resister a cet effet si cette Championne est affligee de 3 débuffs ou plus.
			`,
			damage: "5.1*ATQ",
			levelInfo: [
				"Dégâts +10%",
				"Dégâts +10%",
			],
        },
        {
			img: "assets/sort2.png",
			name: "Energie maligne",
			description: `
				Soigne tous les alliés a hauteur de 25% des PV MAX de cette Championne.<br><br>
				Place ensuite un buff <span class='gbt'>Augmentation de DEF</span> de 60% et un buff
				<span class='gbt'>Augmentation de VIT</span> de 30% sur tous les alliés pendant 2 tours.
			`,
			levelInfo: [
				"Soins +5%",
				"Soins +5%",
				"Temps de recharge -1",
				"Temps de recharge -1",
			],
			cooldown: 5,
        },
        {
			img: "assets/sort3.png",
			name: "Graine de corruption",
			description: `
				Ranime un seul allié avec 100% de PV et 50% de Compteur de Tour.
				Reinitialise totalement les temps de recharge de toutes ses compétences.
			`,
			levelInfo: [
				"Temps de recharge -1",
				"Temps de recharge -1",
			],
			cooldown: 6,
        },
        {
        	img: "assets/passif1.png",
        	name: "Servante sacrificielle [P]",
        	description: `
				Au debut du tour de cette Championne, transfere 1 débuff de chaque allié sur cette Championne.
				Ne transferera pas les débuffs <span class='gbt'>Etourdissement</span>,
				<span class='gbt'>Sommeil</span>,
				<span class='gbt'>Gel</span>,
				<span class='gbt'>Provocation</span>,
				<span class='gbt'>Peur</span>,
				<span class='gbt'>Peur Absolue</span>,
				<span class='gbt'>Petrification</span> ou
				<span class='gbt'>Mouton</span>.
				Il est impossible de resister a cet effet et de le bloquer.
				Si plusieurs Champions de l'equipe disposent de cette compétence, une seule sera activee.<br><br>
				A la fin du tour de cette Championne, remplit les Compteurs de Tour de tous les alliés de 10% et de 2%
				supplémentaires pour chaque débuff sur cette Championne.
				Si plusieurs Champions de l'equipe disposent de cette compétence, une seule sera activee.
        	`,
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
    img: "../../../../../../assets/images/auras/speed.png",
    description: `
      Augmente la statistique VIT des Alliés lors de toutes les Batailles de 20%.
    `,
  };

