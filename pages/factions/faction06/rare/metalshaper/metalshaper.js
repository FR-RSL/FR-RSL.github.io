const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Transference Bolt",
          description: `Attacks 1 enemy. Has a 30% chance of stealing 1 random buff from the target.`,
          damage: "4*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Damage +5%", "Level 7: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Fortified Steel",
          description: `Places a [Shield] buff on all allies for 2 turns. The value of the [Shield] is proportional to this Champion Level.<br><br><br>Shield Multiplier: 850+11*HERO_LEVEL`,
          cooldown: 3,
          levelInfo: ["Level 2: Shield +5%", "Level 3: Shield +5%", "Level 4: Shield +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Rescue",
          description: `Removes all debuffs from the ally with the lowest HP, then heals them by 20% of this Champion's MAX HP. Also places a 25% [Increase DEF] buff on that ally for 3 turns.<br><br><br>Heal Multiplier: 0.2*HP`,
          cooldown: 5,
          levelInfo: ["Level 2: Heal +10%", "Level 3: Heal +10%", "Level 4: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "16 350",
        "ATQ": "859",
        "DEF": "1 079",
        "VIT": "90",
        "TAUX C.": "15%",
        "DÉG C.": "57%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Increases Ally DEF in Faction Wars by 15%`,
};
