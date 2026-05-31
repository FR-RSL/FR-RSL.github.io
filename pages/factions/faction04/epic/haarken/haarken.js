const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Blooded Steel",
          description: `Attacks 1 enemy. Places an extra hit if this attack is critical.`,
          damage: "3.3*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Fearsome Iron Slab",
          description: `Attacks 1 enemy. Has a 75% chance of placing a 25% [Weaken] debuff on the target for 2 turns before attacking.`,
          damage: "6.2*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Buff/Debuff Chance +5%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Infectious Panic",
          description: `Attacks 1 enemy. Applies a [Debuff Spread] effect, taking 2 random debuffs from the target and placing them on all enemies. Also extends the duration of those debuffs by 2 turns.<br>Will not extend the duration of debuffs on the initial target.`,
          damage: "5.5*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 865",
        "ATQ": "1 487",
        "DEF": "826",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Increases Ally ATK in Doom Tower by 32%`,
};
