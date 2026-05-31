const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Force Grotesque",
          description: `Possède 50 % de chances de placer un buff d'${BUFFS.ATK} de 25 % sur ce Champion, puis attaque un ennemi.`,
          damage: "3.5*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Repas Macabre",
          description: `Attaque 3 fois un ennemi. Soigne ce Champion à hauteur de 20 % des dégâts infligés.`,
          damage: "1.8*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Armée des Morts",
          description: `Fais équipe avec 3 alliés pris au hasard pour attaquer un seul ennemi. Les alliés rejoignant l'attaque utilisent leurs compétences par défaut.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 040",
        "ATQ": "1 454",
        "DEF": "914",
        "VIT": "92",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
