const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Thornblade",
          description: `Attacks 1 enemy 2 times. <br><br>Each hit has a 30% chance of placing a [Provoke] debuff for 1 turn. Each hit also heals the ally with the lowest HP by 3% of this Champion’s MAX HP.<br><br><br>Heal Multiplier: 0.03*HP`,
          damage: "0.1*HP",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Gallant Knave",
          description: `Attacks all enemies. <br><br>Has a 75% chance of stealing 2 random buffs from each target. <br><br>Places a 15% [Continuous Heal] buff on all allies except this Champion for 2 turns. Also places an [Unkillable] buff and a [Taunt] buff on this Champion for 2 turns.`,
          damage: "0.24*HP",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Stout Defense",
          description: `Swaps HP with a target enemy, and places a 100% [Heal Reduction] on that enemy for 2 turns. This debuff cannot be removed, transferred, or have its duration decreased by enemies.<br><br>Then equalizes the HP levels of all allies. The HP levels of all allies will be brought up to the level of the ally with the highest HP. <br><br>Also places a 60% [Increase DEF] buff on all allies for 2 turns.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Eternal Sentinel [P]",
          description: `At the start of this Champion’s turn, fully restores this Champion’s destroyed MAX HP. <br><br>When attacked, destroys the attacker's MAX HP by 20% of the damage received (stacks up to 50%).`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "22 470",
        "ATQ": "892",
        "DEF": "1 189",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Ally HP in All Battles by 30%`,
};
