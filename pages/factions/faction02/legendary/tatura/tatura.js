const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Solar Ray",
          description: `Attacks 1 enemy. Has an 80% chance of placing a 50% [Decrease ACC] debuff for 2 turns.`,
          damage: "3.8*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Wings of Shelter",
          description: `Places a [Block Debuffs] buff and a 60% [Increase DEF] buff on all allies for 2 turns.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Otherworld Breach",
          description: `Attacks all enemies. Places a [Perfect Veil] buff on all allies except this Champion for 2 turns. Also places a [Shield] buff on this Champion for 2 turns equal to 20% of the damage inflicted.<br><br><br>Shield Multiplier: 0.2*Damage Dealt`,
          damage: "4.2*DEF",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Glimmer Hide [P]",
          description: `When attacked, reflects 30% of the damage this Champion receives back to the attacker. Also has a 30% chance of placing a [Freeze] debuff on the attacker for 1 turn.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "20 145",
        "ATQ": "804",
        "DEF": "1 432",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `
Increases Ally DEF in Doom Tower by 35%`,
};
