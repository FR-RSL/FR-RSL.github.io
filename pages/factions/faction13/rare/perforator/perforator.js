const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Tueur de Parasites",
          description: `Attaque un ennemi. Possède 30 % de chances de placer un débuff de ${DEBUFFS.POISON} de 5 % pendant 1 tour.`,
          damage: "3.6*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Embouts Durcis",
          description: `Attaque un ennemi. Ignorera 50 % de la DÉF de la cible. Accorde un Tour supplémentaire si cette attaque tue un ennemi.`,
          damage: "4.1*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Effrayer [P]",
          description: `Possède 35 % de chances de placer un débuff de ${DEBUFFS.FEAR} d'1 tour sur la cible lorsque ce Champion inflige un coup critique.`,
          cooldown: 2,
          levelInfo: ["Temps de recharge -1"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "14 205",
        "ATQ": "1 277",
        "DEF": "804",
        "VIT": "86",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = null;
