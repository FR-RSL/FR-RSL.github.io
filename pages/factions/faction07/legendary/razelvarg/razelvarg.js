const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Hopping Mad",
          description: `Attacks 1 enemy 3 times. Each hit will fill this Champion’s Turn Meter by 5%.`,
          damage: "ATK*(0.45*SPD/100)",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Night of the Rabbit",
          description: `Attacks all enemies. Has a 75% chance of placing a [Leech] debuff for 2 turns. <br><br>Heals this Champion by 10% of their MAX HP for each [Leech] debuff placed by this skill.<br><br><br>Heal Multiplier: 0.1*HP`,
          damage: "ATK*(1.5+SPD/100)",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +15%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Keep Up If You Can",
          description: `Attacks all enemies. Places a 30% [Increase SPD] buff and a 50% [Increase ACC] buff on all allies for 2 turns before attacking.`,
          damage: "ATK*(1.5+SPD/100)",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Built For Speed [P]",
          description: `Each [Increase SPD] buff placed by this Champion increases this Champion's SPD by 5 (Stacks up to 100).`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 030",
        "ATQ": "1 520",
        "DEF": "1 057",
        "VIT": "110",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Increases Ally SPD in All Battles by 20%`,
};
