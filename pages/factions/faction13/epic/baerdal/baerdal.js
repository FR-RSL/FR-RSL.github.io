const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Ensorcelled Axe",
          description: `Attacks 1 enemy 2 times. Each hit has a 30% chance of placing a 100% [Heal Reduction] debuff for 2 turns.`,
          damage: "2.1*ATK",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Fey Protection",
          description: `Attacks 1 enemy 3 times. Each hit has a 75% chance of placing a 60% [Decrease DEF] debuff for 2 turns if the target is under a [Heal Reduction] debuff. Places a [Shield] buff on this Champion for 3 turns equal to 30% of the damage inflicted.<br><br><br>Shield Multiplier: 0.3*Damage Dealt`,
          damage: "1.8*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +10%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Paranoia [P]",
          description: `Places a [Counterattack] buff on this Champion for 1 turn at the start of each Round. Places a [Counterattack] buff on this Champion for 1 turn at the end of their turn.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "16 185",
        "ATQ": "1 398",
        "DEF": "826",
        "VIT": "94",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "60",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Increases Ally ATK in Dungeons by 32%`,
};
