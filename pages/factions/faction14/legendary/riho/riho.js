const championData = {
  type: "Soutien",
      spells: [
        {
          img: "assets/sort1.webp",
          name: "Absorption",
          description: `Attaque un ennemi. 

Place pendant 1 tour un buff ${BUFFS.HEALS} de 15 % sur l'allié ayant le moins de PV. Place également pendant 1 tour un buff ${BUFFS.HEALS} de 7,5 % sur tous les alliés ayant 30 % de PV ou moins.`,
          damage: "4.3*ATQ",
          levelInfo: [
            "Dégâts +5%",
            "Dégâts +5%",
            "Dégâts +5%",
            "Dégâts +5%",
          ],
        },
        {
          img: "assets/sort2.webp",
          name: "Points de Pression",
          description: `Place un débuff ${DEBUFFS.STUN} sur une cible ennemie pendant 1 tour, ainsi qu'un débuff ${DEBUFFS.BURN}, un débuff ${DEBUFFS.DEF} de 60 %, un débuff ${DEBUFFS.WEAKEN} de 25 %, un débuff ${DEBUFFS.ATK} de 50 % et un débuff ${DEBUFFS.CRATE} de 30 % pendant 2 tours, puis attaque la cible.`,
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
          img: "assets/sort3.webp",
          name: "Corps Parfait",
          description: `Retire tous les débuffs sur tous les alliés, puis leur place un buff ${BUFFS.BLOCK_DEBUFFS} pendant 2 tours. Soigne également tous les alliés de 35 % de leurs PV MAX et de 5 % supplémentaires pour chaque débuff qui leur a été retiré.`,
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
          img: "assets/passif1.webp",
          name: "Renvoi [P]",
          description: `Lorsque ce Champion reçoit des débuffs, les retourne de ce Champion vers l'assaillant.

[Ne retournera pas les débuffs impossibles à retirer.]`,
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
    img: "../../../../../../assets/images/auras/attack.webp",
    description: `
      Augmente la statistique ATQ des Alliés dans les Cryptes de Faction de 42%.
    `,
  };

