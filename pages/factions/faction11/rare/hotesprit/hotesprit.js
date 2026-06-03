const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Faucher",
          description: `Attaque 1 ennemi. Soigne à hauteur de 50% des dégâts infligés.`,
          damage: "3.7*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +10%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Renforcer",
          description: `Place, pendant 2 tours, un buff d'${BUFFS.ATK} de 50% sur tous les alliés.`,
          cooldown: 4,
          levelInfo: ["Temps de recharge -1"],
        },
        {
          img: "assets/sort3.webp",
          name: "Sombre Cadeau",
          description: `Retire tous les débuffs sur tous les alliés. Place, pendant 1 tour, un buff de ${BUFFS.BLOCK_DEBUFFS} sur tous les alliés.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1"],
        }
  ],
  stats: {
        "PV": "15 360",
        "ATQ": "1 046",
        "DEF": "958",
        "VIT": "103",
        "TAUX C.": "15%",
        "DEG C.": "50%",
        "RES": "30",
        "PRE": "0"
  }
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés lors de toutes les Batailles de 10%.`
};
