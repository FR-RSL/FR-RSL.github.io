const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Darken the Sky",
          description: `Attacks 1 enemy 3 times. Each hit has a 30% chance of removing 1 random buff from the target. <br><br>Each hit also heals this Champion by 20% of the damage inflicted.<br><br><br>Heal Multiplier: 0.2*Damage Dealt`,
          damage: "0.07*HP",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Deathwhirl",
          description: `Attacks all enemies. Places an extra hit on enemies under no buffs. The extra hit will ignore 20% of the target’s DEF. <br><br>Each hit also heals all allies by 20% of the damage inflicted.<br><br><br>Heal Multiplier: 0.2*Damage Dealt`,
          damage: "0.2*HP",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Face the Blackflail!",
          description: `Places a 50% [Increase RES] buff and a 30% [Reflect Damage] buff on all allies for 2 turns. <br><br>Also places a [Taunt] buff on this Champion for 2 turns.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Red Mist [P]",
          description: `Counterattacks with the Darken the Sky skill when hit while under a [Taunt] buff placed by this Champion.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "22 965",
        "ATQ": "914",
        "DEF": "1 134",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "10"
      },
};

const aura = null;
