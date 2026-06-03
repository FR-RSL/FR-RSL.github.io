const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Baiser du lotus",
          description: `Attaque 2 fois un ennemi. Chaque frappe possède 40% de chances de placer un débuff ${DEBUFFS.POISON} de 5% pendant 2 tours.`,
          damage: "2.2*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Réduction",
          description: `Attaque 2 fois un ennemi. Chaque frappe possède 60% de chances de placer un débuff ${DEBUFFS.WEAKEN} de 25% pendant 2 tours.`,
          damage: "3.1*ATQ",
          cooldown: 3,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Confusion ambiante",
          description: `Attaque tous les ennemis. Possède 60% de chances de placer un débuff ${DEBUFFS.DEF} de 60% pendant 2 tours.`,
          damage: "4*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 370",
        "ATQ": "1 310",
        "DEF": "1 035",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Augmente la statistique PRÉ des Alliés lors des Donjons de 60`,
};
