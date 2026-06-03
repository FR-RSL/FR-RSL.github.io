const championData = {
  type: "Attaque",
      spells: [
        {
          img: "assets/sort1.webp",
          name: "Épines malignes",
          description: `Attaque un ennemi. Avant d'attaquer, place un buff ${BUFFS.SHIELD} sur ce Champion pendant 2 tours. La valeur du ${BUFFS.SHIELD} est proportionnelle à l'ATQ de ce Champion.${RETURN}${RETURN}

A 50 % de chances de placer un débuff ${DEBUFFS.POISON_S} de 25 % pendant 2 tours.`,
          damage: "3.8*ATQ",
          levelInfo: [
            "Dégâts +10%",
            "Chance de Buff/débuff +10%",
            "Chance de Buff/débuff +15%"
          ],
        },
        {
          img: "assets/sort2.webp",
          name: "Tornade de vie",
          description: `Attaque un ennemi.${RETURN}${RETURN}

A 75 % de chances de placer un débuff ${DEBUFFS.LEECH} sur tous les ennemis pendant 2 tours.${RETURN}${RETURN}

Active instantanément tous les débuffs ${DEBUFFS.POISON} sur tous les ennemis.`,
          damage: "5.5*ATQ",
          cooldown: 4,
          levelInfo: [
            "Dégâts +10%",
            "Dégâts +10%",
            "Chance de Buff/débuff +10%",
            "Chance de Buff/débuff +15%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/sort3.webp",
          name: "Croissance monstrueuse",
          description: `Attaque un ennemi. Avant d'attaquer, place un buff ${BUFFS.PRE} de 50 % sur tous les alliés pendant 2 tours.${RETURN}${RETURN}

A 75 % de chances de placer un débuff ${DEBUFFS.RES} de 50 % sur tous les ennemis pendant 2 tours.${RETURN}${RETURN}

Place trois débuffs ${DEBUFFS.POISON} de 5 % sur la cible initiale pendant 2 tours. Si cette attaque est critique, place au lieu de ça trois débuffs ${DEBUFFS.POISON} de 5 % sur tous les ennemis pendant 2 tours.`,
          damage: "5.8*ATQ",
          cooldown: 4,
          levelInfo: [
            "Dégâts +10%",
            "Dégâts +10%",
            "Chance de Buff/débuff +10%",
            "Chance de Buff/débuff +15%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/passif1.webp",
          name: "Abandonné au chaos [P]",
          description: `Augmente l'effet Ignorer la DÉF de ce Champion de 1 % pour chaque débuff ${DEBUFFS.POISON} activé instantanément par ce Champion (s'accumule jusqu'à 20 %).${RETURN}${RETURN}

Remplit le Compteur de Tour de ce Champion de 5 % dès qu'un débuff ${DEBUFFS.POISON} est placé sur un ennemi.`,
          isPassive: true,
        },
      ],
      stats: {
        PV: "15 360",
        ATQ: "1 586",
        DEF: "969",
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
      Augmente la statistique PRE des Alliés lors de toutes les Batailles de 60.
    `,
  };

