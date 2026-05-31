const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Bejeweled Club",
          description: `Attacks 1 enemy. Has a 40% chance of decreasing the cooldown of a random ally's skill by 1 turn. Cannot decrease this Champion's cooldowns.<br><br>Also heals the ally who had their skill cooldown decreased by 10% of this Champion's MAX HP.`,
          damage: "3.8*DEF",
          levelInfo: ["Level 2: +5% Damage", "Level 3: +5% Damage", "Level 4: +10% Buff/Debuff Chance", "Level 5: +10% Buff/Debuff Chance"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Primeval Secret",
          description: `Places an [Unkillable] buff and a [Counterattack] buff on a single ally for 2 turns. Also decreases the cooldown of all that ally's skills by 2 turns. This skill's cooldown cannot be decreased or reset.`,
          cooldown: 5,
          levelInfo: ["Level 2: -1 Cooldown", "Level 3: -1 Cooldown"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Coccoon of Revival",
          description: `Revives a single ally with 50% HP and 75% Turn Meter.<br><br>Places a 50% [Increase ATK] buff and a 60% [Increase DEF] buff on that ally for 2 turns.`,
          cooldown: 6,
          levelInfo: ["Level 2: -1 Cooldown", "Level 3: -1 Cooldown"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Temporal Scholar [P]",
          description: `Whenever an enemy Champion’s passive skill activates, fills this Champion’s Turn Meter by 30%. Occurs once per turn.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "17 835",
        "ATQ": "925",
        "DEF": "1 465",
        "VIT": "101",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Increases Ally SPD in all Battles by 20%`,
};
