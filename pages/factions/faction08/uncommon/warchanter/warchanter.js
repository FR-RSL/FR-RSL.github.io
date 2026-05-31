const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Head Wound",
          description: `Attacks 1 enemy. Has a 20% chance of applying a [Stun] debuff for 1 turn.`,
          damage: "0.2*HP",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Frenzy",
          description: `Attacks all enemies. Has a 25% chance of placing a 25% [Decrease ATK] debuff for 1 turn. Also has a 25% chance of placing a [Provoke] debuff for 1 turn.`,
          damage: "5.6*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Cooldown -1", "Level 7: Damage +10%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "18 990",
        "ATQ": "716",
        "DEF": "771",
        "VIT": "94",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
