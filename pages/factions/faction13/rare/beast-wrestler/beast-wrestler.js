const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Tranchoir Écrasant",
          description: `Attaque 2 fois un ennemi.
Possède 20 % de chances de placer un débuff d'${DEBUFFS.STUN} d'1 tour.`,
          damage: "1.6*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Proie à Abattre",
          description: `Attaque un ennemi.

Les ennemis tués par cette compétence ne peuvent pas être ranimés.`,
          damage: "5.6*ATQ",
          cooldown: 6,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Dégâts +10%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Premier Sang [P]",
          description: `Augmente de 50 % les dégâts infligés lors de la première frappe sur chaque ennemi.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 525",
        "ATQ": "1 233",
        "DEF": "760",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/crit.webp",
  description: `Augmente la statistique TAUX DE C. des Alliés lors des batailles d'Arène de 16%`,
};
