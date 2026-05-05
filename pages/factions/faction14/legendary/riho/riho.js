const championData = {
  type: "Soutien",
      spells: [
        {
          img: "assets/sort1.png",
          name: "Absorption",
          description: `
            Attaque un ennemi.<br><br>
			Place pendant 1 tour un buff <span class='gbt'>Soins continus</span> de 15%
			sur l'allié ayant le moins de PV.
			Place également pendant 1 tour un buff <span class='gbt'>Soins continus</span>
			de 7.5% sur tous les alliés ayant 30% de PV ou moins.
          `,
          damage: "4.3*ATQ",
          levelInfo: [
            "Dégâts +5%",
            "Dégâts +5%",
            "Dégâts +5%",
            "Dégâts +5%",
          ],
        },
        {
          img: "assets/sort2.png",
          name: "Points de Pression",
          description: `
            Place un débuff <span class='gbt'>Etourdissement</span>
			sur un cible ennemie pendant 1 tour,
			ainsi qu'un débuff <span class='gbt'>Brulure de PV</span>,
			un débuff <span class='gbt'>Reduction de DEF</span> de 60%,
			un débuff <span class='gbt'>Affaiblissement</span> de 25%,
			un débuff <span class='gbt'>Reduction d'ATQ</span> de 50% et
			un débuff <span class='gbt'>Reduction du TAUX C.</span> de 30% 
			pendant 2 tours, puis attaque la cible.
          `,
          damage: "5.8*ATQ",
          cooldown: 4,
          levelInfo: [
            "Dégâts +5%",
            "Dégâts +5%",
            "Dégâts +5%",
            "Dégâts +10%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/sort3.png",
          name: "Corps Parfait",
          description: `
            Retire tous les débuffs sur tous les alliés,
			puis leur place un buff <span class='gbt'>Blocage des débuffs</span>
			pendant 2 tours. Soigne également tous les alliés de 35%
			de leurs PV MAX et de 5% supplémentaires pour chaque débuff
			qui leur a ete retire.
          `,
          cooldown: 6,
          levelInfo: [
            "Soins +10%",
            "Soins +10%",
            "Temps de recharge -1",
            "Temps de recharge -1",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/passif1.png",
          name: "Renvoi [P]",
          description: `
            Lors de la reception d'un débuff,
			le transfere de ce Champion a l'assaillant.<br><br>
			[Ne transferera pas les débuffs impossibles a retirer.]
          `,
		  cooldown: 3,
          isPassive: true,
        },
      ],
      stats: {
        PV: "18 660",
        ATQ: "1 189",
        DEF: "1 145",
        VIT: "105",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        RÉS: "40",
        PRÉ: "0",
      },
  };

  const aura = {
    img: "../../../../../../assets/images/auras/attack.png",
    description: `
      Augmente la statistique ATQ des Alliés dans les Cryptes de Faction de 42%.
    `,
  };

