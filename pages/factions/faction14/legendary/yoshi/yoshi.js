const championData = {
  type: "Soutien",
      spells: [
        {
          img: "assets/sort1.webp",
          name: "Alcool Puissant",
          description: `Attaque un ennemi. Possède 30 % de chances de placer un débuff ${DEBUFFS.STUN} pendant 1 tour.`,
          damage: "4.1*ATQ",
          levelInfo: [
            "Dégâts +5%",
            "Dégâts +5%",
            "Chance de Buff/débuff +5%",
            "Chance de Buff/débuff +5%",
          ],
        },
        {
          img: "assets/sort2.webp",
          name: "Spiritueux Brûlants",
          description: `Attaque 2 fois au hasard. Possède 75 % de chances de placer un débuff ${DEBUFFS.PRE} de 50 % et un débuff ${DEBUFFS.BURN} pendant 2 tours.`,
          damage: "2.6*ATQ",
          cooldown: 3,
          levelInfo: [
            "Dégâts +5%",
            "Dégâts +5%",
            "Dégâts +10%",
            "Chance de Buff/débuff +10%",
            "Chance de Buff/débuff +15%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/sort3.webp",
          name: "Toast au Combat",
          description: `Place un buff ${BUFFS.ATK} de 50 % et un buff ${BUFFS.PRE} de 50 % sur tous les alliés pendant 2 tours.

Possède également 50 % de chances de placer un débuff ${DEBUFFS.TRUE_FEAR} sur tous les ennemis pendant 1 tour. Sinon, possède 75 % de chances de le placer sur les ennemis sous buffs ${BUFFS.ATK}.`,
          cooldown: 5,
          levelInfo: [
            "Chance de Buff/débuff +10%",
            "Chance de Buff/débuff +15%",
            "Temps de recharge -1",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/passif1.webp",
          name: "Fêtard [P]",
          description: `Remplit le Compteur de Tour de ce Champion de 4 % chaque fois qu'un ennemi reçoit un buff.`,
          isPassive: true,
        },
      ],
      stats: {
        PV: "19 650",
        ATQ: "1 299",
        DEF: "969",
        VIT: "103",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        RÉS: "40",
        PRÉ: "20",
      },
  };

  const aura = {
    img: "../../../../../../assets/images/auras/speed.webp",
    description: `
      Augmente la statistique VIT des Alliés lors de toutes les Batailles de 19%.
    `,
  };

