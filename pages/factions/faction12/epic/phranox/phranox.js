const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Carve Through",
          description: `Attacks 1 enemy. Has a 40% chance of placing a 50% [Decrease ATK] debuff for 2 turns.`,
          damage: "3.4*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Tender Mercies",
          description: `Attacks 1 enemy. Inflicts 100% more damage against targets without any buffs.`,
          damage: "4.6*ATK or 9.2*ATK (No Buffs)",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Isolate",
          description: `Attacks 1 enemy 3 times. Each hit has a 50% chance of stealing 1 random buff from the target. <br><br>Places a [Block Buffs] debuff for 2 turns if the target has no buffs after this attack.`,
          damage: "1.8*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Buff/Debuff Chance +10%", "Level 7: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 370",
        "ATQ": "1 409",
        "DEF": "936",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
