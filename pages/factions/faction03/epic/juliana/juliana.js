const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Battledance",
          description: `Attacks 1 enemy 2 times. Each critical hit fills this Champion's Turn Meter by 10%.`,
          damage: "2.4*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Lethal Partner",
          description: `Places a 30% [Increase C. RATE] buff on this Champion for 2 turns, then attacks 1 enemy 2 times. Places a 5% [Poison] debuff on the target for 3 turns if this attack is critical.<br><br>[Will ignore 50% of the target's DEF when Romero is on the same team.]`,
          damage: "3*ATK",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Fire of Purgation",
          description: `Attacks 1 enemy. Removes all buffs from the target. Has a 75% chance of placing a [HP Burn] debuff for 3 turns.`,
          damage: "6*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Buff/Debuff Chance +5%", "Level 7: Buff/Debuff Chance +5%", "Level 8: Buff/Debuff Chance +5%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 360",
        "ATQ": "1 398",
        "DEF": "881",
        "VIT": "103",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/crit.webp",
  description: `Increases Ally C.RATE in Arena by 20%`,
};
