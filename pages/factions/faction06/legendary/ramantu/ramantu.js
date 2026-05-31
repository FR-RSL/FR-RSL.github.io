const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Psychic Overload",
          description: `Attacks 1 enemy. Has a 75% chance of increasing the cooldown of 1 of the target’s skills, at random, by 1 turn. Has a 25% chance of placing a [Stun] debuff on the target for 1 turn if a skill has its cooldown increased to the max.<br><br>If the cooldown increase is successful, will also decrease the cooldown of one random skill (by 1 turn) of the ally with the highest Turn Meter and a skill on cooldown.`,
          damage: "3.2*ATK",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Drake's Fury",
          description: `Attacks 1 enemy 4 times.<br><br>The first hit has a 75% chance of placing a 60% [Decrease DEF] debuff for 2 turns. The second hit has a 75% chance of placing a 25% [Weaken] debuff for 2 turns. The third hit has a 75% chance of placing a a 30% [Decrease SPD] debuff for 2 turns. The fourth hit has a 75% chance of placing a [Block Buffs] debuff for 2 turns.<br><br>Also has a 75% chance of placing a [True Fear] debuff on all enemies (excluding the initial target) for 1 turn if the target has 4 or more debuffs after the attack.`,
          damage: "1.8*ATK",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +15%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Blood Wings",
          description: `Attacks all enemies. Has an 80% chance of removing all buffs from all enemies before attacking.<br><br>Also has an 80% chance of placing a [Block Active Skills] debuff for 2 turns on enemies without Passive skills.<br><br>Also has an 80% chance of placing a [Block Passive Skills] debuff for 2 turns on enemies with Passive skills.`,
          damage: "5*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Buff/Debuff Chance +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Arrogance [P]",
          description: `Whenever an enemy places a [Stun], [Sleep], [Freeze], [Fear], [True Fear], or [Provoke] debuff on this Champion, will instantly fill this Champion’s Turn Meter by 30% and place a 30% [Increase SPD] buff and a [Shield] buff on them for 2 turns. The [Shield] buff is equal to 30% of this Champion’s MAX HP.<br><br>Shield Multiplier: 0.3*HP`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 690",
        "ATQ": "1 487",
        "DEF": "1 046",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Increases Ally ACC in All Battles by 80`,
};
