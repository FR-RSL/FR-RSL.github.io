const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Fume Ax",
          description: `Attacks 1 enemy. Has a 75% chance of decreasing the cooldown of a random skill of the ally with the highest Turn Meter, except this Champion, by 1 turn.`,
          damage: "0.22*HP",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Slayer's Roar",
          description: `Attacks all enemies. Places a 50% [Increase ATK] buff and a 60% [Increase DEF] buff on all allies for 2 turns. Also heals all allies by 20% of this Champion's MAX HP and fills all allies' Turn Meters by 20%.<br><br><br>Heal Multiplier: 0.2*HP`,
          damage: "0.22*HP",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Mercy of the Oasis",
          description: `Revives all dead allies with 50% HP and 50% Turn Meter, then places a [Shield] buff on all revived allies for 2 turns, equal to 20% of this Champion's MAX HP. Also places a [Block Debuffs] buff on all allies for 2 turns.<br><br><br>Shield Multiplier: 0.2*HP`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Critical Juncture [P]",
          description: `Has a 75% chance of decreasing all of an ally's skill cooldowns by 1 turn whenever they are revived.<br><br>Once per turn, if an ally is killed, reduces the cooldowns of all this Champion's skills by 1 turn.`,
          levelInfo: ["Level 2: Buff/Debuff Chance +10%", "Level 3: Buff/Debuff Chance +15%"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "21 975",
        "ATQ": "848",
        "DEF": "1 266",
        "VIT": "108",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Ally HP in All Battles by 33%`,
};
