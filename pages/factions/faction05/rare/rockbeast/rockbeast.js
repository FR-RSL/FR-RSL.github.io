const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Club",
          description: `Attacks 1 enemy. Has a 50% chance of placing a ${DEBUFFS.PROVOKE} debuff for 1 turn. Damage increases according to this Champion's MAX HP.`,
          damage: "1.5*ATQ+0.15*PV",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Chances de Buff/Debuff +10%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Hunker Down",
          description: `Fills the Turn Meter by 50%. Places a 60% ${BUFFS.DEF} buff on this Champion for 3 turns.`,
          cooldown: 4,
          levelInfo: ["Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Bellow",
          description: `Attacks all enemies. Has a 75% chance of placing a 30% ${DEBUFFS.SPD} debuff for 1 turn.`,
          damage: "4.5*ATQ",
          cooldown: 6,
          levelInfo: ["Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +10%", "Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "19 485",
        "ATQ": "892",
        "DEF": "837",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/crit.webp",
  description: `Augmente la statistique TAUX DE C. des Alliés lors des batailles d'Arène de 16%`,
};
