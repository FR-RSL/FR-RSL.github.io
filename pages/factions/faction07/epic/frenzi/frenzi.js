const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Searing Hack",
          description: `Attacks 1 enemy. Has a 50% chance of instantly activating a [HP Burn] debuff on the target.`,
          damage: "3.4*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Jaws of Flame",
          description: `Attacks 3 times at random. Each hit has a 75% chance of placing a [HP Burn] debuff for 2 turns. <br><br>Fills this Champion’s Turn Meter by 10% for each [HP Burn] debuff placed by this skill.`,
          damage: "1.8*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Vexatious Cackle",
          description: `Attacks all enemies. Has a 75% chance of placing a [Provoke] debuff for 1 turn. <br><br>Also places a 60% [Increase DEF] buff on this Champion for 2 turns.`,
          damage: "3.8*DEF",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +15%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Broiling Bulwark [P]",
          description: `Increases this Champion’s DEF by 2% each time a [HP Burn] debuff is activated on enemies (stacks up to 20%). <br><br>Resets each Round.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "16 680",
        "ATQ": "749",
        "DEF": "1 443",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Increases Ally DEF in Dungeons by 30%`,
};
