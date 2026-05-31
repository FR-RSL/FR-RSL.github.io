const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Cow the Wicked",
          description: `Attacks 1 enemy. Heals all allies by 7.5% of their MAX HP.<br><br>Also places a [True Fear] debuff for 1 turn if the target is a Champion from the Demonspawn, Undead Hordes, or Knights Revenant Factions.<br><br><br>Heal Multiplier: 0.075*Target Max HP`,
          damage: "4*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Heal +5%", "Level 4: Damage +5%", "Level 5: Heal +5%", "Level 6: Damage +10%", "Level 7: Heal +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Angelsong",
          description: `Removes all debuffs from all allies, then places a [Block Debuffs] buff and a [Revive On Death] buff on all allies for 2 turns. The [Revive On Death] buffs cannot be removed.`,
          cooldown: 4,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Heavenly Host",
          description: `Places a 30% [Increase C. RATE] buff and a 30% [Increase C. DMG] buff on all allies for 2 turns, then teams up with all allies to attack a target enemy. <br>Decreases the cooldown of this skill by 1 turn if an enemy is killed from this attack.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Fiend Warden [P]",
          description: `Allies receive 20% less damage from Champions from the Demonspawn, Undead Hordes, or Knights Revenant Factions. <br><br>Whenever an ally attacks, has a 15% chance to team up with them and join their attack. This Champion will attack with their default skill. Always joins Sicia Flametongue's attacks if they are on the same team. <br><br>Can only join an ally's attack once per turn. Cardiel will not team up on ally attacks when they counterattack or when teaming up to attack with another Champion.`,
          levelInfo: ["Level 2: Buff/Debuff Chance +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Buff/Debuff Chance +5%"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "19 650",
        "ATQ": "1 013",
        "DEF": "1 255",
        "VIT": "106",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Increases Ally SPD in All Battles by 19%`,
};
