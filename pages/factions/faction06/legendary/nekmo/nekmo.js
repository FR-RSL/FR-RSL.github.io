const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Acide corrosif",
          description: `Attaque tous les ennemis. Possède 40 % de chances de placer un débuff ${DEBUFFS.ATK} de 50 % pendant 2 tours. Ces chances passent à 75 % si la cible est affligée de débuffs.`,
          damage: "1.8*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Chaînes plates",
          description: `Attaque tous les ennemis. Possède 75 % de chances de placer un débuff ${DEBUFFS.SPD} de 30 % et un débuff ${DEBUFFS.LEECH} pendant 2 tours.`,
          damage: "3.1*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Étrangeté de vitesse",
          description: `Place un buff ${BUFFS.SPD} de 30 % sur tous les alliés pendant 2 tours et remplit leur Compteur de Tour de 30 %, puis accorde un Tour supplémentaire à ce Champion.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Rune de hâte [P]",
          description: `Remplit le Compteur de Tour de ce Champion de 5 % chaque fois qu'un débuff expire, est retiré ou est transféré sur un ennemi.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "17 340",
        "ATQ": "1 233",
        "DEF": "1 189",
        "VIT": "104",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "30"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés lors de toutes les Batailles de 19%`,
};
