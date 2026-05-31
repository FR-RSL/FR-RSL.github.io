const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Frozen Caltrops",
          description: `Attacks 3 times at random. Each hit has a 40% chance of placing a [Freeze] debuff for 1 turn.`,
          damage: "1.5*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Buff/Debuff Chance +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Cryo Therapy",
          description: `Removes any [Stun], [Sleep], [Fear], [True Fear], [Freeze], [Provoke], and [Petrification] debuffs from all allies. <br><br>Then, places a 60% [Increase DEF] buff on all allies for 2 turns. <br><br>Also places a 50% [Ally Protection] buff on all allies except this Champion for 2 turns.`,
          cooldown: 5,
          levelInfo: ["Level 2: Cooldown -1", "Level 3: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Spike Blizzard",
          description: `Attacks all enemies. Has a 75% chance of placing a [Freeze] debuff for 1 turn. <br><br>Also has a 75% chance of decreasing the Turn Meter of all enemies by 30%.`,
          damage: "4.3*DEF",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Buff/Debuff Chance +10%", "Level 5: Buff/Debuff Chance +15%", "Level 6: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Abominable Snogryn [P]",
          description: `[Passive Effect]<br><br>Whenever an enemy tries to place a [Freeze] debuff on this Champion, instantly transfers it from this Champion to that enemy. <br><br>[Active Effect]<br><br>Whenever this Champion is killed, revives them with 30% HP and 30% Turn Meter, and places a [Revive On Death] buff on them for 1 turn.`,
          cooldown: 4,
          levelInfo: ["Level 2: Cooldown -1"],
          isPassive: true
        }
      ],
  stats: {
        "PV": "20 145",
        "ATQ": "804",
        "DEF": "1 432",
        "VIT": "102",
        "TAUX C.": "15%",
        "DÉG C.": "50%",
        "RÉS": "50",
        "PRÉ": "10"
      },
};

const aura = null;
