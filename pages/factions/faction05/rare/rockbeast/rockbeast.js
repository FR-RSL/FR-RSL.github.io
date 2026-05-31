const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Club",
          description: `Attacks 1 enemy. Has a 50% chance of placing a [Provoke] debuff for 1 turn. Damage increases according to this Champion's MAX HP.`,
          damage: "1.5*ATK+0.15*HP",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Damage +10%", "Level 6: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Hunker Down",
          description: `Fills the Turn Meter by 50%. Places a 60% [Increase DEF] buff on this Champion for 3 turns.`,
          cooldown: 4,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Bellow",
          description: `Attacks all enemies. Has a 75% chance of placing a 30% [Decrease SPD] debuff for 1 turn.`,
          damage: "4.5*ATK",
          cooldown: 6,
          levelInfo: ["Level 2: Buff/Debuff Chance +5%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Cooldown -1", "Level 7: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "19 485",
        "ATQ": "892",
        "DEF": "837",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/crit.webp",
  description: `Increases Ally C.RATE in Arena by 16%`,
};
