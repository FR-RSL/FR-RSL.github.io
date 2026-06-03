const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Grêle de silex",
          description: `Attaque 2 fois un ennemi. Chaque frappe possède 20 % de chances de placer un débuff ${DEBUFFS.DEF} de 30 % pendant 2 tours.${RETURN}${RETURN}

Si la cible se trouve sous débuff ${DEBUFFS.POISON_S} placé par cette Championne, chaque frappe possède 20 % de chances de placer un débuff ${DEBUFFS.DEF} de 60 % pendant 2 tours.`,
          damage: "1.9*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Dessiccation",
          description: `Attaque 2 fois tous les ennemis.${RETURN}${RETURN}

La première frappe possède 75 % de chances de placer un débuff ${DEBUFFS.ATK} de 25 % pendant 2 tours. La seconde frappe possède 50 % de chances de placer un débuff ${DEBUFFS.POISON} de 5 % pendant 2 tours.`,
          damage: "2*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Pulsation moisie",
          description: `Attaque 3 fois de façon aléatoire. Chaque frappe possède 25 % de chances de placer un débuff ${DEBUFFS.POISON_S} de 25 % pendant 2 tours. Si tous les coups portent sur la même cible, place également un débuff ${DEBUFFS.POISON} de 5 % pendant 2 tours.`,
          damage: "2.1*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "13 380",
        "ATQ": "1 288",
        "DEF": "848",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Augmente la statistique PRÉ des Alliés lors de toutes les Batailles de 30`,
};
