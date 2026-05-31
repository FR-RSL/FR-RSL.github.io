const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Inévitable Destin",
          description: `Attaque 2 fois un ennemi. Ignorera les buffs ${BUFFS.SHIELD}.`,
          damage: "1.5*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Grande Purge",
          description: `Attaque tous les ennemis. Inflige 10 % de DÉG C. supplémentaires pour chaque débuff sur ce Champion. S'accumule jusqu'à 50 %.`,
          damage: "3.2*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Rabaisser le Païen",
          description: `Attaque un ennemi. Détruit les PV MAX de la cible de 20 % des dégâts infligés.`,
          damage: "5*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "13 380",
        "ATQ": "1 409",
        "DEF": "727",
        "VIT": "94",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
