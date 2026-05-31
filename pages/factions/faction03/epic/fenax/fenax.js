const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Put Down",
          description: `Attacks 1 enemy. Places an extra hit if the target has any debuffs. Enemies killed by this skill cannot be revived.`,
          damage: "4.1*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Stern Partner",
          description: `Attacks all enemies. Has a 75% chance of placing a [Block Buffs] debuff for 2 turns. Places a [Block Active Skills] debuff for 1 turn if this Skill does not place a [Block Buffs] debuff.<br><br>[Decreases [Bomb] debuff detonation countdowns by 1 turn when Tallia is on the same team.]`,
          damage: "3.5*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Sow Feebleness",
          description: `Attacks 1 enemy. Has a 60% chance of placing a 60% [Decrease DEF] debuff and a 30% [Decrease SPD] debuff for 2 turns.`,
          damage: "6.7*ATK",
          cooldown: 6,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Cooldown -1", "Level 6: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "13 875",
        "ATQ": "1 454",
        "DEF": "925",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
