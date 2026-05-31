const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Spymaster's Blade",
          description: `Attacks 1 enemy. Has a 40% chance of decreasing the duration of 2 random buffs on the target by 1 turn.`,
          damage: "0.2*HP",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Damage +5%", "Level 7: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Directed Sabotage",
          description: `Attacks all enemies. Has a 50% chance of placing a [Block Buffs] debuff for 2 turns.`,
          damage: "0.2*HP",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Cloak and Dagger",
          description: `Places a [Counterattack] buff on this Champion for 2 turns. Also has a 75% chance of placing a [Provoke] debuff for 1 turn on 2 random enemies.`,
          cooldown: 6,
          levelInfo: ["Level 2: Buff/Debuff Chance +10%", "Level 3: Buff/Debuff Chance +15%", "Level 4: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "19 650",
        "ATQ": "782",
        "DEF": "936",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = null;
