const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Nature's Cycle",
          description: `Attacks 1 enemy. Has a 30% chance of increasing the duration of a random buff on a random ally by 1 turn.`,
          damage: "4*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Overgrowth",
          description: `Heals all allies by 15% of their MAX HP and places a [Shield] buff equal to 15% of their MAX HP on all allies for 2 turns.<br><br><br>Heal Multiplier: 0.15*Target Max HPShield Multiplier: 0.15*Target Max HP`,
          cooldown: 4,
          levelInfo: ["Level 2: Heal +5%", "Level 3: Shield +5%", "Level 4: Heal +10%", "Level 5: Shield +10%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Attunement",
          description: `Places a [Perfect Veil] buff and a 50% [Increase ATK] buff for 2 turns on all allies whose ATK is higher than their DEF. <br> <br>Places a [Block debuffs] buff for 1 turn and a 60% [Increase DEF] buff for 2 turns and on all allies whose DEF is higher than their ATK.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "17 670",
        "ATQ": "903",
        "DEF": "1 222",
        "VIT": "103",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
