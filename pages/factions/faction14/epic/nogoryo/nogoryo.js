const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Double Kamas",
          description: `Attacks 1 enemy 2 times. Places an extra hit if this Champion is under an [Increase ATK] buff. Each hit has a 20% chance of placing a [Block Active Skills] debuff for 2 turns.`,
          damage: "1.2*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Abduct By Night",
          description: `Attacks 1 enemy. Places a [Block Buffs] debuff for 2 turns.<br><br>If this Champion is under an [Increase ATK] buff, steals all buffs from the target enemy before attacking.`,
          damage: "5.2*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Faster Than The Eye",
          description: `Attacks all enemies. Decreases the cooldown of this skill by 1 turn when attacking under an [Increase ATK] buff.`,
          damage: "4.5*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Murderer's Lust [P]",
          description: `Places a 50% [Increase ATK] buff on this Champion for 2 turns whenever an enemy’s HP drops below 30%. This buff cannot be removed.`,
          cooldown: 3,
          isPassive: true
        }
      ],
  stats: {
        "PV": "16 680",
        "ATQ": "1 376",
        "DEF": "815",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
