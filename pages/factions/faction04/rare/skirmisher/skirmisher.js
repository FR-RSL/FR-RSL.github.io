const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Hampe Double",
          description: `Attaque 2 fois un ennemi. Inflige 15 % de dégâts supplémentaires contre les cibles n'ayant pas de buff actif.`,
          damage: "1.85*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Flèche Maudite",
          description: `Attaque un ennemi. Réduit de 20 % le Compteur de Tours de la cible si cette attaque passe en critique.`,
          damage: "5.3*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Tir Dissipant",
          description: `Attaque tous les ennemis. Retire 1 buff aléatoire sur chaque ennemi.`,
          damage: "3.3*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 360",
        "ATQ": "1 211",
        "DEF": "793",
        "VIT": "94",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
