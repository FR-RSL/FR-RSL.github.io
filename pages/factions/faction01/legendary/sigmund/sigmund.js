const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Fairer Fight",
          description: `Attacks 1 enemy. Removes any [Shield] buffs. Also has a 50% chance of removing one random buff. Has a 75% chance instead when attacking Bosses.`,
          damage: "3.75*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Buff/Debuff Chance +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Battlefield Beacon",
          description: `Attacks all enemies 2 times. Each hit has a 50% chance of placing a [Provoke] debuff for 1 turn, and a 75% chance of placing a 50% [Decrease ATK] debuff for 2 turns.`,
          damage: "2*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Shield of the Realm",
          description: `Places a [Shield] buff on all allies for 2 turns equal to 30% of this Champion's MAX HP. Also places a 25% [Strengthen] buff on all allies for 2 turns.<br><br><br>Shield Multiplier: 0.3*HP`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Equitable [P]",
          description: `Whenever this Champion is attacked, has a 20% chance of decreasing the duration of all buffs on the attacker by 1 turn. Has a 40% chance instead when attacked by a Boss.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "20 640",
        "ATQ": "848",
        "DEF": "1 354",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Increases Ally DEF in Doom Tower by 40%`,
};
