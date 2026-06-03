const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Croissant de lance",
          description: `Attaque un ennemi. Place une frappe supplémentaire si un ennemi se trouve sous débuff ${DEBUFFS.WEAKEN}.`,
          damage: "3.7*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Lance épuisante",
          description: `Attaque un ennemi. Possède 50% de chances de placer un débuff ${DEBUFFS.WEAKEN} de 15% pendant 2 tours.`,
          damage: "6.2*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 185",
        "ATQ": "716",
        "DEF": "1 233",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = null;
