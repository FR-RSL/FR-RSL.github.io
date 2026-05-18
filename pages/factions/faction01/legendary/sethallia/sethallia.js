const championData = {
  type: "Soutien",
      spells: [
        {
          img: "assets/sort1.webp",
          name: "Passer a la Flamme",
          description: `
            Attaque un ennemi. Possede 50% de chances de placer un debuff ${DEBUFFS.BURN} de 2 tours.
          `,
          damage: "5.2*ATQ",
          levelInfo: [
            "Dégâts +5%",
            "Dégâts +5%",
			"Chance de Buff/débuff +10%",
          ],
        },
        {
          img: "assets/sort2.webp",
          name: "Etreinte Seigneuriale",
          description: `
            Retire tous les debuffs sur une cible alliee, puis place un buff ${BUFFS.BLOCK_DEBUFFS} de 2 tours, avant de soigner cet allie de 75% de ses PV MAX.<br><br>
			Soigne tous les autres allies de 20% de leurs PV MAX, puis remplit de 15% leurs Compteurs de Tours si la cible est totalement soignee par cette Competence.
          `,
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
          description: `
            Possede 75% de chances de retirer tous les buffs sur tous les ennemis, puis reduit de 10% le Compteur de Tour de tous les ennemis et remplit de 10% le Compteur de Tour de tous les allies.<br><br>
			Reduit de 20% le Compteur de Tour de tous les ennemis et remplit de 20% le Compteur de Tour de tous les allies si 5 buffs, ou plus, ont ete retires.
          `,
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

