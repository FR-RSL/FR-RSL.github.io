const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Blade Mirage",
          description: `Attacks 1 enemy 2 times. Each critical hit fills this Champion’s Turn Meter by 5%.`,
          damage: "1.9*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%", "Level 6: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Dagger Storm",
          description: `Attacks 1 enemy 2 times. Before attacking, places a 15% [Increase C. RATE] buff on this Champion for 2 turns. <br><br>The first hit has a 50% chance of placing a 30% [Decrease DEF] debuff for 2 turns. The second hit has a 50% chance of placing a 15% [Weaken] debuff for 2 turns.`,
          damage: "2.9*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Damage +10%", "Level 7: Buff/Debuff Chance +10%", "Level 8: Cooldown -1", "Level 9: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Ruthless Assassin [P]",
          description: `Each hit from this Champion deals an extra 5% damage if the target is under [Decrease DEF] or [Weaken] debuffs. <br><br>Deals an extra 10% damage if the target is under both [Decrease DEF] and [Weaken] debuffs.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "12 060",
        "ATQ": "1 299",
        "DEF": "925",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
