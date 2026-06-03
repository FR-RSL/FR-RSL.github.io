const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Putréfaction",
          description: `Attaque un ennemi. Possède 40% de chances de placer un débuff ${DEBUFFS.DEF} de 60% pendant 2 tours. Ces chances augmentent de 20% avec chaque débuff placé sur ce Champion.`,
          damage: "3.2*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Moissonâme",
          description: `Attaque un ennemi. Accorde un Tour Supplémentaire et place un buff ${BUFFS.ATK} de 50% sur ce Champion pendant 2 tours si cette attaque tue un ennemi. Les dégâts augmentent de 7,5% pour chaque débuff dont est affligé ce Champion. S'accumule jusqu'à 30%.`,
          damage: "5.3*ATQ",
          cooldown: 3,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Moisson d'Esprits",
          description: `Attaque un ennemi. Soigne ce Champion à hauteur de 15% des dégâts infligés. Ce soin augmente de 10% avec chaque débuff placé sur ce Champion. Place un buff ${BUFFS.SPD} de 30% sur ce Champion pendant 2 tours.`,
          damage: "5.5*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 205",
        "ATQ": "1 564",
        "DEF": "793",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés lors des Cryptes de Faction de 27%`,
};
