const championData = {
  type: "Soutien",
      spells: [
        {
          img: "assets/sort1.png",
          name: "Catalyseur de bataille",
          description: `
            Attaque tous les ennemis.
            Possède 50% de chances de placer un débuff
            <span class='gbt'>Reduction d'ATQ</span> de 50% pendant 2 tours.<br><br>
            L'allié ayant les DEG C. les plus eleves se joint également
            a l'attaque sur l'ennemi ayant le moins de PV.
            L'allié qui rejoint l'attaque utilisera sa 
            compétence par defaut.
          `,
          damage: "3*ATQ",
          levelInfo: [
            "Dégâts +5%",
            "Chance de Buff/débuff +10%",
            "Dégâts +5%",
            "Chance de Buff/débuff +10%",
          ],
        },
        {
          img: "assets/sort2.png",
          name: "Fumees du graal",
          description: `
            Place un buff <span class='gbt'>Nuage de poison</span>, un buff
            <span class='gbt'>Augmentation de VIT</span> de 30% et deux buffs
            <span class='gbt'>Soins continus</span> de 15% sur une cible allié pendant 2 tours.<br><br>
            Remplit également le Compteur de la cible de 50%.
          `,
          cooldown: 5,
          levelInfo: [
            "Temps de recharge -1",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/sort3.png",
          name: "Tumeur maligne",
          description: `
            Attaque tous les ennemis. Possède 75% de chances de placer un
            débuff <span class='gbt'>Reduction de DEF</span> de 60% et un débuff
            <span class='gbt'>Affaiblissement</span> de 25% pendant 2 tours.<br><br>
            Ignorera les buffs <span class='gbt'>Blocage des débuffs</span>.
          `,
          damage: "4.5*ATQ",
          cooldown: 5,
          levelInfo: [
            "Chance de Buff/débuff +10%",
            "Chance de Buff/débuff +15%",
            "Temps de recharge -1",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/passif1.png",
          name: "Yncensee [P]",
          description: `
            Augmente la PRE de cette Championne de 10 points 
            pour chaque buff sur chaque ennemi.<br><br>
            Des qu'un ennemi recoit un buff, reduit son Compteur de Tour de 10%.
          `,
          isPassive: true,
        },
      ],
      stats: {
        PV: "18 660",
        ATQ: "1 200",
        DEF: "1 134",
        VIT: "110",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        RÉS: "30",
        PRÉ: "20",
      },
  };

  const aura = {
    img: "../../../../../../assets/images/auras/acc.png",
    description: `
      Augmente la statistique PRE des Alliés lors de toutes les Batailles de 70.
    `,
  };

