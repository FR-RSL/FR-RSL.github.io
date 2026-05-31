const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Débris de Glace",
          description: `Attaque un ennemi. Remplit de 10 % le Compteur de Tours d'un allié pris au hasard.`,
          damage: "2.9*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Touche Cicatrisante",
          description: `Attaque un ennemi. Possède 75 % de chances de placer un débuff de ${DEBUFFS.BLOCK_BUFFS} d'1 tour.`,
          damage: "4.1*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Exalter",
          description: `Place un buff d'${BUFFS.DEF} de 30 % et un buff d'${BUFFS.ATK} de 25 % sur tous les alliés pendant 2 tours.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "18 495",
        "ATQ": "947",
        "DEF": "848",
        "VIT": "103",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Augmente la statistique RÉS des Alliés lors des Cryptes de Faction de 30`,
};
