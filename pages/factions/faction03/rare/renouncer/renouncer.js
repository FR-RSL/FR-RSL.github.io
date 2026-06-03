const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Efforts Redoublés",
          description: `Attaque 2 fois un ennemi.`,
          damage: "1.85*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Épée Étincelante",
          description: `Retire un débuff aléatoire sur ce Champion, puis attaque 1 ennemi. Soigne ce Champion à hauteur de 25% des dégâts infligés.`,
          damage: "5.58*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Grâce de Guerre",
          description: `Attaque un ennemi. Place sur tous les alliés un buff ${BUFFS.SPD} de 15% pendant 2 tours si cette attaque tue un ennemi.`,
          damage: "6*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "12 885",
        "ATQ": "1 255",
        "DEF": "914",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
