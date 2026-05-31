const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Knock Out",
          description: `Attacks 1 enemy. Has a 15% chance of granting an Extra Turn.`,
          damage: "3.8*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Clan Banner",
          description: `Places a 30% [Increase C. RATE] buff on all allies for 2 turns. Places a 25% [Weaken] debuff on all enemies for 2 turns.`,
          cooldown: 4,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Karma Burn",
          description: `Removes all buffs from all allies and enemies, then attacks all enemies. Damage increases according to the number of removed buffs. Has a 50% chance of placing a [Sleep] debuff on all enemies for 1 turn. The chance of placing a [Sleep] debuff increases by 5% for each buff removed. Inflicts less damage to Bosses.`,
          damage: "Non-Boss: Enemy Max HP * (0.1+0.03*Buffs) OR Boss: Enemy Max HP * (0.1+0.005*Buffs)",
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "19 320",
        "ATQ": "1 145",
        "DEF": "870",
        "VIT": "104",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Increases Ally RES in All Battles by 40`,
};
