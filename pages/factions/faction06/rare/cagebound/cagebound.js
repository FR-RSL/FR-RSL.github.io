const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Twisted Spike",
          description: `Attacks 1 enemy. Places a ${BUFFS.SHIELD} buff on this Champion for 1 turn equal to 10% of their MAX HP.<br><br><br>Shield Multiplier: HP*0.1`,
          damage: "3.1*DEF",
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Swordbreak Cage",
          description: `Attacks all enemies. Has a 75% chance of placing a 25% ${DEBUFFS.ATK} debuff for 2 turns.`,
          damage: "3.3*DEF",
          cooldown: 4,
          levelInfo: ["Dégâts +10%", "Chances de Buff/Debuff +10%", "Chances de Buff/Debuff +15%", "Temps de recharge -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Bound to Serve",
          description: `Places a 25% ${BUFFS.ALLY_PROTECT} buff on all allies except this Champion for 2 turns. Also places a 15% ${BUFFS.HEALS} buff on this Champion for 1 turn.`,
          cooldown: 5,
          levelInfo: ["Temps de recharge -1", "Temps de recharge -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 700",
        "ATQ": "793",
        "DEF": "1 255",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = null;
