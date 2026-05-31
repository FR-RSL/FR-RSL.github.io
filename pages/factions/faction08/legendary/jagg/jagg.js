const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Razorwheel",
          description: `Attacks 1 enemy. Steals 10% of the target’s Turn Meter. <br><br>Has a 25% chance of repeating this skill.`,
          damage: "3.7*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Shred The Flesh",
          description: `Attacks 1 enemy 2 times. Before attacking, transfers all debuffs from this Champion to the target. Damage from the first hit increases by 10% for each debuff transferred. <br><br>Then applies a [Debuff Spread] effect, taking 2 random debuffs from the target and placing them on all enemies. Damage from the second hit increases by 5% for each debuff transferred, and each debuff applied through the [Debuff Spread] effect.`,
          damage: "3*ATK+(3*ATK*0.1*Debuffs Transffered)Multiplier: 3*ATK+(3*ATK*0.05*Debuffs Applied to Enemy Team (Current Turn))",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Lace",
          description: `Attacks all enemies. Before attacking, removes all buffs from all enemies. Damage increases by 5% for each buff removed. <br><br>Fills this Champion’s Turn Meter by 15% for each enemy killed by this skill.`,
          damage: "4*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Rev Up The Saw [P]",
          description: `At the start of this Champion’s turn, places a 50% [Increase ACC] buff and a 30% [Increase C. DMG] buff on them for 1 turn. <br><br>At the end of this Champion’s turn, places a 30% [Decrease C. RATE] debuff and a 25% [Decrease C. DMG] debuff on the enemy with the highest C. DMG for 1 turn.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 690",
        "ATQ": "1 531",
        "DEF": "1 002",
        "VIT": "101",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = null;
