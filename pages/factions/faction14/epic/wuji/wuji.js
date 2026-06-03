const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Terrible double-lame",
          description: `Attaque un ennemi. Possède 30 % de chances de placer un débuff ${DEBUFFS.WEAKEN} de 25 % pendant 2 tours.${RETURN}${RETURN}

[Ciblera tous les ennemis au lieu d'1 lors d'une contre-attaque avec cette compétence.]`,
          damage: "3*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Monde des ténèbres",
          description: `Attaque tous les ennemis. Possède 55 % de chances de placer un débuff ${DEBUFFS.BLOCK_BUFFS} pendant 2 tours.`,
          damage: "4*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Arts de shinobi",
          description: `Place un buff ${BUFFS.PERFECT_VEIL} et un buff ${BUFFS.COUNTER} sur cette Championne pendant 2 tours.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "10 080",
        "ATQ": "1 498",
        "DEF": "1 134",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés lors de toutes les Batailles de 20%`,
};
