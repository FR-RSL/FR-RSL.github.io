const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Beheading Strike",
          description: `Attacks 1 enemy. Before attacking, decreases the duration of all buffs on the target by 1 turn. <br><br>Also has a 75% chance of placing a [Block Buffs] debuff for 2 turns. This debuff is protected when placed on Bosses.`,
          damage: "0.23*HP",
          levelInfo: ["Level 2: Damage +15%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Gaellen Fury",
          description: `Attacks all enemies. <br><br>Has a 75% chance of placing a [Stun] debuff for 1 turn and a 60% [Decrease DEF] debuff for 2 turns. <br><br>Decreases the Turn Meters of enemies without a [Stun] debuff by 30%.`,
          damage: "0.28*HP",
          cooldown: 5,
          levelInfo: ["Level 2: Buff/Debuff Chance +10%", "Level 3: Buff/Debuff Chance +15%", "Level 4: Cooldown -1", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Blood Of The Pact",
          description: `Removes all debuffs from all allies, then heals them by 25% of this Champion’s MAX HP. <br><br>Places a [Shield] buff, equal to 25% of this Champion’s MAX HP, and a 25% [Fortify] buff on all allies for 2 turns.<br><br><br>Heal Multiplier: 0.25*HPShield Multiplier: 0.25*HP`,
          cooldown: 6,
          levelInfo: ["Level 2: Shield +10%", "Level 3: Cooldown -1", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Freedom Or Death [P]",
          description: `For every 10 debuffs this Champion's team receives, activates the Blood Of The Pact skill. When activated in this way, the buffs placed by the Blood Of The Pact skill are protected. Does not set the Blood Of The Pact skill on cooldown. <br><br>If there are multiple Champions on the team with this skill, only one will activate. This skill will not activate on duplicate copies of this Champion, if this particular Champion is dead.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "23 460",
        "ATQ": "914",
        "DEF": "1 101",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Ally HP in All Battles by 35%`,
};
