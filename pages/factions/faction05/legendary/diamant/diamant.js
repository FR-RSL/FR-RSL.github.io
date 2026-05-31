const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "The Hand of Diamant",
          description: `Attacks all enemies. <br><br>Heals all allies by 5% of this Champion’s MAX HP. Heals by an additional 2% of this Champion’s MAX HP for each buff on this Champion.<br><br><br>Heal Multiplier: 0.05*HP+(0.02*HP*Active Buff Count)`,
          damage: "3*ATK",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Heal +10%", "Level 4: Damage +10%", "Level 5: Heal +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Charitable Donation",
          description: `Attacks all enemies. <br><br>Increases the duration of all ally buffs by 1 turn. <br><br>Fills the Turn Meter of all allies by 20%.`,
          damage: "4*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Protection Racket",
          description: `Places 3 [Intercept] stacks on a target ally. <br><br>Also places a 50% [Increase RES] buff and a 25% [Strengthen] buff on all allies for 2 turns.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Kingpin [P]",
          description: `Has a 50% chance to convert a debuff into a buff before it is placed on an ally. Works with the following debuffs: <br><br>- Converts a 25% and 50% [Decrease ATK] debuffs into a 50% [Increase ATK] buff<br>- Converts a 30% and 60% [Decrease DEF] debuffs into a 60% [Increase DEF] buff<br>- Converts a 15% and 30% [Decrease SPD] debuffs into a 30% [Increase SPD] buff<br>- Converts a 15% and 25% [Decrease C. RATE] debuffs into a 30% [Increase C. RATE] buff<br>- Converts a 15% and 25% [Decrease C. DMG] debuffs into a 30% [Increase C. DMG] buff`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "19 650",
        "ATQ": "1 145",
        "DEF": "1 123",
        "VIT": "112",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Increases Ally SPD in All Battles by 20%`,
};
