const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Axe Frenzy",
          description: `Attacks 1 enemy 2 times. Has an 80% chance of ignoring 15% of the target’s DEF if this Champion has 50% HP or higher. Has a 10% chance of placing a [Stun] debuff for 1 turn if this Champion has less than 50% HP.`,
          damage: "2*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Damage +5%", "Level 7: Buff/Debuff Chance +5%", "Level 8: Damage +5%", "Level 9: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Dwarven Fortitude",
          description: `Places an [Unkillable] buff on this Champion for 2 turns.`,
          cooldown: 7,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Hatchets For All [P]",
          description: `Has a 5% chance of counterattacking when hit. Has a 25% chance of counterattacking when hit with a critical hit.`,
          levelInfo: ["Level 2: Buff/Debuff Chance +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Buff/Debuff Chance +5%"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "10 575",
        "ATQ": "1 321",
        "DEF": "1 002",
        "VIT": "93",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
