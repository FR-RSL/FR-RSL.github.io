const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Death Dive",
          description: `Attacks 1 enemy. Has a 30% chance of placing a 25% [Weaken] debuff for 2 turns. The chance increases to 50% if the target is under a [Hex] debuff. <br><br>Places a [Perfect Veil] buff on this Champion for 1 turn if this attack kills an enemy under a [Hex] debuff.`,
          damage: "3.5*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Feather Barrage",
          description: `Places a 30% [Increase C. RATE] buff and a 30% [Increase C. DMG] buff on this Champion for 2 turns, then attacks all enemies. Has a 75% chance of placing a [Block Active Skills] debuff for 2 turns on targets under [Hex] debuffs.`,
          damage: "4.5*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +15%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Sky Punishment",
          description: `Places a 50% [Increase ACC] buff on this Champion for 2 turns, then attacks all enemies. Has a 75% chance of placing a [Hex] debuff for 3 turns.<br><br>Has a 100% chance of placing a [Fear] debuff for 1 turn instead on enemies under [Hex] debuffs.`,
          damage: "4.7*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Countermand [P]",
          description: `Counterattacks with the default skill every time this Champion loses 30% HP or more in a single turn. Always counterattacks when attacked if 2 or more allies are dead.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "14 535",
        "ATQ": "1 531",
        "DEF": "1 079",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = null;
