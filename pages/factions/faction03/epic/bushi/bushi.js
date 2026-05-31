const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Vent de Tempête",
          description: `Attaque 1 ennemi. Les dégâts infligés augmentent à chaque fois que cette compétence est utilisée. S'accumule jusqu'à 4 fois.`,
          damage: "ATQ*(2.9+0.4*# of Skills Used)",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Fil Mortel",
          description: `Attaque un ennemi. Cette attaque passe toujours en critique. Place un buff ${BUFFS.CRATE} de 30 % et un buff ${BUFFS.SPD} de 15 % sur ce Champion pendant 3 tours.`,
          damage: "7*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Inflexible",
          description: `Ranime ce Champion avec 30 % de PV. Place, pendant 1 tour, un buff ${BUFFS.UNKILLABLE} sur ce Champion.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 690",
        "ATQ": "1 476",
        "DEF": "782",
        "VIT": "90",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés lors des batailles d'Arène de 20%`,
};
