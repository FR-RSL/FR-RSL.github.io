const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Tabassage",
          description: `Attaque un ennemi. Place, pendant 2 tours, un buff ${BUFFS.SHIELD} sur ce Champion. La valeur de ce ${BUFFS.SHIELD} est égale à 20 % des dégâts infligés.`,
          damage: "3.7*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Tyran",
          description: `Attaque un ennemi.${RETURN}${RETURN}

Les dégâts augmentent en fonction des PV actuels de ce Champion.`,
          damage: "(4.9+2*Current HP %)*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Pisser le Sang",
          description: `Attaque un ennemi. Place un débuff de ${DEBUFFS.HEALS} de 100 % pendant 3 tours.`,
          damage: "6.7*ATQ",
          cooldown: 6,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "19 650",
        "ATQ": "815",
        "DEF": "903",
        "VIT": "89",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Alliés lors des batailles d'Arène de 27%`,
};
