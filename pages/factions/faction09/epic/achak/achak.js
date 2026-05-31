const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Devour All Hope",
          description: `Attacks 1 enemy. Has a 30% chance of decreasing the duration of 1 random buff if the target is under a [HP Burn] debuff. Also has a 30% chance of decreasing the target’s Turn Meter by 15% if they are under a [Freeze] debuff.`,
          damage: "3.5*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Damage +5%", "Level 7: Buff/Debuff Chance +5%", "Level 8: Damage +5%", "Level 9: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Cannibal Might",
          description: `Places a [Block Debuffs] buff on all allies for 1 turn and a 25% [Strengthen] buff on all allies for 2 turns.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Frostfire Gale",
          description: `Attacks all enemies. Has a 70% chance of placing a [Freeze] debuff for 1 turn on enemies whose ATK is higher than their DEF. Has a 70% chance of placing a [HP Burn] debuff for 1 turn on enemies whose DEF is equal to or higher than their ATK.`,
          damage: "5.5*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Buff/Debuff Chance +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Cooldown -1", "Level 7: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Twisted Hunger [P]",
          description: `Heals all allies by 5% of their MAX HP every time an enemy under a [HP Burn] debuff gets a turn. <br><br>Fills the Turn Meters of all allies by 10% every time an enemy under a [Freeze] debuff gets a turn.<br><br>Heal Multiplier: 0.05*Target Max HP`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "17 505",
        "ATQ": "947",
        "DEF": "1 189",
        "VIT": "94",
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
