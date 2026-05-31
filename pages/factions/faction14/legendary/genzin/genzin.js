const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Flowing Cuts",
          description: `Attacks 1 enemy 3 times. Each hit fills this Champion's Turn Meter by 6%.`,
          damage: "1.3*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Steel Parting",
          description: `Attacks all enemies. Has a 75% chance of placing a 60% [Decrease DEF] debuff for 2 turns. Each critical hit fills this Champion’s Turn Meter by 10%.`,
          damage: "3.8*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Fated Vengeance",
          description: `Attacks 1 enemy. Will ignore [Unkillable] buffs and [Shield] buffs. Fills this Champion’s Turn Meter by 30%. <br>Fills this Champion’s Turn Meter by 60% instead if the target has 50% HP or less after this attack. Also decreases the cooldown of the Steel Parting and Fated Vengeance skills by 1 turn if this attack kills an enemy.`,
          damage: "5.5*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Bushido [P]",
          description: `Increases this Champion’s SPD by 10 and RES by 50 if the number of Champions on this Champion’s team is equal to or lower than the number of enemies on the enemy team.<br><br>[This effect always works when fighting Bosses.]`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "17 505",
        "ATQ": "1 553",
        "DEF": "859",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
