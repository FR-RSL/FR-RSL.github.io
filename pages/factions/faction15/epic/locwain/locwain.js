const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Booncatcher",
          description: `Attacks 1 enemy. Has a 30% chance of stealing 1 random buff.`,
          damage: "3.5*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Revelation",
          description: `Attacks all enemies. Has a 25% chance of removing any [Veil] or [Perfect Veil] buffs from all enemies. <br><br>Also has a 75% chance of removing 1 random buff from all enemies.`,
          damage: "3.8*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Focused Force",
          description: `Attacks 1 enemy 2 times. Will ignore [Shield] buffs. <br><br>Resets the cooldown of this skill if this attack kills an enemy.`,
          damage: "2.9*ATK",
          cooldown: 6,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Hunt the Haughty [P]",
          description: `Increases this Champion’s ACC by 10 for each buff on each enemy.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "14 040",
        "ATQ": "1 409",
        "DEF": "958",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Increases Ally SPD in Arena by 20%`,
};
