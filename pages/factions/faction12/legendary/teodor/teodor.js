const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Vile Physick",
          description: `Attacks all enemies. Has a 30% chance of placing a 30% [Decrease SPD] debuff for 2 turns.`,
          damage: "3.1*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Savant's Savvy",
          description: `Has a 75% chance of placing two 5% [Poison] debuffs and a 25% [Poison Sensitivity] debuff on all enemies for 2 turns. Also places a 30% [Increase SPD] buff on all allies for 2 turns.`,
          cooldown: 4,
          levelInfo: ["Level 2: Buff/Debuff Chance +10%", "Level 3: Buff/Debuff Chance +15%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Chymistry",
          description: `Increases the duration of all [Poison] debuffs and [HP Burn] debuffs on all enemies by 1 turn. Then, instantly activates one tick of all [Poison] debuffs and [HP Burn] debuffs on all enemies. <br><br>Places a 25% [Weaken] debuff for 2 turns on enemies not under [Poison] debuffs or [HP Burn] debuffs.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Fumigator [P]",
          description: `This Champion’s RES is increased by 5 for each [Poison] debuff on the enemy team.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "20 805",
        "ATQ": "980",
        "DEF": "1 211",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Increases Ally ACC in All Battles by 50`,
};
