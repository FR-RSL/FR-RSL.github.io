const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Heartbreaker",
          description: `Attacks all enemies. Damage increases by 15% if the target has any debuffs.`,
          damage: "2.5*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Flames of Passion",
          description: `Attacks all enemies. Has a 75% chance of placing a [HP Burn] debuff for 2 turns.`,
          damage: "4*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Flameout",
          description: `Places a 50% [Increase ATK] buff on this Champion for 2 turns, then attacks 1 enemy.<br><br>Has a 50% chance of placing a [HP Burn] debuff on all enemies for 2 turns if this attack kills an enemy. This debuff cannot be resisted.`,
          damage: "6.6*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Punishing Partner [P]",
          description: `Attacks inflict 25% more damage.<br><br>Always counterattacks when attacked.<br><br>[Only available when Venus is on the same team.]`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 825",
        "ATQ": "1 520",
        "DEF": "804",
        "VIT": "107",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Increases Ally ATK in All Battles by 33%`,
};
