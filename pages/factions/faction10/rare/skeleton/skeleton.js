const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Os Ensorcelés",
          description: `Attaque un ennemi. Possède 30% de chances de placer un débuff de ${DEBUFFS.BLOCK_BUFFS} de 2 tours.`,
          damage: "3.4*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Plaie Tombale",
          description: `Attaque un ennemi. Possède 80% de chances de placer un débuff ${DEBUFFS.LOCK_ACTIVE} pendant 1 tour.`,
          damage: "5.6*DEF",
          cooldown: 3,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Targe Rouillée",
          description: `Attaque un ennemi. Place, pendant 2 tours, un buff d'${BUFFS.DEF} de 30% sur ce Champion.`,
          damage: "5.4*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "17 505",
        "ATQ": "683",
        "DEF": "1 178",
        "VIT": "93",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = null;
