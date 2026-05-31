const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Inspiring Violence",
          description: `Attacks 1 enemy. Has a 50% chance of removing 1 random debuff from a random ally.<br><br>Cannot remove a debuff from this Champion.`,
          damage: "0.15*HP",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Buff/Debuff Chance +5%", "Level 7: Damage +5%", "Level 8: Damage +10%", "Level 9: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Sheer Grit",
          description: `Places a [Shield] buff on all allies equal to 20% of this Champion’s MAX HP for 2 turns. Also places a 15% [Continuous heal] buff on all allies for 2 turns.<br><br><br>Shield Multiplier: 0.20*HP`,
          cooldown: 4,
          levelInfo: ["Level 2: Shield +5%", "Level 3: Shield +5%", "Level 4: Shield +5%", "Level 5: Shield +5%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Glorious Return",
          description: `Revives 2 random allies with 20% HP and 20% Turn Meter. Also places a [Shield] buff on the revived allies for 2 turns equal to 30% of their MAX HP.<br><br><br>Shield Multiplier: 0.30*Target Max HP`,
          cooldown: 7,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "20 475",
        "ATQ": "947",
        "DEF": "991",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Ally HP in All Battles by 15%`,
};
