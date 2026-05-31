const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Lockdown",
          description: `Attacks 1 enemy. Has a 40% chance of removing 1 random buff from the target.`,
          damage: "4.5*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Confiscate",
          description: `Attacks 1 enemy. Has a 40% chance of stealing 2 random buffs from the target. Places an extra hit if any buff is stolen.`,
          damage: "6*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Buff/Debuff Chance +15%", "Level 7: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Reprisal",
          description: `Attacks 1 enemy. Damage increases by 20% if the target has no active buffs.`,
          damage: "6.2*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Damage +15%", "Level 5: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "11 235",
        "ATQ": "1 299",
        "DEF": "980",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Increases Ally ACC in Dungeons by 20`,
};
