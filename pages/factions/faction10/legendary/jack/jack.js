const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Harvest of Fear",
          description: `Attacks 1 enemy 3 times. Each hit has a 50% chance of stealing 1 random buff from the target.<br><br>Each hit also has a 50% chance of placing a [Fear] debuff for 1 turn.<br><br>This chance increases to 100% if the target has no active buffs.`,
          damage: "0.06*HP",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Dreams to Ash",
          description: `Attacks all enemies. <br><br>Removes all buffs from each target. Then places a 50% [Decrease ATK] debuff and a [Block Buffs] debuff on all enemies for 2 turns.<br><br>Then grants an Extra Turn.`,
          damage: "0.16*HP",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Lord of Terror",
          description: `Attacks all enemies. Has a 75% chance of placing a [True Fear] debuff for 2 turns.<br><br>Also places a 30% [Decrease SPD] debuff for 2 turns and decreases each target's Turn Meter by 30% if the [True Fear] debuff is placed. <br><br>Has a 75% chance of placing an unresistable [Sleep] debuff for 1 turn if the [True Fear] debuff is not placed. Also decreases each target’s Turn Meter by 30%.`,
          damage: "0.21*HP",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Leering Grin [P]",
          description: `Whenever an ally is attacked, has a 50% chance of decreasing the duration of all buffs on the attacker by 1 turn. Whenever this Champion is attacked, the chance increases to 100%. This Champion is immune to [Fear] debuffs.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "26 925",
        "ATQ": "859",
        "DEF": "925",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "20"
      },
};

const aura = null;
