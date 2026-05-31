const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Frostbark Blade",
          description: `Attacks 1 enemy 3 times. Each hit has a 25% chance of placing a [Freeze] debuff for 1 turn.`,
          damage: "1.2*ATK",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Razor Hail",
          description: `Attacks all enemies 2 times. Each hit has a 45% chance of placing a [Freeze] debuff for 1 turn.`,
          damage: "1.9*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Blessing of the Blue",
          description: `Places a 30% [Increase SPD] buff on all allies for 2 turns. Also fills the Turn Meters of all allies by 15%.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Snow Dancer [P]",
          description: `Fills this Champion’s Turn Meter by 5% for each [Freeze] debuff placed by this Champion.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "17 835",
        "ATQ": "1 090",
        "DEF": "1 024",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = null;
