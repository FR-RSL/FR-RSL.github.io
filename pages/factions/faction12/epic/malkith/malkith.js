const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Deathplume",
          description: `Attacks 1 enemy. Has a 50% chance of stealing 1 random buff from the target.`,
          damage: "4*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Hemobomb",
          description: `Attacks all enemies. <br><br>Has a 75% chance of decreasing the duration of all enemy buffs by 1 turn. Also has a 75% chance of increasing the duration of all ally buffs by 1 turn.`,
          damage: "3.5*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Blood Transfusion",
          description: `Revives 2 random allies with 30% HP and 30% Turn Meter. <br><br>Places a [Shield] buff on all revived allies for 2 turns equal to 30% of this Champion's MAX HP.<br><br><br>Shield Multiplier: 0.3*HP`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 515",
        "ATQ": "1 079",
        "DEF": "1 123",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Increases Ally ACC in Faction Wars by 50`,
};
