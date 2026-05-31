const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Pickaxe Crunch",
          description: `Attacks 1 enemy.`,
          damage: "3.8*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Utter Destruction",
          description: `Attacks 1 enemy. Enemies killed by this skill cannot be revived.<br><br>Places a [Block Debuffs] buff on this Champion for 2 turns if this attack kills an enemy.`,
          damage: "5.9*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Helpless Victim",
          description: `Attacks 1 enemy. Damage increases by 15% if the target has no active buffs.`,
          damage: "6*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +10%", "Level 6: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 040",
        "ATQ": "1 277",
        "DEF": "815",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Increases Ally ATK in Dungeons by 21%`,
};
