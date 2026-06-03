const championData = {
  type: "Soutien",
      spells: [
        {
          img: "assets/sort1.webp",
          name: "Volettement agité",
          description: `Attaque un ennemi. Possède 80 % de chances de placer un débuff ${DEBUFFS.SPD} de 30 % pendant 2 tours. Il est impossible de résister à ce débuff si Ultan la Carapace se trouve dans la même équipe.`,
          damage: "4.5*ATQ",
          levelInfo: [
            "Dégâts +10%",
            "Chance de Buff/débuff +10%",
            "Chance de Buff/débuff +10%",
          ],
        },
        {
          img: "assets/sort2.webp",
          name: "Main printanière",
          description: `Soigne tous tes alliés à hauteur de 30 % de leurs PV MAX.${RETURN}${RETURN}

Augmente d'1 tour la durée de tous les buffs alliés.`,
          cooldown: 4,
          levelInfo: [
            "Soins +5%",
            "Soins +10%",
            "Soins +10%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/sort3.webp",
          name: "Morphose",
          description: `Remplit le Compteur de Tour de tous les alliés de 30 %.${RETURN}${RETURN}

Place également un buff ${BUFFS.RES} de 50 % sur tous les alliés pendant 2 tours.`,
          cooldown: 6,
          levelInfo: [
            "Temps de recharge -1",
            "Temps de recharge -1",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/passif1.webp",
          name: "Sans entraves [P]",
          description: `Dès qu'un allié perd 15 % ou plus de ses PV MAX suite à une seule frappe, place un buff ${BUFFS.HEALS} de 15 % sur cet allié pendant 1 tour. Place un buff ${BUFFS.HEALS} de 15 % pendant 2 tours sur cet allié, puis l'active instantanément si Ultan la Carapace se trouve dans la même équipe.${RETURN}${RETURN}

Ne peut arriver à un allié qu'une fois par tour.`,
          isPassive: true,
        },
      ],
      stats: {
        PV: "21 135",
        ATQ: "980",
        DEF: "1 189",
        VIT: "110",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        RÉS: "50",
        PRÉ: "0",
      },
    };

  const aura = {
    img: "../../../../../../assets/images/auras/res.webp",
    description: `
      Augmente la statistique RES des Alliés dans les Donjons de 75.
    `,
  };

