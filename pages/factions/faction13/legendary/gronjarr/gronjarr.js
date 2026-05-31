const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Pyro Pummel",
          description: `Attacks 1 enemy 2 times. Each hit has a 30% chance of increasing the duration of [HP Burn] debuffs by 1 turn.`,
          damage: "0.1*HP",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Shatter Falsity",
          description: `Attacks 1 enemy 2 times. The first hit has a 75% chance of removing any [Block Debuffs] buffs. The second hit has a 75% chance of removing 1 random buff except [Block Debuffs] buffs.`,
          damage: "0.15*HP",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Fires of Auld",
          description: `Attacks all enemies. Has a 75% chance of placing a [HP Burn] debuff for 2 turns. Also fills this Champion’s Turn Meter by 5% for every [HP Burn] debuff the enemy team had before this attack.`,
          damage: "0.2*HP",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Keeper of Flame [P]",
          description: `[Passive Effect]<br><br>This Champion will not receive any damage from [HP Burn] debuffs. Instead, [HP Burn] debuffs will heal this Champion by 5% MAX HP each time the debuff activates. <br><br>[Active Effect]<br><br>Whenever an enemy attempts to place a [Freeze] debuff on this Champion, instantly removes it and places it on the attacker. Also places a [HP Burn] debuff on the attacker for 1 turn. The [HP Burn] debuff cannot be resisted.<br><br>Heal Multiplier: 0.05*HP`,
          cooldown: 3,
          isPassive: true
        }
      ],
  stats: {
        "PV": "22 800",
        "ATQ": "837",
        "DEF": "1 222",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "20"
      },
};

const aura = null;
