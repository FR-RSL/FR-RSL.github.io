const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Double Tir",
          description: `Attaque 2 fois 1 ennemi. Possède 15 % de chances supplémentaires de porter un coup critique. Remplit de 15 % le Compteur de Tours de ce Champion si l'attaque passe en critique.`,
          damage: "2.2*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Pluie de Flèches",
          description: `Attaque 2 fois tous les ennemis. Possède 10 % de chances de placer un débuff de ${DEBUFFS.SPD} de 15 % pendant 1 tour.`,
          damage: "1.9*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Temps de recharge -1", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +5%", "Dégâts +15%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "13 050",
        "ATQ": "1 156",
        "DEF": "727",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
