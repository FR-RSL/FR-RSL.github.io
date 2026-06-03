const championData = {
  type: "Soutien",
      spells: [
        {
          img: "assets/sort1.webp",
          name: "Sceptre de prospérité",
          description: `Attaque un ennemi. Place un buff ${BUFFS.HEALS} de 15% sur l'allié ayant le moins de PV pendant 2 tours.`,
          damage: "4.8*ATQ",
          levelInfo: [
            "Dégâts +5%",
            "Dégâts +5%",
            "Dégâts +5%",
            "Dégâts +5%",
          ],
        },
        {
          img: "assets/sort2.webp",
          name: "Chemins de la nature",
          description: `Possède 75% de chances de retirer tous les débuffs sur tous les alliés.${RETURN}${RETURN}

Place un buff ${BUFFS.BLOCK_DEBUFFS} et un buff ${BUFFS.SPD} de 30% sur tous les alliés pendant 2 tours.`,
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
          name: "Saison de pousse",
          description: `Ranime une cible alliée avec 40% de PV et un Compteur de tour de 50%, puis place un buff ${BUFFS.DEF} de 60% et un buff ${BUFFS.ATK} de 50% sur cet allié pendant 2 tours.`,
          cooldown: 5,
          levelInfo: [
            "Temps de recharge -1",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/passif1.webp",
          name: "Voile de feuilles [P]",
          description: `Soigne tous les alliés de 10% de leurs PV MAX au début de leur tour.${RETURN}${RETURN}

Place un buff ${BUFFS.PERFECT_VEIL} d'1 tour sur l'allié ayant le moins de PV à la fin du tour de cette Championne.`,
          isPassive: true,
        },
      ],
      stats: {
        PV: "19 650",
        ATQ: "936",
        DEF: "1 332",
        VIT: "110",
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

