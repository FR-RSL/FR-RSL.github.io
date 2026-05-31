const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Attaque Totale",
          description: `Attaque un ennemi. Remplit de 30 % le Compteur de Tours de ce Champion si l'attaque passe en critique.`,
          damage: "3.9*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Dévastation",
          description: `Attaque un ennemi. Octroie un Tour Supplémentaire si la cible est tuée.`,
          damage: "5.6*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Balayage",
          description: `Attaque 2 fois tous les ennemis. Ignorera 20 % de la DÉF de chaque cible.`,
          damage: "1.5*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 535",
        "ATQ": "1 266",
        "DEF": "793",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
