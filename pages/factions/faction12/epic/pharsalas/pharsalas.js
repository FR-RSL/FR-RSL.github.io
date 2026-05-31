const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Grasp of the Grave",
          description: `Attacks 1 enemy. Has a 20% chance of placing a [Provoke] debuff for 1 turn. Places a 50% [Decrease ATK] debuff for 1 turn if the target is under a [Fear] or [True Fear] debuff.`,
          damage: "4.4*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Necrosis",
          description: `Attacks all enemies. Has a 75% chance of placing a 100% [Heal Reduction] debuff for 2 turns.`,
          damage: "4.65*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Coffin Bulwark",
          description: `Places a [Shield] buff on all allies for 2 turns equal to 30% of their MAX HP. Also places a 15% [Strengthen] buff on all allies for 2 turns.<br><br><br>Shield Multiplier: 0.3*Target Max HP`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Unhinged [P]",
          description: `Immune to [Fear] and [True Fear] debuffs.<br><br>Whenever an ally's HP drops below 50% from an enemy attack, has a 50% chance of placing a [Fear] debuff on the attacker for 1 turn.<br><br>Whenever an ally is killed by an enemy, has a 75% chance of placing a [True Fear] debuff on all enemies for 1 turn.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 660",
        "ATQ": "892",
        "DEF": "1 167",
        "VIT": "90",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Increases Ally DEF in Faction Wars by 30%`,
};
