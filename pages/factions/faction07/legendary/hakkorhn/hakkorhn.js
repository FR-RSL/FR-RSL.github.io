const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Inhuman Force",
          description: `Attacks 1 enemy. Has a 40% chance of placing a [Stun] debuff for 1 turn.`,
          damage: "0.2*HP",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Rallying Bellow",
          description: `Removes all debuffs from all allies, then places a [Block Debuffs] buff on all allies for 2 turns. Heals all allies by 15% of this Champion's HP. Heals each ally by an extra 10% of this Champion's MAX HP for each debuff removed from them.<br><br><br>Heal Multiplier: 0.15*HP+(0.1*HP*unappliedStatusEffectsCount)`,
          cooldown: 3,
          levelInfo: ["Level 2: Heal +5%", "Level 3: Heal +5%", "Level 4: Heal +5%", "Level 5: Heal +5%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Blood Offering",
          description: `Attacks all enemies.<br><br>Places a [Shield] buff on all allies for 2 turns. The value of the [Shield] is equal to 20% of the damage dealt.<br><br><br>Shield Multiplier: 0.2*Damage Dealt`,
          damage: "0.28*HP",
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "23 790",
        "ATQ": "848",
        "DEF": "1 145",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Ally HP in Dungeons by 33%`,
};
