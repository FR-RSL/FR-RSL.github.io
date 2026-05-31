const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Pinpoint Thrust",
          description: `Attacks 1 enemy. Places a 25% [Increase ACC] buff on this Champion for 2 turns.`,
          damage: "3.6*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Spur Claw",
          description: `Attacks all enemies. Has a 50% chance of placing a [Provoke] debuff for 1 turn.`,
          damage: "3.9*DEF",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Protect the Crowned",
          description: `Places a 15% [Strengthen] buff on all allies for 2 turns. <br><br>Also places a [Counterattack] buff on this Champion for 2 turns.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 185",
        "ATQ": "771",
        "DEF": "1 178",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = null;
