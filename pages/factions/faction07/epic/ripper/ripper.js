const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Marqué à Vie",
          description: `Attaque un ennemi. Détruit ses PV MAX de 30% des dégâts infligés.`,
          damage: "4*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Sans pitié",
          description: `Attaque 2 fois un ennemi. Les dégâts augmentent à mesure que les PV de la cible baissent.`,
          damage: "3*ATQ+(1.5*ATQ*(1-Current HP%))",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Frappe Lourde",
          description: `Attaque un ennemi. Ignorera 50% de la DÉF de la cible. Détruit ses PV MAX de 40% des dégâts infligés.`,
          damage: "3.3*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Dégâts +10%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 020",
        "ATQ": "1 299",
        "DEF": "936",
        "VIT": "96",
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
