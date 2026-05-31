const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Spirit Thrust",
          description: `Attacks 1 enemy. Has a 50% chance of placing a 60% [Decrease DEF] debuff for 2 turns. <br><br>If the target is a Boss, this debuff cannot be resisted.`,
          damage: "3.2*ATK",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Spirit Step Slash",
          description: `Attacks 1 enemy. Every second use of this skill in a Round will attack all enemies instead. <br><br>Will also ignore 25% of the target’s DEF. If the target is a Boss, will ignore 100% of the target’s DEF.`,
          damage: "4*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Overhead Slash",
          description: `Attacks all enemies. Before attacking, places a 30% [Increase C. DMG] buff and a 30% [Increase SPD] buff on this Champion for 2 turns.`,
          damage: "4.1*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Rathalos Mastery [P]",
          description: `Inflicts 50% more damage against targets under [HP Burn] debuffs. <br><br>Receives 25% less damage from enemies under [HP Burn] debuffs. <br><br>Every fifth skill used by this Champion deals 200% more damage.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "16 185",
        "ATQ": "1 487",
        "DEF": "1 013",
        "VIT": "105",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/attack.webp",
  description: `Increases Ally ATK in Dungeons by 30%`,
};
