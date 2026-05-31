const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Necrotic Bolt",
          description: `Attacks 1 enemy. Destroys the target's MAX HP by 30% of the damage inflicted.`,
          damage: "3.1*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Death's Majesty",
          description: `Places a 50% [Increase ATK] buff on this Champion for 2 turns, then attacks all enemies. Has a 50% chance of placing a 30% [Decrease SPD] debuff for 2 turns.`,
          damage: "3.8*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Lethal Winter [P]",
          description: `Fills this Champion's Turn Meter by 25% and instantly activates the Death's Majesty skill whenever this Champion or an ally receives a [Freeze] debuff.`,
          cooldown: 1,
          isPassive: true
        },
        {
          img: "assets/passif1.webp",
          name: "Veins of Ice [P]",
          description: `Instantly removes any [Freeze] debuffs on this Champion and replaces them with a 30% [Increase C. RATE] buff, a 30% [Increase C. DMG] buff, and a 15% [Strengthen] buff whenever an enemy places a [Freeze] debuff on this Champion.`,
          cooldown: 1,
          isPassive: true
        }
      ],
  stats: {
        "PV": "17 010",
        "ATQ": "1 365",
        "DEF": "804",
        "VIT": "94",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
