const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Rage of Saki",
          description: `Attacks 1 enemy 3 times. <br><br>The second and third hits of this skill will ignore 5% and 10% of the target's DEF respectively. The second and third hits of this skill will deal 10% and 20% more C. DMG respectively.`,
          damage: "0.1*HP",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Shadow Shinobi",
          description: `Attacks all enemies 2 times. <br><br>Each critical hit destroys the enemy's DEF by 5% (stacks up to 30%). Each critical hit also increases this Champion’s MAX HP by 5% (stacks up to 30%). <br><br>Each hit has a 75% chance of placing a [Leech] debuff for 2 turns. This debuff cannot be resisted if this Champion is under a [Veil] or a [Perfect Veil] buff.`,
          damage: "0.16*HP",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +20%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +15%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "This Is True Ninjutsu!",
          description: `Attacks all enemies. Before attacking, steals all buffs from a single target enemy. This effect cannot be resisted if this Champion is under a [Veil] or a [Perfect Veil] buff. Fills this Champion's Turn Meter by 15% for each buff stolen. <br><br>Will ignore 15% of each enemy's DEF, as well as [Shield] and [Block Damage] buffs. If this Champion is under a [Veil] or [Perfect Veil] buff, will ignore 30% of each enemy's DEF instead.`,
          damage: "0.27*HP",
          cooldown: 6,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Dimensional Tyrant [P]",
          description: `[Passive Effect]<br><br>Decreases all incoming damage by 30%. This damage is split equally among all allies, except this Champion.<br><br>Increases this Champion’s damage dealt by 15% for each dead ally.<br><br>[Active Effect]<br><br>Whenever this Champion loses 20% of their MAX HP in one attack, has a 100% chance to Evade the next attack. When this guaranteed Evade effect activates, places a [Perfect Veil] buff on this Champion for 2 turns and has a 50% chance of placing a [True Fear] debuff on all enemies for 1 turn. The [True Fear] debuff cannot be resisted.`,
          cooldown: 1,
          isPassive: true
        }
      ],
  stats: {
        "PV": "23 130",
        "ATQ": "914",
        "DEF": "1 123",
        "VIT": "103",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Ally HP in All Battles by 33%`,
};
