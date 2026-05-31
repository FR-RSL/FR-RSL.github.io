const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Bone Gladius",
          description: `Attacks 1 enemy. Has a 50% chance of transferring 1 random debuff from this Champion to the target.`,
          damage: "3.9*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Khafru's Command",
          description: `Attacks all enemies. Before attacking, removes 1 random debuff from all allies. Damage increases by 5% for each debuff removed. <br><br>Also heals each ally by 10% of this Champion's MAX HP if a debuff was removed from them.<br><br><br>Heal Multiplier: 0.1*HP`,
          damage: "4.1*DEF",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Goad the Living",
          description: `Places an [Unkillable] buff on this Champion for 1 turn, and a [Taunt] buff on them for 2 turns.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Nekhret's Guardian [P]",
          description: `Decreases the damage all allies receive by 10%. This Champion will receive that damage instead.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 330",
        "ATQ": "749",
        "DEF": "1 332",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = null;
