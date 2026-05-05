const championData = {
  type: "Defense",
      spells: [
        {
          img: "assets/sort1.png",
          name: "Liens brulants",
          description: `
            Attaque un ennemi.
			Possede 50% de chances de placer un débuff <span class='gbt'>Brulure de PV</span> penant 2 tours.`,
          damage: "3.5*DEF",
          levelInfo: [
            "Dégâts +10%",
            "Chance de Buff/débuff +5%",
            "Dégâts +10%",
            "Chance de Buff/débuff +5%",
          ],
        },
        {
          img: "assets/sort2.png",
          name: "Terrible volute",
          description: `
            Attaque tous les ennemis. Possede 75% de chances de placer un debuff <span class='gbt'>Reduction de DEF</span> de 60% pendant 2 tours.
			Possede egalement 75% de chances de placer un debuff <span class='gbt'>Reduction d'ATQ</span> de 50% sur les ennemis sous debuffs <span class='gbt'>Malediction</span>.
          `,
          damage: "3.9*DEF",
          cooldown: 4,
          levelInfo: [
            "Dégâts +10%",
            "Chance de Buff/débuff +10%",
            "Dégâts +10%",
            "Chance de Buff/débuff +15%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/sort3.png",
          name: "Double depravation",
          description: `
            Attaque 2 fois tous les ennemis. La premiere frappe retire tous les buffs de chaque cible.
			La seconde frappe place un debuff <span class='gbt'>Malediction</span> pendant 2 tours.
          `,
          damage: "2.1*DEF",
          cooldown: 5,
          levelInfo: [
            "Temps de recharge -1",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/passif1.png",
          name: "Chasseur de fleaux [P]",
          description: `
            Des qu'un allie attaque un ennemi sous debuff <span class='gbt'>Malediction</span>, ce Champion possede 50% de chances de faire equipe
			et de rejoindre l'attaque de l'allie.
          `,
          isPassive: true,
        },
      ],
      stats: {
        PV: "19 650",
        ATQ: "804",
        DEF: "1 465",
        VIT: "101",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        RÉS: "30",
        PRÉ: "20",
      },
  };

  const aura = {
    img: "../../../../../../assets/images/auras/defence.png",
    description: `
      Augmente la statistique DEF des Alliés lors de toutes les Batailles de 30%.
    `,
  };

