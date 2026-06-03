const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Fer Brûlant",
          description: `Attaque 2 fois un ennemi. Possède 20 % de chances de placer un débuff de ${DEBUFFS.PROVOKE} d'1 tour.`,
          damage: "2.8*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Désespoir",
          description: `Attaque tous les ennemis. Possède 35 % de chances de placer un débuff d'${DEBUFFS.STUN} d'1 tour. Les dégâts infligés sont proportionnels aux PV MAX de l'ennemi.`,
          damage: "0.1*Target Max HP",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Riposter",
          description: `Attaque 1 ennemi. Les dégâts augmentent en fonction des PV actuels de ce Champion.`,
          damage: "0.33*PV",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "20 970",
        "ATQ": "969",
        "DEF": "936",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés lors des batailles d'Arène de 30%`,
};
