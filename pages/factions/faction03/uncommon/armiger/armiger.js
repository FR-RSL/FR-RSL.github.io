const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Riposte",
          description: `Attaque 1 ennemi. Réduit de 30% le Compteur de Tours si cette attaque passe en critique.`,
          damage: "4*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Enterrer",
          description: `Attaque 1 ennemi. Les ennemis tués par cette compétence ne peuvent pas être ranimés.`,
          damage: "2.9*DEF+0.05*Target Max HP",
          cooldown: 3,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 195",
        "ATQ": "793",
        "DEF": "947",
        "VIT": "92",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
