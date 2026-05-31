const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Dreamer's Curse",
          description: `Attacks 1 enemy. Has a 20% chance of placing a [Sleep] debuff for 1 turn.`,
          damage: "3.8*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Buff/Debuff Chance +10%", "Level 7: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Ominous Visit",
          description: `Attacks 1 enemy. Has a 50% chance of placing a [Block Buffs] debuff for 1 turn.<br><br>Also fills this Champion’s Turn Meter by 15% and fills the Turn Meter of the ally with the highest Turn Meter by 15%.`,
          damage: "6*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Join the Troupe",
          description: `Fills the Turn Meters of all allies by 15% and places a 25% [Increase ATK] buff on all allies for 2 turns.`,
          cooldown: 4,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "12 555",
        "ATQ": "1 200",
        "DEF": "991",
        "VIT": "94",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Increases Ally ACC in Arena by 30`,
};
