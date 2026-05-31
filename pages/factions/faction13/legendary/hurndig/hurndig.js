const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Lethal Lust",
          description: `Attacks 1 enemy. Grants an Extra Turn and decreases the cooldown of the Stasis Strike skill by 2 turns if this attack kills an enemy.`,
          damage: "4*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Arcane Tempest",
          description: `Attacks all enemies. Has a 75% chance of placing a 60% [Decrease DEF] debuff and a 50% [Decrease ACC] debuff for 2 turns.`,
          damage: "4.4*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Stasis Strike",
          description: `Attacks 1 enemy. Fully depletes the target’s Turn Meter. <br><br>Will also attack all enemies if the first attack is critical. This AoE attack has a 75% chance of placing a 25% [Weaken] debuff for 2 turns. Will also place a [HP Burn] debuff for 2 turns after the attack on the enemies whose Turn Meters are below 30%.`,
          damage: "6.2*ATKMultiplier: 4*ATK",
          cooldown: 6,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1", "Level 7: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Staid [P]",
          description: `Fills this Champion's Turn Meter by 10% every time they are hit. Occurs once per hit. <br><br>Also fills this Champion's Turn Meter by 20% whenever an ally dies.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "16 020",
        "ATQ": "1 409",
        "DEF": "1 101",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Increases Ally ATK in Arena by 35%`,
};
