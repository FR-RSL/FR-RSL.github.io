const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Wreak Revenge",
          description: `Attacks 1 enemy. Has a 50% chance of decreasing the duration of a random buff on the target by 1 turn.<br><br>Every time an enemy places a debuff on an ally, uses this skill against that enemy. These counterattacks will only deal 50% of the normal damage and cannot be critical.<br><br>If there are multiple Champions in the team with this Skill, only one Champion's counterattack will activate.`,
          damage: "2.9*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Damage +10%", "Level 7: Buff/Debuff Chance +10%", "Level 8: Damage +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Cow the Horrors",
          description: `Attacks 1 enemy 3 times. Will ignore 25% of the target's DEF. Will ignore a further 25% of the target's DEF for each buff on this Champion. Places a [True Fear] debuff on all enemies for 1 turn if this attack kills an enemy.`,
          damage: "2*ATK",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Damage +15%"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Dauntless [P]",
          description: `Each critical hit fills this Champion's Turn Meter by 7.5%. Whenever an ally receives a [Fear] or a [True Fear] debuff from an enemy, this skill will instantly remove the debuff and fill the team Leader's Turn Meter by 15%.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "16 680",
        "ATQ": "1 288",
        "DEF": "903",
        "VIT": "101",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Increases Ally ACC in Doom Tower by 60`,
};
