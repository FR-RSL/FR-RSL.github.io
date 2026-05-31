const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Ice Blast",
          description: `Attacks 1 enemy. Has a 35% chance of placing a [Freeze] debuff for 1 turn.`,
          damage: "ATK*3.8",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Gift",
          description: `Places a 30% [Increase C. RATE] buff and a 15% [Increase SPD] buff on all allies for 2 turns. Also fills the Turn Meters of all allies by 15%.`,
          cooldown: 4,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Resurrect",
          description: `Revives 2 random dead allies with 25% HP. Places a [Block Damage] buff on the revived allies for 1 turn.`,
          cooldown: 6,
          levelInfo: ["Level 2: Heal +5%", "Level 3: Heal +10%", "Level 4: Heal +15%", "Level 5: Cooldown -1", "Level 6: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "18 660",
        "ATQ": "1 101",
        "DEF": "958",
        "VIT": "104",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Increases Ally DEF in Faction Wars by 33%`,
};
