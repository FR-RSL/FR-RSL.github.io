const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Soul Manacles",
          description: `Attacks 1 enemy. Has a 30% chance of placing a 30% [Decrease SPD] debuff for 2 turns.`,
          damage: "4.6*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Might of Undeath",
          description: `Places a 30% [Increase C. RATE] buff and a 60% [Increase DEF] on all allies for 2 turns. Also places a [Block Debuffs] buff on all allies for 1 turn.`,
          cooldown: 4,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Winds of Purging",
          description: `Removes all debuffs from all allies, then heals all allies by 10% of this Champion's MAX HP.<br>Heals each ally by a further 10% if 1 or more debuffs are removed from that ally. Fills each ally’s Turn Meter by 15% if 2 or more debuffs are removed from that ally.<br><br><br>Heal Multiplier: 0.1*HP`,
          cooldown: 5,
          levelInfo: ["Level 2: Heal +10%", "Level 3: Heal +10%", "Level 4: Heal +10%", "Level 5: Cooldown -1"],
          isPassive: false
        }
      ],
  stats: {
        "PV": "19 485",
        "ATQ": "1 057",
        "DEF": "947",
        "VIT": "104",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
