const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Great Hammer",
          description: `Attacks 1 enemy. Resets the cooldown of the Devastator skill if this attack kills an enemy.`,
          damage: "3.2*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +10%", "Level 6: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Devastator",
          description: `Attacks 1 enemy. Has a 65% chance of placing a [Stun] debuff for 1 turn. Decreases the Turn Meters of all enemies by 10% if this attack is critical.`,
          damage: "5*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Damage +10%", "Level 7: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Backbreaker",
          description: `Attacks all enemies. Has a 75% chance of placing a 15% [Weaken] debuff for 2 turns.`,
          damage: "3.5*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Buff/Debuff Chance +10%", "Level 7: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "10 905",
        "ATQ": "1 498",
        "DEF": "804",
        "VIT": "103",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Increases Ally SPD in All Battles by 12%`,
};
