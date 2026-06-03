const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Vague Brûlante",
          description: `Attaque tous les ennemis. Place une frappe supplémentaire sur les ennemis ayant moins de 50% de PV après la première frappe.`,
          damage: "3*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Évaporer",
          description: `Attaque un ennemi. Place les compétences de la cible en recharge. Soigne l'allié ayant le moins de PV à hauteur de 25%.`,
          damage: "6.9*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Immortalité",
          description: `Équilibre les PV de tous les alliés. Les niveaux de PV de tous les alliés seront placés au niveau de celui de l'allié ayant le plus de PV. Soigne ensuite la cible alliée à hauteur de 10% de ses PV max.`,
          cooldown: 6,
          levelInfo: ["Soins +10%", "Soins +10%", "Soins +15%", "Soins +15%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "17 340",
        "ATQ": "892",
        "DEF": "1 255",
        "VIT": "101",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés lors des Cryptes de Faction de 31%`,
};
