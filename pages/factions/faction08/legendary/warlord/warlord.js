const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Matraquage",
          description: `Attaque un ennemi. Possède 25% de chances d'augmenter d'1 tour la durée de tous les débuffs de la cible.`,
          damage: "5*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Protection des Dieux",
          description: `Place un buff ${BUFFS.BLOCK_DEBUFFS} sur tous les alliés pendant 1 tour, puis place un buff ${BUFFS.SHIELD} égal à 30% des PV MAX de ce Champion sur tous les alliés pendant 2 tours. Soigne tous tes alliés à hauteur de 25% de leurs PV max.`,
          cooldown: 4,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Rituels Orcs",
          description: `Attaque tous les ennemis. Possède 70% de chances de placer en recharge chaque compétence de la cible. Possède 30% de chances de vider complètement le Compteur de Tours de la cible.`,
          damage: "5.5*ATQ",
          cooldown: 5,
          levelInfo: ["Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "22 305",
        "ATQ": "914",
        "DEF": "1 178",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Augmente la statistique RÉS des Alliés lors de toutes les Batailles de 80`,
};
