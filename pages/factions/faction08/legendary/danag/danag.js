const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Shatter Confidence",
          description: `Attacks 1 enemy 2 times. Each hit has a 30% chance of placing a 60% [Decrease DEF] debuff for 2 turns. The chance increases to 50% if the target is under a [Fear] or [True Fear] debuff.`,
          damage: "1.9*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Bane of Elves",
          description: `Attacks all enemies. Has a 75% chance of placing a 50% [Decrease ACC] debuff for 2 turns and a [True Fear] debuff for 1 turn. Champions from the High Elf and Dark Elf Factions cannot resist these debuffs.`,
          damage: "4.2*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Battle Flow",
          description: `Attacks 1 enemy. Will ignore [Shield] buffs. <br><br>Decreases the cooldown of the Battle Flow skill by 2 turns, fills this Champion's Turn Meter by 30%, and places a 30% [Increase C. DMG] buff on this Champion for 2 turns if this attack kills an enemy.`,
          damage: "5.9*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Healthy Grudge [P]",
          description: `Heals this Champion by 50% of their MAX HP every time this Champion kills an enemy. <br><br>Also grants an Extra Turn every time this Champions kills an enemy from the High Elf or Dark Elf Factions.<br><br>Heal Multiplier: 0.5*HP`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "17 010",
        "ATQ": "1 487",
        "DEF": "958",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = null;
