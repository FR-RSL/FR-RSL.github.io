const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Red River",
          description: `Attacks 1 enemy. Has a 40% chance of placing a [Leech] debuff for 2 turns.`,
          damage: "3.2*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Damage +5%", "Level 7: Buff/Debuff Chance +5%", "Level 8: Damage +5%", "Level 9: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Rushing Death",
          description: `Attacks all enemies. Has a 50% chance of placing a 50% [Decrease ATK] debuff for 2 turns.`,
          damage: "4*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Buff/Debuff Chance +10%", "Level 7: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Oni Icon",
          description: `Places a 60% [Increase DEF] buff on all allies for 2 turns and a 15% [Continuous Heal] buff on all allies for 1 turn.`,
          cooldown: 4,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Spirit Touched [P]",
          description: `Removes 1 random debuff from this Champion at the start of each turn. Will remove [Stun], [Sleep], [Freeze], [Fear], [True Fear], [Provoke], [Petrification] debuffs before other debuffs.`,
          cooldown: 3,
          isPassive: true
        }
      ],
  stats: {
        "PV": "17 505",
        "ATQ": "760",
        "DEF": "1 376",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Increases Ally DEF in All Battles by 25%`,
};
