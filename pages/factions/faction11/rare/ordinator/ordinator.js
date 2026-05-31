const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Weighty Punishment",
          description: `Attacks 1 enemy. Has a 25% chance of placing a [Freeze] debuff for 1 turn.`,
          damage: "3.3*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Obedience Collars",
          description: `Attacks all enemies. Has a 50% chance of placing a [Bomb] debuff that detonates after 2 turns.<br><br><br>Bomb Multiplier: 4*ATK`,
          damage: "4*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Buff/Debuff Chance +10%", "Level 7: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Enforcer [P]",
          description: `When attacked, has a 30% chance of decreasing all [Bomb] debuff detonation countdowns on the attacker by 1 turn.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "13 710",
        "ATQ": "1 321",
        "DEF": "793",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = null;
