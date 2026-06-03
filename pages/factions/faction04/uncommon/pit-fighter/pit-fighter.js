const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Frappe Juste",
          description: `Attaque un ennemi. Possède 25% de chances supplémentaires de porter un coup critique.`,
          damage: "2.9*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Bourrasque de Poussière",
          description: `Attaque un ennemi. Réduit de 50% le Compteur de Tours de la cible.`,
          damage: "5*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 185",
        "ATQ": "892",
        "DEF": "782",
        "VIT": "93",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
