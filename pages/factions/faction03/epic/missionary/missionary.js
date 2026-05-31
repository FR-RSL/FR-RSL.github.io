const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Crashing Halberd",
          description: `Attacks 1 enemy. Has a 20% chance of placing a [Stun] debuff for 1 turn.`,
          damage: "0.2*HP",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "In the Thick",
          description: `Attacks 1 enemy. Has a 75% chance of placing a [Provoke] debuff for 1 turn. Has a 100% chance of placing a [Provoke] debuff for 1 turn, and a 50% [Decrease ATK] debuff for 2 turns, if this Champion's current HP is higher than the target's current HP.`,
          damage: "0.32*HP",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Humble the Faithless",
          description: `Attacks 1 enemy. Decreases the target's Turn Meter by 50%. Has a 75% chance of placing a 100% [Heal Reduction] debuff for 2 turns. Also has a 75% chance of placing a 30% [Decrease SPD] debuff for 2 turns.`,
          damage: "0.36*HP",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "19 485",
        "ATQ": "969",
        "DEF": "1 035",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Ally HP in Dungeons by 33%`,
};
