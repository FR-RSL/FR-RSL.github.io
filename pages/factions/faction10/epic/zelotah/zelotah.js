const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Hypnotic Gaze",
          description: `Attacks 1 enemy. Has a 15% chance of placing a [Sleep] debuff for 1 turn.`,
          damage: "4.7*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Armored Scales",
          description: `Places a [Shield] buff on all allies equal to 20% of this Champion's MAX HP for 3 turns. Places a 15% [Continuous Heal] buff on all allies for 2 turns.<br><br><br>Shield Multiplier: HP*0.2`,
          cooldown: 4,
          levelInfo: ["Level 2: Shield +5%", "Level 3: Shield +5%", "Level 4: Shield +5%", "Level 5: Shield +5%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Horrid Dreams",
          description: `Attacks all enemies. Has a 50% chance of placing a [Sleep] debuff for 1 turn. Has a 75% chance against enemies under debuffs.`,
          damage: "5*ATK",
          cooldown: 6,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "20 640",
        "ATQ": "826",
        "DEF": "1 101",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Increases Ally RES in Arena by 70`,
};
