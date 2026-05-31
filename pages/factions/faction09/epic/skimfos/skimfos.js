const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Growing Hunger",
          description: `Attacks 1 enemy 2 times. The first hit has a 35% chance of placing a 30% [Decrease SPD] debuff for 2 turns. The second hit has a 35% chance of decreasing the target's Turn Meter by 10%.`,
          damage: "1.85*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Curse Feeder",
          description: `Attacks all enemies. Has a 75% chance of placing a 50% [Decrease ATK] debuff for 2 turns. After attacking, transfers all debuffs except [Stun], [Freeze], [Sleep], [Fear], [True Fear], [Provoke], [Petrification] from all allies to this Champion.`,
          damage: "3.75*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Buff/Debuff Chance +10%", "Level 7: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Clutch of Woe",
          description: `Transfers all debuffs from this Champion to a target enemy, then attacks the target. Steals 100% of the target’s Turn Meter if this attack is critical.`,
          damage: "5.6*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Twisted [P]",
          description: `Heals this Champion by 5% of their MAX HP for each debuff on them at the start of each turn. <br><br>If this Champion is under 4 or more debuffs at the start of the turn, places a 50% [Increase ATK] buff and a 30% [Increase C. DMG] buff on this Champion for 2 turns.<br><br>Heal Multiplier: 0.05*Target Debuffs*Target Max HP`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "13 050",
        "ATQ": "1 432",
        "DEF": "1 002",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Increases Ally ATK in Doom Tower by 30%`,
};
