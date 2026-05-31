const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Covetous Nails",
          description: `Attacks 1 enemy 2 times. Each hit heals this Champion by 3% of their MAX HP.<br><br><br>Heal Multiplier: 0.03*HP`,
          damage: "2.4*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Captivator",
          description: `Attacks all enemies. Has a 75% chance of placing a [Leech] debuff for 2 turns. Also has a 75% chance of placing a 30% [Decrease SPD] debuff for 2 turns on targets with less than 50% Turn Meter.`,
          damage: "4.4*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Sanguine Exchange",
          description: `Revive on Death Swaps HP with a target ally. If this Champion’s HP is equal to or higher than the target’s after the swap, places a [Revive On Death] buff on the target ally for 2 turns. If this Champion’s HP is lower than the target’s after the swap, places a [Revive On Death] buff on this Champion for 2 turns. Also places a 30% [Increase SPD] buff on all allies for 2 turns.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "The Red Lady [P]",
          description: `Heals this Champion by 50% of their MAX HP whenever an ally or an enemy dies.<br><br>Heal Multiplier: 0.5*HP`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "20 310",
        "ATQ": "881",
        "DEF": "1 068",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = null;
