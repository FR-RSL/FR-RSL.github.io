const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Superheated Hammer",
          description: `Attacks 1 enemy. Has a 45% chance of placing a 60% [Decrease DEF] debuff for 2 turns. Has a 100% chance instead if the target is under a [HP Burn] debuff.`,
          damage: "0.23*HP",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Damage +10%", "Level 7: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Percussive Pound",
          description: `Attacks all enemies. Places an extra hit on enemies without [HP Burn] debuffs. Has a 50% chance of placing a [Stun] debuff for 1 turn on enemies under [HP Burn] debuffs.`,
          damage: "0.22*HP",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Damage +10%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Fan the Flames",
          description: `Attacks 1 enemy. Applies a [Debuff Spread] effect, taking 2 random debuffs from the target and placing them on all enemies under [HP Burn] debuffs. Also increases duration of [HP Burn] debuffs on all enemies by 1 turn.<br><br>Will not spread [Fear], [True Fear], [Freeze], [Provoke], [Sleep], or [Stun] debuffs.`,
          damage: "0.37*HP",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Fleshmelter [P]",
          description: `This Champion heals by 1% of their MAX HP every time anyone in the battle takes damage from a [HP Burn] debuff.<br><br>Heal Multiplier: 0.01*HP`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "20 970",
        "ATQ": "837",
        "DEF": "1 068",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Increases Ally DEF in Doom Tower by 30%`,
};
