const championData = {
  type: "Soutien",
      spells: [
        {
          img: "assets/sort1.webp",
          name: "Catalyseur de bataille",
          description: `Attaque tous les ennemis. Possède 50% de chances de placer un débuff ${DEBUFFS.ATK} de 50% pendant 2 tours.${RETURN}${RETURN}

L'allié ayant les DÉG C. les plus élevés se joint également à l'attaque sur l'ennemi avant le moins de PV. L'allié qui rejoint l'attaque utilisera sa compétence par défaut.`,
          damage: "3*ATQ",
          levelInfo: [
            "Dégâts +5%",
            "Chance de Buff/débuff +10%",
            "Dégâts +5%",
            "Chance de Buff/débuff +10%",
          ],
        },
        {
          img: "assets/sort2.webp",
          name: "Fumées du graal",
          description: `Place un buff ${BUFFS.POISON_CLOUD}, un buff ${BUFFS.SPD} de 30% et deux buffs ${BUFFS.HEALS} de 15% sur une cible alliée pendant 2 tours.${RETURN}${RETURN}

Remplit également le Compteur de Tour de la cible de 50%.`,
          cooldown: 5,
          levelInfo: [
            "Temps de recharge -1",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/sort3.webp",
          name: "Tumeur maligne",
          description: `Attaque tous les ennemis. Possède 75% de chances de placer un débuff ${DEBUFFS.DEF} de 60% et un débuff ${DEBUFFS.WEAKEN} de 25% pendant 2 tours.${RETURN}${RETURN}

Ignorera les buffs ${BUFFS.BLOCK_DEBUFFS}.`,
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
          img: "assets/passif1.webp",
          name: "Yncensée [P]",
          description: `Augmente la PRÉ de cette Championne de 10 points pour chaque buff sur chaque ennemi.${RETURN}${RETURN}

Dès qu'un ennemi reçoit un buff, son Compteur de Tour est réduit de 10%.`,
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
    img: "../../../../../../assets/images/auras/acc.webp",
    description: `
      Augmente la statistique PRE des Alliés lors de toutes les Batailles de 70.
    `,
  };

