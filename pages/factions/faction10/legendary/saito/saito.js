const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Unbearable Assault",
          description: `Attacks 1 enemy 2 times. Has a 50% chance of placing a 60% [Decrease DEF] debuff for 2 turns after the first hit. Places an extra hit if the [Decrease DEF] debuff is placed.`,
          damage: "1.35*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Enduring Warrior",
          description: `Attacks 1 enemy. Before attacking, places a 50% [Increase ATK] buff and a 30% [Increase C. DMG] buff on this Champion for 2 turns if this Champion's DEF is higher than the target's DEF. Decreases the cooldown of this Skill by 1 turn if the target has more than 50% HP after the attack.`,
          damage: "6.1*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Army Breaker",
          description: `Attacks 1 enemy, then attacks all enemies except the initial target if there are 3 or more enemies alive.<br><br>Inflicts 20% more damage on the first hit if the target has higher MAX HP than this Champion.`,
          damage: "7*ATKMultiplier: 4.5*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Vendetta [P]",
          description: `Will ignore 7.5% of enemy DEF for each time this Champion attacks the same target enemy in consecutive attacks or Turns. Stacks up to 30%. <br><br>The stack will be lost and reset if this Champion targets and attacks a different enemy.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "16 185",
        "ATQ": "1 321",
        "DEF": "1 178",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Increases Ally ATK in Dungeons by 30%`,
};
