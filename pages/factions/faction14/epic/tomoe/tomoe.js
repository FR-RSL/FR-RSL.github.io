const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Stab and Grab",
          description: `Attacks 1 enemy. Has a 30% chance of stealing 1 random buff from the target.`,
          damage: "4*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Bamboozle",
          description: `Attacks all enemies. Has a 75% chance of placing a 50% [Decrease ATK] debuff for 2 turns.`,
          damage: "3.9*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Thick as Thieves",
          description: `Places a [Counterattack] buff on a target ally for 2 turns. Places a [Counterattack] buff for 3 turns instead if the ally is from the Shadowkin Faction. <br><br>Then fills the Turn Meters of all allies by 15% and places a 30% [Increase C. DMG] buff on all allies for 2 turns. <br><br>Also places a 30% [Increase C. RATE] buff for 2 turns on allies from the Shadowkin Faction.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Brethren [P]",
          description: `Increases all heals and Turn Meter fill effects by 20% when used on allies from the Shadowkin Faction. If there are multiple Champions on the team with this skill, only one will activate. This skill will not activate on duplicate copies of this Champion, if this particular Champion is dead.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "16 185",
        "ATQ": "1 024",
        "DEF": "1 200",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Increases Ally SPD in Faction Wars by 24%`,
};
