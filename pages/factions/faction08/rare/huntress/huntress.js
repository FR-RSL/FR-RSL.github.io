const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Curved Shot",
          description: `Attacks 1 enemy 2 times. Has a 15% chance of placing a [Stun] debuff for 1 turn.`,
          damage: "1.7*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Incinerate",
          description: `Attacks 1 enemy. Has a 50% chance of placing a 25% [Weaken] debuff for 2 turns.`,
          damage: "5.2*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1", "Level 7: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Whisper",
          description: `Places a 15% [Increase C. RATE] buff and a 50% [Increase ATK] buff on this Champion for 2 turns.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "11 895",
        "ATQ": "1 310",
        "DEF": "925",
        "VIT": "94",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
