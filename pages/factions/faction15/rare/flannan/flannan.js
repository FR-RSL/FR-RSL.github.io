const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Strike the Anvil",
          description: `Attacks 1 enemy 2 times. Each hit has a 25% chance of placing a [Stun] debuff for 1 turn. <br><br>Each hit also has a 35% chance of decreasing the target's Turn Meter by 5%. <br><br>If the target is under a [Decrease SPD] debuff placed by this Champion, decreases the target’s Turn Meter by 10% instead.`,
          damage: "1.6*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Shatter Knees",
          description: `Attacks all enemies. Has a 75% chance of placing a 15% [Decrease SPD] debuff for 2 turns.`,
          damage: "3.4*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Buff/Debuff Chance +15%", "Level 7: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Mustersmith",
          description: `Places a 25% [Increase ACC] buff on all allies for 2 turns, then teams up with a random ally to attack a target enemy.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Hammer Rhythm [P]",
          description: `Has a 50% chance of granting an Extra Turn when this Champion places a [Decrease SPD] debuff on 3 or more enemies with their Shatter Knees skill.`,
          cooldown: 4,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 690",
        "ATQ": "617",
        "DEF": "1 365",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = null;
