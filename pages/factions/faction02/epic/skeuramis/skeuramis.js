const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Outpace",
          description: `Attacks 1 enemy. Has an 80% chance of stealing 15% of the target’s Turn Meter. Has a 20% chance of placing a [Stun] debuff for 1 turn if the target’s Turn Meter is fully depleted by this skill.`,
          damage: "0.21*HP",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Effortless Superiority",
          description: `Attacks all enemies. Decreases the duration of all enemy buffs by 1 turn. Also has a 60% chance of placing a 50% [Decrease ATK] debuff for 2 turns. <br><br>Fills this Champion’s Turn Meter by 10% for each buff that has its duration decreased.`,
          damage: "0.25*HP",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Hold the Front",
          description: `Has a 75% chance of placing a [Provoke] debuff on all enemies for 1 turn. <br><br>Places a [Counterattack] and a 15% [Continuous Heal] buff on this Champion for 2 turns.`,
          cooldown: 4,
          levelInfo: ["Level 2: Buff/Debuff Chance +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "19 980",
        "ATQ": "848",
        "DEF": "1 123",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Ally HP in all Battles by 25%`,
};
