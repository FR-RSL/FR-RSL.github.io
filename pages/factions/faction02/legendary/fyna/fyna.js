const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Sword Through Time",
          description: `Attacks 1 enemy. Has a 50% chance of increasing the cooldown of a random skill on the target by 2 turns. When counterattacking with this skill, team up with a random ally. The ally joining the attack will use their default skill.`,
          damage: "4*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "You Will Not Falter!",
          description: `Places a [Block Debuffs] buff, a [Block Damage] buff and a [Counterattack] buff on a target ally for 2 turns. If the target of this skill is not this Champion, resets the cooldown of all of the target's skills. This skill's cooldown cannot be decreased or reset.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Exalted Lineage",
          description: `Places a 50% [Increase ATK] buff, a 30% [Increase C. RATE] buff, and a 30% [Increase C. DMG] buff on all allies for 2 turns.<br><br>[High Elves Unity]<br><br>1 Faction ally:<br>Grants an Extra Turn.<br><br>2 Faction allies:<br>Before placing buffs, removes all debuffs from all allies.<br><br>3 Faction allies:<br>Buffs placed by this skill cannot be removed.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Lead From The Front [P]",
          description: `Whenever a buff is placed on an ally, fills their Turn Meter by 3%.<br><br>[High Elves Unity]<br><br>1 Faction ally:<br>Allies deal 25% more damage when attacking out of their active turn.<br><br>2 Faction allies:<br>Whenever a buff is removed or stolen from an ally, or when it expires, fills their Turn Meter by 10%.<br><br>3 Faction allies:<br>Allies will ignore 5% of a target’s DEF for each buff on them.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 660",
        "ATQ": "1 123",
        "DEF": "1 211",
        "VIT": "113",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/sup-speed.webp",
  description: `Increases Ally SPD in All Battles by 20%

[High Elves only]

Increases Ally C.RATE in All Battles by 15%`,
};
