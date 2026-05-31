const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Dragging Line",
          description: `Attacks 1 enemy. Has a 15% chance of placing a [Block Buffs] debuff for 2 turns.`,
          damage: "3.7*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Untraceable",
          description: `Attacks all enemies. Has a 30% chance of increasing the cooldown of a random skill on each target by 2 turns.`,
          damage: "3.8*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Hidden Paths [P]",
          description: `Places a [Perfect Veil] buff on this Champion for 1 turn whenever they kill an enemy.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "11 895",
        "ATQ": "1 288",
        "DEF": "947",
        "VIT": "95",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "10"
      },
};

const aura = null;
