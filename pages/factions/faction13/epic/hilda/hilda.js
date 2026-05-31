const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Ax Pirouette",
          description: `Attacks 1 enemy 3 times. <br><br>Each hit will ignore 10% of the target’s DEF. Each critical hit has a 75% chance of stealing 1 random buff from the target.`,
          damage: "1.25*ATK",
          levelInfo: ["Level 2: Damage +15%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Shatter Limbs",
          description: `Attacks 1 enemy 2 times. <br><br>The damage inflicted by this skill increases by 10% for each debuff on the target (stacks up to 100%). <br><br>Each hit has a 75% chance of placing a 100% [Heal Reduction] debuff for 2 turns.`,
          damage: "3.4*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Buff/Debuff Chance +10%", "Level 3: Buff/Debuff Chance +15%", "Level 4: Cooldown -1", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "For Hrothglime!",
          description: `Attacks all enemies. Before attacking, places a 50% [Increase ATK] buff on all allies for 2 turns. <br><br>Has a 40% chance of placing a [Stun] debuff for 1 turn.`,
          damage: "3.7*ATK",
          cooldown: 6,
          levelInfo: ["Level 2: Damage +20%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Cooldown -1", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Fight Dirty [P]",
          description: `Allies deal 15% more damage to targets under a [Heal Reduction] or a [Stun] debuff placed by this Champion. <br><br>If there are multiple Champions on the team with this skill, only one will activate. This skill will not activate on duplicate copies of this Champion, if this particular Champion is dead.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 690",
        "ATQ": "1 421",
        "DEF": "837",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Increases Ally ATK in All Battles by 20%`,
};
