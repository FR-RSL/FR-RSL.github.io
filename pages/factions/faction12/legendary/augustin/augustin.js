const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Edenic Blades",
          description: `Attacks 1 enemy. <br><br>Has a 75% chance of placing a [Block Active Skills] debuff for 2 turns. Steals 5% of the target's Turn Meter for each buff on them.`,
          damage: "5.4*ATK",
          levelInfo: ["Level 2: Damage +15%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Shackle The Unjust",
          description: `Removes all buffs from all enemies. <br><br>Has a 75% chance of placing a 100% [Ensnare] debuff on all enemies for 2 turns. This debuff will ignore any [Block Debuffs] buffs on enemies under 3 or more buffs. <br><br>Also decreases the Turn Meters of all enemies by 25%. If an enemy is under 3 or more buffs, will decrease their Turn Meter by 40% instead.`,
          cooldown: 5,
          levelInfo: ["Level 2: Buff/Debuff Chance +10%", "Level 3: Buff/Debuff Chance +15%", "Level 4: Cooldown -1", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Ethereal Benediction",
          description: `Places a 50% [Increase ACC] buff for 2 turns and 1 [Intercept] stack on all allies. Also fills the Turn Meters of all allies by 25%. <br><br>Then grants an Extra Turn.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Your Eminence [P]",
          description: `Allies receive 25% less damage from enemies under [Block Damage], [Unkillable], [Veil], [Perfect Veil], or [Stone Skin] buffs. <br><br>Each time an enemy receives a buff, is healed, or has their Turn Meter filled, has a 50% chance to decrease the duration of all their buffs by 1 turn. Occurs once per skill and once per target. <br><br>If there are multiple Champions on the team with this skill, only one will activate. This skill will not activate on duplicate copies of this Champion, if this particular Champion is dead.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "21 810",
        "ATQ": "947",
        "DEF": "1 178",
        "VIT": "110",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Increases Ally SPD in all battles by 24%`,
};
