const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Tiger's Greatclaws",
          description: `Attacks 1 enemy 2 times. Places a 60% [Increase DEF] buff on this Champion for 2 turns.`,
          damage: "1.8*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Fur Typhoon",
          description: `Attacks all enemies. Has a 75% chance of placing a 60% [Decrease DEF] debuff on each enemy for 2 turns before attacking. Also has a 75% chance of placing a [Stun] debuff for 1 turn after attacking.`,
          damage: "4.3*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +15%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Felid Fleetness",
          description: `Places a 25% [Strengthen] buff and a 30% [Increase SPD] buff on all allies for 2 turns. Also places a [Perfect Veil] buff on this Champion for 2 turns.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Art of Stealth [P]",
          description: `At the start of each turn, places a [Perfect Veil] buff for 1 turn on the ally with the highest ATK. <br><br>Inflicts 20% more damage against targets whose DEF is lower than this Champion’s DEF.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 000",
        "ATQ": "936",
        "DEF": "1 443",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Increases Ally DEF in All Battles by 30%`,
};
