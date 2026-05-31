const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Havoc Scythe",
          description: `Attacks 1 enemy 2 times.<br><br>Each hit has a 75% chance of increasing the duration of 2 random debuffs on the target by 1 turn. Each hit also has a 75% chance of decreasing the duration of 2 random buffs on the target by 1 turn.`,
          damage: "0.12*HP",
          levelInfo: ["Level 2: +5% Damage", "Level 3: +10% Buff/Debuff Chance", "Level 4: +10% Damage", "Level 5: +15% Buff/Debuff Chance"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Skull Comet",
          description: `Attacks 1 enemy.<br><br>Has a 75% chance of placing a [Petrification] debuff on the target for 1 turn. Also has a 75% chance to place a 50% [Decrease ATK] debuff and a 30% [Decrease SPD] debuff on the target for 2 turns.`,
          damage: "0.32*HP",
          cooldown: 5,
          levelInfo: ["Level 2: +15% Damage", "Level 3: +10% Buff/Debuff Chance", "Level 4: -1 Cooldown", "Level 5: +15% Buff/Debuff Chance", "Level 6: -1 Cooldown"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Begone, Fools!",
          description: `Places a 50% [Increase ACC] buff on all allies for 2 turns.<br><br>Has a 75% chance to steal any [Block Debuffs] buffs and 2 other random buffs from each enemy.<br><br>Then decreases all enemies' Turn Meters by 15%. If an enemy is from the Telerian League, decreases that enemy's Turn Meter by 30% instead.`,
          cooldown: 5,
          levelInfo: ["Level 2: +10% Buff/Debuff Chance", "Level 3: -1 Cooldown", "Level 4: +15% Buff/Debuff Chance", "Level 5: -1 Cooldown"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Master of Evil [P]",
          description: `Whenever this Champion attempts to place a debuff, steal a buff, decrease an enemy's Turn Meter, decrease the duration of a buff on an enemy, or increase the duration of a debuff on an enemy, increases this Champion's ACC by 20 for each buff on that enemy.<br><br>Whenever this Champion is hit, has a 50% chance to place a 50% [Decrease RES] debuff on the attacker for 1 turn. The chance increases to 100% against Champions from the Telerian League. If this Champion loses 30% or more HP from this attack, also has a 25% chance to place a [Petrification] debuff on the attacker for 1 turn. The chance increases to 50% against Champions from the Telerian League.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "21 480",
        "ATQ": "1 046",
        "DEF": "1 101",
        "VIT": "103",
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
