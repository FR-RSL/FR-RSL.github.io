const championData = {
  type: "Attaque",
  spells: [
        {
          img: "assets/sort1.webp",
          name: "Eternian Slash",
          description: `Attacks 1 enemy. Places an extra hit on enemies from The Corrupted. <br><br>Also fills this Champion’s Turn Meter by 10%. Fills their Turn Meter by an additional 2% for each buff on this Champion.`,
          damage: "3*ATK+0.12*HP",
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Damage +10%"],
          isPassive: false
        },
        {
          img: "assets/sort2.webp",
          name: "Luminous Cleave",
          description: `Attacks 1 enemy. Before attacking, places a 50% [Increase ATK] buff on this Champion for 2 turns. <br><br>Will ignore [Stone Skin] buffs. <br><br>If this attack kills an enemy, fills the Turn Meters of all allies by 30%.`,
          damage: "5.5*ATK+0.15*HP",
          cooldown: 5,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/sort3.webp",
          name: "I Have The Power!",
          description: `Attacks all enemies. <br><br>The damage inflicted by this skill increases by 10% for each buff placed on this Champion before this skill is used (stacks up to 500%). Resets after this skill is used.`,
          damage: "3.5*ATK+0.2*HP",
          cooldown: 4,
          levelInfo: ["Level 2: Damage +10%", "Level 3: Damage +10%", "Level 4: Cooldown -1"],
          isPassive: false
        },
        {
          img: "assets/passif1.webp",
          name: "Master of the Universe [P]",
          description: `Increases this Champion’s ATK and HP by 5% for each buff placed on this Champion (stacks up to 50%). <br><br>Places a 25% [Strengthen] buff on this Champion for 2 turns at the start of each Round. Also places a 25% [Strengthen] buff on this Champion for 2 turns whenever an enemy’s HP drops below 50% after this Champion’s attack. <br><br>This Champion is immune to [Petrification] debuffs.`,
          isPassive: true
        }
      ],
  stats: {
        "PV": "16 845",
        "ATQ": "1 465",
        "DEF": "991",
        "VIT": "104",
        "TAUX C.": "15%",
        "DÉG C.": "63%",
        "RÉS": "30",
        "PRÉ": "0"
      },
};

const aura = {
  img: "../../../../../assets/images/auras/speed.webp",
  description: `Increases Ally SPD in Arena by 28%`,
};
