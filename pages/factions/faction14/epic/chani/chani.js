const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Insidious Arrow",
          description: `Attacks 1 enemy. Has a 40% chance of placing a 25% [Poison Sensitivity] debuff for 2 turns.`,
          damage: "3.4*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Damage +10%", "Level 7: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Soul Fire",
          description: `Places a 50% [Increase ACC] buff and a 50% [Increase ATK] buff on this Champion for 2 turns, then attacks 1 enemy. Places a [HP Burn] debuff for 2 turns if this attack is critical.`,
          damage: "5.5*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Damage +10%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Shower of Misery",
          description: `Attacks all enemies. Has a 50% chance of increasing the duration of all debuffs by 1 turn.`,
          damage: "4*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Buff/Debuff Chance +5%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +15%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Sureshot [P]",
          description: `Immune to [Decrease ACC] debuffs.<br><br>Increases this Champion’s C. RATE by 0.05% for every point of ACC they have.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "13 875",
        "ATQ": "1 432",
        "DEF": "947",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Increases Ally ACC in All Battles by 40`,
};
