const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Warden Staff",
          description: `Attacks 1 enemy. Has a 20% chance of placing a 25% [Decrease ATK] debuff for 2 turns.`,
          damage: "3*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Damage +5%", "Level 7: Buff/Debuff Chance +10%", "Level 8: Damage +10%", "Level 9: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Tender's Watch",
          description: `Removes all debuffs from all allies, then places a 15% [Continuous Heal] buff on them for 2 turns.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Call to Life",
          description: `Revives an ally with 30% HP and fills their Turn Meter by 30%.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "18 165",
        "ATQ": "859",
        "DEF": "958",
        "VIT": "103",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
