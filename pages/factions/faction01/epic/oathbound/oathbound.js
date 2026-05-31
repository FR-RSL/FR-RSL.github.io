const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Shatter",
          description: `Attacks 1 enemy. Has a 20% chance of placing a [Freeze] debuff for 1 turn. Damage inflicted is proportional to DEF.`,
          damage: "1.5*ATK+2.7*DEF",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Subjugate",
          description: `Attacks all enemies. Has a 75% chance of placing a 50% [Decrease ATK] debuff on all enemies for 2 turns. Also has a 55% chance of decreasing each target's Turn Meter by 20%.`,
          damage: "4*DEF",
          cooldown: 3,
          levelInfo: ["Level 2: Buff/Debuff Chance +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Intimidate",
          description: `Attacks at random 4 times. Each attack has a 30% chance of placing a [Block Active Skills] debuff for 2 turns. <br><br>The chance of the [Block Active Skills] debuff increases to 100% if the target is under a [Decrease ATK] debuff.`,
          damage: "1.65*DEF",
          cooldown: 5,
          levelInfo: ["Level 2: Buff/Debuff Chance +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "18 330",
        "ATQ": "782",
        "DEF": "1 299",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = null;
