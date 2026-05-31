const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Tremor Staff",
          description: `Attacks all enemies. Has a 30% chance of placing a 50% [Decrease ACC] debuff for 2 turns.`,
          damage: "2.4*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Creeping Petrify",
          description: `Removes all buffs from a target enemy, then attacks them.<br><br>Steals all buffs instead if the target is under a [HP Burn] debuff placed by this Champion.<br><br>Reduces the cooldown of Quicksand Grasp by 2 turns if the target is killed by this Skill while under a [HP Burn] debuff placed by this Champion.`,
          damage: "6*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Quicksand Grasp",
          description: `Fully depletes the target’s Turn Meter. Fills this Champion’s Turn Meter by the amount the target loses.<br><br>Has a 75% chance of placing a [HP Burn] and a 25% [Weaken] debuff on the target for 3 turns.`,
          cooldown: 5,
          levelInfo: ["Level 2: Buff/Debuff Chance +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Cooldown -1", "Level 7: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Stoneguard [P]",
          description: `Decreases the damage all allies receive by 15% and deflects that damage onto each enemy under a [HP Burn] debuff placed by this Champion. If there are multiple Champions on the team with this skill, only one will activate. This skill will not activate on duplicate copies of this Champion, if this particular Champion is dead.<br><br>Whenever this Champion is attacked, deflects 30% of the damage instead. When deflecting damage, on each enemy hit, has a 30% chance of dealing additional damage equal to 3% of the target's MAX HP.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 525",
        "ATQ": "1 343",
        "DEF": "925",
        "VIT": "94",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Ally HP in All Battles by 25%`,
};
