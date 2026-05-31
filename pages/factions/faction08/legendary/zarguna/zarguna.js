const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Battlethrum",
          description: `Attacks 1 enemy 2 times. Heals this Champion by 5% of their MAX HP after each hit. <br><br>Each hit also has a 25% chance of placing a [Provoke] debuff on the target for 1 turn.<br><br><br>Heal Multiplier: 0.05*HP`,
          damage: "0.13*HP",
          levelInfo: ["Level 2: Heal +5%", "Level 3: Heal +10%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Clanmother",
          description: `Decreases the duration of all ally debuffs by 1 turn. <br><br>Places a 15% [Continuous Heal] buff on all allies for 2 turns. Also places a [Taunt] buff and an [Unkillable] buff on this Champion for 2 turns.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Maternal Force",
          description: `Attacks all enemies. <br><br>Places a [Shield] buff on all allies, equal to 25% of this Champion’s MAX HP, for 2 turns. <br><br>Whenever a [Shield] buff placed by this Champion expires or is removed by damage, heals that ally by 15% of their MAX HP and places a 25% [Strengthen] buff on them for 1 turn.<br><br><br>Shield Multiplier: 0.25*HP`,
          damage: "0.27*HP",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Cooldown -1", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Refuge From Pain [P]",
          description: `Allies under [Shield] buffs receive 10% less damage.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "22 800",
        "ATQ": "969",
        "DEF": "1 090",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Ally HP in All Battles by 30%`,
};
