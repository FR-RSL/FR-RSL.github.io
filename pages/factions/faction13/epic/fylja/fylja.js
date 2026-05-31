const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Elders' Judgment",
          description: `Attacks 1 enemy 2 times. Destroys the target’s MAX HP by 10% of the damage inflicted. <br><br>Cannot destroy a single enemy’s MAX HP by more than 50%.`,
          damage: "1.7*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Crushing Eternity",
          description: `Attacks 1 enemy. Has a 75% chance of fully depleting the target’s Turn Meter.`,
          damage: "6.5*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Buff/Debuff Chance +10%", "Level 3: Buff/Debuff Chance +15%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Righteous Evocation",
          description: `Attacks all enemies. Fills this Champion’s Turn Meter by 15% and heals them by 15% of the damage inflicted if this attack is critical.<br><br><br>Heal Multiplier: 0.15*Damage Dealt`,
          damage: "3.5*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Heal +10%", "Level 4: Damage +10%", "Level 5: Heal +10%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Boonchant [P]",
          description: `If this Champion has 2 or fewer buffs at the start of the turn, places a 50% [Increase ATK] buff and a 30% [Increase C. DMG] buff on this Champion for 1 turn.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "14 535",
        "ATQ": "1 310",
        "DEF": "1 024",
        "VIT": "104",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
