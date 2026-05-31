const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Bamboo Splinter",
          description: `Attacks 1 enemy. Has a 75% chance of placing a 30% [Decrease SPD] debuff for 2 turns.<br><br>Will attack all enemies instead if the initial target is under 2 or more debuffs. This attack has a 75% chance of placing a 30% [Decrease SPD] debuff for 2 turns.<br><br>Then places a [Sleep] debuff on this Champion for 1 turn. This debuff cannot be blocked or resisted.`,
          damage: "3.8*ATK",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Grovetender",
          description: `Attacks all enemies. Before attacking, places a [Shield] buff on all allies equal to 30% of this Champion's MAX HP for 2 turns. Also increases the duration of all buffs on all allies by 1 turn.<br><br>After attacking, has a 75% chance of decreasing the duration of all enemy buffs by 1 turn, even if the attack lands as a weak hit. Also increases the value of any [Shield] buffs on all allies by 3% for each enemy buff that had its duration decreased by this skill.<br><br>Then places a [Sleep] debuff on this Champion for 1 turn. This debuff cannot be blocked or resisted.<br><br><br>Shield Multiplier: 0.3*Target Max HP`,
          damage: "5.6*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +15%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Dream Sight",
          description: `Target an enemy.<br><br>First, places a 50% [Increase ACC] buff and a 50% [Increase ATK] buff on all allies for 2 turns.<br><br>Then, has a 75% chance of placing an [Enfeeble] debuff and a 50% [Decrease ACC] debuff on all enemies for 2 turns. The [Enfeeble] debuff cannot be placed on Bosses. Has a 75% chance of placing a 50% [Decrease ATK] debuff on Bosses for 2 turns instead.<br><br>Finally, places a [Sleep] debuff on this Champion for 1 turn. This debuff cannot be blocked or resisted.`,
          cooldown: 4,
          levelInfo: ["Level 2: Buff/Debuff Chance +10%", "Level 3: Buff/Debuff Chance +15%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Sleeping Sage [P]",
          description: `[Passive Effect]<br><br>Has a 75% chance of transferring any debuffs placed on an ally to this Champion while they are under a [Sleep] debuff. Will not transfer [Block Revive], [Stun], [Freeze], [Fear], [True Fear], [Provoke], [Petrification], and [Sheep] debuffs.<br><br>At the start of this Champion's turn, remove any [Sleep] debuffs from this Champion.<br><br>[Active Effect]<br><br>Transfers all debuffs from this Champion to the enemy with the highest RES if a [Sleep] debuff was removed from this Champion by this Champion's passive skill or by an enemy attack. This effect cannot be resisted or blocked.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "21 480",
        "ATQ": "870",
        "DEF": "1 277",
        "VIT": "110",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Ally HP in All Battles by 25%`,
};
