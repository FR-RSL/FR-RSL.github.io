const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Épée de Foi",
          description: `Attaque 2 fois un ennemi. Possède 30% de chances de placer un débuff de ${DEBUFFS.ATK} de 25% pendant 1 tour.`,
          damage: "4.7*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Réplique",
          description: `Attaque 1 ennemi. Place, pendant 1 tour, un buff ${BUFFS.COUNTER} sur ce Champion.`,
          damage: "8*ATQ",
          cooldown: 3,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Foi Inébranlable",
          description: `Retire tous les débuffs dont ce Champion est affligé. Place, pendant 3 tours, un buff de ${BUFFS.BLOCK_DEBUFFS} sur ce Champion.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 865",
        "ATQ": "793",
        "DEF": "1 244",
        "VIT": "93",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = null;
