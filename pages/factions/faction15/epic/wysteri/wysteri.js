const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Drainvine Arrows",
          description: `Attacks 1 enemy 2 times. <br><br>Each hit has a 50% chance of placing a 25% [Weaken] debuff on the target for 2 turns.`,
          damage: "2*ATK",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Burrowbolt",
          description: `Attacks 1 enemy. <br><br>Will ignore any [Increase DEF] and [Strengthen] buffs, as well as 20% of the target’s DEF. <br><br>If this attack kills an enemy, increases the duration of all buffs on this Champion by 1 turn.`,
          damage: "5.5*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Cooldown -1", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Ready, Aim...",
          description: `Places a 50% [Increase ATK] buff and a 30% [Increase C. DMG] buff on this Champion for 3 turns. Then grants an Extra Turn.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Deathleaf [P]",
          description: `Increases this Champion’s ATK by 10% for each enemy with 50% HP or less (stacks up to 50%).`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "16 515",
        "ATQ": "1 310",
        "DEF": "892",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Increases Ally ATK in All Battles by 25%`,
};
