const championData = {
  type: "Defense",
      spells: [
        {
          img: "assets/sort1.webp",
          name: "Tronc cogneur",
          description: `Attaque un ennemi. Possède 80% de chances de placer un débuff ${DEBUFFS.SPD} de 30% pendant 2 tours.${RETURN}${RETURN}

Si la cible est un Boss, ignorera 20% de la RÉS de la cible.`,
          damage: "3.5*DEF",
          levelInfo: [
            "Dégâts +5%",
            "Dégâts +5%",
            "Chance de Buff/débuff +10%",
            "Chance de Buff/débuff +10%",
          ],
        },
        {
          img: "assets/sort2.webp",
          name: "Croissance boréale",
          description: `Attaque tous les ennemis. Possède 75% de chances de placer un débuff ${DEBUFFS.PRE} de 50% et un débuff ${DEBUFFS.BLOCK_BUFFS} pendant 2 tours.${RETURN}${RETURN}

Si la cible est un Boss, ignorera 20% de la RÉS de la cible.`,
          damage: "3.6*DEF",
          cooldown: 4,
          levelInfo: [
            "Dégâts +10%",
            "Dégâts +10%",
            "Chance de Buff/débuff +10%",
            "Chance de Buff/débuff +15%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/sort3.webp",
          name: "Cape d'aurore",
          description: `Place un buff ${BUFFS.RES} de 50% sur tous les alliés pendant 3 tours.${RETURN}${RETURN}

Place également un buff ${BUFFS.PERFECT_VEIL} sur tous les alliés sauf ce Champion pendant 2 tours.`,
          cooldown: 6,
          levelInfo: [
            "Temps de recharge -1",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/passif1.webp",
          name: "Esprit du nord [P]",
          description: `Si un allié possède 2 buffs ou plus, augmente sa RÉS de 50 points.${RETURN}${RETURN}

Si un allié possède 3 buffs ou plus, augmente également sa PRÉ de 50 poins.${RETURN}${RETURN}

Si un allié possède 4 buffs ou plus, augmente également ses dégâts de 20%.${RETURN}${RETURN}

Si plusieurs Champions de l'équipe disposent de cette Compétence, une seule sera activée. Cette compétence ne s'activera pas sur les copies en double de ce Champion si ce Champion spécifique est mort.`,
          isPassive: true,
        },
      ],
      stats: {
        PV: "18 330",
        ATQ: "859",
        DEF: "1 498",
        VIT: "100",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        RÉS: "50",
        PRÉ: "10",
      },
  	};

  const aura = {
    img: "../../../../../../assets/images/auras/res.webp",
    description: `
      Augmente la statistique RES des Alliés lors de toutes les Batailles de 60.
    `,
  };

