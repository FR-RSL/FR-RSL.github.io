const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Flitter In Chaos",
          description: `Attacks 1 enemy. Has a 40% chance of placing a 25% [Weaken] debuff for 2 turns. This chance increases to 75% if the target is under a [HP Burn] debuff.`,
          damage: "3*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Sup On Blood",
          description: `Attacks 1 enemy 2 times. Heals this Champion by 15% of their MAX HP on each critical hit. <br><br>Places a 50% [Increase ATK] buff on this Champion for 2 turns if the target is under a [HP Burn] debuff.<br><br><br>Heal Multiplier: 0.15*HP`,
          damage: "2.5*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Heal +10%", "Level 4: Damage +10%", "Level 5: Heal +10%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Unleash Havoc",
          description: `Attacks all enemies. Has a 75% chance of placing a [HP Burn] debuff for 2 turns.<br><br>Fills this Champion's Turn Meter by 15% if at least one enemy is hit with a critical hit.`,
          damage: "3.8*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Pyromania [P]",
          description: `Increases this Champion’s ATK and C. DMG by 5% every time a [HP Burn] debuff triggers on any enemy. Stacks up to 25%.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "13 710",
        "ATQ": "1 421",
        "DEF": "969",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
