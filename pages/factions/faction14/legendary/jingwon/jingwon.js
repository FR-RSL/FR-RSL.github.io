const championData = {
  type: "PV",
      spells: [
        {
          img: "assets/sort1.webp",
          name: "Échange tragique",
          description: `Attaque un ennemi. Transfère tous les débuffs de ce Champion sur la cible. 

Possède également 50 % de chances de placer un débuff ${DEBUFFS.STUN} pendant 1 tour.`,
          damage: "0.23*PV",
          levelInfo: [
            "Dégâts +5%",
            "Dégâts +5%",
            "Dégâts +10%",
          ],
        },
        {
          img: "assets/sort2.webp",
          name: "Calamité aggravée",
          description: `Attaque tous les ennemis. Possède 75 % de chances d'augmenter d'1 tour la durée de tous les débuffs sur tous les ennemis. 

Place également un débuff ${DEBUFFS.LOCK_ACTIVE} et un débuff ${DEBUFFS.BLOCK_BUFFS} pendant 2 tours.`,
          damage: "0.28*PV",
          cooldown: 5,
          levelInfo: [
            "Chance de Buff/débuff +10%",
            "Chance de Buff/débuff +15%",
            "Temps de recharge -1",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/sort3.webp",
          name: "Éclat de puissance",
          description: `Attaque 2 fois tous les ennemis. 

La première frappe possède 80 % de chances de retirer tous les buffs de tous les ennemis.

La seconde frappe possède 80 % de chances de placer un débuff ${DEBUFFS.PRE} de 50 % et un débuff ${DEBUFFS.CDAM} de 25 % pendant 2 tours. 

Place également un buff ${BUFFS.STRENGTHEN} de 25 % sur tous les alliés pendant 2 tours.`,
          damage: "0.14*PV",
          cooldown: 5,
          levelInfo: [
            "Chance de Buff/débuff +10%",
            "Chance de Buff/débuff +10%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/passif1.webp",
          name: "Déchaîné [P]",
          description: `${PASSIVE}

Ce Champion est immunisé contre les débuffs ${DEBUFFS.FEAR}, ${DEBUFFS.TRUE_FEAR}, ${DEBUFFS.GEL}, ${DEBUFFS.PROVOKE}, ${DEBUFFS.SLEEP}, ${DEBUFFS.STUN} et ${DEBUFFS.PETRIFICATION}.

${ACTIVE}

À la fin de chaque tour ennemi ou allié, retire tous les débuffs ${DEBUFFS.FEAR}, ${DEBUFFS.TRUE_FEAR}, ${DEBUFFS.GEL}, ${DEBUFFS.PROVOKE}, ${DEBUFFS.SLEEP}, ${DEBUFFS.STUN} et ${DEBUFFS.PETRIFICATION} sur tous les alliés et place un buff ${BUFFS.BLOCK_DEBUFFS} pendant 1 tour sur les alliés dont les débuffs ont été retirés.`,
          isPassive: true,
          cooldown: 6,
          levelInfo: [
            "Temps de recharge -1",
            "Temps de recharge -1",
          ],
        },
      ],
      stats: {
        PV: "22 800",
        ATQ: "925",
        DEF: "1 134",
        VIT: "103",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        RÉS: "30",
        PRÉ: "20",
      },
  };

  const aura = {
    img: "../../../../../../assets/images/auras/hp.webp",
    description: `
      Augmente la statistique PV des Alliés lors de toutes les Batailles de 33%.
    `,
  };

