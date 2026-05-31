const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Mace of Foulness",
          description: `Attacks 1 enemy. Has a 40% chance of placing a [Block Buffs] debuff for 1 turn.`,
          damage: "3.6*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Buff/Debuff Chance +5%", "Level 7: Damage +5%", "Level 8: Damage +10%", "Level 9: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Kindle Soulfire",
          description: `Attacks all enemies. Has a 50% chance of placing a [Bomb] debuff that detonates after 1 turn.<br><br><br>Bomb Multiplier:`,
          damage: "4.2*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Buff/Debuff Chance +5%", "Level 7: Damage +5%", "Level 8: Buff/Debuff Chance +5%", "Level 9: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Hex Eater",
          description: `Removes all debuffs from all allies, then places one 15% [Continuous Heal] buff for 1 turn on each ally for every debuff removed from them.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Madcap [P]",
          description: `Fills the Turn Meters of all allies by 10% whenever a [Bomb] debuff detonates on an enemy.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 000",
        "ATQ": "969",
        "DEF": "1 134",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Increases Ally DEF in Faction Wars by 30%`,
};
