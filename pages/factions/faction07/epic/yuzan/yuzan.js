const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Hammerhorn",
          description: `Attacks 1 enemy. <br><br>Transfers a random debuff from this Champion to the target. <br><br>Heals this Champion by 10% of their MAX HP.<br><br><br>Heal Multiplier: 0.1*HP`,
          damage: "0.24*HP",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Thundering Charge",
          description: `Attacks all enemies. <br><br>Has a 75% chance of removing 2 random buffs from all enemies. <br><br>Heals this Champion by 10% of their MAX HP for each buff removed by this skill.<br><br><br>Heal Multiplier: 0.1*HP*Removed Debuffs`,
          damage: "0.25*HP",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Good Luck Charm",
          description: `Removes 1 random debuff from all allies. <br><br>Heals all allies by 20% of this Champion’s MAX HP, and places a [Block Debuffs] buff on all allies for 2 turns.<br><br><br>Heal Multiplier: 0.2*HP`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Kind Soul [P]",
          description: `Whenever this Champion heals themselves using one of their own skills, also heals all allies by 20% of any surplus heal.<br><br>Heal Multiplier: 0.2*Remaining Heal Amount`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "19 980",
        "ATQ": "705",
        "DEF": "1 266",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Increases Ally RES in All Battles by 40`,
};
