const championData = {
  type: "Attaque",
      spells: [
        {
          img: "assets/sort1.webp",
          name: "Sourire d'Héphraak",
          description: `
            Attaque un ennemi. Place un coup supplémentaire si cette attaque passe en critique.
          `,
          damage: "2.2*ATQ",
          levelInfo: [
            "Dégâts +5%",
            "Dégâts +5%",
            "Dégâts +5%",
            "Dégâts +5%",
          ],
        },
        {
          img: "assets/sort2.webp",
          name: "Mépris d'Héphraak",
          description: `Attaque tous les ennemis. Place une frappe supplémentaire sur les cibles ayant moins de 50% de PV après la première frappe. Chaque frappe ignorera 15% de la DÉF de la cible.`,
          cooldown: 4,
          damage: "3.6*ATQ",
          levelInfo: [
          	"Dégâts +10%",
            "Dégâts +10%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/sort3.webp",
          name: "Mégalomanie",
          description: `Place un buff ${BUFFS.ATK} de 50% et un buff ${BUFFS.CRATE} de 30% sur ce Champion pendant 3 tours, puis accorde un Tour supplémentaire.`,
          cooldown: 6,
          levelInfo: [
            "Temps de recharge -1",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/passif1.webp",
          name: "Prince de fierté [P]",
          description: `Dès qu'un allié est tué par un ennemi, active instantanément la compétence Mépris d'Héphraak. Ne placera pas cette compétence en temps de recharge.${RETURN}${RETURN}

Si plusieurs Champions de l'équipe disposent de cette Compétence, une seule sera activée. Cette compétence ne s'activera pas sur les copies en double de ce Champion si ce Champion spécifique est mort.`,
		  cooldown: 5,
          levelInfo: [
            "Temps de recharge -1",
          ],
          isPassive: true,
        },
      ],
      stats: {
        PV: "14 535",
        ATQ: "1 553",
        DEF: "1 057",
        VIT: "99",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        RÉS: "40",
        PRÉ: "0",
      },
  };

  	const aura = null;

