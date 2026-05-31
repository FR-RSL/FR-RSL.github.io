const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Sear The Meat",
          description: `Attacks 1 enemy 2 times. <br><br>Each hit has an 80% chance of placing a 100% [Heal Reduction] debuff for 2 turns. <br><br>Teams up with 1 random ally from the Ogryn Tribes Faction. The ally joining the attack will use their default skill.`,
          damage: "2.8*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Blisterblast",
          description: `Attacks all enemies. <br><br>Has a 75% chance of placing a 50% [Decrease ACC] debuff and a 25% [Weaken] debuff for 2 turns. <br><br>Increases the duration of all [Continuous Heal] buffs on all allies by 1 turn.`,
          damage: "5.2*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Warbeat Rhythm",
          description: `Restores 50% of each ally's destroyed MAX HP. <br><br>Places a 30% [Reflect Damage] buff and a 15% [Continuous Heal] buff on all allies for 2 turns.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "House Special [P]",
          description: `Whenever a [Continuous Heal] buff is activated on an ally, has a 25% chance to decrease the duration of all debuffs on that ally by 1 turn.`,
          levelInfo: ["Level 2: Buff/Debuff Chance +10%", "Level 3: Buff/Debuff Chance +15%"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "21 480",
        "ATQ": "903",
        "DEF": "1 244",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "20"
      },
};

const aura = null;
