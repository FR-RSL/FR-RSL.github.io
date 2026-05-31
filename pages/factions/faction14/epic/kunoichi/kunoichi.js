const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Sever Muscle",
          description: `Attacks 1 enemy. Has a 30% chance of placing a 25% [Weaken] debuff for 2 turns.`,
          damage: "3.1*DEF",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Poison Piercing",
          description: `Attacks all enemies. Has a 75% chance of placing a [Leech] debuff for 2 turns.`,
          damage: "3.7*DEF",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Interpose",
          description: `Places a 50% [Ally Protection] buff on all allies except this Champion for 2 turns. Fills this Champion’s Turn Meter by 50%.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Blooded Grit [P]",
          description: `Places a [Block Damage] buff on this Champion for 1 turn whenever their HP drops below 50%.`,
          cooldown: 5,
          isPassive: true
        }
      ],
  stats: {
        "PV": "17 835",
        "ATQ": "782",
        "DEF": "1 332",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = null;
