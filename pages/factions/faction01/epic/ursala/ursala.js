const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Lance of Penitence",
          description: `Attacks 1 enemy. Has a 40% chance of decreasing the target's Turn Meter by 10%.`,
          damage: "3.4*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Waves of Grief",
          description: `Attacks all enemies. Has a 75% chance of placing a 50% [Decrease ATK] debuff for 2 turns. Also places a 50% [Increase ATK] buff on all allies for 2 turns.`,
          damage: "3.2*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Buff/Debuff Chance +5%", "Level 7: Buff/Debuff Chance +5%", "Level 8: Buff/Debuff Chance +10%", "Level 9: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Requiem",
          description: `Revives all dead allies with 75% HP, then fills their Turn Meters by 50%. Also places a 60% [Increase DEF] buff and a 25% [Strengthen] buff on all allies for 3 turns.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "18 000",
        "ATQ": "1 167",
        "DEF": "936",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Increases Ally SPD in Doom Tower by 24%`,
};
