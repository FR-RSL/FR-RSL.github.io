const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Necrotic Toxin",
          description: `Attacks 1 enemy. Has a 45% chance of placing a 100% [Heal Reduction] debuff for 2 turns.`,
          damage: "4*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Mark for Death",
          description: `Attacks 1 enemy. Places a 25% [Weaken] debuff on the target for 3 turns if the target has a [Decrease DEF] debuff. This debuff cannot be resisted.`,
          damage: "6.2*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Finisher",
          description: `Attacks all enemies. Places a 50% [Increase ATK] buff on this Champion for 2 turns before attacking. Also has a 50% chance of placing a 60% [Decrease DEF] debuff on the target for 2 turns before attacking.`,
          damage: "4*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +15%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +15%", "Level 5: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 350",
        "ATQ": "1 299",
        "DEF": "914",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Increases Ally ATK in Faction Wars by 27%`,
};
