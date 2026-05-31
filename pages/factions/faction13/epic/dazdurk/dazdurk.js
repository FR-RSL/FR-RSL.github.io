const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Syphon Symbol",
          description: `Attacks 1 enemy. Has a 35% chance of placing a [Leech] debuff for 2 turns.`,
          damage: "3.3*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Rune of Battle",
          description: `Places a 50% [Increase ATK] buff on all allies for 2 turns, then fills the Turn Meters of all allies by 25%.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Purity Sigil",
          description: `Removes all debuffs from all allies, then heals all allies by 25% of this Champion's MAX HP. Places a 15% [Continuous Heal] buff for 2 turns on allies that have a debuff removed.<br><br><br>Heal Multiplier: 0.25*HP`,
          cooldown: 5,
          levelInfo: ["Level 2: Heal +5%", "Level 3: Heal +5%", "Level 4: Heal +10%", "Level 5: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "20 310",
        "ATQ": "694",
        "DEF": "1 255",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Increases Ally ATK in All Battles by 25%`,
};
