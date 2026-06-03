const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Balafre",
          description: `Attaque un ennemi. Possède 60% de chances de placer un débuff ${DEBUFFS.HEALS} de 100% pendant 2 tours.`,
          damage: "ATQ*(1.9+SPD/100)",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Chancre",
          description: `Attaque 3 fois au hasard. Chaque frappe possède 40% de chances de placer un débuff ${DEBUFFS.STUN} pendant 1 tour.`,
          damage: "1.8*ATQ",
          cooldown: 3,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Élan de Lame",
          description: `Attaque 4 fois un ennemi. Chaque frappe possède 75% de chances de placer un débuff ${DEBUFFS.POISON} de 5% pendant 2 tours.`,
          damage: "1.4*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 845",
        "ATQ": "1 487",
        "DEF": "694",
        "VIT": "108",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Augmente la statistique PRÉ des Alliés lors des Cryptes de Faction de 50`,
};
