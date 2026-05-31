const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Humble",
          description: `Attacks 1 enemy 2 times. Each hit has a 40% chance of placing a 50% [Decrease ATK] debuff for 2 turns. Damage inflicted is proportional to DEF.`,
          damage: "1.7*DEF",
          levelInfo: ["Level 2: Buff/Debuff Chance +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Damage +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Singing Steel",
          description: `Attacks all enemies. Has a 75% chance of placing a 60% [Decrease DEF] debuff for 2 turns. If the target is under a [Decrease ATK] debuff, it will place a [Sleep] debuff for 1 turn. Damage inflicted is proportional to DEF.`,
          damage: "3.5*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Preemptive Strike",
          description: `Attacks 1 enemy. Decreases the target's Turn Meter by 50%. If the attack fully depletes the Turn Meter, it will place a [Stun] debuff for 2 turns. Damage inflicted is proportional to DEF.`,
          damage: "5.3*DEF",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 185",
        "ATQ": "881",
        "DEF": "1 343",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Increases Ally DEF in all Battles by 25%`,
};
