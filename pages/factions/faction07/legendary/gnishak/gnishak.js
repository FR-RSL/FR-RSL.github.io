const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Pestilent Censer",
          description: `Attacks 3 times at random. Each hit has a 40% chance of placing a [Bomb] debuff for 2 turns. <br><br>[Bomb] debuffs placed by this skill on enemies whose MAX HP is equal to or higher than 200,000 will deal double damage.<br><br><br>Bomb Multiplier: 3*ATK`,
          damage: "1.2*ATK",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Verminlord's Command",
          description: `Attacks all enemies. Has a 75% chance of placing a 50% [Decrease ATK] debuff for 2 turns. <br><br>Also has a 75% chance of decreasing the detonation countdown of all [Bomb] debuffs by 1 turn, and increasing the duration of all [Poison] debuffs by 1 turn.`,
          damage: "4.6*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +15%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Unclean Banquet",
          description: `Attacks all enemies. Has a 75% chance of placing 2 [Bomb] debuffs on each target for 2 turns, then grants an Extra Turn.<br><br>[Bomb] debuffs placed by this skill on enemies whose MAX HP is equal to or higher than 200,000 will deal double damage.<br><br><br>Bomb Multiplier: 5*ATK`,
          damage: "4.5*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +15%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Rat Plague [P]",
          description: `Every time a [Bomb] debuff placed by this Champion detonates or is removed, places two 5% [Poison] debuffs for 2 turns. These debuffs are protected.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "17 175",
        "ATQ": "1 365",
        "DEF": "1 068",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Increases Ally ATK in All Battles by 30%`,
};
