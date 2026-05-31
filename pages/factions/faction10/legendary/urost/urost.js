const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Jagged Knuckles",
          description: `Attacks 1 enemy. Places a [Shield] buff on this Champion equal to 10% of this Champion's MAX HP for 2 turns. The [Shield]'s value increases by 1% for each [Poison] debuff on the target.<br><br><br>Shield Multiplier: 0.1*HP+(0.01*HP*EffectsAppliedOnRelationTargetCountOfKind(ContinuousDamage_KindId))`,
          damage: "0.22*HP",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Shield +5%", "Level 4: Damage +10%", "Level 5: Shield +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Fetid Eruption",
          description: `Attacks all enemies. Has a 75% chance of decreasing the Turn Meters by 15% of enemies under 1 or more [Poison] debuffs. Also has a 75% chance of placing a 30% [Decrease SPD] debuff for 2 turns on enemies under 2 or more [Poison] debuffs. Has a 75% chance of placing a [Stun] debuff for 1 turn on enemies under 3 or more [Poison] debuffs.<br><br>[Instantly activates this skill when this Champion is revived by Rian the Conjurer.]`,
          damage: "0.24*HP",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Buff/Debuff Chance +10%", "Level 7: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Soul Bounty",
          description: `Places a 25% [Strengthen] buff on all allies for 2 turns and a 50% [Ally Protection] buff on all allies except this Champion for 2 turns.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Call of the Cage [P]",
          description: `When attacked, has a 50% chance of placing a 5% [Poison] debuff on the attacker for 2 turns. <br><br>Whenever an ally is attacked while under a [Strengthen] buff, has a 50% chance of placing a [Provoke] debuff on the attacker for 1 turn.<br><br>Increases this Champion’s MAX HP by 5% whenever an enemy receives damage from a [Poison] debuff placed by this Champion.<br>Whenever an enemy receives damage from a [Poison] debuff placed by this Champion, also destroys their MAX HP by 5%.<br><br>[Cannot destroy a single Champion's MAX HP by more than 25% in one Battle. Will not destroy Bosses' MAX HP. Cannot increase this Champion's MAX HP by more than 50%.]`,
          levelInfo: ["Level 2: Buff/Debuff Chance +5%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +10%"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "24 450",
        "ATQ": "782",
        "DEF": "1 167",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Increases Ally RES in All Battles by 80`,
};
