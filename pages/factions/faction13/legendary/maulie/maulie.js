const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Roast",
          description: `Attacks 1 enemy. <br><br>Damage increases by 50% if the target is under a [HP Burn] debuff.`,
          damage: "3.3*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Bar Brawl",
          description: `Places a [Provoke] debuff on all enemies for 1 turn. Has a 50% chance of placing a [Provoke] debuff for 2 turns instead. Places a 30% [Reflect Damage] buff on this Champion for 2 turns.`,
          cooldown: 4,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Cheers!",
          description: `Revives an ally with 50% HP and fills their Turn Meter by 50%. Places a [Block Damage] buff on that ally for 1 turn.`,
          cooldown: 6,
          levelInfo: ["Level 2: Heal +5%", "Level 3: Heal +10%", "Level 4: Cooldown -1", "Level 5: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Rowdy Crowd [P]",
          description: `Fills the Turn Meters of all allies by 15% when this Champion is hit. Fills the Turn Meters of all allies by 25% when this Champion is hit by a Boss.`,
          cooldown: 2,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 495",
        "ATQ": "881",
        "DEF": "1 465",
        "VIT": "107",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "80",
        "PRÉ": "10"
      },
};

const aura = null;
