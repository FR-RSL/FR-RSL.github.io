const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Lancé Tournoyant",
          description: `Attaque 2 fois un ennemi. Chaque frappe possède 25% de chances d'ignorer de 50% la DÉF.`,
          damage: "ATQ*1.7",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Éclair de Feu",
          description: `Attaque un ennemi. Retire 1 buff aléatoire sur une cible. Remplit de 30% le Compteur de Tours de ce Champion.`,
          damage: "ATQ*5",
          cooldown: 3,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Clouer au Sol",
          description: `Attaque un ennemi. Place les compétences de la cible en recharge.`,
          damage: "ATQ*5.5",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +10%", "Dégâts +10%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 700",
        "ATQ": "1 432",
        "DEF": "617",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Augmente la statistique ATQ des Alliés lors des Donjons de 21%`,
};
