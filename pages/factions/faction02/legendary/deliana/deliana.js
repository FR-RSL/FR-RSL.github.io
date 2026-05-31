const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Heart Stealer",
          description: `Attacks all enemies. Has a 50% chance of placing a [Leech] debuff for 2 turns.`,
          damage: "0.22*HP",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Withering Scorn",
          description: `Attacks 1 enemy. Has a 75% chance of placing a 50% [Decrease RES] debuff for 2 turns. <br><br>If the target is under a [Block Buffs] debuff, also applies a [Debuff Spread] effect, taking any [Decrease RES] debuff on the target and placing it on all enemies.`,
          damage: "0.35*HP",
          cooldown: 4,
          levelInfo: ["Level 2: Buff/Debuff Chance +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +15%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Know Your Place",
          description: `Attacks all enemies. Has a 75% chance of placing a [Block Buffs] debuff on each enemy for 2 turns. <br><br>Heals all allies by 5% of their MAX HP for each [Block Buffs] debuff placed by this skill. <br><br>Fills this Champion’s Turn Meter by 10% for each [Block Buffs] debuff attempt blocked or resisted by the enemy team.<br><br><br>Heal Multiplier: 0.05*Target Max HP`,
          damage: "0.3*HP",
          cooldown: 5,
          levelInfo: ["Level 2: Buff/Debuff Chance +10%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +15%", "Level 5: Damage +10%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Magnificent [P]",
          description: `[Passive Effect] <br><br>Increases this Champion’s ACC by 2 for every 1,000 HP this Champion has. <br><br>[Active Effect]<br><br>Places a 25% [Strengthen] buff on all allies for 2 turns every time this Champion’s HP drops below 50%.`,
          cooldown: 4,
          isPassive: true
        }
      ],
  stats: {
        "PV": "20 475",
        "ATQ": "1 002",
        "DEF": "1 211",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "30"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Ally HP in all Battles by 33%`,
};
