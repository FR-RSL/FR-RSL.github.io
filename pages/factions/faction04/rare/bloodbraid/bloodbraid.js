const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Enraging Prowess",
          description: `Attacks 1 enemy. Has a 25% chance of placing a [Provoke] debuff for 1 turn.`,
          damage: "4.2*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Damage +15%", "Level 6: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Tireless Assault",
          description: `Attacks 1 enemy 3 times. Has a 25% chance of granting an Extra Turn.`,
          damage: "2.3*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +15%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Lifecurse",
          description: `Attacks 1 enemy. Places a 100% [Heal Reduction] debuff for 2 turns. Heals this Champion by 30% of the damage dealt.<br><br><br>Heal Multiplier: 0.3*DMG`,
          damage: "6.8*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +15%", "Level 5: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "19 650",
        "ATQ": "892",
        "DEF": "826",
        "VIT": "89",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = null;
