const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Neck Bite",
          description: `Attacks 1 enemy. Will ignore [Shield] and [Block Damage] buffs. Will Ignore DEF if this attack is critical.`,
          damage: "2.6*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Gnaw",
          description: `Attacks 1 enemy. Places a 5% [Poison] debuff for 2 turns. Damage inflicted is proportional to DEF.`,
          damage: "7.5*DEF",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "10 740",
        "ATQ": "914",
        "DEF": "573",
        "VIT": "94",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
