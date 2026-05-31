const championData = {
  type: "Defense",
      spells: [
        {
          img: "assets/sort1.webp",
          name: "Liens brûlants",
          description: `Attaque un ennemi. Possède 50 % de chances de placer un débuff ${DEBUFFS.BURN} pendant 2 tours.`,
          damage: "3.5*DEF",
          levelInfo: [
            "Dégâts +10%",
            "Chance de Buff/débuff +5%",
            "Dégâts +10%",
            "Chance de Buff/débuff +5%",
          ],
        },
        {
          img: "assets/sort2.webp",
          name: "Terrible volute",
          description: `Attaque tous les ennemis. Possède 75 % de chances de placer un débuff ${DEBUFFS.DEF} de 60 % pendant 2 tours. Possède également 75 % de chances de placer pendant 2 tours un débuff ${DEBUFFS.ATK} de 50 % sur les ennemis sous débuffs ${DEBUFFS.HEX}.`,
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
          img: "assets/sort3.webp",
          name: "Double dépravation",
          description: `Attaque 2 fois tous les ennemis. La première frappe retire tous les buffs de chaque cible. La seconde frappe place un débuff ${DEBUFFS.HEX} pendant 2 tours.`,
          damage: "2.1*DEF",
          cooldown: 5,
          levelInfo: [
            "Temps de recharge -1",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/passif1.webp",
          name: "Chasseur de fléaux [P]",
          description: `Dès qu'un allié attaque un ennemi sous débuff ${DEBUFFS.HEX}, ce Champion possède 50 % de chances de faire équipe et de rejoindre l'attaque de l'allié.`,
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
    img: "../../../../../../assets/images/auras/defence.webp",
    description: `
      Augmente la statistique DEF des Alliés lors de toutes les Batailles de 30%.
    `,
  };

