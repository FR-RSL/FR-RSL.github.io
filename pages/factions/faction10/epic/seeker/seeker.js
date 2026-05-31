const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Devour",
          description: `Attacks 1 enemy 2 times. Has a 25% chance of placing a [Provoke] debuff for 1 turn.`,
          damage: "2.2*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Damage +10%", "Level 7: Buff/Debuff Chance +10%", "Level 8: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Tailwind",
          description: `Fills the Turn Meter of all allies by 30%. Places a 50% [Increase ATK] buff on all allies for 2 turns. Grants an Extra Turn.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Dark Blood [P]",
          description: `Heals this Champion by 20% HP and places a 60% [Increase DEF] buff on all allies for 2 turns when hit with a critical hit.<br><br>Heal Multiplier: 0.2*HP`,
          cooldown: 5,
          isPassive: true
        }
      ],
  stats: {
        "PV": "16 845",
        "ATQ": "1 002",
        "DEF": "1 178",
        "VIT": "103",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Increases Ally DEF in Arena by 30%`,
};
