const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Eagle Dive",
          description: `Attacks 1 enemy. <br><br>Has a 75% chance of placing a 60% [Decrease DEF] debuff for 2 turns. This debuff cannot be resisted if this Champion is under a [Veil] or [Perfect Veil] buff.`,
          damage: "4*ATK",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff chance +10%", "Level 5: Buff/Debuff chance +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Da Vinci's Design",
          description: `Attacks all enemies. <br><br>Has a 75% chance of placing two 5% [Poison] debuffs and a 25% [Poison Sensitivity] debuff on all enemies for 2 turns. These debuffs cannot be resisted if this Champion is under a [Veil] or [Perfect Veil] buff. Instantly activates all [Poison] debuffs on enemies under 4 or more debuffs. <br><br>If any enemies are under a [Stone Skin] buff, has a 75% chance of placing 2 [Bomb] debuffs that detonate after 2 turns on them instead. These debuffs cannot be resisted if this Champion is under a [Veil] or [Perfect Veil] buff. If all enemies are under a [Stone Skin] buff, decreases each [Bomb] debuff's detonation countdown by 1 turn.`,
          damage: "4*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff chance +10%", "Level 5: Buff/Debuff chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Hidden Gun",
          description: `Attacks 1 enemy. Before attacking, steals all buffs from the target. This effect cannot be resisted if this Champion is under a [Veil] or [Perfect Veil] buff. <br><br>Will ignore 35% of the target's DEF, as well as [Shield] and [Strengthen] buffs.`,
          damage: "5*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Everything is Permitted [P]",
          description: `Whenever an enemy's HP drops below 25% after receiving damage from any Assassin, they receive additional bonus damage proportional to this Champion's ATK. This bonus damage will ignore 100% of the target's DEF and cannot be critical.`,
          isPassive: true
        },
        {
          img: "assets/passif1.webp",
          name: "Full Synchronization [P]",
          description: `Places a [Perfect Veil] buff on this Champion for 2 turns at the start of each Round. <br><br>Whenever this Champion is about to receive damage that would exceed 50% of their MAX HP, has a 35% chance of decreasing the damage received to 0 instead. <br><br>Whenever this Champion is attacked, also has a 35% chance of counterattacking.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "16 020",
        "ATQ": "1 498",
        "DEF": "1 013",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Increases Ally SPD in all battles by 19%`,
};
