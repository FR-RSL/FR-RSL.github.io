const championForms = {
  form1: {
    type: "Soutien",
    spells: [
        {
          img: "assets/sort1.webp",
          name: "Fetid Glaive",
          description: `Attacks all enemies. Destroys each target’s MAX HP by 3% (stacks up to 30%). <br><br>Also increases the duration of 1 random debuff on all enemies by 1 turn. This effect cannot be resisted if enemies have any [Necrosis] stacks.`,
          damage: "0.19*HP",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Voidstare",
          description: `Places a [True Fear] debuff on all enemies for 1 turn, and a 50% [Decrease ATK] debuff on all enemies for 2 turns. These effects cannot be resisted if enemies have any [Necrosis] stacks. <br><br>Then grants an Extra Turn.`,
          cooldown: 5,
          levelInfo: ["Level 2: Ignore RES +20%", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "The Unmaking",
          description: `Attacks all enemies. <br><br>Removes any [Stone Skin] buffs and replaces them with [True Fear] debuffs. [Block Debuffs] buffs will be replaced with [Block Buffs] debuffs.<br><br>Also removes any buffs positively affecting stats, and replaces them with their mirrored debuff equivalent, such as [Increase ATK] being replaced with [Decrease ATK]. Buffs such as [Continuous Heal] and [Strengthen] will be replaced with [Heal Reduction] and [Weaken] debuffs respectively. The mirrored debuffs will have the same duration as the buffs before they were replaced. <br><br>Then steals 5% of each target's Turn Meter for each buff converted into a debuff by this skill. Also decreases the Turn Meters of all enemies by 20%. <br><br>These effects cannot be resisted if enemies have any [Necrosis] stacks.`,
          damage: "0.27*HP",
          cooldown: 5,
          levelInfo: ["Level 2: Ignore RES +20%", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/meta1.webp",
          name: "Metamorph",
          description: `Transforms this Champion into their Alternate Form. Then grants an Extra Turn.`,
          cooldown: 4,
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Wrongful Existence [P]",
          description: `Whenever an enemy is killed, places one [Necrosis] stack on all other enemies. [Necrosis] stacks cannot be resisted or blocked. [Necrosis] stacks can only be removed by reviving dead allies. This effect does not work against Bosses and their minions. If there are multiple Champions on the team with this skill, this effect will only activate once. <br><br>At the start and the end of this Champion's turn, instantly activates any [Necrosis] stacks on all enemies.`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "22 140",
        "ATQ": "1 101",
        "DEF": "1 277",
        "VIT": "111",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
    aura: {
    img: "../../../../../assets/images/auras/hp.webp",
    description: `Increases Ally HP in All Battles by 35%`,
  },
  },
  form2: {
    type: "PV",
    spells: [
        {
          img: "assets/sort4.webp",
          name: "Unmaker's Blade",
          description: `Attacks 1 enemy. Places an extra hit if the target has any [Necrosis] stacks. <br><br>Also places a [Block Revive] debuff if this attack kills an enemy.`,
          damage: "HP*(0.25+ACC/10000)",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +20%"],
          isPassive: false
        },
        {
          img: "assets/sort5.webp",
          name: "Atomize",
          description: `Attacks all enemies. <br><br>Deals double damage to enemies whose ACC is lower than this Champion’s ACC. Ignores 50% of each enemy’s DEF whose ACC is equal to or higher than this Champion’s ACC.`,
          damage: "HP*(0.28+ACC/10000)",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +20%", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort6.webp",
          name: "Your Life Is Forfeit!",
          description: `Swaps HP with an enemy. If the target is a Boss, fully restores this Champion’s destroyed MAX HP and fully heals this Champion instead. <br><br>Each time this skill is used, increases this Champion’s Ignore DEF effect by 10% while in their Alternate Form (stacks up to 50%). <br><br>Then grants an Extra Turn.<br><br><br>Heal Multiplier: HP`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/meta2.webp",
          name: "Metamorph",
          description: `Transforms this Champion into their Base Form. Then grants an Extra Turn.`,
          cooldown: 4,
          isPassive: false
        },
        {
          img: "assets/passif2.webp",
          name: "Degenerator [P]",
          description: `[Passive Effect]<br><br>When this Champion dies, reflects damage equal to 50% of the fatal hit back to the attacker, including any surplus damage.<br><br>Whenever an enemy is killed, places one [Necrosis] stack on all other enemies. [Necrosis] stacks cannot be resisted or blocked. [Necrosis] stacks can only be removed by reviving dead allies. This effect does not apply against Bosses and their minions.<br><br>If there are multiple Champions on the team with this skill, only one will activate. This skill will not activate on duplicate copies of this Champion, if this particular Champion is dead. <br><br>[Active Effect]<br><br>If this Champion is about to get killed by a fatal hit, preempts that hit and instantly places a [Revive On Death] buff on them for 1 turn before the damage is taken.`,
          cooldown: 5,
          isPassive: true
        }
      ],
    stats: {
        "PV": "24 615",
        "ATQ": "991",
        "DEF": "1 222",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "20"
      },
    aura: {
    img: "../../../../../assets/images/auras/hp.webp",
    description: `Increases Ally HP in All Battles by 35%`,
  },
  },
};
