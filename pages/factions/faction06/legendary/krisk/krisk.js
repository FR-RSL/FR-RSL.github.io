const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Enter the Morass",
          description: `Attacks all enemies. Has a 30% chance of placing a 30% [Decrease SPD] debuff for 2 turns.`,
          damage: "2*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Centuried Vigor",
          description: `Attacks all enemies. Places a 50% [Ally Protection] buff on all allies except this Champion for 2 turns. Places two 15% [Continuous Heal] buffs on this Champion for 1 turn. Increases the duration of all ally buffs by 1 turn.`,
          damage: "3*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Damage +10%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Invincible Shell",
          description: `Places a [Provoke] debuff on all enemies for 1 turn. <br>Places a 60% [Increase DEF] buff on this Champion for 2 turns. Places a 30% [Increase SPD] buff on all allies except this Champion for 2 turns.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Might of Ages [P]",
          description: `At the start of each Round, places a [Shield] buff on all allies for 2 turns equal to 50% of this Champion’s MAX HP. Has a 75% chance of placing a 60% [Decrease DEF] debuff and a 50% [Decrease ATK] debuff on the attacker for 1 turn when hit.<br><br><br>Shield Multiplier: 0.5*HP`,
          levelInfo: ["Level 2: Buff/Debuff Chance +5%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +10%"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "19 485",
        "ATQ": "760",
        "DEF": "1 520",
        "VIT": "94",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "10"
      },
};

const aura = null;
