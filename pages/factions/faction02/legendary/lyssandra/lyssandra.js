const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Transfert",
          description: `Attaque un ennemi. Transfère tous les débuffs de ce Champion sur la cible.`,
          damage: "4*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Éreintement",
          description: `Attaque un ennemi. Vide totalement le Compteur de Tours de la cible.`,
          damage: "6*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Stimuler",
          description: `Place un buff d'${BUFFS.SPD} de 30 % sur tous les alliés pendant 2 tours. Remplit de 30 % le Compteur de Tours de tous les alliés. Réduit de 30% le Compteur de Tours de tous les ennemis.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "21 480",
        "ATQ": "969",
        "DEF": "1 178",
        "VIT": "110",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés lors de toutes les Batailles de 24%`,
};
