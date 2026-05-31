const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Black Hand",
          description: `Attacks 1 enemy. Has a 35% chance of placing a [Leech] debuff for 2 turns. The chance increases by 5% for each alive enemy.`,
          damage: "5.2*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Maelstrom Wrack",
          description: `Attacks all enemies. Has a 75% chance of placing a 60% [Decrease DEF] debuff for 2 turns. Also has a 50% chance of placing a [Block Buffs] debuff for 2 turns. The chance of placing the [Block Buffs] debuff increases by 5% for each alive enemy.`,
          damage: "4.8*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Buff/Debuff Chance +10%", "Level 7: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Uugo's Brew",
          description: `Removes all [Heal Reduction] debuffs from all allies, then removes 1 random debuff from all allies, then heals all allies by 20% of this Champion’s MAX HP.<br><br>If all allies are dead, revives them with 50% HP, then fills their Turn Meters by 50% instead.<br><br><br>Heal Multiplier: 0.2*HP`,
          cooldown: 6,
          levelInfo: ["Level 2: Heal +5%", "Level 3: Heal +5%", "Level 4: Heal +5%", "Level 5: Heal +5%", "Level 6: Cooldown -1", "Level 7: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Final Spite [P]",
          description: `Places a 30% [Increase SPD] buff and a [Block Damage] buff on this Champion for 1 turn whenever this Champion’s last living ally is killed.`,
          cooldown: 5,
          isPassive: true
        }
      ],
  stats: {
        "PV": "19 650",
        "ATQ": "738",
        "DEF": "1 255",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "15"
      },
};

const aura = null;
