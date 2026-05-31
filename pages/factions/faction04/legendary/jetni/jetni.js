const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Splinter Steel",
          description: `Attacks 1 enemy 2 times. <br><br>The first hit has a 30% chance of placing a [Stun] debuff for 1 turn. The second hit has a 30% chance of placing a 60% [Decrease DEF] debuff for 2 turns.`,
          damage: "1.9*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Barrier Breach",
          description: `Attacks all enemies. Will ignore 20% of each target’s DEF. <br><br>Has a 75% chance of placing a 60% [Decrease DEF] debuff for 2 turns. This debuff cannot be resisted if Alsgor Crimsonhorn is on the same team.`,
          damage: "3.8*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Towering Might",
          description: `Attacks all enemies 2 times. <br><br>Before attacking, places a 30% [Increase C. RATE] buff and a 30% [Increase C. DMG] buff on this Champion for 2 turns. <br><br>Grants an Extra Turn if this attack kills an enemy when Alsgor Crimsonhorn is on the same team.`,
          damage: "1.9*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Nowhere To Hide [P]",
          description: `Inflicts 20% more damage against targets under [Shield] buffs. <br><br>Will ignore [Shield] buffs if Alsgor Crimsonhorn is on the same team.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 360",
        "ATQ": "1 586",
        "DEF": "969",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = null;
