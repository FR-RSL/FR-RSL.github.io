const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Forme-Brasier",
          description: `Attaque un ennemi. Réduit d'1 tour le compte à rebours de la détonation du débuff de ${DEBUFFS.BOMB}.`,
          damage: "3.8*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Maîtrise du Bident",
          description: `Attaque 2 fois un ennemi. Place, pendant 2 tours, un buff ${BUFFS.COUNTER} sur ce Champion.`,
          damage: "2.3*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Explosifs Démoniaques",
          description: `Attaque un ennemi. Possède 60% de chances de placer un débuff de ${DEBUFFS.BOMB} qui détonera après 3 tours.`,
          damage: "6.6*ATQ",
          cooldown: 6,
          levelInfo: ["Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 865",
        "ATQ": "1 321",
        "DEF": "716",
        "VIT": "111",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés lors des batailles d'Arène de 16%`,
};
