const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Bludgeon",
          description: `Attacks 1 enemy. Has a 25% chance of increasing the duration of all debuffs on the target by 1 turn.`,
          damage: "5*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Protection of Gods",
          description: `Places a [Block Debuffs] buff on all allies for 1 turn, then places a [Shield] buff on all allies equal to 30% of this Champion's MAX HP for 2 turns. Heals all allies by 25% of their MAX HP.<br><br><br>Heal Multiplier: Target Max HP*0.25Shield Multiplier: 0.3*HP`,
          cooldown: 4,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Orcish Rituals",
          description: `Attacks all enemies. Has a 70% chance to put each target's Skills on cooldown. Has a 30% chance to fully deplete each target's Turn Meter.`,
          damage: "5.5*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Buff/Debuff Chance +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "22 305",
        "ATQ": "914",
        "DEF": "1 178",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Increases Ally RES in All Battles by 80`,
};
