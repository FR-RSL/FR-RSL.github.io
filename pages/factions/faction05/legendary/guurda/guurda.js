const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Brew Mama",
          description: `Attacks 1 enemy. Has a 60% chance of applying a [Debuff Spread] effect, taking 1 random debuff from the target and placing it on all enemies under [Weaken] debuffs. <br><br>Decreases the target’s Turn Meter by 10% if they are not under any debuffs.`,
          damage: "3.5*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Rotlimb Decoction",
          description: `Attacks all enemies. Has an 80% chance of placing a 25% [Weaken] debuff for 2 turns. <br><br>After attacking, has an 80% chance of placing two 5% [Poison] debuffs for 2 turns on all enemies without [Weaken] debuffs. These [Poison] debuffs cannot be blocked or resisted.`,
          damage: "4*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Hemlock Surprise",
          description: `Has an 80% chance of removing 1 random buff from all enemies, then has an 80% chance of placing two 5% [Poison] debuffs on all enemies for 2 turns. <br><br>Also removes 2 random debuffs from all allies.`,
          cooldown: 4,
          levelInfo: ["Level 2: Buff/Debuff Chance +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Malign Tendrils [P]",
          description: `Whenever an enemy receives a debuff, their Turn Meter is decreased by 3%.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "20 640",
        "ATQ": "892",
        "DEF": "1 310",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `Increases Ally RES in Arena by 65`,
};
