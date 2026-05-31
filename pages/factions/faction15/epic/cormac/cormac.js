const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Berger",
          description: `Attaque un ennemi. Possède 40 % de chances de placer un débuff ${DEBUFFS.SPD} de 30 % pendant 2 tours.`,
          damage: "3*ATQ",
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Col du Haut-pic",
          description: `Attaque un ennemi. Avant d'attaquer, possède 75 % de chances de placer sur la cible un débuff ${DEBUFFS.DEF} de 60 % pendant 2 tours.`,
          damage: "5*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Changement de tempo",
          description: `Place un buff ${BUFFS.PRE} de 50 % et un buff ${BUFFS.CRATE} de 30 % sur ce Champion pendant 3 tours, puis accorde un Tour supplémentaire.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 535",
        "ATQ": "1 509",
        "DEF": "826",
        "VIT": "94",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés lors de toutes les Batailles de 20%`,
};
