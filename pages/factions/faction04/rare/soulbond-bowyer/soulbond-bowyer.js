const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Aide Ancestrale",
          description: `Attaque tous les ennemis. Possède 25 % de chances supplémentaires de porter un coup critique.`,
          damage: "2.1*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Flèche Imprégnée",
          description: `Attaque un ennemi. Possède 25 % de chances supplémentaires de porter un coup critique. Ignorera 75 % de la DÉF de la cible.`,
          damage: "4*ATQ",
          cooldown: 3,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Tir Chaînâme",
          description: `Attaque un ennemi. Possède 25 % de chances supplémentaires de porter un coup critique. Possède également 75 % de chances de vider complètement le Compteur de Tour de la cible.`,
          damage: "6*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "13 545",
        "ATQ": "1 255",
        "DEF": "870",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/crit.webp",
  description: `Augmente la statistique TAUX DE C. des Alliés lors de toutes les Batailles de 12%`,
};
