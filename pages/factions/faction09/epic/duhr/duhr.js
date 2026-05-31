const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Odious Bulk",
          description: `Attacks 1 enemy. Has a 30% chance of placing a [Stun] debuff for 1 turn.`,
          damage: "4.4*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Cannibal Litany",
          description: `Places a 30% [Reflect Damage] buff on all allies for 2 turns, a 15% [Continuous Heal] buff on all allies for 1 turn, then heals all allies by 15% of their MAX HP.<br><br><br>Heal Multiplier: 0.15*Target Max HP`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Hungry for More",
          description: `Revives 2 random allies with 50% HP, then fills their Turn Meters by 50%.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "17 505",
        "ATQ": "1 068",
        "DEF": "1 068",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Increases Ally DEF in Faction Wars by 30%`,
};
