const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Dreadtone",
          description: `Attacks 1 enemy. Transfers all debuffs from this Champion to the target before the attack. This effect cannot be resisted by Bosses. <br><br>Has a 75% chance of placing a [True Fear] debuff for 1 turn. This debuff cannot be resisted by Bosses.`,
          damage: "3.3*DEF",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Seismic Dissonance",
          description: `Attacks all enemies 2 times. <br><br>After the first hit, has a 75% chance of placing a 60% [Decrease DEF] debuff and a 25% [Weaken] debuff on all enemies for 2 turns. These debuffs cannot be resisted by Bosses. <br><br>After the second hit, has a 75% chance of placing a 50% [Decrease ACC] debuff and a 50% [Decrease RES] debuff on all enemies for 2 turns. These debuffs cannot be resisted by Bosses.`,
          damage: "2*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Mindless Muscle",
          description: `Places a [Counterattack] buff and an [Unkillable] buff on all allies for 2 turns. Also places a [Taunt] buff on this Champion for 2 turns. If a Boss is present in the current Round, these buffs are protected.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Drone of Agony [P]",
          description: `Whenever this Champion places a debuff on an enemy, deals damage equal to 1% of their MAX HP for each debuff they are currently under. (Stacks up to 10%). Occurs once per skill and once per target.`,
          damage: "0.01*Target Max HP*Target Debuffs",
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 165",
        "ATQ": "771",
        "DEF": "1 597",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Increases Ally DEF in All Battles by 33%`,
};
