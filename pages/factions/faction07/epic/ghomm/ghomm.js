const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Bone Club Bash",
          description: `Attacks 1 enemy 2 times. <br><br>The first hit has a 30% chance of placing a [Leech] debuff for 2 turns. The second hit has a 30% chance of placing a 100% [Heal Reduction] debuff for 2 turns.`,
          damage: "2.3*ATK",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Unspoken Bonds",
          description: `Places a 30% [Increase SPD] buff on all allies for 2 turns. Also places а 15% [Continuous Heal] buff on all allies for 1 turn.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Yellowhand Clobber",
          description: `Attacks all enemies. <br><br>Decreases the Turn Meters of all enemies by 15%. <br><br>Has a 50% chance of placing a [Stun] debuff on all enemies for 1 turn.`,
          damage: "3.3*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Pastoral Protector [P]",
          description: `Whenever an ally is attacked, fills this Champion's Turn Meter by 5% (once per attacked ally).`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "17 175",
        "ATQ": "1 167",
        "DEF": "991",
        "VIT": "104",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Increases Ally ATK in All Battles by 25%`,
};
