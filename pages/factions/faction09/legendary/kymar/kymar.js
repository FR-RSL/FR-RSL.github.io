const championData = {
  type: "Soutien",
      spells: [
        {
          img: "assets/sort1.webp",
          name: "Feu Fantôme",
          description: `Attaque tous les ennemis. Place un débuff de ${DEBUFFS.POISON} de 5% pendant 1 tour si cette attaque passe en critique.`,
          damage: "3*ATQ",
          levelInfo: [
            "Dégâts +5%",
            "Dégâts +5%",
            "Dégâts +5%",
            "Dégâts +5%",
          ],
        },
        {
          img: "assets/sort2.webp",
          name: "Regard Abyssal",
          description: `Attaque tous les ennemis. Retire tous les buffs. Place un débuff de ${DEBUFFS.SLEEP} pendant 1 tour.`,
          damage: "3.6*ATQ",
          cooldown: 5,
          levelInfo: [
            "Dégâts +10%",
            "Dégâts +10%",
            "Temps de recharge -1",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/sort3.webp",
          name: "Sceau de Magie",
          description: `Réinitialise les temps de recharge de toutes les compétences des alliés. Ne réinitialisera pas ou ne réduira pas les temps de recharge des compétences de ce Champion. Le temps de recharge de cette compétence ne peut pas être réduit ou réinitialisé.`,
          cooldown: 7,
          levelInfo: [
            "Temps de recharge -1",
          ],
        },
      ],
      stats: {
        PV: "18 990",
        ATQ: "1 046",
        DEF: "1 266",
        VIT: "103",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        RÉS: "40",
        PRÉ: "0",
      },
  };

  const aura = {
    img: "../../../../../../assets/images/auras/speed.webp",
    description: `
      Augmente la statistique VIT des Alliés dans les batailles d'Arene de 30%.
    `,
  };

