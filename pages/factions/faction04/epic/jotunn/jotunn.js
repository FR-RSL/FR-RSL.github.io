const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Brute Strength",
          description: `Attacks 1 enemy. Has a 30% chance of placing a 30% ${DEBUFFS.DEF} debuff for 2 turns.`,
          damage: "0.22*PV",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Burning Blade",
          description: `Attacks 1 enemy. Has a 75% chance of placing a ${DEBUFFS.BURN} debuff for 4 turns.`,
          damage: "0.4*PV",
          cooldown: 4,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Sear Away",
          description: `Attacks 1 enemy. Destroys the target's MAX HP by 30% of the damage inflicted. Damage increases by 50% if the target is under a ${DEBUFFS.BURN} debuff.`,
          damage: "0.43*PV",
          cooldown: 5,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +10%", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 680",
        "ATQ": "991",
        "DEF": "1 200",
        "VIT": "93",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Augmente la statistique PV des Alliés lors des Cryptes de Faction de 29%`,
};
