const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Evil Undone",
          description: `Attacks 1 enemy. Has a 50% chance of placing a 60% [Decrease DEF] debuff for 2 turns. <br><br>If Hansel Witchhunter is on the same team, attacks all enemies instead. Has a 25% chance of placing a 60% [Decrease DEF] debuff on all enemies for 2 turns. Also places an extra hit against enemies under any buffs.`,
          damage: "3.8*ATKMultiplier: 2.4*ATK",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Shadowseeker Bolts",
          description: `Attacks 1 enemy 4 times. The first hit will ignore 10% of the target’s DEF, the second hit will ignore 15% DEF, the third hit will ignore 20% DEF, and the fourth hit will ignore 25% DEF. <br><br>If this attack kills an enemy, resets cooldown of this skill and fills this Champion’s Turn Meter by 50%.`,
          damage: "1.4*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Sacred Ritual",
          description: `Attacks all enemies. Decreases the Turn Meters of all enemies by 25%. <br><br>If Hansel Witchhunter is on the same team, decreases the Turn Meters of all enemies by 50% instead. This effect cannot be resisted. <br><br>Then fills this Champion’s Turn Meter by 20% for each enemy alive after the attack.`,
          damage: "4.1*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Sisterly Bond [P]",
          description: `[Passive Effect]<br><br>Fills this Champion’s Turn Meter by 50% whenever an enemy is granted an Extra Turn.<br><br>If Hansel Witchhunter is on the same team, also fills their Turn Meter by 50% whenever an enemy is granted an Extra Turn. <br><br>[Active Effect]<br><br>If Hansel Witchhunter is on the same team and is killed by the enemy, instantly activates the [Sacred Ritual] skill.`,
          cooldown: 3,
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 525",
        "ATQ": "1 564",
        "DEF": "980",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Increases Ally ATK in All Battles by 30%`,
};
