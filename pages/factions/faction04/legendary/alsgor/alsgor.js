const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Thunderous Maul",
          description: `Attacks 1 enemy. Heals this Champion by 20% of the damage dealt. <br><br>Has a 40% chance of increasing the duration of 2 random debuffs on the target Champion by 1 turn.<br><br><br>Heal Multiplier: 0.2*Damage Dealt`,
          damage: "0.26*HP",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Crack the Sky",
          description: `Attacks all enemies. Has a 75% chance of removing 2 random buffs from all enemies. <br><br>Has a 75% chance of removing all buffs from all enemies, even if this attack lands as a weak hit, if Jetni the Giant is on the same team. <br><br>Also places a 15% [Continuous Heal] buff on all allies for 2 turns.`,
          damage: "0.27*HP",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Resounding Rally",
          description: `Fully heals a target ally. <br><br>Also places a [Block Damage] buff on all allies for 2 turns.<br><br><br>Heal Multiplier: 1*Target Max HP`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Trammel",
          description: `When attacked, has a 50% chance of placing a 30% [Decrease SPD] debuff on the attacker for 2 turns. <br><br>The chance increases to 100% if Jetni the Giant is on the same team.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "21 975",
        "ATQ": "936",
        "DEF": "1 178",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Increases Ally RES in All Battles by 60`,
};
