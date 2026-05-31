const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Exacerbate",
          description: `Attacks 1 enemy 2 times. Places an extra hit if the enemy has a [Provoke] debuff.`,
          damage: "0.12*HP",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Infuriate",
          description: `Attacks all enemies. <br><br>Places a [Provoke] debuff on them for 1 turn. Also has a 75% chance of placing a [Provoke] debuff on them for 2 turns instead. <br><br>Then places a 30% [Reflect Damage] buff on all allies for 2 turns. Also places a [Counterattack] buff on this Champion for 2 turns.`,
          damage: "0.27*HP",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Bravado [P]",
          description: `If an enemy with a [Provoke] debuff attacks this Champion, has a 40% chance of replacing it with another [Provoke] debuff for 1 turn. <br><br>Also has a 90% chance of placing a 50% [Decrease ATK] debuff on an enemy for 1 turn when an enemy under a [Provoke] debuff attacks an ally.<br><br>Each hit taken will reduce damage taken by 5% (up to 30% in one round).`,
          levelInfo: ["Level 2: Buff/Debuff Chance +5%", "Level 3: Buff/Debuff Chance +5%"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "21 975",
        "ATQ": "826",
        "DEF": "1 288",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Ally HP in All Battles by 33%`,
};
