const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Chuckling Sickles",
          description: `Attacks 1 enemy 2 times. Grants an Extra Turn if this attack kills an enemy.`,
          damage: "1.8*ATK",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Jester's Remedy",
          description: `Attacks all enemies. Has a 75% chance of placing a [Sleep] debuff on each enemy for 1 turn. Also has a 75% chance of placing 2 [Bomb] debuffs on each enemy that detonate after 2 turns.<br><br><br>Bomb Multiplier: 5*ATK`,
          damage: "3.8*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Explosive Wit",
          description: `Attacks 1 enemy 2 times. The first hit instantly detonates all [Bomb] debuffs on the target. The second hit will ignore all [Unkillable] buffs on the target.`,
          damage: "2.9*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Mad Bomber [P]",
          description: `When attacked, has a 30% chance of placing a [Bomb] debuff on the attacker that detonates after 2 turns. Occurs once per hit.<br><br>Instantly detonates all [Bomb] debuffs on all enemies whenever this Champion is killed.<br><br>Bomb Multiplier: 5*ATK`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "15 195",
        "ATQ": "1 586",
        "DEF": "980",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Increases Ally ATK in All Battles by 25%`,
};
