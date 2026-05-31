const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Grasscutter",
          description: `Attacks 1 enemy. Has a 50% chance of stealing 1 random buff from the target.`,
          damage: "3.8*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Quivergrass Vortex",
          description: `Attacks all enemies. Before attacking, removes all debuffs from this Champion. <br><br>Has a 75% chance of removing a random buff from all enemies.`,
          damage: "4.2*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Ax Leap",
          description: `Attacks 1 enemy. <br><br>Damage increases by 30% if this Champion has no active debuffs. Will also ignore [Unkillable] buffs if this Champion has no active debuffs.`,
          damage: "6.2*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Rippling Grass [P]",
          description: `This Champion’s ACC is increased by 50 if they have no active debuffs.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "14 205",
        "ATQ": "1 365",
        "DEF": "991",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Increases Ally ATK in Faction Wars by 30%`,
};
