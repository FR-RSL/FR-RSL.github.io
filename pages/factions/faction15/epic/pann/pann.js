const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Cryo-entaille",
          description: `Attaque 2 fois un ennemi. Chaque frappe possède 30 % de chances de placer un débuff ${DEBUFFS.GEL} pendant 1 tour. 

Ignorera 50 % de la RÉS de la cible si la VIT de la cible est égale ou inférieure à la VIT de ce Champion.`,
          damage: "2*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Salve émeraude",
          description: `Attaque tous les ennemis. Avant d'attaquer, place un buff ${BUFFS.ATK} de 50 % et un buff ${BUFFS.SPD} de 30 % sur ce Champion pendant 3 tours.`,
          damage: "3.8*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Spectre des bois",
          description: `Attaque 3 fois un ennemi. Chaque frappe ignorera 10 % de la DÉF de la cible. 

Chaque frappe possède également 75 % de chances de placer un débuff ${DEBUFFS.TRUE_FEAR} pendant 2 tours. 

Ignorera 50 % de la RÉS de la cible si la VIT de la cible est inférieure ou égale à la VIT de ce Champion. 

Si la cible est un Boss, possède 75 % de chances de placer un débuff ${DEBUFFS.WEAKEN} de 25 % pendant 2 tours. Ignorera 50 % de la RÉS de la cible si la VIT de la cible est inférieure ou égale à la VIT de ce Champion.`,
          damage: "1.9*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 370",
        "ATQ": "1 443",
        "DEF": "903",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés lors des Donjons de 20%`,
};
