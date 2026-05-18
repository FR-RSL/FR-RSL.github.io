const championData = {
  type: "Defense",
      spells: [
        {
          img: "assets/sort1.webp",
          name: "Epee des clairieres",
          description: `
            Attaque un ennemi. 
            Transfere tous les débuffs de ce Champion sur la cible.
			Soigne ce Champion de 5% de ses PV MAX pour chaque débuff transfere
          `,
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
          description: `
        	Attaque tous les ennemis.
			Possède 80% de chances de placer un débuff
			<span class='gbt'>Reduction d'ATQ</span> de 50% pendant 2 tours.<br><br>
			Vole également tous les débuffs <span class='gbt'>Soins continus</span> de chaque ennemi.
			Il est impossible de resister a cet effet.
          `,
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
          description: `
            Place un buff <span class='gbt'>Raillerie</span>,
			un buff <span class='gbt'>Augmentation de DEF</span> de 60%
			et un buff <span class='gbt'>Renforcer</span> de 25%
			sur ce Champion pendant 2 tours.
          `,
          cooldown: 6,
          levelInfo: [
            "Temps de recharge -1",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/passif1.webp",
          name: "Preux de vignes [P]",
          description: `
            Des qu'un allié perd 10% ou plus de ses PV MAX suite a une seule frappe,
			place sur cet allié un buff <span class='gbt'>Bouclier</span>
			equivalent a 10% de ses PV MAX pendant 2 tours.
          `,
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

