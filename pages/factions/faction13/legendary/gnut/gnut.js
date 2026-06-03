const championData = {
  type: "Defense",
      spells: [
        {
          img: "assets/sort1.webp",
          name: "Puissance de Nain",
          description: `Attaque 3 fois un ennemi.${RETURN}${RETURN}

Chaque frappe possède 80% de chances de réduire le Compteur de Tour de la cible de 15%. Si le Compteur de Tour n'est pas réduit, chaque frappe possède 80% de chances de placer un débuff ${DEBUFFS.GEL} sur la cible pendant 1 tour.`,
          damage: "1.1*DEF",
          levelInfo: [
            "Dégâts +10%",
            "Dégâts +10%",
            "Chances de Buff/débuff +10%",
            "Chances de Buff/débuff +10%"
          ],
        },
        {
          img: "assets/sort2.webp",
          name: "Furie du Roi",
          description: `Attaque tous les ennemis.${RETURN}${RETURN}

Possède 75% de chances de placer un débuff ${DEBUFFS.ATK} de 50% et un débuff ${DEBUFFS.WEAKEN} de 25% sur tous les ennemis pendant 2 tours.${RETURN}${RETURN}

Place également un buff ${BUFFS.COUNTER} sur ce Champion pendant 2 tours.`,
          damage: "3.5*DEF",
          cooldown: 4,
          levelInfo: [
            "Dégâts +10%",
            "Dégâts +10%",
            "Chances de Buff/débuff +10%",
            "Chances de Buff/débuff +15%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/sort3.webp",
          name: "Coup béni",
          description: `Attaque 3 fois un ennemi. Chaque frappe réduit la DÉF de la cible de 3% (s'accumule jusqu'à 30%).${RETURN}${RETURN}

Chaque frappe soigne également ce Champion à hauteur de 30% des dégâts infligés.`,
          damage: "1.5*DEF + 0.1*PV MAX Ennemi",
          cooldown: 5,
          levelInfo: [
            "Dégâts +10%",
            "Dégâts +10%",
            "Temps de recharge -1",
          ],
        },
        {
          img: "assets/passif1.webp",
          name: "Aucune retenue [P]",
          description: `Lors d'une contre-attaque, inflige 100% des dégâts au lieu de 75%.`,
          isPassive: true,
        },
      ],
      stats: {
        PV: "19 650",
        ATQ: "749",
        DEF: "1 520",
        VIT: "99",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        RÉS: "40",
        PRÉ: "20",
      },
  };

  const aura = {
    img: "../../../../../../assets/images/auras/acc.webp",
    description: `
      Augmente la statistique PRE des Alliés dans les Donjons de 80.
    `,
  };

