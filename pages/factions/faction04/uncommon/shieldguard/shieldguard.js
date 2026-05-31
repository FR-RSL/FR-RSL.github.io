const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Uppercut",
          description: `Attacks 1 enemy. Has a 30% chance of placing a 15% [Decrease SPD] debuff for 2 turns. Damage inflicted is proportional to DEF.`,
          damage: "4*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Battle Stance",
          description: `Attacks all enemies. Fills this Champion's Turn Meter by 20% on each critical hit. Damage inflicted is proportional to DEF.`,
          damage: "3.4*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%", "Level 6: Cooldown -1", "Level 7: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Mighty Soul [P]",
          description: `Removes one debuff from this Champion each turn.`,
          cooldown: 1,
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 360",
        "ATQ": "705",
        "DEF": "1 024",
        "VIT": "89",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
