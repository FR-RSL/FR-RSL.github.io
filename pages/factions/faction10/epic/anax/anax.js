const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Piercing Shotels",
          description: `Attacks 1 enemy 2 times. Each hit has a 30% chance of placing a 60% [Decrease DEF] debuff for 2 turns.`,
          damage: "3.2*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Deathly Ichors",
          description: `Attacks 1 enemy 2 times. Each hit has a 75% chance of placing a 50% [Decrease ACC] debuff and a 5% [Poison] debuff for 3 turns.`,
          damage: "2.8*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Buff/Debuff Chance +10%", "Level 7: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Soul Feast",
          description: `Attacks 1 enemy. Has a 75% chance of placing a 25% [Weaken] debuff for 2 turns. Heals this Champion by 50% of the damage inflicted.<br><br><br>Heal Multiplier: 0.5*Damage Dealt`,
          damage: "6*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Revenant [P]",
          description: `[Passive Effect]<br><br>Places a 60% [Increase DEF] buff on this Champion for 2 turns when their HP drops below 75%.<br><br>Places a 50% [Increase ATK] buff on this Champion for 2 turns when their HP drops below 50%.<br><br>[Active Effect]<br><br>Grants an Extra Turn when this Champion's HP drops below 10%.`,
          cooldown: 5,
          isPassive: true
        }
      ],
  stats: {
        "PV": "14 205",
        "ATQ": "1 542",
        "DEF": "815",
        "VIT": "90",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
