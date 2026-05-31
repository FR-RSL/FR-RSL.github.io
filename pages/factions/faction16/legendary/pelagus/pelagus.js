const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Wavethrust",
          description: `Attacks 1 enemy 3 times.<br><br>Each hit has a 50% chance of stealing 5% of the target's Turn Meter.<br><br>Fills all allies' Turn Meters by an amount equal to the total amount of Turn Meter stolen.`,
          damage: "2.2*ATK",
          levelInfo: ["Level 2: +10% Damage", "Level 3: +10% Buff/Debuff Chance", "Level 4: +15% Buff/Debuff Chance"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Rip Current",
          description: `Removes all buffs from all enemies.<br><br>Then has a 75% chance of placing a 30% [Decrease SPD] debuff and a 25% [Weaken] debuff on all enemies for 2 turns.`,
          cooldown: 5,
          levelInfo: ["Level 2: +10% Buff/Debuff Chance", "Level 3: +15% Buff/Debuff Chance", "Level 4: -1 Cooldown", "Level 5: -1 Cooldown"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Relentless Tide",
          description: `Has a 75% chance of placing a [Block Passive Skills] debuff and an [Enfeeble] debuff on a target enemy for 2 turns.<br><br>Also steals all Turn Meter from the target.`,
          cooldown: 4,
          levelInfo: ["Level 2: +10% Buff/Debuff Chance", "Level 3: +15% Buff/Debuff Chance", "Level 4: -1 Cooldown"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Crushing Depths [P]",
          description: `Places a 100% [Ensnare] debuff on the enemy with the lowest Turn Meter for 2 turns at the end of this Champion's turn. This debuff cannot be resisted.<br><br>Whenever an enemy has their Turn Meter increased by a skill, also fills this Champion’s Turn Meter by 15%. Occurs once per turn.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "20 805",
        "ATQ": "848",
        "DEF": "1 343",
        "VIT": "115",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Increases Ally SPD in Arena by 28%`,
};
