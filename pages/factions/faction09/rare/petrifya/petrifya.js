const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Flint Hail",
          description: `Attacks 1 enemy 2 times. Each hit has a 20% chance of placing a 30% [Decrease DEF] debuff for 2 turns. <br><br>If the target is under a [Poison Sensitivity] debuff placed by this Champion, each hit has a 20% chance of placing a 60% [Decrease DEF] debuff for 2 turns instead.`,
          damage: "1.9*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Desiccation",
          description: `Attacks all enemies 2 times. <br><br>The first hit has a 75% chance of placing a 25% [Decrease ATK] debuff for 2 turns. The second hit has a 50% chance of placing a 5% [Poison] debuff for 2 turns.`,
          damage: "2*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Rot Pulse",
          description: `Attacks 3 times at random. Each hit has a 25% chance of placing a 25% [Poison Sensitivity] debuff for 2 turns. If all hits land on the same target, also places a 5% [Poison] debuff for 2 turns.`,
          damage: "2.1*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "13 380",
        "ATQ": "1 288",
        "DEF": "848",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Increases Ally ACC in All Battles by 30`,
};
