const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Wyrmslayer Hammer",
          description: `Attacks 1 enemy 2 times. Each hit has a 40% chance of placing a [Stun] debuff for 1 turn. Each hit will fill this Champion’s Turn Meter by 15% if the target is not under a [Stun] debuff after the hit.`,
          damage: "1.75*ATK",
          levelInfo: ["Level 2: Buff/Debuff Chance +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Dragon Rage",
          description: `Attacks 1 enemy. Has an 80% chance of decreasing the target's Turn Meter by 75%. If this skill fully depletes the target's Turn Meter, also has an 80% chance of placing a [Stun] debuff on all other enemies for 1 turn.`,
          damage: "3.5*ATK",
          cooldown: 3,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Scale Breaker",
          description: `Attacks 1 enemy. Will ignore 50% of the target’s DEF. <br><br>[Passive Effect]<br><br>Will always use this Skill instead of the default Skill when counterattacking.<br><br>This Skill will not be blocked by [Block Active Skills] debuffs.`,
          damage: "4.7*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Titan's End [P]",
          description: `Immune to [Stun] debuffs. <br><br>Deals 15% more damage to Bosses and receives 15% less damage from them.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "14 535",
        "ATQ": "1 641",
        "DEF": "969",
        "VIT": "101",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Increases Ally SPD in All Battles by 19%`,
};
