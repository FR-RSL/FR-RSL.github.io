const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Vent du Désert",
          description: `Attaque un ennemi. Possède 30% de chances de placer un débuff ${DEBUFFS.DEF} de 30% pendant 2 tours.`,
          damage: "3.45*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Pas de Nomade",
          description: `Attaque 3 fois au hasard. Chaque coup critique réduit le Compteur de Tour de la cible de 10%. Ne réduira le Compteur de Tour qu'une fois par cible.`,
          damage: "1.9*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Pitié Sévère",
          description: `Attaque tous les ennemis, puis attaque l'ennemi ayant le moins de PV. Possède 75% de chances de placer un débuff ${DEBUFFS.HEALS} de 100% sur l'ennemi ayant le moins de PV pendant 2 tours.`,
          damage: "3.62*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 865",
        "ATQ": "1 354",
        "DEF": "683",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
