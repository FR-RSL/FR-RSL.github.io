const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Charged Shot",
          description: `Attacks 1 enemy. Places a 50% [Increase ACC] buff on this Champion for 2 turns.`,
          damage: "3*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Spinning Shot",
          description: `Attacks all enemies. Has a 75% chance of placing a [Stun] debuff for 1 turn. <br><br>If the target is a Boss, has a 75% chance of placing a 30% [Decrease SPD] debuff for 2 turns instead. <br><br>Also decreases the Turn Meters of enemies under a [Stun] debuff placed by this skill by 20%. <br><br>Fills the Turn Meters of all allies by 10% if a 30% [Decrease SPD] debuff is placed by this skill instead.`,
          damage: "3.1*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Rapid Shot",
          description: `Attacks all enemies. Places a [Hex] debuff for 2 turns and a [Provoke] debuff for 1 turn. <br><br>If the target is a Boss, places a [Hex] debuff for 3 turns and a [Provoke] debuff for 2 turns instead.`,
          damage: "3*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Nergigante Ambition [P]",
          description: `Heals all allies by 10% of their MAX HP when attacking enemies under a [Hex] debuff. If there are multiple Champions on the team with this skill, only one will activate. This skill will not activate on duplicate copies of this Champion, if this particular Champion is dead. <br><br>Increases this Champion’s DEF by 5% each time this Champion receives a hit from an enemy under a [Hex] debuff (stacks up to 30%).<br><br>Heal Multiplier: 0.1*Target Max HP`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 990",
        "ATQ": "848",
        "DEF": "1 465",
        "VIT": "101",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Increases Ally DEF in Dungeons by 30%`,
};
