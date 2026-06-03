const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Exacerber",
          description: `Attaque 2 fois un ennemi. Place une frappe supplémentaire si un ennemi souffre d'un débuff de ${DEBUFFS.PROVOKE}.`,
          damage: "0.12*HP",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Exaspérer",
          description: `Attaque tous les ennemis.${RETURN}${RETURN}

Place un débuff ${DEBUFFS.PROVOKE} sur les ennemis pendant 1 tour. Possède également 75 % de chances de leur infliger, au lieu de ça, un débuff ${DEBUFFS.PROVOKE} pendant 2 tours.${RETURN}${RETURN}

Ensuite, place un buff ${BUFFS.REFLECT_DAM} de 30 % sur tous les alliés pendant 2 tours. Place également un buff ${BUFFS.COUNTER} sur ce Champion pendant 2 tours.`,
          damage: "0.27*HP",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Bravade [P]",
          description: `Si un ennemi doté d'un débuff ${DEBUFFS.PROVOKE} attaque ce Champion, possède 40 % de chances de le remplacer par un autre débuff ${DEBUFFS.PROVOKE} pendant 1 tour.${RETURN}${RETURN}

Possède également 90 % de chances de placer un débuff ${DEBUFFS.ATK} de 50 % sur un ennemi pendant 1 tour lorsqu'un ennemi sous débuff ${DEBUFFS.PROVOKE} attaque un allié.${RETURN}${RETURN}

Chaque frappe reçue réduira les dégâts subis de 5 % (jusqu'à 30 % pendant un round).`,
          levelInfo: ["Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "21 975",
        "ATQ": "826",
        "DEF": "1 288",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés lors de toutes les Batailles de 33%`,
};
