const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Sorcerous Razor",
          description: `Attacks 1 enemy.<br><br>Has a 50% chance of placing a 5% [Poison] debuff for 2 turns.`,
          damage: "4.5*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Curse Eater",
          description: `Attacks 1 enemy. If this Champion is under 1 or more debuffs, this attack will ignore 30% of enemy DEF. If this Champion is under 2 or more debuffs, enemies killed by this Skill cannot be revived. If this Champion is under 3 or more debuffs, this attack is always critical. If this Champion is under 4 or more debuffs, this Champion heals by 30% of the damage inflicted. If this Champion is under 5 or more debuffs, grants an Extra Turn. Removes all debuffs from this Champion after the attack.<br><br><br>Heal Multiplier: 0.3*Damage Dealt`,
          damage: "6.2*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Ruination Ritual [P]",
          description: `Places a 2.5% [Poison] debuff on this Champion for 4 turns at the start of each turn.<br><br>Has a 70% chance of placing a 5% [Poison] debuff on a random enemy for 4 turns at the start of each turn.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "20 640",
        "ATQ": "1 101",
        "DEF": "826",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = null;
