const championData = {
  type: "Attaque",
      spells: [
        {
          img: "assets/sort1.webp",
          name: "Boo-Yah !",
          description: `Attaque 2 fois un ennemi.${RETURN}${RETURN}

Si l'une des frappes était critique, place un buff ${BUFFS.ATK} de 50 % pendant 2 tours sur ce Champion.`,
          damage: "2*ATQ",
          levelInfo: [
            "Dégâts +5%",
            "Dégâts +5%",
            "Dégâts +5%",
            "Dégâts +5%",
          ],
        },
        {
          img: "assets/sort2.webp",
          name: "Livraison express !",
          description: `Attaque un ennemi. Avant d'attaquer, a 75 % de chances de placer sur la cible un débuff ${DEBUFFS.DEF} de 60 % pendant 2 tours.${RETURN}${RETURN}

A 75 % de chances de placer un débuff ${DEBUFFS.STUN} pendant 1 tour. Ignorera 25 % de la RÉS de la cible si l'attaque est critique.${RETURN}${RETURN}

Applique ensuite un effet de ${PROP_DEBUFF}, prenant tous les débuffs sur la cible pour les placer sur tous les ennemis. Ignorera 25 % la RÉS de chaque cible si l'attaque initiale était critique.`,
          damage: "6*ATQ",
          cooldown: 4,
          levelInfo: [
            "Chances de Buff/débuff +10%",
            "Chances de Buff/débuff +15%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/sort3.webp",
          name: "Cyclone de carapace",
          description: `Attaque tous les ennemis.${RETURN}${RETURN}

A 75 % de chances de placer un débuff ${DEBUFFS.ATK} de 50 % et un débuff ${DEBUFFS.LEECH} pendant 2 tours. Ignorera 25 % de la RÉS de chaque cible si l'attaque est critique.${RETURN}${RETURN}

Ensuite, place un buff ${BUFFS.TAUNT} sur ce Champion pendant 2 tours.`,
          damage: "5*ATQ",
          cooldown: 5,
          levelInfo: [
            "Chances de Buff/débuff +10%",
            "Chances de Buff/débuff +15%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/passif1.webp",
          name: "Fêtard [P]",
          description: `${PASSIVE}

A 15 % de chances d'Esquiver une compétence ennemie et tous les effets qui l'accompagnent. Si ce Champion est sous buff ${BUFFS.TAUNT}, les chances d'Esquive passent à 30 %.${RETURN}${RETURN}

Dès que Leonardo, Donatello, Michelangelo ou Raphael attaque, ce Champion rejoint cette attaque.${RETURN}${RETURN}

${ACTIVE}

Place sur ce Champion un buff ${BUFFS.SHIELD} équivalent à 300 % de son ATQ pendant 1 tour lorsqu'il est frappé.`,
          isPassive: true,
		  cooldown: 1,
        },
      ],
      stats: {
        PV: "15 360",
        ATQ: "1 520",
        DEF: "1 035",
        VIT: "99",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        RÉS: "30",
        PRÉ: "10",
      },
  };

  const aura = {
    img: "../../../../../../assets/images/auras/acc.webp",
    description: `
      Augmente la statistique PRE des Alliés lors de toutes les Batailles de 70.
    `,
  };

