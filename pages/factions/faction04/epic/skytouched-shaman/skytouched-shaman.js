const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Talon Knives",
          description: `Attacks all enemies. Heals by 15% of the damage inflicted if this Champion has less than 50% HP. Boosts this Champion’s Turn Meter by 20% instead if this Champion has 50% HP or higher.<br><br><br>Heal Multiplier: 0.15*Damage Dealt`,
          damage: "2.2*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +10%", "Level 6: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Immortal Skies",
          description: `Removes all debuffs from all allies, then places a [Block Debuffs] buff and a [Revive On Death] buff on all allies for 2 turns.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Bloodstain Ritual [P]",
          description: `Damages this Champion by 10% of their MAX HP at the start of each turn. Heals all allies except this Champion equal to half of the Champion's current lost HP. Places a 30% [Decrease SPD] debuff on this Champion for 1 turn at the start of each turn. Also has a 50% chance of placing a [Fear] debuff on this Champion for 1 turn.<br><br><br>Heal Multiplier: (HP-Current HP %)*0.5`,
          levelInfo: ["Level 2: Heal +5%", "Level 3: Heal +5%", "Level 4: Heal +5%", "Level 5: Heal +5%"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 330",
        "ATQ": "958",
        "DEF": "1 123",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Ally HP in All Battles by 25%`,
};
