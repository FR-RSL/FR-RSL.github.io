const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Rayon solaire",
          description: `Attaque un ennemi. Possède 80% de chances de placer un débuff ${DEBUFFS.PRE} de 50% pendant 2 tours.`,
          damage: "3.8*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Ailes de Refuge",
          description: `Place un buff ${BUFFS.BLOCK_DEBUFFS} et un buff ${BUFFS.DEF} de 60% sur tous les alliés pendant 2 tours.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Brèche surnaturelle",
          description: `Attaque tous les ennemis. Place un buff ${BUFFS.PERFECT_VEIL} sur tous les alliés sauf ce Champion pendant 2 tours. Place également sur ce Champion un buff ${BUFFS.SHIELD} de 2 tours équivalent à 20% des dégâts infligés.`,
          damage: "4.2*DEF",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Peau miroitante [P]",
          description: `Lorsqu'il est attaqué, renvoie sur l'assaillant 30% des dégâts reçus par ce Champion. Possède également 30% de chances de placer un débuff ${DEBUFFS.GEL} sur l'assaillant pendant 1 tour.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "20 145",
        "ATQ": "804",
        "DEF": "1 432",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `
Augmente la statistique DEF des Alliés lors de la Tour du Malheur de 35%`,
};
