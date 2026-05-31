const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Griffe acérée de tigre",
          description: `Attaque 2 fois un ennemi. Place un buff ${BUFFS.DEF} de 60 % sur ce Champion pendant 2 tours.`,
          damage: "1.8*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Typhon de fourrure",
          description: `Attaque tous les ennemis. Possède 75 % de chances de placer un débuff ${DEBUFFS.DEF} de 60 % sur chaque ennemi pendant 2 tours avant d'attaquer. Possède également 75 % de chances de placer un débuff ${DEBUFFS.STUN} pendant 1 tour après l'attaque.`,
          damage: "4.3*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Prestesse de félidé",
          description: `Place un buff ${BUFFS.STRENGTHEN} de 25 % et un buff ${BUFFS.SPD} de 30 % sur tous les alliés pendant 2 tours. Place également un buff ${BUFFS.PERFECT_VEIL} sur ce Champion pendant 2 tours.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Art de furtivité [P]",
          description: `Au début de chaque tour, place un buff ${BUFFS.PERFECT_VEIL} d'1 tour sur l'allié possédant l'ATQ la plus élevée. 

Inflige 20 % de dégâts supplémentaires contre les cibles dont la DÉF est inférieure à celle de ce Champion.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 000",
        "ATQ": "936",
        "DEF": "1 443",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Alliés lors de toutes les Batailles de 30%`,
};
