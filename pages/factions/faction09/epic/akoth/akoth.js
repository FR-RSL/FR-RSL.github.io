const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Molten Punch",
          description: `Attacks 1 enemy. Has a 50% chance of placing a 30% [Decrease C. RATE] debuff for 2 turns.`,
          damage: "4*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Pyroclasm",
          description: `Attacks all enemies. Has a 20% chance of placing a [HP Burn] debuff for 2 turns. The chance of placing the debuff increases by 20% for each alive enemy.`,
          damage: "3.5*DEF",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Pyretic Release",
          description: `Attacks all enemies. Has a 50% chance of increasing the cooldowns of all skills by 2 turns on enemies under [HP Burn] debuffs. Also places a [Shield] buff equal to 20% of this Champion's MAX HP on all allies for 2 turns.<br><br>[Instantly activates this skill when this Champion is revived by Rian the Conjurer.]<br><br><br>Shield Multiplier: 0.2*HP`,
          damage: "3.5*DEF",
          cooldown: 5,
          levelInfo: ["Level 2: Buff/Debuff Chance +5%", "Level 3: Shield +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Shield +5%", "Level 6: Buff/Debuff Chance +10%", "Level 7: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Fiery Swath [P]",
          description: `Has a 10% chance of placing a [Fear] debuff on an enemy for 1 turn whenever they receive damage from a [HP Burn] debuff placed on themselves.`,
          levelInfo: ["Level 2: Buff/Debuff Chance +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Buff/Debuff Chance +5%"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "16 680",
        "ATQ": "892",
        "DEF": "1 299",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Ally HP in All Battles by 25%`,
};
