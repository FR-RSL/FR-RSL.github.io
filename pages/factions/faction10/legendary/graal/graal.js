const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Fléau de Fragilité",
          description: `Attaque un ennemi.${RETURN}${RETURN}

Possède 60% de chances de placer un débuff ${DEBUFFS.ATK} de 50% pendant 2 tours.${RETURN}${RETURN}

Sinon, possède 100% de chances si la cible est affligée d'un débuff ${DEBUFFS.BURN} ou ${DEBUFFS.GEL}.`,
          damage: "3.7*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Feux Mortels",
          description: `Attaque tous les ennemis. Possède 75% de chances de placer un débuff ${DEBUFFS.BURN} pendant 2 tours.`,
          damage: "3.9*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Unité Élémentaire",
          description: `Attaque tous les ennemis.${RETURN}${RETURN}

Place un débuff de ${DEBUFFS.GEL} d'1 tour sur chaque cible si la cible souffre d'un débuff de ${DEBUFFS.BURN}.`,
          damage: "3.6*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "19 320",
        "ATQ": "1 145",
        "DEF": "1 145",
        "VIT": "107",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés lors de toutes les Batailles de 33%`,
};
