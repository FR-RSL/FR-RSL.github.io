const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Accursed Blades",
          description: `Attacks 1 enemy 3 times.<br><br>Each hit has a 35% chance of increasing the duration of all debuffs by 1 turn.`,
          damage: "1.3*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Master of Misery",
          description: `Attacks 1 enemy 2 times.<br><br>Each hit has a 50% chance of placing a [Block Buffs] debuff, a 50% [Decrease ATK] debuff, and a 100% [Heal Reduction] debuff for 2 turns.`,
          damage: "2.7*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Buff/Debuff Chance +15%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Vizier of Poisons",
          description: `Attacks 1 enemy.<br><br>Applies a [Debuff Spread] effect, taking 2 random debuffs from the target and placing them on all enemies.<br><br>Places a [Perfect Veil] buff on this Champion for 3 turns if the target is under 2 or more debuffs.`,
          damage: "6.6*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Unseen Assassin [P]",
          description: `Places a [Perfect Veil] buff on this Champion for 2 turns at the start of each Round.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "16 350",
        "ATQ": "1 476",
        "DEF": "1 013",
        "VIT": "101",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Increases Ally ATK in Dungeons by 34%`,
};
