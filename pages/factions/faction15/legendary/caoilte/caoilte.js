const championData = {
  type: "Attaque",
      spells: [
        {
          img: "assets/sort1.webp",
          name: "Flèche de cendre",
          description: `Attaque un ennemi. Place un buff ${BUFFS.CDAM} de 30 % sur ce Champion pendant 2 tours.`,
          damage: "3.7*ATQ",
          levelInfo: [
            "Dégâts +10%",
            "Dégâts +10%"
          ],
        },
        {
          img: "assets/sort2.webp",
          name: "Feuilles mortes",
          description: `Attaque 2 fois un ennemi. Si la cible initiale est tuée, attaque également l'ennemi ayant les PV les plus bas.${RETURN}${RETURN}

Les deux attaques ignoreront 50 % de la DÉF de la cible ainsi que les buffs ${BUFFS.UNKILLABLE} et ${BUFFS.BLOCK_DAMAGE}.`,
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
          img: "assets/sort3.webp",
          name: "Douleur torrentielle",
          description: `Attaque tous les ennemis.${RETURN}${RETURN}

Chaque frappe critique remplit le Compteur de Tour de ce Champion de 10 % et le soigne de 10 % de ses PV MAX (s'accumule jusqu'à 50 %).${RETURN}${RETURN}

Si cette attaque tue un ennemi, place un buff ${BUFFS.UNKILLABLE} sur ce Champion pendant 1 tour.`,
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
          img: "assets/passif1.webp",
          name: "Sentinelle corrompue [P]",
          description: `${PASSIVE}

Dès que le Compteur de Tour de ce Champion ou d'un allié est réduit, augmente les dégâts de la prochaine attaque de ce Champion de 20 % (s'accumule jusqu'à 100 %).${RETURN}${RETURN}

${ACTIVE}

Dès que le Compteur de Tour de ce Champion tombe sous 25 % à cause de l'effet de réduction du Compteur de Tour d'un ennemi, place un buff ${BUFFS.BLOCK_DEBUFFS} sur ce Champion pendant 2 tours et lui accorde un Tour supplémentaire.`,
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
    img: "../../../../../../assets/images/auras/attack.webp",
    description: `
      Augmente la statistique ATQ des Alliés lors de toutes les Batailles de 30%.
    `,
  };

