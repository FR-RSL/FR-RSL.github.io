const championData = {
  type: "Soutien",
      spells: [
        {
          img: "assets/sort1.webp",
          name: "Toucher de Dame",
          description: `Attaque un ennemi, puis attaque l'ennemi ayant le Compteur de Tour le plus élevé. Attaquera deux fois le même ennemi si la cible initiale possède également le Compteur de Tour le plus élevé. La seconde frappe possède 50% de chances de réduire le Compteur de Tour de la cible de 15%.`,
          damage: "2.4*ATQ",
          levelInfo: [
            "Dégâts +5%",
            "Dégâts +5%",
            "Chance de Buff/débuff +5%",
            "Chance de Buff/débuff +5%",
          ],
        },
        {
          img: "assets/sort2.webp",
          name: "Bourrasque de Pétales",
          description: `Attaque tous les ennemis. Possède 75% de chances de placer un débuff ${DEBUFFS.PRE} de 50% et un débuff ${DEBUFFS.SPD} de 30% pendant 2 tours. Possède également 75% de chances de réduire le Compteur de Tour de chaque cible de 15%.`,
          damage: "4.2*ATQ",
          cooldown: 5,
          levelInfo: [
            "Dégâts +5%",
            "Dégâts +5%",
            "Chance de Buff/débuff +10%",
            "Chance de Buff/débuff +15%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/sort3.webp",
          name: "Flux Spirituel",
          description: `Retire un buff aléatoire à chaque ennemi, puis possède 75% de chances de placer un débuff ${DEBUFFS.BLOCK_BUFFS} pendant 2 tours sur les ennemis dont des buffs ont été retirés.${RETURN}${RETURN}

Remplit également le Compteur de Tour de tous les alliés de 15%, puis place un buff ${BUFFS.PRE} de 50% et un buff ${BUFFS.SPD} de 30% sur tous les alliés pendant 2 tours.`,
          cooldown: 6,
          levelInfo: [
            "Chance de Buff/débuff +10%",
            "Chance de Buff/débuff +15%",
            "Temps de recharge -1",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/passif1.webp",
          name: "Impérieuse [P]",
          description: `Dès que cette Championne place un débuff sur un ennemi, réduit également le Compteur de Tour de cet ennemi de 5% pour chaque débuff placé.${RETURN}${RETURN}

Dès que cette Championne ou qu'un allié reçoit un débuff, remplit son Compteur de Tour de 5% pour chaque débuff reçu.`,
          isPassive: true,
        },
      ],
      stats: {
        PV: "20 475",
        ATQ: "1 068",
        DEF: "1 145",
        VIT: "115",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        RÉS: "30",
        PRÉ: "10",
      },
  };

  const aura = {
    img: "../../../../../../assets/images/auras/speed.webp",
    description: `
      Augmente la statistique VIT des Alliés dans la Tour du Malheur de 30%.
    `,
  };

