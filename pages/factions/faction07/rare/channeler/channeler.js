const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Rage of Ancients",
          description: `Attacks 1 enemy. Has a 25% chance of placing a 50% [Heal Reduction] debuff for 1 turn.`,
          damage: "4.7*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Halt!",
          description: `Attacks 1 enemy. Has a 50% chance of placing a [Stun] debuff for 1 turn.`,
          damage: "6.4*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Buff/Debuff Chance +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Buff/Debuff Chance +10%", "Level 7: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Agility",
          description: `Places a 30% [Increase SPD] buff on all allies for 2 turns. Fills the Turn Meter of all allies by 15%.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "17 175",
        "ATQ": "881",
        "DEF": "1 002",
        "VIT": "103",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Increases Ally RES in Faction Wars by 30`,
};
