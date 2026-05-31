const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Pulverizing Pummel",
          description: `Attacks 1 enemy 3 times. <br><br>Each hit has a 30% chance of decreasing the detonation countdown of all [Bomb] debuffs on the target by 1 turn. <br><br>Also has a 30% chance of placing a [Stun] debuff on the target for 1 turn.`,
          damage: "ATK*1.5",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Battlefield Sapper",
          description: `Has a 75% chance of placing 2 [Bomb] debuffs on each enemy that detonate after 2 turns. <br><br>Fills this Champion’s Turn Meter by 25% for each enemy with a [Bomb] debuff.<br><br><br>Bomb Multiplier: 5*ATK`,
          cooldown: 5,
          levelInfo: ["Level 2: Buff/Debuff Chance +10%", "Level 3: Buff/Debuff Chance +15%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Mangonel Maul",
          description: `Attacks all enemies. <br><br>Has a 75% chance of decreasing the detonation countdown of all [Bomb] debuffs by 1 turn. <br><br>Also has a 75% chance of placing a [Block Active Skills] debuff for 2 turns.`,
          damage: "ATK*4.35",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +15%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Bomb Breacher [P]",
          description: `Fills all allies’ Turn Meters by 5% each time a [Bomb] debuff detonates. <br><br>Has a 20% chance of activating an [Instant Turn] effect on this Champion whenever an ally or an enemy is killed by a [Bomb] debuff.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "16 350",
        "ATQ": "1 454",
        "DEF": "1 035",
        "VIT": "110",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Increases Ally ATK in All Battles by 30%`,
};
