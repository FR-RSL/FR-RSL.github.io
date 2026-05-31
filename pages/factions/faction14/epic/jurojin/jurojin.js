const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Monk's Spade",
          description: `Attacks 1 enemy. Has a 45% chance of placing a 50% [Decrease ATK] debuff for 2 turns.`,
          damage: "0.24*HP",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Fated Duel",
          description: `Places a [Shield] buff on this Champion for 2 turns equal to 25% of their MAX HP, then attacks 1 enemy. Places a [Provoke] debuff for 1 turn. <br><br>If the target’s MAX HP is equal to or lower than this Champion’s, the [Provoke] debuff cannot be resisted.<br><br><br>Shield Multiplier: 0.25*HP`,
          damage: "0.32*HP",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Shield +5%", "Level 4: Damage +5%", "Level 5: Shield +5%", "Level 6: Damage +10%", "Level 7: Shield +10%", "Level 8: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "True Smite",
          description: `Attacks 1 enemy. Will ignore 25% of the target’s DEF. Will also ignore [Unkillable] and [Block Damage] buffs.`,
          damage: "0.34*HP",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Smiles at Death [P]",
          description: `Will receive 25% less damage from enemy attacks when this Champion’s HP drops to 50% or below.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "20 970",
        "ATQ": "738",
        "DEF": "1 167",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Ally HP in All Battles by 25%`,
};
