const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Dripping Doom",
          description: `Attacks 1 enemy. Has a 50% chance of placing a 5% [Poison] debuff for 2 turns.`,
          damage: "3.5*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Boil From Within",
          description: `Attacks 1 enemy. Has a 75% chance of placing two 5% [Poison] debuffs and a 25% [Poison Sensitivity] debuff for 2 turns.`,
          damage: "5.1*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Vigor Bloom",
          description: `Places a 60% [Increase DEF] buff and a 50% [Increase ATK] buff on all allies for 2 turns.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Irradiate [P]",
          description: `When attacked, has a 50% chance of increasing the duration of all [Poison] debuffs on the attacker by 1 turn.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "17 010",
        "ATQ": "1 123",
        "DEF": "1 046",
        "VIT": "101",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = null;
