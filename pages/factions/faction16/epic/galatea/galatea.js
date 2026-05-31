const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Pride Strike",
          description: `Attacks 1 enemy. Places an extra hit if the target is under a [Decrease DEF] debuff. Decreases the target's Turn Meter by 10%.`,
          damage: "4*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Apex Slice",
          description: `Attacks 1 enemy. Places a [Block Revive] debuff if the target is killed. Fills this Champion's Turn Meter by 30%.`,
          damage: "6.3*ATK",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Aspirant of Theosomi",
          description: `Attacks all enemies. Will ignore 15% of the target's DEF if they are Spirit Affinity. Will ignore 25% of the target's DEF if they are any other Affinity. Activates the Apex Slice skill on a random enemy whose HP was decreased by more than 50% from this skill. Occurs once per skill.`,
          damage: "3.8*ATK",
          cooldown: 6,
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Lionsguard Lessons [P]",
          description: `Before attacking, has a 25% chance of removing any [Decrease ATK] debuffs on this Champion and replacing them with their mirrored buff equivalent. Also has a 25% chance of removing any [Increase DEF] buffs on enemies and replacing them with their mirrored buff equivalent.`,
          levelInfo: ["Level 2: Buff/Debuff Chance +10%", "Level 3: Buff/Debuff Chance +15%"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "16 515",
        "ATQ": "1 321",
        "DEF": "881",
        "VIT": "97",
        "TAUX C.": "15%",
        "DÉG C.": "60%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = null;
