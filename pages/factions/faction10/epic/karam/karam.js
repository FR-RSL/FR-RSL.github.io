const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Épées Sanglantes",
          description: `Attaque 1 ennemi. Possède 50% de chances de placer un débuff de ${DEBUFFS.POISON} de 5% pendant 2 tours.`,
          damage: "4.3*ATQ",
          levelInfo: ["Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Accès de Rage",
          description: `Attaque un ennemi. Possède 15% de chances de porter un coup critique. Dégâts augmentés de 50% si ce Champion possède plus de 50% de PV.`,
          damage: "6.1*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Pourrir",
          description: `Attaque un ennemi. Active instantanément tous les débuffs ${DEBUFFS.POISON} sur la cible.`,
          damage: "6.5*ATQMultiplier: Poison Debuff Count*0.5Multiplier: Poison Debuff Count",
          cooldown: 6,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "13 215",
        "ATQ": "1 354",
        "DEF": "1 068",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Augmente la statistique PRÉ des Alliés lors des Cryptes de Faction de 40`,
};
