const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Force Irrésistible",
          description: `Attaque 1 ennemi. Ignorera le ${BUFFS.SHIELD} et les buffs de ${BUFFS.BLOCK_DAMAGE}.`,
          damage: "4*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Malédiction de Fragilité",
          description: `Attaque 1 ennemi. Place un débuff d'${DEBUFFS.WEAKEN} de 25 % pendant 2 tours.`,
          damage: "6.3*ATQ",
          cooldown: 3,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Fureur de la Horde",
          description: `Attaque 1 ennemi avec 4 alliés. Augmente de 20 % les dégâts infligés par les alliés.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "17 835",
        "ATQ": "1 409",
        "DEF": "980",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/crit.webp",
  description: `Augmente la statistique TAUX DE C. des Alliés lors des Donjons de 23%`,
};
