const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Flaming Pigsticker",
          description: `Attacks 1 enemy. Has a 30% chance of placing a 30% [Decrease SPD] debuff for 2 turns.<br><br>Has a 30% chance of placing a [Stun] debuff for 1 turn instead when counterattacking with this skill.`,
          damage: "2.65*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Damage +5%", "Level 7: Buff/Debuff Chance +5%", "Level 8: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Hulking Tantrum",
          description: `Attacks all enemies. Has a 50% chance of placing a [Provoke] debuff for 1 turn. Places a 60% [Increase DEF] buff on this Champion for 2 turns.`,
          damage: "3*DEF",
          cooldown: 5,
          levelInfo: ["Level 2: Buff/Debuff Chance +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Buff/Debuff Chance +5%", "Level 7: Cooldown -1", "Level 8: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Giant Strength",
          description: `Places a 25% [Strengthen] buff and a 15% [Continuous Heal] buff on all allies for 2 turns.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Trash Talk [P]",
          description: `Receives 20% less damage from enemies under [Provoke] debuffs. <br><br>Has a 25% chance of counterattacking whenever an enemy under a [Provoke] debuff attacks either this Champion or an ally.`,
          levelInfo: ["Level 2: Buff/Debuff Chance +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Buff/Debuff Chance +5%"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 165",
        "ATQ": "683",
        "DEF": "1 409",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Increases Ally DEF in Doom Tower by 30%`,
};
