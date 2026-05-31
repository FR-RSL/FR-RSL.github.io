const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Fracasse Carcasse",
          description: `Attaque un ennemi. Possède 40 % de chances de placer un débuff de ${DEBUFFS.DEF} de 60 % pendant 2 tours.`,
          damage: "3.8*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Craquement Frénétique",
          description: `Attaque 4 fois au hasard. Chaque frappe possède 40 % de chances de placer un débuff de ${DEBUFFS.SLEEP} d'1 tour.`,
          damage: "1.4*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Brûler",
          description: `Attaque tous les ennemis. Détruit les PV MAX de chaque cible de 50 % des dégâts infligés. Accorde un Tour supplémentaire si cette attaque tue un ennemi.`,
          damage: "3.5*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 020",
        "ATQ": "1 409",
        "DEF": "826",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés Esprit lors de toutes les Batailles de 40%`,
};
