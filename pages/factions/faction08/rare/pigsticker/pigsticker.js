const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Substance Ignoble",
          description: `Attaque un ennemi. Possède 50% de chances de placer un débuff ${DEBUFFS.HEALS} de 50% pendant 2 tours.`,
          damage: "3.5*ATQ",
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Malédiction Cruelle",
          description: `Attaque un ennemi. Détruit les PV MAX de la cible de 20% des dégâts infligés.`,
          damage: "5.8*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Fer de Lance Infecté",
          description: `Attaque 2 fois un ennemi. Détruit les PV MAX de la cible de 30% des dégâts infligés.`,
          damage: "3*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "13 380",
        "ATQ": "1 332",
        "DEF": "804",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés lors de la Tour du Malheur de 21%`,
};
