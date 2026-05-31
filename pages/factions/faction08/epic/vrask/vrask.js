const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Claque",
          description: `Attaque un ennemi. Remplit de 20 % le Compteur de Tours de ce Champion si l'attaque passe en critique.`,
          damage: "0.1*HP",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Frappe Éclair",
          description: `Attaque un ennemi.`,
          damage: "0.15*HP",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Cannibalisme [P]",
          description: `Soigne tous les alliés de 10 % des PV MAX de ce Champion lorsqu'il porte un coup critique.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "23 460",
        "ATQ": "870",
        "DEF": "870",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Alliés lors des Donjons de 33%`,
};
