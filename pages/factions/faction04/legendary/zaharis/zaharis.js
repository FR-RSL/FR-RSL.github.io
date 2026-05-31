const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Hawkstrike",
          description: `Attacks 1 enemy. Has a 75% chance of stealing 15% of the target’s Turn Meter. <br><br>Also has a 75% chance of applying a [Debuff Spread] effect, taking 2 random debuffs from the target and placing them on all enemies.`,
          damage: "4.7*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "The Herald Speaks",
          description: `Attacks 1 enemy. Before attacking, has a 75% chance of stealing all buffs from the target enemy. Then applies a [Buff Spread] effect, taking all buffs from this Champion and placing them on all allies. <br><br>Places a [Block Buffs] debuff and a [Block Active Skills] debuff on the target for 2 turns.`,
          damage: "6.4*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +15%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Cooldown -1", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Booming Voice",
          description: `Places 1 [Intercept] stack on a target ally. <br><br>Also places a [Block Debuffs] buff and a 30% [Increase SPD] buff on all allies for 2 turns.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Wings of Victory [P]",
          description: `At the start of the round, places a 50% [Increase ACC] buff on all allies for 3 turns. <br><br>Whenever a debuff on an enemy is removed, expires, or has its duration decreased, fills this Champion’s Turn Meter by 5%.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "21 480",
        "ATQ": "1 035",
        "DEF": "1 112",
        "VIT": "108",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Increases Ally SPD in All Battles by 20%`,
};
