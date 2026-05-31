const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Entaille Rouillée",
          description: `Attaque 1 ennemi. Offre 30 % de chances de placer un débuff de ${DEBUFFS.SPD} de 15 % pendant 2 tours.`,
          damage: "1.9*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Arrachage d'Essence",
          description: `Attaque 1 ennemi et vole 1 buff pris au hasard.`,
          damage: "6*ATQ",
          cooldown: 3,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 535",
        "ATQ": "1 079",
        "DEF": "705",
        "VIT": "92",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
