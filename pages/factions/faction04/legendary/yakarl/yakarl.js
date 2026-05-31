const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Axe of Allwinter",
          description: `Attacks 1 enemy 2 times. Each hit has a 40% chance of placing a [Freeze] debuff for 1 turn.<br><br>Will ignore 25% of the target's DEF against targets under [Freeze] debuffs.`,
          damage: "1.8*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Blizzard Rider",
          description: `Attacks 1 enemy. Has a 75% chance of placing a 30% [Decrease SPD] debuff for 3 turns and a 75% chance of placing a [Freeze] debuff for 1 turn.<br> <br>Also steals 100% of the target’s Turn Meter and places a 30% [Increase SPD] buff on this Champion for 3 turns. <br><br>Will ignore 50% of the target’s DEF against targets under [Freeze] debuffs.`,
          damage: "6*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +15%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Glaciate",
          description: `Attacks all enemies. Has a 75% chance of placing a [Freeze] debuff for 1 turn. This chance increases to 100% against targets with 75% or more Turn Meter. This debuff cannot be resisted by targets with 75% or more Turn Meter.`,
          damage: "3.8*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Lord of Ice [P]",
          description: `[Passive Effect]<br> <br>Increases the damage this Champion inflicts by 10% for each Champion in battle under a [Freeze] debuff.<br><br>Also decreases the damage this Champion receives by 10% for each Champion in battle under a [Freeze] debuff.<br><br>[Active Effect]<br> <br>Places an [Unkillable] buff on this Champion for 1 turn whenever they kill an enemy under a [Freeze] debuff.`,
          cooldown: 3,
          isPassive: true
        }
      ],
  stats: {
        "PV": "16 350",
        "ATQ": "1 597",
        "DEF": "892",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Increases Ally ATK in All Battles by 33%`,
};
