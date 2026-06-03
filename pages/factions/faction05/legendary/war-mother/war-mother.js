const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Cri Ravageur",
          description: `Attaque 2 fois un ennemi. Chaque frappe place un débuff de ${DEBUFFS.ATK} de 50% pendant 2 tours.`,
          damage: "1.9*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Infusion Spéciale",
          description: `Attaque tous les ennemis. Place deux débuffs ${DEBUFFS.BOMB} qui détoneront après 2 tours. Les dégâts de la Bombe augmentent de 100% contre les Boss.`,
          damage: "4.25*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Toucher Maternel",
          description: `Attaque tous les ennemis. Fais exploser instantanément tous les débuffs ${DEBUFFS.BOMB} si ce Champion se trouve sous buff ${BUFFS.ATK}.`,
          damage: "4.5*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "17 505",
        "ATQ": "1 509",
        "DEF": "903",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Augmente la statistique PRÉ des Alliés lors des Cryptes de Faction de 65`,
};
