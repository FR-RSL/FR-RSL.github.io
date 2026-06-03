const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Fouet Psychique",
          description: `Attaque 3 fois au hasard. Réduit de 25% le Compteur de Tours de la cible lors de chaque coup critique.`,
          damage: "1*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Tentation",
          description: `Attaque 2 fois tous les ennemis. Chaque frappe possède 30% de chances de placer un débuff de ${DEBUFFS.DEF} de 30% pendant 1 tour. Place un débuff de ${DEBUFFS.SLEEP} d'1 tour sur les cibles affligées de débuffs de ${DEBUFFS.DEF}.`,
          damage: "1.7*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Temps de recharge -1", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Brasier Infernal",
          description: `Attaque 1 ennemi. Possède 30% de chances supplémentaires de porter un coup critique. Ignorera 50% de la DÉF de la cible.`,
          damage: "4.6*ATQ",
          cooldown: 6,
          levelInfo: ["Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 040",
        "ATQ": "1 575",
        "DEF": "793",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Augmente la statistique PRÉ des Alliés lors des Cryptes de Faction de 50`,
};
