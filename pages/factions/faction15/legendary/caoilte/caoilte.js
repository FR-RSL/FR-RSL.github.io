const championData = {
  type: "Attaque",
      spells: [
        {
          img: "assets/sort1.png",
          name: "Fleche de cendre",
          description: `
            Attaque un ennemi. 
            Place un buff 
			<span class='gbt'>Augmentation de DEG C.</span> de 30%
			sur ce Champion pendant 2 tours.
          `,
          damage: "3.7*ATQ",
          levelInfo: [
            "Dégâts +10%",
            "Dégâts +10%"
          ],
        },
        {
          img: "assets/sort2.png",
          name: "Feuilles mortes",
          description: `
            Attaque 2 fois un ennemi.
            Si la cible initiale est tuee, attaque
			également l'ennemi ayant les PV les plus bas.<br><br>
			Les deux attaques ignoreront 50% de la DEF de la cible
			ainsi que les buffs <span class='gbt'>Invincible</span>
			et <span class='gbt'>Blocage des Degats</span>.
          `,
          damage: "2.1*ATQ",
          cooldown: 5,
          levelInfo: [
		  	"Dégâts +5%",
            "Dégâts +5%",
            "Dégâts +10%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/sort3.png",
          name: "Douleur torrentielle",
          description: `
            Attaque tous les ennemis.<br><br>
			Chaque frappe critique remplit le Compteur de Tour de ce Champion de 10%
			et le soigne de 10% de ses PV MAX (s'accumule jusqu'a 50%).<br><br>
			Si cette attaque tue un ennemi, place un buff
			<span class='gbt'>Invincible</span> sur ce Champion pendant 1 tour.
          `,
          damage: "3.9*ATQ",
          cooldown: 4,
          levelInfo: [
		  	"Dégâts +5%",
            "Dégâts +5%",
            "Dégâts +10%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/passif1.png",
          name: "Sentinelle corrompue [P]",
          description: `
            <span class='gbt'>Effet Passif</span><br><br>
			Des que le Compteur de Tour de ce Champion ou d'un allié est reduit,
			augmente les degats de la prochaine attaque de ce Champion de 20% (s'accumule jusqu'a 100%).<br><br>
			<span class='gbt'>Effet Actif</span>.<br><br>
			Des que le Compteur de Tour de ce Champion tombe sous 25% a cause de l'effet de reduction
			du Compteur de Tour d'un ennemi, place un buff <span class='gbt'>Blocage des débuffs</span>
			sur ce Champion pendant 2 tours et lui accorde un Tour supplémentaire.
          `,
		  cooldown: 5,
          isPassive: true,
        },
      ],
      stats: {
        PV: "15 690",
        ATQ: "1 553",
        DEF: "980",
        VIT: "107",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        RÉS: "30",
        PRÉ: "0",
      },
    };

  	const aura = {
    img: "../../../../../../assets/images/auras/attack.png",
    description: `
      Augmente la statistique ATQ des Alliés lors de toutes les Batailles de 30%.
    `,
  };

