const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Transference Slash",
          description: `Attacks 1 enemy 2 times. <br><br>Each hit transfers a random debuff from this Champion to the target. Fills this Champion’s Turn Meter by 5% for each transferred debuff.`,
          damage: "1.8*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Wraith Explosion",
          description: `Attacks all enemies. <br><br>Has a 75% chance of placing a 50% [Decrease RES] debuff on all enemies for 2 turns and a [Sleep] debuff on all enemies for 1 turn.<br><br>Fills this Champion's Turn Meter by 10% for each debuff placed.`,
          damage: "3.9*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Purgation Blade",
          description: `Attacks 1 enemy 2 times. <br><br>Before attacking, removes all debuffs from this Champion and steals all buffs from the target enemy. <br><br>Places a 50% [Increase ATK] buff and a 30% [Increase C. DMG] buff on this Champion for 2 turns if this attack kills an enemy. These buffs cannot be removed.`,
          damage: "2.9*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Heightened Senses [P]",
          description: `Immune to [Sleep] debuffs. <br><br>Increases this Champion's ACC by 10 and C. DMG by 3% for each buff on the enemy team.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "14 700",
        "ATQ": "1 553",
        "DEF": "1 046",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = null;
