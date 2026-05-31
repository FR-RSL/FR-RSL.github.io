const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Exemplar of Skill",
          description: `Attacks all enemies. Has a 50% chance of placing a 25% [Weaken] debuff for 2 turns. This debuff cannot be resisted.`,
          damage: "2.4*ATK",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Putrescence",
          description: `Attacks all enemies. Has a 75% chance of placing three 5% [Poison] debuffs for 2 turns. These debuffs cannot be resisted. <br><br>Also increases the duration of all enemy debuffs by 1 turn. This effect cannot be resisted.`,
          damage: "4.6*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +15%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Arcane Havoc",
          description: `Attacks all enemies. Places a 50% [Increase ACC] buff on all allies for 2 turns before attacking. <br><br>Also has a 75% chance of placing a 50% [Decrease RES] debuff on all enemies for 2 turns. This debuff cannot be resisted. Fills this Champion’s Turn Meter by 10% for each [Decrease RES] debuff placed by this skill.`,
          damage: "4.4*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +15%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Degrade [P]",
          description: `Decreases each target’s ACC, C.RATE, and C.DMG by 3% for each [Poison] debuff on them. If there are multiple Champions on the team with this skill, only one will activate. This skill will not activate on duplicate copies of this Champion, if this particular Champion is dead.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 855",
        "ATQ": "1 531",
        "DEF": "991",
        "VIT": "110",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
