const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Anchor Hook",
          description: `Attacks 1 enemy. Has a 15% chance of placing a [Stun] debuff for 1 turn. The chance of placing the [Stun] debuff increases by 5% for each debuff on the target.`,
          damage: "3*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Wretched Stench",
          description: `Attacks all enemies. Has an 85% chance of placing a 30% [Decrease DEF] debuff for 2 turns. Also has a 25% chance of placing a [Fear] debuff for 1 turn on enemies under [Decrease DEF] debuffs.`,
          damage: "3.64*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Cooldown -1", "Level 7: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Death Feast [P]",
          description: `Heals this Champion by 15% of their MAX HP every time this Champion or an ally kills an enemy.<br><br>Heal Multiplier: 0.15*HP`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "13 545",
        "ATQ": "1 387",
        "DEF": "738",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
