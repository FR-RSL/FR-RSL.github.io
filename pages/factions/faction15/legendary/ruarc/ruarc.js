const championData = {
  type: "Defense",
      spells: [
        {
          img: "assets/sort1.webp",
          name: "Épée des clairières",
          description: `Attaque un ennemi. Transfère tous les débuffs de ce Champion sur la cible. Soigne ce Champion de 5 % de ses PV MAX pour chaque débuff transféré.`,
          damage: "2.5*DEF",
          levelInfo: [
            "Dégâts +5%",
            "Dégâts +5%",
            "Dégâts +10%",
          ],
        },
        {
          img: "assets/sort2.webp",
          name: "La rouille te consume",
          description: `Attaque tous les ennemis. Possède 80 % de chances de placer un débuff ${DEBUFFS.ATK} de 50 % pendant 2 tours. 

Vole également tous les buffs ${BUFFS.HEALS} de chaque ennemi. Il est impossible de résister à cet effet.`,
		  damage: "3.3*DEF",
          cooldown: 4,
          levelInfo: [
		  	"Dégâts +10%",
            "Chance de Buff/débuff +10%",
            "Chance de Buff/débuff +10%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/sort3.webp",
          name: "Appel de la nature",
          description: `Place un buff ${BUFFS.TAUNT}, un buff ${BUFFS.DEF} de 60 % et un buff ${BUFFS.STRENGTHEN} de 25 % sur ce Champion pendant 2 tours.`,
          cooldown: 6,
          levelInfo: [
            "Temps de recharge -1",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/passif1.webp",
          name: "Preux des vignes [P]",
          description: `Dès qu'un allié perd 10 % ou plus de ses PV MAX suite à une seule frappe, place sur cet allié un buff ${BUFFS.SHIELD} équivalent à 10 % de ses PV MAX pendant 2 tours.`,
          cooldown: 1,
          levelInfo: [
            "Temps de recharge -1",
          ],
          isPassive: true,
        },
      ],
      stats: {
        PV: "19 650",
        ATQ: "771",
        DEF: "1 498",
        VIT: "102",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        RÉS: "50",
        PRÉ: "0",
      },
  	};

  const aura = {
    img: "../../../../../../assets/images/auras/defence.webp",
    description: `
      Augmente la statistique DEF des Alliés lors de toutes les Batailles de 30%.
    `,
  };

