const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Guerrilla Tactics",
          description: `Attacks 1 enemy 2 times. <br><br>The ally with the highest C. DMG will team up and join the attack. The ally joining the attack will use their default skill. <br><br>The damage dealt by this Champion and the ally joining the attack will be increased by 10% for each debuff on the target (stacks up to 100%).`,
          damage: "2*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Draconic Retribution",
          description: `Attacks 1 enemy 3 times. <br><br>Each hit will ignore 10% of the target’s DEF for each debuff on the target (stacks up to 50%). Each hit will also increase this Champion’s ATK by 10% (stacks up to 50%). <br><br>Grants an Extra Turn if this attack kills an enemy.`,
          damage: "2.1*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Wrath of the Legion",
          description: `Attacks all enemies. <br><br>Before attacking, places a 50% [Increase ATK] buff and a 30% [Increase C. DMG] buff on this Champion for 2 turns.<br><br>Places an extra hit on enemies under any debuffs.<br><br>[Lizardmen Unity]<br><br>1 Faction ally:<br>Will ignore [Strengthen], [Ally Protection], and [Shield] buffs.<br><br>2 Faction allies:<br>If enemies are killed by this skill while under a debuff, places a [Block Revive] debuff on them.<br><br>3 Faction allies:<br>Deals 20% more damage for each debuff on each enemy (stacks up to 100%).`,
          damage: "4*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Survival At All Costs [P]",
          description: `Fills this Champion's Turn Meter by 5% whenever an enemy or an ally receives a debuff.<br><br>[Lizardmen Unity]<br><br>1 Faction ally:<br>Has a 25% chance to counterattack whenever an ally is attacked by an enemy under a debuff.<br><br>If there are multiple Champions on the team with this skill, this effect will only activate once.<br><br>2 Faction allies:<br>Decreases the damage this Champion receives from enemies under debuffs by 50%, and the damage allies receive from enemies under debuffs by 20%.<br><br>3 Faction allies:<br>All allies are immune to [Sheep] debuffs.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "17 175",
        "ATQ": "1 520",
        "DEF": "914",
        "VIT": "103",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/sup-attack.webp",
  description: `Increases Ally ATK in All Battles by 30%

[Lizardmen only]

Increases Ally ACC in All Battles by 40`,
};
