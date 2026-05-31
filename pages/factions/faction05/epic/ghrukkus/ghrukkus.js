const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Beating Staff",
          description: `Attacks 1 enemy 3 times. Each hit has a 15% chance of placing a [Leech] debuff for 2 turns.`,
          damage: "1.3*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Toe the Line",
          description: `Attacks 1 enemy. Has a 60% chance of placing a 30% [Decrease SPD] debuff for 2 turns. Also has a 40% chance of decreasing the target’s Turn Meter by 30%.`,
          damage: "6.2*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Buff/Debuff Chance +10%", "Level 3: Buff/Debuff Chance +15%", "Level 4: Buff/Debuff Chance +15%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Harsh Discipline",
          description: `Attacks all enemies. Has an 80% chance of placing a 50% [Decrease ATK] debuff and a 100% [Heal Reduction] debuff for 2 turns.`,
          damage: "4.25*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Buff/Debuff Chance +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "17 010",
        "ATQ": "1 079",
        "DEF": "1 090",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Increases Ally SPD in Dungeons by 24%`,
};
