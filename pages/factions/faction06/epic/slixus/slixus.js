const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Harmonious Strike",
          description: `Attacks 1 enemy 2 times. Each hit has a 15% chance of placing a [Stun] debuff for 1 turn.`,
          damage: "1.85*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Blades of Finality",
          description: `Attacks 1 enemy 2 times. Each hit will ignore [Shield], [Increase DEF] and [Strengthen] buffs. <br><br>Each hit also heals this Champion by 20% of the damage inflicted.<br><br><br>Heal Multiplier: 0.2*Damage Dealt`,
          damage: "2.65*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +15%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Dragon Shuriken",
          description: `Attacks all enemies. Before attacking, places a 30% [Increase C. RATE] buff and a 30% [Increase C. DMG] buff on this Champion for 2 turns.`,
          damage: "3.3*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Damage +10%", "Level 5: Cooldown -1", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Sanctified Killer [P]",
          description: `Increases this Champion’s C. DMG by 10% every time they kill an enemy (stacks up to 30%). These stacks will not reset upon death. <br><br>If this Champion’s Blades of Finality skill kills an enemy, the next skill they use will ignore 30% of the target's DEF.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "14 535",
        "ATQ": "1 454",
        "DEF": "881",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Increases Ally ATK in Arena by 28%`,
};
