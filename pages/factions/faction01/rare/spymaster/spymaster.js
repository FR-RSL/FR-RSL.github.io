const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Lame du Maître-espion",
          description: `Attaque un ennemi. Possède 40 % de chances de réduire d'1 tour la durée de 2 débuffs aléatoires de la cible.`,
          damage: "0.2*PV",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Sabotage dirigé",
          description: `Attaque tous les ennemis. Possède 50 % de chances de placer un débuff ${DEBUFFS.BLOCK_BUFFS} pendant 2 tours.`,
          damage: "0.2*PV",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Secret",
          description: `Place un buff ${BUFFS.COUNTER} sur ce Champion pendant 2 tours. Possède également 75 % de chances de placer un débuff ${DEBUFFS.PROVOKE} sur 2 ennemis aléatoires pendant 1 tour.`,
          cooldown: 6,
          levelInfo: ["Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "19 650",
        "ATQ": "782",
        "DEF": "936",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = null;
