const championData = {
  type: "Attaque",
      spells: [
        {
          img: "assets/sort1.webp",
          name: "Sentir la Peur",
          description: `Attaque un ennemi. Possède 40 % de chances de réduire d'1 tour la durée de 2 buffs aléatoires de la cible.${RETURN}${RETURN}

Si la cible se trouve sous débuff ${DEBUFFS.FEAR} ou ${DEBUFFS.TRUE_FEAR}, réduit au lieu de ça la durée de tous les buffs de la cible d'1 tour.`,
          damage: "3.7*ATQ",
          levelInfo: [
            "Dégâts +5%",
            "Dégâts +5%",
            "Chance de Buff/débuff +5%",
            "Chance de Buff/débuff +10%",
          ],
        },
        {
          img: "assets/sort2.webp",
          name: "Héraut",
          description: `Attaque un ennemi. Ignorera 30 % de la DÉF de la cible.${RETURN}${RETURN}

Avant d'attaquer, si la cible est affligée d'un buff ${DEBUFFS.FEAR} ou ${DEBUFFS.TRUE_FEAR}, place un buff ${BUFFS.ATK} de 50 % sur ce Champion pendant 2 tours.${RETURN}${RETURN}

Après l'attaque, si la cible est affligée d'un débuff ${DEBUFFS.FEAR} ou ${DEBUFFS.TRUE_FEAR}, réduit d'1 tour le temps de recharge de la compétence Désarroi.${RETURN}${RETURN}

Ensuite, remplit le Compteur de Tour de ce Champion de 25 %.`,
          cooldown: 4,
          damage: "2*ATQ",
          levelInfo: [
            "Dégâts +5%",
            "Dégâts +10%",
            "Chance de Buff/débuff +10%",
            "Chance de Buff/débuff +15%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/sort3.webp",
          name: "Désarroi",
          description: `Attaque tous les ennemis. Possède 75 % de chances de voler 50 % du Compteur de Tour actuel de la cible.${RETURN}${RETURN}

Si cette attaque tue une cible sous débuff ${DEBUFFS.FEAR} ou ${DEBUFFS.TRUE_FEAR}, réduit d'1 tour le temps de recharge de la compétence Héraut.`,
          cooldown: 5,
          damage: "3*ATQ (Zone) | 3.9*ATQ (Monocible)",
          levelInfo: [
            "Dégâts +15%",
            "Chance de Buff/débuff +10%",
            "Chance de Buff/débuff +15%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/passif1.webp",
          name: "Désolation [P]",
          description: `Dès que le Compteur de Tour d'un ennemi est réduit par n'importe quel Champion, possède 20 % de chances de placer un débuff ${DEBUFFS.FEAR} sur cet ennemi pendant 1 tour.`,
          isPassive: true,
        },
      ],
      stats: {
        PV: "14 865",
        ATQ: "1 553",
        DEF: "1 035",
        VIT: "98",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        RÉS: "30",
        PRÉ: "10",
      },
    };

  	const aura = null;

