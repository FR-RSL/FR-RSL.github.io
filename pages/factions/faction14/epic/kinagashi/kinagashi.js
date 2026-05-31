const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Leaping Sword Art",
          description: `Attacks 1 enemy 2 times. Each hit has a 30% chance of decreasing the target’s Turn Meter by 10%.`,
          damage: "1.95*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "United Front",
          description: `Teams up with a random ally to attack a single enemy. Also fills the Turn Meters of all allies by 15%.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Recall From Death",
          description: `Revives an ally with 50% HP and 50% Turn Meter. Also places a 60% [Increase DEF] buff on the ally for 2 turns.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "18 165",
        "ATQ": "1 079",
        "DEF": "1 013",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
