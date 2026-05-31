const championForms = {
  form1: {
    type: "Soutien",
    spells: [
        {
          img: "assets/sort1.webp",
          name: "Hypnotic Bladework",
          description: `[Active Effect]<br><br>Attacks 1 enemy.<br><br>Places a [Sleep] debuff on the target for 1 turn.<br><br>[Passive Effect]<br><br>Instantly activates this skill against the enemy with the highest Turn Meter whenever an enemy's Turn Meter is increased by a skill. Occurs once per turn.`,
          damage: "4*ATK",
          levelInfo: ["Level 2: +20% Ignore RES"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Perfection In Motion",
          description: `Attacks all enemies 2 times.<br><br>Each hit steals all buffs from all enemies.<br><br>Then applies a [Buff Spread] effect, taking all buffs from this Champion and placing them on all allies.`,
          damage: "2.2*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: +20% Ignore RES", "Level 3: -1 Cooldown"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Sneer of Disdain",
          description: `Attacks all enemies 2 times.<br><br>Each hit increases the cooldown of 1 of each enemy’s skills to the maximum. Also decreases the Turn Meters of all enemies by 30%.<br><br>Then grants an Extra Turn.`,
          damage: "2.2*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: +20% Ignore RES", "Level 3: -1 Cooldown"],
          isPassive: false
        },
        {
          img: "assets/meta1.webp",
          name: "Metamorph",
          description: `Transforms this Champion into their Alternate Form.<br><br>Then grants an Extra Turn.`,
          cooldown: 4,
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Is That... It? [P]",
          description: `This Champion receives no damage when attacked by enemies, including Bosses and their minions, out of their active turn.<br><br>All allies except this Champion deal 3% more damage for each enemy skill that has had its cooldown increased by this Champion (stacks up to 25%). If there are multiple Champions on the team with this skill, only one will activate. This skill will not activate on duplicate copies of this Champion, if this particular Champion is dead.`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "23 790",
        "ATQ": "1 046",
        "DEF": "1 222",
        "VIT": "113",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
    aura: {
    img: "../../../../../assets/images/auras/speed.webp",
    description: `Increases Ally SPD in Arena by 33%`,
  },
  },
  form2: {
    type: "Attaque",
    spells: [
        {
          img: "assets/sort4.webp",
          name: "Wrath of Superiority",
          description: `[Active Effect]<br><br>Attacks 1 enemy 3 times. Will ignore [Block Damage] and [Unkillable] buffs.<br><br>[Passive Effect]<br><br>Instantly activates this skill against an enemy whenever that enemy receives a [Block Damage] or [Unkillable] buff, or have their death prevented by themselves or allies. Occurs once per turn.`,
          damage: "1.5*ATK",
          levelInfo: ["Level 2: +20% Damage"],
          isPassive: false
        },
        {
          img: "assets/sort5.webp",
          name: "Pinions of Wrath",
          description: `Attacks all enemies 2 times. Before attacking, swaps HP with a target enemy.<br><br>For this skill, increases this Champion’s ATK and decreases all enemies’ DEF by a percentage equal to the percentage of HP swapped.`,
          damage: "2.5*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: +20% Damage", "Level 3: -1 Cooldown"],
          isPassive: false
        },
        {
          img: "assets/sort6.webp",
          name: "You Will Weep",
          description: `Attacks all enemies 2 times. Will ignore 25% of the target’s DEF.<br><br>Before attacking decreases the value of any [Stone Skin], [Shield], and [Magma Shield] buffs by 75%. This effect cannot be resisted if target has any skill on cooldown.<br><br>Places a protected [Shield] buff on this Champion for 2 turns. The value of the [Shield] is proportional to this Champion’s ATK.`,
          damage: "2.1*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: +20% Damage", "Level 3: -1 Cooldown"],
          isPassive: false
        },
        {
          img: "assets/meta2.webp",
          name: "Metamorph",
          description: `Transforms this Champion into their Base Form.<br><br>Then grants an Extra Turn.`,
          cooldown: 4,
          isPassive: false
        },
        {
          img: "assets/passif2.webp",
          name: "Behold My Majesty [P]",
          description: `This Champion’s attacks are always critical against enemies that have any skills on cooldown.<br><br>This Champion’s skills deal 3% more damage for each turn of cooldown remaining on all enemy skills.`,
          isPassive: true
        }
      ],
    stats: {
        "PV": "18 495",
        "ATQ": "1 652",
        "DEF": "969",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
    aura: {
    img: "../../../../../assets/images/auras/speed.webp",
    description: `Increases Ally SPD in Arena by 33%`,
  },
  },
};
