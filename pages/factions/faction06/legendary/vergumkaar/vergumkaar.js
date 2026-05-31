const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Bejeweled Bulk",
          description: `Attacks 1 enemy. Has a 35% chance of placing a [Stun] debuff for 1 turn. The chance increases by 15% for each buff on the target.`,
          damage: "5*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Honored Ancient",
          description: `Removes all [Provoke] debuffs and 1 random debuff from all allies. Places a 60% [Increase DEF] buff on all allies for 2 turns. Also places a [Shield] buff on all allies for 2 turns equal to 20% of this Champion's MAX HP.<br><br><br>Shield Multiplier: 0.2*HP`,
          cooldown: 4,
          levelInfo: ["Level 2: Shield +5%", "Level 3: Shield +5%", "Level 4: Shield +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Crushing Trample",
          description: `Attacks all enemies. Removes 1 random buff from each enemy. Has a 75% chance of removing 2 random buffs from each enemy. Also has a 75% chance of placing a 100% [Heal Reduction] debuff and a 60% [Decrease DEF] debuff for 2 turns.`,
          damage: "4.85*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +20%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +15%", "Level 5: Cooldown -1", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Saurian Stoic [P]",
          description: `Immune to [Provoke] debuffs. Fills this Champion's Turn Meter by 20% each time an enemy attempts to place a [Provoke] debuff on this Champion.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "22 140",
        "ATQ": "914",
        "DEF": "1 189",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Increases Ally RES in All Battles by 55`,
};
