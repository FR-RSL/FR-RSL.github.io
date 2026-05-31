const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Piercing Shot",
          description: `Attacks 1 enemy. Places a 25% ${BUFFS.ATK} buff on this Champion for 2 turns if the attack is critical.`,
          damage: "3.8*ATQ",
          levelInfo: ["Dégâts +5%", "Chances de Buff/Debuff +5%", "Dégâts +10%", "Chances de Buff/Debuff +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Double Tap",
          description: `Attacks 1 enemy 2 times.`,
          damage: "4*ATQ",
          cooldown: 3,
          levelInfo: ["Dégâts +5%", "Dégâts +5%", "Dégâts +5%", "Dégâts +5%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "10 575",
        "ATQ": "1 255",
        "DEF": "793",
        "VIT": "93",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
