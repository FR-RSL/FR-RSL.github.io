const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Gallantry",
          description: `Attacks 1 enemy. Destroys the target’s MAX HP by 30% of the damage inflicted. Places a [Shield] buff equal to 10% of this Champion’s MAX HP for 2 turns on the ally with the lowest HP.<br><br><br>Shield Multiplier: 0.1*HP`,
          damage: "0.23*HP",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Flicker Barrier",
          description: `Attacks all enemies. Places a [Shield] buff on all allies for 3 turns equal to 20% of this Champion's MAX HP. <br><br>If there are any dead allies, places a [Shield] buff on all allies for 3 turns equal to 30% of this Champion’s MAX HP instead. This buff cannot be removed, stolen, transferred, spread, or have its duration increased or decreased by enemies or allies.<br><br><br>Shield Multiplier: 0.2*HP`,
          damage: "0.25*HP",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Finest Hour",
          description: `Places a 30% [Increase C. DMG] buff on all allies for 2 turns, then teams up with all allies to attack a single enemy.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Piercer [P]",
          description: `Inflicts 20% more damage against targets under [Shield] buffs.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "23 130",
        "ATQ": "848",
        "DEF": "1 189",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "50",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Ally HP in Doom Tower by 35%`,
};
