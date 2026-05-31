const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Render Flesh",
          description: `Attacks all enemies. Has a 35% chance of instantly activating any [Poison] and [HP Burn] debuffs on each enemy.`,
          damage: "0.16*HP",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Venge-fire",
          description: `Attacks all enemies. Has a 75% chance of placing two 5% [Poison] debuffs and a [HP Burn] debuff for 2 turns.`,
          damage: "0.26*HP",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +15%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Despoiler of Anhelt",
          description: `Attacks all enemies. Before attacking, places a 50% [Increase ACC] buff on all allies for 2 turns. <br><br>Then increases the duration of all enemy debuffs by 1 turn. Also decreases the duration of all ally debuffs by 1 turn.<br><br>[Ogryn Tribes Unity]<br><br>1 Faction ally:<br>Places a 30% [Increase SPD] buff on all allies for 2 turns.<br><br>2 Faction allies:<br>Increases the duration of all enemy debuffs by 2 turns and decreases the duration of all ally debuffs by 2 turns instead.<br><br>3 Faction allies:<br>Heals all allies by 5% of this Champion’s MAX HP. Heals them by additional 2% (stacks up to 50%) for every enemy debuff that has its duration increased and every ally debuff that has its duration decreased by this skill.<br><br><br>Heal Multiplier: (0.05*HP)+((0.02*HP)*(Total Duration Increased+totalDecreasedTurnsCountBySkill))`,
          damage: "0.29*HP",
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Bonegrinder Brand [P]",
          description: `Increases each ally’s ACC by 10 for each [HP Burn] and [Poison] debuff on the enemy team. If there are multiple Champions on the team with this skill, only one will activate. This skill will not activate on duplicate copies of this Champion, if this particular Champion is dead.<br><br>[Ogryn Tribes Unity]<br><br>1 Faction ally:<br>[HP Burn] and [Poison] debuffs placed by allies deal 30% more damage.<br><br>2 Faction allies:<br>Increases damage dealt by allies by 5% for each [HP Burn] and [Poison] debuff on a target.<br><br>3 Faction allies:<br>[HP Burn] and [Poison] debuffs placed by allies cannot be removed, stolen, or transferred.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "22 470",
        "ATQ": "881",
        "DEF": "1 200",
        "VIT": "106",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/sup-hp.webp",
  description: `Increases Ally HP in All Battles by 30%

[Ogryn Tribes Only]

Increases Ally SPD in all battles by 15%`,
};
