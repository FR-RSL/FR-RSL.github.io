const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Ravaging Leech",
          description: `Attacks 1 enemy. Heals this Champion by 30% of the damage inflicted.<br><br><br>Heal Multiplier: 0.3*Damage Dealt`,
          damage: "3.8*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Lay Waste",
          description: `Attacks all enemies. Has a 75% chance of placing a 25% [Weaken] debuff for 2 turns. Also places a 50% [Decrease ATK] debuff for 2 turns on those enemies who receive a [Weaken] debuff.`,
          damage: "4*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Calamity Torrent",
          description: `Attacks 1 enemy. Will ignore 30% of the target’s DEF. Destroys the target’s MAX HP by 50% of the damage inflicted.<br><br>Places a [Block Damage] buff on this Champion for 1 turn if this attack kills an enemy.`,
          damage: "5.6*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Mass Murder [P]",
          description: `Increases this Champion’s ATK by 10% each time they use an Active Skill (stacks up to 100%). Resets each round.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 030",
        "ATQ": "1 476",
        "DEF": "1 101",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = null;
