const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Feinte",
          description: `Attaque un ennemi. Possède 25 % de chances supplémentaires de porter un coup critique.`,
          damage: "2.9*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Lis Empoisonné",
          description: `Attaque 3 fois un ennemi. Chaque frappe possède 35 % de chances de placer un débuff de ${DEBUFFS.POISON} de 5 % pendant 2 tours.`,
          damage: "1.7*ATQ",
          cooldown: 4,
          levelInfo: ["Chances de Buff/Debuff +5%", "Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Sonne la Charge",
          description: `Attaque 1 ennemi avec 2 alliés choisis au hasard. Les alliés rejoignant l'attaque utilisent leurs compétences par défaut.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "12 060",
        "ATQ": "1 476",
        "DEF": "749",
        "VIT": "101",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/crit.webp",
  description: `Augmente la statistique TAUX DE C. des Alliés lors des batailles d'Arène de 16%`,
};
