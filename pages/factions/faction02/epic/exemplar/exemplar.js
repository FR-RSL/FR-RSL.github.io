const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "High Stance",
          description: `Attacks 1 enemy 2 times. Places an extra hit if this attack is critical. <br><br>Puts one of target's skills on full cooldown if the first hit is critical and the target is under a [Weaken] debuff. <br><br>Increases the cooldown of one of the target's skills by 2 turns if the first hit is critical and the target is not under a [Weaken] debuff.`,
          damage: "1.7*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Pincer Attack",
          description: `Attacks 3 times at random. Each hit has a 75% chance of placing a 25% [Weaken] debuff for 2 turns.`,
          damage: "2.1*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Buff/Debuff Chance +5%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Cooldown -1", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Capture",
          description: `Attacks 1 enemy. Has a 75% chance of placing a [Freeze] debuff for 1 turn and a [Block Active Skills] debuff for 2 turns.`,
          damage: "6.4*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Buff/Debuff Chance +5%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "13 545",
        "ATQ": "1 509",
        "DEF": "892",
        "VIT": "94",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/crit.webp",
  description: `
Increases Ally C.RATE in Arena by 27%`,
};
