const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Scinder",
          description: `Attaque un ennemi. Possède 50 % de chances de placer un débuff d'${DEBUFFS.WEAKEN} de 25 % pendant 1 tour.`,
          damage: "3*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Dévaster",
          description: `Attaque un ennemi. Active instantanément la Compétence Craque l'Armure si la cible est tuée par cette attaque.`,
          damage: "5.3*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Craque l'Armure",
          description: `Attaque 3 fois tous les ennemis. Après la première frappe, possède 50 % de chances de placer, pendant 2 tours, un débuff de ${DEBUFFS.DEF} de 60 % sur tous les ennemis.`,
          damage: "1.2*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 680",
        "ATQ": "1 398",
        "DEF": "793",
        "VIT": "103",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Augmente la statistique PRÉ des Alliés lors de toutes les Batailles de 40`,
};
