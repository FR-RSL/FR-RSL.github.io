const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Jugement Austère",
          description: `Attaque 1 ennemi. Possède 15% de chances de réduire de 15% le Compteur de Tours de la cible.`,
          damage: "3.1*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Lumière Aveuglante",
          description: `Attaque tous les ennemis. Offre 70% de chances de placer un débuff de ${DEBUFFS.PRE} de 50% pendant 2 tours.`,
          damage: "3.7*ATQ",
          cooldown: 4,
          levelInfo: ["Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Ferveur Inflexible",
          description: `Attaque 1 ennemi. Possède 35% de chances d'accorder un Tour Supplémentaire.`,
          damage: "5.9*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "12 060",
        "ATQ": "1 409",
        "DEF": "815",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/crit.webp",
  description: `Augmente la statistique TAUX DE C. des Alliés lors des Donjons de 16%`,
};
