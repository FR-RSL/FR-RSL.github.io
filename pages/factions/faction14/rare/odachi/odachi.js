const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Fente Spectaculaire",
          description: `Attaque un ennemi. Possède 20% de chances de placer un débuff ${DEBUFFS.PROVOKE} pendant 1 tour.`,
          damage: "4*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Épée Magistrale",
          description: `Attaque tous les ennemis. Place sur ce Champion un buff ${BUFFS.SHIELD} égal à 20% de ses PV MAX pendant 2 tours.`,
          damage: "3.85*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Gardien",
          description: `Place un buff ${BUFFS.BLOCK_DEBUFFS} sur tous les alliés pendant 1 tour. Place un buff ${BUFFS.DEF} de 30% sur tous les alliés pendant 2 tours.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 195",
        "ATQ": "848",
        "DEF": "1 167",
        "VIT": "94",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Alliés lors des Donjons de 25%`,
};
