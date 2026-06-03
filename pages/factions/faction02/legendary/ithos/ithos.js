const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Entailler",
          description: `Attaque un ennemi. Possède 20% de chances d'accorder un Tour supplémentaire. Détruit les PV MAX des ennemis de 15% des dégâts infligés.`,
          damage: "3.8*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Emportement",
          description: `Attaque 3 fois tous les ennemis. Place un débuff d'${DEBUFFS.WEAKEN} de 25% pendant 2 tours.`,
          damage: "1.35*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Anéantissement de Vie",
          description: `Attaque tous les ennemis. Cette attaque passe toujours en critique.`,
          damage: "4.4*ATQ",
          cooldown: 6,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Dégâts +10%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "18 825",
        "ATQ": "1 608",
        "DEF": "716",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/crit.webp",
  description: `Augmente la statistique TAUX DE C. des Alliés lors des batailles d'Arène de 33%`,
};
