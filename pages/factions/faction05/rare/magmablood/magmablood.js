const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Violent Jeté",
          description: `Attaque 1 ennemi. Possède 15% de chances de placer un débuff d'${DEBUFFS.STUN} pendant 1 tour.`,
          damage: "3.6*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Esquilles",
          description: `Attaque tous les ennemis. Possède 30% de chances de placer un débuff de ${DEBUFFS.PRE} de 50% pendant 2 tours.`,
          damage: "3.6*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Bombe de Magma",
          description: `Attaque 2 fois au hasard. Chaque frappe possède 60% de chances de placer un débuff de ${DEBUFFS.BOMB} pendant 3 tours.`,
          damage: "3.2*ATQ",
          cooldown: 5,
          levelInfo: ["Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "13 710",
        "ATQ": "1 387",
        "DEF": "727",
        "VIT": "93",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Augmente la statistique PRÉ des Alliés lors des Donjons de 40`,
};
