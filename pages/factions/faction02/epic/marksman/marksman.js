const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Flèche Venimeuse",
          description: `Attaque un ennemi. Place un débuff ${DEBUFFS.POISON} de 5 % pendant 2 tours si cette attaque passe en critique. Possède 25 % de chances d'accorder un Tour Supplémentaire.`,
          damage: "3.1*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Tir Impressionnant",
          description: `Attaque un ennemi. Remplit de 20 % le Compteur de Tours de tous les alliés. Possède 25 % de chances supplémentaires de porter un coup critique.`,
          damage: "5.7*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Épines",
          description: `Attaque 4 fois au hasard. Chaque frappe possède 35 % de chances d'ignorer la DÉF.`,
          damage: "1.3*ATQ",
          cooldown: 5,
          levelInfo: ["Dégâts +15%", "Dégâts +15%", "Chances de Buff/Debuff +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 700",
        "ATQ": "1 432",
        "DEF": "892",
        "VIT": "98",
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
