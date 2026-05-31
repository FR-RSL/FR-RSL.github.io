const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Fiendfeller",
          description: `Attacks 1 enemy.<br><br>Has a 50% chance of placing a 60% [Decrease DEF] debuff for 2 turns. <br><br>Will ignore 5% of the target's DEF for each debuff on them.`,
          damage: "0.22*HP",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Gift of Pain",
          description: `Attacks 1 enemy. Before attacking, steals all buffs from the target. <br><br>Will repeat the attack against all enemies if the initial target is under a [Leech] debuff.`,
          damage: "0.3*HPMultiplier: 0.25*HP",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Terra Breach",
          description: `Attacks all enemies. <br><br>Has a 75% chance of placing a [Block Buffs] debuff and a [Leech] debuff on all enemies for 2 turns. <br><br>Also fills this Champion’s Turn Meter by 5% for each debuff placed by this skill.`,
          damage: "0.27*HP",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "March of Reckoning [P]",
          description: `Increases this Champion's MAX HP by 5% (stacks up to 50%) and C.DMG by 5% (stacks up to 50%) for each debuff placed by this Champion.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "23 295",
        "ATQ": "749",
        "DEF": "1 277",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Increases Ally ACC in All Battles by 60`,
};
