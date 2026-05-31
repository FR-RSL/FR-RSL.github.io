const championData = {
  type: "Soutien",
      spells: [
        {
          img: "assets/sort1.webp",
          name: "Embraser",
          description: `Attaque 3 fois un ennemi. Chaque frappe a 30 % de chances d'augmenter d'1 tour la durée des débuffs ${DEBUFFS.BURN} sur la cible. 

Chaque frappe a également 50 % de chances de réduire d'1 tour la durée d'un buff aléatoire de la cible. Si la cible est affligée d'un débuff ${DEBUFFS.BURN}, ces chances passent à 100 %.`,
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
          name: "Incendie de forêt",
          description: `Possède 80 % de chances de placer un débuff ${DEBUFFS.BURN} sur tous les ennemis pendant 2 tours.`,
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
          description: `Attaque tous les ennemis. 

Possède 75 % de chances de placer un débuff ${DEBUFFS.SPD} de 30 % pendant 2 tours. Si une cible se trouve sous débuff ${DEBUFFS.BURN}, a également 75 % de chances de placer un débuff ${DEBUFFS.HEX} pendant 2 tours.`,
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
          description: `Dès que cette Championne est attaquée par un ennemi sous débuff ${DEBUFFS.BURN}, soigne cette Championne de 25 % des dégâts reçus et soigne tous les alliés de 10 % des dégâts reçus. 

Possède également 35 % de chances d'activer instantanément les débuffs ${DEBUFFS.BURN} sur l'assaillant.`,
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

