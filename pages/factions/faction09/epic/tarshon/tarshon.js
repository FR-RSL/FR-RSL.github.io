const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Diabolical Hook",
          description: `Attacks 1 enemy. Has a 25% chance of placing a [Provoke] debuff for 1 turn.`,
          damage: "3.6*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Soul Shrivel",
          description: `Attacks all enemies. Has a 75% chance of placing a 25% [Weaken] debuff for 2 turns.`,
          damage: "3.2*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +15%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Demonic Possession",
          description: `Places a 60% [Increase DEF] buff on all allies for 2 turns. Fills the Turn Meters of all allies by 20%.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Back For More [P]",
          description: `Places a 25% [Strengthen] buff on this Champion for 2 turns whenever their HP drops below 50%.`,
          cooldown: 4,
          isPassive: true
        }
      ],
  stats: {
        "PV": "17 175",
        "ATQ": "760",
        "DEF": "1 398",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = null;
