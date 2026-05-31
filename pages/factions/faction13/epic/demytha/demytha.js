const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Fires of Old",
          description: `Attacks 1 enemy 2 times. Each hit places a [Shield] buff for 2 turns, equal to 10% of this Champion's MAX HP, on the ally with the lowest HP (except this Champion).<br><br><br>Shield Multiplier: 0.1*HP`,
          damage: "3.2*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Shield +5%", "Level 4: Damage +5%", "Level 5: Shield +5%", "Level 6: Damage +5%", "Level 7: Shield +5%", "Level 8: Damage +5%", "Level 9: Shield +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Light of the Deep",
          description: `Increases the duration of all ally buffs by 1 turn, then decreases the duration of all ally debuffs by 1 turn.<br><br>Also heals all allies by 2.5% of their MAX HP. Heals by a further 2.5% MAX HP for each turn added to or removed from the duration of buffs and debuffs by this skill.<br><br><br>Heal Multiplier: (0.025*Target Max HP)+((0.025*Target Max HP)*(Total Duration Increased+totalDecreasedTurnsCountBySkill))`,
          cooldown: 4,
          levelInfo: ["Level 2: Heal +5%", "Level 3: Heal +5%", "Level 4: Heal +5%", "Level 5: Heal +5%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Channel the Bloodline",
          description: `Places a [Block Damage] buff on all allies for 1 turn, and a 15% [Continuous Heal] buff on all allies for 2 turns.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "18 990",
        "ATQ": "749",
        "DEF": "1 288",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Increases Ally DEF in All Battles by 20%`,
};
