const championData = {
  type: "Soutien",
      spells: [
        {
          img: "assets/sort1.webp",
          name: "Foudre boréale",
          description: `Attaque 2 fois un ennemi. Chaque frappe possède 35% de chances de placer un débuff ${DEBUFFS.GEL} pendant 1 tour.${RETURN}${RETURN}

Il est impossible de résister à ce débuff si la cible possède 50% de PV ou moins.`,
          damage: "3.5*ATQ",
          levelInfo: [
            "Dégâts +5%",
            "Dégâts +5%",
            "Chance de Buff/débuff +5%",
            "Chance de Buff/débuff +10%",
          ],
        },
        {
          img: "assets/sort2.webp",
          name: "Voile d'eau de fonte",
          description: `Place un buff ${BUFFS.ATK} de 50% sur tous les alliés pendant 2 tours.${RETURN}${RETURN}

Possède également 80% de chances de placer un buff ${BUFFS.PERFECT_VEIL} sur tous les alliés sauf ce Champion pendant 2 tours.${RETURN}${RETURN}

Ensuite, remplit le Compteur de Tour de tous les alliés de 15%.`,
          cooldown: 5,
          levelInfo: [
            "Chance de Buff/débuff +10%",
            "Chance de Buff/débuff +10%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/sort3.webp",
          name: "Ruisseau de vie",
          description: `Ranime tous les alliés morts avec 40% de PV et 25% de Compteur de Tour.${RETURN}${RETURN}

Place également un buff ${BUFFS.PRE} de 50% et un buff ${BUFFS.DEF} de 60% sur tous les alliés pendant 3 tours. Ces buffs seront placés même si aucun allié n'a été ranimé.${RETURN}${RETURN}

Si aucun allié n'a été ranimé par cette compétence, accorde un Tour supplémentaire à ce Champion.`,
          cooldown: 7,
          levelInfo: [
            "Temps de recharge -1",
            "Temps de recharge -1",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/passif1.webp",
          name: "Force du dégel [P]",
          description: `Les alliés sous buff ${BUFFS.PERFECT_VEIL} placé par ce Champion infligent 10% de dégâts en plus.${RETURN}${RETURN}

Les alliés sous buff ${BUFFS.PERFECT_VEIL} placé par ce Champion infligent 10% de dégâts en plus aux ennemis sous buffs ${BUFFS.VEIL} ou ${BUFFS.PERFECT_VEIL}.`,
          isPassive: true,
        },
      ],
      stats: {
        PV: "21 480",
        ATQ: "782",
        DEF: "1 365",
        VIT: "112",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        RÉS: "40",
        PRÉ: "0",
      },
  	};

  const aura = {
    img: "../../../../../../assets/images/auras/speed.webp",
    description: `
      Augmente la statistique VIT des Alliés lors de toutes les Batailles de 19%.
    `,
  };

