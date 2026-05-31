const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Coupe-Vent",
          description: `Attaque tous les ennemis.`,
          damage: "2*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Vague de Feu",
          description: `Attaque 2 fois tous les ennemis. Possède 10 % de chances de placer un débuff de ${DEBUFFS.HEALS} de 50 % pendant 1 tour. Place un débuff de ${DEBUFFS.HEALS} de 50 % si les PV actuels de la cible sont inférieurs ou égaux à 40 %.`,
          damage: "1.8*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "12 720",
        "ATQ": "1 244",
        "DEF": "661",
        "VIT": "83",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
