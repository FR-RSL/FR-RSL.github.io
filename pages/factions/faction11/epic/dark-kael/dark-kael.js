const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Weaver of Woes",
          description: `Attacks 1 enemy 3 times. Each hit has a 25% chance to instantly activate 2 [Poison] debuffs or 1 [Poison] debuff and 1 [HP Burn] debuffs.`,
          damage: "1.35*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Binding Darkness",
          description: `Attacks all enemies. Has a 75% chance of placing a 50% [Decrease ATK] debuff for 2 turns. Each critical hit also has a 75% chance of increasing the duration of all debuffs on the target by 1 turn.`,
          damage: "4*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Reality Acid",
          description: `Has a 75% chance of placing three 5% [Poison] debuffs and a 25% [Poison Sensitivity] debuff on the target for 2 turns.`,
          cooldown: 4,
          levelInfo: ["Level 2: Buff/Debuff Chance +10%", "Level 3: Buff/Debuff Chance +15%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Delerium [P]",
          description: `Decreases the C. RATE of enemies under 2 or more [Poison] debuffs by 15%.<br><br>If there are multiple Champions on the team with this skill, only one will activate. This skill will not activate on duplicate copies of this Champion, if this particular Champion is dead.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "14 205",
        "ATQ": "1 343",
        "DEF": "1 013",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = null;
