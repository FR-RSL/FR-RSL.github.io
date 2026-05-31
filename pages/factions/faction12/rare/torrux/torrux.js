const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Festering Claymore",
          description: `Attacks 1 enemy. Has a 35% chance of placing a [Leech] debuff for 2 turns.`,
          damage: "3.3*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Putrescent Cut",
          description: `Attacks all enemies. Before attacking, places a 30% [Increase DEF] buff on all allies for 2 turns. <br><br>Has a 45% chance of placing a [Provoke] debuff for 1 turn.`,
          damage: "3.5*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Buff/Debuff Chance +5%", "Level 7: Buff/Debuff Chance +10%", "Level 8: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Bladebreaker [P]",
          description: `[Active Effect]<br><br>Places a [Block Damage] buff on this Champion for 1 turn if the incoming damage exceeds 20% of this Champion’s MAX HP. <br><br>[Passive Effect]<br><br>Counterattacks when hit by an enemy under a [Provoke] debuff.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 030",
        "ATQ": "749",
        "DEF": "1 277",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Increases Ally DEF in Dungeons by 25%`,
};
