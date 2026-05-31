const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Equivalent Exchange",
          description: `Attacks 1 enemy. Has a 50% chance of transferring 1 random debuff from this Champion to the target. Also has a 50% chance of stealing 1 random buff from the target.`,
          damage: "5.5*ATK",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Healing Script",
          description: `Restores 25% of each ally's destroyed MAX HP, then heals all allies by 25% of this Champion's MAX HP.<br><br><br>Heal Multiplier: 0.25*HP`,
          cooldown: 4,
          levelInfo: ["Level 2: Heal +10%", "Level 3: Heal +10%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Writ of Sleep",
          description: `Has a 75% chance of placing a [Sleep] debuff on a target for 1 turn. <br><br>Also has a 75% chance of placing a 30% [Decrease SPD] debuff and а 50% [Decrease ATK] debuff on the target for 2 turns. <br><br>Debuffs placed by this skill will ignore any [Block Debuffs] buffs.`,
          cooldown: 5,
          levelInfo: ["Level 2: Buff/Debuff Chance +10%", "Level 3: Buff/Debuff Chance +15%", "Level 4: Cooldown -1", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Perceive Weakness [P]",
          description: `Allies deal 3% more damage to targets for each debuff placed on them by this Champion.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "19 650",
        "ATQ": "1 013",
        "DEF": "1 255",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Increases Ally ACC in all Battles by 60`,
};
