const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Blockade Destroyer",
          description: `Attacks 1 enemy 2 times. <br><br>After the second hit, heals all allies by 5% of this Champion’s MAX HP. <br><br>Also has a 10% chance of granting an Extra Turn.<br><br><br>Heal Multiplier: 0.05*HP`,
          damage: "0.15*HP",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Heal +10%", "Level 4: Heal +10%", "Level 5: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Fracture Force",
          description: `Attacks 1 enemy. Has a 80% chance of placing a 60% [Decrease DEF] debuff for 2 turns. <br><br>After attacking the initial target, attacks all other enemies. Has a 80% chance of placing a 60% [Decrease DEF] debuff for 2 turns.`,
          damage: "0.5*HPMultiplier: 0.3*HP",
          cooldown: 4,
          levelInfo: ["Level 2: Buff/Debuff Chance +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Hammer Of Onungburg",
          description: `Attacks all enemies 2 times. Each hit has a 100% chance of placing a [Stun] debuff for 1 turn.<br><br>[Skinwalkers Unity]<br><br>1 Faction ally:<br>Before attacking, has a 100% chance of removing all buffs from all enemies.<br><br>2 Faction allies:<br>Fills this Champion’s Turn Meter by 15% for each [Stun] debuff placed by this skill.<br><br>3 Faction allies:<br>This skill will ignore 50% of each target’s RES.`,
          damage: "0.15*HP",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +15%", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Icon of Rebellion [P]",
          description: `When an ally uses a multi-hit skill, each subsequent hit after the first deals 15% more damage.<br><br>[Skinwalkers Unity]<br><br>1 Faction ally:<br>Whenever an ally hits an enemy, has a 10% chance of placing a [Stun] debuff for 1 turn.<br><br>2 Faction allies:<br>Whenever an ally inflicts a critical hit, fills their Turn Meter by 5%.<br><br>3 Faction allies:<br>Allies will ignore 30% of DEF against enemies under a [Stun] debuff.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "22 140",
        "ATQ": "980",
        "DEF": "1 123",
        "VIT": "104",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/sup-speed.webp",
  description: `Increases Ally SPD in Arena by 24%

[Skinwalkers only]

Increases Ally ACC in All Battles by 60`,
};
