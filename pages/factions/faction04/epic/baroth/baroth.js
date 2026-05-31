const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Gilded Weapons",
          description: `Attacks 1 enemy 2 times. The first hit has a 20% chance of filling this Champion’s Turn Meter by 10%. The second hit has a 20% chance of decreasing the target’s Turn Meter by 10%.`,
          damage: "0.12*HP",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Splattering Hacks",
          description: `Attacks 1 enemy 2 times. The first hit places a [Shield] equal to 25% of the damage inflicted on all allies for 2 turns. The second hit heals all allies by 10% of the damage inflicted.<br><br><br>Shield Multiplier: 0.25*Damage DealtHeal Multiplier: 0.1*Damage Dealt`,
          damage: "0.17*HP",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Serpent Axes",
          description: `Attacks 1 enemy 2 times. The first hit has a 75% chance of placing a 50% [Decrease ATK] debuff for 2 turns and a 75% chance of removing any [Increase ATK] buffs from the target.<br><br>The second hit has a 75% chance of placing a 60% [Decrease DEF] debuff for 2 turns and a 75% chance of removing any [Increase DEF] buffs from the target.`,
          damage: "0.18*HP",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +15%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "20 475",
        "ATQ": "826",
        "DEF": "1 112",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = null;
