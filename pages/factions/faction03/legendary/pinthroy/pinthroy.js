const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Author of Fates",
          description: `Attacks 1 enemy. Transfers 1 random debuff from this Champion to the target. Also has a 75% chance of stealing 1 random buff from the target.`,
          damage: "4.7*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Holy Word",
          description: `Places a 50% [Increase ACC] buff on all allies for 2 turns, then attacks all enemies. Places a 100% [Heal Reduction] debuff on all enemies for 2 turns. Also has a 75% chance of placing a [Block Buffs] debuff on all enemies for 2 turns. <br><br>Champions from the Demonspawn, Undead Horde, and Knights Revenant Factions cannot resist these debuffs.`,
          damage: "4.8*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +15%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Gleam of Glory",
          description: `Heals all allies by 30% of their MAX HP, then places a 60% [Increase DEF] buff on all allies for 2 turns. If 4 or more allies are alive, also places a [Shield] buff on each ally for 2 turns equal to 30% of their MAX HP.<br><br><br>Heal Multiplier: 0.3*Target Max HPShield Multiplier: 0.3*Target Max HP`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Splendor [P]",
          description: `Removes all [Decrease DEF] debuffs and [Weaken] debuffs from this Champion at the start of each turn.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "20 145",
        "ATQ": "1 057",
        "DEF": "1 178",
        "VIT": "101",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Increases Ally ACC in All Battles by 50`,
};
