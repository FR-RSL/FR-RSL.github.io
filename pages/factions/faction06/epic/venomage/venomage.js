const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Toxicity",
          description: `Attacks 1 enemy 2 times. Destroys the target’s MAX HP by 75% of the damage inflicted if they are under a [Heal Reduction] debuff.<br><br>Each hit has a 35% chance of activating up to two [Poison] debuffs on the target.`,
          damage: "2.4*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Neurotoxin",
          description: `Attacks 1 enemy. Has a 75% chance of placing a 60% [Decrease DEF] debuff for 2 turns. Also has a 75% chance of placing a 50% [Decrease ATK] debuff for 2 turns if the target is under a [Poison] debuff.`,
          damage: "6*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +15%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Fleshmelter Venom",
          description: `Attacks all enemies. Has a 75% chance of placing a 100% [Heal Reduction] debuff for 3 turns. Also has a 75% chance of placing two 5% [Poison] debuffs for 2 turns.`,
          damage: "4*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +15%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Pain Writhe [P]",
          description: `Enemies under [Heal Reduction] debuffs inflict 15% less damage.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "17 175",
        "ATQ": "1 002",
        "DEF": "1 156",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Increases Ally ACC in All Battles by 45`,
};
