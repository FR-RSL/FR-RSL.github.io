const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Flèches de ronces",
          description: `Attaque un ennemi. Possède 50% de chances de retirer 1 buff aléatoire sur la cible. Possède également 10% de chances d'accorder un Tour supplémentaire à ce Champion.`,
          damage: "3.8*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Rafale de tiges",
          description: `Attaque tous les ennemis. Possède 75% de chances de placer un débuff ${DEBUFFS.DEF} de 60% pendant 2 tours. Accorde un Tour supplémentaire si un débuff ${DEBUFFS.DEF} de 60% est placé sur tous les ennemis par cette compétence.`,
          damage: "3.9*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Chasser les brumes",
          description: `Place un buff ${BUFFS.ATK} de 50% et un buff ${BUFFS.PRE} de 50% sur ce Champion pendant 3 tours, puis accorde un Tour supplémentaire.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 360",
        "ATQ": "1 376",
        "DEF": "903",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Augmente la statistique PRÉ des Alliés lors de toutes les Batailles de 40`,
};
