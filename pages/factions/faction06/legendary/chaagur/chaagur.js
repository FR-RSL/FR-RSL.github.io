const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Stupor",
          description: `Attacks 1 enemy. Has a 50% chance of placing a [Sleep] debuff for 1 turn.`,
          damage: "3.5*ATK",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Venom Storm",
          description: `Attacks all enemies 2 times. The first hit has a 75% chance of placing a 5% [Poison] debuff for 4 turns. The second hit has a 75% chance of placing a 60% [Decrease DEF] debuff for 3 turns.`,
          damage: "1.9*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Heart Stopper",
          description: `Attacks 1 enemy, then attacks 1 time at random. If the target is under a [Poison] debuff, will ignore [Shield], [Block Damage], and [Unkillable] buffs. <br><br>Grants an Extra Turn if this attack kills an enemy. Also resets the cooldown of the Venom Storm skill if this attack kills 2 enemies.`,
          damage: "2.9*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Constant Agony [P]",
          description: `Instantly attacks enemies with the default skill whenever they receive damage from [Poison] debuffs placed by this Champion. <br><br>When hitting enemies under [Poison] debuffs, heals this Champion by 10% of the damage inflicted.<br><br>Heal Multiplier: 0.1*Damage Dealt`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "13 545",
        "ATQ": "1 542",
        "DEF": "1 134",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Increases Ally ATK in All Battles by 33%`,
};
