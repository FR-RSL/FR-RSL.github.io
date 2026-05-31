const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Mash and Mangle",
          description: `Attacks 1 enemy. Has a 70% chance of applying a [Buff Spread] effect, taking 1 random buff from each ally and placing it on all allies.`,
          damage: "5.7*ATK",
          levelInfo: ["Level 2: Buff/Debuff Chance +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Grub's Up!",
          description: `Heals all allies by 20% of this Champion's MAX HP. <br><br>Places a 30% [Increase SPD] buff on all allies for 2 turns. <br><br>Also places a 15% [Continuous Heal] buff and a [Block Debuffs] buff on all allies for 2 turns.<br><br><br>Heal Multiplier: 0.2*HP`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Brothers' Generosity",
          description: `Removes all debuffs from all allies. Increases the Turn Meters of all allies by 20% plus an additional 2% for each debuff removed. <br><br>Then places a 50% [Increase ACC] buff on all allies for 2 turns.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Fill Your Bellies [P]",
          description: `Increases allies' damage dealt by 10% if they currently have less HP than their target. If an ally's HP is equal to or greater than their target's, increases their damage dealt by 20% instead.<br><br>Increases this Champion's and each ally's MAX HP by 10% every time this Champion uses an active skill (stacks up to 50%). Resets each Round. <br><br>Also increases each ally's MAX HP by 5% every time they use an active skill (stacks up to 50%). Resets each Round. Will not increase the MAX HP of Bosses.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "21 315",
        "ATQ": "958",
        "DEF": "1 200",
        "VIT": "110",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Increases Ally SPD in All Battles by 20%`,
};
