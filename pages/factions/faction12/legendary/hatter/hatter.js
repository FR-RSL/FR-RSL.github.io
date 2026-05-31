const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Dastardly Distillation",
          description: `Attacks 1 enemy 2 times. <br><br>Each hit has a 25% chance of stealing 1 random buff. Each hit also has a 75% chance of applying a [Debuff Spread] effect, taking 1 random debuff from the target and placing it on all enemies under a [Hex] debuff.`,
          damage: "0.1*HP",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Mixture Most Foul",
          description: `Attacks all enemies. <br><br>Has a 75% chance of placing a [Hex] debuff and a 25% [Weaken] debuff on all enemies for 2 turns.<br><br>The ally with the highest C. DMG will team up and join the attack. The ally joining the attack will use their default skill. The damage dealt by the ally joining the attack will increase by 10% per each debuff on the target.`,
          damage: "0.2*HP",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +15%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Cooldown -1", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "A Whiff of Madness",
          description: `Increases the duration of all buffs on all allies by 1 turn, and decreases the duration of all debuffs on all allies by 1 turn. <br><br>Also fills the Turn Meters of all allies by 20%.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Time For Tea! [P]",
          description: `Every 10 turns taken by allies, heals all allies by 20% of their MAX HP. Every 6 turns taken by enemies, places a [True Fear] debuff on all enemies for 1 turn.<br><br>If there are multiple Champions on the team with this skill, only one will activate. This skill will not activate on duplicate copies of this Champion, if this particular Champion is dead.<br><br>Heal Multiplier: 0.2*Target Max HP`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "23 295",
        "ATQ": "859",
        "DEF": "1 167",
        "VIT": "108",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Increases Ally ACC in All Battles by 60`,
};
