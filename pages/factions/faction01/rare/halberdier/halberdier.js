const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Hew",
          description: `Attacks 1 enemy. Has a 25% chance of placing a 25% [Weaken] debuff for 2 turns.`,
          damage: "3.5*ATK",
          levelInfo: ["Level 2: Buff/Debuff Chance +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Bisect",
          description: `Attacks 1 enemy. Will ignore [Shield] and [Block Damage] buffs.`,
          damage: "4.8*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Cleaving Ax [P]",
          description: `Increases C. DMG by 40%.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "12 060",
        "ATQ": "1 178",
        "DEF": "1 046",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
