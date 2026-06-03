const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Éclair Éparpillé",
          description: `Attaque 3 fois au hasard.`,
          damage: "1.4*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Mélopée Apaisante",
          description: `Soigne de 35% de PV la cible alliée. Ce Soin peut passer en critique.`,
          cooldown: 3,
          levelInfo: ["Soins +5%", "Soins +5%", "Soins +5%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Aubaine de Vitesse",
          description: `Place un buff d'${BUFFS.SPD} de 30% sur tous les alliés pendant 2 tours. Remplit de 15% le Compteur de Tours de tous les alliés.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "17 175",
        "ATQ": "881",
        "DEF": "1 002",
        "VIT": "106",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Augmente la statistique DEF des Alliés lors des Donjons de 21%`,
};
