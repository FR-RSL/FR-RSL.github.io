const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Brutal Verdict",
          description: `Attacks 1 enemy. Heals this Champion by 10% of their MAX HP. Grants an Extra Turn if this attack kills an enemy.<br><br><br>Heal Multiplier: 0.1*HP`,
          damage: "3.3*ATK",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Damage +10%", "Level 5: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Gore Feast",
          description: `Attacks all enemies. After attacking, this Champion sacrifices HP equal to 50% of their MAX HP, then places a 15% [Continuous Heal] buff on all allies for 2 turns.<br><br>The HP sacrifice will happen even if it kills this Champion.`,
          damage: "3.2*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Last Rites",
          description: `Sacrifices HP equal to 50% of this Champion's MAX HP, then equalizes HP levels with the target enemy. Then, grants an Extra Turn. <br><br>The HP levels of both this Champion and the target enemy will be brought down to the level of the one with the lowest HP.<br>[Does not work against Bosses. This Champion cannot be killed by this Skill.]`,
          cooldown: 7,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Headsman's Return [P]",
          description: `Revives this Champion with 50% HP and full Turn Meter when dead if all allies are alive.<br><br>Does not work if there are multiple Nogdars on the team or if there are 3 or fewer total Champions on the team.`,
          cooldown: 1,
          isPassive: true
        }
      ],
  stats: {
        "PV": "12 060",
        "ATQ": "1 696",
        "DEF": "1 079",
        "VIT": "96",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Increases Ally ATK in All Battles by 33%`,
};
