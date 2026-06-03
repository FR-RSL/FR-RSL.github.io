const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Fendoir Virulent",
          description: `Attaque un ennemi. Possède 40% de chances de placer un débuff de ${DEBUFFS.POISON} de 5% pendant 2 tours.`,
          damage: "3.65*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Peste Affamée",
          description: `Attaque 2 fois un ennemi. Chaque frappe possède 50% de chances de placer, pendant 2 tours, un débuff d'${DEBUFFS.POISON} de 5%.`,
          damage: "3*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Pourrir de l'Intérieur",
          description: `Attaque un ennemi. Les dégâts augmentent de 25% contre les cibles souffrant de débuffs de ${DEBUFFS.POISON}.`,
          damage: "5.9*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 195",
        "ATQ": "1 365",
        "DEF": "925",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Augmente la statistique PRÉ des Alliés lors de toutes les Batailles de 40`,
};
