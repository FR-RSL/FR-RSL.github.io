const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Soulsuck Tendrils",
          description: `Attacks 1 enemy. Has a 50% chance of placing a [Leech] debuff for 2 turns.<br><br>Has a 50% chance of placing a [Leech] debuff for 2 turns on 2 random enemies if this Champion has full HP.`,
          damage: "4.5*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Buff/Debuff Chance +5%", "Level 4: Buff/Debuff Chance +5%", "Level 5: Buff/Debuff Chance +5%", "Level 6: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Fateful Trickster",
          description: `Attacks 1 enemy. Has a 60% chance of stealing all buffs from the target.<br><br>Also has a 60% chance of stealing 50% of the target's max Turn Meter.`,
          damage: "5.8*ATK",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Buff/Debuff Chance +10%", "Level 4: Buff/Debuff Chance +15%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1", "Level 7: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Wild Surge",
          description: `Attacks all enemies 2 times. Each hit has a 75% chance of placing a 60% [Decrease DEF] debuff on all enemies for 2 turns. The first hit on each target also has a 75% chance of decreasing the target's Turn Meter by 10%.<br><br>The second hit on each target also has a 75% chance of placing a 25% [Weaken] debuff for 2 turns if this Champion has full HP.`,
          damage: "2.3*ATK",
          cooldown: 6,
          levelInfo: ["Level 2: Buff/Debuff Chance +10%", "Level 3: Buff/Debuff Chance +15%", "Level 4: Cooldown -1", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Enchanter [P]",
          description: `Whenever 4 or more buffs are placed on the enemy team in a single turn, places a [Shield] buff on this Champion equal to 30% of this Champion's MAX HP for 2 turns.<br><br>Shield Multiplier: 0.3*HP`,
          cooldown: 3,
          isPassive: true
        }
      ],
  stats: {
        "PV": "19 650",
        "ATQ": "1 233",
        "DEF": "1 035",
        "VIT": "104",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "30",
        "PRÉ": "20"
      },
};

const aura = null;
