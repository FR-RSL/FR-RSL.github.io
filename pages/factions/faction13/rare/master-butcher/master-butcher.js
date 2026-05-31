const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Mash",
          description: `Attacks 1 enemy. Has a 30% chance of placing a [Provoke] debuff for 1 turn.`,
          damage: "4.3*ATK",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +5%", "Level 5: Damage +5%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Barking Orders",
          description: `Places a [Provoke] debuff on the target enemy for 2 turns. Places a 15% [Increase C. RATE] buff on all allies for 2 turns. Places a 25% [Increase ATK] buff on all allies for 2 turns.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Heat Exchange [P]",
          description: `When attacked, heals all allies equal to the amount of damage taken.<br>[Does not work against Bosses.]<br><br><br>Heal Multiplier: Damage Dealt`,
          cooldown: 3,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: true
        },
        {
          img: "assets/passif1.webp",
          name: "Pyre [P]",
          description: `Revives a random ally with full HP when this Champion is killed.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 495",
        "ATQ": "848",
        "DEF": "947",
        "VIT": "100",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "0"
      },
};

const aura = null;
