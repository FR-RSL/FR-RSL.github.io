const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Mistress of Glamours",
          description: `Attacks 1 enemy. Places a [Perfect Veil] buff for 1 turn on the ally with the lowest HP.`,
          damage: "3*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%", "Level 6: Damage +5%", "Level 7: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Grip of Winter",
          description: `Places a 60% [Increase DEF] buff and a 15% [Continuous Heal] buff on all allies for 2 turns, then attacks all enemies under [Freeze] debuffs. Places a 25% [Weaken] debuff for 2 turns on all enemies under [Freeze] debuffs.`,
          damage: "4.3*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Icicle Barrage",
          description: `Attacks all enemies. Has an 80% chance of placing a [Freeze] debuff for 1 turn.`,
          damage: "4.6*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Damage +10%", "Level 7: Buff/Debuff Chance +10%", "Level 8: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Frostweaver [P]",
          description: `[Passive Effect] <br><br>Immune to [Freeze] debuffs. <br><br>Fills this Champion's Turn Meter by 25% every time an ally receives a [Freeze] debuff. <br><br>[Active Effect] <br><br>At the end of each enemy or ally turn, removes all [Freeze] debuffs from all allies. <br><br>If there are multiple Champions in the team with this Skill, only one will remove the [Freeze] debuffs from all allies.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1", "Level 4: Cooldown -1"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 825",
        "ATQ": "1 090",
        "DEF": "1 233",
        "VIT": "103",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/res.webp",
  description: `
Increases Ally RES in all Battles by 60`,
};
