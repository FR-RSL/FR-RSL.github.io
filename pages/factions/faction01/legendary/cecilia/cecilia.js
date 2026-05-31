const championData = {
  type: "Défense",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Snow Hurricane",
          description: `Attacks 1 enemy. Heals all allies by 10% of their MAX HP.`,
          damage: "3.6*DEF",
          levelInfo: ["Level 2: Damage +5%", "Level 3: Damage +5%", "Level 4: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Verglas Wave",
          description: `Attacks all enemies 2 times. The damage dealt by this skill increases by 5% for each ally above 50% HP.<br><br>Places a [Perfect Veil] buff on all allies except this Champion for 2 turns.`,
          damage: "2*DEF+0.05*TRG_HP",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Cooldown -1", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "Yuletide Abeyance",
          description: `Attacks all enemies. Before attacking, places a 60% [Increase DEF] buff on all allies for 2 turns.<br><br>Places a 25% [Strengthen] buff and a [Counterattack] buff on all allies for 2 turns.`,
          damage: "4.4*DEF",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Cooldown -1", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Spirit Of Giving [P]",
          description: `[Active Effect]<br><br>Places a [Revive on Death] buff for 1 turn on an ally when that ally’s HP falls below 50%. If there are multiple Champions on the team with this skill, only one will activate. This skill will not activate on duplicate copies of this Champion, if this particular Champion is dead.<br><br>[Passive Effect]<br><br>At the start of this Champion’s turn, removes one random debuff from a random ally and fills their Turn Meter by 10%.`,
          cooldown: 6,
          isPassive: true
        }
      ],
  stats: {
        "PV": "18 825",
        "ATQ": "804",
        "DEF": "1 520",
        "VIT": "107",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/defence.webp",
  description: `Increases Ally DEF in all Battle by 30%.`,
};
