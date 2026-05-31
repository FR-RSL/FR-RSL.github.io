const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Pain Reversal",
          description: `Attacks 1 enemy. Has a 70% chance of transferring 1 random debuff from this Champion to the target. <br><br>Also heals the ally with the lowest HP by 10% of their MAX HP.<br><br><br>Heal Multiplier: 0.1*Target Max HP`,
          damage: "3.9*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Spinal Surge",
          description: `Attacks all enemies. <br><br>If 3 or fewer enemies are alive, has a 75% chance of placing a [Block Buffs] debuff on each enemy for 2 turns. <br><br>If 4 or more enemies are alive, has a 75% chance of placing a [Block Buffs] debuff on each enemy for 3 turns.`,
          damage: "3*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Death Perception",
          description: `Removes 1 random debuff from all allies and places a 50% [Increase ACC] buff on them for 2 turns.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Skeletal Mirror [P]",
          description: `Whenever an enemy attempts to place a debuff on this Champion, has a 20% chance to reflect it back onto the attacker.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "16 515",
        "ATQ": "1 167",
        "DEF": "1 035",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Increases Ally ACC in All Battles by 40`,
};
