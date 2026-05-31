const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Seeker Bolts",
          description: `Attacks 2 times at random. Heals all allies by 3% of this Champion's HP with each hit on targets under [Decrease SPD] debuffs.<br><br><br>Heal Multiplier: 0.03*HP`,
          damage: "1.65*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Spiteful Cut",
          description: `Attacks 1 enemy. Has a 50% chance of placing a 30% [Decrease SPD] debuff on the target for 2 turns. Has a 50% chance of placing a 30% [Decrease SPD] debuff on all enemies for 2 turns instead if this attack is critical.`,
          damage: "4.3*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Buff/Debuff Chance +15%", "Level 7: Buff/Debuff Chance +15%", "Level 8: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Unbreakable [P]",
          description: `Decreases the damage all allies receive by 5%. This Champion will receive that damage instead. If there are multiple Champions in the team with this Skill, only one will activate.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "17 010",
        "ATQ": "1 189",
        "DEF": "980",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Ally HP in Faction Wars by 30%`,
};
