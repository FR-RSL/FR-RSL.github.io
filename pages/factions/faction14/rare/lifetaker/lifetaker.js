const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Bleeding Serum",
          description: `Attacks 1 enemy 2 times. Each hit has a 30% chance of placing a 100% [Heal Reduction] debuff for 2 turns.`,
          damage: "2*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Leg Bind",
          description: `Attacks 1 enemy 3 times. Each hit has a 50% chance of decreasing the target’s Turn Meter by 10%. The third hit has a 50% chance of placing a 30% [Decrease SPD] debuff for 2 turns.`,
          damage: "2.3*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Buff/Debuff Chance +5%", "Level 7: Buff/Debuff Chance +10%", "Level 8: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Diamond Body",
          description: `Places a [Veil] buff on this Champion for 1 turn and a 30% [Reflect Damage] buff on this Champion for 2 turns.`,
          cooldown: 4,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "17 340",
        "ATQ": "1 145",
        "DEF": "727",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
