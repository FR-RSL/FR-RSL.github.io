const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Fracas",
          description: `Attaque 1 ennemi. Place un débuff de ${DEBUFFS.HEALS} de 50 % si la DÉF de la cible est plus faible que celle de ce Champion.`,
          damage: "3.7*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Mur de Pierre",
          description: `Place, pendant 2 tours, un buff de ${BUFFS.ALLY_PROTECT} de 50 % sur tous les alliés, sauf sur ce Champion. Place, pendant 2 tours, un buff de ${BUFFS.COUNTER} sur tous les alliés, sauf sur ce Champion. Place un buff ${BUFFS.UNKILLABLE} sur ce Champion pendant 1 tour.`,
          cooldown: 4,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Inébranlable [P]",
          description: `Réduit d'1 tour la durée de tous les débuffs de ce Champion au début de chaque tour.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "19 320",
        "ATQ": "826",
        "DEF": "1 189",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Augmente la statistique RÉS des Alliés lors des Cryptes de Faction de 45`,
};
