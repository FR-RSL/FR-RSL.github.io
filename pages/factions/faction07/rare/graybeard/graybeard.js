const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Expose Weakness",
          description: `Attacks 1 enemy. Has a 50% chance of placing a [Provoke] debuff for 1 turn.`,
          damage: "4.3*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Ice Crush",
          description: `Attacks all enemies. Has a 25% chance of placing a [Freeze] debuff for 1 turn. Damage inflicted is proportional to DEF.`,
          damage: "4.1*DEF",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +10%", "Level 5: Cooldown -1", "Level 6: Buff/Debuff Chance +10%", "Level 7: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Bring It On!",
          description: `Places a [Shield] buff on this Champion for 2 turns. Has an 80% chance of placing a [Counterattack] buff on this Champion for 2 turns.<br><br>The value of the [Shield] is proportional to DEF. This buff cannot be removed.<br><br><br>Shield Multiplier: 4*DEF`,
          cooldown: 6,
          levelInfo: ["Level 2: Buff/Debuff Chance +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Cooldown -1", "Level 5: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 700",
        "ATQ": "936",
        "DEF": "1 112",
        "VIT": "92",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Increases Ally DEF in Dungeons by 30%`,
};
