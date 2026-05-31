const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Ébranler",
          description: `Attaque un ennemi. Possède 25 % de chances de placer un débuff ${DEBUFFS.LOCK_ACTIVE} pendant 1 tour.`,
          damage: "4.1*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Coup de Boule",
          description: `Attaque 2 fois 1 ennemi. Possède 25 % de chances de placer un débuff d'${DEBUFFS.STUN} pendant 1 tour.`,
          damage: "3.2*ATQ",
          cooldown: 3,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "18 000",
        "ATQ": "738",
        "DEF": "815",
        "VIT": "87",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
