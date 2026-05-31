const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Majestic Staff",
          description: `Attacks 1 enemy. If the hit is critical, places a 25% [Increase ATK] buff on a random ally for 1 turn.`,
          damage: "4.1*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Anoint",
          description: `Revive on Death Places a [Revive On Death] buff and a 30% [Reflect Damage] buff on a target ally for 2 turns. Heals all other allies by 10% of the target's HP.<br><br><br>Heal Multiplier: 0.1*Target Max HP`,
          cooldown: 4,
          levelInfo: ["Level 2: Heal +5%", "Level 3: Heal +5%", "Level 4: Heal +10%", "Level 5: Heal +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Censure",
          description: `Attacks all enemies. Has a 50% chance of placing a 50% [Heal Reduction] debuff for 2 turns.`,
          damage: "4*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "18 000",
        "ATQ": "892",
        "DEF": "936",
        "VIT": "101",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Ally HP in Faction Wars by 22%`,
};
