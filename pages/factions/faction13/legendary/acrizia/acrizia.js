const championData = {
  type: "Attaque",
      spells: [
        {
          img: "assets/sort1.webp",
          name: "Assaut infatigable",
          description: `Attaque un ennemi. Possède 45 % de chances de placer un débuff ${DEBUFFS.DEF} de 60 % pendant 2 tours.${RETURN}${RETURN}

Les dégâts de cette compétence augmentent de 10 % chaque fois qu'elle est utilisée. S'accumule jusqu'à 100 %.`,
          damage: "2.5*ATQ | 2% PV MAX ennemis",
          levelInfo: [
            "Dégâts +5%",
            "Chances de Buff/débuff +5%",
            "Dégâts +10%",
            "Chances de Buff/débuff +10%"
          ],
        },
        {
          img: "assets/sort2.webp",
          name: "Dominer le terrain",
          description: `Attaque 2 fois tous les ennemis. Place un buff ${BUFFS.SHIELD} sur ce Champion pendant 2 tours. La valeur du buff ${BUFFS.SHIELD} est égale à 5 % des PV MAX de ce Champion pour chaque coup critique.`,
          damage: "2*ATQ | 5% PV MAX ennemis",
          cooldown: 4,
          levelInfo: [
            "Dégâts +5%",
            "Dégâts +5%",
            "Dégâts +10%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/sort3.webp",
          name: "Démanteler",
          description: `Attaque 2 fois un ennemi. Possède 80 % de chances de voler 100 % du Compteur de Tour de la cible avant d'attaquer. Il est impossible de résister à cet effet si la cible possède des PV MAX plus élevés que ce Champion.`,
          damage: "3*ATQ | 5% PV MAX ennemis",
          cooldown: 4,
          levelInfo: [
            "Chance de Buff/débuff +10%",
            "Dégâts +10%",
            "Chance de Buff/débuff +10%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/passif1.webp",
          name: "Grandeur [P]",
          description: `Réduit les dégâts subis de 50 % lors des attaques de zone.${RETURN}${RETURN}

Si les PV MAX d'une cible sont supérieurs au double de ceux de ce Champion, l'attaque de ce Champion infligera des dégâts en fonction des PV MAX de la cible, au lieu de l'ATQ de ce Champion.`,
          isPassive: true,
        },
      ],
      stats: {
        PV: "15 855",
        ATQ: "1 476",
        DEF: "1 046",
        VIT: "97",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        RÉS: "40",
        PRÉ: "0",
      },
  };

  const aura = {
    img: "../../../../../../assets/images/auras/crit.webp",
    description: `
      Augmente la statistique TAUX C. des Alliés lors de toutes les Batailles de 19%.
    `,
  };

