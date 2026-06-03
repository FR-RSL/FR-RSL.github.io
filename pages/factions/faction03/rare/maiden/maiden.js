const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Humeur Glaciale",
          description: `Attaque 1 ennemi. Possède 25% de chances de placer un débuff de ${DEBUFFS.GEL} d'1 tour.`,
          damage: "3.2*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Amoindrir",
          description: `Attaque un ennemi. Détruit les PV MAX de la cible de 25% des dégâts infligés.`,
          damage: "5.4*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Semer la Confusion",
          description: `Attaque 1 ennemi. Place un débuff de ${DEBUFFS.DEF} de 30% pendant 2 tours. Place, pendant 2 tours, un débuff de ${DEBUFFS.DEF} de 30% sur tous les ennemis si l'attaque passe en critique.`,
          damage: "5.9*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "11 730",
        "ATQ": "1 343",
        "DEF": "903",
        "VIT": "87",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
