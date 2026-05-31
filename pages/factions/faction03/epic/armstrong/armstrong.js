const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Masse de Mépris",
          description: `Attaque 2 fois un ennemi. Chaque frappe possède 30 % de chances de placer un débuff ${DEBUFFS.LEECH} pendant 2 tours.`,
          damage: "1.8*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Rétribution Ravageuse",
          description: `Attaque tous les ennemis. Possède 80 % de chances de placer un débuff ${DEBUFFS.DEF} de 60 % pendant 2 tours.`,
          damage: "4*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Contraction du Temps",
          description: `Remplit de 15 % le Compteur de Tour de tous les alliés et réduit de 15 % le Compteur de Tour de tous les ennemis.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "17 835",
        "ATQ": "947",
        "DEF": "1 167",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés lors de toutes les Batailles de 19%`,
};
