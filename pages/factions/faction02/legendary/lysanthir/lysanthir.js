const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Echobolt",
          description: `Attacks 1 enemy 2 times. <br><br>The first hit has a 75% chance to place a [Hex] debuff on the target for 2 turns. <br><br>Places a 30% [Increase C. DMG] buff on this Champion for 2 turns.`,
          damage: "1.55*DEF",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Wily Hunter",
          description: `Attacks 1 enemy 2 times. Has a 20% chance of repeating the attack. <br><br>When this Champion counterattacks or teams up with allies to join an attack, will use this skill instead of their default skill. The damage inflicted with this skill increases by 10% each time an ally is devoured (stacks up to 50%).`,
          damage: "2.5*DEF",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +20%", "Level 3: Cooldown -1", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Runed Snares",
          description: `Attacks all enemies 2 times. <br><br>Each hit has a 75% chance of placing a 30% [Decrease SPD] debuff and a 25% [Weaken] debuff for 2 turns. If a target is under a [Hex] debuff, places these debuffs before attacking.`,
          damage: "1.9*DEF",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +20%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +15%", "Level 5: Cooldown -1", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Survivalist Supreme [P]",
          description: `Will ignore [Life Barrier] and [Ally Protection] buffs. <br><br>Increases this Champion’s DEF by 5% for each active buff on this Champion (stacks up to 50%).`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 000",
        "ATQ": "837",
        "DEF": "1 542",
        "VIT": "103",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Increases Ally DEF in all Battles by 28%`,
};
