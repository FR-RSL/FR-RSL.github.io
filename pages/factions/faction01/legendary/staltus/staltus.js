const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Axe of Glory",
          description: `Attacks 1 enemy 2 times. If the target is under any debuff, each hit decreases the target's Turn Meter by 10%.`,
          damage: "1.9*DEF",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Drakehunter Tactics",
          description: `Attacks all enemies 2 times. Each hit has a 50% chance of placing a [Stun] debuff for 1 turn.`,
          damage: "2.1*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +15%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Dragon Heart",
          description: `Places a 60% [Increase DEF] buff on this Champion for 3 turns, then attacks all enemies. <br><br>Has a 75% chance of placing a 25% [Decrease C. DMG] debuff for 2 turns on enemies whose ATK is higher than their DEF. <br><br>Has a 75% chance of placing a 30% [Decrease SPD] debuff for 2 turns on enemies whose ATK is equal to or lower than their DEF.`,
          damage: "4*DEF",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Untarnished [P]",
          description: `Whenever an enemy attempts to place a [Weaken] debuff, a [Decrease DEF] debuff, or a [Poison] debuff on this Champion, reflects them back onto the attacker. Damage increases by 5% for each debuff on the target.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "20 805",
        "ATQ": "738",
        "DEF": "1 454",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Increases Ally DEF in all Battles by 30%`,
};
