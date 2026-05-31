const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Spirits of Spite",
          description: `Attacks 1 enemy. Has a 50% chance of placing a [Block Active Skills] debuff for 2 turns.`,
          damage: "0.18*HP",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Dead Stop",
          description: `Attacks 1 enemy. Puts the target's skills on cooldown. Also places a [Block Buffs] debuff for 2 turns.<br><br>If there are any enemy Champions that share the same Affinity as the initial target, also puts all their skills on cooldown and places a [Block Buffs] debuff on them for 2 turns.`,
          damage: "0.27*HP",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Ghost Rage",
          description: `Attacks all enemies. Has a 75% chance of removing all buffs. <br><br>Also has a 75% chance of decreasing all enemies' Turn Meters by 20%. Decreases each enemy's Turn Meter by an additional 10% for each buff removed.`,
          damage: "0.2*HP",
          cooldown: 5,
          levelInfo: ["Level 2: Buff/Debuff Chance +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +15%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Spurned by Death [P]",
          description: `Prevents this Champion's death and keeps them alive on 1 HP when hit by a fatal hit.<br><br>If this skill prevents this Champion's death, heals them by 30% of their MAX HP, fills their Turn Meter by 30%, and places a [Shield] buff on them equal to 30% of their MAX HP for 2 turns.<br><br>Will not prevent this Champion's death if they are under a [Heal Reduction] debuff.<br><br><br>Shield Multiplier: 0.3*HPHeal Multiplier: 0.3*HP`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "22 305",
        "ATQ": "881",
        "DEF": "1 211",
        "VIT": "106",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Increases Ally ACC in All Battles by 60`,
};
