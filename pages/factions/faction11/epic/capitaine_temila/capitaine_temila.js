const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Lien du Devoir",
          description: `Attaque un ennemi. Possède 50% de chances de placer, pendant 1 tour, un buff de ${BUFFS.HEALS} de 15% sur ce Champion si cette attaque passe en critique.`,
          damage: "4.9*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
        },
        {
          img: "assets/sort2.webp",
          name: "Reste dans le Combat",
          description: `Place un buff d'${BUFFS.DEF} de 60% sur tous les alliés pendant 2 tours. Soigne tous les alliés à hauteur de 15% des PV MAX de ce Champion.`,
          cooldown: 4,
          levelInfo: ["Soins +5%", "Soins +5%", "Soins +5%", "Soins +5%", "Temps de recharge -1"],
        },
        {
          img: "assets/sort3.webp",
          name: "Gardienne Exaltée",
          description: `Place, pendant 2 tours, un buff de ${BUFFS.ALLY_PROTECT} de 50% sur tous les alliés sauf sur ce Champion.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1"],
        }
  ],
  stats: {
        "PV": "18 825",
        "ATQ": "936",
        "DEF": "1 112",
        "VIT": "96",
        "TAUX C.": "15%",
        "DEG C.": "50%",
        "RES": "45",
        "PRE": "0"
  }
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Augmente la statistique RES des Allies dans les Cryptes de Faction de 45.`
};
