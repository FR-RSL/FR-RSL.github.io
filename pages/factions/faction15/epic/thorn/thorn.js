const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Vineblades",
          description: `Attacks 1 enemy 2 times. <br><br>Each hit has a 25% chance of placing a [Leech] debuff for 2 turns.`,
          damage: "1.7*DEF",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Horrifying Visage",
          description: `Attacks all enemies 2 times. <br><br>The first hit has a 75% chance of placing a [Fear] debuff for 1 turn. The second hit has a 75% chance of placing a 50% [Decrease ACC] debuff for 2 turns.`,
          damage: "1.9*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "One With Corruption",
          description: `Places a 60% [Increase DEF] buff on all allies for 2 turns. <br><br>Also places a [Counterattack] buff and a 50% [Increase RES] buff on this Champion for 2 turns.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Dark Sustenance [P]",
          description: `Before this Champion uses a skill to deal damage, heals this Champion. The value of the heal is proportional to this Champion’s DEF.<br><br>Heal Multiplier: 0.5*DEF`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "17 835",
        "ATQ": "727",
        "DEF": "1 387",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Increases Ally RES in All Battles by 40`,
};
