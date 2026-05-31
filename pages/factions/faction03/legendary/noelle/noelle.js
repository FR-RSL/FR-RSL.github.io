const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Icecrack Staff",
          description: `Attacks 1 enemy. <br><br>Has an 80% chance of placing a [Block Buffs] debuff for 2 turns. <br><br>Also decreases the target's Turn Meter by 20% if they are under a [Freeze] debuff. <br><br>These effects cannot be resisted if Sir Nicholas is on the same team.`,
          damage: "5*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Invigo",
          description: `Target an ally.<br><br>If the target ally is under a [Sheep] debuff, remove it. If the target ally is not under a [Sheep] debuff, removes all debuffs from them instead. <br><br>If the target ally is not under a [Sheep] debuff, heals them by 50% of this Champion's MAX HP. Also heals all allies equal to 50% of any surplus heal. <br><br>If the target ally is Sir Nicholas, instantly activates his Goodwill skill. <br><br>Then places a 30% [Increase SPD] buff on all allies for 2 turns.<br><br><br>Heal Multiplier: 0.5*HP`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Hearthkeeper",
          description: `Revives all dead allies with 50% HP and 50% Turn Meter. <br><br>Then has a 75% chance of placing a [Freeze] debuff on all enemies for 1 turn. Will place the [Freeze] debuff even if there are no dead allies. This debuff cannot be resisted or blocked if Sir Nicholas is on the same team.`,
          cooldown: 5,
          levelInfo: ["Level 2: Buff/Debuff Chance +10%", "Level 3: Buff/Debuff Chance +15%", "Level 4: Cooldown -1", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Cryomantic Queen [P]",
          description: `Decreases the SPD of enemies under [Freeze] debuffs by 10%. <br><br>When a [Sheep] debuff expires on an ally, fills their Turn Meter by 50%. <br><br>If there are multiple Champions on the team with this skill, these effects will only activate once.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "20 805",
        "ATQ": "892",
        "DEF": "1 299",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Increases Ally SPD in Arena by 30%`,
};
