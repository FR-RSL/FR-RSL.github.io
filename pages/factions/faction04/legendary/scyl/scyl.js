const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Drake's Swiftness",
          description: `Attacks 1 enemy. Has a 20% chance of placing a 30% [Decrease SPD] debuff for 2 turns. Also has a 30% chance of decreasing the target's Turn Meter by 15%.`,
          damage: "3.5*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Wingbeat Flurry",
          description: `Attacks all enemies 2 times. Each hit has a 20% chance of placing a [Stun] debuff for 1 turn.`,
          damage: "1.55*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Phoenix Rite",
          description: `Revives an ally with 50% HP and places a 50% [Ally Protection] buff on them for 2 turns.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Boundless Life [P]",
          description: `Heals all allies by 10% of their MAX HP at the start of each turn. Also places a 30% [Increase SPD] buff on a random ally for 2 turns.<br><br>Heal Multiplier: 0.1*Target Max HP`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "19 980",
        "ATQ": "859",
        "DEF": "1 387",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = null;
