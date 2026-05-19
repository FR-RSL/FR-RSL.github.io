const championData = {
type: "Defense",
      spells: [
        {
			img: "assets/sort1.webp",
			name: "Lame en fusion",
			description: `
            	Attaque un ennemi.<br><br>
            	Chaque fois que cette compétence est utilisee, augmente de maniere permanente
				les degats infliges par cette compétence de 10% (s'accumule jusqu'a 100%).<br><br>
				Possède 50% de chances de contre-attaquer avec cette compétence chaque fois qu'un ennemi
				sous débuff <span class='gbt'>Brulure de PV</span> attaque ce Champion ou ses alliés.
          	`,
          	damage: "3.5*DEF",
          	levelInfo: [
            	"Dégâts +10%",
            	"Dégâts +10%",
          	],
        },
        {
          	img: "assets/sort2.webp",
          	name: "Terreur ardente",
          	description: `
            	Attaque tous les ennemis.<br><br>
				Place un débuff <span class='gbt'>Peur</span> pendant 2 tours.
				Les ennemis affliges d'un débuff <span class='gbt'>Brulure de PV</span> ne peuvent pas resister a ce débuff.
          	`,
          	damage: "3.6*DEF",
          	cooldown: 4,
         	levelInfo: [
            	"Dégâts +10%",
            	"Dégâts +10%",
            	"Temps de recharge -1",
          	],
        },
        {
          	img: "assets/sort3.webp",
          	name: "Brulure de demolition",
          	description: `
            	Attaque 2 fois un ennemi.<br><br>
            	Les degats infliges par cette compétence augmentent de 10% pour les tours restants des débuffs
				<span class='gbt'>Brulure de PV</span> sur l'equipe ennemie (s'accumule jusqu'a 100%).
          	`,
          	damage: "3*DEF",
          	cooldown: 4,
          	factions: [
            `
				Les degats recus par ce Champion sont reduits de 50% lorsque cette compétence n'est pas en temps de recharge.
			`,
            `
				Chaque fois qu'un débuff <span class='gbt'>Brulure de PV</span> est active sur un ennemi, a 50% de chances
				de reduire d'1 tour le temps de recharge de cette compétence.
			`,
            `
				Si la cible se trouve sous débuff <span class='gbt'>Brulure de PV</span>, cette attaque ignorera les buffs
				<span class='gbt'>Peau de Pierre</span>, <span class='gbt'>Invincible</span>, <span class='gbt'>Protection d'allié</span>,
				<span class='gbt'>Blocage des Degats</span> et <span class='gbt'>Bouclier</span>.
			`
          	],
          	levelInfo: [
            	"Dégâts +10%",
            	"Dégâts +10%",
            	"Dégâts +10%",
          	],
        },
        {
          	img: "assets/passif1.webp",
          	name: "Feu demoniaque deferlant [P]",
          	description: `
            	Des qu'un ennemi recoit un buff ou que son Compteur de Tour est augmente, a 50% de chances
				de placer un débuff <span class='gbt'>Brulure de PV</span> sur cet ennemi pendant 2 tours.<br><br>
				Si un ennemi est deja afflige d'un débuff <span class='gbt'>Brulure de PV</span>, a au lieu de ca 50%
				de chances de l'activer instantanement.<br><br>
				Si plusieurs Champions de l'equipe disposent de cette compétence, une seule sera activee. Cette competence ne s'activera pas sur les copies en double de ce Champion si ce Champion specifique est mort.
          	`,
          	factions: [
            `
            	Il est impossible de bloquer et de resister aux débuffs <span class='gbt'>Brulure de PV</span>
				places par cette compétence.
            `,
            `
            	Chaque fois qu'un débuff <span class='gbt'>Brulure de PV</span> s'active sur un ennemi,
				ce Champion gagne 5% d'Ignorer la DEF (s'accumule jusqu'a 100%).<br>Si plusieurs Champions de l'equipe disposent de cette compétence, une seule sera activee. Cette competence ne s'activera pas sur les copies en double de ce Champion si ce Champion specifique est mort.
            `,
            `
            	Place un débuff <span class='gbt'>Blocage de reanimation</span> sur les ennemis tues alors qu'ils etaient
				affliges d'un débuff <span class='gbt'>Brulure de PV</span>.
            `,
          	],
			levelInfo: [
        		"Chance de Buff/débuff +10%",
        		"Chance de Buff/débuff +10%",
			],
          	isPassive: true,
        },
      ],
    	stats: {
        	PV: "18 330",
        	ATQ: "936",
        	DEF: "1 421",
        	VIT: "97",
        	"TAUX C.": "15%",
        	"DÉG C.": "63%",
        	RÉS: "30",
        	PRÉ: "0",
      	},
  };

  const aura = {
    img: "../../../../../../assets/images/auras/sup-defence.webp",
    description: `
      Augmente la statistique DEF des Alliés lors de toutes les Batailles de 33%.<br><br>
      Augmente la statistique VIT des Alliés lors de toutes les Batailles de 19%<br>
      (ne s'applique qu'a la Faction des Rejetons Demoniaques).
    `,
  };

