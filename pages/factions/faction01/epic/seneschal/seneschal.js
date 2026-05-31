const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Bloodied Mace",
          description: `Attacks 1 enemy. <br><br>Has a 30% chance of placing a [Leech] debuff for 2 turns.`,
          damage: "2.6*DEF+2*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Misdirect",
          description: `Places a [Perfect Veil] buff and a 15% [Continuous Heal] buff on an ally for 2 turns.`,
          cooldown: 4,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Lordly Challenge",
          description: `Places a [Counterattack] buff on this Champion for 2 turns. Has a 50% chance of placing a [Provoke] debuff on all enemies for 1 turn.`,
          cooldown: 5,
          levelInfo: ["Level 2: Buff/Debuff Chance +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Buff/Debuff Chance +10%", "Level 7: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "19 980",
        "ATQ": "705",
        "DEF": "1 266",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = null;
