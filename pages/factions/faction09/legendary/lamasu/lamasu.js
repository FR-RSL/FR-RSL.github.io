const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Zephyr of Conquest",
          description: `Attacks all enemies. Has a 50% chance of placing a 50% [Decrease ATK] debuff for 2 turns.`,
          damage: "2.7*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Dread Dominion",
          description: `Has a 75% chance to place a [Block Buffs] debuff and a [True Fear] debuff on all enemies for 2 turns. <br><br>If the target is a Boss, has a 75% chance to place a [Block Buffs] debuff and a 30% [Decrease SPD] debuff on them instead.`,
          cooldown: 4,
          levelInfo: ["Level 2: Buff/Debuff Chance +10%", "Level 3: Buff/Debuff Chance +15%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Icon of Domination",
          description: `Removes all debuffs from a single ally (except this Champion) and places 2 [Intercept] stacks on them. <br><br>Also fills the target ally’s Turn Meter by 50% and resets the cooldowns of all their skills.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Authority Manifest [P]",
          description: `This Champion is immune to [Sheep] debuffs.<br><br>Each debuff placed by this Champion decreases a target's Turn Meter by 5% and permanently decreases their RES and ACC by 10 (stacks up to 100).`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "20 805",
        "ATQ": "936",
        "DEF": "1 255",
        "VIT": "115",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Increases Ally SPD in All Battles by 24%`,
};
