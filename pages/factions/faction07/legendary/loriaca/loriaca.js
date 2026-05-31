const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Deprive",
          description: `Attacks 1 enemy 2 times. Each hit has a 40% chance of stealing 1 random buff. Fills this Champion's Turn Meter by 10% for each buff stolen.`,
          damage: "2.4*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Greathoof Stampede",
          description: `Attacks all enemies. Has a 75% chance of placing a 50% [Decrease RES] debuff and a 50% [Decrease ACC] debuff for 2 turns. <br><br>Fills this Champion's Turn Meter by 10% for each debuff placed by this skill.`,
          damage: "4.1*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Buff/Debuff Chance +10%", "Level 3: Buff/Debuff Chance +15%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Dance of War",
          description: `Places a [Block Debuffs] buff and a 50% [Increase ACC] buff on all allies for 2 turns. <br><br>Also fills the Turn Meters of all allies by 20%.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Hoofbeats [P]",
          description: `Fills this Champion's Turn Meter by 5% each time an ally buff is removed, transferred, stolen, or expires.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 495",
        "ATQ": "1 123",
        "DEF": "1 222",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
};

const aura = null;
