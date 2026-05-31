const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Doom Flasks",
          description: `Attacks 1 enemy 2 times. <br><br>Each hit has a 25% chance of increasing the duration of all [Poison] and [HP Burn] debuffs on the target by 1 turn.`,
          damage: "2.4*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +15%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Volatile Mixture",
          description: `Attacks all enemies 2 times. <br><br>The first hit instantly activates one tick of all [Poison] and [HP Burn] debuffs on all enemies, and one tick of all [Continuous Heal] buffs on all allies. <br><br>The second hit has a 75% chance of destroying each target's MAX HP by 3% for each [Poison] and [HP Burn] debuff activated on them by this skill (stacks up to 60%). <br><br>Then fills the Turn Meters of all allies by 20%.`,
          damage: "2.2*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +15%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Cooldown -1", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Vengefire Flood",
          description: `Attacks all enemies. <br><br>Has an 80% chance of placing two 5% [Poison] debuffs on all enemies for 2 turns. If any targets are under a [HP Burn] debuff, places three 5% [Poison] debuffs and a 25% [Weaken] debuff on them for 2 turns instead. <br><br>Also places two 15% [Continuous Heal] buffs on all allies for 2 turns.`,
          damage: "4.4*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +15%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Cooldown -1", "Level 5: Buff/Debuff Chance +10%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Rigged To Blow [P]",
          description: `The damage inflicted by [Poison] and [HP Burn] debuffs will ignore [Block Damage] and [Unkillable] buffs. <br><br>Whenever allies attack enemies with destroyed MAX HP, increases the damage dealt by 10%. <br><br>If there are multiple Champions on the team with this skill, only one will activate. This skill will not activate on duplicate copies of this Champion, if this particular Champion is dead.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "20 145",
        "ATQ": "1 079",
        "DEF": "1 156",
        "VIT": "103",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Increases Ally SPD in All Battles by 20%`,
};
