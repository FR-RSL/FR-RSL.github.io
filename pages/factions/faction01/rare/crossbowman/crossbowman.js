const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Snap Shot",
          description: `Attacks 1 enemy. Has a 15% chance of placing an extra hit.`,
          damage: "3.5*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Sharp Eye",
          description: `Places a 30% [Increase C. RATE] buff on a target ally for 2 turns. Grants an Extra Turn.`,
          cooldown: 4,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Blunted Arrow",
          description: `Attacks 1 enemy. Has a 50% chance of placing a [Stun] debuff for 1 turn. Also has a 50% chance of placing a 30% [Decrease SPD] debuff for 2 turns.`,
          damage: "5.5*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +15%", "Level 5: Buff/Debuff Chance +15%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "13 875",
        "ATQ": "1 167",
        "DEF": "936",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
