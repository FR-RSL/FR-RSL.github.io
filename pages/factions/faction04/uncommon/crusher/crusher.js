const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Scythe",
          description: `Attacks 1 enemy. Has a 25% chance of placing a 25% [Decrease ATK] debuff for 2 turns.`,
          damage: "4*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Savage Swipe",
          description: `Attacks 1 enemy. Places a [Counterattack] buff on this Champion for 2 turns.`,
          damage: "6.2*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 370",
        "ATQ": "870",
        "DEF": "925",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
