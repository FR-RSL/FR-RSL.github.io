const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Blessed Spear",
          description: `Attacks 1 enemy. <br><br>Has a 50% chance of placing a 50% [Decrease ATK] debuff for 2 turns. <br><br>Also has an 80% chance of placing a 50% [Increase ATK] buff on the ally with the highest ATK for 1 turn.`,
          damage: "4.5*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Anointed Phalanx",
          description: `Attacks all enemies. <br><br>Has a 75% chance of decreasing the duration of all enemy buffs by 2 turns. <br><br>Then, increases the duration of all ally buffs by 1 turn. Also heals all allies by 20% of this Champion’s MAX HP.<br><br><br>Heal Multiplier: 0.2*HP`,
          damage: "4*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Psalm of Revival",
          description: `Revives all dead allies with 50% HP and 50% Turn Meter. <br><br>If an ally’s DEF is equal to or higher than their ATK, places a 60% [Increase DEF] buff on them for 2 turns. <br><br>If an ally’s ATK is higher than their DEF, places a 50% [Increase ATK] buff on them for 2 turns instead.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Shining Evensong [P]",
          description: `Removes 1 random debuff from all allies at the start of this Champion's turn.<br><br>Places a 15% [Continuous Heal] buff on the ally with the lowest HP for 1 turn at the end of this Champion's turn.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "20 805",
        "ATQ": "925",
        "DEF": "1 266",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Increases Ally ACC in All Battles by 60`,
};
