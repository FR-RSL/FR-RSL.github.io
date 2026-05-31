const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Death Roll",
          description: `Attacks 1 enemy. Has a 40% chance of placing a 50% [Decrease ATK] debuff for 2 turns.`,
          damage: "0.24*HP",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "God Beast's Boon",
          description: `Places a 25% [Strengthen] buff and a 15% [Continuous Heal] buff on all allies for 2 turns. <br><br>Also places a [Shield] buff for 2 turns equal to 25% of this Champion’s HP on allies under [Fear], [True Fear], [Freeze], [Provoke], [Sleep], or [Stun] debuffs.<br><br><br>Shield Multiplier: 0.25*HP`,
          cooldown: 4,
          levelInfo: ["Level 2: Shield +10%", "Level 3: Shield +10%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Staggering Heft",
          description: `Attacks all enemies. Has a 75% chance of placing a [Stun] debuff for 1 turn and decreasing each enemy’s Turn Meter by 30%.`,
          damage: "0.27*HP",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Soulkeeper [P]",
          description: `Whenever an enemy is revived, has a 75% chance of placing a [Stun] debuff on them for 1 turn. This effect cannot be resisted or blocked.`,
          cooldown: 1,
          levelInfo: ["Level 2: Buff/Debuff Chance +10%", "Level 3: Buff/Debuff Chance +15%"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "20 310",
        "ATQ": "837",
        "DEF": "1 387",
        "VIT": "101",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Ally HP in All Battles by 31%`,
};
