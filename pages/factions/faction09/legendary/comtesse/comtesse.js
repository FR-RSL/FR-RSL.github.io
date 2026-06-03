const championData = {
  type: "Attaque",
      spells: [
        {
          img: "assets/sort1.webp",
          name: "Caresse Pourrissante",
          description: `Attaque 2 fois un ennemi. Possède 30 % de chances de placer un débuff ${DEBUFFS.WEAKEN} de 25 % pendant 2 tours.`,
          damage: "1.6*ATQ",
          levelInfo: [
            "Dégâts +5%",
            "Chance de Buff/débuff +10%",
            "Dégâts +5%",
            "Chance de Buff/débuff +10%",
          ],
        },
        {
          img: "assets/sort2.webp",
          name: "Fange de Misère",
          description: `Attaque 3 fois tous les ennemis. Chaque frappe possède 75 % de chances de placer un débuff ${DEBUFFS.SPD} de 30 % pendant 2 tours. Chaque frappe possède également 75 % de chances de réduire le Compteur de Tour de l'ennemi de 10 %.`,
          cooldown: 5,
          damage: "1.15*ATQ",
          levelInfo: [
          	"Dégâts +10%",
            "Chance de Buff/débuff +10%",
            "Chance de Buff/débuff +15%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/sort3.webp",
          name: "Dilatation du Temps",
          description: `Attaque tous les ennemis. Possède 75 % de chances de placer un débuff ${DEBUFFS.LOCK_ACTIVE} pendant 2 tours.${RETURN}${RETURN}

Réduit également d'1 tour les temps de recharge de toutes les compétences alliées, sauf celles de ce Champion.`,
          cooldown: 7,
          damage: "4*ATQ",
          levelInfo: [
            "Chance de Buff/débuff +10%",
          	"Dégâts +10%",
            "Chance de Buff/débuff +15%",
            "Temps de recharge -1",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/passif1.webp",
          name: "Damnée [P]",
          description: `Au début de chaque tour, retire un débuff aléatoire sur Astralon et ce Champion.${RETURN}${RETURN}

Uniquement disponible lorsque Astralon se trouve dans l'équipe.`,
          isPassive: true,
        },
        {
          img: "assets/passif2.webp",
          name: "Malheur Canalise [P]",
          description: `
            Remplit le Compteur de Tour${RETURN}
			de ce Champion de 5% chaque fois qu'un allié recoit${RETURN}
			un débuff.
          `,
          isPassive: true,
        },
      ],
      stats: {
        PV: "17 175",
        ATQ: "1 498",
        DEF: "936",
        VIT: "100",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        RÉS: "30",
        PRÉ: "20",
      },
  };

  	const aura = null;

