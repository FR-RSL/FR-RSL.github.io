const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Djinn Swords",
          description: `Attacks 1 enemy 2 times. Each hit has a 30% chance of increasing the duration of a random debuff on the target by 1 turn. <br><br>If Djamarsa is on the same team, each hit also increases the duration of any [HP Burn] debuffs on the target by 1 turn.`,
          damage: "1.5*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Berserker's Delight",
          description: `Attacks 3 times at random. Each hit has an 80% chance of instantly activating any [HP Burn] debuffs on each target. Heals this Champion by 10% of their MAX HP for each [HP Burn] debuff activated by this skill.<br><br><br>Heal Multiplier: 0.1*HP`,
          damage: "2*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Blazing Zephyr",
          description: `Attacks all enemies. Has an 80% chance of placing a [HP Burn] debuff for 2 turns. <br><br>Fills this Champion’s Turn Meter by 15% for each [HP Burn] debuff placed by this skill.`,
          damage: "4*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Simmering Anger [P]",
          description: `[Passive Effect]<br><br>Every 10 times Active Skills are used in battle by either enemy or allied Champions, this Champion instantly activates the Berserker's Delight skill. This happens every 5 times Active Skills are used if Djamarsa is on the same team.<br><br>[Active Effect]<br><br>If Djamarsa is on the same team, revives this Champion with 50% HP and 50% Turn Meter when killed.`,
          cooldown: 4,
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 195",
        "ATQ": "1 564",
        "DEF": "1 002",
        "VIT": "101",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Increases Ally ACC in All Battles by 50`,
};
