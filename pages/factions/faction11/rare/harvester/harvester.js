const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Destabilize",
          description: `Attacks 1 enemy 2 times.<br><br>Has a 35% chance of placing a 15% [Weaken] debuff for 2 turns.`,
          damage: "1.9*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Damage +5%", "Level 6: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Accursed Scythe",
          description: `Attacks 1 enemy.<br><br>Has an 80% chance of placing a [Block Buffs] debuff for 2 turns.`,
          damage: "6.5*ATK",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Temporal Burst",
          description: `Attacks 1 enemy.<br><br>Has a 90% chance of increasing the cooldown of one of the target’s Skills by 2 turns at random.`,
          damage: "7.5*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Buff/Debuff Chance +5%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "13 710",
        "ATQ": "1 156",
        "DEF": "958",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
