const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Foresight Slash",
          description: `Attacks 1 enemy. Has a 40% chance of increasing the duration of 2 random buffs on each individual ally by 1 turn.`,
          damage: "0.2*HP",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Reaping Slash",
          description: `Attacks all enemies. Places a 60% [Increase DEF] buff and a [Shield] buff on all allies for 2 turns. The [Shield] is equal to 30% of this Champion’s MAX HP. <br><br>If the target is a Boss, these buffs are protected.<br><br><br>Shield Multiplier: 0.3*HP`,
          damage: "0.22*HP",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Shield +10%", "Level 4: Shield +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Cleanser Booster",
          description: `Removes all debuffs from all allies, and places a [Block Debuffs] buff on all allies for 2 turns.<br><br>If a Boss is present in the current Round, this buff is protected.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Alatreon Divinity [P]",
          description: `Fills this Champion’s Turn Meter by 5% every time a debuff is placed on them. <br><br>Also heals this Champion by 5% of their MAX HP whenever a debuff placed on them expires or is removed.<br><br>Heal Multiplier: 0.05*HP`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "20 805",
        "ATQ": "914",
        "DEF": "1 277",
        "VIT": "110",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Increases Ally SPD in Dungeons by 30%`,
};
