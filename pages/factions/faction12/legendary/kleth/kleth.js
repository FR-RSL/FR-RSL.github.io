const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Atrophic Ax",
          description: `Attacks 1 enemy. <br><br>Has an 80% chance of placing a 25% [Weaken] debuff for 2 turns. This debuff cannot be resisted if the target has attacked this Champion before this turn.`,
          damage: "3.3*DEF",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Spirit Calculus",
          description: `The HP levels of all allies will be brought up to the level of the ally with the highest HP. The Turn Meter levels of all allies will be brought up to the level of the ally with the highest Turn Meter. <br><br>The HP levels of all enemies will be brought down to the level of the enemy with the lowest HP. The Turn Meter levels of all enemies will be brought down to the level of the enemy with the lowest Turn Meter. <br><br>Then places a [Taunt] buff on this Champion for 2 turns.`,
          cooldown: 7,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Finality Disc",
          description: `Attacks 1 enemy. Before attacking, transfers all debuffs from this Champion to the target and heals this Champion by 10% of their MAX HP. Heals by an additional 10% of their MAX HP for each debuff transferred. <br><br>Will always use this skill instead of the default skill when counterattacking.<br><br>[Knights Revenant Unity]<br><br>1 Faction ally:<br>Before attacking, also removes all buffs from the target enemy. This effect cannot be resisted if the target has attacked this Champion before this turn.<br><br>2 Faction allies:<br>Will attack all remaining enemies with less than 30% HP. This attack will ignore 100% of each target’s DEF, and cannot be critical.<br><br>3 Faction allies:<br>This skill deals 100% more damage to enemies who have attacked this Champion before this turn.<br><br><br>Heal Multiplier: (0.1+(0.1*Debuffs Transffered))*HP`,
          damage: "5*DEFMultiplier: Target Current HP",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "The Representation [P]",
          description: `Every time this Champion loses 25% HP or more from a single hit, places a [Block Damage] buff on this Champion for 1 turn.<br><br>[Knights Revenant Unity]<br><br>1 Faction ally:<br>When attacked, has a 15% chance of placing a [True Fear] debuff on the attacker for 1 turn. This debuff cannot be resisted.<br><br>2 Faction allies:<br>Ignore DEF effects against this Champion are decreased by 100%.<br><br>3 Faction allies:<br>When attacked, has a 20% chance of activating an [Instant Turn] effect on this Champion. Occurs once per skill.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 825",
        "ATQ": "727",
        "DEF": "1 597",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/sup-defence.webp",
  description: `Increases Ally DEF in All Battles by 25%

[Knights Revenant only]

Increases Ally RES in All Battles by 60`,
};
