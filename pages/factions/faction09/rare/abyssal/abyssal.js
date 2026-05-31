const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Prunelle de Néant",
          description: `Attaque tous les ennemis. Possède 15 % de chances de placer un débuff ${DEBUFFS.BLOCK_BUFFS} pendant 2 tours.`,
          damage: "2.8*ATQ",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Renouveau Abyssal",
          description: `Soigne tous tes alliés à hauteur de 15 % de leurs PV max.`,
          cooldown: 4,
          levelInfo: ["Soins +5%", "Soins +10%", "Soins +10%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Pupilles de la Folie",
          description: `Place un buff ${BUFFS.DEF} de 30 % et un buff ${BUFFS.ATK} de 25 % sur tous les alliés pendant 2 tours.`,
          cooldown: 6,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "18 330",
        "ATQ": "815",
        "DEF": "991",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Augmente la statistique VIT des Alliés lors des Cryptes de Faction de 16%`,
};
