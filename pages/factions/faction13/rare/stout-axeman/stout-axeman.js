const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Go No Further",
          description: `Attacks 1 enemy.`,
          damage: "4.5*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Repel the Horde",
          description: `Places a 15% [Reflect Damage] buff on this Champion for 2 turns.<br>Has an 85% chance of placing a 15% [Reflect Damage] buff on a random ally for 2 turns.<br>Also has a 35% chance of placing a [Provoke] debuff on 2 random enemies for 1 turn.`,
          cooldown: 4,
          levelInfo: ["Level 2: Buff/Debuff Chance +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Thrives on Danger [P]",
          description: `Heals this Champion by 50% of the damage taken while under a [Reflect Damage] buff. Also, has a 25% chance of increasing the duration of all attacker’s debuffs by 1 turn when hit while under a [Reflect Damage] buff.<br><br>Heal Multiplier: 0.5*Damage Dealt`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "19 155",
        "ATQ": "859",
        "DEF": "892",
        "VIT": "94",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "55",
        "PRÉ": "0"
      },
};

const aura = null;
