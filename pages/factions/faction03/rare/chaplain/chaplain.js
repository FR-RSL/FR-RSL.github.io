const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Éclair Sacré",
          description: `Attaque 1 ennemi.`,
          damage: "3.7*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Bénédiction",
          description: `Retire tous les débuffs sur une cible alliée, puis soigne la cible. La quantité de soins est proportionnelle à l'ATQ de ce Champion.`,
          cooldown: 4,
          levelInfo: ["Soins +5%", "Soins +5%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Rayonnement",
          description: `Attaque tous les ennemis. Soigne tous les alliés à hauteur de 25 % des dégâts infligés.`,
          damage: "3.4*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 855",
        "ATQ": "1 079",
        "DEF": "892",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
