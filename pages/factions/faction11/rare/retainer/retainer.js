const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Sundering Chop",
          description: `Attacks 1 enemy. Has a 40% chance of placing a 30% [Decrease DEF] debuff for 2 turns.`,
          damage: "3.2*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Resolute Stance",
          description: `Heals this Champion by 40% of their MAX HP and places a [Counterattack] buff on this Champion for 2 turns.<br><br><br>Heal Multiplier: 0.4*HP`,
          cooldown: 4,
          levelInfo: ["Level 2: Heal +5%", "Level 3: Heal +5%", "Level 4: Heal +5%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Hypnotize",
          description: `Attacks 1 enemy. Decreases the target's Turn Meter by 50%. If the target's Turn Meter is fully depleted, places a [Sleep] debuff on them for 1 turn.`,
          damage: "4.7*DEF",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Damage +10%", "Level 6: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 185",
        "ATQ": "672",
        "DEF": "1 277",
        "VIT": "93",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Increases Ally DEF in Faction Wars by 19%`,
};
