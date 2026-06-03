const championData = {
  type: "Soutien",
      spells: [
        {
          img: "assets/sort1.webp",
          name: "Racine-serpent",
          description: `Attaque un ennemi. Possède 25 % de chances de réduire de 2 tours le temps de recharge d'une compétence active aléatoire d'un allié.`,
          damage: "3.3*ATQ",
          levelInfo: [
            "Dégâts +10%",
            "Chance de Buff/débuff +10%",
            "Dégâts +10%",
            "Chance de Buff/débuff +15%",
          ],
        },
        {
          img: "assets/sort2.webp",
          name: "Spores de destinée",
          description: `Fait équipe avec tous les alliés pour attaquer un seul ennemi. Les alliés qui rejoignent l'attaque utilisent leurs compétences par défaut.${RETURN}${RETURN}

Rétablit également totalement les PV MAX détruits de tous les alliés et place un buff ${BUFFS.HEALS} de 15 % sur tous les alliés pendant 2 tours.`,
          cooldown: 6,
          levelInfo: [
            "Temps de recharge -1",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/sort3.webp",
          name: "Rythme exaltant",
          description: `Remplit le Compteur de Tour de tous les alliés de 20 %.${RETURN}${RETURN}

Retire ensuite tous les débuffs de tous les alliés et place un buff ${BUFFS.SPD} de 30 % sur tous les alliés pendant 2 tours.`,
          cooldown: 5,
          levelInfo: [
            "Temps de recharge -1",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/passif1.webp",
          name: "Magie du Grand Chêne [P]",
          description: `Au début du tour de ce Champion, place un buff sur chaque allié pendant 1 tour, en fonction de son Type :${RETURN}${RETURN}

ATQ : un buff ${BUFFS.ATK} de 50 %${RETURN}${RETURN}

DÉF : un buff ${BUFFS.DEF} de 60 %${RETURN}${RETURN}

Soutien : un buff ${BUFFS.PRE} de 50 %${RETURN}${RETURN}

PV : un buff ${BUFFS.SHIELD} équivalent à 30 % des PV MAX de l'allié.`,
          cooldown: 1,
          isPassive: true,
        },
      ],
      stats: {
        PV: "17 670",
        ATQ: "1 200",
        DEF: "1 200",
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
      Augmente la statistique VIT des Alliés dans les Donjons de 25%.
    `,
  };

