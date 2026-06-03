const championData = {
  type: "Soutien",
      spells: [
        {
          img: "assets/sort1.webp",
          name: "Passer à la Flamme",
          description: `Attaque un ennemi. Possède 50% de chances de placer un débuff de ${DEBUFFS.BURN} de 2 tours.`,
          damage: "5.2*ATQ",
          levelInfo: [
            "Dégâts +5%",
            "Dégâts +5%",
			"Chance de Buff/débuff +10%",
          ],
        },
        {
          img: "assets/sort2.webp",
          name: "Étreinte Seigneuriale",
          description: `Retire tous les débuffs sur une cible alliée, puis place un buff ${BUFFS.BLOCK_DEBUFFS} de 2 tours, avant de soigner cet allié de 75% de ses PV MAX.${RETURN}${RETURN}

Soigne tous les autres alliés de 20% de leurs PV Max, puis remplit de 15% leurs Compteurs de Tour si la cible est totalement soignée par cette Compétence.`,
          cooldown: 3,
          levelInfo: [
            "Soins +5%",
            "Soins +5%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/sort3.webp",
          name: "Agresser",
          description: `Possède 75% de chances de retirer tous les buffs sur tous les ennemis, puis réduit de 10% le Compteur de Tour de tous les ennemis et remplit de 10% le Compteur de Tour de tous les alliés.${RETURN}${RETURN}

Réduit de 20% le Compteur de Tour de tous les ennemis et remplit de 20% le Compteur de Tour de tous les alliés si 5 buffs, ou plus, ont été retirés.`,
          cooldown: 4,
          levelInfo: [
			"Chance de Buff/débuff +5%",
			"Chance de Buff/débuff +10%",
			"Chance de Buff/débuff +10%",
            "Temps de recharge -1",
          ],
        },
      ],
      stats: {
        PV: "18 000",
        ATQ: "1 024",
        DEF: "1 354",
        VIT: "108",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        RÉS: "30",
        PRÉ: "0",
      },
    };

  	const aura = {
    img: "../../../../../../assets/images/auras/hp.webp",
    description: `
      Augmente la statistique RES des Alliés de Magie lors de toutes les Batailles de 50.
    `,
  };

