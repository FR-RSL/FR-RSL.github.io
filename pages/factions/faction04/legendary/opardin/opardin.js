const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Paired Hammers",
          description: `Attacks 1 enemy 2 times. Each hit has a 50% chance of decreasing the target's Turn Meter by 10% and a 50% chance of filling this Champion's Turn Meter by 10%.`,
          damage: "0.14*HP",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Rally the Tribe",
          description: `Attacks all enemies. Heals all allies by 20% of this Champion's MAX HP. Heals all allies under [Continuous Heal] buffs by 30% instead.<br><br><br>Heal Multiplier: 0.2*HP`,
          damage: "0.27*HP",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Heal +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Clan Mentor",
          description: `Removes all [Block Buffs] and [Heal Reduction] debuffs from all allies, then places two 15% [Continuous Heal] buffs and a [Block Debuffs] buff on all allies for 2 turns. Also has a 75% chance of removing 1 random debuff from all allies.`,
          cooldown: 4,
          levelInfo: ["Level 2: Buff/Debuff Chance +10%", "Level 3: Buff/Debuff Chance +15%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Paternal [P]",
          description: `Each time a [Continuous Heal] buff heals an ally, fills that ally's Turn Meter by 10%.<br><br>If there are multiple Champions in the team with this Skill, only one will activate.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "22 470",
        "ATQ": "870",
        "DEF": "1 211",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "0"
      },
};

const aura = null;
