const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Wyldking Polearm",
          description: `Attacks 1 enemy. Heals all allies with less than 50% HP back to 50% of their MAX HP.<br><br><br>Heal Multiplier: 0.5*Target Max HP-Target Current HP`,
          damage: "0.26*HP",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Sacrificial Ploy",
          description: `Attacks 1 ally. The damage dealt is equal to 50% of the target’s current HP. <br><br>Then places a [Shield] buff on that ally for 2 turns. The value of the [Shield] is equal to the amount of HP that ally is missing. <br><br>Also fills that ally’s Turn Meter by an amount equal to the HP% they are missing. Finally, fills this Champion’s Turn Meter by the same amount.<br><br><br>Shield Multiplier: Target Max HP-Target Current HP`,
          damage: "0.5*Target Current HP",
          cooldown: 4,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Cackle of Blades",
          description: `Attacks all enemies. <br><br>Has a 100% chance of placing a [Provoke] debuff on all enemies for 1 turn. Also places a 25% [Strengthen] buff on all allies for 2 turns.<br><br>[Orcs Unity]<br><br>1 Faction ally:<br>This Champion is immune to [Block Active Skills] debuffs and cooldown increasing effects.<br><br>2 Faction allies:<br>Instantly activates this skill whenever an ally's HP drops below 50% and that ally is still alive. Instantly activating this skill will not place it on cooldown.<br><br>3 Faction allies:<br>[Provoke] debuffs placed by this skill cannot be resisted.`,
          damage: "0.3*HP",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Underdogs [P]",
          description: `Allies with 50% or less HP deal 30% more damage.<br><br>[Orcs Unity]<br><br>1 Faction ally:<br>Allies with 50% or less HP receive 30% less damage.<br><br>2 Faction allies:<br>Whenever an ally or enemy dies, increases the HP, ATK, DEF, and SPD of all allies by 5% (stacks up to 25%).<br><br>3 Faction allies:<br>Whenever an ally kills an enemy, grants that ally an Instant Turn. Occurs once per ally per Round.`,
          cooldown: 1,
          isPassive: true
        }
      ],
  stats: {
        "PV": "22 305",
        "ATQ": "881",
        "DEF": "1 211",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/sup-defence.webp",
  description: `Increases Ally DEF in All Battles by 33%

[Orcs only]

Increases Ally HP in All Battles by 25%`,
};
