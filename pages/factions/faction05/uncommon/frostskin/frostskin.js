const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Frozen Fists",
          description: `Attacks 1 enemy. Has a 20% chance of placing a [Freeze] debuff for 1 turn.`,
          damage: "3.7*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Sap Strength",
          description: `Fully depletes a target ally’s Turn Meter. Heals that ally equal to 50% of the lost Turn Meter. Heals the target by 10% if their Turn Meter is less than 10% full.<br><br><br>Heal Multiplier: 0.005*TRG_STAMINA*Target Max HP`,
          cooldown: 4,
          levelInfo: ["Level 2: Heal +10%", "Level 3: Heal +10%", "Level 4: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "14 865",
        "ATQ": "1 046",
        "DEF": "716",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
