const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Crystal Flesh",
          description: `Attacks 1 enemy. Heals by 15% of the damage inflicted if this Champion has 50% HP or less. Fills this Champion’s Turn Meter by 15% if he has more than 50% HP.<br><br><br>Heal Multiplier: 0.15*Damage Dealt`,
          damage: "0.25*HP",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Emerald Curse",
          description: `Attacks 1 enemy.<br>Inflicts bonus damage equal to the difference in HP percentage levels between this Champion and the target (+1% damage for every 1% difference).<br>Inflicts bonus damage equal to the difference in number of buffs on this Champion and the target (+10% damage per buff).`,
          damage: "0.35*HP",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Boon Subversion",
          description: `Attacks all enemies. Has an 80% chance of stealing 2 random buffs before attacking. Places an extra hit on enemies that have any buffs left.`,
          damage: "0.2*HP",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Damage +10%", "Level 7: Buff/Debuff Chance +10%", "Level 8: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Diamond Skin [P]",
          description: `[Passive Effect]<br><br>Places a [Block Damage] buff on this Champion for 1 turn at the start of each Round. <br><br>[Active Effect]<br><br>Blocks incoming damage and places a [Block Damage] buff on this Champion for 1 turn when they receive a hit that would drop their HP below 30%.`,
          cooldown: 4,
          isPassive: true
        }
      ],
  stats: {
        "PV": "21 480",
        "ATQ": "936",
        "DEF": "1 211",
        "VIT": "98",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "80",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/hp.webp",
  description: `Increases Ally HP in All Battles by 30%`,
};
