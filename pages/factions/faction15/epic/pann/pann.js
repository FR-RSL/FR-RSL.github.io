const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Cryoslash",
          description: `Attacks 1 enemy 2 times. Each hit has a 30% chance of placing a [Freeze] debuff for 1 turn. <br><br>Will ignore 50% of the target’s RES if the target’s SPD is equal to or less than this Champion’s SPD.`,
          damage: "2*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Emerald Salvo",
          description: `Attacks all enemies. Before attacking, places a 50% [Increase ATK] buff and a 30% [Increase SPD] buff on this Champion for 3 turns.`,
          damage: "3.8*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Woodland Specter",
          description: `Attacks 1 enemy 3 times. Each hit will ignore 10% of the target’s DEF. <br><br>Each hit also has a 75% chance of placing a [True Fear] debuff for 2 turns. <br><br>Will ignore 50% of the target’s RES if the target’s SPD is equal to or less than this Champion’s SPD. <br><br>If the target is a Boss, has a 75% chance of placing a 25% [Weaken] debuff for 2 turns instead. Will ignore 50% of the target’s RES if the target’s SPD is equal to or less than this Champion's SPD.`,
          damage: "1.9*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 370",
        "ATQ": "1 443",
        "DEF": "903",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Increases Ally SPD in Dungeons by 20%`,
};
