const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Thirsty Axe",
          description: `Attacks 1 enemy. Has a 50% chance of placing a [Leech] debuff for 2 turns.`,
          damage: "3.7*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Gold-Mad Frenzy",
          description: `Sacrifices HP equal to 15% of this Champion's MAX HP, then fills this Champion's Turn Meter by 75% and places a [Shield] buff on this Champion equal to 20% of their MAX HP for 3 turns. The [Shield] buff cannot be removed.<br><br>The HP sacrifice will happen even if it kills this Champion, and will ignore [Shield] and [Block Damage] buffs.<br><br><br>Shield Multiplier: 0.2*HP`,
          cooldown: 4,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Gleam of Avarice",
          description: `Places a 50% [Increase ATK] buff on this Champion for 2 turns, then attacks 1 enemy. Has a 75% chance of placing a 25% [Weaken] debuff on the target for 2 turns.<br><br>Also has a 75% chance of placing a 60% [Decrease DEF] debuff on the target for 2 turns before attacking.`,
          damage: "6*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Buff/Debuff Chance +10%", "Level 7: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Dire Grudge [P]",
          description: `Decreases the cooldown of this Champion's Gleam of Avarice skill by 1 turn every time this Champion loses 15% HP. <br><br>The HP loss is accumulated and tracked over multiple turns, attacks, or hits, and is not affected by healing or other HP increases.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "16 680",
        "ATQ": "1 409",
        "DEF": "782",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Increases Ally ATK in Doom Tower by 35%`,
};
