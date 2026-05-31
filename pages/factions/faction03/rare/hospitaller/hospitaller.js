const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Quick Slash",
          description: `Attacks 1 enemy.`,
          damage: "4*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Wave of Purification",
          description: `Attacks all enemies. Has a 50% chance of removing 1 random buff from each target.`,
          damage: "2.5*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Damage +10%", "Level 7: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Invigo",
          description: `Places a 15% [Increase SPD] and a 15% [Increase C. RATE] buff on all allies for 2 turns.`,
          cooldown: 4,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Merciful Partner [P]",
          description: `Revives a random ally with 25% HP and places a [Block Damage] buff on them for 1 turn whenever Harrier kills an enemy.<br><br>[Only available when Harrier is on the same team.]`,
          cooldown: 5,
          isPassive: true
        }
      ],
  stats: {
        "PV": "17 175",
        "ATQ": "1 035",
        "DEF": "848",
        "VIT": "101",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Increases Ally SPD in All Battles by 10%`,
};
