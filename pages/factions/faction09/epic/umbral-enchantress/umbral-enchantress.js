const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Essence Scepter",
          description: `Attacks 1 enemy. Damage increases as current HP decreases.`,
          damage: "(3.3+(1-Current HP %))*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Immolate",
          description: `Attacks all enemies. Has an 80% chance of placing a [Block Buffs] debuff for 3 turns.`,
          damage: "3.6*DEF",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Undying Evil",
          description: `Attacks all enemies. Has an 80% chance of placing a [Provoke] debuff for 2 turns. Places an [Unkillable] buff on this Champion for 2 turns. Places a [Block Active Skills] debuff on this Champion for 5 turns. The [Block Active Skills] debuff cannot be resisted or blocked and cannot be removed.`,
          damage: "4*DEF",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "15 360",
        "ATQ": "925",
        "DEF": "1 354",
        "VIT": "93",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = null;
