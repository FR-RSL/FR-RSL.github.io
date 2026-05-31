const championData = {
  type: "Soutien",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Firecracker",
          description: `Attacks 1 enemy. Heals this Champion by 10% of their MAX HP. If any Timits are on the same team, heals all of them by the same amount.<br><br><br>Heal Multiplier: 0.1*HP`,
          damage: "4.7*ATK",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Heal +10%", "Level 4: Damage +10%", "Level 5: Heal +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Back With A Bang",
          description: `Revives all dead allies with 50% HP and 50% Turn Meter, then places a 30% [Increase C. RATE] buff and a 30% [Increase C. DMG] buff on them for 2 turns. <br><br>If Timit the Fool is on the same team and dead, revives them with full HP and a full Turn Meter. <br><br>If Timit the Fool is on the same team and alive, resets the cooldown and instantly activates their Kegs of Dread skill.`,
          cooldown: 6,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Royal Flush",
          description: `Fills the Turn Meter of all allies by 20%. <br><br>Also removes two random debuffs from each ally. If Timit the Fool is on the same team, removes all debuffs from all allies. <br><br>Then, places a [Block Debuffs] buff on all allies for 1 turn.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Dynamic Duo [P]",
          description: `All Turn Meter reduction effects from enemies are decreased by 50% when used against this Champion. <br><br>If Timit the Fool is on the same team, this Champion is immune to Turn Meter reduction effects from enemies. If an enemy tries to decrease this Champion's Turn Meter when Timit the Fool is on the same team, fills this Champion's Turn Meter by the same percentage instead.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "19 650",
        "ATQ": "947",
        "DEF": "1 321",
        "VIT": "112",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "40",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Increases Ally SPD in all Battles by 19%`,
};
