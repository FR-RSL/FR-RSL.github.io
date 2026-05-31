const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Platebreaker",
          description: `Attacks 1 enemy 2 times. <br><br>Each hit has a 25% chance of placing a 50% [Decrease RES] debuff for 2 turns. <br><br>Each hit also heals this Champion by 20% of the damage inflicted.<br><br><br>Heal Multiplier: 0.2*Damage Dealt`,
          damage: "0.12*HP",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Highshield's Defiance",
          description: `Attacks all enemies. Before attacking, has a 75% chance of removing 1 random debuff from all allies. <br><br>After the attack, has a 75% chance of removing a random buff from all enemies.`,
          damage: "0.24*HP",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Just Cause",
          description: `Places a 50% [Increase RES] buff and a 30% [Reflect Damage] buff on all allies for 2 turns.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Hero of the People [P]",
          description: `When this Champion is under a [Reflect Damage] buff and an enemy attempts to place a debuff, has a 20% chance to reflect the debuff back onto the attacker.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "20 640",
        "ATQ": "749",
        "DEF": "1 178",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = null;
