const championData = {
  type: "Attaque",
      spells: [
        {
          img: "assets/sort1.webp",
          name: "Éclair Fracassant",
          description: `Attaque un ennemi. Possède 45% de chances de placer un débuff ${DEBUFFS.DEF} de 60% pendant 2 tours.${RETURN}${RETURN}

Remplit également le Compteur de Tour de ce Champion de 15% lorsqu'elle est utilisée contre les Boss.`,
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
          name: "Déluge Brûlant",
          description: `Attaque 3 fois au hasard. Chaque frappe possède 75% de chances de placer un débuff ${DEBUFFS.BURN} pendant 3 tours. Place également un buff ${BUFFS.PERFECT_VEIL} sur ce Champion pendant 2 tours.${RETURN}${RETURN}

Lorsqu'elle est utilisée contre les Boss, activera instantanément les débuffs ${DEBUFFS.BURN}, dont les débuffs ${DEBUFFS.BURN} placés par cette Compétence.`,
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
          name: "Entaille Cyan",
          description: `Attaque tous les ennemis. Possède 75% de chances de placer un débuff ${DEBUFFS.GEL} pendant 1 tour.${RETURN}${RETURN}

Lorsqu'elle cible un Boss, n'attaquera que le Boss (pas tous les ennemis) et ignorera 50% de la DÉF De la cible. Réduira également d'1 tour le temps de recharge de la compétence Déluge brûlant.`,
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
          name: "Escalade [P]",
          description: `Augmente l'ATQ de Ninja de 10% (jusqu'à 100%) et ses DÉG C. de 5% (jusqu'à 25%) chaque fois qu'un seul ennemi se fait frapper par les trois Compétences Actives de Ninja lors d'une même round. Cet effet peut survenir plusieurs fois contre le même ennemi.${RETURN}${RETURN}

Lors de combats contre les Boss, augmentera par contre l'ATQ de Ninja de 20% (jusqu'à 100%) et ses DÉG C. de 10% (jusqu'à 25%).`,
          isPassive: true,
        },
      ],
      stats: {
        PV: "16 845",
        ATQ: "1 509",
        DEF: "947",
        VIT: "100",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        RÉS: "30",
        PRÉ: "10",
      },
    };

  	const aura = null;

