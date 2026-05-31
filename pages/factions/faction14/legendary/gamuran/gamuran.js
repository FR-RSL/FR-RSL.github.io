const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Seal Scroll",
          description: `Attacks 1 enemy 2 times. Each hit has a 30% chance of placing a [Block Active Skills] debuff for 2 turns.`,
          damage: "2*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Damage +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Thief of Blood",
          description: `Attacks all enemies. Has an 80% chance of stealing all buffs from each enemy. <br><br>After stealing, applies a [Buff Spread] effect, taking all buffs from this Champion and placing them on all allies.`,
          damage: "3*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Buff/Debuff Chance +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Dread Invocation",
          description: `Can target dead or living enemies. <br> <br>If the target is dead, places [Block Revive] on them, then attacks all enemies. Each enemy will receive damage equal to 20% of the target enemy's MAX HP. If the target is a Boss' minion, the damage is equal to 20% of this Champion's MAX HP. This attack cannot be critical, and will ignore any [Shield] buffs and 100% of each target's DEF.<br> <br>If the target is alive, places a [True Fear] debuff on them for 2 turns and heals all allies by 20% of the target enemy's MAX HP. If the target is a Boss or a Boss' minion, the healing is equal to 20% of this Champion's MAX HP. The [True Fear] debuff cannot be resisted.<br><br><br>Heal Multiplier: Boss Minion: 0.2*HP or Champion: 0.2*Enemy Max HP`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Soul Charge [P]",
          description: `Revives 1 random ally with 30% HP and 30% Turn Meter each time an enemy is killed. <br><br>Revives 1 random ally with 30% HP and 30% Turn Meter each time a [Block Revive] debuff is placed on an enemy.`,
          cooldown: 2,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "19 650",
        "ATQ": "1 002",
        "DEF": "1 266",
        "VIT": "109",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = null;
