const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Tir Courbe",
          description: `Attaque 2 fois un ennemi. Possède 15 % de chances de placer un débuff d'${DEBUFFS.STUN} d'1 tour.`,
          damage: "1.7*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Incinérer",
          description: `Attaque un ennemi. Possède 50 % de chances de placer un débuff d'${DEBUFFS.WEAKEN} de 25 % pendant 2 tours.`,
          damage: "5.2*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Murmures",
          description: `Place un buff d'${BUFFS.CRATE} de 15 % et un buff d'${BUFFS.ATK} de 50 % sur ce Champion pendant 2 tours.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "11 895",
        "ATQ": "1 310",
        "DEF": "925",
        "VIT": "94",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
