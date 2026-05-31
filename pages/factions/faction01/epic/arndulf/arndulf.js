const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Massue de Fer",
          description: `Attaque un ennemi. Possède 20 % de chances de placer un débuff ${DEBUFFS.PROVOKE} pendant 1 tour.`,
          damage: "3.9*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Redoutable violence",
          description: `Attaque tous les ennemis. Possède 75 % de chances de placer un débuff ${DEBUFFS.WEAKEN} de 25 % pendant 2 tours. Possède également 25 % de chances de placer un débuff ${DEBUFFS.FEAR} pendant 1 tour.`,
          damage: "4.1*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Mur de Métal",
          description: `Place un buff ${BUFFS.REFLECT_DAM} de 30 % sur tous les alliés pendant 2 tours. Place également un buff ${BUFFS.COUNTER} sur ce Champion pendant 2 tours.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "17 670",
        "ATQ": "793",
        "DEF": "1 332",
        "VIT": "101",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = null;
