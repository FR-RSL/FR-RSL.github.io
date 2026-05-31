const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Suivre le cours du temps",
          description: `Attaque tous les ennemis. Soigne ce Champion de 5 % de ses PV MAX.`,
          damage: "3.2*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Sage reclus",
          description: `Soigne tous les alliés de 15 % des PV MAX de ce Champion et remplit de 15 % le Compteur de Tour de tous les alliés. 

Place également un buff ${BUFFS.RES} de 25 % sur tous les alliés pendant 2 tours.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Tu as beaucoup à apprendre",
          description: `Ranime un allié avec 75 % de PV et 50 % de Compteur de Tour. 

Place un buff ${BUFFS.UNKILLABLE} et un buff ${BUFFS.REFLECT_DAM} de 30 % sur cet allié pendant 2 tours.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Survivant aux empires [P]",
          description: `Soigne ce Champion de 25 % de ses PV MAX chaque fois qu'un allié meurt. Soigne tous les alliés de 50 % des PV MAX de ce Champion lorsque ce Champion meurt.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "17 340",
        "ATQ": "881",
        "DEF": "1 266",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Augmente la statistique RÉS des Alliés lors des Cryptes de Factions de 45`,
};
