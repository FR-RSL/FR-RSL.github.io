const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Hound-Tyrant",
          description: `Attacks all enemies. This attack deals single-target damage to each target individually, rather than AoE damage. Will also ignore all [Reflect Damage] buffs and effects, [Ally Protection] buffs and effects, and [Pain Link] debuffs. <br><br>This attack also deals double damage when counterattacking if Packmaster Shy'ek is on the team.`,
          damage: "2.2*ATK",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Festering Jaw",
          description: `Attacks all enemies. Places an extra hit on enemies under 2 or more debuffs. <br><br>Has a 75% chance of placing a [Leech] debuff and a 25% [Weaken] debuff for 2 turns. These debuffs cannot be resisted if Packmaster Shy'ek is on the team.`,
          damage: "3.3*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Dominant Predator",
          description: `Attacks 1 enemy. <br><br>Will ignore 50% of the target’s DEF, as well as [Life Barrier] and [Poison Cloud] buffs, and effects that redirect attacks, damage, or debuffs to another target. Repeats this attack once if Packmaster Shy'ek is on the team.`,
          damage: "3.8*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Primal Ambition [P]",
          description: `Increases this Champion’s ATK by 5% when killing an enemy or decapitating a Hydra Head (stacks up to 25%). Increases this Champion’s ATK by 10% when killing an enemy or decapitating a Hydra Head instead if Packmaster Shy'ek is on the team (stacks up to 50%).<br><br>Instantly activates the Dominant Predator skill against a Hydra Head, when an ally is devoured by that Head, if Packmaster Shy'ek is on the team.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "14 700",
        "ATQ": "1 729",
        "DEF": "870",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Increases Ally ATK in All Battles by 30%`,
};
