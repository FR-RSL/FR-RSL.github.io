const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Blacktusk's Ax",
          description: `Attacks 1 enemy. Has a 40% chance of placing a [Stun] debuff for 1 turn. <br><br>This debuff cannot be resisted when this Champion is attacking out of their active turn.`,
          damage: "3*DEF+0.2*HP",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Admiral's Orders",
          description: `Removes all debuffs from all allies. <br><br>Then teams up with all allies to attack a single enemy. The allies joining the attack will use their default skills.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Defender of Skyiron",
          description: `Removes all buffs from a target enemy and places a [Stun] debuff on them for 2 turns.<br><br>Fills this Champion’s Turn Meter by 50%. Fills this Champion’s Turn Meter by an additional 10% for each buff removed from the target.<br><br>[Dwarves Unity]<br><br>1 Faction ally:<br>The buff removal and [Stun] debuff cannot be resisted.<br><br>2 Faction allies:<br>Resets the cooldown of this skill when an enemy is killed while under a [Stun] debuff placed by this Champion.<br><br>3 Faction allies:<br>Allies deal double damage to targets under [Stun] debuffs placed by this Champion.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Uniter of Dwarves [P]",
          description: `Allies will counterattack whenever they lose 10% or more of their MAX HP from a single hit. If there are multiple Champions on the team with this skill, only one will activate. This skill will not activate on duplicate copies of this Champion, if this particular Champion is dead.<br><br>[Dwarves Unity]<br><br>1 Faction ally:<br>Whenever an ally places a [Fear], [True Fear], [Freeze], [Provoke], [Sleep], [Stun], or [Petrification] debuff, fills that Champion’s Turn Meter by 20%. Occurs once per skill. If there are multiple Champions on the team with this skill, only one will activate. This skill will not activate on duplicate copies of this Champion, if this particular Champion is dead.<br><br>2 Faction allies:<br>Whenever an ally is attacked, has a 50% chance of placing a 50% [Decrease RES] debuff and a 30% [Decrease SPD] debuff on the attacker for 1 turn. If the ally is under [Block Damage], [Unkillable], [Ally Protection], or [Stone Skin] buffs, the chance increases to 100%. If there are multiple Champions on the team with this skill, only one will activate. This skill will not activate on duplicate copies of this Champion, if this particular Champion is dead.<br><br>3 Faction allies:<br>At the start of each Round, places a [Stone Skin] buff on all allies for 1 turn. If there are multiple Champions on the team with this skill, only one will activate. This skill will not activate on duplicate copies of this Champion, if this particular Champion is dead.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "20 640",
        "ATQ": "826",
        "DEF": "1 376",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/sup-acc.webp",
  description: `Increases Ally ACC in All Battles by 60

[Dwarves only]

Increases Ally SPD in All Battles by 15%`,
};
