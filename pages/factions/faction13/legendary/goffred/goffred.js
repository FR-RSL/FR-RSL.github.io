const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Mete Punishment",
          description: `Attacks 1 enemy 2 times. The first hit has a 50% chance of placing a 60% [Decrease DEF] debuff for 2 turns. The second hit has a 50% chance of placing a [Provoke] debuff for 1 turn.`,
          damage: "1.8*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Concuss",
          description: `Attacks all enemies. Has a 75% chance of placing a [Stun] debuff for 1 turn.`,
          damage: "3.7*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Vow of the Dwarves",
          description: `Places a 60% [Increase DEF] buff on all allies for 2 turns, then removes any [Decrease DEF] and [Weaken] debuffs from all allies.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Brass Clad [P]",
          description: `[Passive Effect]<br><br>Whenever an ally is attacked while under a [Block Damage] buff placed by this Champion, has a 75% chance of placing a [Stun] debuff on the attacker for 1 turn.<br><br>[Active Effect]<br><br>If an ally is about to get killed by a fatal hit, blocks incoming damage and places a [Block Damage] buff on them for 1 turn.`,
          cooldown: 4,
          levelInfo: ["Level 2: Buff/Debuff Chance +10%", "Level 3: Buff/Debuff Chance +15%"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "19 485",
        "ATQ": "848",
        "DEF": "1 432",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "10"
      },
};

const aura = null;
