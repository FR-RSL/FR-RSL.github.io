const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Molten Pummeling",
          description: `Attacks 1 enemy. Has a 20% chance of decreasing the duration of all buffs by 1 turn.`,
          damage: "3.6*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Fearless Charge",
          description: `Places a 60% [Increase DEF] buff on all allies for 3 turns, then attacks 1 enemy. Has a 75% chance of placing a [Stun] debuff for 1 turn. Has a 75% chance of placing a [Stun] debuff for 2 turns instead if the target is under two or more buffs.`,
          damage: "5.1*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Buff/Debuff Chance +10%", "Level 7: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Battle Storm",
          description: `Attacks all enemies. Has a 50% chance of placing a [Provoke] debuff for 1 turn.<br><br>Also places a 50% [Decrease ATK] debuff on all enemies for 2 turns if Iron Brago is under an [Increase DEF] buff.`,
          damage: "3.7*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Buff/Debuff Chance +10%", "Level 7: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Bestow Strength [P]",
          description: `Increases the DEF of all allies by 10% of this Champion’s DEF.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 165",
        "ATQ": "881",
        "DEF": "1 487",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Increases Ally DEF in Doom Tower by 34%`,
};
