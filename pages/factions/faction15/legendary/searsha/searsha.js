const championData = {
  type: "Soutien",
      spells: [
        {
          img: "assets/sort1.webp",
          name: "Embraser",
          description: `
            Attaque 3 fois un ennemi. 
            Chaque frappe a 30% de chances d'augmenter 
            d'1 tour la durée des débuffs 
            <span class='gbt'>Brulure de PV</span> sur la cible.<br><br>
            Chaque frappe a également 50% de chances 
            de reduire d'1 tour la durée d'un buff aleatoire de la cible.
            Si la cible est affligee d'un débuff <span class='gbt'>Brulure de PV</span>,
            ces chances passent a 100%.
          `,
          damage: "1.4*ATQ",
          levelInfo: [
            "Dégâts +5%",
            "Chance de Buff/débuff +5%",
            "Dégâts +10%",
            "Chance de Buff/débuff +10%",
          ],
        },
        {
          img: "assets/sort2.webp",
          name: "Incendie de foret",
          description: `
            Possède 80% de chances de placer un débuff 
            <span class='gbt'>Brulure de PV</span> sur tous les ennemis pendant 2 tours.
          `,
          cooldown: 3,
          levelInfo: [
            "Chance de Buff/débuff +5%",
            "Chance de Buff/débuff +5%",
            "Chance de Buff/débuff +5%",
            "Chance de Buff/débuff +5%",
          ],
        },
        {
          img: "assets/sort3.webp",
          name: "Panique ardente",
          description: `
            Attaque tous les ennemis.<br><br>
            Possède 75% de chances de placer un débuff
            <span class='gbt'>Reduction de VIT</span> de 30% pendant 2 tours.
            Si une cible se trouve sous débuff <span class='gbt'>Brulure de PV</span>,
            a également 75% de chances de placer un débuff
            <span class='gbt'>Malediction</span> pendant 2 tours.
          `,
          damage: "4.3*ATQ",
          cooldown: 5,
          levelInfo: [
            "Chance de Buff/débuff +25%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/passif1.webp",
          name: "Attiser [P]",
          description: `
            Des que cette Championne est attaquee par un ennemi
            sous débuff <span class='gbt'>Brulure de PV</span>, 
            soigne cette Championne de 25% des degats recus 
            et soigne tous les alliés de 10% des degats recus.<br><br>
            Possède également 35% de chances d'activer instantanement les
            débuffs <span class='gbt'>Brulure de PV</span> sur l'assaillant.
          `,
          isPassive: true,
          levelInfo: [
            "Chance de Buff/débuff +5%",
            "Chance de Buff/débuff +5%",
            "Chance de Buff/débuff +5%",
          ],
        },
      ],
      stats: {
        PV: "19 155",
        ATQ: "1 002",
        DEF: "1 299",
        VIT: "100",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        RÉS: "30",
        PRÉ: "20",
      },
    };

  	const aura = null; // Mettre null si pas d'aura, ou garder l'objet aura existant si il y en a une

