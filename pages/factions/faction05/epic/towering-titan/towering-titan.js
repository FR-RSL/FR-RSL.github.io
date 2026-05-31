const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Shieldsplitter",
          description: `Attacks 1 enemy. Has a 40% chance of placing a 60% [Decrease DEF] debuff for 2 turns.`,
          damage: "0.2*HP",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Flailing Assault",
          description: `Attacks 4 times at random. The first hit has a 100% chance of placing a [Provoke] debuff for 1 turn. Each of the other hits has a 50% chance of placing a [Provoke] debuff for 1 turn.`,
          damage: "0.08*HP",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Bullish Vitality",
          description: `Places a 60% [Increase DEF] buff on all allies for 2 turns. Places a 15% [Continuous Heal] buff on this Champion for 2 turns, as well as a [Shield] buff on this Champion equal to 30% of their MAX HP for 3 turns. Grants an Extra Turn.<br><br><br>Shield Multiplier: 0.3*HP`,
          cooldown: 5,
          levelInfo: ["Level 2: Shield +5%", "Level 3: Shield +5%", "Level 4: Shield +10%", "Level 5: Shield +10%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Battle Brothers [P]",
          description: `Will transfer 50% of the damage inflicted on Cagebreaker to this Champion during battle.<br><br>[Only available when Cagebreaker is on the same team. If multiple Cagebreakers are on the team, this Champion will only transfer the damage from one of them.]`,
          cooldown: 2,
          isPassive: true
        }
      ],
  stats: {
        "PV": "23 790",
        "ATQ": "760",
        "DEF": "958",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Ally HP in All Battles by 25%`,
};
