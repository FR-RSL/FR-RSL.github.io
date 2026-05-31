const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Bonebreak Boulder",
          description: `Attacks 1 enemy. Has a 20% chance of placing a [Stun] debuff for 1 turn.`,
          damage: "0.2*HP",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Eldritch Ground",
          description: `Places a 50% [Increase ATK] buff and a 60% [Increase DEF] buff on all allies for 2 turns. Also places a [Block Damage] buff for 1 turn on allies with less than 30% HP.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Runestone Blessing",
          description: `[Active Effect]<br><br>Places a [Shield] buff equal to 15% of this Champion's MAX HP on all allies for 3 turns. <br><br>[Passive Effect]<br><br>Heals each ally by 15% of this Champion's MAX HP whenever a [Shield] buff placed by this Skill expires, is removed, or is broken by an enemy attack. Allies whose [Shield] buffs are broken will also counterattack the enemy that breaks the [Shield]. When a [Shield] is broken, the heal occurs instantly before any remaining damage from the Shield-breaking attack is taken.<br><br><br>Shield Multiplier: 0.15*HP`,
          cooldown: 5,
          levelInfo: ["Level 2: Shield +5%", "Level 3: Shield +5%", "Level 4: Shield +10%", "Level 5: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "22 965",
        "ATQ": "991",
        "DEF": "1 057",
        "VIT": "107",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Ally HP in All Battles by 25%`,
};
