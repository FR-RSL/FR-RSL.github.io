const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Unflagging Advance",
          description: `Attacks 1 enemy 2 times. Fills this Champion's Turn Meter by 10%.`,
          damage: "DEF+ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +10%", "Level 6: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Spectacular Sweep",
          description: `Attacks all enemies, then heals all allies by 15% of this Champion's MAX HP.<br><br><br>Heal Multiplier: 0.15*HP`,
          damage: "0.12*HP+2*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Heal +5%", "Level 3: Heal +5%", "Level 4: Damage +5%", "Level 5: Heal +10%", "Level 6: Heal +15%", "Level 7: Damage +15%", "Level 8: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Combat Tactics",
          description: `Decreases the cooldowns of all ally skills by 1 turn. This skill can have its cooldown reduced by other skills that reduce cooldowns by 1 turn.`,
          cooldown: 7,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1", "Level 4: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "19 320",
        "ATQ": "969",
        "DEF": "771",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Ally HP in Faction Wars by 21%`,
};
