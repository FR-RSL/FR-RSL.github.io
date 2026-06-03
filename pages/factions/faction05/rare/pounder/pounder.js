const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Cassos",
          description: `Attaque 1 ennemi. Offre 25% de chances de placer un débuff de ${DEBUFFS.ATK} de 25% pendant 2 tours.`,
          damage: "3.8*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Propagation de Glace",
          description: `Attaque 1 ennemi. Possède 75% de chances de placer un débuff de ${DEBUFFS.GEL} d'1 tour. Si la cible souffre d'un débuff de ${DEBUFFS.GEL}, possède 25% de chances de le placer sur un autre ennemi.`,
          damage: "6*DEF",
          cooldown: 4,
          levelInfo: ["Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Tour de Puissance [P]",
          description: `Augmente de 15 la résistance de tous les alliés pour chaque buff actif sur ce Champion.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "14 535",
        "ATQ": "859",
        "DEF": "1 200",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés Magie lors de toutes les Batailles de 20%`,
};
