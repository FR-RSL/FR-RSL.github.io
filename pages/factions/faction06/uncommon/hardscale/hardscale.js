const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Ambush",
          description: `Attacks 1 enemy. Has a 25% chance of placing a 15% [Decrease SPD] debuff for 2 turns.`,
          damage: "4.6*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Damage +10%", "Level 7: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Shocking Wound",
          description: `Attacks 1 enemy. Places a [Stun] debuff if the target has a [Decrease SPD] debuff. Has a 20% chance of placing a [Stun] debuff for 1 turn if the target has no [Decrease SPD] debuffs.`,
          damage: "7*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "13 050",
        "ATQ": "716",
        "DEF": "1 167",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
