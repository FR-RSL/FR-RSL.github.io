const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Tarfield Affliction",
          description: `Attacks 1 enemy 2 times. Each hit has a 15% chance of placing a 30% [Decrease SPD] debuff for 2 turns.`,
          damage: "1.9*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Badlands Witchery",
          description: `Removes all debuffs from a target ally, then heals them by 50% of their MAX HP.<br><br><br>Heal Multiplier: 0.5*Target Max HP`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Return From The Slime",
          description: `Places a [Revive On Death] buff on all allies for 2 turns.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Springy [P]",
          description: `Each time this Champion is hit, increases their DEF by 2.5% (stacks up to 20%). Resets each round.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 660",
        "ATQ": "771",
        "DEF": "1 288",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = null;
