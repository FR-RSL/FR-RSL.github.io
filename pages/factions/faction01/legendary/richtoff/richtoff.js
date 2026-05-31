const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Perte",
          description: `Attaque tous les ennemis. Détruit les PV MAX de chaque cible de 30 % des dégâts infligés.`,
          damage: "1.7*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Saignée",
          description: `Attaque 3 fois un ennemi. Place un débuff ${DEBUFFS.POISON} de 5 % sur tous les ennemis pendant 2 tours.`,
          damage: "1.9*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Prismaudite",
          description: `Attaque un ennemi. Les dégâts critiques augmentent de 20 % pour chaque débuff Poison dont est affligée la cible. S'additionne jusqu'à 100 %.`,
          damage: "6.2*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "18 825",
        "ATQ": "1 398",
        "DEF": "925",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés lors des Cryptes de Faction de 27%`,
};
