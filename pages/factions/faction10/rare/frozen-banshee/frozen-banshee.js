const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Caresse de la Mort",
          description: `Attaque 2 fois un ennemi. Chaque frappe possède 80 % de chances de placer un débuff ${DEBUFFS.POISON} de 5 % pendant 2 tours si la cible souffre d'un débuff ${DEBUFFS.POISON_S}.`,
          damage: "2.2*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Cruelle Allégresse",
          description: `Attaque un ennemi. Pour chaque débuff sur la cible, remplit de 2 % le Compteur de Tour de tous les alliés.`,
          damage: "6.5*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Plaie Glaciale",
          description: `Attaque un ennemi. Place un débuff ${DEBUFFS.POISON_S} de 25 % pendant 2 tours.`,
          damage: "5*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 700",
        "ATQ": "1 046",
        "DEF": "1 002",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Augmente la statistique PRÉ des Alliés lors de toutes les Batailles de 35`,
};
