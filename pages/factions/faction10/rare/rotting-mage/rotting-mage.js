const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Rayon Glacial",
          description: `Attaque un ennemi. Possède 25 % de chances de placer un débuff de ${DEBUFFS.GEL} d'1 tour.`,
          damage: "4*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Armements Gelés",
          description: `Place, pendant 2 tours, un buff d'${BUFFS.ATK} de 25 % sur tous les alliés. Place, pendant 2 tours, un buff d'${BUFFS.DEF} de 30 % sur ce Champion.`,
          cooldown: 4,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Surcharge Mentale",
          description: `Attaque un ennemi. Possède 75 % de chances de placer un débuff d'${DEBUFFS.STUN} d'1 tour.`,
          damage: "4.4*ATQ",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +10%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Dégâts +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 350",
        "ATQ": "1 068",
        "DEF": "870",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés lors des Cryptes de Faction de 13%`,
};
