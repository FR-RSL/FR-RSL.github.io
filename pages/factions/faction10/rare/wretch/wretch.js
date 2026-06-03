const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Toucher de Crypte",
          description: `Attaque 2 fois un ennemi. Possède 20% de chances de placer un débuff de ${DEBUFFS.HEALS} de 50% pendant 2 tours.`,
          damage: "1.5*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Sangsue de Vie",
          description: `Attaque un ennemi. Soigne ce Champion à hauteur de 15% des dégâts infligés.`,
          damage: "5*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Feutombe",
          description: `Attaque un ennemi. Place un débuff de ${DEBUFFS.BURN} de 2 tours.`,
          damage: "4.9*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "13 215",
        "ATQ": "1 432",
        "DEF": "716",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés Force lors de toutes les Batailles de 30%`,
};
