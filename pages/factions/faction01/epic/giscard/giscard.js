const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Foebreaker",
          description: `Attacks 1 enemy. Has a 50% chance of placing a 50% [Decrease ATK] debuff for 1 turn.`,
          damage: "3.65*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Lion's Roar",
          description: `Attacks all enemies. Has a 50% chance of placing a [Provoke] debuff for 1 turn. <br><br>Also places a [Shield] buff on this Champion equal to 25% of their MAX HP for 2 turns.<br><br><br>Shield Multiplier: 0.25*HP`,
          damage: "3.6*DEF",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +15%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Field of Strength",
          description: `Places a 60% [Increase DEF] buff and a 50% [Increase ATK] buff on all allies for 2 turns.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Egotist [P]",
          description: `Fills this Champion's Turn Meter by 15% whenever they are attacked by an enemy under [Provoke] debuff or [Increase ATK] buff.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "17 505",
        "ATQ": "683",
        "DEF": "1 454",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Increases Ally DEF in Faction Wars by 27%`,
};
