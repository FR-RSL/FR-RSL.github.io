const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Caning",
          description: `Attacks 1 enemy. Places a 15% [Continuous Heal] buff on the ally with the lowest HP for 1 turn.`,
          damage: "3.7*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Open Slay",
          description: `Attacks 1 enemy 2 times. Revives a random ally with full HP if this attack kills the enemy.`,
          damage: "3.1*DEF",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "It Glows",
          description: `When an ally is attacked, places a [Shield] buff equal to 35% of this Champion's MAX HP on that ally for 2 turns. Occurs once per turn. Will not place a [Shield] buff on this Champion.<br><br><br>Shield Multiplier: 0.35*HP`,
          cooldown: 2,
          levelInfo: ["Level 2: Shield +10%", "Level 3: Shield +10%", "Level 4: Shield +10%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "18 660",
        "ATQ": "826",
        "DEF": "1 233",
        "VIT": "94",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = null;
