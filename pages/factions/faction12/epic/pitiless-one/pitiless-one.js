const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Flèche Scindée",
          description: `Attaque 2 fois un ennemi. Chaque coup critique remplit le Compteur de Tours de ce Champion de 5%.`,
          damage: "2.2*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Salve de Projectiles",
          description: `Attaque tous les ennemis.${RETURN}${RETURN}

Chaque coup critique remplit de 15% le Compteur de Tour de ce Champion.`,
          damage: "3.9*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Liens d'Agonie [P]",
          description: `Chaque coup critique soigne ce Champion à hauteur de 15% des dégâts infligés.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "16 350",
        "ATQ": "1 443",
        "DEF": "771",
        "VIT": "94",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/crit.webp",
  description: `Augmente la statistique TAUX DE C. des Alliés lors de toutes les Batailles de 19%`,
};
