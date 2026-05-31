const championData = {
  type: "PV",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Carnival Hammer",
          description: `Attacks 1 enemy 2 times. Each hit heals this Champion by 10% of their MAX HP. <br><br>If the target has no active buffs, each hit also fills this Champion’s Turn Meter by 10%.<br><br><br>Heal Multiplier: 0.1*HP`,
          damage: "0.1*HP",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Heal +10%", "Level 4: Damage +10%", "Level 5: Heal +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Test Your Strength",
          description: `Attacks all enemies. Decreases the duration of all enemy buffs by 3 turns. <br><br>If there are no enemies with active buffs, grants an Extra Turn. Always grants an Extra Turn if Kaja the Wry is on the same team, even if there are enemies with active buffs.`,
          damage: "0.25*HP",
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Kegs of Dread",
          description: `Attacks all enemies. Before attacking, places a 50% [Increase ACC] buff on all allies for 2 turns. <br><br>Places a [True Fear] debuff on all enemies for 1 turn.`,
          damage: "0.27*HP",
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Hideous Assistant [P]",
          description: `Whenever an enemy skill successfully activates while they are under a [Fear] or a [True Fear] debuff, fills Timit’s Turn Meter by 10%. <br><br>Whenever an enemy skill does not activate because they are under a [Fear] or a [True Fear] debuff, places a [Provoke] debuff on that enemy for 1 turn. This particular effect only applies when Kaja the Wry is on the same team.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "22 635",
        "ATQ": "859",
        "DEF": "1 211",
        "VIT": "99",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "45",
        "PRÉ": "20"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/acc.webp",
  description: `Increases Ally ACC in all Battles by 50`,
};
